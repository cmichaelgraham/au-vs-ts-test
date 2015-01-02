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
    // 15A -----------------
    var LoggerBase15A = (function () {
        function LoggerBase15A() {
        }
        LoggerBase15A.annotations = [];
        return LoggerBase15A;
    })();
    var Logger15A = (function (_super) {
        __extends(Logger15A, _super);
        function Logger15A() {
            _super.apply(this, arguments);
        }
        return Logger15A;
    })(LoggerBase15A);
    LoggerBase15A.annotations = [new audi.Transient()];
    var App15AOne = (function () {
        function App15AOne(logger) {
            this.logger = logger;
        }
        App15AOne.inject = function () {
            return [Logger15A];
        };
        return App15AOne;
    })();
    var App15ATwo = (function () {
        function App15ATwo(logger) {
            this.logger = logger;
        }
        App15ATwo.inject = function () {
            return [Logger15A];
        };
        return App15ATwo;
    })();
    // 16 -----------------
    var LoggerBase16 = (function () {
        function LoggerBase16() {
        }
        LoggerBase16.annotations = function () {
            return [new audi.Singleton()];
        };
        return LoggerBase16;
    })();
    var Logger16 = (function (_super) {
        __extends(Logger16, _super);
        function Logger16() {
            _super.apply(this, arguments);
        }
        Logger16.annotations = function () {
            return [new audi.Transient()];
        };
        return Logger16;
    })(LoggerBase16);
    var App16One = (function () {
        function App16One(logger) {
            this.logger = logger;
        }
        App16One.inject = function () {
            return [Logger16];
        };
        return App16One;
    })();
    var App16Two = (function () {
        function App16Two(logger) {
            this.logger = logger;
        }
        App16Two.inject = function () {
            return [Logger16];
        };
        return App16Two;
    })();
    // 17 -----------------
    var LoggerBase17 = (function () {
        function LoggerBase17() {
        }
        LoggerBase17.annotations = [new audi.Singleton()];
        return LoggerBase17;
    })();
    var Logger17 = (function (_super) {
        __extends(Logger17, _super);
        function Logger17() {
            _super.apply(this, arguments);
        }
        return Logger17;
    })(LoggerBase17);
    var App17One = (function () {
        function App17One(logger) {
            this.logger = logger;
        }
        App17One.inject = function () {
            return [Logger17];
        };
        return App17One;
    })();
    var App17Two = (function () {
        function App17Two(logger) {
            this.logger = logger;
        }
        App17Two.inject = function () {
            return [Logger17];
        };
        return App17Two;
    })();
    // 18 -----------------
    var Logger18 = (function () {
        function Logger18() {
        }
        return Logger18;
    })();
    // 19 -----------------
    var Logger19 = (function () {
        function Logger19() {
        }
        return Logger19;
    })();
    // 20 -----------------
    var LoggerBase20 = (function () {
        function LoggerBase20() {
        }
        return LoggerBase20;
    })();
    var Logger20 = (function (_super) {
        __extends(Logger20, _super);
        function Logger20() {
            _super.apply(this, arguments);
        }
        return Logger20;
    })(LoggerBase20);
    var App20 = (function () {
        function App20(logger) {
            this.logger = logger;
        }
        App20.inject = function () {
            return [LoggerBase20];
        };
        return App20;
    })();
    // 21 -----------------
    var LoggerBase21 = (function () {
        function LoggerBase21() {
        }
        return LoggerBase21;
    })();
    var Logger21 = (function (_super) {
        __extends(Logger21, _super);
        function Logger21() {
            _super.apply(this, arguments);
        }
        return Logger21;
    })(LoggerBase21);
    var App21 = (function () {
        function App21(logger) {
            this.logger = logger;
        }
        App21.inject = function () {
            return [LoggerBase21];
        };
        return App21;
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
                container.registerHandler(Logger13, function () { return "something strange"; });
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
            it("uses base annotations property (ES5, AtScript, TypeScript, CoffeeScript) when derived does not specify", function () {
                var container = new audi.Container();
                var app1 = container.get(App15AOne);
                var app2 = container.get(App15ATwo);
                expect(app1.logger).toBe(app2.logger);
            });
            it("overrides base annotations method (ES6) with derived configuration", function () {
                var container = new audi.Container();
                var app1 = container.get(App16One);
                var app2 = container.get(App16Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("overrides base annotations property (ES5, AtScript, TypeScript, CoffeeScript) with derived configuration", function () {
                var container = new audi.Container();
                Logger17.annotations = [new audi.Transient()];
                var app1 = container.get(App17One);
                var app2 = container.get(App17Two);
                expect(app1.logger).not.toBe(app2.logger);
            });
            it("configures key as service when transient api only provided with key", function () {
                var container = new audi.Container();
                container.registerTransient(Logger18);
                var logger1 = container.get(Logger18), logger2 = container.get(Logger18);
                expect(true).toBe(true);
                expect(logger1).toEqual(jasmine.any(Logger18));
                expect(logger2).toEqual(jasmine.any(Logger18));
                expect(logger2).not.toBe(logger1);
            });
            it("configures key as service when singleton api only provided with key", function () {
                var container = new audi.Container();
                container.registerSingleton(Logger19);
                var logger1 = container.get(Logger19), logger2 = container.get(Logger19);
                expect(logger1).toEqual(jasmine.any(Logger19));
                expect(logger2).toEqual(jasmine.any(Logger19));
                expect(logger2).toBe(logger1);
            });
            it("configures concrete singelton via api for abstract dependency", function () {
                var container = new audi.Container();
                container.registerSingleton(LoggerBase20, Logger20);
                var app = container.get(App20);
                expect(app.logger).toEqual(jasmine.any(Logger20));
            });
            it("configures concrete transient via api for abstract dependency", function () {
                var container = new audi.Container();
                container.registerTransient(LoggerBase21, Logger21);
                var app = container.get(App21);
                expect(app.logger).toEqual(jasmine.any(Logger21));
            });
        });
    });
});
//# sourceMappingURL=di-test.spec.js.map