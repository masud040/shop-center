import Sidebar from "@/components/Sidebar";

const CategoryLayout = ({ children }) => {
  return (
    <div>
      <header class="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]"></header>
      <main>
        <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <Sidebar />
          <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryLayout;
