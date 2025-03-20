# TypeScript Colored Logger

A simple, colorful TypeScript logger with configurable log levels.

## Installation

```bash
npm install @your-scope/ts-logger
```

## Usage

```typescript
import { log, LogLevel } from "@your-scope/ts-logger";

// Set the desired log level
log.setLevel(LogLevel.DEBUG);

// Use different log levels
log.debug("Debug message");
log.info("Info message");
log.warn("Warning message");
log.error("Error message");
log.send("Sending data...");
log.recv("Receiving data...");

// Change log level to only show warnings and errors
log.setLevel(LogLevel.WARN);
```

## Log Levels

The logger supports the following levels (from lowest to highest):

-   `DEBUG` (0)
-   `INFO` (1)
-   `WARN` (2)
-   `ERROR` (3)

Messages will only be displayed if their level is greater than or equal to the current log level.

## Features

-   🎨 Colored output using chalk
-   ⚡ TypeScript support with type definitions
-   🔍 Configurable log levels
-   🕒 Timestamp with millisecond precision
-   📦 Zero dependencies (except chalk)

## License

MIT
