import express from 'express';
import storeRoutes from './routes/storeRoutes';

const app = express();

app.use(express.json());
app.use('/api/stores', storeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});