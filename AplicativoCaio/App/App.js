const express = require("express");
const port = 3001;
const app = express();

// Servir arquivos estáticos do diretório "assets"
app.use(express.static('assets'));

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');


app.get("/",  (req, res) => {
    res.render("index.ejs"); 
}
) ;

app.listen(port, ()  => {
    console.log(`Servidor Rodando em http://localhost:${port}`)
})