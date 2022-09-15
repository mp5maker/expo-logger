import { LoggerAbstract } from './abstract'

class LoggerInfo extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.info(...args)
  }
}

export default LoggerInfo
