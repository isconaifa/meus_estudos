const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get("/", function (req, res){
const items = [
    {
        title: "F",
        mensagem: "elicidade"},
    {
        title: "R",
        mensagem: "espeito"},
    {
        title: "A",
        mensagem: "gilidade"},
    {
        title: "N",
        mensagem: "acionalista"},
    {
        title: "C",
        mensagem: "onciente"},
    {
        title: "I",
        mensagem: "ntelectual"},
    {
        title: "S",
        mensagem: "olidário"},
    {
        title: "C",
        mensagem: "oerente"},
    {
        title: "O",
        mensagem: "timista",}
];


    res.render("pages/index", {
        qualitys: items,
    });
});
       


app.get("/about", function (req, res){
    res.render("pages/about") ;
})

app.listen(8080);

console.log('Servidor está iniciando');