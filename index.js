const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const Task = require("./models/Task");
const app = express();
const tasksRoutes = require("./routes/tasksRoutes");
const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

app.use("/tasks", tasksRoutes);

conn.sync()
	.then(() => {
		app.listen(port);
	})
	.catch((err) => {
		console.info(`Nao foi possivel conectar ao banco de dados ${err}`);
	});
