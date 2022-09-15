import { LoggerAbstract } from './abstract'

class LoggerLog extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.log(...args)
  }
}

export default LoggerLog
