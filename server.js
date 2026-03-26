import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

connectToDB();

app.use("/", (req, res) => {
  res.json("Hi");
});

app.listen(3000, () => {
  console.log("🚀 Server is running on Port 3000");
});
