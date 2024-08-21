async function fetchProducts() {
  try {
    console.log("started request...");
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error("HTTP error ", response.status);
    }
    const data = await response.json();

    data.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(`Could not get products: ${error}`);
  }
}

fetchProducts();
