
import express from 'express';
import config from './config/config.js';
import swaggerDocs from './config/swagger.js';

import routes from './routes/app.route.js'; 
import categoryRoutes from './routes/categoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import swaggerRoutes from './config/swagger.js'; // Add swagger routes
import path from 'path';
import { fileURLToPath } from 'url'; 
import downloadRoutes from './routes/downloadRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Routes
app.use('/', categoryRoutes);
app.use('/', itemRoutes);
app.use('/api', uploadRoutes);

app.use('/api', downloadRoutes); 
routes(app);

// Swagger documentation route
app.use('/api-docs', swaggerRoutes); 

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
    swaggerDocs(app, config.port);
});
