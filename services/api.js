export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Erro de conexão com a API");
  }
  return response.json();
}
