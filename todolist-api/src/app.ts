import express from "express"
import createRouter, { router } from "express-file-routing"

const app = express()

async function main() {
    app.use(express.json())
    app.use("/", await router())
    await createRouter(app)
    app.listen(3000)
}

main().then(() => console.log("Server started on port 3000"))
