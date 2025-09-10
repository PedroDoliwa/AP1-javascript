import { Card } from "../components/card.js";
import { fetchProducts } from "../services/api.js";

export async function ProdutoPage() {
  const container = document.createElement("div");
  container.id = "produtos";

  const searchContainer = document.createElement("div");
  searchContainer.innerHTML = `
    <input type="text" id="search-input" placeholder="🔍 Buscar produtos por nome...">
  `;
  container.appendChild(searchContainer);

  try {
    const data = await fetchProducts();
    let filteredData = data;

    const productsContainer = document.createElement("div");
    productsContainer.id = "products-container";
    container.appendChild(productsContainer);

    function filterProducts(searchTerm) {
      filteredData = data.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      renderProducts();
    }

    function renderProducts() {
      productsContainer.innerHTML = '';
      
      if (filteredData.length === 0) {
        productsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; padding: 2rem; color: #666;">Nenhum produto encontrado.</p>';
        return;
      }
      
      filteredData.forEach((product) => {
        productsContainer.appendChild(Card(product, ProdutoPage));
      });
    }

    const searchInput = container.querySelector('#search-input');
    searchInput.addEventListener('input', (e) => {
      filterProducts(e.target.value);
    });

    renderProducts();
    
  } catch (error) {
    container.innerHTML = `<p style="text-align: center; padding: 2rem; color: #e74c3c;">Erro ao carregar produtos: ${error.message}</p>`;
  }

  return container;
}
