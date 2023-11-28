import { useCallback } from "react";
import BarsHomeIndicatorOnDar from "../components/bars-home-indicator-on-dar";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const onSignUpContainer2Click = useCallback(() => {
    navigate("/231-new-booking");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-hidden text-center text-5xl text-base-white font-league-spartan">
      <div className="absolute top-[778px] left-[0px] w-[375px] h-[34px]">
        <BarsHomeIndicatorOnDar
          propHeight="34px"
          propWidth="375px"
          propTop="0px"
          propRight="unset"
          propBottom="unset"
          propLeft="0px"
          propBackgroundColor="unset"
        />
      </div>
      <div className="absolute top-[640px] left-[91px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-sienna-100" />
        <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] flex items-center justify-center h-[38px]">
          Charity Rep
        </b>
      </div>
      <div className="absolute top-[543px] left-[91px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-orange-100" />
        <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] flex items-center justify-center h-[38px]">
          Manage my Rooms
        </b>
      </div>
      <div
        className="absolute top-[446px] left-[91px] rounded-81xl bg-deepskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden cursor-pointer"
        onClick={onSignUpContainer2Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-deepskyblue" />
        <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] flex items-center justify-center h-[38px]">
          Book a Room
        </b>
      </div>
      <img
        className="absolute top-[95px] left-[28px] w-80 h-[319.4px] object-cover"
        alt=""
        src="/screenshot-20231127-at-1100-11@2x.png"
      />
    </div>
  );
};

export default HomeScreen;
