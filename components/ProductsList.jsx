import { getProducts } from "@/utils";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  const products = getProducts();

  return (
    <main>
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {products?.map((product) => (
            <ProductCard key={product.id} productDetails={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
