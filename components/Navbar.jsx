import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-5 mx-auto lg:w-10/12 max-w-7xl lg:py-6">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/menu.svg"
            className="w-5 h-5 lg:hidden"
            alt=""
            height={20}
            width={20}
          />
          <a href="./index.html">
            <Image
              src="/lws-logo-black.svg"
              className="h-10"
              height={110}
              width={110}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          height={20}
          width={20}
          alt="login acount avatar"
        />
        <Image
          src="/shopping-Cart.svg"
          className="block w-5 h-5"
          height={20}
          width={20}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
