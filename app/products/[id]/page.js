import ProductDetailsPage from "@/components/ProductDetailsPage";
import { getProductById, getProducts } from "@/utils";

export async function generateStaticParams() {
  const allProducts = getProducts();
  return allProducts?.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetails = ({ params: { id } }) => {
  const product = getProductById(Number(id));

  return <ProductDetailsPage productDetails={product} />;
};

export default ProductDetails;
