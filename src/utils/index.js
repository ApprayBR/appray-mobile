export function getStaticImageByName() {
    const IMAGES = {
        Enfermidade: require('appray/src/resources/images/enfermidade.png'), // statically analyzed
        Financeiro: require('appray/src/resources/images/financeiro.png'),
        Proteção: require('appray/src/resources/images/protecao.png'),
        Fé: require('appray/src/resources/images/fe.png'),
    }
    return IMAGES;
};