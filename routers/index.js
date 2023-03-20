
const accountRouter = require("./Account");
const adminRouter = require("./Admin");
const profileRouter = require("./Profile");
const cvRouter = require("./CV");
const careerRouter = require("./Career");
const cityRouter = require("./City");
const recruitmentRouter = require("./Recruitment");


function route(app) {
    app.use("/api/account", accountRouter);
    app.use("/api/recruitment", recruitmentRouter);
    app.use("/api/city", cityRouter);
    app.use("/api/career", careerRouter);
    app.use("/api/profile", profileRouter);
    app.use("/api/cv", cvRouter);
    app.use("/api/admin", adminRouter);
}

module.exports = route;