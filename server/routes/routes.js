const Prospect = require("../controllers/Prospect.controllers");





module.exports = (app) => {
    app.get("/api/prospects", Prospect.findAll);
    app.get("/api/prospects/:id", Prospect.findOne);
    app.post("/api/prospects", Prospect.create);
    app.put("/api/prospects/:id", Prospect.update);
    app.delete("/api/prospects/:id", Prospect.delete)


    };
