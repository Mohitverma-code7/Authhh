import express from "express";
import helmet from "helmet";
import cors from "cors";
import axios from "axios";
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;
const API = "https://api.freeapi.app/api/v1";

app.use(express.json());

/* =========================
   CORS CONFIG
========================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-domain.com"
    ],
    credentials: true,
  })
);

/* =========================
   SECURITY HEADERS
========================= */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", "https:", "http:"],
        fontSrc: ["'self'", "https:", "data:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

/* =========================
   AUTH ROUTES (PROXY)
========================= */

// REGISTER
app.post("/users/register", async (req, res) => {
  try {
    const response = await axios.post(
      `${API}/users/register`,
      req.body
    );
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data);
  }
});

// LOGIN
app.post("/users/login", async (req, res) => {
  try {
    const response = await axios.post(
      `${API}/users/login`,
      req.body,
      { withCredentials: true }
    );

    res.setHeader(
      "set-cookie",
      response.headers["set-cookie"] || []
    );

    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data);
  }
});

// CURRENT USER
app.get("/users/current-user", async (req, res) => {
  try {
    const response = await axios.get(
      `${API}/users/current-user`,
      {
        headers: {
          cookie: req.headers.cookie || "",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data);
  }
});

// LOGOUT
app.post("/users/logout", async (req, res) => {
  try {
    const response = await axios.post(
      `${API}/users/logout`,
      {},
      {
        headers: {
          cookie: req.headers.cookie || "",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data);
  }
});

/* =========================
   BASIC ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Auth server is running 🚀");
});



app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist", "index.html"));
});


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});