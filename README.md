# Expo Logger

### Purpose

- Recently in the expo sdk 46.0.0, the logs for objects or arrays do not show properly
- This library helps to mitigate this issue

### How to use

#### Log

```javascript
import logger from "@mp5healer/expo-logger";

logger.log({ firstName: "John", lastName: "Doe" });
logger.log(["John", "Doe"]);
```

#### Debug

```javascript
import logger from "@mp5healer/expo-logger";

logger.debug({ firstName: "John", lastName: "Doe" });
logger.debug(["John", "Doe"]);
```

#### Apis

| No  | Name  | Description    |
| --- | ----- | -------------- |
| 1   | debug | logger.debug() |
| 1   | log   | logger.log()   |
| 1   | info  | logger.info()  |
| 1   | table | logger.table() |
| 1   | info  | logger.info()  |
| 1   | error | logger.error() |
| 1   | trace | logger.trace() |
