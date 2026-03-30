import { Phone } from "lucide-react";

function ContactCard() {
  return (
    <div className="bg-[#F4F4F4] px-4 sm:px-5 md:px-10 pb-16 sm:pb-20 md:pb-25">
      
      <div className="bg-[#FFFFFF] rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-8">

        <div className="flex items-center gap-3 mb-3">

          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#D6FF98]">
            <Phone className="w-4 h-4 text-[#4A7C0A]" />
          </div>

          <h3 className="text-[#0F172A] font-bold instrument-sans text-[20px] sm:text-[22px] md:text-[24px]">
            Contact Us
          </h3>

        </div>

        <p className="text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk mb-4">
          For any questions or concerns:
        </p>

        <ul className="space-y-2 text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk font-semibold ml-2 break-words">

          <li>
            • Email: <span className="font-[400] break-all">support@buysel.in</span>
          </li>

          <li>
            • Phone: <span className="font-[400]">+91 9061827363</span>
          </li>

          <li>
            • Address: <span className="font-[400]">Kochi, Kerala, India</span>
          </li>

        </ul>

      </div>

    </div>
  );
}

export default ContactCard;