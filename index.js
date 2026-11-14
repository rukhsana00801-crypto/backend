import express from "express"

const app = express()

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/weather", (req, res) => {
    res.status(200).json({
        city: "Lahore",
        temp_c: 30,
    });
});


app.listen(5050, ()=>{
    console.log("server is running on port 5050")
})
