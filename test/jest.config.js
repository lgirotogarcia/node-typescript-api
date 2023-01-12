const { resolve } = require('path');
const root = resolve(__dirname,'..'); //pega o diretório anterior a partir deste
const rootConfig = require(`${root}/jest.config.ts`); //importa a config global do Jest

module.exports = {... rootConfig, ... { //pega tudo antes e depois de "rootConfig" e sobrescreve com os dados abaixo
    rootDir: root,
    displayName: "end2end-tests",
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/test/**/*.test.ts"]
}}