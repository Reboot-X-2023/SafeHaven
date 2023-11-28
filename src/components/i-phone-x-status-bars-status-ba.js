import { useMemo } from "react";

const IPhoneXStatusBarsStatusBa = ({
  cap,
  showIPhoneXStatusBarsStatusBa,
  iPhoneXStatusBarsStatusBaHeight,
  iPhoneXStatusBarsStatusBaWidth,
  iPhoneXStatusBarsStatusBaTop,
  iPhoneXStatusBarsStatusBaRight,
  iPhoneXStatusBarsStatusBaBottom,
  iPhoneXStatusBarsStatusBaLeft,
  spanFontWeight,
}) => {
  const iPhoneXStatusBarsStatusBaStyle = useMemo(() => {
    return {
      height: iPhoneXStatusBarsStatusBaHeight,
      width: iPhoneXStatusBarsStatusBaWidth,
      top: iPhoneXStatusBarsStatusBaTop,
      right: iPhoneXStatusBarsStatusBaRight,
      bottom: iPhoneXStatusBarsStatusBaBottom,
      left: iPhoneXStatusBarsStatusBaLeft,
    };
  }, [
    iPhoneXStatusBarsStatusBaHeight,
    iPhoneXStatusBarsStatusBaWidth,
    iPhoneXStatusBarsStatusBaTop,
    iPhoneXStatusBarsStatusBaRight,
    iPhoneXStatusBarsStatusBaBottom,
    iPhoneXStatusBarsStatusBaLeft,
  ]);

  const timeStyle = useMemo(() => {
    return {
      fontWeight: spanFontWeight,
    };
  }, [spanFontWeight]);

  return (
    <div
      className="absolute h-[0.84%] w-[8.82%] top-[0%] right-[0%] bottom-[99.16%] left-[91.18%] text-center text-sm text-black font-league-spartan"
      style={iPhoneXStatusBarsStatusBaStyle}
    >
      {showIPhoneXStatusBarsStatusBa && (
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_187.5px)] w-[375px] h-11 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
          <div className="absolute top-[17px] right-[14px] w-[25px] h-3">
            <div className="absolute top-[0.3px] right-[3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-black" />
            <img
              className="absolute top-[4px] right-[0.7px] w-[1.3px] h-1 opacity-[0.4] mix-blend-normal"
              alt=""
              src={cap}
            />
            <div className="absolute top-[2.3px] right-[5px] rounded-[1.33px] bg-black w-[18px] h-[7.3px]" />
          </div>
          <img
            className="relative w-[15.3px] h-[11px]"
            alt=""
            src="/wifi.svg"
          />
          <img
            className="relative w-[17px] h-[10.7px]"
            alt=""
            src="/cellular-connection.svg"
          />
          <div className="absolute top-[13px] left-[21px] w-[54px] h-[21px]">
            <div
              className="absolute top-[calc(50%_-_7.5px)] left-[0px] font-thin inline-block w-[54px]"
              style={timeStyle}
            >
              <span className="tracking-[-0.28px]">9:4</span>1
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPhoneXStatusBarsStatusBa;
