import { Server } from "http";
import app from "./index";
import config from "./app/config";


const port = config.port || 5000;

async function main() {
    const server: Server = app.listen(port, () => {
        console.log("app listening on port", port);
    })
};

main();