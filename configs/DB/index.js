// const dotenv = require('dotenv');
const mongoose = require('mongoose');



async function connect() {

    try{
        await mongoose.connect(process.env.MONGOOSE_URI || 'mongodb+srv://admin:Thethuong.22@datn.nhvh0uh.mongodb.net/?retryWrites=true&w=majority', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,

        });  
        console.log('Connected to DB!!!');
    }
    catch ( error ){
        console.log('Error connecting!!');
    }
}
module.exports = { connect };