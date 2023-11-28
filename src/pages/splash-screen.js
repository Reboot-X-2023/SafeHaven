import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BarsHomeIndicatorOnDar from "../components/bars-home-indicator-on-dar";

const BookingHomepage = () => {
  const navigate = useNavigate();

  const onSignUpContainerClick = useCallback(() => {
    navigate("/23-explore");
  }, [navigate]);

  const onTripsContainerClick = useCallback(() => {
    navigate("/26-my-bookings");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-hidden text-center text-mini text-black font-league-spartan">
      <div className="absolute top-[187px] left-[0px] rounded-51xl bg-base-white w-[375px] h-[387px]" />
      <div className="absolute top-[276px] left-[49px] w-[284px] h-[65px] text-left text-lightslategray">
        <div className="absolute top-[24px] left-[0px] w-[284px] h-[41px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white" />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border border-[1px] border-solid border-aliceblue" />
          <div className="absolute w-[calc(100%_-_32px)] top-[calc(50%_-_9.5px)] left-[16px] leading-[20px] inline-block">
            Enter the location...
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] text-smi leading-[24px] font-medium text-darkslategray inline-block w-[122.5px] h-[20.5px]">
          Location
        </div>
      </div>
      <div
        className="absolute top-[481px] left-[94px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden cursor-pointer text-5xl text-base-white"
        onClick={onSignUpContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-orange-100" />
        <b className="absolute w-[62.37%] top-[calc(50%_-_20px)] left-[18.56%] flex items-center justify-center h-[39px]">
          Explore
        </b>
      </div>
      <img
        className="absolute top-[0px] left-[236px] w-[139px] h-40 object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <b className="absolute top-[205px] left-[59px] text-9xl flex items-center justify-center w-[258px] h-9">
        Explore rooms
      </b>
      <BarsHomeIndicatorOnDar
        propHeight="34px"
        propWidth="375px"
        propTop="778px"
        propRight="unset"
        propBottom="unset"
        propLeft="0px"
        propBackgroundColor="unset"
      />
      <div className="absolute top-[766.5px] left-[-15.5px] box-border w-[447px] h-px border-t-[1px] border-solid border-sienna-200" />
      <img
        className="absolute top-[539px] left-[0px] w-12 h-[239px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[767px] left-[0px] w-[375px] h-[46px] overflow-hidden text-3xs">
        <div className="absolute top-[2px] left-[0px] bg-snow w-[375px] h-11" />
        <div className="absolute top-[4px] left-[95px] w-10 h-[42px] overflow-hidden">
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Saved
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/image-30@2x.png"
          />
        </div>
        <div
          className="absolute top-[4px] left-[168px] w-10 h-[42px] overflow-hidden cursor-pointer"
          onClick={onTripsContainerClick}
        >
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Bookings
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/image-301@2x.png"
          />
        </div>
        <div className="absolute top-[4px] left-[241px] w-10 h-[42px] overflow-hidden">
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Messages
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/image-302@2x.png"
          />
        </div>
        <div className="absolute top-[4px] left-[314px] w-10 h-[42px] overflow-hidden">
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Profile
          </div>
          <img
            className="absolute top-[3px] left-[8px] w-6 h-6 object-cover"
            alt=""
            src="/image-303@2x.png"
          />
        </div>
        <div className="absolute top-[4px] left-[22px] w-10 h-[42px] overflow-hidden text-deepskyblue">
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Explore
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHomepage;
