import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MapView1 = () => {
  return (
    <div className="absolute top-[79px] left-[275px] w-[89px] h-[39px] overflow-hidden text-left text-4xs text-deepskyblue font-league-spartan">
      <div className="absolute top-[15px] left-[44px] [text-decoration:underline] leading-[20px] font-medium flex items-center w-[59px] h-[15px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7009827060765!2d-0.0824594241330207!3d51.5187016098786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb2495189e1%3A0x8e06d04bd09baf08!2s151%20Bishopsgate%2C%20London!5e0!3m2!1sen!2suk!4v1701172799576!5m2!1sen!2suk" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default MapView1;
