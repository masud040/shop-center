"use client";
import { capitalizeFirstLetter } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ name }) => {
  const pathname = usePathname();
  const active = pathname === `/category/${name}`;

  return (
    <Link
      href={`/category/${name}`}
      className={`${
        active && "text-indigo-700 font-semibold"
      } box-border block h-6 mt-4 border-black hover:border-b w-max`}
    >
      {capitalizeFirstLetter(name)}
    </Link>
  );
};

export default CustomLink;
