import { LoggerAbstract } from "./abstract"

class LoggerTable extends LoggerAbstract {
  performAction(argumentList: Array<any>): void {
    const args = this.conversion(argumentList)
    return console.table(...args)
  }
}

export default LoggerTable