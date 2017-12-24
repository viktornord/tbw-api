const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(express.static('public'));
app.use('/swagger-ui-dist', express.static('node_modules/swagger-ui-dist'));


app.listen(PORT, () => console.log(`API server is listening on port ${PORT}`));
