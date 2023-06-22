import axios from "axios";
import { Tag } from "./common";

const baseUrl = `http://${process.env.REACT_APP_REVERSE_PROXY}/restaurant`;

const getJWT = () => {
  const JWT = localStorage.getItem("JWT");
  if (!JWT) {
    return "Bearer";
  }
  // const item = JSON.parse(itemStr)
  // const now = new Date()
  // if (now.getTime() > item.expiry) {
  // 	localStorage.removeItem(key)
  // 	return null
  // }
  return "Bearer " + JWT;
};

export type Article = {
  uid: string;
  name: string;
  isUnavailable: boolean;
  photo: string;
  description: string;
  price: number | undefined;
  category: string;
  tags: Tag[];
};

export type Menu = {
  uid: string;
  isUnavailable: boolean;
  name: string;
  photo: string;
  description: string;
  price: number;
  articles: {
    articleId: string;
    quantity: number;
  }[];
};

export type Restaurant = {
  uid: string;
  restaurantName: string;
  address: {
    longitude: string;
    latitude: string;
    fullAddress: string;
  };
  tags?: string[];
  logo: string;
  menus?: Menu[];
  articles?: Article[];
  schedule: [
    {
      day: string;
      timeSpan: [
        {
          openTime: string;
          closureTime: string;
        }
      ];
    }
  ];
};

type GetAllRestaurantsResponse = {
  state: string;
  message: string;
  restaurants: Restaurant[];
};

type GetRestaurantsByIdResponse = {
  state: string;
  message: string;
  restaurant: Restaurant;
};

export const fetchAllRestaurants = async (): Promise<Restaurant[]> => {
  return await axios
    .request<GetAllRestaurantsResponse>({
      method: "GET",
      url: `${baseUrl}/restaurants`,
      headers: {
        Authorization: getJWT(),
      },
    })
    .then((result) => result.data.restaurants);
};

export const fetchRestaurantById = async (
  restaurantId: string
): Promise<Restaurant> => {
  return await axios
    .request<GetRestaurantsByIdResponse>({
      method: "GET",
      url: `${baseUrl}/restaurants/${restaurantId}`,
      headers: {
        Authorization: getJWT(),
      },
    })
    .then((result) => result.data.restaurant);
};

// TODO : Remove this fake data
export const fakeRestaurantCoordinates = {
  longitude: "-0.5737083643779027",
  latitude: "44.84337342828982",
};
