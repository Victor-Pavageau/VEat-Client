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
  // password
  // token
  address: {
    longitude: string; // Use it for React Leaflet
    latitude: string; // Use it for React Leaflet
    fullAddress: string;
  };
  phoneNumber: string;
  email: string;
  note: number | undefined;
  referedBy: string | undefined;
  hasRefered: string[] | undefined;
  profilePicture: string;
};
