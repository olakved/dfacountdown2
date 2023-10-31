import Footer from '@/page-components/Footer';
import Header from '@/page-components/Header';

type IpageLayout = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: IpageLayout) => {
  return (
    <>
      {<Header />}
      <div className=" w-full h-[100%]">{children}</div>
      <Footer />
    </>
  );
};

export default PageLayout;
