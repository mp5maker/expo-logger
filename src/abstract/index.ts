import { PRIMITIVE_TYPES } from "../constants";
import { TReplacer } from "../interface";

export abstract class LoggerAbstract {
  protected replacer?: TReplacer;
  protected spacing?: number;

  constructor(replacer = undefined, spacing = 4) {
    this.replacer = replacer;
    this.spacing = spacing;
  }

  conversion(args: Array<any>): Array<any> {
    return args.map((item) => {
      if (PRIMITIVE_TYPES.some((item) => item === typeof item)) return item;
      return JSON.stringify(item, this.replacer, this.spacing);
    });
  }

  abstract performAction(argumentList: Array<any>): void;
}
