import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

type Props = {
  setFilterModalIsOpen: (isOpen: boolean) => void;
}

function RestaurantSearchBar(props: Props) {
  const { setFilterModalIsOpen } = props

  return (
    // TODO : Make the search works
    <Input
      placeholder="Your favorite restaurant"
      autoFocus={false}
      className="rounded-full flex items-center mt-5 w-full shadow-md"
      size="large"
      prefix={<BsSearch size={20} className="bg-white p-1" />}
      suffix={
        <FiFilter size={20} className="bg-white p-1" onClick={() => {
          setFilterModalIsOpen(true)
        }} />
      }
    />
  );
}

export default RestaurantSearchBar;
