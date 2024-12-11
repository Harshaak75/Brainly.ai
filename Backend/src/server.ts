import http from "http";
import { app } from ".";
import { port } from "./config";

const server = http.createServer(app);


server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);  // logs the server listening port
});