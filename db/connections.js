const mongoose = require('mongoose');
const { InternalServerError } = require('../errors/index');
const { infoLogger } = require('../logger/logger');

const connection = async (url) => {
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDb successfully..');
        infoLogger.info(`Connected to MongoDb successfully..`);
    }
    catch (error) {
        throw new InternalServerError(`Error connecting to Mongodb server: ${error}`)
    }
}

module.exports = connection