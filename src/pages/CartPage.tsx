import { FiChevronLeft } from "react-icons/fi";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { LocalOrder } from "../api/order";
import { nanoid } from "nanoid";

function CartPage() {
  const [order, setOrder] = useState<LocalOrder[]>()

  const loadLocalOrder = () => {
    const localStorageOrder = localStorage.getItem("order")
    if (localStorageOrder) {
      const tempOrder: LocalOrder[] = JSON.parse(localStorageOrder)
      if (tempOrder) {
        setOrder(tempOrder)
      }
    }
  }

  useEffect(() => {
    loadLocalOrder()
  }, [])

  useEffect(() => {
    console.log(order);
  }, [order])



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
          <h2 className="font-bold">
            Your cart
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {
              order ?
                order.map((item) => {
                  return (
                    <div key={nanoid()} className="flex gap-3 flex-col">
                      <div>
                        {
                          // TODO : Add getArticle
                        }
                        {item.itemId}
                      </div>
                      {
                        order.length > 1 &&
                        <hr className="my-3 bg-[--yellow] h-0.5 border-0" />
                      }
                    </div>
                  )
                })
                :
                <div className="mt-10 text-[--gray]">
                  Your cart is empty
                </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
