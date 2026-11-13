import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="shadow-navbar app-container tablet:py-12 tablet:pr-12 tablet:pl-[20px] rounded-4xl bg-white/85 px-16 py-8 backdrop-blur-3xl">
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}
