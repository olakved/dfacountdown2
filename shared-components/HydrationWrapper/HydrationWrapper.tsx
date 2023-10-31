import { useEffect, useState } from 'react';
type Ichildren = {
  children: React.ReactNode;
};

const HydrationWrapper = ({ children }: Ichildren) => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default HydrationWrapper;
