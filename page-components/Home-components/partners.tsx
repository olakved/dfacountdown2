import Image from 'next/image';
import React from 'react';

function PartnersSection() {
  return (
    <div className="max-content pt-[160px] pb-[100px] xlsm:py-[50px]">
      <div className="container">
        <p className="font-[Raleway] font-[600] text-[32px] xlsm:text-[25px] leading-[43px] text-[#3CAE5C] text-center mb-[40px]">
          Supported By
        </p>
        <div className="flex items-center justify-center gap-[50px] xlsm:gap-[30px] lg:flex-wrap">
          <div className="h-[52px] w-[172px] xlsm:w-[120px]">
            <Image
              src="/Assets/png/FCDO.png"
              blurDataURL="/Assets/png/FCDO.png"
              priority
              unoptimized={false}
              alt="hero"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="flex items-center gap-[50px]">
            <div className="h-[33px] w-[10px] lg:hidden">
              <Image
                src="/Assets/svg/divider.svg"
                blurDataURL="/Assets/svg/divider.svg"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className="h-[70px] w-[172px]">
              <Image
                src="/Assets/png/NITDA.jpg"
                blurDataURL="/Assets/png/NITDA.jpg"
                priority
                unoptimized={false}
                alt="nitda"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <div className="h-[33px] w-[10px] lg:hidden">
              <Image
                src="/Assets/svg/divider.svg"
                blurDataURL="/Assets/svg/divider.svg"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className="h-[52px] w-[172px] xlsm:w-[120px]">
              <Image
                src="/Assets/svg/venture.svg"
                blurDataURL="/Assets/svg/venture.svg"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <div className="h-[33px] w-[10px] lg:hidden">
              <Image
                src="/Assets/svg/divider.svg"
                blurDataURL="/Assets/svg/divider.svg"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className="h-[52px] w-[172px] xlsm:w-[120px]">
              <Image
                src="/Assets/svg/prunedge.svg"
                blurDataURL="/Assets/svg/prunedge.svg"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
