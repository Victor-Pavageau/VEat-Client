import { FiChevronLeft } from "react-icons/fi";
import "./ProfilePage.css";
import UnauthenticatedBodyProfile from "../components/UnauthenticatedBodyProfile";
import UnauthenticatedHeaderProfile from "../components/UnauthenticatedHeaderProfile";
import { useState } from "react";
import AuthenticatedHeaderProfile from "../components/AuthenticatedHeaderProfile";
import AuthenticatedBodyProfile from "../components/AuthenticatedBodyProfile";
import { User } from "../api/user";

function ProfilePage() {
  // TODO : Remove this fake data
  const testUser: User = {
    address: {
      fullAddress: "radnom full address",
      latitude: "15454154115",
      longitude: "5165145156",
    },
    email: "test.mail@gmail.com",
    phoneNumber: "0123456789",
    type: "Client",
    uid: "00000012516",
    username: {
      name: "Jean",
      surname: "Marc",
    },
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="background-gradient-yellow-orange w-screen h-screen">
        <div className="flex ml-7 pt-10 justify-between">
          <FiChevronLeft
            size={35}
            className="justify-start w-fit"
            onClick={() => {
              window.history.back();
            }}
          />
        </div>
        {isAuthenticated ? (
          <AuthenticatedHeaderProfile testUser={testUser} />
        ) : (
          <UnauthenticatedHeaderProfile />
        )}
        <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
          {isAuthenticated ? (
            <AuthenticatedBodyProfile testUser={testUser} />
          ) : (
            <UnauthenticatedBodyProfile
              setAuthenticatedUser={setIsAuthenticated}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
