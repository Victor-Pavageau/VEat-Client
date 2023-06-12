import { FiChevronLeft } from "react-icons/fi"
import "./ProfilePage.css"
import UnauthenticatedBodyProfile from "../components/UnauthenticatedBodyProfile"
import UnauthenticatedHeaderProfile from "../components/UnauthenticatedHeaderProfile"
import { useState } from "react"
import AuthenticatedHeaderProfile from "../components/AuthenticatedHeaderProfile"
import AuthenticatedBodyProfile from "../components/AuthenticatedBodyProfile"

function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <div className="background-gradient-yellow-orange w-screen h-screen">
        <div className="flex ml-7 pt-10">
          <FiChevronLeft size={35} className="justify-start w-fit" onClick={() => { window.history.back() }} />
        </div>
        {isAuthenticated ? <AuthenticatedHeaderProfile /> : <UnauthenticatedHeaderProfile />}
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          {isAuthenticated ? <AuthenticatedBodyProfile /> : <UnauthenticatedBodyProfile setAuthenticatedUser={setIsAuthenticated} />}
        </div>
      </div>
    </>
  )
}

export default ProfilePage