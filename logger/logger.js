/**
 * Logs with 'error' level will be written to a file named "error-DD-MM-YYYY.log" in the "logs/errors" directory. 
 * The log file will be rotated daily and the archive will be compressed. 
 * The log format includes a timestamp with the Asia/Karachi timezone and pretty-printed output. 
 * The dash logger is then exported as a module for use in the error handler file.
 */

const { transports, createLogger, format } = require("winston");
require("winston-daily-rotate-file");

const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Karachi'
    });
}

const infolog = new transports.DailyRotateFile({
    filename: "./logs/info/dash-%DATE%.log",
    datePattern: "DD-MM-YYYY",
    zippedArchive: true,
    maxSize: "30m",
    level: 'info',
    maxFiles: '3d',
})

const info = createLogger({
    // format combine, for all transports
    format: format.combine(format.timestamp({ format: timezoned }), format.prettyPrint()),
    transports: [
        infolog,
    ],
});

const dashLog = new transports.DailyRotateFile({
    filename: "./logs/errors/error-%DATE%.log",
    datePattern: "DD-MM-YYYY",
    zippedArchive: true,
    maxSize: "200m",
    maxFiles: '3d',
    level: 'error',
    colorize: true,
});

// log errors in a file
const dash = createLogger({
    // format combine, for all transports
    format: format.combine(format.timestamp({ format: timezoned }), format.prettyPrint()),
    transports: [
        dashLog,
        new transports.Console({
            colorize: true,
            level: 'info',
        }),
    ],
});

module.exports = {
    dashLogger: dash,
    infoLogger: info
};