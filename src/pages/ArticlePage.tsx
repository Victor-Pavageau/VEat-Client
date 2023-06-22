import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import { FiChevronLeft } from "react-icons/fi";
import { Button, notification } from "antd";
import { LocalOrder } from "../api/order";
import { useMemo } from "react";
import React from "react";
import { Article } from "../api/restaurant";

function ArticlePage() {
  const { articleId } = useParams();
  const Context = React.createContext({ name: 'Default' });

  // TODO : Remove this fake data
  const fakeArticle: Article = {
    uid: "e1951e45-b10a-4256-aa24-b7d6baf8bd1d",
    name: "Big Mac",
    isUnavailable: false,
    photo: "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/big-mac-isolated.png.webp",
    description: "Le celebre burger Big Mac avec ses deux steaks, sa sauce speciale, ses oignons, ses cornichons et son fromage fondu.",
    price: 6.99,
    category: "Burgers",
    tags: [
      "Burger"
    ]
  }

  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'Notification' }), []);

  const openSuccessNotification = (message: string) => {
    api.success({
      message,
    });
  };

  const addArticle = (articleId: string) => {
    const order = localStorage.getItem("order")
    if (order) {
      const orderJSON: LocalOrder[] = JSON.parse(order);
      let isArticleInOrder = false
      orderJSON.forEach((item, id) => {
        if (item.itemId === articleId) {
          isArticleInOrder = true;
          orderJSON[id] = {
            itemType: "article",
            itemId: articleId,
            quantity: item.quantity + 1
          }
        }
      })
      if (!isArticleInOrder) {
        orderJSON.push(
          {
            itemType: "article",
            itemId: articleId,
            quantity: 1
          }
        )
      }
      localStorage.setItem("order", JSON.stringify(orderJSON))
      openSuccessNotification(`${fakeArticle.name} a bien été ajouté au panier`)
      return
    }
    const newOrder: LocalOrder[] = [
      {
        itemType: "article",
        itemId: articleId,
        quantity: 1
      }
    ]
    localStorage.setItem("order", JSON.stringify(newOrder))
    openSuccessNotification(`${fakeArticle.name} a bien été ajouté au panier`)
    return
  }

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className="background-gradient-yellow-orange w-screen h-screen relative">
        <div className="flex ml-7 pt-10 justify-between">
          <FiChevronLeft
            size={35}
            className="justify-start w-fit"
            onClick={() => {
              window.history.back();
            }}
          />
        </div>
        <div className="flex justify-center items-center pt-5">
          <img src={fakeArticle.photo} alt="article preview" className="h-60 w-auto z-50" />
        </div>
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          <div className="flex flex-col justify-center items-center mt-40 mx-10">
            <h1 className="font-bold">
              {fakeArticle.name}
            </h1>
            <div className="mt-14 text-sm text-[--gray] leading-6 font-light">
              {fakeArticle.description}
            </div>
            <div className="mt-14 text-2xl font-bold flex justify-end items-end w-full">
              {fakeArticle.price} €
            </div>
            <Button type="primary" size="large" className="mt-7 w-full mb-3" onClick={() => {
              addArticle(fakeArticle.uid)
            }}>
              <div className="flex justify-center items-center">
                Add to cart
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default ArticlePage