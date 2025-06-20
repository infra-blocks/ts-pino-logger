import { Logger, LogLevel } from "@infra-blocks/logger-interface";
import pino from "pino";

export interface IPinoLogger extends Logger {
  trace: pino.LogFn;
  debug: pino.LogFn;
  info: pino.LogFn;
  warn: pino.LogFn;
  error: pino.LogFn;
}

/**
 * A thin wrapper around the {@link pino.Logger} that implements the {@link Logger} interface.
 */
export class PinoLogger implements IPinoLogger {
  private readonly logger: pino.Logger;

  private constructor(params: { logger: pino.Logger }) {
    this.logger = params.logger;
  }

  log(level: LogLevel, message: string, ...args: unknown[]): void {
    switch (level) {
      case "trace":
        this.logger.trace(message, ...args);
        return;
      case "debug":
        this.logger.debug(message, ...args);
        return;
      case "info":
        this.logger.info(message, ...args);
        return;
      case "warn":
        this.logger.warn(message, ...args);
        return;
      case "error":
        this.logger.error(message, ...args);
        return;
    }
    level satisfies never;
  }

  trace<T extends object>(
    data: unknown | T | string,
    message?: string,
    ...args: unknown[]
  ): void {
    this.logger.trace(data, message, ...args);
  }

  debug<T extends object>(
    data: unknown | T | string,
    message?: string,
    ...args: unknown[]
  ): void {
    this.logger.debug(data, message, ...args);
  }

  info<T extends object>(
    data: unknown | T | string,
    message?: string,
    ...args: unknown[]
  ): void {
    this.logger.info(data, message, ...args);
  }

  warn<T extends object>(
    data: unknown | T | string,
    message?: string,
    ...args: unknown[]
  ): void {
    this.logger.warn(data, message, ...args);
  }

  error<T extends object>(
    data: unknown | T | string,
    message?: string,
    ...args: unknown[]
  ): void {
    this.logger.error(data, message, ...args);
  }

  isTraceEnabled(): boolean {
    return this.logger.isLevelEnabled("trace");
  }

  isDebugEnabled(): boolean {
    return this.logger.isLevelEnabled("debug");
  }

  isInfoEnabled(): boolean {
    return this.logger.isLevelEnabled("info");
  }

  isWarnEnabled(): boolean {
    return this.logger.isLevelEnabled("warn");
  }

  isErrorEnabled(): boolean {
    return this.logger.isLevelEnabled("error");
  }

  /**
   * Creates a new instance of {@link PinoLogger} with the specified logging level and name.
   *
   * Both parameters can be omitted. The log level defaults to "info" and the name is not set
   * by default.
   *
   * @param params.level The logging level to use. Defaults to "info".
   * @param params.name The name of the logger. Defaults to undefined.
   *
   * @returns A new instance of {@link PinoLogger}.
   */
  static create(params?: { level?: LogLevel; name?: string }): PinoLogger {
    const { level = "info", name } = params || {};
    const logger = pino.pino({ level, name });

    return new PinoLogger({ logger });
  }
}
