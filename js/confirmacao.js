/* =========================================================
   NICOLLY - XV ANOS
   CONFIRMACAO DE PRESENCA
   ========================================================= */


/* =========================================================
   1. LISTA DE CONVIDADOS
   ========================================================= */

const convidados = [

    /* =========================
       FAMILIAS
       ========================= */

    {
        id: 1,
        tipo: "familia",
        membros: ["Vanessa", "Diego", "Isabela"]
    },

    {
        id: 2,
        tipo: "familia",
        membros: ["João César", "Eliane", "João Vitor"]
    },

    {
        id: 3,
        tipo: "familia",
        membros: ["Marcelo Henrique", "Giliane", "Henrique"]
    },

    {
        id: 4,
        tipo: "familia",
        membros: ["Emerson", "Patrícia", "Yuri"]
    },

    {
        id: 5,
        tipo: "familia",
        membros: ["Tiago", "Elaine", "Vitória", "Julia"]
    },

    {
        id: 6,
        tipo: "familia",
        membros: ["Robson", "Andréia", "Bernardo"]
    },

    {
        id: 7,
        tipo: "familia",
        membros: ["Daiane", "Vitor", "Fátima"]
    },

    {
        id: 8,
        tipo: "familia",
        membros: ["Ana Karla", "Maitê", "Davi"]
    },


    /* =========================
       FAMILIA FERNANDES
       ========================= */

    {
        id: 9,
        tipo: "familia",
        grupo: "Fernandes",
        membros: ["Karina", "Emilly", "Lara"]
    },

    {
        id: 10,
        tipo: "familia",
        grupo: "Fernandes",
        membros: [
            "Daniele",
            "André",
            "Agatha",
            "Amanda",
            "Luiz Fernando"
        ]
    },

    {
        id: 11,
        tipo: "familia",
        grupo: "Fernandes",
        membros: [
            "Kevlyn",
            "Lucas",
            "Sophia",
            "Davi Lucca"
        ]
    },

    {
        id: 12,
        tipo: "familia",
        grupo: "Fernandes",
        membros: ["Danilo", "Ayla"]
    },

    {
        id: 13,
        tipo: "familia",
        grupo: "Fernandes",
        membros: [
            "Deivyson",
            "Juliana",
            "Kauê",
            "Gabriel"
        ]
    },

    {
        id: 14,
        tipo: "familia",
        grupo: "Fernandes",
        membros: ["Daniel", "Gael"]
    },

    {
        id: 15,
        tipo: "familia",
        grupo: "Fernandes",
        membros: ["Kelly", "Daniel"]
    },

    {
        id: 16,
        tipo: "familia",
        grupo: "Fernandes",
        membros: [
            "Rafael",
            "Mayane",
            "João",
            "Miguel",
            "Maria Isabely"
        ]
    },


    /* =========================
       OUTRAS FAMILIAS
       ========================= */

    {
        id: 17,
        tipo: "familia",
        membros: [
            "Flávia",
            "Pedro Luiz",
            "André Luiz"
        ]
    },

    {
        id: 18,
        tipo: "familia",
        membros: [
            "Karla Maria",
            "João Bosco",
            "Maria Aparecida"
        ]
    },

    {
        id: 19,
        tipo: "familia",
        membros: [
            "Rosemeire",
            "Wladimir",
            "Eduardo"
        ]
    },

    {
        id: 20,
        tipo: "familia",
        membros: [
            "Cristina",
            "Sérgio",
            "Elisabethy",
            "Noah"
        ]
    },

    {
        id: 21,
        tipo: "familia",
        membros: ["Robson", "Arthur"]
    },

    {
        id: 22,
        tipo: "familia",
        membros: [
            "Elisangela",
            "Carlos",
            "Giovanna"
        ]
    },

    {
        id: 23,
        tipo: "familia",
        membros: [
            "Alex",
            "Rosemeire",
            "Beatriz"
        ]
    },

    {
        id: 24,
        tipo: "familia",
        membros: [
            "Jackeline",
            "Guilherme",
            "Thomás Henrique"
        ]
    },


    /* =========================
       FAMILIA MENDES
       ========================= */

    {
        id: 25,
        tipo: "familia",
        grupo: "Mendes",
        membros: [
            "Irene",
            "Paloma",
            "Joel",
            "Sthefany",
            "João",
            "Miguel"
        ]
    },


    /* =========================
       CASAIS
       ========================= */

    {
        id: 26,
        tipo: "casal",
        membros: [
            "Maria Laura",
            "Breno"
        ]
    },

    {
        id: 27,
        tipo: "casal",
        membros: [
            "Leonardo",
            "Lígian"
        ]
    },

    {
        id: 28,
        tipo: "casal",
        membros: [
            "Luciana",
            "Verydiane"
        ]
    },

    {
        id: 29,
        tipo: "casal",
        membros: [
            "Erick",
            "Fabiana"
        ]
    },

    {
        id: 30,
        tipo: "casal",
        grupo: "Mendes",
        membros: [
            "Rosemary",
            "Roberto"
        ]
    },

    {
        id: 31,
        tipo: "casal",
        grupo: "Mendes",
        membros: [
            "Paula",
            "Iago Gabriel"
        ]
    },

    {
        id: 32,
        tipo: "casal",
        grupo: "Mendes",
        membros: [
            "Sara",
            "Aurora"
        ]
    },


    /* =========================
       INDIVIDUAIS
       ========================= */

    {
        id: 33,
        tipo: "individual",
        membros: ["Cristiana"]
    },

    {
        id: 34,
        tipo: "individual",
        membros: ["Glória"]
    },

    {
        id: 35,
        tipo: "individual",
        membros: ["Ana Flávia"]
    },

    {
        id: 36,
        tipo: "individual",
        grupo: "Mendes",
        membros: ["Roselúcia"]
    },

    {
        id: 37,
        tipo: "individual",
        grupo: "Mendes",
        membros: ["Rinaldo"]
    },


    /* =========================
       AMIGOS - INDIVIDUAIS
       ========================= */

    {
        id: 38,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Emilly"]
    },

    {
        id: 39,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Milton"]
    },

    {
        id: 40,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Gabriel"]
    },

    {
        id: 41,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Grazyele"]
    },

    {
        id: 42,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Ana Clara"]
    },

    {
        id: 43,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Julia Lopes"]
    },

    {
        id: 44,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Ana Livia"]
    },

    {
        id: 45,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Stephanye"]
    },

    {
        id: 46,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Pietrha"]
    },

    {
        id: 47,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Vitória Cavalcante"]
    },

    {
        id: 48,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Ana Julia"]
    },

    {
        id: 49,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Maria Clara"]
    },

    {
        id: 50,
        tipo: "individual",
        grupo: "Amigos",
        membros: ["Kauany"]
    }

];


