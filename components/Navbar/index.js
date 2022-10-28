import NAVIGATION from "../../navigation/navbarRoutes";
import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleNavigation = useCallback(() => {
    setScroll(!window.scrollY <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const items = NAVIGATION.map(({ route, name }) => {
    return (
      <a className="navEffect" key={route} href={route}>
        {name}
      </a>
    );
  });
  return (
    <div
      className={`w-full flex md:justify-center fixed top-0 ${
        scroll
          ? "bg-neutral-700/70 text-white transition-colors duration-500 backdrop-blur"
          : "bg-transparent"
      } z-20`}
    >
      <div className="p-6 w-full h-9 flex items-center md:w-2/4">
        <div className="flex w-full text-base justify-between font-medium md:text-lg">
          {items}
        </div>
      </div>
    </div>
  );
}
