import Image from "next/image";
import CustomImageSlider from "./CustomImageSlider";

const ProductDetailsPage = () => {
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
          <CustomImageSlider />
          <div className="w-full lg:w-5/12">
            <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">
              iPhone 9
            </h1>
            <span className="text-[#919090] my-3">Smartphone</span>
            <div className="flex items-center justify-start gap-1 mt-3">
              <Image src="/star.svg" width={20} height={20} alt="" />
              <Image src="/star.svg" width={20} height={20} alt="" />
              <Image src="/star.svg" width={20} height={20} alt="" />
              <Image src="/star.svg" width={20} height={20} alt="" />
              <Image src="/star.svg" width={20} height={20} alt="" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="line-through text-rose-600 opacity-60">
                  $205.00
                </span>
                <span className="text-2xl font-bold">$195.00</span>
              </p>
            </div>
            <div>
              <p className="leading-7">
                Enhance your dining space with this sleek, contemporary dining
                table, crafted from high-quality solid wood with a warm finish.
                Its sturdy construction and minimalist design make it a perfect
                addition for any home looking for a touch of elegance.
                Accommodates up to six guests comfortably and includes a
                striking fruit bowl centerpiece. The overhead lighting is not
                included.
              </p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $195
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
