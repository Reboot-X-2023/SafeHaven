import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BarsHomeIndicatorOnDar from "../components/bars-home-indicator-on-dar";
import Calendar from "../components/calendar";
import IPhoneXStatusBarsStatusBa from "../components/i-phone-x-status-bars-status-ba";

const NewBooking = () => {
  const navigate = useNavigate();

  const onSignUpContainer2Click = useCallback(() => {
    navigate("/26-my-bookings");
  }, [navigate]);

  const onTripsContainerClick = useCallback(() => {
    navigate("/26-my-bookings");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-hidden text-center text-5xl text-black font-league-spartan">
      <img
        className="absolute top-[728px] left-[266px] w-[243px] h-[239px] object-cover"
        alt=""
        src="/image-31@2x.png"
      />
      <div className="absolute top-[74px] left-[20px] rounded-51xl bg-base-white w-[335px] h-[665px]" />
      <div
        className="absolute top-[666px] left-[91px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden cursor-pointer text-base-white"
        onClick={onSignUpContainer2Click}
      >
        <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] hidden items-center justify-center h-[38px]">
          Host
        </b>
        <div className="absolute top-[0px] left-[0px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
          <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] hidden items-center justify-center h-[38px]">
            Host
          </b>
          <div className="absolute top-[0px] left-[0px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-deepskyblue" />
            <b className="absolute w-[62.37%] top-[calc(50%_-_20px)] left-[18.56%] flex items-center justify-center h-[39px]">
              Book
            </b>
          </div>
        </div>
      </div>
      <b className="absolute top-[90px] left-[53px] text-9xl flex items-center justify-center w-[258px] h-9">
        New Booking
      </b>
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
      <div className="absolute top-[747px] left-[132px] text-smi [text-decoration:underline] leading-[24px] font-medium text-deepskyblue flex items-center justify-center w-28 h-4">
        Go back to results
      </div>
      <div className="absolute top-[156px] left-[45px] text-xl leading-[24px] font-medium text-left inline-block w-[304px] h-[39px]">
        Twin room in Manchester Central Premier Inn
      </div>
      <div className="absolute top-[767px] left-[5px] w-[375px] h-[46px] overflow-hidden text-3xs">
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
      <div className="absolute top-[171px] left-[223px] w-[102px] h-[47px] overflow-hidden text-left text-smi text-dimgray">
        <img
          className="absolute top-[13px] left-[6px] w-[15px] h-[15px] object-cover"
          alt=""
          src="/image-27@2x.png"
        />
        <div className="absolute top-[9px] left-[25px] leading-[24px] font-medium inline-block w-[296px] h-6">
          Manchester
        </div>
      </div>
      <Calendar />
      <b className="absolute top-[546px] left-[52px] flex text-left items-center w-[260px] h-[57px]">
        1 Night:
      </b>
      <div className="absolute top-[603px] left-[52px] text-xl font-medium text-left flex items-center w-[280px] h-10">{`Thursday 19th September at Ashley’s `}</div>
      <div className="absolute top-[-555px] left-[-187px] w-[562px] h-[664px]">
        <img
          className="absolute top-[555px] left-[187px] w-[415px] h-[664px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
        <IPhoneXStatusBarsStatusBa
          cap="/cap.svg"
          showIPhoneXStatusBarsStatusBa={false}
          iPhoneXStatusBarsStatusBaHeight="44px"
          iPhoneXStatusBarsStatusBaWidth="375px"
          iPhoneXStatusBarsStatusBaTop="555px"
          iPhoneXStatusBarsStatusBaRight="unset"
          iPhoneXStatusBarsStatusBaBottom="unset"
          iPhoneXStatusBarsStatusBaLeft="187px"
          spanFontWeight="bold"
        />
      </div>
    </div>
  );
};

export default NewBooking;
