import chalk from "chalk";

export function failure(msg) {
    return console.log(chalk.bold.red(msg));
}

export function warning(msg) {
    return console.log(chalk.bold.yellow(msg));
}

export function success(msg) {
    return console.log(chalk.bold.green(msg));
}
