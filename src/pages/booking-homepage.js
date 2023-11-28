import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BarsHomeIndicatorOnDar from "../components/bars-home-indicator-on-dar";

const SplashScreen = () => {
  const navigate = useNavigate();

  const onSplashScreenContainerClick = useCallback(() => {
    navigate("/1-home-screen");
  }, [navigate]);

  const onScreenshot20231127At1100ImageClick = useCallback(() => {
    navigate("/1-home-screen");
  }, [navigate]);

  return (
    <div
      className="relative bg-base-white w-full h-[812px] overflow-hidden cursor-pointer"
      onClick={onSplashScreenContainerClick}
    >
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180.02deg,_#fff,_rgba(250,_166,_41,_0.24))] w-[375px] h-[812px]" />
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
        className="absolute top-[0px] left-[0px] w-[463px] h-[644px] object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <img
        className="absolute top-[744px] left-[21px] w-[550px] h-[621px] object-cover"
        alt=""
        src="/image-72@2x.png"
      />
      <img
        className="absolute top-[572px] left-[88px] w-[200px] h-[174.6px] object-cover"
        alt=""
        src="/mask-group3@2x.png"
      />
      <img
        className="absolute top-[184px] left-[0px] w-[400px] h-[399.2px] object-cover cursor-pointer"
        alt=""
        src="/screenshot-20231127-at-1100-1@2x.png"
        onClick={onScreenshot20231127At1100ImageClick}
      />
    </div>
  );
};

export default SplashScreen;
