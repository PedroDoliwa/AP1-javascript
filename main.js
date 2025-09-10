import { Header } from "./components/header.js";
import { FavoritoPage } from "./pages/favoritos.js";
import { ProdutoPage } from "./pages/produto.js";

const app = document.getElementById("app");
const header = document.getElementById("header");
const loading = document.getElementById("loading");

async function renderPage(page) {
  app.innerHTML = "";
  
  // Mostrar loading apenas para produtos (que faz requisição)
  if (page === "produtos") {
    loading.classList.remove("hidden");
    try {
      const produtosPage = await ProdutoPage();
      app.appendChild(produtosPage);
    } catch (error) {
      app.innerHTML = `<p>Erro ao carregar produtos: ${error.message}</p>`;
    } finally {
      loading.classList.add("hidden");
    }
  }
  
  if (page === "favoritos") {
    app.appendChild(FavoritoPage());
  }
}

header.appendChild(Header(renderPage));
renderPage("produtos");
