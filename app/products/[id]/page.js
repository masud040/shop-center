import ProductDetailsPage from "@/components/ProductDetailsPage";
import { getProductById } from "@/utils";

const ProductDetails = ({ params: { id } }) => {
  const product = getProductById(Number(id));
  console.log(product);

  return <ProductDetailsPage />;
};

export default ProductDetails;
