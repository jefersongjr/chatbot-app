import  express from "express";

class App {
    public app: express.Express;

    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.route("/").get((req, res) => {
            res.send("Hello World!");
        });
    }

    private start(): void {
        this.app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    }
}