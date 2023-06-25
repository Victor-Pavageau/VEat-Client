import { BsClock, BsFillStarFill } from "react-icons/bs";
import { Restaurant } from "../api/restaurant";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { tp } from "../routing";
import { LocalOrder } from "../api/order";
import { Modal } from "antd";
import { useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";

type Props = {
  restaurantList: Restaurant[];
};

function RestaurantCardList(props: Props) {
  const { restaurantList } = props;

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>();

  const checkIfOrderExistsWithAnotherRestaurant = (restaurant: Restaurant) => {
    let orderExistsWithAnotherRestaurant = false;
    const order = localStorage.getItem("order");
    if (order) {
      orderExistsWithAnotherRestaurant = true;
      const orderJSON: LocalOrder[] = JSON.parse(order);
      orderJSON.forEach((item) => {
        restaurant.articles?.forEach((article) => {
          if (article.uid === item.itemId) {
            orderExistsWithAnotherRestaurant = false;
            return orderExistsWithAnotherRestaurant;
          }
        });
        restaurant.menus?.forEach((menu) => {
          if (menu.uid === item.itemId) {
            orderExistsWithAnotherRestaurant = false;
            return orderExistsWithAnotherRestaurant;
          }
        });
      });
    }
    return orderExistsWithAnotherRestaurant;
  };

  return restaurantList !== undefined ? (
    <>
      <Modal
        open={isModalOpen}
        okText="Start a new order"
        title={
          <div className="flex gap-3">
            <div className="text-[--orange]">
              <PiWarningCircleLight size={30} className="text-[#faad14]" />
            </div>
            <div>Order can be in a restaurant at once</div>
          </div>
        }
        centered
        onCancel={() => setIsModalOpen(false)}
        onOk={() => {
          if (selectedRestaurant) {
            localStorage.removeItem("order");
            navigate(tp("/restaurant/:restaurantId", [selectedRestaurant.uid]));
          }
        }}
      >
        You already start an order in another restaurant, if you continue in
        this restaurant the current order will be removed
      </Modal>
      <div className="text-xs text-[--gray] mt-2">
        {restaurantList.length} restaurants found.
        <div className="h-[50vh] overflow-y-auto mt-2 text-base text-black">
          {restaurantList.map((restaurant) => {
            return (
              <div
                className="bg-white mb-7 rounded-2xl flex shadow-md h-36"
                key={nanoid()}
                onClick={() => {
                  if (checkIfOrderExistsWithAnotherRestaurant(restaurant)) {
                    setSelectedRestaurant(restaurant);
                    setIsModalOpen(true);
                  } else {
                    setSelectedRestaurant(restaurant);
                    navigate(tp("/restaurant/:restaurantId", [restaurant.uid]));
                  }
                }}
              >
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.restaurantName} logo`}
                  className="w-1/2 rounded-l-2xl shadow-md h-full object-cover"
                />
                <div className="ml-2 flex flex-col bg-white justify-between rounded-r-2xl">
                  <div className="bg-transparent mt-1 font-bold whitespace-pre-wrap">
                    {restaurant.restaurantName}
                  </div>
                  <div className="flex flex-col bg-white rounded-r-2xl">
                    {
                      // TODO : Replace this fake datas by real operations
                    }
                    <div className="bg-transparent mb-1 text-[--gray] flex gap-1">
                      <BsClock
                        size={15}
                        className="text-[--orange] bg-white p-1"
                      />
                      30 mins
                    </div>
                    <div className="bg-transparent mb-1 text-[--gray] flex gap-1">
                      <BsFillStarFill
                        size={15}
                        className="text-[--orange] bg-white p-1"
                      />
                      4.5
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div className="text-[--gray] flex justify-center items-center">
      No restaurant found near you
    </div>
  );
}

export default RestaurantCardList;
