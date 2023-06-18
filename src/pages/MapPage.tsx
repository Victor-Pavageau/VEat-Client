import NavBar from "../components/NavBar";
import ShortcutFilterList from "../components/ShortcutFilterList";
import { Tag } from "../api/common";
import TrackOrderMap from "../components/TrackOrderMap";
import { Coordinates } from "../api/user";

type Props = {
  selectedFilterList: Tag[];
  addFilter: (filter: Tag) => void;
  removeFilter: (filter: Tag) => void;
  userCoordinates: Coordinates | undefined
};

function MapPage(props: Props) {
  const { selectedFilterList, addFilter, removeFilter, userCoordinates } = props;

  return (
    <>
      <NavBar />
      <div className="bg-[--white-smoke] h-screen">
        <div className="flex flex-col px-12 pt-5">
          <ShortcutFilterList
            selectedFilterList={selectedFilterList}
            addFilter={addFilter}
            removeFilter={removeFilter}
          />
        </div>
        <div className="flex flex-col px-10 pt-3">
          <div className="h-72 mt-3 w-full">
            {
              // TODO : Provide default position with user coordinates
            }
            <TrackOrderMap userCoordinates={userCoordinates} />
          </div>
          <div className="mt-3">
            Restaurant informations
          </div>
        </div>
      </div>
    </>
  );
}

export default MapPage;
