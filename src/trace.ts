import { LoggerAbstract } from './abstract'

class LoggerTrace extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.trace(...args)
  }
}

export default LoggerTrace
