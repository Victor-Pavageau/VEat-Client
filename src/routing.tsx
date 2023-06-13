import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import RestaurantPage from "./pages/RestaurantPage";
import NotFoundPage from "./pages/NotFoundPage";

export type Path =
  | "/"
  | "/map"
  | "/restaurant/:restaurantId"
  | "/cart"
  | "/profile"
  | "*";

export const tp = (path: Path, replace?: string[]): Path | string => {
  if (!replace) {
    return path;
  }
  return replacePlaceholders(path, replace);
};

const replacePlaceholders = (url: Path, replaceArray: string[]): string => {
  const expression = /:[\w-_]+/g;
  const array = url.match(expression) as string[];
  if (array.length !== replaceArray.length) {
    throw new Error(
      `Expected array of ${array.length} strings. Found ${replaceArray.length}`
    );
  }
  let result = url.toString();
  for (let i = 0; i < array.length; i++) {
    result = result.replace(array[i], replaceArray[i]);
  }
  return result;
};

function RouteHandler(): JSX.Element {
  return (
    <Routes>
      <Route path={tp("/")} element={<HomePage />} />
      <Route path={tp("/map")} element={<MapPage />} />
      <Route
        path={tp("/restaurant/:restaurantId")}
        element={<RestaurantPage />}
      />
      <Route path={tp("/cart")} element={<CartPage />} />
      <Route path={tp("/profile")} element={<ProfilePage />} />
      <Route path={tp("*")} element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouteHandler;
