import profile from "../../src/assets/images/profile.png";
const Header = () => {
  return (
    <div className="text-2xl px-4 border-b-2 font-bold flex justify-between items-center py-8 ">
      <h1>Knowledge Cafe </h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
