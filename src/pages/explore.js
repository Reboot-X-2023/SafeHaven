import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingCard2 from "../components/listing-card2";
import ListingCard1 from "../components/listing-card1";
import MapView1 from "../components/map-view1";
import mappage from "./mappage";

const Explore = () => {
  const navigate = useNavigate();

  const onListing1ContainerClick = useCallback(() => {
    navigate("/231-listing-1");
  }, [navigate]);

  const onmappageContainerClick = useCallback(() => {
    navigate("/mappage");
  }, [navigate]);

  const onListing2ContainerClick = useCallback(() => {
    navigate("/231-listing-2");
  }, [navigate]);

  const onTripsContainerClick = useCallback(() => {
    navigate("/26-my-bookings");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[812px] overflow-y-auto text-left text-smi text-black font-league-spartan">
      {/* <img
        className="absolute top-[682px] left-[549px] w-[350px] h-[329px] object-cover"
        alt=""
        src="/image-4@2x.png"
      /> */}
      <div
        className="absolute top-[118px] left-[0px] w-[375px] h-[395px] overflow-hidden cursor-pointer text-dimgray"
        
      >
        <div className="absolute top-[5px] left-[12px] rounded-51xl bg-base-white w-[352px] h-[383px]" />
        <div className="absolute top-[273px] left-[248px] leading-[24px] font-medium inline-block w-[296px] h-6">
          Manchester
        </div>
        <img
          className="absolute top-[16px] left-[21px] rounded-29xl w-[334px] h-[220px] object-cover"
          alt=""
          src="/image-25@2x.png"
        />
        <div className="absolute top-[244px] left-[39px] text-xl leading-[24px] font-medium text-black inline-block w-[304px] h-[39px]"
        onClick={onListing2ContainerClick}>
          Cosy double room in Manchester City Centre
        </div>
        <div className="absolute top-[5px] left-[246px] w-[100px] h-[103.1px] overflow-hidden">
          <div className="absolute top-[18px] left-[14px] rounded-[50%] bg-orange-100 w-[86px] h-[85px]" />
          <img
            className="absolute top-[21px] left-[17px] rounded-56xl w-20 h-[79px] object-cover"
            alt=""
            src="/ashley-2@2x.png"
          />
        </div>
        <div className="absolute top-[300px] left-[40px] leading-[24px] font-medium inline-block w-[183px] h-[43px]">
          <span>Hosted by</span>
          <span className="text-black">{` `}</span>
          <span className="text-deepskyblue">Ashley</span>
          <span> (4.98 )</span>
        </div>
        <div className="absolute top-[297px] left-[232px] leading-[24px] font-medium inline-block w-[107px] h-[26px] text-deepskyblue">
          <span onClick={onmappageContainerClick}>0.2 miles</span>
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
        <div className="absolute top-[326px] left-[46px] w-[279px] h-[69px] overflow-hidden text-center text-3xs text-black">
          <div className="absolute top-[9px] left-[9px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[11px] w-10 h-9 object-cover"
              alt=""
              src="/image-28@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 room
            </div>
          </div>
          <div className="absolute top-[9px] left-[76px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-281@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 bed
            </div>
          </div>
          <div className="absolute top-[9px] left-[143px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-282@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 guest
            </div>
          </div>
          <div className="absolute top-[9px] left-[210px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-283@2x.png"
            />
            <div className="absolute top-[36px] left-[1px] font-light flex items-center justify-center w-[55px] h-[11px]">
              2 occupants
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[36px] w-8 h-8 overflow-hidden">
          <img
            className="absolute top-[3px] left-[3px] w-[27px] h-[27px] object-cover"
            alt=""
            src="/image-90@2x.png"
          />
          <img
            className="absolute top-[4px] left-[4px] w-[25px] h-[25px] object-cover"
            alt=""
            src="/heart-outline@2x.png"
          />
        </div>
      </div>
      <div
        className="absolute top-[513px] left-[0px] w-[375px] h-[395px] overflow-hidden cursor-pointer text-dimgray"
        
      >
        <div className="absolute top-[5px] left-[10px] rounded-51xl bg-base-white w-[353px] h-[383px]" />
        <div className="absolute top-[273px] left-[248px] leading-[24px] font-medium inline-block w-[296px] h-6">
          Manchester
        </div>
        <img
          className="absolute top-[16px] left-[21px] rounded-29xl w-[334px] h-[220px] object-cover"
          alt=""
          src="/image-251@2x.png"
        />
        <div className="absolute top-[244px] left-[39px] text-xl leading-[24px] font-medium text-black inline-block w-[304px] h-[39px]">
          Double room in small family home near Salford
        </div>
        <div className="absolute top-[5px] left-[246px] w-[100px] h-[103.1px] overflow-hidden">
          <div className="absolute top-[18px] left-[14px] rounded-[50%] bg-orange-100 w-[86px] h-[85px]" />
          <img
            className="absolute top-[21px] left-[17px] rounded-56xl w-20 h-[79px] object-cover"
            alt=""
            src="/ashley-21@2x.png"
          />
        </div>
        <div className="absolute top-[300px] left-[40px] leading-[24px] font-medium inline-block w-[183px] h-[43px]">
          <span>Hosted by</span>
          <span className="text-black">{` `}</span>
          <span className="text-deepskyblue">Maggie</span>
          <span> (5.0 )</span>
        </div>
        <div className="absolute top-[297px] left-[232px] leading-[24px] font-medium inline-block w-[107px] h-[26px] text-deepskyblue">
          <span>0.7 miles</span>
          <span className="text-darkgray"> from you</span>
        </div>
        <img
          className="absolute top-[305px] left-[166px] w-2.5 h-2.5 object-cover"
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
        <div className="absolute top-[326px] left-[46px] w-[279px] h-[69px] overflow-hidden text-center text-3xs text-black">
          <div className="absolute top-[9px] left-[9px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[-2px] left-[11px] w-10 h-9 object-cover"
              alt=""
              src="/image-28@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 room
            </div>
          </div>
          <div className="absolute top-[9px] left-[76px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-281@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 bed
            </div>
          </div>
          <div className="absolute top-[9px] left-[143px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-282@2x.png"
            />
            <div className="absolute top-[36px] left-[7px] font-light flex items-center justify-center w-11 h-[11px]">
              1 guest
            </div>
          </div>
          <div className="absolute top-[9px] left-[210px] w-[59px] h-[51px] overflow-hidden">
            <img
              className="absolute top-[1px] left-[14px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/image-283@2x.png"
            />
            <div className="absolute top-[36px] left-[1px] font-light flex items-center justify-center w-[55px] h-[11px]">
              3 occupants
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[36px] w-8 h-8 overflow-hidden">
          <img
            className="absolute top-[3px] left-[3px] w-[27px] h-[27px] object-cover"
            alt=""
            src="/image-90@2x.png"
          />
          <img
            className="absolute top-[4px] left-[4px] w-[25px] h-[25px] object-cover"
            alt=""
            src="/heart-outline@2x.png"
          />
        </div>
      </div>
      {/* <ListingCard2 />
      <ListingCard1 /> */}
      <div className="absolute top-[84px] left-[12px] text-mini leading-[20px] inline-block w-[223px] h-[18px]">
        <span className="font-medium">Showing results for “</span>
        <b>Manchester</b>
        <span className="font-medium">”</span>
      </div>
      <img
        className="absolute top-[42px] left-[317px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/filter@2x.png"
      />
      <div className="absolute top-[98px] left-[2px] w-[102px] h-6 overflow-hidden text-right text-4xs">
        <img
          className="absolute top-[4px] left-[72px] w-[30px] h-[15.5px] object-cover"
          alt=""
          src="/image-33@2x.png"
        />
        <div className="absolute top-[6px] left-[4px] leading-[20px] font-medium flex items-center w-[67px] h-[11px]">
          Available today
        </div>
      </div>
      <MapView1 />
      {/* <img
        className="absolute top-[0px] left-[0px] w-[359px] h-[400px] object-cover"
        alt=""
        src="/image-7@2x.png"
      /> */}
      {/* <img
        className="absolute top-[715px] left-[257px] w-[118px] h-[97px] object-cover"
        alt=""
        src="/image-71@2x.png"
      /> */}                                                                       
      <div className="absolute top-[35px] left-[10px] w-[284px] h-11 text-mini text-lightslategray">
        <div className="absolute top-[0px] left-[0px] w-[284px] h-11 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white" />
          </div>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border border-[1px] border-solid border-aliceblue" />
          </div>
          <div className="absolute w-[calc(100%_-_32px)] top-[calc(50%_-_10px)] left-[16px] leading-[20px] inline-block">
            Enter the location...
          </div>
        </div>
      </div>
      
      <div className="absolute top-[1749px] left-[0px] bg-gainsboro w-[375px] h-[49px]" />
    </div>
  );
};

export default Explore;
