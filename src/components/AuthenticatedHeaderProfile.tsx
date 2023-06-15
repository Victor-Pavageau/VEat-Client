import { User } from "../api/user";

type Props = {
  testUser: User;
};

function AuthenticatedHeaderProfile(props: Props) {
  const { testUser } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute right-[35vw] top-10 h-32 w-32 bg-[--orange] rounded-full flex justify-center items-center text-6xl font-light border border-solid">
        {testUser.username.name[0] + testUser.username.surname[0]}
      </div>
      <div className="w-full">
        <div className="text-xs justify-center flex items-center mt-32">
          Referral code : {testUser.email}
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedHeaderProfile;
