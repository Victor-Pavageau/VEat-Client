import { MapContainer, Marker, ScaleControl, TileLayer, ZoomControl } from "react-leaflet"
import RoutingMachine from "./RoutingMachine"
import { fakeRestaurantCoordinates } from "../api/restaurant";
import L from "leaflet";
import restaurantMarker from "../assets/restaurant_marker.png";
import userMarker from "../assets/user_marker.png";
import { Coordinates } from "../api/user";

type Props = {
  userCoordinates: Coordinates | undefined
}

function TrackOrderMap(props: Props) {
  const { userCoordinates } = props

  return (
    userCoordinates !== undefined ?
      <MapContainer center={[userCoordinates.latitude, userCoordinates.longitude]} zoom={15} minZoom={12} scrollWheelZoom zoomControl={false} className="flex h-full">
        <ScaleControl position="topleft" />
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine userCoordinates={userCoordinates} />
        <Marker
          position={[Number(fakeRestaurantCoordinates.latitude), Number(fakeRestaurantCoordinates.longitude)]}
          eventHandlers={{
            click: () => {
              // TODO : Add onClick event
            },
          }}
          icon={L.icon({
            iconUrl: restaurantMarker,
            iconSize: [30, 45],
            iconAnchor: [20, 30],
          })}
        ></Marker>
        <Marker
          position={[userCoordinates.latitude, userCoordinates.longitude]}
          eventHandlers={{
            click: () => {
              // TODO : Add onClick event
            },
          }}
          icon={L.icon({
            iconUrl: userMarker,
            iconSize: [30, 45],
            iconAnchor: [20, 30],
          })}
        ></Marker>
      </MapContainer>
      :
      <MapContainer center={[48.859823330100475, 2.3436560345083586]} zoom={15} minZoom={12} scrollWheelZoom zoomControl={false} className="flex h-full">
        <ScaleControl position="topleft" />
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[Number(fakeRestaurantCoordinates.latitude), Number(fakeRestaurantCoordinates.longitude)]}
          eventHandlers={{
            click: () => {
              // TODO : Add onClick event
            },
          }}
          icon={L.icon({
            iconUrl: restaurantMarker,
            iconSize: [30, 45],
            iconAnchor: [20, 30],
          })}
        ></Marker>
      </MapContainer>
  )
}

export default TrackOrderMap