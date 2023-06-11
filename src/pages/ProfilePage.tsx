import NavBar from "../components/NavBar"
import "./ProfilePage.css"

function ProfilePage() {
  return (
    <>
      <NavBar />
      <div className="background-gradient-yellow-orange w-screen h-screen">
        <div className="flex flex-col px-12 pt-5 justify-center items-center">
          Profile Page
        </div>
      </div>
    </>
  )
}

export default ProfilePage