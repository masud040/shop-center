import Link from "next/link";

const ProductCard = ({ productDetails }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = productDetails;
  const discount = price * (discountPercentage / 100);
  const mainPrice = price - discount;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-center transition-all duration-3000 ease-in-out transform`}
      ></div>
      <h2 className="mt-2 text-sm lg:text-base">
        <Link className="text-base font-bold" href={`/products/${id}`}>
          {title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${category}`}>({category})</Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{description}</p>

      <p className="mt-4 text-sm text-rose-600">
        <span className="text-[#919090] line-through">${price.toFixed(2)}</span>{" "}
        ${mainPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
