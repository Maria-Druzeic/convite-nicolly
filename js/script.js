// =========================================
// DATA DA FESTA
// =========================================

const dataFesta = new Date(
    "2027-01-09T19:30:00-03:00"
);


// =========================================
// ELEMENTOS DO HTML
// =========================================

const diasElemento =
    document.getElementById("dias");

const horasElemento =
    document.getElementById("horas");

const minutosElemento =
    document.getElementById("minutos");

const segundosElemento =
    document.getElementById("segundos");


// =========================================
// CONTAGEM REGRESSIVA
// =========================================

function atualizarContagem() {

    const agora = new Date();

    const diferenca =
        dataFesta.getTime() - agora.getTime();


    // A festa chegou
    if (diferenca <= 0) {

        diasElemento.textContent = "00";
        horasElemento.textContent = "00";
        minutosElemento.textContent = "00";
        segundosElemento.textContent = "00";

        return;
    }


    const dias =
        Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferenca / (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferenca / (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );


    diasElemento.textContent =
        String(dias).padStart(2, "0");

    horasElemento.textContent =
        String(horas).padStart(2, "0");

    minutosElemento.textContent =
        String(minutos).padStart(2, "0");

    segundosElemento.textContent =
        String(segundos).padStart(2, "0");
}


// Executa imediatamente
atualizarContagem();


// Atualiza a cada segundo
setInterval(
    atualizarContagem,
    1000
);

const campoNome = document.getElementById("nomeConvidado");
const botaoBuscar = document.getElementById("btnBuscar");
const resultadoBusca = document.getElementById("resultadoBusca");


function normalizarNome(nome) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}


function buscarConvidado(nomePesquisado) {

  const pesquisa = normalizarNome(nomePesquisado);

  if (!pesquisa) {
    return [];
  }

  return convidados.filter(grupo => {

    return grupo.membros.some(nome => {

      const nomeNormalizado = normalizarNome(nome);

      return nomeNormalizado.includes(pesquisa);

    });

  });

}


function pesquisar() {

  const nomeDigitado = campoNome.value.trim();

  resultadoBusca.innerHTML = "";
  resultadoBusca.hidden = false;


  // Campo vazio

  if (!nomeDigitado) {

    resultadoBusca.innerHTML = `
      <div class="mensagem-aviso">
        <p>Digite seu nome para procurar o convite.</p>
      </div>
    `;

    return;
  }


  const resultados = buscarConvidado(nomeDigitado);


  // Nenhum convidado encontrado

  if (resultados.length === 0) {

    resultadoBusca.innerHTML = `
      <div class="mensagem-erro">

        <h3>Não encontramos seu nome 😕</h3>

        <p>
          Verifique se o nome foi digitado corretamente
          e tente novamente.
        </p>

      </div>
    `;

    return;
  }


  // Um único convite encontrado

  if (resultados.length === 1) {

    mostrarConvite(resultados[0]);

    return;
  }


  // Mais de um resultado
  // Exemplo: Gabriel, João, Robson etc.

  mostrarOpcoes(resultados);

}


function mostrarConvite(grupo) {

  const quantidade = grupo.membros.length;

  let titulo = "";


  if (grupo.tipo === "familia") {
    titulo = "Encontramos sua família! 💕";
  }

  else if (grupo.tipo === "casal") {
    titulo = "Encontramos seu convite! 💕";
  }

  else {
    titulo = "Encontramos seu convite! 💕";
  }


  // Cria os membros que poderão confirmar presença

  const membrosHTML = grupo.membros.map((nome, index) => {

    return `
      <label class="membro-convidado">

        <input
          type="checkbox"
          name="presenca"
          value="${nome}"
          data-id="${grupo.id}"
          data-index="${index}"
          checked
        >

        <span>${nome}</span>

      </label>
    `;

  }).join("");


  resultadoBusca.innerHTML = `

    <div class="convite-encontrado">

      <h3>${titulo}</h3>

      <p class="nomes-convite">
        ${grupo.membros.join(", ")}
      </p>

      <p class="quantidade-convidados">
        ${quantidade}
        ${quantidade === 1 ? "convidado" : "convidados"}
      </p>


      <div class="selecao-presenca">

        <h4>Quem irá à festa?</h4>

        <p>
          Marque as pessoas que estarão presentes:
        </p>

        <div class="lista-presenca">

          ${membrosHTML}

        </div>

      </div>


      <button
        type="button"
        class="btn-confirmar"
        onclick="confirmarPresenca(${grupo.id})"
      >
        Confirmar presença
      </button>


      <button
        type="button"
        class="btn-voltar"
        onclick="novaPesquisa()"
      >
        Pesquisar outro nome
      </button>

    </div>

  `;

}


function mostrarOpcoes(resultados) {

  let opcoesHTML = "";


  resultados.forEach(grupo => {

    const nomes = grupo.membros.join(", ");

    opcoesHTML += `

      <button
        type="button"
        class="opcao-convite"
        onclick="selecionarConvite(${grupo.id})"
      >

        <strong>
          ${nomes}
        </strong>

        <span>
          ${
            grupo.tipo === "familia"
              ? "Família"
              : grupo.tipo === "casal"
              ? "Casal"
              : "Convite individual"
          }
        </span>

      </button>

    `;

  });


  resultadoBusca.innerHTML = `

    <div class="multiplos-resultados">

      <h3>Encontramos mais de um convite</h3>

      <p>
        Selecione abaixo qual é o seu:
      </p>

      <div class="lista-opcoes">

        ${opcoesHTML}

      </div>

    </div>

  `;

}


function selecionarConvite(id) {

  const grupo = convidados.find(
    convidado => convidado.id === id
  );

  if (grupo) {
    mostrarConvite(grupo);
  }

}


function confirmarPresenca(id) {

  const grupo = convidados.find(
    convidado => convidado.id === id
  );


  const selecionados = document.querySelectorAll(
    `input[data-id="${id}"]:checked`
  );


  const presentes = Array.from(selecionados).map(
    checkbox => checkbox.value
  );


  if (presentes.length === 0) {

    alert(
      "Selecione pelo menos uma pessoa que irá à festa."
    );

    return;
  }


  console.log("Convite:", grupo);
  console.log("Confirmados:", presentes);


  resultadoBusca.innerHTML = `

    <div class="confirmacao-sucesso">

      <h3>Presença confirmada! 💕</h3>

      <p>
        Ficamos muito felizes em saber que vocês estarão conosco.
      </p>

      <p>
        <strong>Confirmados:</strong>
        ${presentes.join(", ")}
      </p>

      <p>
        Esperamos vocês nos 15 anos da Nicolly! ✨
      </p>

    </div>

  `;

}


function novaPesquisa() {

  campoNome.value = "";

  resultadoBusca.innerHTML = "";

  resultadoBusca.hidden = true;

  campoNome.focus();

}


// Botão Buscar

botaoBuscar.addEventListener(
  "click",
  pesquisar
);


// Permite pesquisar apertando ENTER

campoNome.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      pesquisar();
    }

  }
);