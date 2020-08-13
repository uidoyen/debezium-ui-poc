[![License](http://img.shields.io/:license-apache%202.0-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.debezium/debezium-connector-vitess/badge.svg)](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22io.debezium%22)
[![Build Status](https://travis-ci.com/debezium/debezium-incubator.svg?branch=master)](https://travis-ci.com/debezium/debezium-connector-vitess/)
[![User chat](https://img.shields.io/badge/chat-users-brightgreen.svg)](https://gitter.im/debezium/user)
[![Developer chat](https://img.shields.io/badge/chat-devs-brightgreen.svg)](https://gitter.im/debezium/dev)
[![Google Group](https://img.shields.io/:mailing%20list-debezium-brightgreen.svg)](https://groups.google.com/forum/#!forum/debezium)
[![Stack Overflow](http://img.shields.io/:stack%20overflow-debezium-brightgreen.svg)](http://stackoverflow.com/questions/tagged/debezium)

Copyright Debezium Authors.
Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

# Debezium UI PoC

Debezium is an open source project that provides a low latency data streaming platform for change data capture (CDC).

This repository contains a proof-of-concept for a potential future web-based UI for Debezium.

## Build
Before building the PoC, you need to build Debezium first. Take a checkout for DBZ [here](https://github.com/debezium/debezium)
Run below commands to build Debezium:

```
mvn clean install -f support/ide-configs
mvn clean install -f support/checkstyle
mvn clean install -am -pl :debezium-core,:debezium-connector-postgres,:debezium-connector-mongodb,:debezium-connector-sqlserver,:debezium-connector-mysql -DskipTests=true -DskipITs=true -Dcheckstyle.skip=true
```

The entire application (UI and backend) can be built via Maven:

```
mvn clean install
```

The UI part is an SPA application based on the React framework. It is packaged as JAR,
whose contents are then exposed by the Quarkus-based backend application.

### UI Development

The UI code for the PoC is located in the _ui_ folder, with README instructions [here](./ui/README.md) to launch the UI for development.

### Backend

The UI backend is a Quarkus application located under _backend_.
You can run it in development mode like so:

```
mvn -pl backend compile quarkus:dev
```

Swagger UI can be accessed from:  [http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/)

## Contributing

The Debezium community welcomes anyone that wants to help out in any way, whether that includes reporting problems, helping with documentation, or contributing code changes to fix bugs, add tests, or implement new features. See [this document](https://github.com/debezium/debezium/blob/master/CONTRIBUTE.md) for details.
