import { Tag, tags } from "../api/common"
import { nanoid } from "nanoid";

type Props = {
  selectedFilterList: Tag[];
  setSelectedFilterList: (selectedFilterList: Tag[]) => void;
}

function ShortcutFilterList(props: Props) {
  const { selectedFilterList, setSelectedFilterList } = props

  const isFilterSelected = (filter: Tag) => {
    return selectedFilterList.includes(filter)
  }

  const addFilter = (filter: Tag) => {
    setSelectedFilterList([...selectedFilterList, filter])
  }

  const removeFilter = (filter: Tag) => {
    selectedFilterList.splice(selectedFilterList.indexOf(filter), 1)
    setSelectedFilterList([...selectedFilterList])
  }

  return (
    <div className="flex mt-5 justify-between overflow-x-auto gap-3 pb-4">
      {
        tags.map((tag) => {
          return (
            <div className={`whitespace-nowrap py-2 px-4 rounded-full justify-center items-center ${isFilterSelected(tag) ? "bg-[#F9D423]" : "bg-white"}`} key={nanoid()} onClick={() => {
              if (isFilterSelected(tag)) {
                removeFilter(tag)
              }
              else {
                addFilter(tag)
              }
            }}>{tag}</div>
          )
        })
      }
    </div>
  )
}

export default ShortcutFilterList