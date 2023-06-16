import NavBar from "../components/NavBar";
import ShortcutFilterList from "../components/ShortcutFilterList";
import { Tag } from "../api/common";
import {
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl
} from "react-leaflet";

type Props = {
  selectedFilterList: Tag[];
  addFilter: (filter: Tag) => void;
  removeFilter: (filter: Tag) => void;
};

function MapPage(props: Props) {
  const { selectedFilterList, addFilter, removeFilter } = props;

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
            <MapContainer center={[51.505, -0.09]} zoom={15} minZoom={10} scrollWheelZoom zoomControl={false} className="flex h-full">
              <ScaleControl position="topleft" />
              <ZoomControl position="bottomright" />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
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
