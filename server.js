import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from "dotenv";
import taskRouter from "./src/routes/taskRoutes.js";
import { securityHeaders } from "./src/middleware/security.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(securityHeaders);
app.use(morgan('dev'));
app.use(express.json());

// Home Route
app.use("/api/tasks", taskRouter);

app.get('/', (req, res) => {
    res.send(
        "Taskflow API is running..."
    );
});

// Start Server
app.listen(PORT, () => {
    console.log(`TaskFlow API running on port ${PORT}`);
});