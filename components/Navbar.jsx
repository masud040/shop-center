import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-4 mx-auto lg:w-10/12 max-w-7xl lg:py-5">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/menu.svg"
            className="lg:hidden"
            alt=""
            height={20}
            width={20}
          />
          <Link href="/">
            <Image src="/lws-logo-black.svg" height={110} width={110} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/avatar.svg"
          className="hidden lg:block "
          height={18}
          width={18}
          alt="login acount avatar"
        />
        <Image
          src="/shopping-Cart.svg"
          className="block"
          height={20}
          width={20}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
