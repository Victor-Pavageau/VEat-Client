import transparentLogo from "../assets/logo/transparent_logo.png";
import { Restaurant } from "../api/restaurant";
import RestaurantCardList from "../components/RestaurantCardList";
import ShortcutFilterList from "../components/ShortcutFilterList";
import { Tag } from "../api/common";
import { useState } from "react";
import RestaurantSearchBar from "../components/RestaurantSearchBar";
import NavBar from "../components/NavBar";
import { Modal } from "antd"
import FilterModal from "../components/FilterModal";

function HomePage() {
  const logo = transparentLogo;

  const [selectedFilterList, setSelectedFilterList] = useState<Tag[]>([]);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false)
  const [restaurantRadius, setRestaurantRadius] = useState("2");

  const testRestaurant: Restaurant[] = [
    // TODO : Delete this fake data
    {
      uid: "001",
      restaurantName: "McDo Villenave d'Ornon",
      address: {
        longitude: "44.77801115851936",
        latitude: "-0.5708886051426734",
        fullAddress: "1 Avenue Ray Kroc, 33140 Villenave-d'Ornon",
      },
      tags: ["Burger", "Fast food"],
      logo: "https://cdn.discordapp.com/attachments/958436032204906506/1116732302295322654/image.png",
      schedule: [
        {
          day: "monday",
          timeSpan: [
            {
              openTime: "8:00",
              closureTime: "23:00",
            },
          ],
        },
      ],
    },
    {
      uid: "002",
      restaurantName: "La Chartreuse de Parme",
      address: {
        longitude: "44.75937263285955",
        latitude: "-0.5666086106101024",
        fullAddress: "55 Chem. de Couhins, 33140 Villenave-d'Ornon",
      },
      tags: ["Italian"],
      logo: "https://media-cdn.tripadvisor.com/media/photo-s/19/51/ce/ef/img-20190919-211746-376.jpg",
      schedule: [
        {
          day: "monday",
          timeSpan: [
            {
              openTime: "8:00",
              closureTime: "23:00",
            },
          ],
        },
      ],
    },
    {
      uid: "003",
      restaurantName: "Le Chai d'Ornon",
      address: {
        longitude: "44.77337857740845",
        latitude: "-0.5283621194434399",
        fullAddress: "17 Pl. de Courrejean, 33140 Villenave-d'Ornon",
      },
      tags: ["French"],
      logo: "https://www.lechaidornon.fr/templates/captain/img/interface/logo.png",
      schedule: [
        {
          day: "monday",
          timeSpan: [
            {
              openTime: "8:00",
              closureTime: "23:00",
            },
          ],
        },
      ],
    },
  ];

  const addFilter = (filter: Tag) => {
    setSelectedFilterList([...selectedFilterList, filter])
  }

  const removeFilter = (filter: Tag) => {
    selectedFilterList.splice(selectedFilterList.indexOf(filter), 1)
    setSelectedFilterList([...selectedFilterList])
  }

  return (
    <div className="bg-[#F5F5F5]">
      <Modal
        open={filterModalIsOpen}
        className="wrapClassName"
        centered
        onCancel={() => setFilterModalIsOpen(false)}
        footer={null}
      >
        <FilterModal addFilter={addFilter} removeFilter={removeFilter} selectedFilterList={selectedFilterList} restaurantRadius={restaurantRadius} setRestaurantRadius={setRestaurantRadius} />
      </Modal>
      <NavBar />
      <div className="flex flex-col px-12 pt-5">
        <img src={logo} alt="logo" className="h-14 justify-start w-fit" />
        <div className="flex flex-col justify-center mt-3">
          <h2 className="font-bold text-justify max-[380px]:hidden">
            Find a <b className="text-[#F97D23] font-bold">good restaurant</b> around you
          </h2>
          <h3 className="font-bold text-justify min-[380px]:hidden">
            Find a <b className="text-[#F97D23] font-bold">good restaurant</b> around you
          </h3>
        </div>
        <RestaurantSearchBar setFilterModalIsOpen={setFilterModalIsOpen} />
        <ShortcutFilterList
          selectedFilterList={selectedFilterList}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
        <RestaurantCardList restaurantList={testRestaurant} />
      </div>
    </div>
  );
}

export default HomePage;
