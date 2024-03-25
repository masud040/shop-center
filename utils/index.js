import productList from "../data/products.json";
export function getProducts() {
  if (productList && productList?.products) {
    return productList.products;
  }
  return [];
}

export function getProductById(id) {
  if (productList && productList?.products) {
    const matched = productList.products?.find((product) => product.id === id);
    if (matched) {
      return matched;
    }
    return {};
  }
}
export function getAllCategory() {
  const arr = [];
}
