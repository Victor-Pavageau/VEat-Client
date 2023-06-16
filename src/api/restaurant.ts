import { Article, Menu } from "./common";
import axios from "axios";

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

type RestaurantResponse = {
  state: string;
  message: string;
  restaurants: Restaurant[];
};

export const fetchAllRestaurants = async (): Promise<Restaurant[]> => {
  return await axios
    .get<RestaurantResponse>("http://localhost:3002/restaurants")
    .then((result) => result.data.restaurants);
};

export const fetchRestaurantById = async (
  restaurantId: string
): Promise<Restaurant> => {
  return await axios
    .get<Restaurant>(`http://localhost:3002/restaurant/${restaurantId}`)
    .then((result) => result.data);
};
