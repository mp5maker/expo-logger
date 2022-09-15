import { LoggerAbstract } from "./abstract"

class LoggerError extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.error(...args)
  }
}

export default LoggerError
