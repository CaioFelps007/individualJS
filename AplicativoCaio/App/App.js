const express = require("express");
const port = 3001;
const app = express();

app.get("/",  (req, res) => {
    res.render("index.ejs"); 
}
) ;

app.listen(port, ()  => {
    console.log(`Servidor Rodando em http://localhost:${port}`)
})