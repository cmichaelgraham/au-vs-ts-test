import audi = require("dependency-injection")

// 01 -----------------
class App01 { }


// 02 -----------------
class Logger02 { }
class App02 {
    static inject() { return [Logger02]; }
    constructor(public logger: Logger02) { }
}


// 03 -----------------
class Logger03 { }
class App03 {
    static inject = [];
    constructor(public logger: Logger02) { }
}


// 04 -----------------
class Logger04 { }

class App04 {
    static parameters = [[]];
    constructor(public logger: Logger04) { }
}


// 05 -----------------
class Logger05 { }

class App05One {
    static inject = [Logger05];
    constructor(public logger: Logger05) { }
}

class App05Two {
    static inject = [Logger05];
    constructor(public logger: Logger05) { }
}


// 06 -----------------
class Logger06 { }

class App06One {
    constructor(public logger: Logger06) { }
}

class App06Two {
    constructor(public logger: Logger06) { }
}


// 07 -----------------
class Logger07 {
    static annotations() { return [new audi.Singleton()] }
}

class App07One {
    static inject = [Logger07];
    constructor(public logger: Logger07) { }
}

class App07Two {
    static inject = [Logger07];
    constructor(public logger: Logger07) { }
}


// 08 -----------------
class Logger08 { static annotations = [] }

class App08One {
    static inject() { return [Logger08]; }
    constructor(public logger: Logger08) { }
}

class App08Two {
    static inject() { return [Logger08]; }
    constructor(public logger: Logger08) { }
}


// 09 -----------------
class Logger09 { }

class App09One {
    static inject() { return [Logger09]; }
    constructor(public logger: Logger09) { }
}

class App09Two {
    static inject() { return [Logger09]; }
    constructor(public logger: Logger09) { }
}


// 10 -----------------
class Logger10 {
    static annotations() { return [new audi.Transient()] }
}

class App10One {
    static inject() { return [Logger10]; }
    constructor(public logger: Logger10) { }
}

class App10Two {
    static inject() { return [Logger10]; }
    constructor(public logger: Logger10) { }
}


// 11 -----------------
class Logger11 {
    static annotations = [];
}

class App11One {
    static inject() { return [Logger11]; }
    constructor(public logger: Logger11) { }
}

class App11Two {
    static inject() { return [Logger11]; }
    constructor(public logger: Logger11) { }
}


describe("container", () => {
    describe("injection", () => {
        it("instantiates class without injected services", () => {
            var container = new audi.Container();
            var app = container.get<App01>(App01);
            expect(app).toEqual(jasmine.any(App01));
        });

        it("uses static inject method (ES6)", () => {
            var container = new audi.Container();
            var app = container.get<App02>(App02);
            expect(app.logger).toEqual(jasmine.any(Logger02));
        });

        it("uses static inject property (TypeScript,CoffeeScript,ES5)", () => {
            App03.inject = [Logger03];

            var container = new audi.Container();
            var app = container.get<App03>(App03);

            expect(app.logger).toEqual(jasmine.any(Logger03));
        });

        it("uses static parameters property (AtScript)", () => {
            App04.parameters = [[Logger04]]; //Note: Normally provided by the AtScript compiler.

            var container = new audi.Container();
            var app = container.get<App04>(App04);

            expect(app.logger).toEqual(jasmine.any(Logger04));
        });
    });

    describe("registration", () => {
        it("automatically configures as singleton", () => {
            var container = new audi.Container();

            var app1 = container.get<App05One>(App05One);
            var app2 = container.get<App05Two>(App05Two);

            expect(app1.logger).toBe(app2.logger);
        });

        it("configures singleton via api", () => {
            var container = new audi.Container();
            container.registerSingleton(Logger06, Logger06);

            var app1 = container.get<App06One>(App06One);
            var app2 = container.get<App06Two>(App06Two);

            expect(app1.logger).toBe(app2.logger);
        });

        it("configures singleton via annotations method (ES6)", () => {
            var container = new audi.Container();

            var app1 = container.get<App07One>(App07One);
            var app2 = container.get<App07Two>(App07Two);

            expect(app1.logger).toBe(app2.logger);
        });

        it("configures singleton via annotations property (ES5, AtScript, TypeScript, CoffeeScript)", () => {
            var container = new audi.Container();
            Logger08.annotations = [new audi.Singleton()];

            var app1 = container.get<App08One>(App08One);
            var app2 = container.get<App08Two>(App08Two);

            expect(app1.logger).toBe(app2.logger);
        });

        it("configures transient (non singleton) via api", () => {
            var container = new audi.Container();
            container.registerTransient(Logger09, Logger09);

            var app1 = container.get<App09One>(App09One);
            var app2 = container.get<App09Two>(App09Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        it("configures transient (non singleton) via annotations method (ES6)", () => {
            var container = new audi.Container();

            var app1 = container.get<App10One>(App10One);
            var app2 = container.get<App10Two>(App10Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        it("configures transient (non singleton) via annotations property (ES5, AtScript, TypeScript, CoffeeScript)", function () {
            var container = new audi.Container();
            Logger11.annotations = [new audi.Transient()];

            var app1 = container.get<App11One>(App11One);
            var app2 = container.get<App11Two>(App11Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        //it("configures instance via api", function () {
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

        //it("configures custom via api", function () {
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

        //it("uses base annotations method (ES6) when derived does not specify", function () {
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

        //it("uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify", function () {
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

        //it("overrides base annotations method (ES6) with derived configuration", function () {
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

        //it("overrides base annotations property (ES5, AtScript, TypeScript, CoffeeScript) with derived configuration", function () {
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

        //it("configures key as service when transient api only provided with key", function () {
        //      class Logger { }

        //var container = new Container();
        //container.registerTransient(Logger);

        //var logger1 = container.get(Logger),
        //    logger2 = container.get(Logger);

        //expect(logger1).toEqual(jasmine.any(Logger));
        //expect(logger2).toEqual(jasmine.any(Logger));
        //expect(logger2).not.toBe(logger1);
        //    });

        //it("configures key as service when singleton api only provided with key", function () {
        //      class Logger { }

        //var container = new Container();
        //container.registerSingleton(Logger);

        //var logger1 = container.get(Logger),
        //    logger2 = container.get(Logger);

        //expect(logger1).toEqual(jasmine.any(Logger));
        //expect(logger2).toEqual(jasmine.any(Logger));
        //expect(logger2).toBe(logger1);
        //    });

        //it("configures concrete singelton via api for abstract dependency", function () {
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

        //it("configures concrete transient via api for abstract dependency", function () {
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