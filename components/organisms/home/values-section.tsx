import {
  LuShield,
  LuUsers,
  LuStar,
  LuLeaf,
  LuTrendingUp,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

interface ValuesSectionProps {
  className?: string;
}

export default function ValuesSection({ className }: ValuesSectionProps) {
  const values = [
    {
      icon: <LuShield className="w-8 h-8 text-[#006B05]" />,
      title: "Integrity",
      description:
        "Every transaction must be clear, honest, and built on trust.",
    },
    {
      icon: <LuUsers className="w-8 h-8 text-[#006B05]" />,
      title: "Collaboration",
      description:
        "We grow by working with others — from agents and developers to clients and communities.",
    },
    {
      icon: <LuStar className="w-8 h-8 text-[#006B05]" />,
      title: "Excellence",
      description:
        "We hold ourselves to the highest standards in everything we do.",
    },
    {
      icon: <LuLeaf className="w-8 h-8 text-[#006B05]" />,
      title: "Sustainability",
      description:
        "We plan and build with the future in mind, ensuring our impact benefits generations to come.",
    },
    {
      icon: <LuTrendingUp className="w-8 h-8 text-[#006B05]" />,
      title: "Empowerment",
      description:
        "We help individuals build financial security and confidence through verified property investments.",
    },
  ];

  return (
    <section className={cn("py-8 lg:py-16 bg-inherit", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left lg:text-center space-y-2 lg:space-y-[14px] mb-10 lg:mb-12">
          <h2 className="text-[28px] lg:text-3xl font-semibold lg:font-bold text-[#323232]">
            Our Core Values
          </h2>
          <p className="text-sm lg:text-xl font-medium lg:font-normal text-[#6B6B6B] max-w-4xl mx-auto">
            A people-first real estate brand built on trust, collaboration, and
            the vision of redefining what it means to own or invest in property
            in Nigeria.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block  bg-[rgb(20,20,20)] rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
            {values.slice(0, 3).map((value, index) => (
              <div key={index} className="relative">
                <div className="px-8 text-white">
                  <div className="flex items-center gap-[14px] mb-4">
                    <div className="w-[60px] h-[60px] rounded-full border border-[#006B05] flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl text-[#FAFAFA] font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#999999] text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-[#353535]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="py-[56px]">
            <div className="w-full h-px bg-[#353535] max-w-6xl mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <div key={index + 3} className="relative">
                <div className="px-8 text-white">
                  <div className="flex items-center gap-[14px] mb-4">
                    <div className="w-[60px] h-[60px] rounded-full border border-[#006B05] flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl text-[#FAFAFA] font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#999999] text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
                {index < 1 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-[#353535]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden flex-col rounded-xl p-6 bg-[#141414]">
          {values.map((value, i) => (
            <div key={i} className="py-4">
              <div className="flex items-center gap-[14px] mb-2">
                <div className="w-[60px] h-[60px] rounded-full border border-[#006B05] flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl text-[#FAFAFA] font-semibold">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#999999] text-base leading-relaxed">
                {value.description}
              </p>
              {i < values.length - 1 && (
                <div className="mt-4 h-px w-full bg-[#353535]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
