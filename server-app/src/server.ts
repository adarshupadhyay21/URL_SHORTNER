import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl"
dotenv.config();
connectDb();

const port = process.env.PORT ||5001

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: "*", // Allow your frontend
  methods: "GET, POST, PUT, DELETE", // Allow all required methods
  credentials: true, // Allow cookies & authentication headers
}));


app.use("/api",shortUrl);

app.get("/",(req,res)=>{
  res.send("Hello world")
})

app.listen(port,() =>{
    console.log(`Server started succesfuly on port : ${port}`)
})

