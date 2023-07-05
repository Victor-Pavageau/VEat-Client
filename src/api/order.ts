import axios from "axios";
import { getJWT } from "./common";

const baseUrl = `http://${process.env.REACT_APP_REVERSE_PROXY}`;

export type Order = {
  uid: string;
  addresses: {
    restaurantAddress: {
      longitude: string;
      latitude: string;
      fullAddress: string;
    };
    clientAddress: {
      longitude: string;
      latitude: string;
      fullAddress: string;
    };
  };
  clientId: string;
  restaurantId: string;
  driverId: string;
  isApprovedByRestaurant: boolean;
  isApprovedByDriver: boolean;
  isDelivered: boolean;
  isHidden: boolean;
  price: {
    subtotal: number;
    fees: number;
    totalPrice: number;
  };
  dates: {
    // Format -> MomentJS
    orderTimestamp: string;
    deliveryTimestamp: string;
  };
  orderDetails: LocalOrder[];
};

export type SendOrder = {
  addresses: {
    restaurantAddress: string,
    clientAddress: string
  },
  price: {
    subtotal: Number,
    fees: Number,
    totalPrice: Number
  },
  dates: {
    orderTimestamp: Number,
    deliveryTimestamp: Number | undefined
  },
  clientId: string,
  restaurantId: string,
  driverId: string | undefined,
  isApprovedByRestaurant: boolean,
  isApprovedByDriver: boolean,
  isDelivered: boolean,
  isHidden: boolean,
  orderDetails: {
    itemType: "menu" | "article",
    itemID: string,
    quantity: Number
  }[]
}

export type LocalOrder = {
  itemType: "menu" | "article";
  itemName: string;
  price: number;
  description: string;
  itemId: string;
  quantity: number;
};

export const createOrder = async (
  user: SendOrder
) => {
  return await axios
    .request({
      method: "POST",
      url: `${baseUrl}/order/order`,
      headers: {
        Authorization: getJWT(),
      },
      data: user
    })
};