import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..') //a partir DESTE diretório(__dirname), voltando 2 duas pastas (para a pasta root) e listando todos os diretórios.

moduleAlias.addAliases({
    '@src':path.join(files,'src'),   //alias: concat do caminho(caminho, nome da pasta)
    '@test':path.join(files,'test')
})