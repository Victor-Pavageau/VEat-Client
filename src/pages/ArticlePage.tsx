import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import { FiChevronLeft } from "react-icons/fi";
import { Article } from "../api/common";
import { Button, notification } from "antd";

function ArticlePage() {
  const { articleId } = useParams();

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

  const addArticle = (articleId: string) => {
    // TODO : Create this function
    notification["success"]({
      message: `${fakeArticle.name} a bien été ajouté au panier`,
    });
  }

  const setArticleQuantity = (articleId: string, articleQuantity: number) => {
    // TODO : Create this function
  }

  const removeArticle = (articleId: string) => {
    // TODO : Create this function
  }

  return (
    <>
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
              {fakeArticle.price}€
            </div>
            <Button type="primary" size="large" className="mt-7 w-full" onClick={() => {
              addArticle(fakeArticle.uid)
            }}>
              <div className="flex justify-center items-center">
                Ajouter au panier
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePage