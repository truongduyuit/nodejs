require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log("Kết nối database thành công !")
}).on('error', () => {
    console.log("Kết nối database thất bại !")
})