const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root, //diretório que esse arquivo se encontra, diretório raiz
    displayName: 'root-tests', //nome da label para quando o teste rodar, caso ele esteja rodando nessa configuração (global)
    testMatch: ['<rootDir>/src/**/*.test.ts'], //esse arquivo de configuração só vai dar match com os arquivos dentro da pasta src
    testEnvironment: 'node', //ambiente de teste
    clearMocks: true, //vai limpar os mocks(?) por padrão
    preset: 'ts-jest', //pré setado para rodar o ts-jest
    moduleNameMapper: { //para poder usar os alias nos testes do jest
        '@src/(.*': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1'
    }
};