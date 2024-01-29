type IpageLayout = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: IpageLayout) => {
  return (
    <>
      <div className=" w-full h-[100%]">{children}</div>
    </>
  );
};

export default PageLayout;
