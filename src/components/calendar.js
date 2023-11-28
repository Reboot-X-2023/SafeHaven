import Month from "./month";
import Dateinactive from "./dateinactive";
import Dateactive from "./dateactive";

const Calendar = () => {
  return (
    <div className="absolute top-[218px] left-[35px] rounded-lg bg-base-white shadow-[2px_16px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-col items-start justify-start p-6 gap-[22px] text-center text-sm text-base-gray-80 font-league-spartan">
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-between">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icons.svg"
        />
        <div className="relative leading-[14px] font-semibold">
          September 2021
        </div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icons1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
        <Month
          locationCode="SAN"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="MON "
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="TUE"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="WED"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="THU"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="FRI"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
        <Month
          locationCode="SAT"
          sATFontFamily="'League Spartan'"
          sATFontWeight="600"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Dateinactive
            carModelNumber="1"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="2"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="3"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="4"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="5"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="6"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="7"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Dateinactive
            carModelNumber="8"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="9"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="10"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="11"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="12"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="13"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="14"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Dateinactive
            carModelNumber="15"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="16"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="17"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="18"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateactive
            dateinactiveBackgroundColor="#faa629"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="20"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="21"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Dateinactive
            carModelNumber="22"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="23"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="24"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="25"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="26"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="27"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="28"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Dateinactive
            carModelNumber="29"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="30"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
          <Dateinactive
            carModelNumber="31"
            dateinactiveBorderRadius="unset"
            dateinactiveBackgroundColor="unset"
            divColor="#4a5660"
            divFontFamily="'League Spartan'"
            divFontWeight="600"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
