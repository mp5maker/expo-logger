import { LoggerAbstract } from "./abstract"

class LoggerDebug extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.debug(...args)
  }
}

export default LoggerDebug