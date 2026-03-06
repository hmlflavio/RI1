//Dance_Or_Die

const capitao = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "Capitalismo",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundaria: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
    }
};

const ironman = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "Repulsores",
    velocidade: 90,
    forca: 85,
    resistencia: 85,
    descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundaria: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
    }
};

const thanos = {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada Dupla",
    velocidade: 70,
    forca: 100,
    resistencia: 95,
    descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundaria: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
    }
};

const personagens = [capitao, ironman, thanos];

console.log("=== COMPARAÇÃO DOS PERSONAGENS ===");

for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
        let p1 = personagens[i];
        let p2 = personagens[j];
        
        console.log(`\n--- Batalha: ${p1.codinome} vs ${p2.codinome} ---`);
        
        let pontosP1 = 0;
        let pontosP2 = 0;

        if (p1.forca > p2.forca) pontosP1++;
        else if (p2.forca > p1.forca) pontosP2++;

        if (p1.velocidade > p2.velocidade) pontosP1++;
        else if (p2.velocidade > p1.velocidade) pontosP2++;

        if (p1.resistencia > p2.resistencia) pontosP1++;
        else if (p2.resistencia > p1.resistencia) pontosP2++;

        console.log(`Placar de Atributos: ${p1.codinome} [${pontosP1}] x [${pontosP2}] ${p2.codinome}`);
        
        if (pontosP1 > pontosP2) {
            console.log(`🏆 O vencedor é: ${p1.codinome}!`);
        } else if (pontosP2 > pontosP1) {
            console.log(`🏆 O vencedor é: ${p2.codinome}!`);
        } else {
            console.log("⚖️ Empate!");
        }
    }
}