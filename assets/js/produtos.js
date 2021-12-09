const section = document.querySelector("main section");

const fetchData = async () => {
  const result = await fetch("http://localhost:8080/produtos");
  const produtos = await result.json();
  produtos.forEach((produto) => {
    section.innerHTML += `
    <div class="card">
      <h2>${produto.nome}</h2>
      <img src="${produto.imagem}" width="150px" />
      <p>${produto.descricao}</p>
    </div>`;
  });
};

fetchData();
