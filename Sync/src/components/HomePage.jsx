import HomePageRight from "./HomePageRight";
import SignUpFree from "./SignUpFree";

export default () => {
  return (
    <div className="homepage-wrapper">
      <HomePageLeft />
      <HomePageRight />
    </div>
  );
};

const HomePageLeft = () => {
  return (
    <div className="homepage-left">
      <div>
        <h2 className="large-400 wrap-to-next-line">
          Online scheduler for offering the best consultations
        </h2>
        <div className="med-370 wrap-to-next-line">
          Our user interface auto-customizes for your industry, meaning you feel
          right at home. Say hello to smart scheduling!
        </div>
        <div className="margin-60">
          <SignUpFree />
        </div>
      </div>
    </div>
  );
};
