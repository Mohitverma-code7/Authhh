import express from "express";
import cors from "cors";
import axios from "axios";

const app = express(); // 🔥 THIS WAS MISSING

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

const API = "https://api.freeapi.app/api/v1";

// REGISTER
app.post("/users/register", async (req, res) => {
  try {
    const response = await axios.post(`${API}/users/register`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data);
  }
});

// LOGIN
app.post("/users/login", async (req, res) => {
  try {
    const response = await axios.post(`${API}/users/login`, req.body, {
      withCredentials: true
    });

    res.setHeader("set-cookie", response.headers["set-cookie"] || []);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data);
  }
});

// CURRENT USER
app.get("/users/current-user", async (req, res) => {
  try {
    const response = await axios.get(`${API}/users/current-user`, {
      headers: {
        cookie: req.headers.cookie || ""
      }
    });

    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data);
  }
});

// LOGOUT
app.post("/users/logout", async (req, res) => {
  try {
    const response = await axios.post(`${API}/users/logout`, {}, {
      headers: {
        cookie: req.headers.cookie || ""
      }
    });

    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data);
  }
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});