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


// 12 -----------------
class Logger12 { }

class App12One {
    static inject() { return [Logger12]; }
    constructor(public logger: Logger12) { }
}

class App12Two {
    static inject() { return [Logger12]; }
    constructor(public logger: Logger12) { }
}


// 13 -----------------
class Logger13 { }

class App13One {
    static inject() { return [Logger13]; }
    constructor(public logger: Logger13) { }
}

class App13Two {
    static inject() { return [Logger13]; }
    constructor(public logger: Logger13) { }
}


// 14 -----------------
class LoggerBase14 {
    static annotations() { return [new audi.Transient()] }
}

class Logger14 extends LoggerBase14 { }

class App14One {
    static inject() { return [Logger14]; }
    constructor(public logger: Logger14) { }
}

class App14Two {
    static inject() { return [Logger14]; }
    constructor(public logger: Logger14) { }
}


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


// 16 -----------------
class LoggerBase16 {
    static annotations() { return [new audi.Singleton()] }
}

class Logger16 extends LoggerBase16 {
    static annotations() { return [new audi.Transient()] }
}

class App16One {
    static inject() { return [Logger16]; }
    constructor(public logger: Logger16) { }
}

class App16Two {
    static inject() { return [Logger16]; }
    constructor(public logger: Logger16) { }
}


// 17 -----------------
class LoggerBase17 {
    static annotations = [new audi.Singleton()];
}

class Logger17 extends LoggerBase17 { }

class App17One {
    static inject() { return [Logger17]; }
    constructor(public logger: Logger17) { }
}

class App17Two {
    static inject() { return [Logger17]; }
    constructor(public logger: Logger17) { }
}


// 18 -----------------
class Logger18 { }


// 19 -----------------
class Logger19 { }


// 20 -----------------
class LoggerBase20 { }
class Logger20 extends LoggerBase20 { }

class App20 {
    static inject() { return [LoggerBase20]; }
    constructor(public logger: Logger20) { }
}


// 21 -----------------
class LoggerBase21 { }
class Logger21 extends LoggerBase21 { }

class App21 {
    static inject() { return [LoggerBase21]; }
    constructor(public logger: Logger21) { }
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

        it("configures instance via api", () => {
            var container = new audi.Container();
            var instance = new Logger12();
            container.registerInstance(Logger12, instance);

            var app1 = container.get<App12One>(App12One);
            var app2 = container.get<App12Two>(App12Two);

            expect(app1.logger).toBe(instance);
            expect(app2.logger).toBe(instance);
        });

        it("configures custom via api", () => {
            var container = new audi.Container();
            container.registerHandler(Logger13, () => "something strange");

            var app1 = container.get<App13One>(App13One);
            var app2 = container.get<App13Two>(App13Two);

            expect(app1.logger).toEqual("something strange");
            expect(app2.logger).toEqual("something strange");
        });

        it("uses base annotations method (ES6) when derived does not specify", () => {
            var container = new audi.Container();

            var app1 = container.get<App14One>(App14One);
            var app2 = container.get<App14Two>(App14Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

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

        it("overrides base annotations method (ES6) with derived configuration", () => {
            var container = new audi.Container();

            var app1 = container.get<App16One>(App16One);
            var app2 = container.get<App16Two>(App16Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        it("overrides base annotations property (ES5, AtScript, TypeScript, CoffeeScript) with derived configuration", function () {
            var container = new audi.Container();
            Logger17.annotations = [new audi.Transient()];

            var app1 = container.get<App17One>(App17One);
            var app2 = container.get<App17Two>(App17Two);

            expect(app1.logger).not.toBe(app2.logger);
        });

        it("configures key as service when transient api only provided with key", () => {
            var container = new audi.Container();
            container.registerTransient<Logger18>(Logger18);

            var logger1 = container.get<Logger18>(Logger18),
                logger2 = container.get<Logger18>(Logger18);
            expect(true).toBe(true);

            expect(logger1).toEqual(jasmine.any(Logger18));
            expect(logger2).toEqual(jasmine.any(Logger18));
            expect(logger2).not.toBe(logger1);
        });

        it("configures key as service when singleton api only provided with key", () => {
            var container = new audi.Container();
            container.registerSingleton(Logger19);

            var logger1 = container.get(Logger19),
                logger2 = container.get(Logger19);

            expect(logger1).toEqual(jasmine.any(Logger19));
            expect(logger2).toEqual(jasmine.any(Logger19));
            expect(logger2).toBe(logger1);
        });

        it("configures concrete singelton via api for abstract dependency", () => {
            var container = new audi.Container();
            container.registerSingleton(LoggerBase20, Logger20);

            var app = container.get<App20>(App20);

            expect(app.logger).toEqual(jasmine.any(Logger20));
        });

        it("configures concrete transient via api for abstract dependency", () => {
            var container = new audi.Container();
            container.registerTransient(LoggerBase21, Logger21);

            var app = container.get<App21>(App21);

            expect(app.logger).toEqual(jasmine.any(Logger21));
        });
    });
});