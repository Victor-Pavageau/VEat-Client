import { useParams } from "react-router";

function RestaurantPage() {
  const { restaurantId } = useParams();

  return (
    <div>
      {
        restaurantId ?
          <div>
            Restaurant Page {restaurantId}
          </div>
          : <div>
            Restaurant not found
            {
              // TODO : Add a home button here
            }
          </div>
      }
    </div>
  );
}

export default RestaurantPage;
