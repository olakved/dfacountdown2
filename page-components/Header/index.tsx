import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SubHeader from './subHeader';

const headerLinks = [
  {
    titleName: 'Home',
    path: '/',
  },
  {
    titleName: 'How to Participate',
    path: '/participate',
  },
  {
    titleName: 'About',
    path: '/about',
  },
  {
    titleName: 'FAQs',
    path: '/faq',
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  /**
   * When the hamburger is clicked, set the state of the hamburger to open and close.
   */
  const openHamburger = () => {
    setIsOpen(true);
  };

  const closeHamburger = () => {
    if (isOpen === true) {
      return setIsOpen(false);
    }
  };

  const handleLinkClick = (path: string) => {
    router.push(path);
  };

  const handleLinkClickMobile = (path: string) => {
    setIsOpen(true);
    router.push(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-colors duration-500 bg-[#083A55] xlsm:shadow-md   ${
          isOpen || router?.pathname !== '/' ? 'bg-[#FFFFFF] shadow-sm' : ''
        }`}
      >
        <div>
          <SubHeader />
        </div>
        <div className="max-content font-[Manrope] cursor-pointer">
          {/* header start */}
          <div className="container">
            <div className="flex justify-between md:flex-row-reverse md:justify-end md:gap-[40px] sm:gap-[20px] items-center py-[24px]">
              <div className="flex gap-[80px] lg:gap-[50px] md:gap-0 items-center">
                <div
                  className="w-[160px] h-[43px] md:hidden"
                  onClick={() => router.push(`/`)}
                >
                  <Image
                    src={`${
                      router?.pathname === '/'
                        ? '/Assets/svg/digitalLogo.svg'
                        : '/Assets/svg/dfaLogoCol.svg'
                    }`}
                    blurDataURL="/Assets/svg/digitalLogo.svg"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>

                <div
                  className="w-[160px] h-[43px] hidden md:block"
                  onClick={() => router.push(`/`)}
                >
                  <Image
                    src={`${
                      isOpen
                        ? '/Assets/svg/dfaLogoCol.svg'
                        : `${
                            router?.pathname === '/'
                              ? '/Assets/svg/digitalLogo.svg'
                              : '/Assets/svg/dfaLogoCol.svg'
                          }`
                    }`}
                    blurDataURL="/Assets/svg/dfaLogoCol.svg"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[50px]  md:hidden lg:gap-[30px]">
                <div className="flex items-center gap-[30px]  md:hidden lg:gap-[10px]">
                  {headerLinks?.map((item) => {
                    return (
                      <div
                        key={item?.path}
                        onClick={() => handleLinkClick(item?.path)}
                      >
                        <p
                          className={`text-[16px] font-[Raleway] font-[500] leading-[24px] text-[#393A4A] ${
                            router?.pathname === item?.path && '/'
                              ? 'border-b-[2px] border-[#3CAE5C] text-[#3CAE5C] font-[700]'
                              : router?.pathname === '/' &&
                                'text-[#FFFFFF] font-[500]'
                          }`}
                        >
                          {item?.titleName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Hamburger Click Start */}
              <div className="flex  items-center gap-[10px] md:hidden">
                <a href="https://dfa.digitalforall.tech4dev.com/login">
                  <button
                    className="btn-secondary font-[Ubuntu] font-[400] text-[16px] leading-[24px] xlsm:w-[50%]"
                    onClick={() => router.push(`/`)}
                  >
                    Login
                  </button>
                </a>
                <a href="https://dfa.digitalforall.tech4dev.com/register">
                  <button className="btn-primary-min xlsm:w-[50%] font-[Ubuntu] font-[400] text-[16px] leading-[24px]">
                    Register
                  </button>
                </a>
              </div>
              <div className="hidden md:block">
                {isOpen ? (
                  <div className="w-[24px] h-[24px]" onClick={closeHamburger}>
                    <Image
                      src="/Assets/svg/menuClose.svg"
                      blurDataURL="/Assets/svg/menuClose.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                ) : (
                  <div className="w-[24px] h-[24px] " onClick={openHamburger}>
                    <Image
                      src={`${
                        router.pathname === '/'
                          ? '/Assets/svg/menuOpen.svg'
                          : '/Assets/svg/menuOpenBlack.svg'
                      }`}
                      blurDataURL="/Assets/svg/menuOpen.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
              {/*  hamburger click end*/}
            </div>
          </div>
          {/* Header end */}

          {/* shadow when open */}
          {isOpen && (
            <div className="hidden md:block h-[2px] shadow-lg w-full bg-[#00000011]"></div>
          )}
          {/* shadow end */}

          {/* Menu Start */}
          {isOpen && (
            <div className="hidden md:block">
              <div className="p-[20px] bg-[#FFFFFF]  h-[100vh]  flex flex-col  cursor-pointer">
                <div className="flex  flex-col gap-[10px] ">
                  {headerLinks?.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center p-[15px] font-[Ubuntu] font-[500] text-[16px] leading-[24px] ${
                        router?.pathname === item?.path
                          ? 'text-[#287D3C] bg-[#EDF9F0] rounded-[8px] xlsm:w-full'
                          : 'text-[#393A4A]'
                      }`}
                      onClick={() => handleLinkClickMobile(item?.path)}
                    >
                      <p>{item?.titleName}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="hidden xlsm:block mt-[40px]">
                    <div className="flex  items-center gap-[10px] sm:w-full">
                      <button className="btn-secondary xlsm:w-[50%] btn-secondary font-[Ubuntu] font-[400] text-[16px] leading-[24px]">
                        <a href="https://dfa.digitalforall.tech4dev.com/login">
                          Login
                        </a>
                      </button>
                      <button className="btn-primary-min xlsm:w-[50%] btn-secondary font-[Ubuntu] font-[400] text-[16px] leading-[24px]">
                        <a href="https://dfa.digitalforall.tech4dev.com/register">
                          Register
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Menu End */}
        </div>
      </nav>
    </>
  );
}

export default Header;
