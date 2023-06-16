import transparentLogo from "../assets/logo/transparent_logo.png";
import RestaurantCardList from "../components/RestaurantCardList";
import ShortcutFilterList from "../components/ShortcutFilterList";
import { Tag } from "../api/common";
import { useState } from "react";
import RestaurantSearchBar from "../components/RestaurantSearchBar";
import NavBar from "../components/NavBar";
import { Modal } from "antd";
import FilterModal from "../components/FilterModal";
import { useGetAllRestaurants } from "../hooks/restaurants/useGetAllRestaurants";

function HomePage() {
  const logo = transparentLogo;

  const [selectedFilterList, setSelectedFilterList] = useState<Tag[]>([]);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [restaurantRadius, setRestaurantRadius] = useState("2");
  const { data: restaurantList, isLoading } = useGetAllRestaurants();

  const addFilter = (filter: Tag) => {
    setSelectedFilterList([...selectedFilterList, filter]);
  };

  const removeFilter = (filter: Tag) => {
    selectedFilterList.splice(selectedFilterList.indexOf(filter), 1);
    setSelectedFilterList([...selectedFilterList]);
  };

  return (
    <div className="bg-[--white-smoke]">
      <Modal
        open={filterModalIsOpen}
        className="wrapClassName"
        centered
        onCancel={() => setFilterModalIsOpen(false)}
        footer={null}
      >
        <FilterModal
          addFilter={addFilter}
          removeFilter={removeFilter}
          selectedFilterList={selectedFilterList}
          restaurantRadius={restaurantRadius}
          setRestaurantRadius={setRestaurantRadius}
        />
      </Modal>
      <NavBar />
      <div className="flex flex-col px-12 pt-5">
        <img src={logo} alt="logo" className="h-14 justify-start w-fit" />
        <div className="flex flex-col justify-center mt-3">
          <h2 className="font-bold text-justify max-[380px]:hidden">
            Find a <b className="text-[--orange] font-bold">good restaurant </b>
            around you
          </h2>
          <h3 className="font-bold text-justify min-[380px]:hidden">
            Find a <b className="text-[--orange] font-bold">good restaurant </b>
            around you
          </h3>
        </div>
        <RestaurantSearchBar setFilterModalIsOpen={setFilterModalIsOpen} />
        <ShortcutFilterList
          selectedFilterList={selectedFilterList}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
        {
          // TODO : Check what happens if restaurantList is empty and add an error message
          restaurantList ?
            <RestaurantCardList restaurantList={restaurantList} />
            : <div>
              Waiting for API connexion. IsLoading : {isLoading}
            </div>
        }
      </div>
    </div>
  );
}

export default HomePage;
