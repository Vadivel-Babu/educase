import user from "../assets/user.png";
import camera from "../assets/camera.svg";

const ProfilePage = () => {
  return (
    <div>
      <div className="bg-white p-4">
        <h1 className="text-xl font-bold">Account Settings</h1>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-5">
          <div className="relative w-fit">
            <img src={user} alt="user" className="object-cover w-19 h-19" />
            <img
              src={camera}
              alt="camera"
              className="w-5 h-5 absolute -bottom-1 left-12"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl">Marry Doe</h1>
            <h2>Marry@Gmail.Com</h2>
          </div>
        </div>
        <p className="text-sm mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <p className="border w-full border-dashed border-gray-300 mt-7"></p>
      </div>
    </div>
  );
};

export default ProfilePage;
