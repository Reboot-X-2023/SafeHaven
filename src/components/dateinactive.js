import { useMemo } from "react";

const Dateinactive = ({
  carModelNumber,
  dateinactiveBorderRadius,
  dateinactiveBackgroundColor,
  divColor,
  divFontFamily,
  divFontWeight,
}) => {
  const dateinactive1Style = useMemo(() => {
    return {
      borderRadius: dateinactiveBorderRadius,
      backgroundColor: dateinactiveBackgroundColor,
    };
  }, [dateinactiveBorderRadius, dateinactiveBackgroundColor]);

  const div1Style = useMemo(() => {
    return {
      color: divColor,
      fontFamily: divFontFamily,
      fontWeight: divFontWeight,
    };
  }, [divColor, divFontFamily, divFontWeight]);

  return (
    <div
      className="w-[30px] h-[30px] flex flex-col items-center justify-center text-center text-base text-base-gray-80 font-h4"
      style={dateinactive1Style}
    >
      <div
        className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0"
        style={div1Style}
      >
        {carModelNumber}
      </div>
    </div>
  );
};

export default Dateinactive;
