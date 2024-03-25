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
  if (productList && productList?.products) {
    productList?.products?.forEach((product) => {
      if (!arr.includes(product.category)) {
        arr.push(product.category);
      }
    });
  }
  return arr;
}
export function getProductsByCategory(category) {
  if (productList && productList?.products) {
    return productList?.products.filter(
      (product) => product.category == category
    );
  }
  return [];
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
