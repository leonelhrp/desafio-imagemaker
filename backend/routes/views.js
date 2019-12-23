module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("I'm Leonel Rojas.");
    });
    app.get("*", (req, res) => {
        res.send("Not finding what you are looking for?");
    });
}