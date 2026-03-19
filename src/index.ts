import express from "express"
import { connectDB } from "./db.js"
import routes from "./routes/element_routes.js"

const app = express()
const PORT = process.env.BACKEND_PORT || 3000

app.use(express.json())

app.get("/api/hello", (req, res) => {
  console.log("/api/hello")
  res.json({ message: "Hello depuis Express !" })
})

app.use("/api/element", routes)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})