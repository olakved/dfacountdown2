import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function SubHeader() {
  const [openSubHeader, setOpenSubHeader] = useState(true);
  const router = useRouter();

  const subHeaderToggle = () => {
    setOpenSubHeader(false);
  };

  return (
    <>
      {openSubHeader && router.pathname === '/' ? (
        <div className=" w-full bg-[#DA1414] py-[15px] px-[16px] text-white">
          <div className="max-content">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[20px]">
                <div
                  className="w-[24px] h-[24px]"
                  onClick={() => router.push(`/`)}
                >
                  <Image
                    src="/Assets/svg/warningIcon.svg"
                    blurDataURL="/Assets/svg/warningIcon.svg"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <p className="text-[13px] leading-[20px] animate-marquee">
                  All learning will end in July 2024 and competition will
                  commence August 2024.
                </p>
              </div>
              <div
                className="w-[16px] h-[24px] cursor-pointer"
                onClick={subHeaderToggle}
              >
                <Image
                  src="/Assets/svg/subHeaderCloseIcon.svg"
                  blurDataURL="/Assets/svg/subHeaderCloseIcon.svg"
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
      ) : null}
    </>
  );
}

export default SubHeader;
