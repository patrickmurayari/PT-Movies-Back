const server = require('./src/app.js');
const { conn } = require("./src/db.js")
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
};

server.use(cors(corsOptions));

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({ force: false });
    console.log(`listening on port http://localhost:${PORT}`);
})