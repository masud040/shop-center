import { getAllCategory } from "@/utils";
import CustomLink from "./CustomLink";

const Sidebar = () => {
  const allCategory = getAllCategory();

  return (
    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      {allCategory?.map((category) => (
        <CustomLink key={category} name={category} />
      ))}
    </div>
  );
};

export default Sidebar;
