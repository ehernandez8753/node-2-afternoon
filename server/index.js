const express = require("express");
const app = express();
let port = 3001;

const messageCtrl = require("./controllers/messages_controller.js");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"))
app.listen(port, () => {console.log("Server Activated")});

app.post("/api/messages", messageCtrl.create);
app.get("/api/messages", messageCtrl.read);
app.put("/api/messages/:id", messageCtrl.update);
app.delete("/api/messages/:id", messageCtrl.delete);