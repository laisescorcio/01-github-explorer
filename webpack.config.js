const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // modo de desenvolvimento do webpack - evita de rodar otimizações que seriam feitas em produção
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // insere a barra correta de acordo com o sistema operacional
    output: { // arquivo que será gerado do webpack
        path: path.resolve(__dirname, 'dist'), // será gerado na pasta dist
        filename: 'bundle.js' // nome do arquivo gerado
    },
    resolve: {
        extensions: ['.js', '.jsx'] // extensões que podem ser lidos
    },
    plugins: [ // para não inserir uma tag script no html para o bundle, esse plugin injeta o webpack no html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: { // como a aplicação irá se comportar em diferente tipos de arquivos
        rules: [ // array de regras
            {
                test: /\.jsx$/, // expressao regular para dizer se é js ou nao / Se terminar com jsx, será js,
                exclude: /node_modules/, // nao precisa converter o node_modules, pois já é algo que o browser irá ler
                use: 'babel-loader' // integracao entre babel e webpack - webpack utilizará o babel para converter
            }
        ]
    }

}