/* =========================================================
   2. ELEMENTOS DA PAGINA
   ========================================================= */

const campoNome =
    document.getElementById("nomeConvidado");

const botaoBuscar =
    document.getElementById("btnBuscar");

const resultadoBusca =
    document.getElementById("resultadoBusca");


/* =========================================================
   3. NORMALIZAR NOMES
   ========================================================= */

/*
   Transforma:

   João   -> joao
   Glória -> gloria
   ANDRÉ  -> andre

   Isso facilita a pesquisa.
*/

function normalizarNome(nome) {

    return nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =========================================================
   4. PROTEGER TEXTO EXIBIDO
   ========================================================= */

function escaparHTML(texto) {

    const elemento = document.createElement("div");

    elemento.textContent = texto;

    return elemento.innerHTML;

}


/* =========================================================
   5. BUSCAR CONVIDADO
   ========================================================= */

function buscarConvidado(nomePesquisado) {

    const pesquisa =
        normalizarNome(nomePesquisado);

    if (!pesquisa) {
        return [];
    }


    return convidados.filter(grupo => {

        return grupo.membros.some(nome => {

            const nomeNormalizado =
                normalizarNome(nome);

            return nomeNormalizado.includes(pesquisa);

        });

    });

}


/* =========================================================
   6. REALIZAR PESQUISA
   ========================================================= */

function pesquisar() {

    if (!campoNome || !resultadoBusca) {
        return;
    }


    const nomeDigitado =
        campoNome.value.trim();


    resultadoBusca.innerHTML = "";
    resultadoBusca.hidden = false;


    /* Campo vazio */

    if (!nomeDigitado) {

        resultadoBusca.innerHTML = `
            <div class="mensagem-aviso">

                <h3>Digite seu nome 💙</h3>

                <p>
                    Precisamos do seu nome para
                    encontrar o convite.
                </p>

            </div>
        `;

        campoNome.focus();

        return;
    }


    const resultados =
        buscarConvidado(nomeDigitado);


    /* Nenhum resultado */

    if (resultados.length === 0) {

        resultadoBusca.innerHTML = `
            <div class="mensagem-erro">

                <h3>
                    Não encontramos seu convite
                </h3>

                <p>
                    Verifique se o nome foi
                    digitado corretamente e
                    tente novamente.
                </p>

                <button
                    type="button"
                    class="btn-voltar"
                    data-acao="tentar-novamente"
                >
                    Tentar novamente
                </button>

            </div>
        `;

        return;
    }


    /* Exatamente um resultado */

    if (resultados.length === 1) {

        mostrarConvite(resultados[0]);

        return;
    }


    /*
       Mais de um convite encontrado.

       Isso é importante para nomes como:
       Robson
       Daniel
       Gabriel
       Emilly
       João
       Miguel
       Rosemeire
    */

    mostrarOpcoes(resultados);

}


/* =========================================================
   7. MOSTRAR CONVITE ENCONTRADO
   ========================================================= */

function mostrarConvite(grupo) {

    if (!resultadoBusca) {
        return;
    }


    const quantidade =
        grupo.membros.length;


    let titulo;


    if (grupo.tipo === "familia") {

        titulo =
            "Encontramos sua família! 💙";

    } else if (grupo.tipo === "casal") {

        titulo =
            "Encontramos o convite de vocês! 💙";

    } else {

        titulo =
            "Encontramos seu convite! 💙";

    }


    const membrosHTML =
        grupo.membros
            .map((nome, index) => {

                return `
                    <label
                        class="membro-convidado"
                    >

                        <input
                            type="checkbox"
                            name="presenca"
                            value="${escaparHTML(nome)}"
                            data-id="${grupo.id}"
                            data-index="${index}"
                            checked
                        >

                        <span>
                            ${escaparHTML(nome)}
                        </span>

                    </label>
                `;

            })
            .join("");


    resultadoBusca.innerHTML = `

        <div class="convite-encontrado">

            <h3>
                ${titulo}
            </h3>

            <p class="nomes-convite">
                ${grupo.membros
                    .map(escaparHTML)
                    .join(", ")}
            </p>

            <p class="quantidade-convidados">

                ${quantidade}

                ${
                    quantidade === 1
                        ? "convidado"
                        : "convidados"
                }

            </p>


            <div class="selecao-presenca">

                <h4>
                    Quem estará presente?
                </h4>

                <p>
                    Marque somente as pessoas
                    que irão à festa.
                </p>


                <div class="lista-presenca">

                    ${membrosHTML}

                </div>

            </div>


            <button
                type="button"
                class="btn-confirmar"
                data-confirmar="${grupo.id}"
            >
                Confirmar presença
            </button>


            <button
                type="button"
                class="btn-voltar"
                data-acao="nova-pesquisa"
            >
                Pesquisar outro nome
            </button>

        </div>
    `;

}


/* =========================================================
   8. MOSTRAR OPCOES PARA NOMES REPETIDOS
   ========================================================= */

function mostrarOpcoes(resultados) {

    if (!resultadoBusca) {
        return;
    }


    const opcoesHTML =
        resultados
            .map(grupo => {

                const nomes =
                    grupo.membros
                        .map(escaparHTML)
                        .join(", ");


                let tipoTexto;


                if (grupo.tipo === "familia") {

                    tipoTexto = "Família";

                } else if (grupo.tipo === "casal") {

                    tipoTexto = "Casal";

                } else {

                    tipoTexto =
                        "Convite individual";

                }


                return `
                    <button
                        type="button"
                        class="opcao-convite"
                        data-convite-id="${grupo.id}"
                    >

                        <strong>
                            ${nomes}
                        </strong>

                        <span>
                            ${tipoTexto}
                        </span>

                    </button>
                `;

            })
            .join("");


    resultadoBusca.innerHTML = `

        <div class="multiplos-resultados">

            <h3>
                Encontramos mais de um convite
            </h3>

            <p>
                Escolha abaixo qual é o seu:
            </p>


            <div class="lista-opcoes">

                ${opcoesHTML}

            </div>


            <button
                type="button"
                class="btn-voltar"
                data-acao="nova-pesquisa"
            >
                Voltar
            </button>

        </div>
    `;

}


/* =========================================================
   9. SELECIONAR UM CONVITE
   ========================================================= */

function selecionarConvite(id) {

    const grupo =
        convidados.find(
            convidado =>
                convidado.id === Number(id)
        );


    if (!grupo) {
        return;
    }


    mostrarConvite(grupo);

}


/* =========================================================
   10. CONFIRMAR PRESENCA
   ========================================================= */

function confirmarPresenca(id) {

    const grupo =
        convidados.find(
            convidado =>
                convidado.id === Number(id)
        );


    if (!grupo) {
        return;
    }


    const selecionados =
        resultadoBusca.querySelectorAll(
            `input[data-id="${grupo.id}"]:checked`
        );


    const presentes =
        Array.from(selecionados)
            .map(
                checkbox =>
                    checkbox.value
            );


    /*
       É necessário selecionar pelo menos
       uma pessoa.
    */

    if (presentes.length === 0) {

        resultadoBusca.insertAdjacentHTML(
            "beforeend",
            `
                <div
                    class="mensagem-aviso"
                    id="avisoSelecao"
                    style="margin-top: 12px;"
                >
                    <p>
                        Selecione pelo menos
                        uma pessoa que irá à festa.
                    </p>
                </div>
            `
        );

        return;
    }


    /* Remove aviso anterior */

    const avisoAnterior =
        document.getElementById(
            "avisoSelecao"
        );

    if (avisoAnterior) {
        avisoAnterior.remove();
    }


    /*
       Neste momento a confirmação existe
       apenas no navegador.

       O banco de dados será conectado
       posteriormente.
    */

    console.log(
        "Convite:",
        grupo.id
    );

    console.log(
        "Confirmados:",
        presentes
    );


    mostrarSucesso(
        grupo,
        presentes
    );

}


/* =========================================================
   11. MENSAGEM DE SUCESSO
   ========================================================= */

function mostrarSucesso(
    grupo,
    presentes
) {

    const nomesConfirmados =
        presentes
            .map(escaparHTML)
            .join(", ");


    resultadoBusca.innerHTML = `

        <div class="confirmacao-sucesso">

            <h3>
                Presença confirmada! 💙
            </h3>

            <p>
                Ficamos muito felizes em
                saber que você estará conosco
                nesse momento tão especial.
            </p>


            <p>
                <strong>
                    ${
                        presentes.length === 1
                            ? "Presença confirmada:"
                            : "Presenças confirmadas:"
                    }
                </strong>

                <br>

                ${nomesConfirmados}
            </p>


            <p>
                Esperamos vocês nos
                15 anos da Nicolly! ✨
            </p>


            <button
                type="button"
                class="btn-voltar"
                data-acao="nova-pesquisa"
            >
                Voltar
            </button>

        </div>
    `;

}


/* =========================================================
   12. NOVA PESQUISA
   ========================================================= */

function novaPesquisa() {

    if (!campoNome || !resultadoBusca) {
        return;
    }


    campoNome.value = "";

    resultadoBusca.innerHTML = "";

    resultadoBusca.hidden = true;

    campoNome.focus();

}


/* =========================================================
   13. EVENTO DO BOTAO BUSCAR
   ========================================================= */

if (botaoBuscar) {

    botaoBuscar.addEventListener(
        "click",
        pesquisar
    );

}


/* =========================================================
   14. PESQUISAR COM ENTER
   ========================================================= */

if (campoNome) {

    campoNome.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                pesquisar();

            }

        }
    );

}


