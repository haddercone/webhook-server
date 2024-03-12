import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.post('/github', (req: Request, res: Response) => {
    console.log(req.body);
    return res.json({"message": req.body});
});

app.get("/", (req: Request, res: Response) => {
    res.json({'message': "Server Up and running"})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
