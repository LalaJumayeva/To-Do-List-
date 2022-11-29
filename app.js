const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
let ejs = require('ejs');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');


let input = "";
let listOfitems=[];
let workItems = [];






app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {listTitle: day, newListitems: listOfitems});

});


app.post("/", function(req, res){
    input = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(input);
        res.redirect("/work")
    } else{
        listOfitems.push(input)
        res.redirect("/");
    }
    
  
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListitems: workItems})
});

app.post("/work", function(req, res){
    let input = req.body.newItem;
    workItems.push(input);
    res.redirect("/work")
})

app.get("/about", function(req, res){
    res.render("about")
})

app.delete("/", async(req, res) => {
    todo

})



app.listen(
    PORT,
    () => console.log(`Server is alive on port:${PORT}`));
