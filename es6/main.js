//REST

const usuario = {
    nome: 'Matheus',
    idade: '22',
    empresa: 'SKY'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);