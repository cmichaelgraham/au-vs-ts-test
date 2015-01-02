au-vs-ts-test
=============

test environment for exercising the `Aurelia.d.ts` TypeScript definition file and related TypeScript tests

This TypeScript test project is part of the [Aurelia](http://www.aurelia.io/) platform. Karma/Jasmine testing is configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/Aurelia/Discuss).

## Running The App

To run the tests, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
6. To view the tests in Visual Studio, open the solution with Visual Studio 2003, Update 4:

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. You can now run the tests with this command:

  ```shell
  karma start
  ```

  You can edit the tests in Visual Studio.  When you save, karma is watching the test files to detect changes and will re-run the tests.  You will see test results (successes & failures) in the shell.
  
## Contributing

We'd love for you to contribute to our source code and to make this project even better than it is today! If this interests you, please begin by reading [our contributing guidelines](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md). The contributing document will provide you with all the information you need to get started. Once you have read that, you will need to also [sign our CLA](http://goo.gl/forms/dI8QDDSyKR) before we can accepts a Pull Request from you. More information on the process is including in the [contributor's guide](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md).

# Special Notes

There appears to be some interesting behavior with derived classes. 

When setting a DI attribute of a base class in TypeScript code, the derived class will not get the attribute (and therefore DI derived class behavior will not be as expected when the attribute controls desired DI behavior) if the attribute is set AFTER the derived class is defined. 

The test around 15 and 15A in the repo both pass.

## Classes
```javascript
// 15 -----------------
class LoggerBase15 { static annotations = [] }
LoggerBase15.annotations = [new audi.Transient()];

class Logger15 extends LoggerBase15 { }

class App15One {
    static inject() { return [Logger15]; }
    constructor(public logger: Logger15) { }
}

class App15Two {
    static inject() { return [Logger15]; }
    constructor(public logger: Logger15) { }
}


// 15A -----------------
class LoggerBase15A { static annotations = [] }
class Logger15A extends LoggerBase15A { }

LoggerBase15A.annotations = [new audi.Transient()];

class App15AOne {
    static inject() { return [Logger15A]; }
    constructor(public logger: Logger15A) { }
}

class App15ATwo {
    static inject() { return [Logger15A]; }
    constructor(public logger: Logger15A) { }
}
```

## And Corresponding Tests
```javascript
        it("uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify", function () {
            var container = new audi.Container();

            var app1 = container.get<App15One>(App15One);
            var app2 = container.get<App15Two>(App15Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        it("uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify", function () {
            var container = new audi.Container();

            var app1 = container.get<App15AOne>(App15AOne);
            var app2 = container.get<App15ATwo>(App15ATwo);

            expect(app1.logger).toBe(app2.logger);
        });
```