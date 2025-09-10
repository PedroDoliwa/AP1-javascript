const KEY = "favoritos";

export function getFavoritos() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function isFavorite(id) {
  return getFavoritos().some((fav) => fav.id === id);
}

export function alterarFavorito(product) {
  let favoritos = getFavoritos();
  if (isFavorite(product.id)) {
    favoritos = favoritos.filter((fav) => fav.id !== product.id);
  } else {
    favoritos.push(product);
  }
  localStorage.setItem(KEY, JSON.stringify(favoritos));
}
