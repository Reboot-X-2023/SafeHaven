import { useCallback } from "react";
import ListingCard from "../components/listing-card";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();

  const onExploreContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-y-auto text-center text-3xs text-black font-league-spartan">
      <img
        className="absolute top-[682px] left-[549px] w-[350px] h-[329px] object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <ListingCard />
      <img
        className="absolute top-[0px] left-[0px] w-[359px] h-[400px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
      <img
        className="absolute top-[715px] left-[257px] w-[118px] h-[97px] object-cover"
        alt=""
        src="/image-71@2x.png"
      />
      <div className="absolute top-[767px] left-[0px] w-[375px] h-[46px] overflow-hidden">
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
        <div className="absolute top-[4px] left-[168px] w-10 h-[42px] overflow-hidden text-deepskyblue">
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Bookings
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/mask-group1@2x.png"
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
        <div
          className="absolute top-[4px] left-[22px] w-10 h-[42px] overflow-hidden cursor-pointer"
          onClick={onExploreContainerClick}
        >
          <div className="absolute top-[29px] left-[-6px] leading-[24px] font-medium flex items-center justify-center w-[53px] h-2.5">
            Explore
          </div>
          <img
            className="absolute top-[4px] left-[11px] w-5 h-5 object-cover"
            alt=""
            src="/image-304@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[1749px] left-[0px] bg-gainsboro w-[375px] h-[49px]" />
      <div className="absolute top-[63px] left-[58px] w-[258px] h-9 text-9xl">
        <b className="absolute top-[0px] left-[0px] flex items-center justify-center w-[258px] h-9">
          1 Upcoming Booking
        </b>
      </div>
    </div>
  );
};

export default MyBookings;
