import figlet from "figlet";

const PORT = 3005;

const server = Bun.serve({
    port: PORT,
    fetch(req: Request) {
        const reqURL = new URL(req.url).pathname;
        console.log(`req url: ${reqURL}`);
        const body = figlet.textSync("Hello");
        let jsonRes = {
            message: "Trying Bun",
            status: 200
        }

        switch(reqURL) {
            case '/': jsonRes = {
                message: "Landing page",
                status: 201
            }
            break
            case '/home': jsonRes = {
                message: "home page",
                status: 202
            }
            break
            case '/login': jsonRes = {
                message: "Login page",
                status: 203
            }
            default: jsonRes = {
                message: "Invalid Page",
                status: 400
            }
        }
        const res = JSON.stringify(jsonRes);
        return new Response(res);
    },
});

console.log(`Server up and running at port: ${PORT}`);


// Tasks
// 1. Create a express like framework on top of bun using node js knowledge
// 2. Create basic todo list app where user can signup login and create and update todos

