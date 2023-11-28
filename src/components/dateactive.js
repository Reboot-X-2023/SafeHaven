import { useMemo } from "react";

const Dateactive = ({
  dateinactiveBackgroundColor,
  divFontFamily,
  divFontWeight,
}) => {
  const dateinactiveStyle = useMemo(() => {
    return {
      backgroundColor: dateinactiveBackgroundColor,
    };
  }, [dateinactiveBackgroundColor]);

  const divStyle = useMemo(() => {
    return {
      fontFamily: divFontFamily,
      fontWeight: divFontWeight,
    };
  }, [divFontFamily, divFontWeight]);

  return (
    <div className="flex flex-col items-start justify-start text-center text-base text-base-white font-h4">
      <div
        className="rounded-10xl bg-secondary-100 w-[30px] h-[30px] flex flex-col items-center justify-center"
        style={dateinactiveStyle}
      >
        <div
          className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0"
          style={divStyle}
        >
          19
        </div>
      </div>
    </div>
  );
};

export default Dateactive;
