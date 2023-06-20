const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect(process.env.connection);
            console.log('CONNECTED!');

        } catch (err) {
            console.log('Mongodb connection error!!');
        }
    }
}

module.exports = {
    db
}