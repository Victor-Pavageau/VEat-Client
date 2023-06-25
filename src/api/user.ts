import axios from "axios";
import { getJWT } from "./common";

const baseUrl = `http://${process.env.REACT_APP_REVERSE_PROXY}`;

export type userType =
  | "Client"
  | "Driver"
  | "Restaurant Owner"
  | "Technical Admin"
  | "Commercial Admin"
  | "Developer";

export type User = {
  uid: string;
  type: userType;
  username: {
    name: string;
    surname: string;
  };
  address: {
    longitude: string;
    latitude: string;
    fullAddress: string;
  };
  phoneNumber: string;
  email: string;
  note?: number;
  referedBy?: string;
  hasRefered?: string[];
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LogIn = {
  message?: string;
  token?: string;
}

type GetUserByIdResponse = {
  state: string;
  message: string;
  user: User;
};

export const logInUser = async (email: string, password: string): Promise<LogIn> => {
  return await axios
    .request<LogIn>({
      method: "POST",
      url: `${baseUrl}/auth/login`,
      headers: {
        Authorization: getJWT(),
      },
      data: {
        email: email,
        password: password
      }
    })
    .then((result) => result.data);
};

export const logOutUser = async (token: string) => {
  await axios
    .request({
      method: "POST",
      url: `${baseUrl}/auth/logout`,
      headers: {
        Authorization: getJWT(),
      },
      data: {
        token: token
      }
    });
  localStorage.removeItem("JWT");
};

export const getUserById = async (
  userId: string
): Promise<User> => {
  return await axios
    .request<GetUserByIdResponse>({
      method: "GET",
      url: `${baseUrl}/user/users/${userId}`,
      headers: {
        Authorization: getJWT(),
      },
    })
    .then((result) => result.data.user);
};