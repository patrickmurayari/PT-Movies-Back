const server = require('./src/app.js');
const {conn} = require("./src/db.js")

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({force:true});
    console.log(`listening on port http://localhost:${PORT}`);
})