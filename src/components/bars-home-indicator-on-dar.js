import { useMemo } from "react";

const BarsHomeIndicatorOnDar = ({
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propBackgroundColor,
}) => {
  const barsHomeIndicatorOnDarStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propBackgroundColor,
  ]);

  return (
    <div
      className="absolute h-[0.65%] w-[8.82%] top-[99.35%] right-[58.02%] bottom-[0%] left-[33.16%] bg-black"
      style={barsHomeIndicatorOnDarStyle}
    >
      <div className="absolute w-[calc(100%_-_241px)] right-[120px] bottom-[9px] left-[121px] rounded-81xl bg-base-white h-[5px]" />
    </div>
  );
};

export default BarsHomeIndicatorOnDar;
