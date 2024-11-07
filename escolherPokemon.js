// Função principal que recebe a escolha e retorna a mensagem
function escolherPokemon(escolha) {
    let pokemonEscolhido;

    if (escolha === 1) {
        pokemonEscolhido = "Bulbasaur";
    } else if (escolha === 2) {
        pokemonEscolhido = "Charmander";
    } else if (escolha === 4) {
        pokemonEscolhido = "Pikachu";
    } else if (escolha === 5) {
        pokemonEscolhido = "Mewtwo";
    }

    if (pokemonEscolhido) {
        return `Voce escolheu o ${pokemonEscolhido} como seu Pokemon inicial.`;
    } else {
        return "Escolha inválida. Tente novamente.";
    }
}

module.exports = escolherPokemon;
