import Footer from "@/components/Footer";
import GetTouch from "@/components/GetTouch";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import { Suspense } from "react";

const CategoryLayout = ({ children }) => {
  return (
    <div>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]"></header>
      <main>
        <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
          <Suspense fallback={<Loading />}>
            <Sidebar />

            {children}
          </Suspense>
        </section>
        <GetTouch />
        <Footer />
      </main>
    </div>
  );
};

export default CategoryLayout;
