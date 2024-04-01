import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import MainMenu from "./MainMenu";
import TopNav from "./TopNav";

type Props = {};

const Header: React.FC<Props> = () => {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (size.width > 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [size.width]);

  return (
    <>
      {/* ===== Top Navigation ===== */}
      {/* <TopNav /> */}

      {/* ===== Main Navigation ===== */}
      <MainMenu isMobile={isMobile} />
    </>
  );
};

export default Header;
