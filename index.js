const express = require('express');
const { authMiddleware } = require('./middleware/authMiddleware');
require("dotenv").config();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const attendenceRoutes = require('./routes/attendenceRoutes');

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(authMiddleware);


app.use("/auth", authRoutes);
app.use("/home", homeRoutes);
app.use("/attendence", attendenceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});