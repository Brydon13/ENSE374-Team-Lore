import express from "express";

import userRoutes from "./routes/userRoutes.js";
import recyclableRoutes from "./routes/recyclableRoutes.js";
import recyclingCentreRoutes from "./routes/recyclingCentreRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

// this is a canonical alias to make your life easier, like jQuery to $.
const app = express();

// a common localhost test port
const port = 3001;
const BASE_API = `http://localhost:${port}`;

// Simple server operation

app.get("/", (req, res) => {
  res.send(`<h1>Test<h1/>`);
});

app.use(`/users`, userRoutes);
app.use(`/recyclables`, recyclableRoutes);
app.use(`/recycling-centres`, recyclingCentreRoutes);
app.use(`/search`, searchRoutes);

app.listen(port, () => {
  // template literal
  console.log(`Server is running on ${BASE_API}`);
});
