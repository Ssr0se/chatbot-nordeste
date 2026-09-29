const chat = document.getElementById("chat");

function adicionarMensagem(texto, tipo) {

    const mensagem = document.createElement("div");

    mensagem.classList.add(
        tipo === "bot"
            ? "bot-message"
            : "user-message"
    );

    mensagem.innerHTML = texto;

    chat.appendChild(mensagem);

    chat.scrollTop = chat.scrollHeight;
}


function mostrarDestinos() {

    adicionarMensagem("Destinos", "user");

    setTimeout(() => {

        adicionarMensagem(`
            🏖️ <strong>Principais destinos:</strong><br><br>

            1️⃣ Maceió - AL<br>
            2️⃣ Recife - PE<br>
            3️⃣ Natal - RN<br>
            4️⃣ Fortaleza - CE<br>
            5️⃣ Salvador - BA<br><br>

            Digite o nome do destino para receber
            mais informações.
        `, "bot");

    }, 500);
}


function mostrarPacotes() {

    adicionarMensagem("Quero conhecer os pacotes", "user");

    setTimeout(() => {

        adicionarMensagem(`
            ✈️ <strong>Nossos pacotes:</strong><br><br>

            🌴 Pacote Econômico<br>
            Ideal para quem quer economizar.<br><br>

            👨‍👩‍👧 Pacote Família<br>
            Opções para viagens em família.<br><br>

            ❤️ Pacote Romântico<br>
            Ideal para casais.<br><br>

            📅 Consulte disponibilidade e valores.
        `, "bot");

    }, 500);
}


function mostrarDuvidas() {

    adicionarMensagem("Tenho algumas dúvidas", "user");

    setTimeout(() => {

        adicionarMensagem(`
            ❓ <strong>Perguntas frequentes:</strong><br><br>

            • Qual a melhor época para viajar?<br>
            • Os pacotes incluem hospedagem?<br>
            • Posso parcelar a viagem?<br>
            • O pacote inclui passagem aérea?<br>
            • Como faço uma reserva?<br><br>

            Digite sua pergunta para continuar.
        `, "bot");

    }, 500);
}


function enviarMensagem() {

    const input = document.getElementById("userInput");

    const mensagem = input.value.trim();

    if (mensagem === "") {
        return;
    }

    adicionarMensagem(mensagem, "user");

    input.value = "";

    responder(mensagem);
}


function responder(mensagem) {

    const texto = mensagem.toLowerCase();

    setTimeout(() => {

        if (texto.includes("maceió")) {

            adicionarMensagem(`
                🏖️ <strong>Maceió - Alagoas</strong><br><br>

                Maceió é conhecida por suas praias de
                águas claras e piscinas naturais.<br><br>

                📅 Melhor período:
                setembro a março.<br><br>

                💰 Consulte nossos pacotes para
                encontrar opções de hospedagem e transporte.
            `, "bot");

        }

        else if (texto.includes("recife")) {

            adicionarMensagem(`
                🌊 <strong>Recife - Pernambuco</strong><br><br>

                Recife possui praias, centros históricos
                e diversas opções culturais.<br><br>

                📅 Ideal para quem gosta de praia,
                cultura e gastronomia.
            `, "bot");

        }

        else if (texto.includes("natal")) {

            adicionarMensagem(`
                🌴 <strong>Natal - Rio Grande do Norte</strong><br><br>

                Natal é famosa pelas dunas,
                praias e passeios de buggy.<br><br>

                🚙 Uma das atrações procuradas são
                os passeios pelas dunas.
            `, "bot");

        }

        else if (texto.includes("fortaleza")) {

            adicionarMensagem(`
                🏖️ <strong>Fortaleza - Ceará</strong><br><br>

                Fortaleza oferece praias, gastronomia
                e diversas opções de entretenimento.
            `, "bot");

        }

        else if (texto.includes("salvador")) {

            adicionarMensagem(`
                🌊 <strong>Salvador - Bahia</strong><br><br>

                Salvador combina praias, história,
                cultura e gastronomia.
            `, "bot");

        }

        else if (
            texto.includes("preço") ||
            texto.includes("preco") ||
            texto.includes("valor")
        ) {

            adicionarMensagem(`
                💰 Os valores dependem do destino,
                período da viagem, quantidade de pessoas
                e tipo de hospedagem.<br><br>

                Informe o destino desejado para
                consultar as opções disponíveis.
            `, "bot");

        }

        else if (
            texto.includes("olá") ||
            texto.includes("ola") ||
            texto.includes("oi")
        ) {

            adicionarMensagem(`
                Olá! 👋<br><br>

                Posso ajudar você a encontrar informações
                sobre destinos, pacotes e viagens para
                o Nordeste.
            `, "bot");

        }

        else {

            adicionarMensagem(`
                🤖 Ainda estou aprendendo!<br><br>

                Você pode perguntar sobre:<br><br>

                🏖️ Maceió<br>
                🌊 Recife<br>
                🌴 Natal<br>
                🏝️ Fortaleza<br>
                🌅 Salvador<br>
                💰 Preços<br>
                ✈️ Pacotes
            `, "bot");

        }

    }, 500);
}
