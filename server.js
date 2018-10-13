const app = require("express")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/test", (req, res)=>{
  res.json({
    success: true,
    message: "This is a test route"
  });
});
app.listen(PORT, ()=>{
  console.log(`App listening on Port: ${PORT}`);
});