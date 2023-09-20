import figlet from "figlet";

const server = Bun.serve({
    port: Bun.env.PORT || 8000,
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
        return new Response(res, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
});

console.log(`Server up and running at port: ${server.port}`);


// Tasks
// 1. Create a express like framework on top of bun using node js knowledge
// 2. Create basic todo list app where user can signup login and create and update todos

/**
 * 
 * Bun 
 * -> Runtime, Bundler, Testing (all in one toolkit)
 * -> includes a native bundler, transpiler, task runner and npm client
 * -> written in zig programming language (new low level language)
 * -> fully compatible with node apis
 * 
 * Not built on V8 engine as node is
 * built on javascriptCoreEngine built for safari and webkit
 * 
 * Major Design Goals
 * 1. Speed (fater then node) (extends jscore engine) (little dependency)
 * 2. Elegant APIs (minimal set of higly optimised APIs)
 * 3. Cohesive DX (complete toolkit for both server side and frontend)
 * 
 * Features
 * 1. Speed and Performance
 * 2. Drop in node compatibility
 * 3. Work with node modules
 * 4. Native npm client
 * 5. No module madness
 * 6. Web standard API's 
 * 7. Typescript out of box
 * 8. JSX
 * 9. Watch Mode (No need for nodemon) (--watch)
 * 10. Environment Variables (dotenv for nodejs)
 * 11. Integrated Bundler (faster then webpack and parcel)
 * 12. SQLite Database
 * 
 * 
 * Commands
 * $ bun --watch index.ts
 * 
 * Hot reload
 * $ bun --hot index.ts
 * 
 * Environment Variables
 * Bun.env.PORT 
 * 
 * Bun x
 * Run a package without installing
 * 
 * Bundle
 * bun build ./src/index.ts --outfile=./dist/bundle.js --watch
 * 
 */