import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OccupancyContainer from "./occupancy-container";

const ListingCard = () => {
  const navigate = useNavigate();

  const onListing1ContainerClick = useCallback(() => {
    navigate("/231-listing-1");
  }, [navigate]);

  return (
    <div
      className="absolute top-[118px] left-[0px] w-[375px] h-[453px] overflow-hidden cursor-pointer text-left text-smi text-black font-league-spartan"
      onClick={onListing1ContainerClick}
    >
      <div className="absolute top-[5px] left-[12px] rounded-51xl bg-base-white w-[355px] h-[439px]" />
      <div className="absolute top-[273px] left-[248px] leading-[24px] font-medium text-dimgray inline-block w-[296px] h-6">
        Manchester
      </div>
      <img
        className="absolute top-[16px] left-[21px] rounded-29xl w-[334px] h-[220px] object-cover"
        alt=""
        src="/image-25@2x.png"
      />
      <div className="absolute top-[244px] left-[39px] text-xl leading-[24px] font-medium inline-block w-[304px] h-[39px]">
        Cosy double room in Manchester City Centre
      </div>
      <div className="absolute top-[37px] left-[38px] text-xl leading-[24px] font-medium inline-block w-[304px] h-[39px]">
        2 days to go...
      </div>
      <div className="absolute top-[5px] left-[246px] w-[100px] h-[103.1px] overflow-hidden">
        <div className="absolute top-[18px] left-[14px] rounded-[50%] bg-orange-100 w-[86px] h-[85px]" />
        <img
          className="absolute top-[21px] left-[17px] rounded-56xl w-20 h-[79px] object-cover"
          alt=""
          src="/ashley-2@2x.png"
        />
      </div>
      <div className="absolute top-[300px] left-[40px] leading-[24px] font-medium inline-block w-[183px] h-[43px] text-dimgray">
        <span>Hosted by</span>
        <span className="text-black">{` `}</span>
        <span className="text-deepskyblue">Ashley</span>
        <span> (4.98 )</span>
      </div>
      <div className="absolute top-[297px] left-[232px] leading-[24px] font-medium inline-block w-[107px] h-[26px] text-deepskyblue">
        <span>0.2 miles</span>
        <span className="text-darkgray"> from you</span>
      </div>
      <img
        className="absolute top-[305px] left-[167px] w-2.5 h-2.5 object-cover"
        alt=""
        src="/image-26@2x.png"
      />
      <img
        className="absolute top-[208.6px] left-[317.6px] w-[8.4px] h-[14.7px]"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="absolute top-[208.6px] left-[47px] w-[8.4px] h-[14.7px]"
        alt=""
        src="/arrow-3.svg"
      />
      <img
        className="absolute top-[282px] left-[229px] w-[15px] h-[15px] object-cover"
        alt=""
        src="/image-27@2x.png"
      />
      <OccupancyContainer occupancy="2 occupants" />
      <div className="absolute top-[395px] left-[101px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[175px] h-10 overflow-hidden text-center text-5xl text-base-white">
        <b className="absolute w-[79.89%] top-[calc(50%_-_19px)] left-[9.77%] hidden items-center justify-center h-[38px]">
          Host
        </b>
        <div className="absolute top-[0px] left-[0px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[194px] h-[58px] overflow-hidden">
          <b className="absolute w-[79.9%] top-[calc(50%_-_19px)] left-[9.79%] hidden items-center justify-center h-[38px]">
            Host
          </b>
          <div className="absolute top-[0px] left-[13px] rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[158px] h-[35px] overflow-hidden text-xl">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-deepskyblue" />
            <b className="absolute w-[81.65%] top-[calc(50%_-_17.5px)] left-[8.86%] flex items-center justify-center h-[37px]">
              Message host
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
