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
    .get<GetAllRestaurantsResponse>("http://localhost:3002/restaurants")
    .then((result) => result.data.restaurants);
};

export const fetchRestaurantById = async (
  restaurantId: string
): Promise<Restaurant> => {
  return await axios
    .get<GetRestaurantsByIdResponse>(
      `http://localhost:3002/restaurant/${restaurantId}`
    )
    .then((result) => result.data.restaurant);
};
