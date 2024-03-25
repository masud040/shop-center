import Sidebar from "@/components/Sidebar";

const CategoryLayout = ({ children }) => {
  return (
    <div>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]"></header>
      <main>
        <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
          <Sidebar />
          <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryLayout;
