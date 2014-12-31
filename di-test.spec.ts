﻿import audi = require("dependency-injection")

// 01 -----------------
class App01 { }


// 02 -----------------
class Logger02 { }
class App02 {
    static inject() { return [Logger02]; }
    constructor(public logger: Logger02) { }
}


// 03 -----------------

describe('container', () => {
    describe('injection', () => {
        it('instantiates class without injected services', () => {
            var container = new audi.Container();
            var app = container.get(App01);
            expect(app).toEqual(jasmine.any(App01));
        });

        it('uses static inject method (ES6)', () => {
            var container = new audi.Container();
            var app: App02 = container.get<App02>(App02);

            expect(app.logger).toEqual(jasmine.any(Logger02));
        });

        //it('uses static inject property (TypeScript,CoffeeScript,ES5)', function () {
        //      class Logger { }

        //class App {
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //App.inject = [Logger];

        //var container = new Container();
        //var app = container.get(App);

        //expect(app.logger).toEqual(jasmine.any(Logger));
        //    });

        //it('uses static parameters property (AtScript)', function () {
        //      class Logger { }

        //class App {
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //App.parameters = [[Logger]]; //Note: Normally provided by the AtScript compiler.

        //var container = new Container();
        //var app = container.get(App);

        //expect(app.logger).toEqual(jasmine.any(Logger));
        //    });
        //  });

        //describe('registration', () => {
        //    it('automatically configures as singleton', function () {
        //      class Logger { }

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toBe(app2.logger);
        //    });

        //it('configures singleton via api', function () {
        //      class Logger { }

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //container.registerSingleton(Logger, Logger);

        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toBe(app2.logger);
        //    });

        //it('configures singleton via annotations method (ES6)', function () {
        //      class Logger {
        //    static annotations() { return [new Singleton()] };
        //}

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toBe(app2.logger);
        //    });

        //it('configures singleton via annotations property (ES5, AtScript, TypeScript, CoffeeScript)', function () {
        //      class Logger { }
        //Logger.annotations = [new Singleton()];

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toBe(app2.logger);
        //    });

        //it('configures transient (non singleton) via api', function () {
        //      class Logger { }

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //container.registerTransient(Logger, Logger);

        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('configures transient (non singleton) via annotations method (ES6)', function () {
        //      class Logger {
        //    static annotations() { return [new Transient()] };
        //}

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('configures transient (non singleton) via annotations property (ES5, AtScript, TypeScript, CoffeeScript)', function () {
        //      class Logger { }
        //Logger.annotations = [new Transient()];

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('configures instance via api', function () {
        //      class Logger { }

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var instance = new Logger();
        //container.registerInstance(Logger, instance);

        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toBe(instance);
        //expect(app2.logger).toBe(instance);
        //    });

        //it('configures custom via api', function () {
        //      class Logger { }

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //container.registerHandler(Logger, c => "something strange");

        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).toEqual("something strange");
        //expect(app2.logger).toEqual("something strange");
        //    });

        //it('uses base annotations method (ES6) when derived does not specify', function () {
        //      class LoggerBase {
        //    static annotations() { return [new Transient()] };
        //}

        //class Logger extends LoggerBase {

        //}

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify', function () {
        //      class LoggerBase { }
        //LoggerBase.annotations = [new Transient()];

        //class Logger extends LoggerBase {

        //}

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('overrides base annotations method (ES6) with derived configuration', function () {
        //      class LoggerBase {
        //    static annotations() { return [new Singleton()] };
        //}

        //class Logger extends LoggerBase {
        //    static annotations() { return [new Transient()] };
        //}

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('overrides base annotations property (ES5, AtScript, TypeScript, CoffeeScript) with derived configuration', function () {
        //      class LoggerBase {
        //    static annotations() { return [new Singleton()] };
        //}

        //class Logger extends LoggerBase { }
        //Logger.annotations = [new Transient()];

        //class App1 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //class App2 {
        //    static inject() { return [Logger]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //var app1 = container.get(App1);
        //var app2 = container.get(App2);

        //expect(app1.logger).not.toBe(app2.logger);
        //    });

        //it('configures key as service when transient api only provided with key', function () {
        //      class Logger { }

        //var container = new Container();
        //container.registerTransient(Logger);

        //var logger1 = container.get(Logger),
        //    logger2 = container.get(Logger);

        //expect(logger1).toEqual(jasmine.any(Logger));
        //expect(logger2).toEqual(jasmine.any(Logger));
        //expect(logger2).not.toBe(logger1);
        //    });

        //it('configures key as service when singleton api only provided with key', function () {
        //      class Logger { }

        //var container = new Container();
        //container.registerSingleton(Logger);

        //var logger1 = container.get(Logger),
        //    logger2 = container.get(Logger);

        //expect(logger1).toEqual(jasmine.any(Logger));
        //expect(logger2).toEqual(jasmine.any(Logger));
        //expect(logger2).toBe(logger1);
        //    });

        //it('configures concrete singelton via api for abstract dependency', function () {
        //      class LoggerBase { }
        //class Logger extends LoggerBase { }

        //class App {
        //    static inject() { return [LoggerBase]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //container.registerSingleton(LoggerBase, Logger);

        //var app = container.get(App);

        //expect(app.logger).toEqual(jasmine.any(Logger));
        //    });

        //it('configures concrete transient via api for abstract dependency', function () {
        //      class LoggerBase { }
        //class Logger extends LoggerBase { }

        //class App {
        //    static inject() { return [LoggerBase]; };
        //    constructor(logger) {
        //        this.logger = logger;
        //    }
        //}

        //var container = new Container();
        //container.registerTransient(LoggerBase, Logger);

        //var app = container.get(App);

        //expect(app.logger).toEqual(jasmine.any(Logger));
        //    });
        //  });
    });
});