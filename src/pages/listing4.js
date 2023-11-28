import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BarsHomeIndicatorOnDar from "../components/bars-home-indicator-on-dar";

const Listing4 = () => {
  const navigate = useNavigate();

  const onSignUpContainer1Click = useCallback(() => {
    navigate("/231-new-booking");
  }, [navigate]);

  const onGoBackToClick = useCallback(() => {
    navigate("/23-explore");
  }, [navigate]);

  const onTripsContainerClick = useCallback(() => {
    navigate("/26-my-bookings");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-hidden text-center text-smi text-black font-league-spartan">
      <div className="absolute top-[74px] left-[20px] rounded-51xl bg-base-white w-[335px] h-[665px]" />
      <div
        className="absolute top-[663px] left-[91px] rounded-81xl bg-orange-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden cursor-pointer text-5xl text-base-white"
        onClick={onSignUpContainer1Click}
      >
        <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] hidden items-center justify-center h-[38px]">
          Host
        </b>
        <div className="absolute top-[0px] left-[0px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-orange-100" />
          <b className="absolute w-[62.37%] top-[calc(50%_-_20px)] left-[18.56%] flex items-center justify-center h-[39px]">{`Check availability `}</b>
        </div>
      </div>
      <b className="absolute top-[90px] left-[53px] text-9xl flex items-center justify-center w-[258px] h-9">
        Premier Inn’s Listing
      </b>
      <img
        className="absolute top-[682px] left-[549px] w-[350px] h-[329px] object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[359px] h-[400px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
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
      <img
        className="absolute top-[715px] left-[257px] w-[118px] h-[97px] object-cover"
        alt=""
        src="/image-71@2x.png"
      />
      <div
        className="absolute top-[747px] left-[132px] [text-decoration:underline] leading-[24px] font-medium text-deepskyblue flex items-center justify-center w-28 h-4 cursor-pointer"
        onClick={onGoBackToClick}
      >
        Go back to results
      </div>
      <img
        className="absolute top-[129px] left-[21px] rounded-29xl w-[334px] h-[220px] object-cover"
        alt=""
        src="/image-253@2x.png"
      />
      <div className="absolute top-[357px] left-[39px] text-xl leading-[24px] font-medium text-left inline-block w-[304px] h-[39px]">
        Twin room in Manchester Central Premier Inn
      </div>
      <img
        className="absolute top-[595px] left-[52px] w-[270px] h-[46px]"
        alt=""
        src="/amenities.svg"
      />
      <div className="absolute top-[118px] left-[246px] w-[100px] h-[103.1px] overflow-hidden">
        <div className="absolute top-[18px] left-[14px] rounded-[50%] bg-orange-100 w-[86px] h-[85px]" />
        <img
          className="absolute top-[21px] left-[17px] rounded-56xl w-20 h-[79px] object-cover"
          alt=""
          src="/ashley-3@2x.png"
        />
      </div>
      <div className="absolute top-[413px] left-[40px] leading-[24px] font-medium text-left inline-block w-[183px] h-[43px] text-dimgray">
        <span>{`Hosted by `}</span>
        <span className="text-deepskyblue">Premier Inn</span>
        <span> (4.87 )</span>
      </div>
      <div className="absolute top-[572px] left-[39px] leading-[24px] font-medium text-dimgray text-left inline-block w-[180px] h-[23px]">
        Amenities
      </div>
      <div className="absolute top-[391px] left-[248px] leading-[24px] font-medium text-dimgray text-left inline-block w-[296px] h-6">
        Manchester
      </div>
      <div className="absolute top-[410px] left-[232px] leading-[24px] font-medium text-left inline-block w-[107px] h-[26px] text-deepskyblue">
        <span>0.1 miles</span>
        <span className="text-darkgray"> from you</span>
      </div>
      <img
        className="absolute top-[418px] left-[193px] w-2.5 h-2.5 object-cover"
        alt=""
        src="/image-26@2x.png"
      />
      <img
        className="absolute top-[321.6px] left-[317.6px] w-[8.4px] h-[14.7px]"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="absolute top-[321.6px] left-[47px] w-[8.4px] h-[14.7px]"
        alt=""
        src="/arrow-3.svg"
      />
      <img
        className="absolute top-[395px] left-[229px] w-[15px] h-[15px] object-cover"
        alt=""
        src="/image-27@2x.png"
      />
      <div className="absolute top-[444px] left-[40px] leading-[19px] font-extralight text-left inline-block w-[283px] h-[47px]">
        Twin hotel room in Manchester City Centre.
      </div>
      <div className="absolute top-[508px] left-[55px] w-[59px] h-[51px] overflow-hidden text-3xs">
        <img
          className="absolute top-[0px] left-[11px] w-10 h-9 object-cover"
          alt=""
          src="/image-28@2x.png"
        />
        <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
          1 room
        </div>
      </div>
      <div className="absolute top-[508px] left-[122px] w-[59px] h-[51px] overflow-hidden text-3xs">
        <img
          className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/image-281@2x.png"
        />
        <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
          1 bed
        </div>
      </div>
      <div className="absolute top-[508px] left-[189px] w-[59px] h-[51px] overflow-hidden text-3xs">
        <img
          className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/image-282@2x.png"
        />
        <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
          1 guest
        </div>
      </div>
      <div className="absolute top-[508px] left-[256px] w-[59px] h-[51px] overflow-hidden text-3xs">
        <img
          className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/image-283@2x.png"
        />
        <div className="absolute top-[36px] left-[1px] font-light flex items-center justify-center w-[55px] h-[11px]">
          0 occupants
        </div>
      </div>
      <img
        className="absolute top-[566px] left-[40px] w-[291px] h-0.5"
        alt=""
        src="/line-2.svg"
      />
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
    </div>
  );
};

export default Listing4;
