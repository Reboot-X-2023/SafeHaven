import { useMemo } from "react";

const Month = ({ locationCode, sATFontFamily, sATFontWeight }) => {
  const sATStyle = useMemo(() => {
    return {
      fontFamily: sATFontFamily,
      fontWeight: sATFontWeight,
    };
  }, [sATFontFamily, sATFontWeight]);

  return (
    <div className="w-[30px] h-5 flex flex-row items-center justify-center text-center text-3xs text-base-gray-40 font-h4">
      <div
        className="relative tracking-[1.5px] leading-[12px] uppercase"
        style={sATStyle}
      >
        {locationCode}
      </div>
    </div>
  );
};

export default Month;
