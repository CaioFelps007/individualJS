const express = require("express");
const port = 3001;
const app = express();
const path = require('path');


// Configura o diretório de arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'assets')));


// Configurar o mecanismo de visualização EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get("/",  (req, res) => {
    res.render("index.ejs"); 
}
) ;

app.get("/HomePage",  (req, res) => {
    res.render("home.ejs"); 
}
) ;

app.listen(port, ()  => {
    console.log(`Servidor Rodando em http://localhost:${port}`)
})