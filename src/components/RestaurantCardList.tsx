import { BsClock, BsFillStarFill } from "react-icons/bs";
import { Restaurant } from "../api/restaurant"
import { nanoid } from "nanoid";

type Props = {
  restaurantList: Restaurant[];
}

function RestaurantCardList(props: Props) {
  const { restaurantList } = props

  return (
    <div className="text-xs text-[#707070] mt-2">
      {restaurantList.length} restaurants found.
      <div className="h-[50vh] overflow-y-auto mt-2 text-base text-black">
        {
          restaurantList.map((restaurant, id) => {
            return (
              // TODO : Add on click event to open restaurant menu
              <div className={`bg-white mb-7 rounded-2xl flex shadow-md ${id === restaurantList.length - 1 ? "max-[380px]:mb-14" : ""}`} key={nanoid()}>
                {
                  // TODO : Deal with non-square images
                }
                <img src={restaurant.logo} alt={`${restaurant.restaurantName} logo`} className="w-1/2 rounded-l-2xl shadow-md" />
                <div className="ml-2 flex flex-col bg-white justify-between rounded-r-2xl">
                  <div className="bg-transparent mt-1 font-bold whitespace-pre-wrap">
                    {restaurant.restaurantName}
                  </div>
                  <div className="flex flex-col bg-white rounded-r-2xl">
                    {
                      // TODO : Replace this fake datas by real operations
                    }
                    <div className="bg-transparent mb-1 text-[#707070] flex gap-1">
                      <BsClock size={15} className="text-[#F97D23] bg-white p-1" />
                      30 mins
                    </div>
                    <div className="bg-transparent mb-1 text-[#707070] flex gap-1">
                      <BsFillStarFill size={15} className="text-[#F97D23] bg-white p-1" />
                      4.5
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RestaurantCardList