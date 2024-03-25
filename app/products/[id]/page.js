import ProductDetailsPage from "@/components/ProductDetailsPage";
import { getProductById } from "@/utils";

const ProductDetails = ({ params: { id } }) => {
  const product = getProductById(Number(id));

  return <ProductDetailsPage productDetails={product} />;
};

export default ProductDetails;
