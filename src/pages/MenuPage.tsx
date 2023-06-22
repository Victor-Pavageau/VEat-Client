import { useParams } from "react-router-dom";
import "./MenuPage.css";
import { FiChevronLeft } from "react-icons/fi";
import { Button, Collapse, notification } from "antd";
import React, { useMemo } from "react";
import { LocalOrder } from "../api/order";
import { nanoid } from "nanoid";
import { Menu } from "../api/restaurant";

function MenuPage() {
  const { menuId } = useParams();
  const Context = React.createContext({ name: 'Default' });

  // TODO : Remove this fake data
  const fakeMenu: Menu = {
    uid: "da6b9b8a-d02d-435c-bda2-75d56ef4ee3e",
    isUnavailable: false,
    name: "Menu McChicken",
    photo: "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/mcchicken--hero-isolated.png.webp",
    description: "Un menu McChicken comprenant un burger McChicken, des frites et une boisson.",
    price: 8.99,
    articles: [
      {
        articleId: "de17a2c8-5738-4c4b-9acd-df90c4187458",
        quantity: 1
      },
      {
        articleId: "950ac59e-954c-4f58-b5b9-3be9c5a71855",
        quantity: 1
      },
      {
        articleId: "afe85f6f-f6d5-47d7-999d-71b6e20d9f65",
        quantity: 1
      },
    ]
  }

  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'Notification' }), []);

  const openSuccessNotification = (message: string) => {
    api.success({
      message,
    });
  };

  const addMenu = (menuId: string) => {
    const order = localStorage.getItem("order")
    if (order) {
      const orderJSON: LocalOrder[] = JSON.parse(order);
      let isMenuInOrder = false
      orderJSON.forEach((item, id) => {
        if (item.itemId === menuId) {
          isMenuInOrder = true;
          orderJSON[id] = {
            itemType: "menu",
            itemId: menuId,
            quantity: item.quantity + 1
          }
        }
      })
      if (!isMenuInOrder) {
        orderJSON.push(
          {
            itemType: "menu",
            itemId: menuId,
            quantity: 1
          }
        )
      }
      localStorage.setItem("order", JSON.stringify(orderJSON))
      openSuccessNotification(`${fakeMenu.name} a bien été ajouté au panier`)
      return
    }
    const newOrder: LocalOrder[] = [
      {
        itemType: "menu",
        itemId: menuId,
        quantity: 1
      }
    ]
    localStorage.setItem("order", JSON.stringify(newOrder))
    openSuccessNotification(`${fakeMenu.name} a bien été ajouté au panier`)
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
          <img src={fakeMenu.photo} alt="menu preview" className="h-60 w-auto z-50" />
        </div>
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          <div className="flex flex-col justify-center items-center mt-40 mx-10">
            <h1 className="font-bold">
              {fakeMenu.name}
            </h1>
            <div className="mt-14 text-sm text-[--gray] leading-6 font-light">
              {fakeMenu.description}
            </div>
            <div className="mt-14 text-2xl font-bold flex flex-col justify-end items-end w-full gap-3">
              {
                // TODO : Add real article informations here
                fakeMenu.articles.map((article) => {
                  return (
                    <Collapse key={nanoid()} className="bg-[--light-gray]" items={
                      [
                        {
                          key: article.articleId,
                          label: article.articleId,
                          children: <div>
                            Show informations
                          </div>
                        }
                      ]
                    } bordered={false} />
                  )
                })
              }
            </div>
            <div className="mt-14 text-2xl font-bold flex justify-end items-end w-full">
              {fakeMenu.price} €
            </div>
            <Button type="primary" size="large" className="mt-7 w-full mb-3" onClick={() => {
              addMenu(fakeMenu.uid)
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

export default MenuPage