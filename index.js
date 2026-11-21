import express from "express";

const app = express();
app.use(express.json())
let products = [
  {
    id: 1,
    name: "HP H360G Headphone",
    price: 4500,
    imageUrl: "https://www.itaf.eu/wp-content/uploads/2021/01/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg",
    desc: "A comfortable and high-quality gaming headset.",
  },
  {
    id: 2,
    name: "RTX 3060",
    price: 95000,
    imageUrl:
      "https://www.itaf.eu/wp-content/uploads/2021/01/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg",
    desc: "A powerful graphics card from nvidia.",
  },
];



app.get("/products", (req, res) => {
  try {
    res.status(200).json({products});
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Something went wrong"});
  }
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/",(req,res)=>{
      res.send("Hello World")
})

app.get("/weather",(req,res)=>{
      res.status(200).json({
        city:"Lahore",
        temp_c:30,
      })
})
app.delete("/products/:id",(req,res)=>{
    const {id} = req.params;
    products = products.filter((product)=> product.id !== parseInt(id))
    res.status(204).send();
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

//Port Assign


app.listen(5050,()=>{
    console.log("server is running on port 5050")
})
