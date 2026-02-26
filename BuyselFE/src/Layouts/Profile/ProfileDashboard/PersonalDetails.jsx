import { Phone } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";



const PersonalDetails = ({ users }) => {
  return (
    <div className="w-full ">
      <h2 className="host-grotesk text-[1px] sm:text-[24px] font-[500] leading-[14px] mb-3 sm:mb-6">Personal Details</h2>

      <div className="bg-[#f8f8f8] rounded-[32px] px-[41px] py-[41px]">
        <Detail icon={<FaUser size={19}/>} label="Full Name" value={users.fullName} />
        <Detail icon={<TbMailFilled size={19} />} label="Email Address" value={users.email} />
        <Detail icon={<Phone
        size={19} fill="currentColor" stroke="none" className="text-black"/>} label="Mobile Number" value={users.phone} />
        <Detail icon={<Phone
        size={19} fill="currentColor" stroke="none" className="text-black"/>} label="Mobile Number" value={users.altPhone1} />
        <Detail icon={<Phone
        size={19} fill="currentColor" stroke="none" className="text-black"/>} label="Mobile Number" value={users.altPhone2} />
      </div>
    </div>
  );
};

const Detail = ({ icon, label, value }) => (
<div className="flex items-start gap-3 py-4 border-b-[1px] border-[#d1cdcd] last:border-b-0">
    <div className="w-4 h-4 mt-1">{icon}</div>
    <div className="host-grotesk space-y-1">
      <p className="text-[16px] leading-[26px] font-[400] text-[#a29f9f]">{label}</p>
      <p className="text-[16px] leading-[14px] font-[500]  text-[#847b7b]">{value}</p>
    </div>
  </div>
);

export default PersonalDetails;