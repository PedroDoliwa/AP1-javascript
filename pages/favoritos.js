import { Card } from "../components/card.js";
import { getFavoritos } from "../utils/storage.js";

export function FavoritoPage() {
  const container = document.createElement("div");
  container.id = "favoritos";

  const data = getFavoritos();
  if (data.length === 0) {
    container.innerHTML = "<p>Você não tem favoritos ainda.</p>";
  } else {
    data.forEach((product) => {
      container.appendChild(Card(product, FavoritoPage));
    });
  }

  return container;
}
