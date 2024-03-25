import { getProducts } from "@/utils";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  const products = getProducts();

  return (
    <main>
      <section className="w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl">
        <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:my-10">
          {products?.map((product) => (
            <ProductCard key={product.id} productDetails={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
