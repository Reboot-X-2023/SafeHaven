import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OccupancyContainer from "./occupancy-container";

const ListingCard2 = () => {
  const navigate = useNavigate();

  const onListing3ContainerClick = useCallback(() => {
    navigate("/231-listing-3");
  }, [navigate]);

  return (
    <div
      className="absolute top-[908px] left-[0px] w-[375px] h-[395px] overflow-hidden cursor-pointer text-left text-smi text-dimgray font-league-spartan"
      onClick={onListing3ContainerClick}
    >
      <div className="absolute top-[5px] left-[10px] rounded-51xl bg-base-white w-[353px] h-[383px]" />
      <div className="absolute top-[273px] left-[248px] leading-[24px] font-medium inline-block w-[296px] h-6">
        Manchester
      </div>
      <img
        className="absolute top-[16px] left-[21px] rounded-29xl w-[334px] h-[220px] object-cover"
        alt=""
        src="/image-252@2x.png"
      />
      <div className="absolute top-[244px] left-[39px] text-xl leading-[24px] font-medium text-black inline-block w-[304px] h-[39px]">
        Tidy single room in quiet household
      </div>
      <div className="absolute top-[5px] left-[246px] w-[100px] h-[103.1px] overflow-hidden">
        <div className="absolute top-[18px] left-[14px] rounded-[50%] bg-orange-100 w-[86px] h-[85px]" />
        <img
          className="absolute top-[21px] left-[17px] rounded-56xl w-20 h-[79px] object-cover"
          alt=""
          src="/ashley-22@2x.png"
        />
      </div>
      <div className="absolute top-[300px] left-[40px] leading-[24px] font-medium inline-block w-[183px] h-[43px]">
        <span>{`Hosted by `}</span>
        <span className="text-deepskyblue">Craig</span>
        <span> (4.77 )</span>
      </div>
      <div className="absolute top-[297px] left-[232px] leading-[24px] font-medium inline-block w-[107px] h-[26px] text-deepskyblue">
        <span>0.9 miles</span>
        <span className="text-darkgray"> from you</span>
      </div>
      <img
        className="absolute top-[305px] left-[161px] w-2.5 h-2.5 object-cover"
        alt=""
        src="/image-26@2x.png"
      />
      <img
        className="absolute top-[216px] left-[324px] w-px h-0"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="absolute top-[216px] left-[49px] w-px h-0"
        alt=""
        src="/arrow-3.svg"
      />
      <img
        className="absolute top-[282px] left-[229px] w-[15px] h-[15px] object-cover"
        alt=""
        src="/image-27@2x.png"
      />
      <OccupancyContainer occupancy="1 occupants" />
      <img
        className="absolute top-[36px] left-[40px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/image-29@2x.png"
      />
    </div>
  );
};

export default ListingCard2;
