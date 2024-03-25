import Image from "next/image";
import Link from "next/link";
import CustomImageSlider from "./CustomImageSlider";

const ProductDetailsPage = ({ productDetails }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    category,
    thumbnail,
    images,
  } = productDetails || {};

  const discount = price * (discountPercentage / 100);
  const mainPrice = price - discount;
  const ratings = [...Array(Math.round(rating)).keys()];
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
          <CustomImageSlider thumbnail={thumbnail} images={images} />
          <div className="w-full lg:w-5/12">
            <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">
              {title}
            </h1>
            <Link
              href={`/category/${category}`}
              className="text-[#919090] my-3"
            >
              {category}
            </Link>
            <div className="flex items-center justify-start gap-1 mt-3">
              {ratings?.map((ind) => (
                <Image
                  key={ind}
                  src="/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="line-through text-rose-600 opacity-60">
                  ${price.toFixed(2)}
                </span>
                <span className="text-2xl font-bold">
                  ${mainPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${mainPrice.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
