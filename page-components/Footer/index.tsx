import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Footer() {
  const date = new Date().getFullYear();
  const router = useRouter();

  const companyData = {
    coyName: '',
    mailInfo: 'digitalforallsupport@tech4dev.com',
    telInfo: '',
    address: '32 Ade Ajayi St, Ogudu GRA 100242, Lagos',
  };

  const coyLinks = [
    {
      title: 'About Us',
      path: '/about',
    },

    {
      title: 'How to Participate',
      path: '/participate',
    },
    {
      title: 'FAQs',
      path: '/faq',
    },
  ];

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

  const handleNaviagtion = (incominPath: string | null) => {
    if (incominPath !== '') {
      router.push(`/${incominPath}`);
    } else if (incominPath === '') {
      return;
    }
  };

  return (
    <div className="  bg-[#083A55]">
      <div className="max-content">
        <div className="container">
          <div className="py-[56px] pb-[30px]  md:py-[40px]">
            <div className="flex my-[50px] mdSm:flex-col">
              <div className="w-[55%] lg:w-full">
                <div>
                  <div
                    className="w-[166px] h-[42px] cursor-pointer"
                    onClick={() => router.push(`/`)}
                  >
                    <Image
                      src="/Assets/svg/digitalLogo.svg"
                      blurDataURL="/Assets/svg/digitalLogo.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <p className="text-[#FFFFFF] font-[] font-[400] leading-[24px] tracking-normal text-[16px] mt-[25px]">
                    <span>Address: </span>
                    <span>{companyData?.address}</span>
                  </p>
                  <p className="text-[#FFFFFF] tracking-normal font-[Ubuntu] font-[400] leading-[24px] text-[16px] mt-[15px]">
                    <a href={`mailto:${companyData?.mailInfo}`}>
                      <span>Email: </span>
                      <span>{companyData?.mailInfo}</span>
                    </a>
                  </p>
                  {/* <p className="text-[#041E44] tracking-normal text-[16px] mt-[15px]">
                    <a href={`tel:${companyData?.telInfo}`}>
                      <span>Phone: </span>
                      <span>{companyData?.telInfo}</span>
                    </a>
                  </p> */}
                </div>
              </div>
              <div className="w-[45%] lg:w-full lg:mt-[30px]">
                <div className="grid grid-cols-2 md:flex md:gap-y-[30px] md:gap-[40px] xlsm:flex-col ">
                  <div>
                    <h1 className="text-[20px] font-[700] font-[Raleway] leading-[27px]  text-[#FFFFFF]  tracking-normal mb-[25px]">
                      Quick Action
                    </h1>
                    {coyLinks?.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleNaviagtion(item?.path)}
                        className="cursor-pointer"
                      >
                        <p className="text-[#FFFFFF] font-[Ubuntu] font-[400] leading-[24px] tracking-normal text-[16px] mt-[15px]">
                          {' '}
                          {item?.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-[20px] font-[700] font-[Raleway] leading-[27px]  text-[#FFFFFF]  tracking-normal mb-[25px]">
                      Socials
                    </h1>
                    <div className="flex gap-3 cursor-pointer">
                      {socalLink?.map((item, i) => (
                        <div
                          key={i}
                          className="w-[44px] h-[44px] mdSm:h-[40px] mdSm:w-[40px] p-[12px] rounded-full border-[1px] border-[#FFFFFF]"
                        >
                          <a href={item?.path} target="_blank">
                            <div className="w-[20px] h-[20px] mdSm:w-[16px] mdSm:h-[16px] ">
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
            <div className="h-[2px] mt-[50px] w-[100%] bg-[#FFFFFF]" />
            <div className="flex justify-center mt-[30px]">
              <div>
                <p className="text-center tracking-normal font-[Ubuntu] font-[400] xlsm:mb-[10px] leading-[24px] text-[16px] text-[#FFFFFF]">
                  © Tech4dev {date}. All right reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
