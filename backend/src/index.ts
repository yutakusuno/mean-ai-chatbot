import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";

// connections and listeners
const PORT = process.env.PORT || 3000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server open port ${PORT} and connected DB`)
    );
  })
  .catch((err) => console.log(err));
