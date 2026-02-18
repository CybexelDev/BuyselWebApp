import { ArrowUpRight } from 'lucide-react';

export default function ButtonHead({color="bg-[#7AC943]", text,textColor="text-white",hover="bg-[#6BB535]"}) {
    return (
        <div className="w-fit relative">
            <button className={`head-btn relative gap-3 ${color} hover:${hover} ${textColor} px-5 py-2 w-fit rounded-[15px] transition-all duration-200 shadow-md hover:shadow-lg rounded-l-2xl`}
            >
                <span className="font-semibold ">
                    {text} &nbsp; &nbsp;&nbsp; &nbsp;
                </span>

            </button>
            <div className="flex items-center justify-center w-5 h-5 bg-[#7AC943] rounded-full transition-transform duration-200 group-hover:scale-110 absolute top-[-2px] right-0 z-99">
                <ArrowUpRight className="w-3 h-3 text-[#fff]" strokeWidth={2.5} />
            </div>
        </div>
    );
}