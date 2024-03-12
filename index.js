"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/github', (req, res) => {
    var _a, _b, _c;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.action) === "opened") {
        const resposne = {
            "title": (_b = req.body.issue) === null || _b === void 0 ? void 0 : _b.title,
            "url": (_c = req.body.issue) === null || _c === void 0 ? void 0 : _c.url
        };
        console.log("New issue opened", resposne);
        return res.json({ "New issue oppened": resposne });
    }
    return res.json({ "message": req.body });
});
app.get("/", (req, res) => {
    res.json({ 'message': "Server Up and running" });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
