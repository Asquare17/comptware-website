import React, { useState } from "react";

import BorderFade from "assets/icons/border-fade.svg";


const paymentTypes = [
  {
    title: "Virtual accounts",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service.",
  },
  {
    title: "Mobile Money",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Mobile Money",
  },
  {
    title: "Crypto Payments",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Crypto Payments",
  },
  {
    title: "Ewallets",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Ewallets",
  },
];
const SectionOne = () => {
  const [activePaymentType, setActivePaymentType] = useState(paymentTypes[0]);
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit md:pt-16 gap-y-12 mb-[150px]">
      <BorderFade className="scale-x-[0.7]" />
      <p className="text-grey-text text-left leading-[1.9] bani-heading-alt font-normal ">
        <span className="text-black-light helv-medium"> Merchants </span>utilise
        our{" "}
        <span className="text-black-light helv-medium">
          unique payment solutions{" "}
        </span>
        to provide customers with{" "}
        <span className="text-black-light helv-medium">
          smooth and instant payment experiences
        </span>
        . Collecting and reconciling online and in-store payments is much more
        seamless and faster
      </p>
      <BorderFade className="scale-x-[0.7]" />

      <div className="flex flex-col md:flex-row items-center w-full h-fit space-y-2 md:space-x-8 pt-[70px]">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4 ">
          <p className="text-black-light font-semibold leading-none bani-base pb-4">
            COLLECT PAYMENTS ANYWHERE
          </p>
          {paymentTypes.map(({ title, body }) => (
            <span
              key={title}
              className={`${
                activePaymentType?.title === title
                  ? "text-black-light helv-medium"
                  : "text-black-fade font-normal"
              } tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out`}
              onClick={() => setActivePaymentType({ title, body })}
            >
              {title}
            </span>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center md:items-end w-full min-h-[55vh] pt-1 md:pt-0">
          <div className="flex flex-col justify-between items-center w-full min-h-[55vh] bg-grey-dull rounded-[40px] pb-8">
            <div className="h-[60%]"></div>
            <p className="font-light bani-title-2 text-black px-8">
              {activePaymentType?.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
