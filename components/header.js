export function Header(onNavigate) {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <button id="nav-produtos">Produtos</button>
    <button id="nav-favoritos">Favoritos</button>
    `;
  nav.querySelector("#nav-produtos").addEventListener("click", () => {
    onNavigate("produtos");
  });
  nav.querySelector("#nav-favoritos").addEventListener("click", () => {
    onNavigate("favoritos");
  });
  return nav;
}
