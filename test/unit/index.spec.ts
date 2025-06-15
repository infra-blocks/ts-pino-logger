import { expect } from "@infra-blocks/test";
import { PinoLogger } from "../../src/index.js";

describe("index", function () {
  describe("PinoLogger", function () {
    describe("create", function () {
      it("should work with no parameters", function () {
        const logger = PinoLogger.create();
        expect(logger).to.be.instanceOf(PinoLogger);
      });
    });
    describe("isTraceEnabled", function () {
      it("should return true when the logger is set to trace level or lower", function () {
        const logger = PinoLogger.create({ level: "trace" });
        expect(logger.isTraceEnabled()).to.be.true;
      });
      it("should return false when the logger is set to a level higher than trace", function () {
        for (const level of ["debug", "info", "warn", "error"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isTraceEnabled()).to.be.false;
        }
      });
    });
    describe("isDebugEnabled", function () {
      it("should return true when the logger is set to debug level or lower", function () {
        for (const level of ["trace", "debug"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isDebugEnabled()).to.be.true;
        }
      });
      it("should return false when the logger is set to a level higher than debug", function () {
        for (const level of ["info", "warn", "error"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isDebugEnabled()).to.be.false;
        }
      });
    });
    describe("isInfoEnabled", function () {
      it("should return true when the logger is set to info level or lower", function () {
        for (const level of ["trace", "debug", "info"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isInfoEnabled()).to.be.true;
        }
      });
      it("should return false when the logger is set to a level higher than info", function () {
        for (const level of ["warn", "error"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isInfoEnabled()).to.be.false;
        }
      });
    });
    describe("isWarnEnabled", function () {
      it("should return true when the logger is set to warn level or lower", function () {
        for (const level of ["trace", "debug", "info", "warn"] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isWarnEnabled()).to.be.true;
        }
      });
      it("should return false when the logger is set to a level higher than warn", function () {
        const logger = PinoLogger.create({ level: "error" });
        expect(logger.isWarnEnabled()).to.be.false;
      });
    });
    describe("isErrorEnabled", function () {
      it("should always return true", function () {
        for (const level of [
          "trace",
          "debug",
          "info",
          "warn",
          "error",
        ] as const) {
          const logger = PinoLogger.create({ level });
          expect(logger.isErrorEnabled()).to.be.true;
        }
      });
    });
  });
});
