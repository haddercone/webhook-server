import express, { Request, Response } from "express";
require('./discord')
const app = express();
app.use(express.json());

app.post('/github', (req: Request, res: Response) => {
    if(req.body?.action === "opened"){
        const resposne = {
            "title": req.body.issue?.title,
            "url" : req.body.issue?.url
        }
        console.log("New issue opened", resposne);
        
        return res.json({"New issue oppened": resposne})
    }
    return res.json({"message": req.body});
});

app.get("/", (req: Request, res: Response) => {
    res.json({'message': "Server Up and running"})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
