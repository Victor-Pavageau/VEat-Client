import { FiChevronLeft } from "react-icons/fi";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { createOrder, LocalOrder, SendOrder } from "../api/order";
import CartItem from "../components/CartItem";
import { nanoid } from "nanoid";
import { Button } from "antd";
import { useGetUserById } from "../hooks/useGetUserById";
import { getUserIdFromJWT } from "../api/common";
import { Restaurant } from "../api/restaurant";

type Props = {
  selectedRestaurant: Restaurant | undefined;
};

function CartPage(props: Props) {
  const { selectedRestaurant } = props;
  const [order, setOrder] = useState<LocalOrder[]>();
  const { data: user } = useGetUserById(getUserIdFromJWT()!);

  const deliveryFees = 3.5;

  const loadLocalOrder = () => {
    const localStorageOrder = localStorage.getItem("order");
    if (localStorageOrder) {
      const tempOrder: LocalOrder[] = JSON.parse(localStorageOrder);
      if (tempOrder) {
        setOrder(tempOrder);
      }
    }
  };

  useEffect(() => {
    loadLocalOrder();
  }, []);

  const getSubtotal = () => {
    let subtotal = 0;
    if (order) {
      order.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
    }
    return Number(subtotal.toFixed(2));
  };

  const sendOrderServer = async () => {
    const orderArticleDetails: {
      itemID: string;
      itemType: "menu" | "article";
      quantity: Number;
    }[] = [];
    if (order) {
      order.forEach((item) => {
        orderArticleDetails.push({
          itemID: item.itemId,
          itemType: item.itemType,
          quantity: item.quantity,
        });
      });
    }
    if (user && selectedRestaurant) {
      const orderToSend: SendOrder = {
        addresses: {
          clientAddress: user.fullAddress,
          restaurantAddress: selectedRestaurant.address.fullAddress,
        },
        clientId: user.uid,
        dates: {
          orderTimestamp: Date.now(),
          deliveryTimestamp: undefined,
        },
        driverId: undefined,
        isApprovedByDriver: false,
        isApprovedByRestaurant: false,
        isDelivered: false,
        isHidden: false,
        price: {
          fees: deliveryFees,
          subtotal: getSubtotal(),
          totalPrice: getSubtotal() + deliveryFees,
        },
        restaurantId: selectedRestaurant.uid,
        orderDetails: orderArticleDetails,
      };
      console.log("monday");

      await createOrder(orderToSend);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="flex ml-7 pt-10 justify-between">
          <FiChevronLeft
            size={35}
            className="justify-start w-fit"
            onClick={() => {
              window.history.back();
            }}
          />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center px-7">
          <h2 className="font-bold">Your cart</h2>
          <div className="mt-5 flex flex-col gap-3 w-full overflow-y-auto h-[70vh]">
            {order ? (
              <div>
                {order.map((item) => {
                  return (
                    <CartItem
                      item={item}
                      key={nanoid()}
                      triggerOrderChanging={loadLocalOrder}
                    />
                  );
                })}
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <div className="font-light">Subtotal</div>
                    <div className="font-light">{getSubtotal()} €</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-light">Delivery fees</div>
                    <div className="font-light">
                      {deliveryFees.toFixed(2)} €
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="font-semibold text-[--orange]">Total</div>
                    <div className="font-semibold text-[--orange]">
                      {(getSubtotal() + deliveryFees).toFixed(2)} €
                    </div>
                  </div>
                  <div className="flex justify-end items-end mt-3 mb-5">
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => {
                        sendOrderServer();
                        // TODO : Redirect to the map page to track the delivery
                      }}
                    >
                      Continue to payment
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-10 text-[--gray] flex justify-center items-center">
                Your cart is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
