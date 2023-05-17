const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const axios = require("axios")

// CONFIGURATIONS
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// GET /api/comments
app.get('/api/comments', async (req, res) => {
    try {
      const limit = req.query.limit || 10; // default limit is 10 if not specified
  
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // GET /api/posts
  app.get('/api/posts', async (req, res) => {
    try {
      const limit = req.query.limit || 10; // default limit is 10 if not specified
  
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

