const section = document.querySelector("main section");

const fetchData = async () => {
  const result = await fetch("https://api-pw-hs.herokuapp.com//produtos");
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
