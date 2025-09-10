import { alterarFavorito, isFavorite } from "../utils/storage.js";

export function Card(product, render) {
  const card = document.createElement("div");
  card.className = "card";
  const fav = isFavorite(product.id);

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" /> 
    <h2>${product.title}</h2>
    <p>Preço: R$ ${product.price}</p>
    <button>${fav ? "★ Remover" : "☆ Favoritar"}</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    alterarFavorito(product);
    render();
  });

  return card;
}
