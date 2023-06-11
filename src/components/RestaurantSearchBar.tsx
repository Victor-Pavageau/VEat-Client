import { Input } from "antd"
import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"

function RestaurantSearchBar() {
  return (
    // TODO : Make the search works
    <Input
      placeholder="Search your food here"
      className="rounded-full flex items-center mt-5 w-full shadow-md"
      size="large"
      prefix={
        <BsSearch size={20} className="bg-white p-1" />
      }
      suffix={
        // TODO : Add modal opening on click
        <FiFilter size={20} className="bg-white p-1" />
      }
    />)
}

export default RestaurantSearchBar