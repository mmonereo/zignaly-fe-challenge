module.exports = app => {
	app.use("/api/phones", require("./phones.routes"));
}
