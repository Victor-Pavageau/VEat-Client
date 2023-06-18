import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import { FiChevronLeft } from "react-icons/fi";

function ArticlePage() {
  const { articleId } = useParams();

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
        Test header {articleId}
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          Test body {articleId}
        </div>
      </div>
    </>
  )
}

export default ArticlePage