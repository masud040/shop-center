import { getAllCategory } from "@/utils";
import Link from "next/link";

const Sidebar = () => {
  const allCategory = getAllCategory();
  console.log(allCategory);
  return (
    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      <Link
        href={`/category/`}
        className="box-border block h-6 mt-4 border-black hover:border-b"
      >
        All
      </Link>
    </div>
  );
};

export default Sidebar;
