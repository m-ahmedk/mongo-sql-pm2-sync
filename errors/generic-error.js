/**
 * Extend the built-in "Error" class to have a custom error message 
 */

const { StatusCodes } = require('http-status-codes')

class GenericError extends Error {
    constructor(message, statusCode) {
        if(message.name && message.name === 'ValidationError') {
            statusCode = StatusCodes.NOT_ACCEPTABLE;
        }
    
        if(message.code && message.code === 11000) {
            statusCode = StatusCodes.CONFLICT
        }

        console.log(message)

        super(message)
        this.statusCode = statusCode
    }
}

module.exports = GenericError