import { FiChevronLeft } from "react-icons/fi"
import "./ProfilePage.css"
import UnauthenticatedBodyProfile from "../components/UnauthenticatedBodyProfile"
import UnauthenticatedHeaderProfile from "../components/UnauthenticatedHeaderProfile"

function ProfilePage() {
  return (
    <>
      <div className="background-gradient-yellow-orange w-screen h-screen">
        <div className="flex flex-col ml-7 pt-10">
          <FiChevronLeft size={35} className="justify-start w-fit" onClick={() => { window.history.back() }} />
        </div>
        <UnauthenticatedHeaderProfile />
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          <UnauthenticatedBodyProfile />
        </div>
      </div>
    </>
  )
}

export default ProfilePage