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