/* =========================================================
   15. EVENTOS DOS RESULTADOS
   ========================================================= */

/*
   Como os botoes de resultado são criados
   dinamicamente pelo JavaScript, usamos
   um único evento no container.
*/

if (resultadoBusca) {

    resultadoBusca.addEventListener(
        "click",
        function (event) {

            const botaoConvite =
                event.target.closest(
                    "[data-convite-id]"
                );


            if (botaoConvite) {

                selecionarConvite(
                    botaoConvite.dataset
                        .conviteId
                );

                return;
            }


            const botaoConfirmar =
                event.target.closest(
                    "[data-confirmar]"
                );


            if (botaoConfirmar) {

                confirmarPresenca(
                    botaoConfirmar.dataset
                        .confirmar
                );

                return;
            }


            const botaoAcao =
                event.target.closest(
                    "[data-acao]"
                );


            if (!botaoAcao) {
                return;
            }


            if (
                botaoAcao.dataset.acao ===
                    "nova-pesquisa" ||
                botaoAcao.dataset.acao ===
                    "tentar-novamente"
            ) {

                novaPesquisa();

            }

        }
    );

}


/* =========================================================
   16. ESTADO INICIAL
   ========================================================= */

if (resultadoBusca) {

    resultadoBusca.hidden = true;

}