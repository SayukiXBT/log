import chalk from "chalk";

export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
}

let currentLogLevel = LogLevel.INFO;

const getTimestamp = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

type LogData = string | number | boolean | null | undefined | object;

export const log = {
    setLevel: (level: LogLevel) => {
        currentLogLevel = level;
    },
    debug: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.DEBUG) {
            console.log(chalk.gray.bold(getTimestamp(), "DEBUG"), "›", ...data);
        }
    },
    info: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.INFO) {
            console.log(chalk.bold(getTimestamp(), "INFO"), "›", ...data);
        }
    },
    warn: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.WARN) {
            console.log(
                chalk.yellow.bold(getTimestamp(), "WARN"),
                "›",
                ...data,
            );
        }
    },
    error: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.ERROR) {
            console.log(chalk.red.bold(getTimestamp(), "ERR "), "›", ...data);
        }
    },
    send: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.INFO) {
            console.log(chalk.blue.bold(getTimestamp(), "SEND"), "›", ...data);
        }
    },
    recv: (...data: LogData[]) => {
        if (currentLogLevel <= LogLevel.INFO) {
            console.log(
                chalk.hex("#FF8800").bold(getTimestamp(), "RECV"),
                "›",
                ...data,
            );
        }
    },
};
