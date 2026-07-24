import http from "http"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = http.createServer((req,res)=>{
      res.end(`server running...`)
})

app.listen(PORT,()=>{
  console.log(`server run on http://localhost:${PORT}`)
})