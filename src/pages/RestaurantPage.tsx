import { useNavigate, useParams } from "react-router";
import { useGetRestaurantById } from "../hooks/restaurants/useGetRestaurantById";
import MenuCardList from "../components/MenuCardList";
import { FiChevronLeft } from "react-icons/fi";
import { tp } from "../routing";
import ArticleCardList from "../components/ArticleCardList";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

function RestaurantPage() {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading } = useGetRestaurantById(restaurantId!);
  const navigate = useNavigate()

  return (
    restaurant !== undefined ?
      <div className="bg-[--white-smoke] h-screen">
        <div className="flex flex-col px-12 pt-5">
          <div className="flex mt-3">
            <div className="flex items-start justify-start">
              <FiChevronLeft
                size={35}
                className="justify-start w-fit"
                onClick={() => {
                  navigate(tp("/"))
                }}
              />
            </div>
            <h3 className="font-bold text-justify flex justify-center items-center ml-5">
              {restaurant.restaurantName}
            </h3>
          </div>
        </div>
        <div className="flex flex-col px-12 pt-5">
          {
            restaurant.menus && restaurant.menus.length > 0 &&
            <>
              <h2>
                Menus :
              </h2>
              <MenuCardList menuList={restaurant.menus} />
            </>
          }
          {
            restaurant.articles && restaurant.articles.length > 0 &&
            <>
              <hr className="mb-3 bg-[--orange] h-0.5 border-0" />
              <h2>
                Articles :
              </h2>
              <ArticleCardList articleList={restaurant.articles} />
            </>
          }
          {
            (restaurant.articles === undefined || restaurant.articles.length === 0) && (restaurant.menus === undefined || restaurant.menus.length === 0) &&
            <div>
              No content found for this restaurant
            </div>
          }
        </div>
      </div>
      :
      <div>
        {
          isLoading ?
            <div className="bg-[--white-smoke] h-screen">
              <div className="flex justify-center items-center pt-40">
                <Spin indicator={<LoadingOutlined spin style={{ fontSize: 40 }} />} className="text-[--orange]" />
              </div>
            </div>
            :
            <div className="bg-[--white-smoke] h-screen flex justify-center pt-10">
              <h2>
                Error : restaurant not found
              </h2>
            </div>
        }
      </div>
  );
}

export default RestaurantPage;
