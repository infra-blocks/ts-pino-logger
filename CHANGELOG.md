# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-06-15

- Extend the `PinoLogger` interface so that it retains `pino` specific capabilities,
such as passing a paylod as the first argument.

## [0.2.0] - 2025-06-15

### Changed

- Allow the call to `PinoLogger.create()` to succeed without an empty bag of params.

## [0.1.0] - 2025-06-15

### Added

- The first implementation of the pino logger for the logger interface!

[0.3.0]: https://github.com/infra-blocks/ts-pino-logger/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/infra-blocks/ts-pino-logger/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/infra-blocks/ts-pino-logger/releases/tag/v0.1.0
