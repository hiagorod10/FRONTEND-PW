const fornecedoresSelect = document.querySelector("#fornecedor");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const options = { method: "post", body: formData };

  const response = await fetch(
    "https://api-pw-hs.herokuapp.com//produtos",
    options
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    alert("O produto foi cadastrado com sucesso.");
  } else {
    console.warn("Falha ao consultar a API");
  }
});

async function getfornecedores() {
  const response = await fetch(
    "https://api-pw-hs.herokuapp.com//fornecedores"
  );
  const fornecedores = await response.json();

  fornecedores.forEach((fornecedor) => {
    fornecedoresSelect.innerHTML += `<option value="${fornecedor.id}">${fornecedor.nome}</option>`;
  });
}

getFornecedors();
