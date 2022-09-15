import LoggerDebug from './debug'
import LoggerError from './error'
import LoggerInfo from './info'
import { TReplacer } from './interface'
import LoggerLog from './log'
import LoggerTable from './table'
import LoggerTrace from './trace'

class Logger {
  protected replacer?: TReplacer
  protected spacing?: number

  constructor(replacer = undefined, spacing = 4) {
    this.replacer = replacer
    this.spacing = spacing
  }

  debug(...argumentList: Array<any>) {
    const debug = new LoggerDebug(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }

  log(...argumentList: Array<any>) {
    const debug = new LoggerLog(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }

  table(...argumentList: Array<any>) {
    const debug = new LoggerTable(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }

  error(...argumentList: Array<any>) {
    const debug = new LoggerError(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }

  info(...argumentList: Array<any>) {
    const debug = new LoggerInfo(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }

  trace(...argumentList: Array<any>) {
    const debug = new LoggerTrace(this.replacer as any, this.spacing)
    return debug.performAction(argumentList)
  }
}

const logger = new Logger()

export default logger
