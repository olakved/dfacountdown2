import Image from 'next/image';
import React from 'react';

function Socials() {
  const socalLink = [
    {
      path: 'https://www.linkedin.com/school/tech4dev/',
      logo: '/Assets/svg/linkedin.svg',
    },
    {
      path: 'https://www.Twitter.com/Tech4Devhq',
      logo: '/Assets/svg/twitter.svg',
    },
    {
      path: 'https://www.Instagram.com/Tech4dev',
      logo: '/Assets/svg/instagram.svg',
    },
    {
      path: 'https://web.facebook.com/Tech4DevHQ',
      logo: '/Assets/svg/facebook.svg',
    },
  ];
  return (
    <div className="flex justify-center lg:px-[50px]">
      <div className="bg-[#052435] rounded-[80px] lgSm:rounded-[40px]">
        <div className=" max-content py-[50px] lgSm:py-[20px] lgSm:px-[0px]">
          <div className="container text-white w-[1150px] lg:max-w-[900px] lgSm:w-full">
            <div className="flex flex-col items-center">
              <p className="font-[Raleway] font-[600] text-[34px] xlsm:text-[25px] leading-[43px] lgSm:text-[25px] text-[#3CAE5C] text-center">
                Unlock the Future of Tech with Us!
              </p>
              <p className="font-[Raleway] font-[400] text-[20px] lgSm:text-[16px] leading-[43px] text-[#FFFFFF] text-center">
                Follow, Learn, and Innovate - Join our vibrant community across
                all social platforms.
              </p>

              <div className="flex gap-3 cursor-pointer mt-[40px] lgSm:mt-[20px]">
                {socalLink?.map((item, i) => (
                  <div
                    key={i}
                    className="w-[44px] h-[44px] lgSm:h-[40px] lgSm:w-[40px] p-[12px] rounded-full border-[1px] border-[#FFFFFF]"
                  >
                    <a href={item?.path} target="_blank">
                      <div className="w-[20px] h-[20px] lgSm:w-[16px] lgSm:h-[16px] ">
                        <Image
                          src={item?.logo}
                          blurDataURL={item?.logo}
                          priority
                          unoptimized={false}
                          alt="hero"
                          objectFit="contain"
                          layout="fill"
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
