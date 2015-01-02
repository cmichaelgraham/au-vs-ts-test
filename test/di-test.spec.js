var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "dependency-injection"], function (require, exports, audi) {
    // 01 -----------------
    var App01 = (function () {
        function App01() {
        }
        return App01;
    })();
    // 02 -----------------
    var Logger02 = (function () {
        function Logger02() {
        }
        return Logger02;
    })();
    var App02 = (function () {
        function App02(logger) {
            this.logger = logger;
        }
        App02.inject = function () {
            return [Logger02];
        };
        return App02;
    })();
    // 03 -----------------
    var Logger03 = (function () {
        function Logger03() {
        }
        return Logger03;
    })();
    var App03 = (function () {
        function App03(logger) {
            this.logger = logger;
        }
        App03.inject = [];
        return App03;
    })();
    // 04 -----------------
    var Logger04 = (function () {
        function Logger04() {
        }
        return Logger04;
    })();
    var App04 = (function () {
        function App04(logger) {
            this.logger = logger;
        }
        App04.parameters = [[]];
        return App04;
    })();
    // 05 -----------------
    var Logger05 = (function () {
        function Logger05() {
        }
        return Logger05;
    })();
    var App05One = (function () {
        function App05One(logger) {
            this.logger = logger;
        }
        App05One.inject = [Logger05];
        return App05One;
    })();
    var App05Two = (function () {
        function App05Two(logger) {
            this.logger = logger;
        }
        App05Two.inject = [Logger05];
        return App05Two;
    })();
    // 06 -----------------
    var Logger06 = (function () {
        function Logger06() {
        }
        return Logger06;
    })();
    var App06One = (function () {
        function App06One(logger) {
            this.logger = logger;
        }
        return App06One;
    })();
    var App06Two = (function () {
        function App06Two(logger) {
            this.logger = logger;
        }
        return App06Two;
    })();
    // 07 -----------------
    var Logger07 = (function () {
        function Logger07() {
        }
        Logger07.annotations = function () {
            return [new audi.Singleton()];
        };
        return Logger07;
    })();
    var App07One = (function () {
        function App07One(logger) {
            this.logger = logger;
        }
        App07One.inject = [Logger07];
        return App07One;
    })();
    var App07Two = (function () {
        function App07Two(logger) {
            this.logger = logger;
        }
        App07Two.inject = [Logger07];
        return App07Two;
    })();
    // 08 -----------------
    var Logger08 = (function () {
        function Logger08() {
        }
        Logger08.annotations = [];
        return Logger08;
    })();
    var App08One = (function () {
        function App08One(logger) {
            this.logger = logger;
        }
        App08One.inject = function () {
            return [Logger08];
        };
        return App08One;
    })();
    var App08Two = (function () {
        function App08Two(logger) {
            this.logger = logger;
        }
        App08Two.inject = function () {
            return [Logger08];
        };
        return App08Two;
    })();
    // 09 -----------------
    var Logger09 = (function () {
        function Logger09() {
        }
        return Logger09;
    })();
    var App09One = (function () {
        function App09One(logger) {
            this.logger = logger;
        }
        App09One.inject = function () {
            return [Logger09];
        };
        return App09One;
    })();
    var App09Two = (function () {
        function App09Two(logger) {
            this.logger = logger;
        }
        App09Two.inject = function () {
            return [Logger09];
        };
        return App09Two;
    })();
    // 10 -----------------
    var Logger10 = (function () {
        function Logger10() {
        }
        Logger10.annotations = function () {
            return [new audi.Transient()];
        };
        return Logger10;
    })();
    var App10One = (function () {
        function App10One(logger) {
            this.logger = logger;
        }
        App10One.inject = function () {
            return [Logger10];
        };
        return App10One;
    })();
    var App10Two = (function () {
        function App10Two(logger) {
            this.logger = logger;
        }
        App10Two.inject = function () {
            return [Logger10];
        };
        return App10Two;
    })();
    // 11 -----------------
    var Logger11 = (function () {
        function Logger11() {
        }
        Logger11.annotations = [];
        return Logger11;
    })();
    var App11One = (function () {
        function App11One(logger) {
            this.logger = logger;
        }
        App11One.inject = function () {
            return [Logger11];
        };
        return App11One;
    })();
    var App11Two = (function () {
        function App11Two(logger) {
            this.logger = logger;
        }
        App11Two.inject = function () {
            return [Logger11];
        };
        return App11Two;
    })();
    // 12 -----------------
    var Logger12 = (function () {
        function Logger12() {
        }
        return Logger12;
    })();
    var App12One = (function () {
        function App12One(logger) {
            this.logger = logger;
        }
        App12One.inject = function () {
            return [Logger12];
        };
        return App12One;
    })();
    var App12Two = (function () {
        function App12Two(logger) {
            this.logger = logger;
        }
        App12Two.inject = function () {
            return [Logger12];
        };
        return App12Two;
    })();
    // 13 -----------------
    var Logger13 = (function () {
        function Logger13() {
        }
        return Logger13;
    })();
    var App13One = (function () {
        function App13One(logger) {
            this.logger = logger;
        }
        App13One.inject = function () {
            return [Logger13];
        };
        return App13One;
    })();
    var App13Two = (function () {
        function App13Two(logger) {
            this.logger = logger;
        }
        App13Two.inject = function () {
            return [Logger13];
        };
        return App13Two;
    })();
    // 14 -----------------
    var LoggerBase14 = (function () {
        function LoggerBase14() {
        }
        LoggerBase14.annotations = function () {
            return [new audi.Transient()];
        };
        return LoggerBase14;
    })();
    var Logger14 = (function (_super) {
        __extends(Logger14, _super);
        function Logger14() {
            _super.apply(this, arguments);
        }
        return Logger14;
    })(LoggerBase14);
    var App14One = (function () {
        function App14One(logger) {
            this.logger = logger;
        }
        App14One.inject = function () {
            return [Logger14];
        };
        return App14One;
    })();
    var App14Two = (function () {
        function App14Two(logger) {
            this.logger = logger;
        }
        App14Two.inject = function () {
            return [Logger14];
        };
        return App14Two;
    })();
    // 15 -----------------
    var LoggerBase15 = (function () {
        function LoggerBase15() {
        }
        LoggerBase15.annotations = [];
        return LoggerBase15;
    })();
    LoggerBase15.annotations = [new audi.Transient()];
    var Logger15 = (function (_super) {
        __extends(Logger15, _super);
        function Logger15() {
            _super.apply(this, arguments);
        }
        return Logger15;
    })(LoggerBase15);
    var App15One = (function () {
        function App15One(logger) {
            this.logger = logger;
        }
        App15One.inject = function () {
            return [Logger15];
        };
        return App15One;
    })();
    var App15Two = (function () {
        function App15Two(logger) {
            this.logger = logger;
        }
        App15Two.inject = function () {
            return [Logger15];
        };
        return App15Two;
    })();
    describe("container", function () {
        describe("injection", function () {
            it("instantiates class without injected services", function () {
                var container = new audi.Container();
                var app = container.get(App01);
                expect(app).toEqual(jasmine.any(App01));
            });
            it("uses static inject method (ES6)", function () {
                var container = new audi.Container();
                var app = container.get(App02);
                expect(app.logger).toEqual(jasmine.any(Logger02));
            });
            it("uses static inject property (TypeScript,CoffeeScript,ES5)", function () {
                App03.inject = [Logger03];
                var container = new audi.Container();
                var app = container.get(App03);
                expect(app.logger).toEqual(jasmine.any(Logger03));
            });
            it("uses static parameters property (AtScript)", function () {
                App04.parameters = [[Logger04]]; //Note: Normally provided by the AtScript compiler.
                var container = new audi.Container();
                var app = container.get(App04);
                expect(app.logger).toEqual(jasmine.any(Logger04));
            });
        });
        describe("registration", function () {
            it("automatically configures as singleton", function () {
                var container = new audi.Container();
                var app1 = container.get(App05One);
                var app2 = container.get(App05Two);
                expect(app1.logger).toBe(app2.logger);
            });
            it("configures singleton via api", function () {
                var container = new audi.Container();
                container.registerSingleton(Logger06, Logger06);
                var app1 = container.get(App06One);
                var app2 = container.get(App06Two);
                expect(app1.logger).toBe(app2.logger);
            });
            it("configures singleton via annotations method (ES6)", function () {
                var container = new audi.Container();
                var app1 = container.get(App07One);
                var app2 = container.get(App07Two);
                expect(app1.logger).toBe(app2.logger);
            });
            it("configures singleton via annotations property (ES5, AtScript, TypeScript, CoffeeScript)", function () {
                var container = new audi.Container();
                Logger08.annotations = [new audi.Singleton()];
                var app1 = container.get(App08One);
                var app2 = container.get(App08Two);
                expect(app1.logger).toBe(app2.logger);
            });
            it("configures transient (non singleton) via api", function () {
                var container = new audi.Container();
                container.registerTransient(Logger09, Logger09);
                var app1 = container.get(App09One);
                var app2 = container.get(App09Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("configures transient (non singleton) via annotations method (ES6)", function () {
                var container = new audi.Container();
                var app1 = container.get(App10One);
                var app2 = container.get(App10Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("configures transient (non singleton) via annotations property (ES5, AtScript, TypeScript, CoffeeScript)", function () {
                var container = new audi.Container();
                Logger11.annotations = [new audi.Transient()];
                var app1 = container.get(App11One);
                var app2 = container.get(App11Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("configures instance via api", function () {
                var container = new audi.Container();
                var instance = new Logger12();
                container.registerInstance(Logger12, instance);
                var app1 = container.get(App12One);
                var app2 = container.get(App12Two);
                expect(app1.logger).toBe(instance);
                expect(app2.logger).toBe(instance);
            });
            it("configures custom via api", function () {
                var container = new audi.Container();
                container.registerHandler(Logger13, function (c) { return "something strange"; });
                var app1 = container.get(App13One);
                var app2 = container.get(App13Two);
                expect(app1.logger).toEqual("something strange");
                expect(app2.logger).toEqual("something strange");
            });
            it("uses base annotations method (ES6) when derived does not specify", function () {
                var container = new audi.Container();
                var app1 = container.get(App14One);
                var app2 = container.get(App14Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify", function () {
                var container = new audi.Container();
                var app1 = container.get(App15One);
                var app2 = container.get(App15Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
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
});
//# sourceMappingURL=di-test.spec.js.map