import createApp from "./app"

const port = process.env.PORT

const app = createApp()

app.listen(port, () => {
    console.log(`🔥 server running at port ${port}`)
})