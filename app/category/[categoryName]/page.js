import ProductCard from "@/components/ProductCard";
import { getAllCategory, getProductsByCategory } from "@/utils";

export async function generateStaticParams() {
  const allCategory = getAllCategory();
  return allCategory?.map((category) => ({
    categoryName: category,
  }));
}

const CategoryDetails = ({ params: { categoryName } }) => {
  const matchesProduct = getProductsByCategory(categoryName);

  return (
    <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
      {matchesProduct?.map((product) => (
        <ProductCard key={product.id} productDetails={product} />
      ))}
    </div>
  );
};

export default CategoryDetails;
