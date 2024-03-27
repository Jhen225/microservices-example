import express from 'express';
const PORT = Number(process.env.PORT) || 3000;
const app = express();

//middleware
app.use(express.json());

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
