const OccupancyContainer = ({ occupancy }) => {
  return (
    <div className="absolute top-[326px] left-[46px] w-[279px] h-[69px] overflow-hidden text-center text-3xs text-black font-league-spartan">
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
          {occupancy}
        </div>
      </div>
    </div>
  );
};

export default OccupancyContainer;
