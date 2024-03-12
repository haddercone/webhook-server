"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/github', (req, res) => {
    console.log(req.body);
    return res.json({ "message": req.body });
});
app.get("/", (req, res) => {
    res.json({ 'message': "Server Up and running" });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
