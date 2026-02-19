import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello depuis Express !" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})