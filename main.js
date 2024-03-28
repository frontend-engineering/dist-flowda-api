/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppController = class AppController {
    constructor() { }
    hi() {
        return { hi: 'flowda-api' };
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)('/__hi'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "hi", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)('/apps'),
    tslib_1.__metadata("design:paramtypes", [])
], AppController);


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = exports.appModuleProviders = exports.appModuleControllers = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const services_module_1 = __webpack_require__("./src/services/services.module.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const task_controller_1 = __webpack_require__("./src/app/task.controller.ts");
const user_controller_1 = __webpack_require__("./src/user/user.controller.ts");
const userLocal_strategy_1 = __webpack_require__("./src/user/userLocal.strategy.ts");
const userJwt_strategy_1 = __webpack_require__("./src/user/userJwt.strategy.ts");
const data_controller_1 = __webpack_require__("./src/app/data.controller.ts");
const schedule_1 = __webpack_require__("@nestjs/schedule");
const table_filter_controller_1 = __webpack_require__("./src/app/table-filter.controller.ts");
const audit_controller_1 = __webpack_require__("./src/app/audit.controller.ts");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const dynamic_table_def_controller_1 = __webpack_require__("./src/app/dynamic-table-def.controller.ts");
const dynamic_table_data_controller_1 = __webpack_require__("./src/app/dynamic-table-data.controller.ts");
const menu_controller_1 = __webpack_require__("./src/app/menu.controller.ts");
exports.appModuleControllers = [
    app_controller_1.AppController,
    data_controller_1.DataController,
    task_controller_1.TaskController,
    user_controller_1.UserController,
    table_filter_controller_1.TableFilterController,
    audit_controller_1.AuditController,
    dynamic_table_def_controller_1.DynamicTableDefController,
    dynamic_table_data_controller_1.DynamicTableDataController,
    menu_controller_1.MenuController,
];
exports.appModuleProviders = [
    {
        provide: core_1.APP_FILTER,
        useClass: flowda_shared_node_1.AppExceptionFilter,
    },
    {
        provide: core_1.APP_PIPE,
        useClass: nestjs_zod_1.ZodValidationPipe,
    },
    userLocal_strategy_1.UserLocalStrategy,
    userJwt_strategy_1.UserJwtStrategy,
];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule, schedule_1.ScheduleModule.forRoot()],
        controllers: exports.appModuleControllers,
        providers: exports.appModuleProviders,
    })
], AppModule);


/***/ }),

/***/ "./src/app/audit.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let AuditController = class AuditController {
    constructor(audit) {
        this.audit = audit;
    }
    queryTableFilter(dto) {
        return this.audit.queryAudit(dto);
    }
};
exports.AuditController = AuditController;
tslib_1.__decorate([
    (0, common_1.Post)('/query'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_shared_node_1.QueryAuditSchemaDto !== "undefined" && flowda_shared_node_1.QueryAuditSchemaDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuditController.prototype, "queryTableFilter", null);
exports.AuditController = AuditController = tslib_1.__decorate([
    (0, common_1.Controller)('/audit'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_node_1.AuditService !== "undefined" && flowda_shared_node_1.AuditService) === "function" ? _a : Object])
], AuditController);


/***/ }),

/***/ "./src/app/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const express = tslib_1.__importStar(__webpack_require__("express"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let DataController = class DataController {
    constructor(service) {
        this.service = service;
    }
    get(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.get(req.user, req.params[0], req.query);
        });
    }
    put(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.put(req.user, req.params[0], values);
        });
    }
    post(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.post(req.user, req.params[0], values);
        });
    }
    remove(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.remove(req.user, req.params[0]);
        });
    }
};
exports.DataController = DataController;
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof express !== "undefined" && express.Request) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Put)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof express !== "undefined" && express.Request) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "put", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof express !== "undefined" && express.Request) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Delete)(''),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "remove", null);
exports.DataController = DataController = tslib_1.__decorate([
    (0, common_1.Controller)('data/*'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _a : Object])
], DataController);


/***/ }),

/***/ "./src/app/dynamic-table-data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const express = tslib_1.__importStar(__webpack_require__("express"));
let DynamicTableDataController = class DynamicTableDataController {
    constructor(service) {
        this.service = service;
    }
    get(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.get(req.user, req.params[0], req.query);
        });
    }
    post(req, values) {
        return this.service.post(req.user, req.params[0], values);
    }
    put(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.put(req.user, req.params[0], values);
        });
    }
    remove(req) {
        return this.service.remove(req.user, req.params[0]);
    }
};
exports.DynamicTableDataController = DynamicTableDataController;
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof express !== "undefined" && express.Request) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DynamicTableDataController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof express !== "undefined" && express.Request) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DynamicTableDataController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Put)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof express !== "undefined" && express.Request) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DynamicTableDataController.prototype, "put", null);
tslib_1.__decorate([
    (0, common_1.Delete)(''),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DynamicTableDataController.prototype, "remove", null);
exports.DynamicTableDataController = DynamicTableDataController = tslib_1.__decorate([
    (0, common_1.Controller)('/dynamic-table-data/*'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.DynamicTableDataService !== "undefined" && flowda_services_1.DynamicTableDataService) === "function" ? _a : Object])
], DynamicTableDataController);


/***/ }),

/***/ "./src/app/dynamic-table-def.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDefController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let DynamicTableDefController = class DynamicTableDefController {
    constructor(defService) {
        this.defService = defService;
    }
    getSchema() {
        return this.defService.getSchema();
    }
    getRaw() {
        return this.defService.getRaw();
    }
};
exports.DynamicTableDefController = DynamicTableDefController;
tslib_1.__decorate([
    (0, common_1.Get)('/getSchema'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], DynamicTableDefController.prototype, "getSchema", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getRaw'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], DynamicTableDefController.prototype, "getRaw", null);
exports.DynamicTableDefController = DynamicTableDefController = tslib_1.__decorate([
    (0, common_1.Controller)('/dynamic-table-def'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.DynamicTableDefService !== "undefined" && flowda_services_1.DynamicTableDefService) === "function" ? _a : Object])
], DynamicTableDefController);


/***/ }),

/***/ "./src/app/menu.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let MenuController = class MenuController {
    constructor(menu) {
        this.menu = menu;
    }
    get(req) {
        return this.menu.get({ tenantId: req.user.tid });
    }
};
exports.MenuController = MenuController;
tslib_1.__decorate([
    (0, common_1.Get)('getMenu'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MenuController.prototype, "get", null);
exports.MenuController = MenuController = tslib_1.__decorate([
    (0, common_1.Controller)('/menu'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.MenuService !== "undefined" && flowda_services_1.MenuService) === "function" ? _a : Object])
], MenuController);


/***/ }),

/***/ "./src/app/table-filter.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let TableFilterController = class TableFilterController {
    constructor(tableFilter) {
        this.tableFilter = tableFilter;
    }
    saveTableFilter(dto) {
        return this.tableFilter.save(dto);
    }
    queryTableFilter(dto) {
        return this.tableFilter.query(dto);
    }
    removeTableFilter(dto) {
        return this.tableFilter.remove(dto);
    }
};
exports.TableFilterController = TableFilterController;
tslib_1.__decorate([
    (0, common_1.Post)('/save'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_shared_node_1.SaveTableFilterDto !== "undefined" && flowda_shared_node_1.SaveTableFilterDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TableFilterController.prototype, "saveTableFilter", null);
tslib_1.__decorate([
    (0, common_1.Post)('/query'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof flowda_shared_node_1.QueryTableFilterSchemaDto !== "undefined" && flowda_shared_node_1.QueryTableFilterSchemaDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TableFilterController.prototype, "queryTableFilter", null);
tslib_1.__decorate([
    (0, common_1.Post)('/remove'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof flowda_shared_node_1.RemoveTableFilterSchemaDto !== "undefined" && flowda_shared_node_1.RemoveTableFilterSchemaDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TableFilterController.prototype, "removeTableFilter", null);
exports.TableFilterController = TableFilterController = tslib_1.__decorate([
    (0, common_1.Controller)('/table-filter'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_node_1.TableFilterService !== "undefined" && flowda_shared_node_1.TableFilterService) === "function" ? _a : Object])
], TableFilterController);


/***/ }),

/***/ "./src/app/task.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getTaskForm(dto) {
        return this.taskService.getTaskForm(dto);
    }
    getTask(taskId) {
        return this.taskService.getTask(taskId);
    }
    completeResource(taskId, body) {
        return this.taskService.completeResource(taskId, body);
    }
};
exports.TaskController = TaskController;
tslib_1.__decorate([
    (0, common_1.Post)('/getTaskForm'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_services_1.GetTaskFormSchemaDto !== "undefined" && flowda_services_1.GetTaskFormSchemaDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "getTaskForm", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:taskId'),
    tslib_1.__param(0, (0, common_1.Param)('taskId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "getTask", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:taskId/completeResource'),
    tslib_1.__param(0, (0, common_1.Param)('taskId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "completeResource", null);
exports.TaskController = TaskController = tslib_1.__decorate([
    (0, common_1.Controller)('/tasks'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.TaskService !== "undefined" && flowda_services_1.TaskService) === "function" ? _a : Object])
], TaskController);


/***/ }),

/***/ "./src/loadModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const client_flowda_1 = __webpack_require__("@prisma/client-flowda");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const flowda_services_trpc_server_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/index.ts");
const tencentcloud = tslib_1.__importStar(__webpack_require__("tencentcloud-sdk-nodejs"));
const smsClient = tencentcloud.sms.v20210111.Client;
const prisma = new client_flowda_1.PrismaClient({
    log: [
        // 'query',
        'info',
        'warn',
        'error',
    ],
});
console.log('---------- ENV --------------');
console.log('---------- ENV --------------');
function loadModule(container) {
    container.bind(flowda_shared_types_1.SmsClientSymbol).toConstantValue(new smsClient({
        credential: {
            secretId: process.env.SMS_SECRET_ID,
            secretKey: process.env.SMS_SECRET_KEY,
        },
        region: 'ap-nanjing',
    }));
    container.bind(flowda_shared_types_1.PrismaClientSymbol).toConstantValue(prisma);
    container.load(flowda_shared_1.flowdaSharedModule);
    container.load(flowda_shared_node_1.flowdaSharedNodeModule);
    container.load(flowda_services_trpc_server_1.flowdaServiceTrpcServerModule);
    container.load(flowda_services_1.flowdaServiceModule);
}
exports.loadModule = loadModule;


/***/ }),

/***/ "./src/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = exports.servicesContainer = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const loadModule_1 = __webpack_require__("./src/loadModule.ts");
exports.servicesContainer = new inversify_1.Container();
(0, loadModule_1.loadModule)(exports.servicesContainer);
const services = (0, flowda_shared_1.getServices)(exports.servicesContainer);
let ServicesModule = class ServicesModule {
    constructor() { }
};
exports.ServicesModule = ServicesModule;
exports.ServicesModule = ServicesModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);


/***/ }),

/***/ "./src/setup.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupNestApp = exports.globalPrefix = void 0;
const flowda_services_trpc_server_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const http_proxy_middleware_1 = __webpack_require__("http-proxy-middleware");
exports.globalPrefix = 'flowda-api';
function setupNestApp(app, port) {
    app.enableCors();
    app.setGlobalPrefix(exports.globalPrefix);
    const trpc = app.get(flowda_services_trpc_server_1.TrpcRouter);
    trpc.applyMiddleware(app, exports.globalPrefix, port);
    const user = app.get(flowda_services_1.UserService);
    app.use((req, res, next) => {
        if (req.originalUrl.includes('favicon.ico')) {
            res.status(204).end();
        }
        else if (req.url.indexOf(`/${exports.globalPrefix}/camunda/engine-rest/`) > -1) {
            const extract = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken();
            const bearerToken = extract(req);
            if (bearerToken) {
                try {
                    const authed = user.verifyAccessToken(bearerToken);
                    if (authed) {
                        next();
                    }
                    else {
                        res.status(401).json({
                            message: '[PROXY] Unauthorized',
                        });
                    }
                }
                catch (e) {
                    res.status(401).json({
                        message: '[PROXY] Unauthorized',
                    });
                }
            }
            else {
                res.status(401).json({
                    message: '[PROXY] Unauthorized',
                });
            }
        }
        else {
            next();
        }
    });
    // Proxy endpoints
    app.use(`/${exports.globalPrefix}/camunda/engine-rest`, (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: flowda_services_1.FLOWDA_ENV.C7_REST_URL,
        changeOrigin: true,
        pathRewrite: {
            [`^/${exports.globalPrefix}/camunda/engine-rest`]: '',
        },
    }));
}
exports.setupNestApp = setupNestApp;


/***/ }),

/***/ "./src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserController_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const userLocalAuth_guard_1 = __webpack_require__("./src/user/userLocalAuth.guard.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let UserController = UserController_1 = class UserController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(UserController_1.name);
    }
    register(dto) {
        return this.service.register(dto);
    }
    resetPassword(req, dto) {
        return this.service.resetPassword(req.user, dto);
    }
    login(req) {
        return req.user;
    }
    getUserInfo(req) {
        return this.service.getUserInfo(req.user.uid);
    }
    logout(req) {
        // 客户端清空 token
        // 服务端清空 refresh token
        // 暂时不做 blacklist access_token 失效时间 10min
        return req.user;
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(nestjs_zod_1.ZodValidationPipe),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_shared_types_1.RegisterDto !== "undefined" && flowda_shared_types_1.RegisterDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('resetPassword'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_c = typeof flowda_shared_types_1.resetPasswordSchemaDto !== "undefined" && flowda_shared_types_1.resetPasswordSchemaDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "resetPassword", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userLocalAuth_guard_1.UserLocalAuthGuard),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Get)('getUserInfo'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "getUserInfo", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('logout'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "logout", null);
exports.UserController = UserController = UserController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./src/user/userJwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserJwtStrategy_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let UserJwtStrategy = UserJwtStrategy_1 = class UserJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'userJwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: flowda_services_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
        });
        this.logger = new common_1.Logger(UserJwtStrategy_1.name);
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // this.logger.debug!(`[UserJwtStrategy] payload ${JSON.stringify(payload, null, 2)}`)
            return payload;
        });
    }
};
exports.UserJwtStrategy = UserJwtStrategy;
exports.UserJwtStrategy = UserJwtStrategy = UserJwtStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserJwtStrategy);


/***/ }),

/***/ "./src/user/userJwtAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserJwtAuthGuard = class UserJwtAuthGuard extends (0, passport_1.AuthGuard)('userJwt') {
};
exports.UserJwtAuthGuard = UserJwtAuthGuard;
exports.UserJwtAuthGuard = UserJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserJwtAuthGuard);


/***/ }),

/***/ "./src/user/userLocal.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserLocalStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_local_1 = __webpack_require__("passport-local");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let UserLocalStrategy = UserLocalStrategy_1 = class UserLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'userLocal') {
    constructor(user) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.user = user;
        this.logger = new common_1.Logger(UserLocalStrategy_1.name);
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.user.validate({ username, password });
            return ret.user;
        });
    }
};
exports.UserLocalStrategy = UserLocalStrategy;
exports.UserLocalStrategy = UserLocalStrategy = UserLocalStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _a : Object])
], UserLocalStrategy);


/***/ }),

/***/ "./src/user/userLocalAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserLocalAuthGuard = class UserLocalAuthGuard extends (0, passport_1.AuthGuard)('userLocal') {
};
exports.UserLocalAuthGuard = UserLocalAuthGuard;
exports.UserLocalAuthGuard = UserLocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserLocalAuthGuard);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/flowdaServiceTrpcServer.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaServiceTrpcServerModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const trpc_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts");
const schema_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/schema.router.ts");
const user_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/user.router.ts");
const trpc_context_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.context.ts");
const data_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/data.router.ts");
const customer_auth_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/customer-auth-v4.router.ts");
const order_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/order-v4.router.ts");
const product_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/product-v4.router.ts");
const menu_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/menu.router.ts");
exports.flowdaServiceTrpcServerModule = new inversify_1.ContainerModule(bind => {
    bind(trpc_service_1.TrpcService).toSelf().inSingletonScope();
    bind(trpc_context_1.ContextFactory).toSelf().inSingletonScope();
    bind(schema_router_1.SchemaRouter).toSelf().inSingletonScope();
    bind(user_router_1.UserRouter).toSelf().inSingletonScope();
    bind(data_router_1.DataRouter).toSelf().inSingletonScope();
    bind(menu_router_1.MenuRouter).toSelf().inSingletonScope();
    bind(customer_auth_v4_router_1.CustomerAuthV4Router).toSelf().inSingletonScope();
    bind(order_v4_router_1.OrderV4Router).toSelf().inSingletonScope();
    bind(product_v4_router_1.ProductV4Router).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, trpc_router_1.TrpcRouter);
});


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services-trpc-server/src/flowdaServiceTrpcServer.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/data.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataRouter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let DataRouter = DataRouter_1 = class DataRouter {
    constructor(trpc, dataService, loggerFactory) {
        this.trpc = trpc;
        this.dataService = dataService;
        this.router = this.trpc.router({
            get: this.trpc.procedure
                .input(zod_1.z.object({
                user: zod_1.z.any(),
                path: zod_1.z.string(),
                query: zod_1.z.any(),
            }))
                .query((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input, ctx }) {
                return this.dataService.get(input.user, input.path, input.query);
            })),
            put: this.trpc.procedure
                .input(zod_1.z.object({
                user: zod_1.z.any(),
                path: zod_1.z.string(),
                values: zod_1.z.any(),
            }))
                .mutation((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input, ctx }) {
                return this.dataService.put(input.user, input.path, input.values);
            })),
        });
        this.logger = loggerFactory(DataRouter_1.name);
    }
};
exports.DataRouter = DataRouter;
exports.DataRouter = DataRouter = DataRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.DataServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, Function])
], DataRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/menu.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MenuRouter_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let MenuRouter = MenuRouter_1 = class MenuRouter {
    constructor(trpc, menuService, dynamicTableDef, loggerFactory) {
        this.trpc = trpc;
        this.menuService = menuService;
        this.dynamicTableDef = dynamicTableDef;
        this.router = this.trpc.router({
            getMenu: this.trpc.procedure
                .input(zod_1.z.object({
                tenantId: zod_1.z.number(),
            }))
                .query((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input, ctx }) {
                return this.menuService.getTenantMenu({ tenantId: input.tenantId });
            })),
        });
        this.logger = loggerFactory(MenuRouter_1.name);
    }
};
exports.MenuRouter = MenuRouter;
exports.MenuRouter = MenuRouter = MenuRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.MenuServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.DynamicTableDefServiceSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof flowda_services_1.MenuService !== "undefined" && flowda_services_1.MenuService) === "function" ? _b : Object, Object, Function])
], MenuRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/schema.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaRouter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_shared_types_2 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let SchemaRouter = SchemaRouter_1 = class SchemaRouter {
    constructor(trpc, schemaService, dynamicTableDef, loggerFactory) {
        this.trpc = trpc;
        this.schemaService = schemaService;
        this.dynamicTableDef = dynamicTableDef;
        this.schemaRouter = this.trpc.router({
            getSchema: this.trpc.procedure.input(zod_1.z.object({})).query((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input }) {
                // todo: 验证 & 权限控制放在哪里？
                // 之前 nestjs 可以放在 guard 上，但是用了 trpc 就不适合了，估计要放在 inversify，但是要能传递 context(inner)
                const zodSchema = this.schemaService.getSchema();
                // const dynamicSchema = await this.dynamicTableDef.getSchema()
                // const ret = Object.assign({}, zodSchema, dynamicSchema)
                // return ret
                return zodSchema;
            })),
            getSchemaCache: this.trpc.procedure.input(zod_1.z.object({})).query((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input }) {
                const ret = yield this.schemaService.getSchemaCache();
                return ret;
            })),
        });
        this.logger = loggerFactory(SchemaRouter_1.name);
    }
};
exports.SchemaRouter = SchemaRouter;
exports.SchemaRouter = SchemaRouter = SchemaRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_2.DynamicTableDefServiceSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, Object, Function])
], SchemaRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/customer-auth-v4.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomerAuthV4Router_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerAuthV4Router = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const zod_1 = __webpack_require__("zod");
let CustomerAuthV4Router = CustomerAuthV4Router_1 = class CustomerAuthV4Router {
    constructor(trpc, userService, loggerFactory) {
        this.trpc = trpc;
        this.userService = userService;
        this.router = this.trpc.router({
            preSignup: this.trpc.tenantProtectedProcedure.input(flowda_shared_types_1.customerPreSignupSchema).mutation((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input, ctx }) {
                return this.userService.preSignup(Object.assign({ tid: ctx.tenant.id }, input));
            })),
            verifyAndSignup: this.trpc.tenantProtectedProcedure.input(flowda_shared_types_1.customerSignupSchema).mutation((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input, ctx }) {
                return this.userService.verifyAndSignup(Object.assign({ tid: ctx.tenant.id }, input), ctx);
            })),
            validateUserReturnTokens: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.object({
                email: zod_1.z.string(),
                password: zod_1.z.string(),
            }))
                .mutation((_c) => tslib_1.__awaiter(this, [_c], void 0, function* ({ input, ctx }) {
                return this.userService.validateByEmail({
                    tenantId: ctx.tenant.id,
                    email: input.email,
                    password: input.password,
                }, ctx);
            })),
            wxValidateUser: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.object({
                code: zod_1.z.string(),
            }))
                .mutation((_d) => tslib_1.__awaiter(this, [_d], void 0, function* ({ input, ctx }) {
                return this.userService.wxValidateUser({
                    tid: ctx.tenant.id,
                    code: input.code,
                }, ctx);
            })),
            refreshToken: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.object({
                rt: zod_1.z.string(),
            }))
                .mutation((_e) => tslib_1.__awaiter(this, [_e], void 0, function* ({ input }) {
                return this.userService.refreshToken(input);
            })),
            getUser: this.trpc.userProtectedProcedure.input(zod_1.z.object({})).query((_f) => tslib_1.__awaiter(this, [_f], void 0, function* ({ input, ctx }) {
                return ctx.user;
            })),
            logoutApi: this.trpc.userProtectedProcedure.input(zod_1.z.object({})).mutation((_g) => tslib_1.__awaiter(this, [_g], void 0, function* ({ input, ctx }) {
                return this.userService.logout({
                    uid: ctx.user.id,
                    tid: ctx.user.tenantId,
                });
            })),
            generateRecoveryCode: this.trpc.tenantProtectedProcedure
                .input(flowda_shared_types_1.generateRecoveryCodeSchema)
                .mutation((_h) => tslib_1.__awaiter(this, [_h], void 0, function* ({ input, ctx }) {
                return this.userService.generateRecoveryCode(Object.assign({
                    tid: ctx.tenant.id,
                }, input));
            })),
            resetPassword: this.trpc.tenantProtectedProcedure
                .input(flowda_shared_types_1.resetPasswordWithRecoveryCodeSchema)
                .mutation((_j) => tslib_1.__awaiter(this, [_j], void 0, function* ({ input, ctx }) {
                return this.userService.resetPasswordWithRecoveryCode(Object.assign({
                    tid: ctx.tenant.id,
                }, input));
            })),
            fwhLogin: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.object({
                code: zod_1.z.string(),
            }))
                .mutation((_k) => tslib_1.__awaiter(this, [_k], void 0, function* ({ input, ctx }) {
                return this.userService.fwhLogin({
                    tid: ctx.tenant.id,
                    code: input.code,
                });
            })),
            amountUpdate: this.trpc.userProtectedProcedure.input(flowda_shared_types_1.amountUpdateSchema).mutation((_l) => tslib_1.__awaiter(this, [_l], void 0, function* ({ input, ctx }) {
                return this.userService.amountUpdate(Object.assign({
                    uid: ctx.user.id,
                    tid: ctx.user.tenantId,
                }, input));
            })),
        });
        this.logger = loggerFactory(CustomerAuthV4Router_1.name);
    }
};
exports.CustomerAuthV4Router = CustomerAuthV4Router;
exports.CustomerAuthV4Router = CustomerAuthV4Router = CustomerAuthV4Router_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_services_1.UserService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _b : Object, Function])
], CustomerAuthV4Router);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/order-v4.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrderV4Router_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderV4Router = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const zod_1 = __webpack_require__("zod");
let OrderV4Router = OrderV4Router_1 = class OrderV4Router {
    constructor(trpc, orderV4, loggerFactory) {
        this.trpc = trpc;
        this.orderV4 = orderV4;
        this.router = this.trpc.router({
            query: this.trpc.userProtectedProcedure
                .input(zod_1.z.object({
                orderId: zod_1.z.number(),
            }))
                .query((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input }) {
                return this.orderV4.query(input.orderId);
            })),
            queryPay: this.trpc.userProtectedProcedure
                .input(zod_1.z.object({
                orderId: zod_1.z.number(),
            }))
                .mutation((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input, ctx }) {
                return this.orderV4.queryPay(ctx.user.tenantId, ctx.user.id, input.orderId, ctx);
            })),
            createNative: this.trpc.userProtectedProcedure.input(flowda_shared_types_1.createOrderSchema).mutation((_c) => tslib_1.__awaiter(this, [_c], void 0, function* ({ input, ctx }) {
                return this.orderV4.createNative(Object.assign({
                    tid: ctx.user.tenantId,
                    uid: ctx.user.id,
                }, input), ctx);
            })),
            createJSAPI: this.trpc.userProtectedProcedure.input(flowda_shared_types_1.createOrderSchema).mutation((_d) => tslib_1.__awaiter(this, [_d], void 0, function* ({ input, ctx }) {
                return this.orderV4.createJSAPI(Object.assign({
                    tid: ctx.user.tenantId,
                    uid: ctx.user.id,
                }, input));
            })),
            createQuick: this.trpc.tenantProtectedProcedure.input(flowda_shared_types_1.createQuickOrderSchema).mutation((_e) => tslib_1.__awaiter(this, [_e], void 0, function* ({ input, ctx }) {
                return this.orderV4.createQuick(Object.assign({
                    tid: ctx.tenant.id,
                }, input));
            })),
            queryPayQuick: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.object({
                orderId: zod_1.z.number(),
                anonymousCustomerToken: zod_1.z.string(),
            }))
                .mutation((_f) => tslib_1.__awaiter(this, [_f], void 0, function* ({ input, ctx }) {
                return this.orderV4.queryPayQuick(ctx.tenant.id, input.anonymousCustomerToken, input.orderId);
            })),
        });
        this.logger = loggerFactory(OrderV4Router_1.name);
    }
};
exports.OrderV4Router = OrderV4Router;
exports.OrderV4Router = OrderV4Router = OrderV4Router_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_services_1.OrderV4Service)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof flowda_services_1.OrderV4Service !== "undefined" && flowda_services_1.OrderV4Service) === "function" ? _b : Object, Function])
], OrderV4Router);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/product-v4.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductV4Router_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductV4Router = exports.productSelect = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const zod_1 = __webpack_require__("zod");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
exports.productSelect = db.Prisma.validator()({
    uid: true,
    createdAt: true,
    updatedAt: true,
    tenantId: true,
    name: true,
    price: true,
    productType: true,
    plan: true,
    amount: true,
    extendedDescriptionData: true,
    fileSize: true,
    storeDuration: true,
    hasAds: true,
    tecSupport: true,
    validityPeriod: true,
    restricted: true,
});
let ProductV4Router = ProductV4Router_1 = class ProductV4Router {
    constructor(trpc, productV4, prisma, loggerFactory) {
        this.trpc = trpc;
        this.productV4 = productV4;
        this.prisma = prisma;
        this.router = this.trpc.router({
            createManyProducts: this.trpc.tenantProtectedProcedure
                .input(zod_1.z.array(flowda_shared_types_1.productCreateManyItemSchema))
                .mutation((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input, ctx }) {
                return this.productV4.createManyProducts(ctx.tenant.id, input);
            })),
            findAll: this.trpc.tenantProtectedProcedure.input(zod_1.z.object({})).query((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input, ctx }) {
                const rets = yield this.prisma.product.findMany({
                    where: {
                        isDeleted: false,
                        tenantId: ctx.tenant.id,
                    },
                    select: exports.productSelect,
                });
                return rets;
            })),
        });
        this.logger = loggerFactory(ProductV4Router_1.name);
    }
};
exports.ProductV4Router = ProductV4Router;
exports.ProductV4Router = ProductV4Router = ProductV4Router_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_services_1.ProductV4Service)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof flowda_services_1.ProductV4Service !== "undefined" && flowda_services_1.ProductV4Service) === "function" ? _b : Object, typeof (_c = typeof db !== "undefined" && db.PrismaClient) === "function" ? _c : Object, Function])
], ProductV4Router);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.context.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ContextFactory_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextFactory = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let ContextFactory = ContextFactory_1 = class ContextFactory {
    constructor(userService, loggerFactory) {
        this.userService = userService;
        this.createContext = (opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = (0, flowda_shared_node_1.createContext)(opts);
            (0, flowda_shared_node_1.diag)(ctx, `[createContext]`);
            return ctx;
        });
        this.logger = loggerFactory(ContextFactory_1.name);
    }
};
exports.ContextFactory = ContextFactory;
exports.ContextFactory = ContextFactory = ContextFactory_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_services_1.UserService)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _a : Object, Function])
], ContextFactory);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TrpcRouter_1;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const trpcExpress = tslib_1.__importStar(__webpack_require__("@trpc/server/adapters/express"));
const schema_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/schema.router.ts");
const user_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/user.router.ts");
const trpc_context_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.context.ts");
const data_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/data.router.ts");
const customer_auth_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/customer-auth-v4.router.ts");
const product_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/product-v4.router.ts");
const order_v4_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/sdk-v4/order-v4.router.ts");
const menu_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/menu.router.ts");
const trpc_panel_1 = __webpack_require__("trpc-panel");
// import { createOpenApiExpressMiddleware } from 'trpc-openapi'
let TrpcRouter = TrpcRouter_1 = class TrpcRouter {
    constructor(trpc, schemaRouter, userRouter, dataRouter, menuRouter, customerAuthV4Router, productV4Router, orderV4Router, contextFactory, loggerFactory) {
        this.trpc = trpc;
        this.schemaRouter = schemaRouter;
        this.userRouter = userRouter;
        this.dataRouter = dataRouter;
        this.menuRouter = menuRouter;
        this.customerAuthV4Router = customerAuthV4Router;
        this.productV4Router = productV4Router;
        this.orderV4Router = orderV4Router;
        this.contextFactory = contextFactory;
        this.appRouter = this.trpc.router({
            schema: this.schemaRouter.schemaRouter,
            user: this.userRouter.userRouter,
            data: this.dataRouter.router,
            menu: this.menuRouter.router,
            customerAuthV4: this.customerAuthV4Router.router,
            productV4: this.productV4Router.router,
            orderV4: this.orderV4Router.router,
        });
        this.logger = loggerFactory(TrpcRouter_1.name);
    }
    applyMiddleware(app, globalPrefix, port) {
        this.logger.log(`applyMiddleware ${globalPrefix}/trpc`);
        // app.use(`/${globalPrefix}/trpc-api`, createOpenApiExpressMiddleware({ router: this.appRouter }))
        app.use(`/${globalPrefix}/trpc`, trpcExpress.createExpressMiddleware({
            router: this.appRouter,
            createContext: this.contextFactory.createContext,
        }));
        app.use(`/${globalPrefix}/panel`, (req, res) => {
            return res.send((0, trpc_panel_1.renderTrpcPanel)(this.appRouter, { url: `http://localhost:${port}/${globalPrefix}/trpc` }));
        });
    }
};
exports.TrpcRouter = TrpcRouter;
exports.TrpcRouter = TrpcRouter = TrpcRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(schema_router_1.SchemaRouter)),
    tslib_1.__param(2, (0, inversify_1.inject)(user_router_1.UserRouter)),
    tslib_1.__param(3, (0, inversify_1.inject)(data_router_1.DataRouter)),
    tslib_1.__param(4, (0, inversify_1.inject)(menu_router_1.MenuRouter)),
    tslib_1.__param(5, (0, inversify_1.inject)(customer_auth_v4_router_1.CustomerAuthV4Router)),
    tslib_1.__param(6, (0, inversify_1.inject)(product_v4_router_1.ProductV4Router)),
    tslib_1.__param(7, (0, inversify_1.inject)(order_v4_router_1.OrderV4Router)),
    tslib_1.__param(8, (0, inversify_1.inject)(trpc_context_1.ContextFactory)),
    tslib_1.__param(9, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof schema_router_1.SchemaRouter !== "undefined" && schema_router_1.SchemaRouter) === "function" ? _b : Object, typeof (_c = typeof user_router_1.UserRouter !== "undefined" && user_router_1.UserRouter) === "function" ? _c : Object, typeof (_d = typeof data_router_1.DataRouter !== "undefined" && data_router_1.DataRouter) === "function" ? _d : Object, typeof (_e = typeof menu_router_1.MenuRouter !== "undefined" && menu_router_1.MenuRouter) === "function" ? _e : Object, typeof (_f = typeof customer_auth_v4_router_1.CustomerAuthV4Router !== "undefined" && customer_auth_v4_router_1.CustomerAuthV4Router) === "function" ? _f : Object, typeof (_g = typeof product_v4_router_1.ProductV4Router !== "undefined" && product_v4_router_1.ProductV4Router) === "function" ? _g : Object, typeof (_h = typeof order_v4_router_1.OrderV4Router !== "undefined" && order_v4_router_1.OrderV4Router) === "function" ? _h : Object, typeof (_j = typeof trpc_context_1.ContextFactory !== "undefined" && trpc_context_1.ContextFactory) === "function" ? _j : Object, Function])
], TrpcRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TrpcService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processAt = exports.TrpcService = void 0;
const tslib_1 = __webpack_require__("tslib");
const server_1 = __webpack_require__("@trpc/server");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
// import { OpenApiMeta } from 'trpc-openapi'
let TrpcService = TrpcService_1 = class TrpcService {
    constructor(userService, prisma, loggerFactory) {
        this.userService = userService;
        this.prisma = prisma;
        this.trpc = server_1.initTRPC
            .context()
            // .meta<OpenApiMeta>()
            .create({
            transformer: flowda_shared_node_1.transformer,
            errorFormatter: opts => (0, flowda_shared_node_1.errorFormatter)(opts, {
                log: (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.prisma.requestErrorLog.create({
                            data: {
                                requestId: input.requestId,
                                tenantId: input.tenantId,
                                userId: input.userId,
                                log: input.log,
                            },
                        });
                    }
                    catch (e) {
                        console.warn(`requestErrorLog.create error`, e.message);
                    }
                }),
            }),
        });
        this.procedure = this.trpc.procedure;
        this.tenantProtectedProcedure = this.trpc.procedure.use((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = opts.ctx;
            (0, flowda_shared_node_1.diag)(ctx, `[tenantProtectedProcedure]`);
            const tenantAt = processAt(ctx.req.headers['tenant-authorization']);
            let tenant;
            if (tenantAt) {
                const { tid } = this.userService.verifyTenantAccessToken(tenantAt);
                const tenantRet = yield this.userService.getTenantInfo(tid, ctx);
                tenant = flowda_shared_types_1.ctxTenantSchema.parse(tenantRet);
            }
            if (!tenant) {
                throw new server_1.TRPCError({ code: 'UNAUTHORIZED' });
            }
            ctx.tenant = tenant;
            return opts.next({ ctx });
        }));
        this.userProtectedProcedure = this.trpc.procedure.use((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = opts.ctx;
            (0, flowda_shared_node_1.diag)(ctx, `[userProtectedProcedure]`);
            let user;
            const at = processAt(ctx.req.headers['authorization']);
            if (at) {
                const { uid } = this.userService.verifyAccessToken(at);
                const userRet = yield this.userService.getUserInfo(uid, ctx);
                user = flowda_shared_types_1.ctxUserSchema.parse(userRet);
            }
            if (!user) {
                throw new server_1.TRPCError({ code: 'UNAUTHORIZED' });
            }
            ctx.user = user;
            return opts.next({ ctx });
        }));
        this.router = this.trpc.router;
        this.mergeRouters = this.trpc.mergeRouters;
        this.logger = loggerFactory(TrpcService_1.name);
    }
};
exports.TrpcService = TrpcService;
exports.TrpcService = TrpcService = TrpcService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_services_1.UserService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _a : Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], TrpcService);
function processAt(input) {
    if (typeof input !== 'string')
        return undefined;
    if (input.split(' ')[1] == null)
        return undefined;
    let ret = input.split(' ')[1];
    if (ret.trim() === '')
        return undefined;
    ret = ret.trim();
    if (ret === 'undefined' || ret === 'null')
        return undefined;
    return ret;
}
exports.processAt = processAt;


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/user.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserRouter_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let UserRouter = UserRouter_1 = class UserRouter {
    constructor(trpc, userService, prisma, loggerFactory) {
        this.trpc = trpc;
        this.userService = userService;
        this.prisma = prisma;
        this.userRouter = this.trpc.router({
            getTenant: this.trpc.procedure.input(zod_1.z.object({ tid: zod_1.z.number() })).query((_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ input }) {
                return this.userService.getTenantInfo(input.tid);
            })),
            sendSmsVerifyCode: this.trpc.procedure.input(flowda_shared_types_1.sendSmsVerifyCodeSchema).mutation((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.sendSmsVerifyCode(opts.input, opts.ctx);
            })),
            verifyMobile: this.trpc.procedure.input(flowda_shared_types_1.verifyMobileSchema).mutation((_b) => tslib_1.__awaiter(this, [_b], void 0, function* ({ input, ctx }) {
                return this.userService.verifyMobile(input, ctx);
            })),
            accountExists: this.trpc.procedure.input(flowda_shared_types_1.accountExistsSchema).query((_c) => tslib_1.__awaiter(this, [_c], void 0, function* ({ input }) {
                return this.userService.accountExists(input);
            })),
            findByUnionIdAndTenantId: this.trpc.procedure.input(flowda_shared_types_1.findByUnionIdAndTenantIdSchema).query((_d) => tslib_1.__awaiter(this, [_d], void 0, function* ({ input }) {
                return this.userService.findByUnionIdAndTenantId(input);
            })),
            findByNameAndTenantId: this.trpc.procedure
                .input(zod_1.z.object({
                username: zod_1.z.string(),
                tid: zod_1.z.number(),
            }))
                .query((_e) => tslib_1.__awaiter(this, [_e], void 0, function* ({ input }) {
                const ret = yield this.prisma.user.findFirst({
                    where: {
                        username: input.username,
                        tenantId: input.tid,
                    },
                });
                return ret;
            })),
            findOrThrowByNameAndTenantId: this.trpc.procedure
                .input(zod_1.z.object({
                username: zod_1.z.string(),
                tid: zod_1.z.number(),
            }))
                .query((_f) => tslib_1.__awaiter(this, [_f], void 0, function* ({ input }) {
                const ret = yield this.prisma.user.findFirstOrThrow({
                    where: {
                        username: input.username,
                        tenantId: input.tid,
                    },
                });
                return ret;
            })),
            registerByUnionId: this.trpc.procedure.input(flowda_shared_types_1.registerByUnionIdSchema).mutation(opts => {
                return this.userService.registerByUnionId(opts.input, opts.ctx);
            }),
            getTenantByName: this.trpc.procedure.input(flowda_shared_types_1.getTenantByNameSchema).query((_g) => tslib_1.__awaiter(this, [_g], void 0, function* ({ input }) {
                return this.userService.getTenantByName(input);
            })),
            validateTenant: this.trpc.procedure.input(flowda_shared_types_1.validateTenantSchema).mutation((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.validateTenant(opts.input, opts.ctx);
            })),
            refreshTenantToken: this.trpc.procedure
                .input(zod_1.z.object({
                rt: zod_1.z.string(),
            }))
                .mutation((_h) => tslib_1.__awaiter(this, [_h], void 0, function* ({ input, ctx }) {
                return this.userService.refreshTenantToken(input.rt, ctx);
            })),
            validate: this.trpc.procedure.input(flowda_shared_types_1.validateSchema).mutation((_j) => tslib_1.__awaiter(this, [_j], void 0, function* ({ input }) {
                return this.userService.validate(input);
            })),
            validateByEmail: this.trpc.procedure.input(flowda_shared_types_1.validateByEmailSchema).query((_k) => tslib_1.__awaiter(this, [_k], void 0, function* ({ input, ctx }) {
                return this.userService.validateByEmail(input, ctx);
            })),
            findMany: this.trpc.procedure
                .input(zod_1.z.object({
                userIds: zod_1.z.array(zod_1.z.number()),
            }))
                .query((_l) => tslib_1.__awaiter(this, [_l], void 0, function* ({ input }) {
                return this.prisma.user.findMany({
                    where: {
                        id: {
                            in: input.userIds,
                        },
                    },
                    select: flowda_services_1.userSelect,
                });
            })),
            updateUserInfo: this.trpc.procedure
                .input(zod_1.z.object({
                userId: zod_1.z.number(),
                email: zod_1.z.string().optional(),
                username: zod_1.z.string().optional(),
                image: zod_1.z.string().optional(),
            }))
                .mutation((_m) => tslib_1.__awaiter(this, [_m], void 0, function* ({ input }) {
                const { username, email, image } = input;
                return this.prisma.user.update({
                    where: {
                        id: input.userId,
                    },
                    data: Object.assign(Object.assign(Object.assign({}, (username && { username })), (email && { email })), (image && { image })),
                });
            })),
            findUnique: this.trpc.procedure
                .input(zod_1.z.object({
                email: zod_1.z.string().optional(),
                id: zod_1.z.number().optional(),
            }))
                .query((_o) => tslib_1.__awaiter(this, [_o], void 0, function* ({ input }) {
                const userRet = yield this.prisma.user.findUniqueOrThrow({
                    where: input,
                    select: flowda_services_1.userSelect,
                });
                return _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']);
            })),
            verifyAccessToken: this.trpc.procedure
                .input(zod_1.z.object({
                jwt: zod_1.z.string(),
            }))
                .query((_p) => tslib_1.__awaiter(this, [_p], void 0, function* ({ input, ctx }) {
                (0, flowda_shared_node_1.diag)(ctx, ['verifyAccessToken']);
                return this.userService.verifyAccessToken(input.jwt);
            })),
            createTenant: this.trpc.procedure.input(flowda_shared_types_1.appCreateV4Schema).mutation((_q) => tslib_1.__awaiter(this, [_q], void 0, function* ({ input, ctx }) {
                return this.userService.createTenant(input, ctx);
            })),
            preSignup: this.trpc.procedure
                .input(flowda_shared_types_1.customerPreSignupSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_r) => tslib_1.__awaiter(this, [_r], void 0, function* ({ input, ctx }) {
                return this.userService.preSignup(input, ctx);
            })),
            verifyAndSignup: this.trpc.procedure
                .input(flowda_shared_types_1.customerSignupSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_s) => tslib_1.__awaiter(this, [_s], void 0, function* ({ input, ctx }) {
                return this.userService.verifyAndSignup(input, ctx);
            })),
            wxValidateUser: this.trpc.procedure
                .input(flowda_shared_types_1.wxValidateUserSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_t) => tslib_1.__awaiter(this, [_t], void 0, function* ({ input, ctx }) {
                return this.userService.wxValidateUser(input, ctx);
            })),
            refreshToken: this.trpc.procedure.input(flowda_shared_types_1.refreshTokenSchema).mutation((_u) => tslib_1.__awaiter(this, [_u], void 0, function* ({ input, ctx }) {
                return this.userService.refreshToken(input, ctx);
            })),
            logout: this.trpc.procedure.input(flowda_shared_types_1.userJwtPayloadSchema).mutation((_v) => tslib_1.__awaiter(this, [_v], void 0, function* ({ input }) {
                return this.prisma.user.update({
                    where: {
                        id: input.uid,
                    },
                    data: {
                        hashedRefreshToken: null,
                    },
                });
            })),
            generateRecoveryCode: this.trpc.procedure
                .input(flowda_shared_types_1.generateRecoveryCodeSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_w) => tslib_1.__awaiter(this, [_w], void 0, function* ({ input, ctx }) {
                return this.userService.generateRecoveryCode(input, ctx);
            })),
            resetPasswordWithRecoveryCode: this.trpc.procedure
                .input(flowda_shared_types_1.resetPasswordWithRecoveryCodeSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_x) => tslib_1.__awaiter(this, [_x], void 0, function* ({ input, ctx }) {
                return this.userService.resetPasswordWithRecoveryCode(input, ctx);
            })),
            updatePaidProfile: this.trpc.procedure
                .input(flowda_shared_types_1.updatePaidProfileSchema.merge(flowda_shared_types_1.userJwtPayloadSchema))
                .mutation((_y) => tslib_1.__awaiter(this, [_y], void 0, function* ({ input }) {
                return this.prisma.user.update({
                    where: {
                        id: input.uid,
                    },
                    select: flowda_services_1.userSelect,
                    data: {
                        orderProfile: {
                            upsert: {
                                update: {
                                    productType: input.product.productType,
                                    plan: input.product.plan,
                                    amount: {
                                        increment: input.product.amount || 0,
                                    },
                                },
                                create: {
                                    tenantId: input.tid,
                                    productType: input.product.productType,
                                    plan: input.product.plan,
                                    amount: input.product.amount,
                                    expireAt: input.product.validityPeriod != null
                                        ? (0, dayjs_1.default)().add(input.product.validityPeriod, 'day').toDate()
                                        : null,
                                },
                            },
                        },
                    },
                });
            })),
            updateFreeProfile: this.trpc.procedure
                .input(flowda_shared_types_1.updateFreeProfileSchema.merge(flowda_shared_types_1.userJwtPayloadSchema))
                .mutation((_z) => tslib_1.__awaiter(this, [_z], void 0, function* ({ input }) {
                // 订阅免费计划，不应该将已有计划清空（如果有的话）
                const orderProfileRet = yield this.prisma.orderProfile.findUnique({
                    where: {
                        userId: input.uid,
                    },
                });
                if (orderProfileRet && orderProfileRet.plan === flowda_shared_types_1.EPlan.VIP) {
                    throw new common_1.ConflictException(`User has a paid plan`, {
                        description: `profileId:${orderProfileRet.id}`,
                    });
                }
                return this.prisma.user.update({
                    where: {
                        id: input.uid,
                    },
                    select: flowda_services_1.userSelect,
                    data: {
                        orderProfile: {
                            upsert: {
                                update: {
                                    productType: input.product.productType,
                                    plan: input.product.plan,
                                    amount: {
                                        increment: input.product.amount || 0,
                                    },
                                },
                                create: {
                                    tenantId: input.tid,
                                    productType: input.product.productType,
                                    plan: input.product.plan,
                                    amount: input.product.amount,
                                    expireAt: input.product.validityPeriod != null
                                        ? (0, dayjs_1.default)().add(input.product.validityPeriod, 'day').toDate()
                                        : null,
                                },
                            },
                        },
                    },
                });
            })),
            fwhLogin: this.trpc.procedure.input(flowda_shared_types_1.fwhLoginSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema)).mutation((_0) => tslib_1.__awaiter(this, [_0], void 0, function* ({ input }) {
                return this.userService.fwhLogin(input);
            })),
            amountUpdate: this.trpc.procedure
                .input(flowda_shared_types_1.amountUpdateSchema.merge(flowda_shared_types_1.userJwtPayloadSchema))
                .mutation((_1) => tslib_1.__awaiter(this, [_1], void 0, function* ({ input }) {
                return this.userService.amountUpdate(input);
            })),
            createQuick: this.trpc.procedure
                .input(flowda_shared_types_1.createQuickOrderSchema.merge(flowda_shared_types_1.tenantJwtPayloadSchema))
                .mutation((_2) => tslib_1.__awaiter(this, [_2], void 0, function* ({ input }) {
                return this.userService.createQuick(input);
            })),
            updateAnonymousToPayOpenId: this.trpc.procedure
                .input(zod_1.z.object({
                tid: zod_1.z.number(),
                id: zod_1.z.number(),
                openid: zod_1.z.string(),
            }))
                .mutation((_3) => tslib_1.__awaiter(this, [_3], void 0, function* ({ input }) {
                return this.prisma.user.update({
                    select: flowda_services_1.userSelect,
                    where: {
                        id: input.id,
                    },
                    data: {
                        username: input.openid,
                        weixinProfile: {
                            connectOrCreate: {
                                where: {
                                    loginOpenid: input.openid,
                                },
                                create: {
                                    unionOrOpenid: input.openid,
                                    loginOpenid: input.openid,
                                },
                            },
                        },
                    },
                });
            })),
            _resetTenantPassword: this.trpc.procedure.input(flowda_shared_types_1._resetTenantPasswordSchema).mutation((_4) => tslib_1.__awaiter(this, [_4], void 0, function* ({ input }) {
                return this.userService._resetTenantPassword(input);
            })),
        });
        this.logger = loggerFactory(UserRouter_1.name);
    }
};
exports.UserRouter = UserRouter;
exports.UserRouter = UserRouter = UserRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_services_1.UserService)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof flowda_services_1.UserService !== "undefined" && flowda_services_1.UserService) === "function" ? _b : Object, typeof (_c = typeof db !== "undefined" && db.PrismaClient) === "function" ? _c : Object, Function])
], UserRouter);


/***/ }),

/***/ "../../libs/flowda-services/src/axios.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.axiosApiInstance = void 0;
const tslib_1 = __webpack_require__("tslib");
const axios_1 = tslib_1.__importDefault(__webpack_require__("axios"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
exports.axiosApiInstance = axios_1.default.create();
exports.axiosApiInstance.interceptors.request.use((config) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log(...[
        ...(0, flowda_shared_1.debug)(`http-client`),
        config.method,
        config.url,
        config.data != null ? 'body' : '',
        config.data != null ? config.data : '',
    ]);
    return config;
}), error => {
    Promise.reject(error);
});


/***/ }),

/***/ "../../libs/flowda-services/src/flowdaServiceModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaServiceModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const prisma_flowda_1 = __webpack_require__("../../libs/prisma-flowda/src/index.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../libs/flowda-services/src/lib/schema.ts"));
const task_service_1 = __webpack_require__("../../libs/flowda-services/src/services/task.service.ts");
const user_service_1 = __webpack_require__("../../libs/flowda-services/src/services/user.service.ts");
const axios_1 = __webpack_require__("../../libs/flowda-services/src/axios.ts");
const dynamic_table_def_service_1 = __webpack_require__("../../libs/flowda-services/src/services/dynamic-table-def.service.ts");
const dynamic_table_data_service_1 = __webpack_require__("../../libs/flowda-services/src/services/dynamic-table-data.service.ts");
const menu_service_1 = __webpack_require__("../../libs/flowda-services/src/services/menu.service.ts");
const wechat_oauth_1 = tslib_1.__importDefault(__webpack_require__("wechat-oauth"));
const flowda_env_1 = __webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts");
const weixin_login_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-login.service.ts");
const weixin_fuwuhao_login_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-fuwuhao-login.service.ts");
const wechatpay_node_v3_1 = tslib_1.__importDefault(__webpack_require__("wechatpay-node-v3"));
const orderV4_service_1 = __webpack_require__("../../libs/flowda-services/src/services/sdk/orderV4.service.ts");
const productV4_service_1 = __webpack_require__("../../libs/flowda-services/src/services/sdk/productV4.service.ts");
const weixin_pay_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-pay.service.ts");
exports.flowdaServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_types_1.PrismaZodSchemaSymbol).toConstantValue(prisma_flowda_1.zt);
    bind(flowda_shared_types_1.CustomZodSchemaSymbol).toConstantValue(schema);
    bind(flowda_shared_types_1.APISymbol).toConstantValue(axios_1.axiosApiInstance);
    bind(flowda_shared_types_1.WechatOAuthSymbol).toConstantValue(new wechat_oauth_1.default(flowda_env_1.FLOWDA_ENV.freecharger_pc_appid, flowda_env_1.FLOWDA_ENV.freecharger_pc_appSecret));
    bind(flowda_shared_types_1.WechatpayNodeV3Symbol).toConstantValue(new wechatpay_node_v3_1.default({
        appid: flowda_env_1.FLOWDA_ENV.appid,
        mchid: flowda_env_1.FLOWDA_ENV.mchid,
        publicKey: Buffer.from(flowda_env_1.FLOWDA_ENV['apiclient_cert.pem'], 'utf-8'),
        privateKey: Buffer.from(flowda_env_1.FLOWDA_ENV['apiclient_key.pem'], 'utf-8'),
    }));
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, task_service_1.TaskService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.DynamicTableDefServiceSymbol, dynamic_table_def_service_1.DynamicTableDefService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.DynamicTableDataServiceSymbol, dynamic_table_data_service_1.DynamicTableDataService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.MenuServiceSymbol, menu_service_1.MenuService);
    bind(weixin_login_service_1.WeixinLoginService).toSelf().inSingletonScope();
    bind(weixin_fuwuhao_login_service_1.WeixinFuwuhaoLoginService).toSelf().inSingletonScope();
    bind(weixin_pay_service_1.WeixinPayService).toSelf().inSingletonScope();
    bind(orderV4_service_1.OrderV4Service).toSelf().inSingletonScope();
    bind(productV4_service_1.ProductV4Service).toSelf().inSingletonScope();
});


/***/ }),

/***/ "../../libs/flowda-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/flowdaServiceModule.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/lib/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/task.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/user.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/dynamic-table-def.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/dynamic-table-data.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/menu.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/weixin-login.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/weixin-fuwuhao-login.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/weixin-pay.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/sdk/orderV4.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/sdk/productV4.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-services/src/lib/flowda-env.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FLOWDA_ENV = void 0;
const znv_1 = __webpack_require__("znv");
const zod_1 = __webpack_require__("zod");
exports.FLOWDA_ENV = (0, znv_1.parseEnv)(process.env, {
    TEST_ENV: zod_1.z.string().optional(),
    DATABASE_URL: zod_1.z.string().min(1),
    // 租户
    TENANT_REFRESH_TOKEN_SECRET: zod_1.z.string().min(1),
    TENANT_REFRESH_TOKEN_EXPIRE: zod_1.z.number().default(7 * 24 * 60 * 60), // 1 week
    TENANT_ACCESS_TOKEN_SECRET: zod_1.z.string().min(1),
    TENANT_ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(24 * 60 * 60),
    // 用户
    REFRESH_TOKEN_SECRET: zod_1.z.string().min(1),
    REFRESH_TOKEN_EXPIRE: zod_1.z.number().default(7 * 24 * 60 * 60), // 1 week
    ACCESS_TOKEN_SECRET: zod_1.z.string().min(1),
    ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(24 * 60 * 60),
    C7_REST_URL: zod_1.z.string().min(1),
    // 短信
    SMS_SECRET_ID: zod_1.z.string().min(1),
    SMS_SECRET_KEY: zod_1.z.string().min(1),
    // 微信
    freecharger_pc_appid: zod_1.z.string().min(1),
    freecharger_pc_appSecret: zod_1.z.string().min(1),
    // 微信服务号
    freecharger_fuwuhao_appid: zod_1.z.string().min(1),
    freecharger_fuwuhao_secret: zod_1.z.string().min(1),
    // 微信支付
    appid: zod_1.z.string().min(1),
    mchid: zod_1.z.string().min(1),
    'apiclient_cert.pem': zod_1.z.string().min(1),
    'apiclient_key.pem': zod_1.z.string().min(1),
});


/***/ }),

/***/ "../../libs/flowda-services/src/lib/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentSmsResourceSchema = exports.PayResourceSchema = exports.OrderResourceSchema = exports.ProductSnapshotResourceSchema = exports.ProductResourceSchema = exports.RequestErrorLogResourceSchema = exports.WeixinProfileResourceSchema = exports.UserProfileResourceSchema = exports.OrderProfileResourceSchema = exports.UserPreSignupResourceSchema = exports.DynamicTableDataResourceSchema = exports.DynamicTableDefColumnResourceSchema = exports.DynamicTableDefResourceSchema = exports.TaskFormRelationResourceSchema = exports.MenuResourceSchema = exports.TenantResourceSchema = exports.UserResourceSchema = void 0;
const prisma_flowda_1 = __webpack_require__("../../libs/prisma-flowda/src/index.ts");
const zod_1 = __webpack_require__("zod");
const schema_1 = __webpack_require__("@flowda/schema");
(0, schema_1.extendZod)(zod_1.z);
exports.UserResourceSchema = prisma_flowda_1.UserWithRelationsSchema.omit({
    hashedPassword: true,
    hashedRefreshToken: true,
}).extend({
    // todo: 暂时先 optional, 否则 编辑 不填 password 无法通过
    // 这个 extend password 是为了配合 createRequestUrl
    password: zod_1.z
        .string()
        .optional()
        .column({
        column_type: 'String',
        display_name: '密码',
        'x-legacy': {
            prisma: false,
        },
    }),
});
exports.TenantResourceSchema = prisma_flowda_1.TenantWithRelationsSchema;
exports.MenuResourceSchema = prisma_flowda_1.MenuWithRelationsSchema;
exports.TaskFormRelationResourceSchema = prisma_flowda_1.TaskFormRelationSchema;
/*

export const TaskResourceSchema = z
  .object({
    id: z.string().cuid().openapi({ key_type: 'column', display_name: '任务 Id' }),
    name: z.string().openapi({ key_type: 'column', display_name: '任务标题' }),
    assignee: z.string().openapi({ key_type: 'column', display_name: '处理人' }),
    created: z.date().openapi({ key_type: 'column', display_name: '创建时间' }),
    processDefinitionId: z.string().openapi({ key_type: 'column', display_name: '流程定义' }),
    processInstanceId: z.string().openapi({ key_type: 'column', display_name: '流程实例' }),
    taskDefinitionKey: z.string().openapi({ key_type: 'column', display_name: '任务定义' }),
    variables: z.string().openapi({ key_type: 'column', display_name: '变量' }),
  })
  .openapi({
    key_type: 'resource',
    primary_key: 'id',
    display_name: '任务',
    display_column: 'name',
    display_primary_key: 'false',
    slug: 'tasks',
  })
  .openapi({
    'x-legacy': {
      route_prefix: '/workflows/manage',
      prisma: false,
    },
  })

export const ProcessDefinitionResourceSchema = z
  .object({
    id: z.string(),
    key: z.string(),
    name: z.string(),
    version: z.number(),
    resource: z.string(),
    deploymentId: z.string().cuid(),
    suspended: z.boolean(),
    historyTimeToLive: z.number(),
    startableInTasklist: z.boolean(),
  })
  .openapi({
    key_type: 'resource',
    primary_key: 'id',
    display_name: '已部署流程图',
    display_column: 'name',
    slug: 'process_definitions',
  })
  .openapi({
    'x-legacy': {
      route_prefix: '/workflows/manage',
      prisma: false,
    },
  })

export const WorkflowUserResourceSchema = z
  .object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
  })
  .openapi({
    key_type: 'resource',
    slug: 'workflow_users',
    primary_key: 'id',
    display_name: '用户',
    display_column: 'id',
  })
  .openapi({
    'x-legacy': {
      route_prefix: '/workflows/manage',
      prisma: false,
    },
  })
*/
exports.DynamicTableDefResourceSchema = prisma_flowda_1.DynamicTableDefWithRelationsSchema;
exports.DynamicTableDefColumnResourceSchema = prisma_flowda_1.DynamicTableDefColumnWithRelationsSchema;
exports.DynamicTableDataResourceSchema = prisma_flowda_1.DynamicTableDataWithRelationsSchema;
exports.UserPreSignupResourceSchema = prisma_flowda_1.UserPreSignupWithRelationsSchema;
exports.OrderProfileResourceSchema = prisma_flowda_1.OrderProfileWithRelationsSchema;
exports.UserProfileResourceSchema = prisma_flowda_1.UserProfileWithRelationsSchema;
exports.WeixinProfileResourceSchema = prisma_flowda_1.WeixinProfileWithRelationsSchema;
exports.RequestErrorLogResourceSchema = prisma_flowda_1.RequestErrorLogSchema;
exports.ProductResourceSchema = prisma_flowda_1.ProductWithRelationsSchema;
exports.ProductSnapshotResourceSchema = prisma_flowda_1.ProductSnapshotWithRelationsSchema;
exports.OrderResourceSchema = prisma_flowda_1.OrderWithRelationsSchema;
exports.PayResourceSchema = prisma_flowda_1.PayWithRelationsSchema;
exports.SentSmsResourceSchema = prisma_flowda_1.SentSmsSchema;


/***/ }),

/***/ "../../libs/flowda-services/src/services/dynamic-table-data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DynamicTableDataService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let DynamicTableDataService = DynamicTableDataService_1 = class DynamicTableDataService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(DynamicTableDataService_1.name);
    }
    get(reqUser, path, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`get: ${path}, query: ${JSON.stringify(query, null, 2)}, reqUser: ${JSON.stringify(reqUser, null, 2)}`);
            const parsedPath = (0, flowda_shared_1.matchPath)(path);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            if (id == null) {
                const where = {
                    isDeleted: false,
                    tenantId: reqUser.tid,
                    dynamicTableDef: {
                        name: resource,
                        tenantId: reqUser.tid,
                        isDeleted: false,
                    },
                };
                const dbRet = yield this.prisma.$transaction([
                    this.prisma.dynamicTableData.findMany({
                        where,
                    }),
                    this.prisma.dynamicTableData.count({
                        where: where,
                    }),
                ]);
                const [data, count] = dbRet;
                const ret = data.map(item => {
                    return Object.assign({
                        id: item.id,
                    }, item.data);
                });
                return {
                    pagination: {
                        total: count,
                    },
                    data: ret,
                };
            }
            else {
                const dbRet = yield this.prisma.dynamicTableData.findUniqueOrThrow({
                    where: {
                        id: id,
                    },
                });
                return Object.assign({
                    id: dbRet.id,
                }, dbRet.data);
            }
        });
    }
    put(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`put: ${path}, values: ${JSON.stringify(values, null, 2)}, reqUser: ${JSON.stringify(reqUser, null, 2)}`);
            const parsedPath = (0, flowda_shared_1.matchPath)(path);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { id } = parsedPath[parsedPath.length - 1];
            const prevRet = yield this.prisma.dynamicTableData.findUniqueOrThrow({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    tenantId: true,
                    data: true,
                },
            });
            const data2 = Object.assign(prevRet.data, values);
            const ret = yield this.prisma.dynamicTableData.update({
                where: {
                    id: id,
                },
                data: {
                    data: data2,
                },
            });
            return Object.assign({
                id: ret.id,
            }, ret.data);
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`post: ${path}, values: ${JSON.stringify(values, null, 2)}, reqUser: ${JSON.stringify(reqUser, null, 2)}`);
            const parsedPath = (0, flowda_shared_1.matchPath)(path);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            const def = yield this.prisma.dynamicTableDef.findFirst({
                where: {
                    name: resource,
                    tenantId: reqUser.tid,
                },
            });
            if (def == null) {
                throw new Error(`cannot find table def of path: ${path}`);
            }
            const ret = yield this.prisma.dynamicTableData.create({
                data: {
                    dynamicTableDefId: def.id,
                    data: values,
                },
            });
            return Object.assign({
                id: ret.id,
            }, ret.data);
        });
    }
    remove(reqUser, path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`remove: ${path}, reqUser: ${JSON.stringify(reqUser, null, 2)}`);
            const parsedPath = (0, flowda_shared_1.matchPath)(path);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { id } = parsedPath[parsedPath.length - 1];
            const ret = yield this.prisma.dynamicTableData.update({
                where: {
                    id: id,
                },
                data: {
                    isDeleted: true,
                },
            });
            return ret;
        });
    }
};
exports.DynamicTableDataService = DynamicTableDataService;
exports.DynamicTableDataService = DynamicTableDataService = DynamicTableDataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], DynamicTableDataService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/dynamic-table-def.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DynamicTableDefService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDefService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let DynamicTableDefService = DynamicTableDefService_1 = class DynamicTableDefService {
    constructor(prisma, transformer, loggerFactory) {
        this.prisma = prisma;
        this.transformer = transformer;
        this.logger = loggerFactory(DynamicTableDefService_1.name);
    }
    getRaw() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.dynamicTableDef.findMany({
                where: {
                    isDeleted: false,
                },
                select: {
                    name: true,
                    extendedSchema: true,
                    dynamicTableDefColumns: {
                        where: {
                            isDeleted: false,
                        },
                        select: {
                            name: true,
                            type: true,
                            extendedSchema: true,
                        },
                    },
                },
            });
        });
    }
    getSchema() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbRet = yield this.prisma.dynamicTableDef.findMany({
                where: {
                    isDeleted: false,
                },
                select: {
                    name: true,
                    extendedSchema: true,
                    dynamicTableDefColumns: {
                        where: {
                            isDeleted: false,
                        },
                        select: {
                            name: true,
                            type: true,
                            extendedSchema: true,
                        },
                    },
                },
            });
            const schema = dbRet.reduce((acc, cur) => {
                const s = this.transformer.transform(cur);
                acc[s.schema_name] = s;
                return acc;
            }, {});
            return schema;
        });
    }
};
exports.DynamicTableDefService = DynamicTableDefService;
exports.DynamicTableDefService = DynamicTableDefService = DynamicTableDefService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.DynamicTableSchemaTransformerSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof flowda_shared_1.DynamicTableSchemaTransformer !== "undefined" && flowda_shared_1.DynamicTableSchemaTransformer) === "function" ? _b : Object, Function])
], DynamicTableDefService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/menu.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MenuService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const tenantMenu = [
    {
        id: 'tenant_admin',
        name: '租户管理',
        slug: 'tenant_admin',
        children: [
            {
                name: '租户和用户',
                slug: 'tenant',
                key: 'tenant',
                children: [
                    { id: 'tenants', name: '租户列表', slug: 'tenants' },
                    { id: 'menus', name: '菜单', slug: 'menus' },
                ],
            },
        ],
    },
];
let MenuService = MenuService_1 = class MenuService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(MenuService_1.name);
    }
    get(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenantRet = yield this.prisma.tenant.findUnique({
                where: {
                    id: dto.tenantId,
                },
            });
            if (tenantRet == null) {
                throw new Error('No tenant');
            }
            if (tenantRet.name === 'superadmin') {
                const menuRets = yield this.prisma.menu.findMany({
                    where: {
                        isDeleted: false,
                    },
                    select: {
                        treeData: true,
                    },
                });
                const menuRet = menuRets.reduce((acc, cur) => {
                    acc = acc.concat(cur.treeData);
                    return acc;
                }, []);
                if (menuRet.length > 0) {
                    return flowda_shared_types_1.menuItemSchema.array().parse(menuRet);
                }
                else {
                    return flowda_shared_types_1.menuItemSchema.array().parse(tenantMenu); // 默认的菜单
                }
            }
            else {
                const menuRet = yield this.prisma.menu.findUnique({
                    where: {
                        tenantId: dto.tenantId,
                    },
                });
                return flowda_shared_types_1.menuItemSchema.array().parse((menuRet === null || menuRet === void 0 ? void 0 : menuRet.treeData) || []);
            }
        });
    }
    getTenantMenu(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenantRet = yield this.prisma.tenant.findUnique({
                where: {
                    id: dto.tenantId,
                },
            });
            if (tenantRet == null) {
                throw new Error('No tenant');
            }
            const menuRet = yield this.prisma.menu.findUnique({
                where: {
                    tenantId: dto.tenantId,
                },
            });
            return flowda_shared_types_1.menuItemSchema.array().parse((menuRet === null || menuRet === void 0 ? void 0 : menuRet.treeData) || []);
        });
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = MenuService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], MenuService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/sdk/orderV4.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrderV4Service_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderV4Service = exports.orderSelect = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const weixin_pay_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-pay.service.ts");
const user_service_1 = __webpack_require__("../../libs/flowda-services/src/services/user.service.ts");
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
exports.orderSelect = db.Prisma.validator()({
    id: true,
    uid: true,
    serial: true,
    status: true,
    userId: true,
    tenantId: true,
    user: {
        select: _.omit(user_service_1.userSelect, ['hashedPassword', 'hashedRefreshToken']),
    },
    productSnapshots: {
        select: {
            id: true,
            snapshotPrice: true,
            productId: true,
        },
    },
});
let OrderV4Service = OrderV4Service_1 = class OrderV4Service {
    constructor(wxPayService, user, prisma, loggerFactory) {
        this.wxPayService = wxPayService;
        this.user = user;
        this.prisma = prisma;
        this.logger = loggerFactory(OrderV4Service_1.name);
    }
    query(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.order.findMany({
                where: { id: orderId },
                select: exports.orderSelect,
            });
            return ret;
        });
    }
    queryPay(tid, userId, orderId, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`querying order, uid:${userId}, orderId:${orderId}`);
            (0, flowda_shared_node_1.diag)(ctx, `[queryPay]`, { tid, userId, orderId });
            const userRet = yield this.prisma.user.findUniqueOrThrow({
                where: {
                    id: userId,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findUniqueOrThrow', userRet);
            const orderRet = yield this.prisma.order.findFirstOrThrow({
                select: exports.orderSelect,
                where: { id: orderId },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'order.findFirstOrThrow', orderRet);
            if (orderRet.userId !== userId) {
                throw new common_1.ForbiddenException('订单关联的买家ID和登录信息不一致');
            }
            const payQueryRet = yield this.wxPayService.query(orderRet.uid, ctx);
            (0, flowda_shared_node_1.diag)(ctx, 'wxPayService.query', payQueryRet);
            if (payQueryRet.status !== 200 || payQueryRet.trade_state !== 'SUCCESS') {
                throw new common_1.InternalServerErrorException('微信支付查询失败');
            }
            this.logger.log(`order query success`);
            // todo: 后续重构成 productSnapshot 和 order 1-1，暂时先取第一个
            const productId = orderRet.productSnapshots[0].productId;
            const productRet = yield this.prisma.product.findUniqueOrThrow({
                where: {
                    id: productId,
                },
            });
            const [userRet2, payRet] = yield this.prisma.$transaction([
                // 更新用户 orderProfile
                this.prisma.user.update({
                    where: {
                        id: userId,
                    },
                    select: user_service_1.userSelect,
                    data: {
                        orderProfile: {
                            upsert: {
                                update: {
                                    productType: productRet.productType,
                                    plan: productRet.plan,
                                    amount: {
                                        increment: productRet.amount || 0,
                                    },
                                },
                                create: {
                                    tenantId: userRet.tenantId,
                                    productType: productRet.productType,
                                    plan: productRet.plan,
                                    amount: productRet.amount,
                                    expireAt: productRet.validityPeriod != null ? (0, dayjs_1.default)().add(productRet.validityPeriod, 'day').toDate() : null,
                                },
                            },
                        },
                    },
                }),
                // 创建支付关联订单
                this.prisma.pay.upsert({
                    where: {
                        orderId: orderId,
                    },
                    create: {
                        tenantId: userRet.tenantId,
                        userId: userRet.id,
                        status: db.PayStatus.PAIED,
                        orderId: orderId,
                        transactionId: payQueryRet.transaction_id,
                    },
                    update: {
                        status: db.PayStatus.PAIED,
                        transactionId: payQueryRet.transaction_id,
                    },
                }),
            ]);
            return {
                order: orderRet,
                payQueryRet,
            };
        });
    }
    createNative(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[createNative]');
            return this.createInner(dto, this.wxPayService.transactionsNative, ctx);
        });
    }
    createJSAPI(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.createInner(dto, this.wxPayService.transactionsJSAPI);
        });
    }
    /*
    直接用 callback 比 template method 简化不少代码也方便测试
     */
    createInner(dto, transactionCallback, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[createInner]', { dto });
            const productRet = yield this.prisma.product.findUniqueOrThrow({
                where: {
                    uid: dto.productId,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'product.findUniqueOrThrow', productRet);
            if (productRet.restricted /*如果限购*/) {
                (0, flowda_shared_node_1.diag)(ctx, 'productRet.restricted', productRet.restricted);
                const purchased = yield this.prisma.order.count({
                    where: {
                        tenantId: dto.tid,
                        userId: dto.uid,
                        productSnapshots: {
                            some: {
                                productId: productRet.id,
                            },
                        },
                    },
                });
                (0, flowda_shared_node_1.diag)(ctx, 'order.count', purchased);
                if (purchased > 0) {
                    throw new common_1.ForbiddenException(`Product is restricted`, {
                        description: `order history length: ${purchased}`,
                    });
                }
            }
            const lastRet = yield this.prisma.order.findFirst({
                orderBy: [
                    {
                        createdAt: 'desc',
                    },
                ],
            });
            (0, flowda_shared_node_1.diag)(ctx, 'order.findFirst', lastRet);
            let serial;
            if (lastRet == null || lastRet.serial >= flowda_shared_types_1.Serial_Max) {
                serial = flowda_shared_types_1.Serial_Min;
            }
            else {
                serial = lastRet.serial + 1;
            }
            (0, flowda_shared_node_1.diag)(ctx, 'serial', serial);
            (0, flowda_shared_node_1.diag)(ctx, 'price', productRet.price);
            if (productRet.price.toNumber() === 0 /*免费产品*/) {
                (0, flowda_shared_node_1.diag)(ctx, 'free product');
                const orderProfileRet = yield this.prisma.orderProfile.findUnique({
                    where: {
                        userId: dto.uid,
                    },
                });
                (0, flowda_shared_node_1.diag)(ctx, 'orderProfile.findUnique', orderProfileRet);
                if (orderProfileRet && orderProfileRet.plan === flowda_shared_types_1.EPlan.VIP) {
                    throw new common_1.ConflictException(`User has a paid plan`, {
                        description: `profileId:${orderProfileRet.id}`,
                    });
                }
                const [orderRet, userRet] = yield this.prisma.$transaction([
                    this.prisma.order.create({
                        data: {
                            tenantId: dto.tid,
                            userId: dto.uid,
                            status: db.OrderStatus.FREE_DEAL,
                            serial: serial,
                            productSnapshots: {
                                create: {
                                    snapshotPrice: productRet.price,
                                    productId: productRet.id,
                                    userId: dto.uid,
                                    tenantId: dto.tid,
                                },
                            },
                        },
                        select: exports.orderSelect,
                    }),
                    this.prisma.user.update({
                        where: {
                            id: dto.uid,
                        },
                        select: user_service_1.userSelect,
                        data: {
                            orderProfile: {
                                upsert: {
                                    update: {
                                        productType: productRet.productType,
                                        plan: productRet.plan,
                                        amount: {
                                            increment: productRet.amount || 0,
                                        },
                                    },
                                    create: {
                                        tenantId: dto.tid,
                                        productType: productRet.productType,
                                        plan: productRet.plan,
                                        amount: productRet.amount,
                                        expireAt: productRet.validityPeriod != null ? (0, dayjs_1.default)().add(productRet.validityPeriod, 'day').toDate() : null,
                                    },
                                },
                            },
                        },
                    }),
                ]);
                (0, flowda_shared_node_1.diag)(ctx, 'order created', { id: orderRet.id });
                return {
                    order: orderRet,
                    wxRet: null,
                };
            }
            // 付费产品
            // 1. 创建订单
            (0, flowda_shared_node_1.diag)(ctx, 'paid product');
            const orderRet = yield this.prisma.order.create({
                data: {
                    tenantId: dto.tid,
                    userId: dto.uid,
                    status: db.OrderStatus.INITIALIZED,
                    serial: serial,
                    productSnapshots: {
                        create: {
                            snapshotPrice: productRet.price,
                            productId: productRet.id,
                            tenantId: dto.tid,
                            userId: dto.uid,
                        },
                    },
                },
                select: exports.orderSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'order.create', orderRet);
            try {
                // 2. 尝试发起微信支付 失败不影响订单
                // todo 添加失败重试
                const wxRet = yield transactionCallback({
                    openid: dto.openid,
                    orderId: String(orderRet.uid),
                    desc: productRet.name,
                    total: productRet.price.toNumber(),
                }, ctx);
                (0, flowda_shared_node_1.diag)(ctx, 'transactionCallback', wxRet);
                const orderRet2 = yield this.prisma.order.update({
                    where: {
                        id: orderRet.id,
                    },
                    data: {
                        status: db.OrderStatus.PAY_ASSOCIATED,
                    },
                    select: exports.orderSelect,
                });
                return {
                    order: orderRet2,
                    wxRet: wxRet,
                };
            }
            catch (e) {
                (0, flowda_shared_node_1.diag)(ctx, `error`, e.message);
                throw e;
            }
        });
    }
    createQuick(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield this.user.createQuick(dto);
            return this.createNative({
                tid: userRet.tenantId,
                uid: userRet.id,
                productId: dto.productId,
            });
        });
    }
    queryPayQuick(tid, anonymousCustomerToken, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield yield this.prisma.user.findFirstOrThrow({
                where: {
                    username: anonymousCustomerToken,
                    tenantId: tid,
                },
            });
            this.logger.debug(`start queryPay`);
            const ret = yield this.queryPay(tid, userRet.id, orderId);
            this.logger.debug(`succeed queryPay`);
            const openid = ret.payQueryRet.payer.openid;
            const updateUserRet = yield this.prisma.user.update({
                select: user_service_1.userSelect,
                where: {
                    id: userRet.id,
                },
                data: {
                    username: openid,
                    weixinProfile: {
                        connectOrCreate: {
                            where: {
                                unionOrOpenid: openid,
                            },
                            create: {
                                unionOrOpenid: openid,
                                loginOpenid: openid,
                            },
                        },
                    },
                },
            });
            return Object.assign(Object.assign({}, ret), {
                user: updateUserRet,
            });
        });
    }
};
exports.OrderV4Service = OrderV4Service;
exports.OrderV4Service = OrderV4Service = OrderV4Service_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(weixin_pay_service_1.WeixinPayService)),
    tslib_1.__param(1, (0, inversify_1.inject)(user_service_1.UserService)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof weixin_pay_service_1.WeixinPayService !== "undefined" && weixin_pay_service_1.WeixinPayService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof db !== "undefined" && db.PrismaClient) === "function" ? _c : Object, Function])
], OrderV4Service);


/***/ }),

/***/ "../../libs/flowda-services/src/services/sdk/productV4.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductV4Service_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductV4Service = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let ProductV4Service = ProductV4Service_1 = class ProductV4Service {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(ProductV4Service_1.name);
    }
    createManyProducts(tid, list) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = list.map(item => (Object.assign(Object.assign({}, item), { tenantId: tid, productType: item.productType, restricted: item.restricted || 0, amount: item.amount, 
                // 以下是为了处理 prisma null
                plan: item.plan === undefined ? null : item.plan, extendedDescriptionData: item.extendedDescriptionData, fileSize: item.fileSize === undefined ? null : item.fileSize, storeDuration: item.storeDuration === undefined ? null : item.storeDuration, hasAds: item.hasAds === undefined ? null : item.hasAds, tecSupport: item.tecSupport === undefined ? null : item.tecSupport, validityPeriod: null })));
            yield this.prisma.product.createMany({ data });
            return this.prisma.product.findMany({
                where: {
                    tenantId: tid,
                },
            });
        });
    }
};
exports.ProductV4Service = ProductV4Service;
exports.ProductV4Service = ProductV4Service = ProductV4Service_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], ProductV4Service);


/***/ }),

/***/ "../../libs/flowda-services/src/services/task.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TaskService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskService = exports.GetTaskFormSchemaDto = exports.StartSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const lodash_1 = __webpack_require__("lodash");
const flowda_env_1 = __webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts");
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const StartSchema = zod_1.z.object({
    tenantId: zod_1.z.string(),
    processDefKey: zod_1.z.string(),
    businessKey: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
class StartSchemaDto extends (0, nestjs_zod_1.createZodDto)(StartSchema) {
}
exports.StartSchemaDto = StartSchemaDto;
const GetTaskFormSchema = zod_1.z.object({
    taskId: zod_1.z.string(),
});
class GetTaskFormSchemaDto extends (0, nestjs_zod_1.createZodDto)(GetTaskFormSchema) {
}
exports.GetTaskFormSchemaDto = GetTaskFormSchemaDto;
let TaskService = TaskService_1 = class TaskService {
    constructor(prisma, API, loggerFactory) {
        this.prisma = prisma;
        this.API = API;
        this.logger = loggerFactory(TaskService_1.name);
    }
    start(dto, reqUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.API.post(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/process-definition/key/${dto.processDefKey}/tenant-id/${dto.tenantId}/start`, {
                variables: {
                    uid: {
                        value: reqUser.uid,
                        type: 'Integer',
                    },
                },
                businessKey: dto.businessKey,
            });
        });
    }
    getTask(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.API.get(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${taskId}`);
            const res2 = yield this.API.get(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${taskId}/form-variables`);
            res.data.variables = JSON.stringify(res2.data);
            return res.data;
        });
    }
    complete(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const ret2 = yield this.API.post(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${taskId}/complete`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            }
            catch (e) {
                this.logger.error(e);
            }
            return {
                taskId,
            };
        });
    }
    /**
     * 1. 根据 taskId -> formKey
     * 2. 前端根据 formKey -> form schema 并初始化对应的 view model
     * 3. 前端写一点点代码，扩展 form schema 的 onInit 和 onComplete
     */
    getTaskForm(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.API.get(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${dto.taskId}`);
                const taskDefinitionKey = res.data.taskDefinitionKey;
                const processInstanceId = res.data.processInstanceId;
                const res3 = yield this.API.get(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/process-instance/${processInstanceId}`);
                const res2 = yield this.API.get(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${dto.taskId}/form-variables`);
                this.logger.debug(`getTaskForm(${JSON.stringify(dto)}): ${JSON.stringify(res2.data, null, 2)}`);
                const ret = yield this.prisma.taskFormRelation.findUnique({
                    where: {
                        taskDefinitionKey,
                    },
                });
                return {
                    taskFormRelation: ret,
                    process: res3.data,
                    task: res.data,
                    variables: res2.data,
                };
            }
            catch (e) {
                this.logger.error(`[getTaskForm] error ${e.message}`);
                throw new Error(e);
            }
        });
    }
    completeResource(taskId, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { resource, data } = body;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const ret1 = yield this.prisma[(0, lodash_1.lowerFirst)(resource)].create({
                data: data,
            });
            try {
                const ret2 = yield this.API.post(flowda_env_1.FLOWDA_ENV.C7_REST_URL + `/task/${taskId}/complete`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            }
            catch (e) {
                this.logger.error(e);
            }
            return {
                taskId,
                resource,
                data,
                ret1,
            };
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = TaskService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.APISymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Object, Function])
], TaskService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateRecoveryToken = exports.generateVerificationCode = exports.UserService = exports.userSelect = exports.tenantSelect = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const flowda_env_1 = __webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts");
const common_1 = __webpack_require__("@nestjs/common");
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
const weixin_login_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-login.service.ts");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const weixin_fuwuhao_login_service_1 = __webpack_require__("../../libs/flowda-services/src/services/weixin-fuwuhao-login.service.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
exports.tenantSelect = db.Prisma.validator()({
    id: true,
    name: true,
    displayName: true,
    hashedRefreshToken: true,
    hashedPassword: true,
});
// https://www.prisma.io/docs/orm/prisma-client/type-safety/prisma-validator
// 这个比 `userSelect: db.Prisma.UserSelect` 好，因为 UserSelect 所有 property 都是 `?` 会导致类型不一致
exports.userSelect = db.Prisma.validator()({
    id: true,
    username: true,
    email: true,
    image: true,
    hashedPassword: true,
    hashedRefreshToken: true,
    tenantId: true,
    tenant: {
        select: {
            name: true,
        },
    },
    orderProfile: {
        select: {
            productType: true,
            plan: true,
            amount: true,
            expireAt: true,
        },
    },
    weixinProfile: {
        select: {
            unionid: true,
            loginOpenid: true,
            headimgurl: true,
            nickname: true,
            sex: true,
        },
    },
});
let UserService = UserService_1 = class UserService {
    constructor(prisma, smsClient, weixinLogin, weixinFuwuhaoLogin, loggerFactory) {
        this.prisma = prisma;
        this.smsClient = smsClient;
        this.weixinLogin = weixinLogin;
        this.weixinFuwuhaoLogin = weixinFuwuhaoLogin;
        this.logger = loggerFactory(UserService_1.name);
    }
    register(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    username: dto.username,
                },
            });
            if (user) {
                throw new common_1.ConflictException(`User exists`);
            }
            const hashedPassword = yield bcrypt.hash(dto.password, 10);
            const aUser = yield this.prisma.user.create({
                data: {
                    username: dto.username,
                    hashedPassword: hashedPassword,
                    hashedRefreshToken: null,
                    tenantId: dto.tenantId,
                },
            });
            return {
                id: aUser.id,
                username: aUser.username,
            };
        });
    }
    resetPassword(reqUser, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenantRet = yield this.prisma.tenant.findUniqueOrThrow({
                where: {
                    id: reqUser.tid,
                },
            });
            if (tenantRet.name !== 'superadmin') {
                throw new Error('Not allowed');
            }
            yield this.prisma.user.findFirstOrThrow({
                where: {
                    id: dto.userId,
                    tenantId: dto.tenantId,
                },
            });
            const hashedPassword = yield bcrypt.hash(dto.password, 10);
            return this.prisma.user.update({
                where: {
                    id: dto.userId,
                },
                data: {
                    hashedPassword,
                },
            });
        });
    }
    validateByEmail(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[validateByEmail]', input);
            const { tenantId, email, password } = input;
            const userRet = yield this.prisma.user.findFirstOrThrow({
                where: {
                    email: email,
                    tenantId: tenantId,
                },
                select: {
                    id: true,
                    username: true,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findFirstOrThrow', userRet);
            return this.validate({ tenantId: tenantId, username: userRet.username, password }, ctx);
        });
    }
    validate(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[validate]', input);
            const { username, password } = input;
            const userRets = yield this.prisma.user.findMany({
                where: {
                    username: username,
                    tenantId: input.tenantId, // todo 暂时先兼容不存在 tenantId 的登录
                },
                select: exports.userSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findMany', userRets);
            if (userRets.length > 1) {
                throw new common_1.ConflictException(`Find too many users`);
            }
            if (userRets.length === 0) {
                // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
                throw new common_1.UnauthorizedException(`User does not exist`);
            }
            const userRet = userRets[0];
            if (!userRet.hashedPassword) {
                throw new common_1.UnauthorizedException(`Password is not initialized`);
            }
            const match = yield bcrypt.compare(password, userRet.hashedPassword);
            if (!match) {
                throw new common_1.UnauthorizedException(`Username and password is not matched`);
            }
            const payload = { uid: userRet.id, tid: userRet.tenantId };
            const rtRet = yield generateUserRefreshToken(payload);
            (0, flowda_shared_node_1.diag)(ctx, 'generateUserRefreshToken', rtRet);
            yield this.prisma.user.update({
                where: { id: userRet.id },
                data: {
                    hashedRefreshToken: rtRet.hash,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.update', rtRet.hash);
            const at = generateJwt(payload, {
                secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE,
            });
            this.logger.log(`validate pass, tid:${userRet.tenantId}, u:${userRet.username}, e:${(0, dayjs_1.default)().add(flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE, 's')}`);
            return {
                user: _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']),
                rt: rtRet.rt,
                at,
            };
        });
    }
    validateTenant(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { name, password } = dto;
            const tenant = yield this.prisma.tenant.findFirst({
                where: {
                    name: name,
                },
                select: exports.tenantSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, '(e)tenant.findFirst', tenant);
            if (tenant == null) {
                throw new common_1.UnauthorizedException(`tenant does not exist`);
            }
            if (!tenant.hashedPassword) {
                throw new common_1.UnauthorizedException(`tenant password is not initialized`);
            }
            const match = yield bcrypt.compare(password, tenant.hashedPassword);
            if (!match) {
                throw new common_1.UnauthorizedException(`tenant name and password is not matched`);
            }
            const payload = { tid: tenant.id };
            const rtRet = yield generateTenantRefreshToken(payload);
            (0, flowda_shared_node_1.diag)(ctx, '(e) generateTenantRefreshToken', payload);
            yield this.prisma.tenant.update({
                where: { id: tenant.id },
                data: {
                    hashedRefreshToken: rtRet.hash,
                },
            });
            const at = generateJwt(payload, {
                secret: flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_EXPIRE,
            });
            this.logger.log(`validate pass, t: ${tenant.name}, e: ${(0, dayjs_1.default)().add(flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_EXPIRE, 's')}`);
            return {
                tenant: _.omit(tenant, ['hashedPassword', 'hashedRefreshToken']),
                rt: rtRet.rt,
                at,
            };
        });
    }
    refreshTenantToken(rt, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[refreshTenantToken]');
            const decodedToken = verifyToken(rt, { secret: flowda_env_1.FLOWDA_ENV.TENANT_REFRESH_TOKEN_SECRET });
            const tid = decodedToken['tid'];
            (0, flowda_shared_node_1.diag)(ctx, 'jwt.verify', decodedToken);
            const tenant = yield this.prisma.tenant.findUniqueOrThrow({
                where: {
                    id: tid,
                },
                select: exports.tenantSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'tenant.findUniqueOrThrow', tenant);
            if (tenant.hashedRefreshToken == null) {
                throw new common_1.UnauthorizedException('tenant refresh token not exists');
            }
            const match = yield bcrypt.compare(rt, tenant.hashedRefreshToken);
            if (!match) {
                throw new common_1.UnauthorizedException('tenant refresh token is invalid');
            }
            const at = generateJwt({ tid }, {
                secret: flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_EXPIRE,
            });
            return {
                at,
                tenant: _.omit(tenant, ['hashedRefreshToken', 'hashedPassword']),
            };
        });
    }
    verifyAccessToken(at) {
        return verifyToken(at, { secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET });
    }
    verifyTenantAccessToken(at) {
        return verifyToken(at, { secret: flowda_env_1.FLOWDA_ENV.TENANT_ACCESS_TOKEN_SECRET });
    }
    getUserInfo(uid, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[getUserInfo]');
            const ret = yield this.prisma.user.findUniqueOrThrow({
                where: {
                    id: uid,
                },
                select: exports.userSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findUniqueOrThrow', ret);
            return _.omit(ret, ['hashedRefreshToken', 'hashedPassword']);
        });
    }
    getTenantInfo(tid, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[getTenantInfo]');
            const ret = yield this.prisma.tenant.findUniqueOrThrow({
                where: {
                    id: tid,
                },
                select: exports.tenantSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'tenant.findUniqueOrThrow', ret);
            return _.omit(ret, ['hashedRefreshToken', 'hashedPassword']);
        });
    }
    sendSmsVerifyCode(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, ['sendSmsVerifyCode']);
            const code = generateVerificationCode();
            (0, flowda_shared_node_1.diag)(ctx, 'generateVerificationCode', { code });
            try {
                const res = yield this.smsClient.SendSms({
                    SmsSdkAppId: '1400886368',
                    PhoneNumberSet: ['+86' + input.mobile],
                    TemplateId: '2062585',
                    SignName: '上海只冲网络科技有限公司',
                    TemplateParamSet: [code],
                });
                (0, flowda_shared_node_1.diag)(ctx, 'smsClient.SendSms', res);
            }
            catch (e) {
                throw new Error(e);
            }
            return this.prisma.sentSms.create({
                data: {
                    mobile: input.mobile,
                    code: code,
                },
            });
        });
    }
    verifyMobile(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[verifyMobile]');
            const now = (0, dayjs_1.default)();
            const tenMinutesAgo = now.subtract(10, 'minute');
            yield this.prisma.sentSms.findFirstOrThrow({
                where: {
                    code: dto.code,
                    mobile: dto.mobile,
                    createdAt: {
                        gte: tenMinutesAgo.toDate(),
                        lte: now.toDate(),
                    },
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'called sentSms.findFirstOrThrow');
            yield this.prisma.user.findFirstOrThrow({
                where: {
                    id: dto.uid,
                    tenantId: dto.tid,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'called user.findFirstOrThrow');
            const ret = yield this.prisma.user.update({
                where: {
                    id: dto.uid,
                },
                data: {
                    mobile: dto.mobile,
                },
                select: {
                    id: true,
                    tenantId: true,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'called user.update');
            return ret;
        });
    }
    getTenantByName(dto) {
        return this.prisma.tenant.findFirstOrThrow({
            where: {
                name: dto.tenantName,
            },
        });
    }
    accountExists(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.user.findFirstOrThrow({
                where: {
                    username: dto.username,
                    tenant: {
                        name: dto.tenantName,
                    },
                },
            });
            return ret;
        });
    }
    findByUnionIdAndTenantId(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.user.findFirst({
                where: {
                    weixinProfile: {
                        unionid: dto.unionid,
                    },
                    tenantId: dto.tenantId,
                },
            });
            return ret;
        });
    }
    registerByUnionId(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    weixinProfile: {
                        unionid: dto.unionid,
                    },
                    tenantId: dto.tenantId,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findFirst', user);
            if (user) {
                throw new Error(`User exits with unionid: ${dto.unionid}`);
            }
            const wxProfileRet = yield this.prisma.weixinProfile.upsert({
                where: {
                    unionOrOpenid: dto.unionid,
                },
                create: {
                    unionOrOpenid: dto.unionid,
                    unionid: dto.unionid,
                },
                update: {
                    unionOrOpenid: dto.unionid,
                    unionid: dto.unionid,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'weixinProfile.upsert', wxProfileRet);
            const aUser = yield this.prisma.user.create({
                data: {
                    username: dto.unionid, // 后续可以判断如果 unionid === username 则可以改动一次用户名
                    hashedPassword: null,
                    hashedRefreshToken: null,
                    weixinProfileId: wxProfileRet.id,
                    tenantId: dto.tenantId,
                },
            });
            return aUser;
        });
    }
    wxValidateUser(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[wxValidateUser]', dto);
            const { tid, code } = dto;
            (0, flowda_shared_node_1.diag)(ctx, 'call weixinLogin.getAccessToken', code);
            const wxRet = yield this.weixinLogin.getAccessToken(code);
            (0, flowda_shared_node_1.diag)(ctx, 'called weixinLogin.getAccessToken', wxRet);
            const wxUser = yield this.weixinLogin.getUser(wxRet.data.openid, wxRet.data.access_token);
            (0, flowda_shared_node_1.diag)(ctx, 'called weixinLogin.getUser', wxUser);
            const wxProfileRet = yield this.prisma.weixinProfile.upsert({
                where: {
                    unionOrOpenid: wxRet.data.unionid,
                },
                create: {
                    unionOrOpenid: wxRet.data.unionid,
                    unionid: wxRet.data.unionid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                },
                update: {
                    unionOrOpenid: wxRet.data.unionid,
                    unionid: wxRet.data.unionid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'called weixinProfile.upsert', wxProfileRet);
            (0, flowda_shared_node_1.diag)(ctx, 'call user.findFirst', {
                unionid: wxRet.data.unionid,
                tenantId: tid,
            });
            let userRet = yield this.prisma.user.findFirst({
                where: {
                    username: wxRet.data.unionid,
                    tenantId: tid,
                },
                select: exports.userSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'userRet', userRet);
            if (!userRet /* 不存在*/) {
                (0, flowda_shared_node_1.diag)(ctx, 'wxProfileRet upsert', wxProfileRet);
                userRet = yield this.prisma.user.create({
                    data: {
                        username: wxRet.data.unionid, // 后续可以判断如果 unionid === username 则可以改动一次用户名
                        hashedPassword: null,
                        hashedRefreshToken: null,
                        tenantId: tid,
                        weixinProfileId: wxProfileRet.id,
                    },
                    select: exports.userSelect,
                });
                (0, flowda_shared_node_1.diag)(ctx, 'create userRet', userRet);
            }
            const payload = { uid: userRet.id, tid: userRet.tenantId };
            const at = generateJwt(payload, {
                secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE,
            });
            const rtRet = yield generateUserRefreshToken(payload);
            yield this.prisma.user.update({
                where: { id: userRet.id },
                data: {
                    weixinProfileId: wxProfileRet.id,
                    hashedRefreshToken: rtRet.hash,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'update rt');
            return {
                at: at,
                rt: rtRet.rt,
                user: _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']),
            };
        });
    }
    refreshToken(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[refreshToken]');
            const { rt } = input;
            const decodedToken = verifyToken(rt, { secret: flowda_env_1.FLOWDA_ENV.REFRESH_TOKEN_SECRET });
            (0, flowda_shared_node_1.diag)(ctx, 'jwt.verify', decodedToken);
            const userRet = yield this.prisma.user.findUniqueOrThrow({
                where: {
                    id: decodedToken['uid'],
                },
                select: exports.userSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findUniqueOrThrow', userRet);
            if (userRet.hashedRefreshToken == null) {
                throw new common_1.UnauthorizedException(`user refresh token not exists`);
            }
            const match = yield bcrypt.compare(rt, userRet.hashedRefreshToken);
            if (!match) {
                throw new common_1.UnauthorizedException('user refresh token is invalid');
            }
            const payload = { tid: userRet.tenantId, uid: userRet.id };
            (0, flowda_shared_node_1.diag)(ctx, 'generateJwt', payload);
            const at = generateJwt(payload, {
                secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE,
            });
            return {
                at,
                user: _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']),
            };
        });
    }
    generateRecoveryCode(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[generateRecoveryCode]');
            const userRet = yield this.prisma.user.findUniqueOrThrow({
                where: {
                    email: dto.email,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findUniqueOrThrow', userRet);
            const recoveryToken = generateRecoveryToken(dto.email, {
                secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
            });
            // token 过长，关联一个 code 发到邮箱里
            const recoveryCode = _.uid(6).toUpperCase();
            (0, flowda_shared_node_1.diag)(ctx, 'generateRecoveryToken', { recoveryToken, recoveryCode });
            yield this.prisma.user.update({
                where: {
                    id: userRet.id,
                },
                data: {
                    recoveryToken,
                    recoveryCode,
                },
            });
            // todo: 发邮件
            return {
                recoveryCode,
            };
        });
    }
    resetPasswordWithRecoveryCode(dto, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[resetPasswordWithRecoveryCode]');
            const userRet = yield this.prisma.user.findFirstOrThrow({
                where: {
                    tenantId: dto.tid,
                    recoveryCode: dto.recoveryCode,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'user.findFirstOrThrow', userRet);
            if (userRet.recoveryToken == null) {
                throw new common_1.ForbiddenException(`invalid recovery code`);
            }
            const decodeToken = verifyToken(userRet.recoveryToken, { secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET });
            (0, flowda_shared_node_1.diag)(ctx, 'decodeToken', decodeToken);
            if (!decodeToken['verificationToken']) {
                throw new common_1.ForbiddenException('invalid recovery token');
            }
            const hash = yield bcrypt.hash(dto.password, 10);
            const ret = yield this.prisma.user.update({
                where: {
                    id: userRet.id,
                },
                data: {
                    hashedPassword: hash,
                    hashedRefreshToken: null,
                    recoveryCode: null,
                    recoveryToken: null,
                },
                select: exports.userSelect,
            });
            return _.omit(ret, ['hashedRefreshToken', 'hashedPassword']);
        });
    }
    fwhLogin(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.weixinFuwuhaoLogin.getAccessTokenByCode(dto.code);
            const name = ret.unionid || ret.openid; // 如果 unionid 为空，则 fallback 到 openid
            const wxUser = yield this.weixinLogin.getUser(ret.openid, ret.access_token);
            const wxProfileRet = yield this.prisma.weixinProfile.upsert({
                where: {
                    unionOrOpenid: ret.unionid || ret.openid,
                },
                create: {
                    unionOrOpenid: ret.unionid || ret.openid,
                    unionid: ret.unionid,
                    loginOpenid: ret.openid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                },
                update: {
                    unionOrOpenid: ret.unionid || ret.openid,
                    unionid: ret.unionid,
                    loginOpenid: ret.openid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                },
            });
            let userRet = yield this.prisma.user.findFirst({
                where: {
                    username: name,
                    tenantId: dto.tid,
                },
                select: exports.userSelect,
            });
            let rt;
            if (!userRet /* 不存在则创建 */) {
                userRet = yield this.prisma.user.create({
                    data: {
                        username: name,
                        tenantId: dto.tid,
                        // hashedRefreshToken: hash, // todo: 不存在无法创建 hash
                        weixinProfileId: wxProfileRet.id,
                    },
                    select: exports.userSelect,
                });
                const rtRet = yield generateUserRefreshToken({
                    uid: userRet.id,
                    tid: userRet.tenantId,
                });
                rt = rtRet.rt;
                yield this.prisma.user.update({
                    where: {
                        id: userRet.id,
                    },
                    data: {
                        hashedRefreshToken: rtRet.hash,
                    },
                });
            } /* 否则可以更新下微信 profile */
            else {
                const rtRet = yield generateUserRefreshToken({
                    uid: userRet.id,
                    tid: userRet.tenantId,
                });
                rt = rtRet.rt;
                userRet = yield this.prisma.user.update({
                    where: {
                        id: userRet.id,
                    },
                    select: exports.userSelect,
                    data: {
                        hashedRefreshToken: rtRet.hash,
                        weixinProfileId: wxProfileRet.id,
                    },
                });
            }
            const payload = { uid: userRet.id, tid: userRet.tenantId };
            const at = generateJwt(payload, {
                secret: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET,
                expires: flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE,
            });
            return {
                at,
                rt,
                user: _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']),
            };
        });
    }
    createTenant(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[createTenant]');
            const randomAppId = _.uid(4).toUpperCase();
            const randomAppToken = _.uid(24);
            const hashedPassword = yield bcrypt.hash(randomAppToken, 10);
            (0, flowda_shared_node_1.diag)(ctx, 'tenant.create params', { randomAppId, randomAppToken });
            const ret = yield this.prisma.tenant.create({
                data: {
                    name: randomAppId,
                    displayName: input.displayName,
                    hashedPassword,
                },
                select: exports.tenantSelect,
            });
            (0, flowda_shared_node_1.diag)(ctx, 'tenant.create');
            // appToken 虽然是密码，但是需要返回给前台
            return Object.assign({ appToken: randomAppToken }, _.omit(ret, ['hashedRefreshToken', 'hashedPassword']));
        });
    }
    // todo: 危险操作 增加二次验证
    _resetTenantPassword(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const randomAppToken = _.uid(24);
            const hashedPassword = yield bcrypt.hash(randomAppToken, 10);
            const ret = yield this.prisma.tenant.update({
                where: {
                    id: input.id,
                },
                data: {
                    hashedPassword,
                },
                select: exports.tenantSelect,
            });
            // appToken 虽然是密码，但是需要返回给前台
            return Object.assign({ appToken: randomAppToken }, _.omit(ret, ['hashedRefreshToken', 'hashedPassword']));
        });
    }
    preSignup(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[preSignup]');
            const user = yield this.prisma.user.findUnique({
                where: { email: input.email },
            });
            if (user) {
                // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
                throw new common_1.ConflictException('Email already exists', {
                    description: `userId:${user.id}`,
                });
            }
            const randomCode = _.uid(6).toUpperCase();
            (0, flowda_shared_node_1.diag)(ctx, 'verifyCode', { randomCode });
            yield this.prisma.userPreSignup.create({
                data: {
                    tenantId: input.tid,
                    email: input.email,
                    verifyCode: randomCode,
                },
            });
            // todo: 发送邮件
            return {
                verifyCode: randomCode,
            };
        });
    }
    verifyAndSignup(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, '[verifyAndSignup]');
            const ret = yield this.prisma.userPreSignup.findFirstOrThrow({
                where: {
                    tenantId: input.tid,
                    email: input.email,
                    verifyCode: input.verifyCode,
                    isDeleted: false,
                },
            });
            (0, flowda_shared_node_1.diag)(ctx, 'userPreSignup found', ret);
            const hashedPassword = yield bcrypt.hash(input.password, 10);
            const [userRet] = yield this.prisma.$transaction([
                this.prisma.user.create({
                    data: {
                        username: input.email, // 后续可以判断如果 email === username 则可以改动一次用户名
                        email: input.email,
                        hashedPassword: hashedPassword,
                        hashedRefreshToken: null,
                        tenantId: input.tid,
                    },
                    select: exports.userSelect,
                }),
                this.prisma.userPreSignup.update({
                    where: {
                        id: ret.id,
                    },
                    data: {
                        isDeleted: true,
                    },
                }),
            ]);
            (0, flowda_shared_node_1.diag)(ctx, '$transaction complete', userRet);
            return _.omit(userRet, ['hashedRefreshToken', 'hashedPassword']);
        });
    }
    amountUpdate(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const profileRet = yield this.prisma.orderProfile.findUniqueOrThrow({
                where: {
                    userId: input.uid,
                },
            });
            if (profileRet.expireAt && new Date(profileRet.expireAt).valueOf() < Date.now()) {
                throw new common_1.ForbiddenException('Order profile is expired', {
                    description: `expired at ${profileRet.expireAt}`,
                });
            }
            const count = input.count || 1;
            const action = input.action || 'decrement';
            if (action === 'decrement' && (profileRet.amount == null || profileRet.amount < count)) {
                throw new common_1.ForbiddenException('Action not allowed', {
                    description: `profile amount ${profileRet.amount} less than ${count}`,
                });
            }
            const ret = yield this.prisma.user.update({
                where: {
                    id: profileRet.userId,
                },
                select: exports.userSelect,
                data: {
                    orderProfile: {
                        update: {
                            amount: {
                                decrement: count,
                            },
                        },
                    },
                },
            });
            return _.omit(ret, ['hashedRefreshToken', 'hashedPassword']);
        });
    }
    createQuick(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield this.prisma.user.findFirst({
                where: {
                    username: input.anonymousCustomerToken,
                    tenantId: input.tid,
                },
            });
            if (userRet) {
                throw new common_1.ConflictException('请确认支付快捷创建是已支付状态');
            }
            return this.prisma.user.create({
                data: {
                    tenantId: input.tid,
                    username: input.anonymousCustomerToken,
                    anonymousCustomerToken: input.anonymousCustomerToken,
                },
                select: exports.userSelect,
            });
        });
    }
    logout(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.prisma.user.update({
                where: {
                    id: dto.uid,
                },
                data: {
                    hashedRefreshToken: null,
                },
            });
            return {};
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.SmsClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(weixin_login_service_1.WeixinLoginService)),
    tslib_1.__param(3, (0, inversify_1.inject)(weixin_fuwuhao_login_service_1.WeixinFuwuhaoLoginService)),
    tslib_1.__param(4, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Object, typeof (_b = typeof weixin_login_service_1.WeixinLoginService !== "undefined" && weixin_login_service_1.WeixinLoginService) === "function" ? _b : Object, typeof (_c = typeof weixin_fuwuhao_login_service_1.WeixinFuwuhaoLoginService !== "undefined" && weixin_fuwuhao_login_service_1.WeixinFuwuhaoLoginService) === "function" ? _c : Object, Function])
], UserService);
function generateVerificationCode() {
    let verificationCode = '';
    const digits = '0123456789';
    while (verificationCode.length < 6) {
        const randomDigit = digits[Math.floor(Math.random() * digits.length)];
        if (!verificationCode.includes(randomDigit)) {
            verificationCode += randomDigit;
        }
    }
    return verificationCode;
}
exports.generateVerificationCode = generateVerificationCode;
function generateRecoveryToken(email, options) {
    const recoveryToken = jwt.sign({
        email: email,
        verificationToken: true,
        exp: Math.floor(Date.now() / 1000) + 30 * 60, // 30 分钟过期
    }, options.secret);
    return recoveryToken;
}
exports.generateRecoveryToken = generateRecoveryToken;
function verifyToken(at, options) {
    try {
        return jwt.verify(at, options.secret);
    }
    catch (e) {
        // https://byby.dev/ts-try-catch-error-type
        if (e instanceof Error) {
            throw new common_1.UnauthorizedException(e.message);
        }
        else {
            throw new common_1.UnauthorizedException(`Invalid token`);
        }
    }
}
function generateJwt(payload, options) {
    const token = jwt.sign(payload, options.secret, {
        expiresIn: `${options.expires}s`,
    });
    const decode = jwt.decode(token);
    return {
        token: token,
        iat: decode.iat,
        exp: decode.exp,
    };
}
function generateUserRefreshToken(payload) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const rt = generateJwt(payload, {
            secret: flowda_env_1.FLOWDA_ENV.REFRESH_TOKEN_SECRET,
            expires: flowda_env_1.FLOWDA_ENV.REFRESH_TOKEN_EXPIRE,
        });
        const hash = yield bcrypt.hash(rt.token, 10);
        return {
            rt,
            hash,
        };
    });
}
function generateTenantRefreshToken(payload) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const rt = generateJwt(payload, {
            secret: flowda_env_1.FLOWDA_ENV.TENANT_REFRESH_TOKEN_SECRET,
            expires: flowda_env_1.FLOWDA_ENV.TENANT_REFRESH_TOKEN_EXPIRE,
        });
        const hash = yield bcrypt.hash(rt.token, 10);
        return {
            rt,
            hash,
        };
    });
}


/***/ }),

/***/ "../../libs/flowda-services/src/services/weixin-fuwuhao-login.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WeixinFuwuhaoLoginService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeixinFuwuhaoLoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const axios_1 = tslib_1.__importDefault(__webpack_require__("axios"));
const common_1 = __webpack_require__("@nestjs/common");
const flowda_env_1 = __webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts");
let WeixinFuwuhaoLoginService = WeixinFuwuhaoLoginService_1 = class WeixinFuwuhaoLoginService {
    constructor(loggerFactory) {
        this.logger = loggerFactory(WeixinFuwuhaoLoginService_1.name);
    }
    getAccessToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appid = flowda_env_1.FLOWDA_ENV.freecharger_fuwuhao_appid;
            const secret = flowda_env_1.FLOWDA_ENV.freecharger_fuwuhao_secret;
            // https://github.com/axios/axios/issues/5082
            const ret = yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
            });
            return ret.data;
        });
    }
    getAccessTokenByCode(code) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appid = flowda_env_1.FLOWDA_ENV.freecharger_fuwuhao_appid;
            const secret = flowda_env_1.FLOWDA_ENV.freecharger_fuwuhao_secret;
            const res = yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`,
            });
            if (res.data.errcode) {
                console.log('get access token error: ', JSON.stringify(res.data));
                throw new common_1.InternalServerErrorException('服务号获取 access token 失败', {
                    description: res.data.errcode,
                });
            }
            return res.data;
        });
    }
};
exports.WeixinFuwuhaoLoginService = WeixinFuwuhaoLoginService;
exports.WeixinFuwuhaoLoginService = WeixinFuwuhaoLoginService = WeixinFuwuhaoLoginService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], WeixinFuwuhaoLoginService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/weixin-login.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WeixinLoginService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeixinLoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const wechat_oauth_1 = tslib_1.__importDefault(__webpack_require__("wechat-oauth"));
let WeixinLoginService = WeixinLoginService_1 = class WeixinLoginService {
    constructor(wechatOAuth, loggerFactory) {
        this.wechatOAuth = wechatOAuth;
        this.logger = loggerFactory(WeixinLoginService_1.name);
    }
    getAuthorizeURLForWebsite(redirectUrl) {
        const url = this.wechatOAuth.getAuthorizeURLForWebsite(redirectUrl);
        return url;
    }
    getAccessToken(code) {
        return new Promise((resolve, reject) => {
            this.wechatOAuth.getAccessToken(code, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
    getUser(openid, access_token) {
        return new Promise((resolve, reject) => {
            this.wechatOAuth._getUser({
                openid,
            }, access_token, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};
exports.WeixinLoginService = WeixinLoginService;
exports.WeixinLoginService = WeixinLoginService = WeixinLoginService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.WechatOAuthSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wechat_oauth_1.default !== "undefined" && wechat_oauth_1.default) === "function" ? _a : Object, Function])
], WeixinLoginService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/weixin-pay.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WeixinPayService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeixinPayService = void 0;
const tslib_1 = __webpack_require__("tslib");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const wechatpay_node_v3_1 = tslib_1.__importDefault(__webpack_require__("wechatpay-node-v3"));
const common_1 = __webpack_require__("@nestjs/common");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let WeixinPayService = WeixinPayService_1 = class WeixinPayService {
    constructor(wechatPayNodeV3, loggerFactory) {
        this.wechatPayNodeV3 = wechatPayNodeV3;
        this.logger = loggerFactory(WeixinPayService_1.name);
        this.transactionsNative = this.transactionsNative.bind(this);
        this.transactionsJSAPI = this.transactionsJSAPI.bind(this);
    }
    /*
    {
    "status": 200,
    "appId": "xx",
    "timeStamp": "1682132086",
    "nonceStr": "xx",
    "package": "prepay_id=xx",
    "signType": "RSA",
    "paySign": "xx"
  }
     */
    transactionsJSAPI(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const timeExpire = (0, flowda_shared_1.getTimeExpire)(5);
            const params = {
                description: input.desc, ///商品描述
                out_trade_no: String(input.orderId), ///户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
                time_expire: timeExpire /*订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日 13点29分35秒。 */,
                attach: '附加数据', ///附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。
                notify_url: 'https://www.weixin.qq.com/wxpay/pay.php', // todo /* 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。 公网域名必须为https，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用http */
                support_fapiao: false, ///传入true时，支付成功消息和支付详情页将出现开票入口。需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。
                amount: {
                    total: input.total * 100, ///订单总金额，单位为“分”
                    currency: 'CNY', /// CNY：人民币，境内商户号仅支持人民币。
                },
                payer: {
                    openid: input.openid, ///用户在直连商户appid下的唯一标识，不可混用
                },
                settle_info: {
                    profit_sharing: false, ///是否指定分账
                },
            };
            const wxRet = yield this.wechatPayNodeV3.transactions_jsapi(params);
            this.logger.log(`wechat transactions_jsapi resp ${JSON.stringify(wxRet)}`);
            if (wxRet['status'] !== 200) {
                throw new common_1.InternalServerErrorException('发起微信支付 (jsapi) 失败');
            }
            return wxRet;
        });
    }
    /*
    {"status":200,"code_url":"weixin://wxpay/bizpayurl?pr=pUnqLjbzz"}
     */
    transactionsNative(input, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, `[transactionsNative]`);
            const timeExpire = (0, flowda_shared_1.getTimeExpire)(5);
            const params = {
                description: input.desc, ///商品描述
                out_trade_no: String(input.orderId), ///户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
                // '2022-11-11T23:59:59+08:00'
                time_expire: timeExpire,
                /*订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日 13点29分35秒。 */
                attach: '附加数据', ///附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。
                notify_url: 'https://www.weixin.qq.com/wxpay/pay.php', // todo /* 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。 公网域名必须为https，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用http */
                support_fapiao: false, ///传入true时，支付成功消息和支付详情页将出现开票入口。需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。
                amount: {
                    total: input.total * 100, ///订单总金额，单位为“分”
                    currency: 'CNY', /// CNY：人民币，境内商户号仅支持人民币。
                },
                settle_info: {
                    profit_sharing: false, ///是否指定分账
                },
            };
            (0, flowda_shared_node_1.diag)(ctx, `wechat start to transactions_native`, params);
            const wxRet = (yield this.wechatPayNodeV3.transactions_native(params));
            (0, flowda_shared_node_1.diag)(ctx, `wechat transactions_native resp`, wxRet);
            if (wxRet.status !== 200) {
                throw new common_1.InternalServerErrorException('发起微信支付 (native) 失败');
            }
            return wxRet;
        });
    }
    /*
    {
      "status": 200,
      "amount": {
          "currency": "CNY",
          "payer_currency": "CNY",
          "payer_total": 1,
          "total": 1
      },
      "appid": "wx6ecc94d7d5133fde",
      "attach": "附加数据",
      "bank_type": "OTHERS",
      "mchid": "1634638724",
      "out_trade_no": "claz2v5la0000tzp2ivnp5gpm",
      "payer": {
          "openid": "oQBzz5GM-9aCngjG3eNpqJIlzJj4"
      },
      "promotion_detail": [],
      "success_time": "2022-11-27T16:07:27+08:00",
      "trade_state": "SUCCESS",
      "trade_state_desc": "支付成功",
      "trade_type": "NATIVE",
      "transaction_id": "4200001645202211278892941061"
  }
     */
    query(outTradeNo, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, flowda_shared_node_1.diag)(ctx, `[query]`, outTradeNo);
            const ret = yield this.wechatPayNodeV3.query({ out_trade_no: String(outTradeNo) });
            (0, flowda_shared_node_1.diag)(ctx, `wx pay query resp`, ret);
            return ret;
        });
    }
};
exports.WeixinPayService = WeixinPayService;
exports.WeixinPayService = WeixinPayService = WeixinPayService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.WechatpayNodeV3Symbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wechatpay_node_v3_1.default !== "undefined" && wechatpay_node_v3_1.default) === "function" ? _a : Object, Function])
], WeixinPayService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            this.logger.error(`CustomError|${rt.code}|${rt.message}`);
            response.status(common_1.HttpStatus.OK).json({
                code: rt.code,
                message: rt.message,
            });
        }
        else if (exception instanceof common_1.HttpException) {
            const res = exception.getResponse();
            if (typeof res === 'object') {
                const extra = JSON.stringify(res);
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}|${extra}`);
            }
            else {
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}`);
            }
            response.status(exception.getStatus()).json({
                code: exception.getStatus(),
                message: typeof res === 'object' ? res : exception.message,
            });
        }
        else {
            this.logger.error(exception.stack);
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message,
            });
        }
    }
};
exports.AppExceptionFilter = AppExceptionFilter;
exports.AppExceptionFilter = AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [])
], AppExceptionFilter);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const table_filter_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/services/table-filter.service.ts");
const audit_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/services/audit.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, table_filter_service_1.TableFilterService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, audit_service_1.AuditService);
    bind('Factory<Logger>').toFactory(context => {
        return name => {
            return new common_1.Logger(name);
        };
    });
});


/***/ }),

/***/ "../../libs/flowda-shared-node/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/services/table-filter.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/services/audit.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/trpc/trpc-utils.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/services/audit.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuditService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = exports.QueryAuditSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const z = tslib_1.__importStar(__webpack_require__("zod"));
const QueryAuditSchema = z.object({
    auditType: z.string(),
    auditId: z.number(),
    pageSize: z.number(),
    current: z.number(),
});
class QueryAuditSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryAuditSchema) {
}
exports.QueryAuditSchemaDto = QueryAuditSchemaDto;
let AuditService = AuditService_1 = class AuditService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(AuditService_1.name);
    }
    queryAudit(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [data, count] = yield this.prisma.$transaction([
                this.prisma.audits.findMany({
                    skip: dto.pageSize * (dto.current - 1),
                    take: dto.pageSize,
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                }),
                this.prisma.audits.count({
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                }),
            ]);
            return {
                total: count,
                data,
            };
        });
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = AuditService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], AuditService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/services/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.TableFilterSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
// import { TableFilterSchema } from '@flowda-projects/prisma-wms'
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const zod_1 = __webpack_require__("zod");
// todo @flowda-projects/prisma-wms
// 不能有关联关系，先手动 copy 出来
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    path: zod_1.z.string(),
    name: zod_1.z.string(),
    filterJSON: zod_1.z.string(),
});
const QueryTableFilterSchema = exports.TableFilterSchema.pick({
    path: true,
});
const RemoveTableFilterSchema = exports.TableFilterSchema.pick({
    id: true,
});
class QueryTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryTableFilterSchema) {
}
exports.QueryTableFilterSchemaDto = QueryTableFilterSchemaDto;
class RemoveTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(RemoveTableFilterSchema) {
}
exports.RemoveTableFilterSchemaDto = RemoveTableFilterSchemaDto;
let TableFilterService = TableFilterService_1 = class TableFilterService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(TableFilterService_1.name);
    }
    save(dto) {
        return this.prisma.tableFilter.create({
            data: dto,
        });
    }
    remove(dto) {
        return this.prisma.tableFilter.delete({
            where: { id: dto.id },
        });
    }
    query(dto) {
        return this.prisma.tableFilter.findMany({
            where: {
                isDeleted: false,
                path: dto.path,
            },
            select: {
                id: true,
                path: true,
                name: true,
                filterJSON: true,
            },
        });
    }
};
exports.TableFilterService = TableFilterService;
exports.TableFilterService = TableFilterService = TableFilterService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], TableFilterService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/trpc/trpc-utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="@types/express-serve-static-core" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diag = exports.createContext = exports.transformer = exports.errorFormatter = exports.transformHttpException = exports.logErrorEnd = exports.logErrorStart = exports.getErrorCodeFromKey = exports.getStatusKeyFromStatus = exports.logContext = exports.logOutputSerialize = exports.logInputSerialize = exports.ERROR_END = exports.REQ_END = void 0;
const tslib_1 = __webpack_require__("tslib");
const consola_1 = tslib_1.__importDefault(__webpack_require__("consola"));
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const common_1 = __webpack_require__("@nestjs/common");
const lodash_1 = __webpack_require__("lodash");
const cuid2_1 = __webpack_require__("@paralleldrive/cuid2");
exports.REQ_END = '================================================ End ================================================\n';
exports.ERROR_END = '***************************************** ERROR END *****************************************';
function logInputSerialize(object) {
    setTimeout(function () {
        consola_1.default.info('request args  :');
        console.log(object);
        console.log();
    }, 0);
}
exports.logInputSerialize = logInputSerialize;
function logOutputSerialize(object) {
    setTimeout(function () {
        console.log();
        if ((object === null || object === void 0 ? void 0 : object.code) < 0) {
            consola_1.default.info('response error:');
            console.log(Object.assign(Object.assign({}, object), { message: '<...>', data: Object.assign(Object.assign({}, object.data), { stack: '<...>' }) }));
        }
        else {
            consola_1.default.info('response data :');
            const resp = JSON.stringify(object);
            if (resp.length > 1000)
                console.log(resp.slice(0, 1000) + '...');
            else
                console.log(object);
        }
        console.log(exports.REQ_END + '\n');
    }, 0);
}
exports.logOutputSerialize = logOutputSerialize;
function logContext(opts) {
    setTimeout(function () {
        const req = opts.req;
        console.log('=============================================== Start ===============================================');
        consola_1.default.info('url           :', req.url.split('?')[0]);
        consola_1.default.info('from          :', req.headers['x-from']);
    }, 0);
}
exports.logContext = logContext;
function getStatusKeyFromStatus(status) {
    var _a;
    return (_a = JSONRPC2_TO_HTTP_STATUS[status]) !== null && _a !== void 0 ? _a : 'INTERNAL_SERVER_ERROR';
}
exports.getStatusKeyFromStatus = getStatusKeyFromStatus;
function getErrorCodeFromKey(key) {
    var _a;
    return (_a = TRPC_ERROR_CODES_BY_KEY[key]) !== null && _a !== void 0 ? _a : -32603;
}
exports.getErrorCodeFromKey = getErrorCodeFromKey;
const JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
};
const JSONRPC2_TO_HTTP_STATUS = _.invert(JSONRPC2_TO_HTTP_CODE);
const TRPC_ERROR_CODES_BY_KEY = {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    PARSE_ERROR: -32700,
    /**
     * The JSON sent is not a valid Request object.
     */
    BAD_REQUEST: -32600, // 400
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001, // 401
    FORBIDDEN: -32003, // 403
    NOT_FOUND: -32004, // 404
    METHOD_NOT_SUPPORTED: -32005, // 405
    TIMEOUT: -32008, // 408
    CONFLICT: -32009, // 409
    PRECONDITION_FAILED: -32012, // 412
    PAYLOAD_TOO_LARGE: -32013, // 413
    UNPROCESSABLE_CONTENT: -32022, // 422
    TOO_MANY_REQUESTS: -32029, // 429
    CLIENT_CLOSED_REQUEST: -32099, // 499
};
function logErrorStart(opts) {
    setTimeout(function () {
        consola_1.default.error('**************************************** ERROR START ****************************************');
        consola_1.default.info(`procedure    :`, `${opts.path}.${opts.type}`);
        consola_1.default.info(`input        :`);
        console.log(opts.input);
    }, 0);
}
exports.logErrorStart = logErrorStart;
function logErrorEnd(opts) {
    setTimeout(function () {
        consola_1.default.info(`message      :`, opts.error.message);
        consola_1.default.info(`stack        :`, opts.error.stack);
        consola_1.default.error(exports.ERROR_END);
    }, 0);
}
exports.logErrorEnd = logErrorEnd;
function transformHttpException(opts, json) {
    const shape = opts.shape;
    const key = getStatusKeyFromStatus(json.status);
    const code = getErrorCodeFromKey(key);
    setTimeout(function () {
        consola_1.default.info(`cause`);
        console.log(`    status     :`, json.status);
        console.log(`    message    :`, json.message);
        console.log(`    error      :`, json.error);
        consola_1.default.info(`stack        :`, json.stack);
        consola_1.default.error(exports.ERROR_END);
    }, 0);
    return Object.assign(Object.assign({}, shape), { code, 
        // message // message 无需替代 throw new ConflictException('<message>') 第一个参数已经替代了 https://docs.nestjs.com/exception-filters#built-in-http-exceptions
        data: Object.assign(Object.assign({}, shape.data), {
            code: key, // 替换成 HttpException 对应的 短字符
            httpStatus: json.status, // 替换成 http status code
            description: {
                // 详情
                procedure: `${opts.path}.${opts.type}`,
                input: opts.input,
                error: json.error,
            },
        }) });
}
exports.transformHttpException = transformHttpException;
function errorFormatter(opts, handlers) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    let json = {
        procedure: `${opts.path}.${opts.type}`,
        input: opts.input,
        diagnosis: ((_a = opts.ctx) === null || _a === void 0 ? void 0 : _a._diagnosis) || [],
    };
    const requestId = ((_b = opts.ctx) === null || _b === void 0 ? void 0 : _b.requestId) || '';
    const tenantId = ((_d = (_c = opts.ctx) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.tenantId) || ((_f = (_e = opts.ctx) === null || _e === void 0 ? void 0 : _e.tenant) === null || _f === void 0 ? void 0 : _f.id);
    const userId = (_h = (_g = opts.ctx) === null || _g === void 0 ? void 0 : _g.user) === null || _h === void 0 ? void 0 : _h.id;
    logErrorStart(opts);
    consola_1.default.info(`tenantId     :`, tenantId);
    consola_1.default.info(`userId       :`, userId);
    if (Array.isArray((_j = opts.ctx) === null || _j === void 0 ? void 0 : _j._diagnosis) && opts.ctx._diagnosis.length > 0) {
        consola_1.default.info(`trace:`);
        const msg = opts.ctx._diagnosis
            .map((m) => {
            const indent = (0, lodash_1.repeat)(' ', 4);
            const msg = m.map(i => (typeof i === 'string' ? i : JSON.stringify(i))).join(', ');
            return indent + msg;
        })
            .join('\n');
        console.log(msg);
        console.log();
    }
    // 如果是 nestjs HttpException
    if (opts.error.cause instanceof common_1.HttpException) {
        const json2 = {
            status: opts.error.cause.getStatus(),
            message: opts.error.cause.getResponse()['message'],
            error: opts.error.cause.getResponse()['error'],
            stack: opts.error.stack,
        };
        json = Object.assign(json, json2);
        const ret = transformHttpException(opts, json2);
        if (typeof (handlers === null || handlers === void 0 ? void 0 : handlers.log) === 'function') {
            handlers.log({
                requestId,
                tenantId,
                userId,
                log: json,
            });
        }
        return ret;
    }
    else {
        logErrorEnd(opts);
        json = Object.assign(json, {
            message: opts.error.message,
            stack: opts.error.stack,
        });
        if (typeof (handlers === null || handlers === void 0 ? void 0 : handlers.log) === 'function') {
            handlers.log({
                requestId,
                tenantId,
                userId,
                log: json,
            });
        }
        return opts.shape;
    }
}
exports.errorFormatter = errorFormatter;
// object => object 是默认值
// https://github.com/trpc/trpc/blob/next/packages/client/src/internals/transformer.ts#L57
exports.transformer = {
    input: {
        // on client
        serialize: (object) => object,
        // on server -> resolver
        deserialize: (object) => {
            logInputSerialize(object);
            return object;
        },
    },
    output: {
        // on server -> client
        serialize: (object) => {
            logOutputSerialize(object);
            return object;
        },
        // on client
        deserialize: (object) => object,
    },
};
function createContext(opts) {
    logContext(opts);
    const requestId = (0, cuid2_1.createId)();
    opts.res.setHeader('x-request-id', requestId);
    consola_1.default.info('x-request-id  :', requestId);
    return {
        req: opts.req,
        res: opts.res,
        requestId,
        _diagnosis: [],
        user: undefined,
        tenant: undefined,
    };
}
exports.createContext = createContext;
/**
 * 一个简单的基于 trpc ctx 的 诊断工具 报错之后会记录手动埋的路径，方便排查错误
 */
function diag(ctx, ...message) {
    (ctx === null || ctx === void 0 ? void 0 : ctx._diagnosis) != null && ctx._diagnosis.push(message);
}
exports.diag = diag;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/zods.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/zods-wms.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/zod-utils.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared-types/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModelSymbol = exports.GridModelSymbol = exports.WechatpayNodeV3FactorySymbol = exports.WechatpayNodeV3Symbol = exports.MenuServiceSymbol = exports.DynamicTableDefServiceSymbol = exports.DynamicTableDataServiceSymbol = exports.WechatOAuthSymbol = exports.SmsClientSymbol = exports.COSSymbol = exports.K3CloudIdentifyInfoSymbol = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.ENVSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = exports.FlowdaGatewayTrpcClientSymbol = exports.FlowdaTrpcClientSymbol = exports.DynamicTableSchemaTransformerSymbol = exports.SchemaServiceSymbol = exports.DataServiceSymbol = exports.PrismaUtilsSymbol = exports.SchemaTransformerSymbol = exports.PrismaSchemaServiceSymbol = void 0;
exports.PrismaSchemaServiceSymbol = Symbol.for('PrismaSchemaService');
exports.SchemaTransformerSymbol = Symbol.for('SchemaTransformer');
exports.PrismaUtilsSymbol = Symbol.for('PrismaUtils');
exports.DataServiceSymbol = Symbol.for('DataService');
exports.SchemaServiceSymbol = Symbol.for('SchemaService');
exports.DynamicTableSchemaTransformerSymbol = Symbol.for('DynamicTableSchemaTransformer');
exports.FlowdaTrpcClientSymbol = Symbol.for('FlowdaTrpcClient');
exports.FlowdaGatewayTrpcClientSymbol = Symbol.for('FlowdaGatewayTrpcClient');
exports.PrismaClientSymbol = Symbol('PrismaClient');
/**
 * getServices 方法会将 inversify module 转换成 nestjs module，这样 nestjs controller 就可以使用了
 * 所以，注意：如果不需要给 controller 使用，则不需要 bind
 */
exports.ServiceSymbol = Symbol('Service');
exports.APISymbol = Symbol('API');
exports.URLSymbol = Symbol.for('URL');
exports.ENVSymbol = Symbol.for('ENV');
exports.PrismaZodSchemaSymbol = Symbol.for('PrismaZodSchema');
exports.CustomZodSchemaSymbol = Symbol.for('CustomZodSchema');
exports.K3CloudIdentifyInfoSymbol = Symbol.for('K3CloudIdentifyInfo');
exports.COSSymbol = Symbol('COS');
exports.SmsClientSymbol = Symbol.for('SmsClient');
exports.WechatOAuthSymbol = Symbol.for('WechatOAuth');
exports.DynamicTableDataServiceSymbol = Symbol.for('DynamicTableDataService');
exports.DynamicTableDefServiceSymbol = Symbol.for('DynamicTableDefService');
exports.MenuServiceSymbol = Symbol.for('MenuService');
exports.WechatpayNodeV3Symbol = Symbol.for('WechatpayNodeV3Symbol');
exports.WechatpayNodeV3FactorySymbol = Symbol.for('WechatpayNodeV3FactorySymbol');
exports.GridModelSymbol = Symbol.for('GridModel');
exports.LoginModelSymbol = Symbol.for('LoginModel');


/***/ }),

/***/ "../../libs/flowda-shared-types/src/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serial_Max = exports.Serial_Min = exports.EPlan = void 0;
var EPlan;
(function (EPlan) {
    EPlan[EPlan["Free"] = 1] = "Free";
    EPlan[EPlan["VIP"] = 2] = "VIP";
})(EPlan || (exports.EPlan = EPlan = {}));
exports.Serial_Min = 10001;
exports.Serial_Max = 99999;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/zod-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createZodDto = void 0;
function createZodDto(schema) {
    class AugmentedZodDto {
        static create(input) {
            return this.schema.parse(input);
        }
    }
    AugmentedZodDto.isZodDto = true;
    AugmentedZodDto.schema = schema;
    return AugmentedZodDto;
}
exports.createZodDto = createZodDto;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/zods-wms.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getQmsStatusByDocumentCodeType1Res = exports.getTodoPreReceiptInventoryFormRes = exports.sapGetQualityAssurance = exports.todo = exports.oaRequestMaxStockApprove = exports.sapCheckMinMaxRes = exports.sapCheckMinMax = exports.oaNotPass = exports.oaRequestMaterialNoExceedRequirement = exports.apsCheckMaterialRequirement = exports.srmGetDeliverDocListByCodeOkRes = exports.srmGetDeliverDocListByCode = exports.materialCode = exports.notOkResponse = exports.okResponse = exports.callbackNoticePlasticIntoStockInputSchema = exports.wcsNoticeProductOutStockSchema = exports.wcsNoticeProduceReturnSchema = exports.wcsNoticePlasticIntoStockSchema = exports.wcsNoticeProductIntoStockSchema = exports.wcsNoticeMaterialSendSchema = exports.wmsMouldFinishSchema = exports.wmsMouldGetMouldTypeOutput2Schema = exports.wmsMouldGetMouldTypeOutput1Schema = exports.wmsMouldGetMouldTypeSchema = exports.wcsNoticeMouldOutStockSchema = exports.wcsNoticeMouldIntoStockSchema = exports.wmsSaleOutWarehouseSchema = exports.wmsPurchaseReturnOutWarehouseSchema = exports.wmsProduceOutWarehouseSchema = exports.wmsOtherOutWarehouseSchema = exports.wmsOEMOutWarehouseSchema = exports.wmsOEMAddOutWarehouseSchema = exports.wmsUpdateWarehousingAuditToErpSchema = exports.wmsPRDFeedMtrlSchema = exports.wmsSubReturnWarehousingSchema = exports.wmsPurchaseWarehousingSchema = exports.wmsProduceWarehousingSchema = exports.wmsProduceReturnWarehousingSchema = exports.wmsOtherWarehousingSchema = exports.wmsOEMWarehousingSchema = exports.wmsOEMReturnSchema = exports.wmsWarehousingItemSchema = exports.wmsGoodsTypeSchema = exports.wmsSupplierSchema = exports.wmsStockSchema = exports.wmsGoodsUtilSchema = exports.wmsGoodsMslSchema = exports.wmsGoodsSchema = exports.wmsCustomerSchema = void 0;
exports.getMaterialReturnRequestRes = exports.getQmsStatusByDocumentCodeType4Res = exports.getQmsStatusByDocumentCodeType3Res = exports.getQmsStatusByDocumentCodeType2Res = void 0;
const schema_1 = __webpack_require__("@flowda/schema");
const zod_1 = __webpack_require__("zod");
(0, schema_1.extendZod)(zod_1.z);
exports.wmsCustomerSchema = zod_1.z.object({
    customerCode: zod_1.z.string().openapi({
        description: '客户编号',
    }),
    customerName: zod_1.z.string().openapi({
        description: '客户名称',
    }),
    masterId: zod_1.z.string().openapi({
        description: '货主id',
    }),
    contact: zod_1.z.string().openapi({
        description: '联系人',
    }),
    contactInfo: zod_1.z.string().openapi({
        description: '联系方式',
    }),
    status: zod_1.z.union([zod_1.z.literal(1), zod_1.z.literal(9)]).openapi({
        description: '状态1、启用 0、禁用',
    }),
    organizationId: zod_1.z.string().openapi({
        description: '组织Id',
    }),
});
exports.wmsGoodsSchema = zod_1.z.object({
    goodsCode: zod_1.z.string().openapi({
        description: '货物编号',
    }),
    goodsName: zod_1.z.string().openapi({
        description: '货物名称',
    }),
    goodsTypeId: zod_1.z.string().openapi({
        description: '货物类型id',
    }),
    goodsAttribute: zod_1.z.string().openapi({
        description: '货物属性',
    }),
    masterId: zod_1.z.string().openapi({
        description: '货主信息',
    }),
    specification: zod_1.z.string().openapi({
        description: '规格型号',
    }),
    measurementUnit: zod_1.z.string().openapi({
        description: '计量单位',
    }),
    goodsPackageId: zod_1.z.string().openapi({
        description: '包装规格id',
    }),
    batchId: zod_1.z.string().openapi({
        description: '批次id',
    }),
    goodsInspectMode: zod_1.z.number().openapi({
        description: '货物检验方式1、全检2、抽检3、免检',
    }),
    length: zod_1.z.number().openapi({
        description: '长',
    }),
    width: zod_1.z.number().openapi({
        description: '宽',
    }),
    high: zod_1.z.number().openapi({
        description: '高',
    }),
    volume: zod_1.z.number().openapi({
        description: '体积',
    }),
    grossWeight: zod_1.z.number().openapi({
        description: '毛重',
    }),
    netWeight: zod_1.z.number().openapi({
        description: '净重',
    }),
    minStock: zod_1.z.number().openapi({
        description: '最低库存',
    }),
    maxStock: zod_1.z.number().openapi({
        description: '最高库存',
    }),
    maxStorageTime: zod_1.z.number().openapi({
        description: '最长储存时间',
    }),
    isAuto: zod_1.z.number().openapi({
        description: '是否自动化1、是 0、否',
    }),
    choppedQuantity: zod_1.z.number().openapi({
        description: '剁型每层数量',
    }),
    choppedLayer: zod_1.z.number().openapi({
        description: '剁型层数',
    }),
    goodsPicture: zod_1.z.string().openapi({
        description: '货物图片',
    }),
    fSeitBrand: zod_1.z.string().openapi({
        description: '品牌',
    }),
    fSeitCasePackage: zod_1.z.string().openapi({
        description: '封装',
    }),
    fSeitMsl: zod_1.z.string().openapi({
        description: 'MSL',
    }),
    fRefCost: zod_1.z.string().openapi({
        description: '单位成本',
    }),
    fSeitMpn: zod_1.z.string().openapi({
        description: 'MPN',
    }),
    status: zod_1.z.number().openapi({
        description: '状态1、启用 0、禁用',
    }),
    organizationId: zod_1.z.number().openapi({
        description: '组织id',
    }),
});
exports.wmsGoodsMslSchema = zod_1.z.object({
    mslCode: zod_1.z.string().openapi({ description: 'MSL' }),
});
exports.wmsGoodsUtilSchema = zod_1.z.object({
    unitId: zod_1.z.string().openapi({ description: '计量单位id' }),
    name: zod_1.z.string().openapi({ description: '计量单位名称' }),
    code: zod_1.z.string().openapi({ description: '计量单位code' }),
});
exports.wmsStockSchema = zod_1.z.object({
    id: zod_1.z.string().openapi({ description: 'erp仓库id' }),
    code: zod_1.z.string().openapi({ description: 'erp仓库编码' }),
});
exports.wmsSupplierSchema = zod_1.z.object({
    supplierCode: zod_1.z.string().openapi({ description: '供应商编号' }),
    supplierName: zod_1.z.string().openapi({ description: '供应商名称' }),
    masterId: zod_1.z.string().openapi({ description: '货主id' }),
    contact: zod_1.z.string().openapi({ description: '联系人' }),
    contactInfo: zod_1.z.string().openapi({ description: '联系方式' }),
    remark: zod_1.z.string().openapi({ description: '备注' }),
    status: zod_1.z.number().openapi({ description: '状态1、启用 0、禁用' }),
    organizationId: zod_1.z.string().openapi({ description: '组织Id' }),
});
exports.wmsGoodsTypeSchema = zod_1.z.object({
    goodsTypeCode: zod_1.z.string().openapi({ description: '货物类型编号' }),
    goodsTypeName: zod_1.z.string().openapi({ description: '货物类型名称' }),
    status: zod_1.z.number().openapi({ description: '状态1、启用 0、禁用' }),
    organizationId: zod_1.z.string().openapi({ description: '组织Id' }),
});
exports.wmsWarehousingItemSchema = zod_1.z.object({
    FBillNo: zod_1.z.string().openapi({ description: '单据号' }),
    FDate: zod_1.z.string().openapi({ description: '入库日期' }),
    FDocumentStatus: zod_1.z.string().openapi({ description: '单据状态 Z：暂存，A：创建，B：审核，C：已审核，D：重新审核' }),
    FMaterialId: zod_1.z.string().openapi({ description: '物料编码' }),
    FQty: zod_1.z.string().openapi({ description: '数量' }),
    FLot: zod_1.z.string().openapi({ description: '批次号' }),
    FStockId: zod_1.z.string().openapi({ description: '仓库编码' }),
});
exports.wmsOEMReturnSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsOEMWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsOtherWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FSupplierId: zod_1.z.string().openapi({ description: '供应商编码' }),
}));
exports.wmsProduceReturnWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FAPPQty: zod_1.z.string().openapi({ description: '申请数量' }),
    FQty: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsProduceWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FMustQty: zod_1.z.string().openapi({ description: '应收数量' }),
    FRealQty: zod_1.z.string().openapi({ description: '实收数量' }),
}));
exports.wmsPurchaseWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FMustQty: zod_1.z.string().openapi({ description: '应收数量' }),
    FRealQty: zod_1.z.string().openapi({ description: '实收数量' }),
    FSupplierId: zod_1.z.string().openapi({ description: '供应商编码' }),
}));
exports.wmsSubReturnWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FAPPQty: zod_1.z.string().openapi({ description: '申请数量' }),
    FQty: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsPRDFeedMtrlSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsUpdateWarehousingAuditToErpSchema = zod_1.z.object({
    orderType: zod_1.z.number().openapi({ description: '单据类型' }),
    sourceOrderCode: zod_1.z.string().openapi({ description: '来源单据' }),
});
exports.wmsOEMAddOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsOEMOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsOtherOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsProduceOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsPurchaseReturnOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FRMREALQTY: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsSaleOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FCustomerID: zod_1.z.string().openapi({ description: '客户编码' }),
    FRealQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wcsNoticeMouldIntoStockSchema = zod_1.z
    .object({
    noticeId: zod_1.z.number().openapi({ description: '单据号', example: 'XSCK00001' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码', example: 'containerCode' }),
    })),
})
    .openapi({
    title: 'wcsNoticeMouldIntoStockSchema',
    example: { noticeId: '单据号' },
});
exports.wcsNoticeMouldOutStockSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码' }),
        startLoc: zod_1.z.string().optional().openapi({ description: '模具源库位' }),
    })),
});
exports.wmsMouldGetMouldTypeSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    containerCode: zod_1.z.string().openapi({ description: '单个箱码' }),
    loc: zod_1.z.string().optional().openapi({ description: '单个箱库位' }),
    type: zod_1.z.union([zod_1.z.literal('类型1'), zod_1.z.literal('类型2'), zod_1.z.literal('类型3')]),
});
exports.wmsMouldGetMouldTypeOutput1Schema = zod_1.z.object({
    success: zod_1.z.boolean().openapi({ example: 'true' }),
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    containerCode: zod_1.z.string().openapi({ description: '单个箱码' }),
    startLoc: zod_1.z.string().optional().openapi({ description: '箱初始库位' }),
    type: zod_1.z.union([zod_1.z.literal('类型1'), zod_1.z.literal('类型2'), zod_1.z.literal('类型3')]),
    endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
});
exports.wmsMouldGetMouldTypeOutput2Schema = zod_1.z.object({
    success: zod_1.z.boolean().openapi({ example: 'false' }),
    message: zod_1.z.string().openapi({ description: '失败原因' }),
});
exports.wmsMouldFinishSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    containerCode: zod_1.z.string().openapi({ description: '单个箱码' }),
    startLoc: zod_1.z.string().optional().openapi({ description: '箱初始库位' }),
    endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    type: zod_1.z.union([zod_1.z.literal('类型1'), zod_1.z.literal('类型2'), zod_1.z.literal('类型3')]),
});
exports.wcsNoticeMaterialSendSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码' }),
        startLoc: zod_1.z.string().optional().openapi({ description: '箱初始库位' }),
        endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    })),
});
exports.wcsNoticeProductIntoStockSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码' }),
        endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    })),
});
exports.wcsNoticePlasticIntoStockSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    containerCode: zod_1.z.string().openapi({ description: '箱码' }),
    endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    instructionType: zod_1.z.union([
        zod_1.z.literal('上架指令1'),
        zod_1.z.literal('上架指令2'),
        zod_1.z.literal('上架指令3'),
        zod_1.z.literal('上架指令4'),
    ]),
});
exports.wcsNoticeProduceReturnSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码' }),
        endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    })),
});
exports.wcsNoticeProductOutStockSchema = zod_1.z.object({
    noticeId: zod_1.z.number().openapi({ description: '单据号' }),
    goodsList: zod_1.z.array(zod_1.z.object({
        containerCode: zod_1.z.string().openapi({ description: '箱码' }),
        startLoc: zod_1.z.string().optional().openapi({ description: '箱初始库位' }),
        endLoc: zod_1.z.string().optional().openapi({ description: '箱目标库位' }),
    })),
});
exports.callbackNoticePlasticIntoStockInputSchema = zod_1.z.object({
    containerCode: zod_1.z.string().openapi({ description: '箱码' }),
});
exports.okResponse = zod_1.z
    .object({
    success: zod_1.z.literal(true),
    message: zod_1.z.string(),
})
    .openapi({
    title: 'okResponse',
});
exports.notOkResponse = zod_1.z
    .object({
    success: zod_1.z.literal(false),
    message: zod_1.z.string(),
})
    .openapi({
    title: 'notOkResponse',
});
exports.materialCode = zod_1.z.string().openapi({ example: 'todo', description: '物料编码' });
const documentCode = zod_1.z.string().openapi({ example: '', description: '单据号' });
exports.srmGetDeliverDocListByCode = zod_1.z
    .object({
    materialCode: exports.materialCode,
})
    .openapi({ title: 'srmGetDeliverDocListByCode', description: '物料编码从二维码提取' });
exports.srmGetDeliverDocListByCodeOkRes = zod_1.z
    .object({
    documentCode: zod_1.z.string().openapi({
        example: 'todo',
        description: '送货单号',
    }),
    materialList: zod_1.z.array(zod_1.z.object({
        materialCode: zod_1.z.string().openapi({
            description: '物料编码',
            example: 'todo',
        }),
        type: zod_1.z.string().openapi({
            description: '物料类型（区分 VMI）',
            example: 'todo',
        }),
    })),
})
    .openapi({ title: 'srmGetDeliverDocListByCodeOkRes', description: 'todo' });
exports.apsCheckMaterialRequirement = zod_1.z
    .array(zod_1.z.object({
    materialCode: exports.materialCode,
}))
    .openapi({ title: 'srmCheckMaterialRequirement', description: '支持批量获取，覆盖集码场景' });
exports.oaRequestMaterialNoExceedRequirement = zod_1.z
    .object({
    note: zod_1.z.string().openapi({ example: 'todo', description: '备注' }),
})
    .openapi({
    title: 'oaRequestMaterialNoExceedRequirement',
});
exports.oaNotPass = zod_1.z
    .object({
    reason: zod_1.z.string().openapi({
        example: 'todo',
        description: '不通过原因',
    }),
})
    .openapi({
    title: 'oaNotPass',
});
exports.sapCheckMinMax = zod_1.z
    .array(zod_1.z.object({
    materialCode: exports.materialCode,
    qty: zod_1.z.number().openapi({ example: 12, description: '物料数量' }),
}))
    .openapi({
    title: 'srmCheckMinMax',
});
exports.sapCheckMinMaxRes = zod_1.z
    .array(zod_1.z.object({
    materialCode: exports.materialCode,
    qty: zod_1.z.number().openapi({ example: 12, description: '当前库存量' }),
    max: zod_1.z.number().openapi({ example: 20, description: '最大库存量' }),
}))
    .openapi({
    title: 'sapCheckMinMaxRes',
});
exports.oaRequestMaxStockApprove = zod_1.z
    .object({
    note: zod_1.z.string().openapi({ example: 'todo', description: '备注' }),
})
    .openapi({
    title: 'oaRequestMaxStockApprove',
});
exports.todo = zod_1.z
    .object({
    todo: zod_1.z.string().openapi({ example: '', description: 'todo' }),
})
    .openapi({ title: 'todo' });
exports.sapGetQualityAssurance = zod_1.z
    .array(zod_1.z.object({
    materialCode: exports.materialCode,
}))
    .openapi({
    title: 'sapGetQualityAssurance',
    description: '支持批量',
});
exports.getTodoPreReceiptInventoryFormRes = zod_1.z
    .array(zod_1.z.object({
    documentCode: zod_1.z.string().openapi({ description: '预收单号', example: 'todo' }),
    materialList: zod_1.z.array(zod_1.z.object({
        materialCode: exports.materialCode,
        note: zod_1.z.string().openapi({ description: '距离上次送货6个月以上' }),
    })),
}))
    .openapi({
    title: 'getTodoPreReceiptInventoryFormRes',
});
exports.getQmsStatusByDocumentCodeType1Res = exports.todo.openapi({
    description: '退库',
    title: 'getQmsStatusByDocumentCodeType1Res',
});
exports.getQmsStatusByDocumentCodeType2Res = exports.todo.openapi({
    description: '损耗',
    title: 'getQmsStatusByDocumentCodeType2Res',
});
exports.getQmsStatusByDocumentCodeType3Res = exports.todo.openapi({
    description: '合格',
    title: 'getQmsStatusByDocumentCodeType3Res',
});
exports.getQmsStatusByDocumentCodeType4Res = exports.todo.openapi({
    description: '让步接收',
    title: 'getQmsStatusByDocumentCodeType4Res',
});
exports.getMaterialReturnRequestRes = zod_1.z
    .object({
    documentCode: documentCode,
    materialList: zod_1.z.array(zod_1.z.object({
        materialCode: exports.materialCode,
        isPlastic: zod_1.z.string().openapi({ description: '是否是塑胶件' }),
    })),
})
    .openapi({
    title: 'getMaterialReturnRequestRes',
    description: '包括工单退料和不合格品退料',
});


/***/ }),

/***/ "../../libs/flowda-shared-types/src/zods.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkProductCreateManyItemDto = exports.productCreateManyItemSchema = exports.ResetPasswordDto = exports.resetPasswordWithRecoveryCodeTenantJwtSchemaDto = exports.resetPasswordWithRecoveryCodeSchemaDto = exports.resetPasswordWithRecoveryCodeSchema = exports.GenerateRecoveryCodeDto = exports.generateRecoveryCodeTenantJwtSchemaDto = exports.generateRecoveryCodeSchemaDto = exports.generateRecoveryCodeSchema = exports.wxValidateUserTenantJwtPayloadSchemaDto = exports.wxValidateUserSchema = exports.wxGetUserRes = exports.wxGetAccessTokenRes = exports.customerSignupTenantJwtPayloadSchemaDto = exports.customerSignupSchemaDto = exports.customerSignupSchema = exports.customerPreSignupTenantJwtPayloadSchemaDto = exports.customerPreSignupSchemaDto = exports.customerPreSignupSchema = exports.userJwtPayloadSchemaDto = exports.userJwtPayloadSchema = exports.tenantJwtPayloadSchema = exports.verifyMobileSchemaDto = exports.verifyMobileSchema = exports.resetPasswordSchemaDto = exports.resetPasswordSchema = exports.RegisterByUnionIdSchemaDto = exports.registerByUnionIdSchema = exports.FindByUnionIdAndTenantIdSchemaDto = exports.findByUnionIdAndTenantIdSchema = exports.GetTenantByNameSchemaDto = exports.getTenantByNameSchema = exports.validateSchemaDto = exports.validateSchema = exports.AccountExistsSchemaDto = exports.accountExistsSchema = exports.RegisterDto = exports.registerSchema = exports.prismaFilterSchema = exports.agSortSchema = exports.agFilterSchema = exports.agFilter2Schema = exports.agFilter1Schema = exports.agFilterInner2Schema = exports.agFilterInnerSchema = exports.resourceSchema = exports.resourceColumnSchema = exports.resourceAssociationSchema = exports.selectOptionSchema = void 0;
exports.deploySiteToCosSchema = exports.gatewayTenantNameSchema = exports.menuItemSchemaDto = exports.menuItemSchema = exports.baseMenuItemSchema = exports.getMenuSchemaDto = exports.getMenuSchema = exports.loginSchemaDto = exports.loginSchema = exports.ctxUserSchemaDto = exports.ctxUserSchema = exports.ctxTenantSchemaDto = exports.ctxTenantSchema = exports.refreshTokenSchemaDto = exports.refreshTokenSchema = exports.sendSmsVerifyCodeSchemaDto = exports.sendSmsVerifyCodeSchema = exports.kanzhunDataSchema = exports.kanzhunItemSchemaDto = exports.kanzhunItemSchema = exports.kanzhunDetailSchemaDto = exports.kanzhunDetailSchema = exports.customerExtendDataSchemaDto = exports.customerExtendDataSchema = exports._resetTenantPasswordSchemaDto = exports._resetTenantPasswordSchema = exports.validateByEmailSchemaDto = exports.validateByEmailSchema = exports.validateTenantSchemaDto = exports.validateTenantSchema = exports.appCreateV4SchemaDto = exports.appCreateV4Schema = exports.createQuickOrderTenantJWTPayloadSchemaDto = exports.SdkCreateQuickOrderDto = exports.createQuickOrderSchema = exports.SdkCreateOrderInJSAPIDto = exports.createOrderJSAPISchema = exports.transactionsNativeSchemaDto = exports.transactionsNativeSchema = exports.createOrderUserJwtPayloadSchemaDto = exports.SdkCreateOrderDto = exports.createOrderSchema = exports.amountUpdateUserJwtPayloadSchemaDto = exports.amountUpdateSchemaDto = exports.amountUpdateSchema = exports.fwhLoginTenantJwtPayloadSchemaDto = exports.fwhLoginSchema = exports.wxPayQuerySchema = exports.updateFreeProfileSchema = exports.updatePaidProfileSchema = void 0;
exports.deploySiteToCosSchemaDto = void 0;
const zod_1 = __webpack_require__("zod");
const zod_utils_1 = __webpack_require__("../../libs/flowda-shared-types/src/zod-utils.ts");
const schema_1 = __webpack_require__("@flowda/schema");
(0, schema_1.extendZod)(zod_1.z);
exports.selectOptionSchema = zod_1.z.object({
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    label: zod_1.z.string(),
});
exports.resourceAssociationSchema = zod_1.z.object({
    foreign_key: zod_1.z.string(),
    model_name: zod_1.z.string(),
    primary_key: zod_1.z.string(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    display_name: zod_1.z.string(),
    schema_name: zod_1.z.string(),
});
exports.resourceColumnSchema = zod_1.z.object({
    name: zod_1.z.string(),
    access_type: zod_1.z.enum(['read_only']).optional(),
    column_type: zod_1.z.enum(['reference', 'string', 'tag', 'integer', 'datetime', 'textarea', 'boolean']),
    prisma: zod_1.z.boolean().optional(),
    format: zod_1.z
        .object({
        select_options: exports.selectOptionSchema.array(),
    })
        .optional(),
    reference: zod_1.z.object({
        model_name: zod_1.z.string(),
        primary_key: zod_1.z.string(),
        display_name: zod_1.z.string(),
        display_column: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), zod_1.z.undefined()]),
        'x-relationField': zod_1.z.string(),
        'x-onSoftDelete': zod_1.z.string(),
        'x-unique': zod_1.z.boolean().optional(),
    }),
    display_name: zod_1.z.string().optional(),
    validators: zod_1.z.array(zod_1.z.union([
        zod_1.z.object({
            required: zod_1.z.boolean(),
        }),
        zod_1.z.object({
            format: zod_1.z.string(),
            message: zod_1.z.string(),
        }),
    ])),
});
exports.resourceSchema = zod_1.z.object({
    namespace: zod_1.z.string().optional(),
    prisma: zod_1.z.boolean().optional(),
    is_dynamic: zod_1.z.boolean().optional(),
    schema_name: zod_1.z.string(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    primary_key: zod_1.z.string(),
    'x-legacy': zod_1.z.any(),
    display_column: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), zod_1.z.undefined()]),
    display_name: zod_1.z.string().nullable(),
    display_primary_key: zod_1.z.boolean(),
    searchable_columns: zod_1.z.array(zod_1.z.string()).optional(),
    columns: exports.resourceColumnSchema.array(),
    associations: exports.resourceAssociationSchema.array(),
    __jsonschema: zod_1.z.any(),
});
exports.agFilterInnerSchema = zod_1.z.object({
    filterType: zod_1.z.enum(['text', 'number']),
    // filterType: z.string(),
    type: zod_1.z.enum(['contains', 'equals']),
    // type: z.string(),
    filter: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.agFilterInner2Schema = zod_1.z.object({
    filterType: zod_1.z.enum(['text']),
    // filterType: z.string(),
    operator: zod_1.z.enum(['OR', 'AND']),
    // operator: z.string(),
    conditions: zod_1.z.array(exports.agFilterInnerSchema),
});
exports.agFilter1Schema = zod_1.z.record(exports.agFilterInnerSchema);
exports.agFilter2Schema = zod_1.z.record(exports.agFilterInner2Schema);
exports.agFilterSchema = zod_1.z
    .record(exports.agFilterInnerSchema.or(exports.agFilterInner2Schema))
    .or(zod_1.z.object({ _ref: zod_1.z.string().optional() }));
exports.agSortSchema = zod_1.z.array(zod_1.z.object({
    colId: zod_1.z.string(),
    sort: zod_1.z.enum(['asc', 'desc']),
}));
exports.prismaFilterSchema = zod_1.z.object({
    OR: zod_1.z.array(zod_1.z.record(zod_1.z.record(zod_1.z.enum(['contains']), zod_1.z.string()))),
});
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterDto extends (0, zod_utils_1.createZodDto)(exports.registerSchema) {
}
exports.RegisterDto = RegisterDto;
exports.accountExistsSchema = zod_1.z.object({
    username: zod_1.z.string(),
    tenantName: zod_1.z.string(),
});
class AccountExistsSchemaDto extends (0, zod_utils_1.createZodDto)(exports.accountExistsSchema) {
}
exports.AccountExistsSchemaDto = AccountExistsSchemaDto;
exports.validateSchema = zod_1.z.object({
    tenantId: zod_1.z.number().optional(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
class validateSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateSchema) {
}
exports.validateSchemaDto = validateSchemaDto;
exports.getTenantByNameSchema = zod_1.z.object({
    tenantName: zod_1.z.string(),
});
class GetTenantByNameSchemaDto extends (0, zod_utils_1.createZodDto)(exports.getTenantByNameSchema) {
}
exports.GetTenantByNameSchemaDto = GetTenantByNameSchemaDto;
exports.findByUnionIdAndTenantIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class FindByUnionIdAndTenantIdSchemaDto extends (0, zod_utils_1.createZodDto)(exports.findByUnionIdAndTenantIdSchema) {
}
exports.FindByUnionIdAndTenantIdSchemaDto = FindByUnionIdAndTenantIdSchemaDto;
exports.registerByUnionIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterByUnionIdSchemaDto extends (0, zod_utils_1.createZodDto)(exports.registerByUnionIdSchema) {
}
exports.RegisterByUnionIdSchemaDto = RegisterByUnionIdSchemaDto;
exports.resetPasswordSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    tenantId: zod_1.z.number(),
    password: zod_1.z.string(),
});
class resetPasswordSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordSchema) {
}
exports.resetPasswordSchemaDto = resetPasswordSchemaDto;
exports.verifyMobileSchema = zod_1.z.object({
    uid: zod_1.z.number(),
    tid: zod_1.z.number(),
    mobile: zod_1.z.string(),
    code: zod_1.z.string(),
    slug: zod_1.z.string(),
});
class verifyMobileSchemaDto extends (0, zod_utils_1.createZodDto)(exports.verifyMobileSchema) {
}
exports.verifyMobileSchemaDto = verifyMobileSchemaDto;
exports.tenantJwtPayloadSchema = zod_1.z.object({
    tid: zod_1.z.number(),
});
exports.userJwtPayloadSchema = zod_1.z.object({
    uid: zod_1.z.number(),
    tid: zod_1.z.number(),
});
class userJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.userJwtPayloadSchema) {
}
exports.userJwtPayloadSchemaDto = userJwtPayloadSchemaDto;
exports.customerPreSignupSchema = zod_1.z.object({
    email: zod_1.z.string(),
});
class customerPreSignupSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerPreSignupSchema) {
}
exports.customerPreSignupSchemaDto = customerPreSignupSchemaDto;
class customerPreSignupTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerPreSignupSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.customerPreSignupTenantJwtPayloadSchemaDto = customerPreSignupTenantJwtPayloadSchemaDto;
exports.customerSignupSchema = zod_1.z.object({
    email: zod_1.z.string(),
    verifyCode: zod_1.z.string(),
    password: zod_1.z.string(),
});
class customerSignupSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerSignupSchema) {
}
exports.customerSignupSchemaDto = customerSignupSchemaDto;
class customerSignupTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerSignupSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.customerSignupTenantJwtPayloadSchemaDto = customerSignupTenantJwtPayloadSchemaDto;
exports.wxGetAccessTokenRes = zod_1.z.object({
    access_token: zod_1.z.string(),
    expires_in: zod_1.z.string(),
    refresh_token: zod_1.z.string(),
    openid: zod_1.z.string(),
    scope: zod_1.z.string(),
    unionid: zod_1.z.string(),
    create_at: zod_1.z.string(),
});
exports.wxGetUserRes = zod_1.z.object({
    openid: zod_1.z.string(),
    nickname: zod_1.z.string(),
    sex: zod_1.z.number(),
    headimgurl: zod_1.z.string(),
    unionid: zod_1.z.string(),
    language: zod_1.z.string(),
    city: zod_1.z.string(),
    province: zod_1.z.string(),
    country: zod_1.z.string(),
    privilege: zod_1.z.array(zod_1.z.string()),
});
exports.wxValidateUserSchema = zod_1.z.object({
    code: zod_1.z.string(),
});
class wxValidateUserTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.wxValidateUserSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.wxValidateUserTenantJwtPayloadSchemaDto = wxValidateUserTenantJwtPayloadSchemaDto;
exports.generateRecoveryCodeSchema = zod_1.z.object({
    email: zod_1.z.string(),
});
class generateRecoveryCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema) {
}
exports.generateRecoveryCodeSchemaDto = generateRecoveryCodeSchemaDto;
class generateRecoveryCodeTenantJwtSchemaDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.generateRecoveryCodeTenantJwtSchemaDto = generateRecoveryCodeTenantJwtSchemaDto;
class GenerateRecoveryCodeDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema.merge(zod_1.z.object({
    appId: zod_1.z.string(),
}))) {
}
exports.GenerateRecoveryCodeDto = GenerateRecoveryCodeDto;
exports.resetPasswordWithRecoveryCodeSchema = zod_1.z.object({
    recoveryCode: zod_1.z.string(),
    password: zod_1.z.string(),
});
class resetPasswordWithRecoveryCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema) {
}
exports.resetPasswordWithRecoveryCodeSchemaDto = resetPasswordWithRecoveryCodeSchemaDto;
class resetPasswordWithRecoveryCodeTenantJwtSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.resetPasswordWithRecoveryCodeTenantJwtSchemaDto = resetPasswordWithRecoveryCodeTenantJwtSchemaDto;
class ResetPasswordDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema.merge(zod_1.z.object({
    appId: zod_1.z.string(),
}))) {
}
exports.ResetPasswordDto = ResetPasswordDto;
exports.productCreateManyItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    productType: zod_1.z.string(),
    amount: zod_1.z.number().optional(),
    plan: zod_1.z.number().nullable().optional(),
    extendedDescriptionData: zod_1.z.any().optional(),
    restricted: zod_1.z.number().nullable().optional(),
    fileSize: zod_1.z.string().nullable().optional(),
    storeDuration: zod_1.z.number().nullable().optional(),
    hasAds: zod_1.z.string().nullable().optional(),
    tecSupport: zod_1.z.string().nullable().optional(),
});
class SdkProductCreateManyItemDto extends (0, zod_utils_1.createZodDto)(exports.productCreateManyItemSchema) {
}
exports.SdkProductCreateManyItemDto = SdkProductCreateManyItemDto;
exports.updatePaidProfileSchema = zod_1.z.object({
    product: zod_1.z.object({
        productType: zod_1.z.any(),
        plan: zod_1.z.number().nullable(),
        amount: zod_1.z.number().nullable(),
        validityPeriod: zod_1.z.number().nullable(),
    }),
});
exports.updateFreeProfileSchema = zod_1.z.object({
    product: zod_1.z.object({
        productType: zod_1.z.any(),
        plan: zod_1.z.number().nullable(),
        amount: zod_1.z.number().nullable(),
        validityPeriod: zod_1.z.number().nullable(),
    }),
});
exports.wxPayQuerySchema = zod_1.z.object({
    status: zod_1.z.number(),
    trade_state: zod_1.z.string(),
    transaction_id: zod_1.z.string(),
    payer: zod_1.z.object({
        openid: zod_1.z.string(),
    }),
});
exports.fwhLoginSchema = zod_1.z.object({
    code: zod_1.z.string(),
});
class fwhLoginTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.fwhLoginSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.fwhLoginTenantJwtPayloadSchemaDto = fwhLoginTenantJwtPayloadSchemaDto;
exports.amountUpdateSchema = zod_1.z.object({
    action: zod_1.z.enum(['decrement']).optional(),
    count: zod_1.z.number().optional(),
});
class amountUpdateSchemaDto extends (0, zod_utils_1.createZodDto)(exports.amountUpdateSchema) {
}
exports.amountUpdateSchemaDto = amountUpdateSchemaDto;
class amountUpdateUserJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.amountUpdateSchema.merge(exports.userJwtPayloadSchema)) {
}
exports.amountUpdateUserJwtPayloadSchemaDto = amountUpdateUserJwtPayloadSchemaDto;
exports.createOrderSchema = zod_1.z.object({
    productId: zod_1.z.string(),
    openid: zod_1.z.string().optional(),
});
class SdkCreateOrderDto extends (0, zod_utils_1.createZodDto)(exports.createOrderSchema) {
}
exports.SdkCreateOrderDto = SdkCreateOrderDto;
class createOrderUserJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.createOrderSchema.merge(exports.userJwtPayloadSchema)) {
}
exports.createOrderUserJwtPayloadSchemaDto = createOrderUserJwtPayloadSchemaDto;
exports.transactionsNativeSchema = zod_1.z.object({
    orderId: zod_1.z.string(),
    desc: zod_1.z.string(),
    total: zod_1.z.number(),
    openid: zod_1.z.string().optional(),
});
class transactionsNativeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.transactionsNativeSchema) {
}
exports.transactionsNativeSchemaDto = transactionsNativeSchemaDto;
exports.createOrderJSAPISchema = exports.createOrderSchema.extend({ openid: zod_1.z.string() });
class SdkCreateOrderInJSAPIDto extends (0, zod_utils_1.createZodDto)(exports.createOrderJSAPISchema) {
}
exports.SdkCreateOrderInJSAPIDto = SdkCreateOrderInJSAPIDto;
exports.createQuickOrderSchema = exports.createOrderSchema.extend({
    // 快捷创建需要客户端提供一个匿名 Token
    anonymousCustomerToken: zod_1.z.string(),
});
class SdkCreateQuickOrderDto extends (0, zod_utils_1.createZodDto)(exports.createQuickOrderSchema) {
}
exports.SdkCreateQuickOrderDto = SdkCreateQuickOrderDto;
class createQuickOrderTenantJWTPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.createQuickOrderSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.createQuickOrderTenantJWTPayloadSchemaDto = createQuickOrderTenantJWTPayloadSchemaDto;
exports.appCreateV4Schema = zod_1.z.object({
    displayName: zod_1.z.string(),
});
class appCreateV4SchemaDto extends (0, zod_utils_1.createZodDto)(exports.appCreateV4Schema) {
}
exports.appCreateV4SchemaDto = appCreateV4SchemaDto;
exports.validateTenantSchema = zod_1.z.object({
    name: zod_1.z.string(),
    password: zod_1.z.string(),
});
class validateTenantSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateTenantSchema) {
}
exports.validateTenantSchemaDto = validateTenantSchemaDto;
exports.validateByEmailSchema = zod_1.z.object({
    email: zod_1.z.string(),
    tenantId: zod_1.z.number(),
    password: zod_1.z.string(),
});
class validateByEmailSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateByEmailSchema) {
}
exports.validateByEmailSchemaDto = validateByEmailSchemaDto;
exports._resetTenantPasswordSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
class _resetTenantPasswordSchemaDto extends (0, zod_utils_1.createZodDto)(exports._resetTenantPasswordSchema) {
}
exports._resetTenantPasswordSchemaDto = _resetTenantPasswordSchemaDto;
exports.customerExtendDataSchema = zod_1.z
    .object({
    biz: zod_1.z.string(),
    icp: zod_1.z.string().nullable(),
    contact: zod_1.z
        .object({
        email: zod_1.z.string(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    })
        .partial(),
    companyName: zod_1.z.string(),
    description: zod_1.z.string(),
})
    .partial();
class customerExtendDataSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerExtendDataSchema) {
}
exports.customerExtendDataSchemaDto = customerExtendDataSchemaDto;
exports.kanzhunDetailSchema = zod_1.z
    .object({
    公司全称: zod_1.z.string(),
    联系方式: zod_1.z.array(zod_1.z.string()),
    地址: zod_1.z.string(),
    简介: zod_1.z.string(),
})
    .partial();
class kanzhunDetailSchemaDto extends (0, zod_utils_1.createZodDto)(exports.kanzhunDetailSchema) {
}
exports.kanzhunDetailSchemaDto = kanzhunDetailSchemaDto;
exports.kanzhunItemSchema = zod_1.z
    .object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    detail: exports.kanzhunDetailSchema,
})
    .partial();
class kanzhunItemSchemaDto extends (0, zod_utils_1.createZodDto)(exports.kanzhunItemSchema) {
}
exports.kanzhunItemSchemaDto = kanzhunItemSchemaDto;
exports.kanzhunDataSchema = zod_1.z
    .object({
    date: zod_1.z.string(),
    data: zod_1.z.array(exports.kanzhunItemSchema),
})
    .partial();
exports.sendSmsVerifyCodeSchema = zod_1.z.object({ mobile: zod_1.z.string() });
class sendSmsVerifyCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.sendSmsVerifyCodeSchema) {
}
exports.sendSmsVerifyCodeSchemaDto = sendSmsVerifyCodeSchemaDto;
exports.refreshTokenSchema = zod_1.z.object({ rt: zod_1.z.string() });
class refreshTokenSchemaDto extends (0, zod_utils_1.createZodDto)(exports.refreshTokenSchema) {
}
exports.refreshTokenSchemaDto = refreshTokenSchemaDto;
exports.ctxTenantSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
class ctxTenantSchemaDto extends (0, zod_utils_1.createZodDto)(exports.ctxTenantSchema) {
}
exports.ctxTenantSchemaDto = ctxTenantSchemaDto;
exports.ctxUserSchema = zod_1.z.object({
    id: zod_1.z.number(),
    tenantId: zod_1.z.number(),
    username: zod_1.z.string(),
});
class ctxUserSchemaDto extends (0, zod_utils_1.createZodDto)(exports.ctxUserSchema) {
}
exports.ctxUserSchemaDto = ctxUserSchemaDto;
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(4),
});
class loginSchemaDto extends (0, zod_utils_1.createZodDto)(exports.loginSchema) {
}
exports.loginSchemaDto = loginSchemaDto;
exports.getMenuSchema = zod_1.z.object({
    tenantId: zod_1.z.number(),
});
class getMenuSchemaDto extends (0, zod_utils_1.createZodDto)(exports.getMenuSchema) {
}
exports.getMenuSchemaDto = getMenuSchemaDto;
// https://github.com/colinhacks/zod/discussions/2245
exports.baseMenuItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    id: zod_1.z.string(),
});
exports.menuItemSchema = exports.baseMenuItemSchema.extend({
    children: zod_1.z.lazy(() => exports.menuItemSchema.array().optional()),
});
class menuItemSchemaDto extends (0, zod_utils_1.createZodDto)(exports.menuItemSchema) {
}
exports.menuItemSchemaDto = menuItemSchemaDto;
exports.gatewayTenantNameSchema = zod_1.z.enum(['flowda', 'cmsAdmin']);
exports.deploySiteToCosSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
});
class deploySiteToCosSchemaDto extends (0, zod_utils_1.createZodDto)(exports.deploySiteToCosSchema) {
}
exports.deploySiteToCosSchemaDto = deploySiteToCosSchemaDto;


/***/ }),

/***/ "../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
const prismaUtils_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaUtils.ts");
const bindService_1 = __webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts");
const dynamicTableSchemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, bindService_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.DataServiceSymbol, data_service_1.DataService);
    (0, bindService_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.SchemaServiceSymbol, schema_service_1.SchemaService);
    bind(flowda_shared_types_1.PrismaSchemaServiceSymbol).to(prismaSchema_service_1.PrismaSchemaService).inSingletonScope();
    bind(flowda_shared_types_1.PrismaUtilsSymbol).to(prismaUtils_1.PrismaUtils).inSingletonScope();
    bind(flowda_shared_types_1.SchemaTransformerSymbol).to(schemaTransformer_1.SchemaTransformer).inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(flowda_shared_types_1.SchemaTransformerSymbol);
            transformer.setZodType(z);
            return transformer;
        };
    });
    bind(flowda_shared_types_1.DynamicTableSchemaTransformerSymbol)
        .to(dynamicTableSchemaTransformer_1.DynamicTableSchemaTransformer)
        .inTransientScope();
});


/***/ }),

/***/ "../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/ag-grid-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/schema-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/custom-error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/dayjs-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const lodash_1 = __webpack_require__("lodash");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
// import * as db from '@prisma/client-cms_admin'
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(prisma, prismaSchemaService, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(reqUser, pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`get(reqUser ${JSON.stringify(reqUser)}, path: ${pathname}, query: ${JSON.stringify(query)})`);
            const findParamRet = yield this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (action === 'findUnique') {
                const ret = yield this.prisma[resource][action](param);
                if (!ret || ret.isDeleted)
                    return {};
                return _.omit(ret, ['isDeleted']);
            }
            if (action === 'findMany') {
                const [data, count] = yield this.prisma.$transaction([
                    this.prisma[resource][action](param),
                    this.prisma[resource].count({ where: param.where }),
                ]);
                return {
                    pagination: {
                        total: count,
                    },
                    data,
                };
            }
        });
    }
    put(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`put(reqUser ${JSON.stringify(reqUser)}), path: ${path}, values: ${JSON.stringify(values)}`);
            const updateParamRet = yield this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
                select: _.mapValues(param.data, item => true),
            });
            const auditChanges = Object.keys(param.data).reduce((acc, k) => {
                acc[k] = [prevRet[k], param.data[k]];
                return acc;
            }, {});
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'update',
                auditChanges: JSON.stringify(auditChanges),
                version: 0,
            };
            this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
            try {
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
            }
            catch (e) {
                this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
            }
            return ret;
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`[post] reqUser ${JSON.stringify(reqUser)}, path: ${path}, query: ${JSON.stringify(values)})`);
            const createParamRet = yield this.prismaSchemaService.toCreateParam(path, values);
            const { resource, param } = createParamRet;
            if (createParamRet['x-unique']) {
                const ref = createParamRet['x-unique'];
                const refId = values[ref.name];
                const refModelName = ref.reference.model_name;
                const refData = yield this.prisma[(0, lodash_1.lowerFirst)(refModelName)].findUnique({
                    where: {
                        id: refId,
                    },
                    include: {
                        [resource]: true,
                    },
                });
                const id = refData[resource].id;
                const ret = yield this.prisma[resource].update({
                    where: {
                        id: id,
                    },
                    data: Object.assign(Object.assign({}, param.data), {
                        isDeleted: false,
                    }),
                });
                const auditInfo = {
                    auditId: id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'soft_delete_revert',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
                try {
                    yield this.prisma.audits.create({
                        data: auditInfo,
                    });
                }
                catch (e) {
                    this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
                }
                return ret;
            }
            else {
                const ret = yield this.prisma[resource].create(param);
                const auditInfo = {
                    auditId: ret.id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'create',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
                try {
                    yield this.prisma.audits.create({
                        data: auditInfo,
                    });
                }
                catch (e) {
                    this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
                }
                return ret;
            }
        });
    }
    remove(reqUser, pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`[remove] reqUser ${JSON.stringify(reqUser)}, path: ${pathname}`);
            const assDelStrategy = yield this.prismaSchemaService.getAssociationDeleteStrategy(pathname);
            const { resource, param } = yield this.prismaSchemaService.toRemoveParam(pathname);
            for (const k of Object.keys(assDelStrategy)) {
                const ass = assDelStrategy[k];
                if (ass['x-onSoftDelete'] === 'Restrict') {
                    const ret = yield this.prisma[(0, lodash_1.lowerFirst)(k)].findMany({
                        where: {
                            isDeleted: false,
                            [ass.name]: param.where.id,
                        },
                    });
                    if (ret.length > 0) {
                        throw new Error(`删除失败, 关联的<${ass.relatedDisplayName}>不为空`);
                    }
                }
            }
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
            });
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'soft_delete',
                auditChanges: JSON.stringify(prevRet),
                version: 0,
            };
            this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
            try {
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
            }
            catch (e) {
                this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
            }
            return ret;
        });
    }
};
exports.DataService = DataService;
exports.DataService = DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.PrismaSchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], DataService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DynamicTableSchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableSchemaTransformer = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
let DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = class DynamicTableSchemaTransformer {
    constructor(loggerFactory) {
        this.logger = loggerFactory(DynamicTableSchemaTransformer_1.name);
    }
    transform(input) {
        const cols = input.dynamicTableDefColumns.map((c) => {
            return Object.assign({
                name: c.name,
                column_type: c.type,
            }, c.extendedSchema);
        });
        return Object.assign({
            name: (0, matchPath_1.toModelName)(input.name),
            slug: (0, matchPath_1.toPath)(input.name),
            schema_name: (0, matchPath_1.toSchemaName)(input.name),
            primary_key: 'id',
            columns: cols,
            prisma: false,
            is_dynamic: true,
        }, input.extendedSchema);
    }
};
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer;
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], DynamicTableSchemaTransformer);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/meta.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = void 0;
const zod_1 = __webpack_require__("zod");
// motor-admin JSON.parse(document.getElementById('app').dataset.schema)
// todo: 目前尽量在后端定义，后续可以再开辟一条链路来储存 schema，并进行 merge
// 当然如果后端定义链路保留，应该做成 decorator
function meta(values) {
    return zod_1.z.unknown().optional().describe(JSON.stringify(values));
}
exports.meta = meta;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const lodash_1 = __webpack_require__("lodash");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(prismaUtils, schemaService, loggerFactory) {
        this.prismaUtils = prismaUtils;
        this.schemaService = schemaService;
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields, theResourceSchema) {
        let fieldsArr = [];
        if (fields == null) {
            fieldsArr = theResourceSchema.columns.filter(c => c.prisma !== false).map(c => c.name);
        }
        else {
            fieldsArr = fields.split(',');
        }
        return fieldsArr.reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});
    }
    toFindParam(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (!query['fields']) {
            //   throw new Error('No query fields')
            // }
            this.logger.debug(`[toFindParam] pathname: ${pathname}, query: ${JSON.stringify(query)}`);
            const parsedPath = (0, matchPath_1.matchPath)(pathname);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let action;
            let param = {};
            const queryFields = query['fields'];
            const fields = this.toPrismaSelect(queryFields && queryFields[resource], theResourceSchema);
            const include = {};
            if (typeof query['include'] === 'string' && query['include'] !== '') {
                query['include'].split(',').forEach((inc) => {
                    // this.logger.log(`[toFindParam] parse include ${inc}`)
                    const refSelect = this.getRefSelect(schemaCache, theResourceSchema, inc);
                    const selectRet = this.toPrismaSelect(queryFields[inc], theResourceSchema);
                    include[inc] = {
                        // todo: 似乎 prisma nest select 不支持 order by 只有 include 支持，但是 include 不支持 nest select fields
                        // orderBy: [{ createdAt: 'desc' }],
                        select: Object.assign(Object.assign({}, selectRet), refSelect),
                    };
                });
            }
            if (id != null) {
                action = 'findUnique';
                const id2 = yield this.prismaUtils.parseId(resource, id);
                param = {
                    where: {
                        id: id2,
                    },
                    select: Object.assign(Object.assign(Object.assign({}, fields), include), { isDeleted: true }),
                };
            }
            else {
                const filter = this.convertQueryToPrismaFilter(schemaCache, theResourceSchema, query);
                const orderBy = this.convertToOrderBy(query);
                action = 'findMany';
                const skip = query['current'] ? (Number(query['current']) - 1) * Number(query['pageSize']) : undefined;
                const take = query['pageSize'] ? Number(query['pageSize']) : undefined;
                if (parsedPath.length > 1) {
                    // 情况1：根据前一个 resource id 搜索 list
                    const pResource = parsedPath[parsedPath.length - 2];
                    // this.logger.log(`${resource}.findMany`)
                    param = (0, lodash_1.omitBy)({
                        where: Object.assign({
                            [`${pResource.resource}Id`]: pResource.id,
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, lodash_1.isUndefined);
                }
                else {
                    param = (0, lodash_1.omitBy)({
                        where: Object.assign({
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, lodash_1.isUndefined);
                }
            }
            const ret = {
                action,
                param,
                resource,
            };
            this.logger.debug(`[toFindParam] ret ${JSON.stringify(ret)}`);
            return ret;
        });
    }
    convertToOrderBy(query) {
        let sort;
        if (query.sort != null) {
            sort = query.sort;
        }
        else {
            return [{ createdAt: 'desc' }];
        }
        if (sort[0] === '-') {
            return [{ [sort.slice(1)]: 'desc' }];
        }
        else {
            return [{ [sort]: 'asc' }];
        }
    }
    /**
     * 根据 resource 的 schema 中 columns 是 ref， e.g. resource(Receipt) 收货单关联的 ref(partVersion)
     * 找到对应 refSchema 的 display_column 中的又 include e.g. display_column(partId)，得到 nest select
     * { [include: partVersion]: { select { partId: true, [partId x-relationField: part]: { select: { id: true, [display_column*]: true} }}} }
     *
     * todo: 现在是根据 display_column 里如果有 ref 来计算的，后续可以改成所有 ref 都默认向下搜索一层
     */
    getRefSelect(schemaCache, resourceSchema, includeRef) {
        const refSelect = {};
        if (resourceSchema && resourceSchema.columns) {
            // e.g. inc partVersion
            const refColumn = resourceSchema.columns.find(col => col.column_type === 'reference' && col.reference['x-relationField'] === includeRef);
            if (refColumn) {
                // e.g. model_name PartVersion
                // e.g. display_column partId,version
                const { model_name, display_column } = refColumn.reference;
                // e.g. PartVersionResourceSchema
                const refSchema = schemaCache[model_name + 'ResourceSchema'];
                let displayCols = [];
                if (typeof display_column === 'string') {
                    displayCols = [display_column];
                }
                else {
                    displayCols = display_column || [];
                }
                displayCols.forEach(item => {
                    // e.g. item partId
                    const disCol = refSchema.columns.find(col => col.name === item);
                    if (disCol == null) {
                        throw new Error(`schema '${model_name}', wrong display column '${item}'`);
                    }
                    else if (disCol.column_type === 'reference') {
                        // e.g. name
                        const display_column = disCol.reference.display_column;
                        const relationField = disCol.reference['x-relationField'];
                        let display_column2;
                        if (Array.isArray(display_column)) {
                            display_column2 = display_column;
                        }
                        else {
                            display_column2 = [display_column];
                        }
                        const select = display_column2.reduce((acc, cur) => {
                            acc[cur] = true;
                            return acc;
                        }, {});
                        refSelect[relationField] = {
                            select: Object.assign({
                                id: true,
                            }, select),
                        };
                    }
                });
            }
        }
        return refSelect;
    }
    /*
      [
        {
          type: { eq: 'UNSCHEDULE' },
          status: { eq: 'DONE' },
        },
      ]
     */
    convertQueryToPrismaFilter(schemaCache, resourceSchema, query) {
        if (query.filterModel) {
            return this.convertAgFilterModelToPrismaFilter(query.filterModel);
        }
        else if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
            // console.log(query.filter)
            const filter = query.filter;
            const andIdx = filter.findIndex(item => typeof item === 'string' && item === 'AND');
            const orIdx = filter.findIndex(item => typeof item === 'string' && item === 'OR');
            const ret = {};
            if (andIdx === 0) {
                ret['AND'] = [];
                if (orIdx === -1) {
                    const andFilter = filter.slice(1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const andFilter = filter.slice(1, orIdx);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['OR'] = [];
                    const orFilter = filter.slice(orIdx + 1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else if (orIdx === 0) {
                ret['OR'] = [];
                if (andIdx === -1) {
                    const orFilter = filter.slice(1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const orFilter = filter.slice(1, andIdx);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['AND'] = [];
                    const andFilter = filter.slice(andIdx + 1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else {
                throw new Error('Wrong filter');
            }
            return ret;
        }
        else if (query.q != null &&
            Array.isArray(resourceSchema.searchable_columns) &&
            resourceSchema.searchable_columns.length > 0) {
            return {
                OR: resourceSchema.searchable_columns.reduce((acc, cur) => {
                    acc.push({ [cur]: { contains: query.q } });
                    return acc;
                }, []),
            };
        }
        else {
            return {};
        }
    }
    convertAgFilterModelToPrismaFilter(agFilter) {
        const parsedRet = flowda_shared_types_1.agFilter1Schema.safeParse(agFilter);
        if (parsedRet.success) {
            return _.mapValues(parsedRet.data, (v, k) => {
                return {
                    [v.type]: v.filter,
                };
            });
        }
        else {
            const parsedRet = flowda_shared_types_1.agFilter2Schema.safeParse(agFilter);
            if (parsedRet.success) {
                const ret = {};
                for (const k of Object.keys(parsedRet.data)) {
                    const item = parsedRet.data[k];
                    if (item.operator === 'OR') {
                        if (ret.OR == null) {
                            ret.OR = [];
                        }
                        for (const cond of item.conditions) {
                            ret.OR.push({
                                [k]: {
                                    [cond.type]: cond.filter,
                                },
                            });
                        }
                    }
                }
                return ret;
            }
            else {
                return {};
            }
        }
    }
    toUpdateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`pathname: ${pathname}, body: ${JSON.stringify(values)}`);
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const ret = {
                resource,
                param: {
                    where: { id: id },
                    data: values,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    // todo: 需要增加 relation name
    getAssociationDeleteStrategy(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { origin, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            if (theResourceSchema.associations == null) {
                return {};
            }
            const ret = theResourceSchema.associations.reduce((acc, cur) => {
                const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                if (assSchema == null) {
                    throw new Error(`${resourceSchema} associated schema ${cur.model_name} is null`);
                }
                const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                if (relCol == null) {
                    throw new Error('Cannot found related column');
                }
                if (relCol.reference['x-onSoftDelete'] === 'Restrict') {
                    acc[cur.model_name] = {
                        'x-onSoftDelete': relCol.reference['x-onSoftDelete'],
                        name: relCol.name,
                        relatedDisplayName: assSchema.display_name,
                    };
                    return acc;
                }
                return acc;
            }, {});
            return ret;
        });
    }
    toRemoveParam(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, origin, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let assDisconnect = {};
            let include;
            if (theResourceSchema.associations != null) {
                assDisconnect = theResourceSchema.associations.reduce((acc, cur) => {
                    const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                    const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                    if (relCol == null) {
                        throw new Error('Cannot found related column');
                    }
                    if (relCol.reference['x-onSoftDelete'] !== 'Restrict' /* Restrict 已经确保 is_deleted 不需要解除关联 */) {
                        acc[cur.name] = {
                            set: [] /* disconnectAll 模拟 setNull */,
                        };
                        if (include == null)
                            include = {};
                        include[cur.name] = true;
                    }
                    return acc;
                }, {});
            }
            let id2;
            if (id == null) {
                throw new Error(`remove ${resource}, id null`);
            }
            else {
                id2 = yield this.prismaUtils.parseId(resource, id);
            }
            const ret = {
                resource,
                param: {
                    where: {
                        id: id2,
                    },
                    data: Object.assign({
                        isDeleted: true,
                    }, assDisconnect),
                    include,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    mapItemToPrismaFilter(schemaCache, resourceSchema, item) {
        // 先初步转换
        const k = Object.keys(item)[0];
        // https://javascript.plainenglish.io/how-to-rename-object-keys-in-react-javascript-using-lodash-b73fb92ea24d
        item[k] = _.mapKeys(item[k], (k, v) => {
            switch (k) {
                case 'eq':
                    return 'equals';
                case 'neq':
                    return 'not';
                default:
                    return k;
            }
        });
        item[k] = _.mapValues(item[k], v => {
            // 得用 schema 判断下，主要就是 string 的 LIKE
            const kk = k.split('.');
            let col;
            if (kk.length === 2) {
                const refCol = resourceSchema.columns.find(col => {
                    return col.column_type === 'reference' && col.reference['x-relationField'] === kk[0];
                });
                const refSchema = schemaCache[refCol.reference.model_name + 'ResourceSchema'];
                col = refSchema.columns.find(item => item.name === kk[1]);
            }
            else {
                col = resourceSchema.columns.find(item => item.name === k);
            }
            if (col && ['string', 'textarea'].indexOf(col.column_type) > -1) {
                return v;
            }
            else if ((0, matchPath_1.isLikeNumber)(v)) {
                return Number(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        (0, lodash_1.forEach)(item, (value, key) => {
            (0, lodash_1.set)(ret, key.replace(/\./g, '.'), value);
        });
        return ret;
    }
    toCreateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            // console.log(matchRet)
            const { resource, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const theResourceSchema = schemaCache[resourceSchema];
            // console.log(theResourceSchema)
            const uniqueCols = theResourceSchema.columns.filter(col => {
                return col.column_type === 'reference' && col.reference['x-unique'];
            });
            if (uniqueCols.length === 0) {
                return {
                    action: 'create',
                    resource: resource,
                    param: {
                        data: values,
                    },
                };
            }
            else if (uniqueCols.length > 1) {
                throw new Error('Not support multiple unique key');
            }
            else {
                const uniqueCol = uniqueCols[0];
                // console.log(uniqueCol)
                return {
                    action: 'update',
                    resource: resource,
                    param: {
                        data: values,
                    },
                    'x-unique': uniqueCol,
                };
            }
        });
    }
    removeRelationFields(schemaCache, resourceSchema, values) {
        // todo: 目前是通过显式声明 x-relationField 来删除 put 时候的 reference 值
        const relationFields = [];
        const theResourceSchema = schemaCache[resourceSchema];
        // console.log(theResourceSchema)
        if (theResourceSchema) {
            Object.keys(values).forEach((k) => {
                var _a;
                const kProp = theResourceSchema.columns && theResourceSchema.columns.find(col => col.name === k);
                if (kProp && kProp.column_type === 'reference') {
                    const relationField = (_a = kProp.reference) === null || _a === void 0 ? void 0 : _a['x-relationField'];
                    if (relationField) {
                        relationFields.push(relationField);
                    }
                }
            });
        }
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
exports.PrismaSchemaService = PrismaSchemaService;
exports.PrismaSchemaService = PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaUtilsSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], PrismaSchemaService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaUtils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaUtils_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaUtils = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let PrismaUtils = PrismaUtils_1 = class PrismaUtils {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(PrismaUtils_1.name);
    }
    parseId(resource, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modelName = (0, matchPath_1.toModelName)(resource);
            const dmmf = yield this.prisma._getDmmf();
            const idField = dmmf.modelMap[modelName].fields.find((item) => item.name === 'id');
            // this.logger.log(`id: ${id}, type: ${idField.type}`)
            return idField.type === 'Int' && typeof id !== 'number' ? parseInt(id) : id;
        });
    }
};
exports.PrismaUtils = PrismaUtils;
exports.PrismaUtils = PrismaUtils = PrismaUtils_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], PrismaUtils);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let SchemaService = SchemaService_1 = class SchemaService {
    constructor(loggerFactory, modelSchemaFactory, zt, czt) {
        this.modelSchemaFactory = modelSchemaFactory;
        this.zt = zt;
        this.czt = czt;
        this.logger = loggerFactory(SchemaService_1.name);
    }
    getSchema() {
        console.time('generate schema');
        const schema = Object.keys(this.czt).reduce((acc, k) => {
            const e = this.czt[k];
            if (['ZodObject'].indexOf(e.constructor.name) > -1) {
                const transformer = this.modelSchemaFactory(e);
                acc[k] = transformer.buildSchema().toSchema(k);
            }
            else {
                this.logger.error('Wrong type', k);
            }
            return acc;
        }, {});
        this.schemaCache = schema;
        console.timeEnd('generate schema');
        return schema;
    }
    getSchemaCache() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.schemaCache) {
                // 重启的话内存里就没有了，可以手动重新获取下
                this.logger.log(`schemaCache is empty, getSchema again.`);
                return this.getSchema();
            }
            else {
                return this.schemaCache;
            }
        });
    }
};
exports.SchemaService = SchemaService;
exports.SchemaService = SchemaService = SchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<SchemaTransformer>')),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(flowda_shared_types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaTransformer = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const schema_1 = __webpack_require__("@flowda/schema");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
let SchemaTransformer = SchemaTransformer_1 = class SchemaTransformer {
    constructor(loggerFactory, prismaZod) {
        this.prismaZod = prismaZod;
        this.logger = loggerFactory(SchemaTransformer_1.name);
    }
    setZodType(z) {
        this.zodType = z;
    }
    buildSchema() {
        if (!this.zodType) {
            const errMsg = 'zodType is not initialized';
            this.logger.error(errMsg);
            throw new Error(errMsg);
        }
        this.jsonschema = (0, schema_1.zodToOpenAPI)(this.zodType);
        return this;
    }
    toSchema(schemaName) {
        var _a, _b;
        const json = new schema_1.SchemaTransformer().set(this.jsonschema).toJSON();
        //    ^?
        if (!json.slug)
            throw new Error(`no slug, ${JSON.stringify(json)}`);
        return Object.assign(Object.assign({}, json), { schema_name: schemaName, columns: (_a = json.columns) === null || _a === void 0 ? void 0 : _a.filter(f => f.name !== 'isDeleted').map(col => {
                var _a;
                return Object.assign(Object.assign(Object.assign({}, col), col['x-legacy']), { 'x-legacy': undefined, prisma: ((_a = col === null || col === void 0 ? void 0 : col['x-legacy']) === null || _a === void 0 ? void 0 : _a.prisma) && col['x-legacy'].prisma === 'false' ? false : undefined });
            }), associations: (_b = json.associations) === null || _b === void 0 ? void 0 : _b.map(ass => {
                return Object.assign(Object.assign({}, ass), { schema_name: (0, matchPath_1.modelNameToSchemaName)(ass.model_name) });
            }) });
    }
};
exports.SchemaTransformer = SchemaTransformer;
exports.SchemaTransformer = SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/ag-grid-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertSortAgToMotor = void 0;
function convertSortAgToMotor(sort) {
    return sort[0] != null ? (sort[0].sort === 'asc' ? sort[0].colId : '-' + sort[0].colId) : undefined;
}
exports.convertSortAgToMotor = convertSortAgToMotor;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/bindService.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindServiceSymbol = exports.bindService = void 0;
function bindService(bind, serviceIdentifier, constructor) {
    bind(constructor).toSelf().inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(constructor);
    });
}
exports.bindService = bindService;
function bindServiceSymbol(bind, serviceIdentifier, implementIdentifier, constructor) {
    bind(implementIdentifier).to(constructor).inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(implementIdentifier);
    });
}
exports.bindServiceSymbol = bindServiceSymbol;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/browser-log-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.warn = exports.info = exports.debug = void 0;
const levelColorMap = {
    0: '#c0392b', // Red
    1: '#f39c12', // Yellow
    3: '#00BCD4', // Cyan
    4: '#ccc',
};
function style(level) {
    return `
  background: ${levelColorMap[level]};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`;
}
function debug(msg) {
    return [`%c debug `, style(4), '', msg];
}
exports.debug = debug;
function info(msg) {
    return [`%c info `, style(3), '', msg];
}
exports.info = info;
function warn(msg) {
    return [`%c warn `, style(1), '', msg];
}
exports.warn = warn;
function error(msg) {
    return [`%c error `, style(0), '', msg];
}
exports.error = error;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/custom-error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/dayjs-utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimeByDay = exports.getTimeExpire = void 0;
const tslib_1 = __webpack_require__("tslib");
const utc_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/utc"));
const timezone_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/timezone"));
const advancedFormat_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/advancedFormat"));
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(advancedFormat_1.default);
function getTimeExpire(min) {
    const fmt = (0, dayjs_1.default)().tz('Asia/Shanghai').add(min, 'minute').format('YYYY-MM-DDTHH:mm:ss+z');
    const ret = fmt.match(/.*(GMT\+(\d))/);
    if (ret == null) {
        return '';
    }
    else {
        return ret[0].replace(ret[1], ret[2].padStart(2, '0') + ':00');
    }
}
exports.getTimeExpire = getTimeExpire;
function getTimeByDay(day) {
    return (0, dayjs_1.default)().tz('Asia/Shanghai').add(day, 'day').toDate();
}
exports.getTimeByDay = getTimeByDay;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(flowda_shared_types_1.ServiceSymbol).map((service) => {
        return {
            provide: service.constructor,
            useValue: service,
        };
    });
}
exports.getServices = getServices;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/matchPath.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchPath = exports.modelNameToSchemaName = exports.toSchemaName = exports.toPath = exports.toModelName = exports.isLikeNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
plur.addSingularRule(/data$/i, 'data');
plur.addPluralRule(/data$/i, 'data');
plur.addSingularRule(/def$/i, 'def');
plur.addPluralRule(/def$/i, 'def');
plur.addSingularRule(/sms$/i, 'sms');
plur.addPluralRule(/sms$/i, 'sms');
// s* equipment 不可数
const REG = /(([a-z_]+s*)\/?([A-Za-z0-9-_:]+)?)+/g;
const NUM_REG = /^-?\d+(\.\d+)?$/;
// todo: 暂时没想到更精确的方法，这个应该能覆盖 100%
function isLikeNumber(value) {
    return NUM_REG.test(value);
}
exports.isLikeNumber = isLikeNumber;
function toModelName(slug) {
    return _.startCase(_.camelCase(plur.singular(slug))).replace(/ /g, '');
}
exports.toModelName = toModelName;
function toPath(modelName) {
    return plur.plural(_.snakeCase(modelName));
}
exports.toPath = toPath;
/**
 * @deprecated slug 转成 ResourceSchema 不准确
 * @see modelNameToSchemaName
 * @param slug
 */
function toSchemaName(slug) {
    const p = plur.singular(slug);
    return toModelName(p) + 'ResourceSchema';
}
exports.toSchemaName = toSchemaName;
function modelNameToSchemaName(modelName) {
    const p = plur.singular(modelName);
    return p + 'ResourceSchema';
}
exports.modelNameToSchemaName = modelNameToSchemaName;
function matchPath(path) {
    const ret1 = path.match(REG);
    // console.log(ret1)
    if (ret1 != null) {
        const ret2 = ret1.map(item => {
            const [resource, id] = item.split('/');
            const p = plur.singular(resource);
            return {
                resource: _.camelCase(p),
                resourceSchema: toSchemaName(resource),
                origin: resource,
                id: isLikeNumber(id) ? _.toNumber(id) : id,
            };
        });
        return ret2;
    }
    else {
        return [];
    }
}
exports.matchPath = matchPath;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/schema-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSchemaByDisplayName = void 0;
function getSchemaByDisplayName(schemaCache, displayName) {
    const k = Object.keys(schemaCache).find(k => {
        return schemaCache[k].display_name === displayName;
    });
    if (k) {
        return schemaCache[k];
    }
    else {
        return null;
    }
}
exports.getSchemaByDisplayName = getSchemaByDisplayName;


/***/ }),

/***/ "../../libs/prisma-flowda/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zt = void 0;
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/prisma-flowda/src/zod/index.ts"), exports);
exports.zt = tslib_1.__importStar(__webpack_require__("../../libs/prisma-flowda/src/zod/index.ts"));


/***/ }),

/***/ "../../libs/prisma-flowda/src/zod/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDefWithRelationsSchema = exports.DynamicTableDefSchema = exports.AuditsSchema = exports.UserProfileWithRelationsSchema = exports.UserProfileSchema = exports.UserPreSignupWithRelationsSchema = exports.UserPreSignupSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.TableFilterSchema = exports.TaskFormRelationSchema = exports.TenantWithRelationsSchema = exports.TenantSchema = exports.PayStatusSchema = exports.OrderStatusSchema = exports.ProductTypeSchema = exports.DynamicColumnTypeSchema = exports.JsonNullValueFilterSchema = exports.NullsOrderSchema = exports.JsonNullValueInputSchema = exports.NullableJsonNullValueInputSchema = exports.SortOrderSchema = exports.RequestErrorLogScalarFieldEnumSchema = exports.PayScalarFieldEnumSchema = exports.OrderScalarFieldEnumSchema = exports.ProductSnapshotScalarFieldEnumSchema = exports.ProductScalarFieldEnumSchema = exports.OrderProfileScalarFieldEnumSchema = exports.WeixinProfileScalarFieldEnumSchema = exports.SentSmsScalarFieldEnumSchema = exports.MenuScalarFieldEnumSchema = exports.DynamicTableDataScalarFieldEnumSchema = exports.DynamicTableDefColumnScalarFieldEnumSchema = exports.DynamicTableDefScalarFieldEnumSchema = exports.AuditsScalarFieldEnumSchema = exports.UserProfileScalarFieldEnumSchema = exports.UserPreSignupScalarFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.TableFilterScalarFieldEnumSchema = exports.TaskFormRelationScalarFieldEnumSchema = exports.TenantScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.isValidDecimalInput = exports.DECIMAL_STRING_REGEX = exports.DecimalJSLikeListSchema = exports.DecimalJSLikeSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
exports.RequestErrorLogSchema = exports.PayWithRelationsSchema = exports.PaySchema = exports.OrderWithRelationsSchema = exports.OrderSchema = exports.ProductSnapshotWithRelationsSchema = exports.ProductSnapshotSchema = exports.ProductWithRelationsSchema = exports.ProductSchema = exports.OrderProfileWithRelationsSchema = exports.OrderProfileSchema = exports.WeixinProfileWithRelationsSchema = exports.WeixinProfileSchema = exports.SentSmsSchema = exports.MenuWithRelationsSchema = exports.MenuSchema = exports.DynamicTableDataWithRelationsSchema = exports.DynamicTableDataSchema = exports.DynamicTableDefColumnWithRelationsSchema = exports.DynamicTableDefColumnSchema = void 0;
const zod_1 = __webpack_require__("zod");
const client_flowda_1 = __webpack_require__("@prisma/client-flowda");
const schema_1 = __webpack_require__("@flowda/schema");
(0, schema_1.extendZod)(zod_1.z);
const transformJsonNull = (v) => {
    if (!v || v === 'DbNull')
        return client_flowda_1.Prisma.DbNull;
    if (v === 'JsonNull')
        return client_flowda_1.Prisma.JsonNull;
    return v;
};
exports.transformJsonNull = transformJsonNull;
exports.JsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.JsonValue)),
    zod_1.z.lazy(() => zod_1.z.record(exports.JsonValue)),
]);
exports.NullableJsonValue = zod_1.z
    .union([exports.JsonValue, zod_1.z.literal('DbNull'), zod_1.z.literal('JsonNull')])
    .nullable()
    .transform((v) => (0, exports.transformJsonNull)(v));
exports.InputJsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.InputJsonValue.nullable())),
    zod_1.z.lazy(() => zod_1.z.record(exports.InputJsonValue.nullable())),
]);
// DECIMAL
//------------------------------------------------------
exports.DecimalJSLikeSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number(), toFixed: zod_1.z.function().args().returns(zod_1.z.string()), });
exports.DecimalJSLikeListSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number(), toFixed: zod_1.z.function().args().returns(zod_1.z.string()), }).array();
exports.DECIMAL_STRING_REGEX = /^[0-9.,e+-bxffo_cp]+$|Infinity|NaN/;
const isValidDecimalInput = (v) => {
    if (v === undefined || v === null)
        return false;
    return ((typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && 'toFixed' in v) ||
        (typeof v === 'string' && exports.DECIMAL_STRING_REGEX.test(v)) ||
        typeof v === 'number');
};
exports.isValidDecimalInput = isValidDecimalInput;
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.TenantScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'hashedPassword', 'hashedRefreshToken', 'displayName']);
exports.TaskFormRelationScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'taskDefinitionKey', 'formKey']);
exports.TableFilterScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'path', 'name', 'filterJSON']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'username', 'hashedPassword', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken', 'email', 'mobile', 'anonymousCustomerToken', 'image', 'tenantId', 'weixinProfileId']);
exports.UserPreSignupScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'email', 'verifyCode', 'tenantId']);
exports.UserProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'fullName', 'tenantId']);
exports.AuditsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'auditId', 'auditType', 'userId', 'username', 'action', 'auditChanges', 'version']);
exports.DynamicTableDefScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'extendedSchema', 'tenantId']);
exports.DynamicTableDefColumnScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'dynamicTableDefId', 'name', 'type', 'extendedSchema', 'tenantId']);
exports.DynamicTableDataScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'dynamicTableDefId', 'data', 'tenantId']);
exports.MenuScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'treeData', 'tenantId']);
exports.SentSmsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'mobile', 'code']);
exports.WeixinProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'unionOrOpenid', 'unionid', 'loginOpenid', 'headimgurl', 'nickname', 'sex']);
exports.OrderProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'tenantId', 'userId', 'productType', 'plan', 'amount', 'expireAt']);
exports.ProductScalarFieldEnumSchema = zod_1.z.enum(['id', 'uid', 'createdAt', 'updatedAt', 'isDeleted', 'tenantId', 'name', 'price', 'productType', 'plan', 'amount', 'extendedDescriptionData', 'fileSize', 'storeDuration', 'hasAds', 'tecSupport', 'validityPeriod', 'restricted']);
exports.ProductSnapshotScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'tenantId', 'snapshotPrice', 'orderId', 'productId']);
exports.OrderScalarFieldEnumSchema = zod_1.z.enum(['id', 'uid', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'tenantId', 'serial', 'status']);
exports.PayScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'tenantId', 'status', 'orderId', 'transactionId']);
exports.RequestErrorLogScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'isDeleted', 'requestId', 'tenantId', 'userId', 'log']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.JsonNullValueInputSchema = zod_1.z.enum(['JsonNull',]);
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.DynamicColumnTypeSchema = zod_1.z.enum(['string', 'textarea', 'integer', 'boolean', 'datetime', 'tag', 'reference']);
exports.ProductTypeSchema = zod_1.z.enum(['AMOUNT', 'PLAN']);
exports.OrderStatusSchema = zod_1.z.enum(['INITIALIZED', 'PAY_ASSOCIATED', 'FREE_DEAL', 'CANCELED']);
exports.PayStatusSchema = zod_1.z.enum(['UNPAIED', 'PAIED', 'REFUND']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// TENANT SCHEMA
/////////////////////////////////////////
exports.TenantSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    name: zod_1.z.string().column({ display_name: '租户唯一名称', column_type: 'String' }),
    hashedPassword: zod_1.z.string().nullable().column({ display_name: 'Hashed Password', column_type: 'String' }),
    hashedRefreshToken: zod_1.z.string().nullable().column({ display_name: 'Hashed Refresh Token', column_type: 'String' }),
    displayName: zod_1.z.string().nullable().column({ display_name: '租户显示名称', column_type: 'String' }),
}).resource({
    name: 'Tenant',
    slug: 'tenants',
    table_name: 'Tenant',
    class_name: 'Tenant',
    display_name: '租户信息',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'name',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.TenantWithRelationsSchema = exports.TenantSchema.merge(zod_1.z.object({
    menu: zod_1.z.lazy(() => exports.MenuWithRelationsSchema).nullable().reference({
        display_name: 'Menu',
        model_name: 'Menu',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'has_one'
    }),
    users: zod_1.z.lazy(() => exports.UserWithRelationsSchema).array().association({
        display_name: 'Users',
        slug: 'users',
        model_name: 'User',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    dynamicTableDefs: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema).array().association({
        display_name: 'Dynamic Table Defs',
        slug: 'dynamic_table_defs',
        model_name: 'DynamicTableDef',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    dynamicTableDefColumns: zod_1.z.lazy(() => exports.DynamicTableDefColumnWithRelationsSchema).array().association({
        display_name: 'Dynamic Table Def Columns',
        slug: 'dynamic_table_def_columns',
        model_name: 'DynamicTableDefColumn',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    dynamicTableData: zod_1.z.lazy(() => exports.DynamicTableDataWithRelationsSchema).array().association({
        display_name: 'Dynamic Table Data',
        slug: 'dynamic_table_data',
        model_name: 'DynamicTableData',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    userPreSignup: zod_1.z.lazy(() => exports.UserPreSignupWithRelationsSchema).array().association({
        display_name: 'User Pre Signup',
        slug: 'user_pre_signup',
        model_name: 'UserPreSignup',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    orderProfile: zod_1.z.lazy(() => exports.OrderProfileWithRelationsSchema).array().association({
        display_name: 'Order Profile',
        slug: 'order_profile',
        model_name: 'OrderProfile',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    userProfile: zod_1.z.lazy(() => exports.UserProfileWithRelationsSchema).array().association({
        display_name: 'User Profile',
        slug: 'user_profile',
        model_name: 'UserProfile',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array().association({
        display_name: 'Product Snapshots',
        slug: 'product_snapshots',
        model_name: 'ProductSnapshot',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    orders: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).array().association({
        display_name: 'Orders',
        slug: 'orders',
        model_name: 'Order',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    pays: zod_1.z.lazy(() => exports.PayWithRelationsSchema).array().association({
        display_name: 'Pays',
        slug: 'pays',
        model_name: 'Pay',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
    products: zod_1.z.lazy(() => exports.ProductWithRelationsSchema).array().association({
        display_name: 'Products',
        slug: 'products',
        model_name: 'Product',
        visible: true,
        foreign_key: 'tenantId',
        primary_key: 'id'
    }),
}));
/////////////////////////////////////////
// TASK FORM RELATION SCHEMA
/////////////////////////////////////////
exports.TaskFormRelationSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    taskDefinitionKey: zod_1.z.string().column({ display_name: 'Task Definition Key', column_type: 'String' }),
    formKey: zod_1.z.string().column({ display_name: 'Form Key', column_type: 'String' }),
}).resource({
    name: 'TaskFormRelation',
    slug: 'task_form_relations',
    table_name: 'TaskFormRelation',
    class_name: 'TaskFormRelation',
    display_name: '节点和表单关联关系',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/workflows/manage' }
});
/////////////////////////////////////////
// TABLE FILTER SCHEMA
/////////////////////////////////////////
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    path: zod_1.z.string().column({ display_name: 'Path', column_type: 'String' }),
    name: zod_1.z.string().column({ display_name: 'Name', column_type: 'String' }),
    filterJSON: zod_1.z.string().column({ display_name: 'Filter J S O N', column_type: 'String' }),
}).resource({
    name: 'TableFilter',
    slug: 'table_filters',
    table_name: 'TableFilter',
    class_name: 'TableFilter',
    display_name: '表和查询条件的关系',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true'
});
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    username: zod_1.z.string().column({ display_name: 'Username', column_type: 'String' }),
    hashedPassword: zod_1.z.string().nullable().column({ display_name: 'Hashed Password', column_type: 'String' }),
    hashedRefreshToken: zod_1.z.string().nullable().column({ display_name: 'Hashed Refresh Token', column_type: 'String' }),
    recoveryCode: zod_1.z.string().nullable().column({ display_name: 'Recovery Code', column_type: 'String' }),
    recoveryToken: zod_1.z.string().nullable().column({ display_name: 'Recovery Token', column_type: 'String' }),
    email: zod_1.z.string().nullable().column({ display_name: '邮箱', column_type: 'String' }),
    mobile: zod_1.z.string().nullable().column({ display_name: '手机号', column_type: 'String' }),
    anonymousCustomerToken: zod_1.z.string().nullable().column({ display_name: '快捷创建', column_type: 'String' }),
    image: zod_1.z.string().nullable().column({ display_name: '头像', column_type: 'String' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    weixinProfileId: zod_1.z.number().int().nullable().column({ display_name: 'Weixin Profile Id', column_type: 'Int' }),
}).resource({
    name: 'User',
    slug: 'users',
    table_name: 'User',
    class_name: 'User',
    display_name: '员工',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'username',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.UserWithRelationsSchema = exports.UserSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    profile: zod_1.z.lazy(() => exports.UserProfileWithRelationsSchema).nullable().reference({
        display_name: 'Profile',
        model_name: 'UserProfile',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'has_one'
    }),
    weixinProfile: zod_1.z.lazy(() => exports.WeixinProfileWithRelationsSchema).nullable().reference({
        display_name: 'Weixin Profile',
        model_name: 'WeixinProfile',
        foreign_key: 'weixinProfileId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    orderProfile: zod_1.z.lazy(() => exports.OrderProfileWithRelationsSchema).nullable().reference({
        display_name: 'Order Profile',
        model_name: 'OrderProfile',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'has_one'
    }),
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array().association({
        display_name: 'Product Snapshots',
        slug: 'product_snapshots',
        model_name: 'ProductSnapshot',
        visible: true,
        foreign_key: 'userId',
        primary_key: 'id'
    }),
    orders: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).array().association({
        display_name: 'Orders',
        slug: 'orders',
        model_name: 'Order',
        visible: true,
        foreign_key: 'userId',
        primary_key: 'id'
    }),
    pays: zod_1.z.lazy(() => exports.PayWithRelationsSchema).array().association({
        display_name: 'Pays',
        slug: 'pays',
        model_name: 'Pay',
        visible: true,
        foreign_key: 'userId',
        primary_key: 'id'
    }),
}));
/////////////////////////////////////////
// USER PRE SIGNUP SCHEMA
/////////////////////////////////////////
exports.UserPreSignupSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    email: zod_1.z.string().column({ display_name: 'Email', column_type: 'String' }),
    verifyCode: zod_1.z.string().column({ display_name: 'Verify Code', column_type: 'String' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'UserPreSignup',
    slug: 'user_pre_signups',
    table_name: 'UserPreSignup',
    class_name: 'UserPreSignup',
    display_name: '用户预注册表',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'email',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.UserPreSignupWithRelationsSchema = exports.UserPreSignupSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////
exports.UserProfileSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    userId: zod_1.z.number().int().column({ display_name: 'User Id', column_type: 'Int' }),
    fullName: zod_1.z.string().column({ display_name: 'Full Name', column_type: 'String' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'UserProfile',
    slug: 'user_profiles',
    table_name: 'UserProfile',
    class_name: 'UserProfile',
    display_name: 'User Profiles',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.UserProfileWithRelationsSchema = exports.UserProfileSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).reference({
        display_name: 'User',
        model_name: 'User',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// AUDITS SCHEMA
/////////////////////////////////////////
exports.AuditsSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    auditId: zod_1.z.number().int().column({ display_name: '关联id', column_type: 'Int' }),
    auditType: zod_1.z.string().column({ display_name: '审计类型)', column_type: 'String' }),
    userId: zod_1.z.string().column({ display_name: '用户id', column_type: 'String' }),
    username: zod_1.z.string().nullable().column({ display_name: '用户名', column_type: 'String' }),
    action: zod_1.z.string().column({ display_name: '动作', column_type: 'String' }),
    auditChanges: zod_1.z.string().column({ display_name: '变化', column_type: 'String' }),
    version: zod_1.z.number().int().column({ display_name: '版本', column_type: 'Int' }),
}).resource({
    name: 'Audits',
    slug: 'audits',
    table_name: 'Audits',
    class_name: 'Audits',
    display_name: '审计日志',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true'
});
/////////////////////////////////////////
// DYNAMIC TABLE DEF SCHEMA
/////////////////////////////////////////
exports.DynamicTableDefSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    name: zod_1.z.string().column({ display_name: '表英文名', column_type: 'String' }),
    extendedSchema: zod_1.z.any().optional().nullable().column({ display_name: '表扩展', column_type: 'Json' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'DynamicTableDef',
    slug: 'dynamic_table_defs',
    table_name: 'DynamicTableDef',
    class_name: 'DynamicTableDef',
    display_name: '动态表定义',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'name',
    'x-legacy': { route_prefix: '/tenant_admin/dynamic_table' }
});
exports.DynamicTableDefWithRelationsSchema = exports.DynamicTableDefSchema.merge(zod_1.z.object({
    dynamicTableDefColumns: zod_1.z.lazy(() => exports.DynamicTableDefColumnWithRelationsSchema).array().association({
        display_name: 'Dynamic Table Def Columns',
        slug: 'dynamic_table_def_columns',
        model_name: 'DynamicTableDefColumn',
        visible: true,
        foreign_key: 'dynamicTableDefId',
        primary_key: 'id'
    }),
    dynamicTableData: zod_1.z.lazy(() => exports.DynamicTableDataWithRelationsSchema).array().association({
        display_name: 'Dynamic Table Data',
        slug: 'dynamic_table_data',
        model_name: 'DynamicTableData',
        visible: true,
        foreign_key: 'dynamicTableDefId',
        primary_key: 'id'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// DYNAMIC TABLE DEF COLUMN SCHEMA
/////////////////////////////////////////
exports.DynamicTableDefColumnSchema = zod_1.z.object({
    type: exports.DynamicColumnTypeSchema.column({ display_name: '类型', column_type: 'DynamicColumnType' }),
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    dynamicTableDefId: zod_1.z.number().int().column({ display_name: 'Dynamic Table Def Id', column_type: 'Int' }),
    name: zod_1.z.string().column({ display_name: '列名', column_type: 'String' }),
    extendedSchema: zod_1.z.any().optional().nullable().column({ display_name: '列扩展', column_type: 'Json' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'DynamicTableDefColumn',
    slug: 'dynamic_table_def_columns',
    table_name: 'DynamicTableDefColumn',
    class_name: 'DynamicTableDefColumn',
    display_name: '动态表列定义',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'name',
    'x-legacy': { route_prefix: '/tenant_admin/dynamic_table' }
});
exports.DynamicTableDefColumnWithRelationsSchema = exports.DynamicTableDefColumnSchema.merge(zod_1.z.object({
    dynamicTableDef: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema).reference({
        display_name: 'Dynamic Table Def',
        model_name: 'DynamicTableDef',
        foreign_key: 'dynamicTableDefId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// DYNAMIC TABLE DATA SCHEMA
/////////////////////////////////////////
exports.DynamicTableDataSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    dynamicTableDefId: zod_1.z.number().int().column({ display_name: 'Dynamic Table Def Id', column_type: 'Int' }),
    data: zod_1.z.any().column({ display_name: '数据', column_type: 'Json' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'DynamicTableData',
    slug: 'dynamic_table_data',
    table_name: 'DynamicTableData',
    class_name: 'DynamicTableData',
    display_name: '动态表数据',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/tenant_admin/dynamic_table' }
});
exports.DynamicTableDataWithRelationsSchema = exports.DynamicTableDataSchema.merge(zod_1.z.object({
    dynamicTableDef: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema).reference({
        display_name: 'Dynamic Table Def',
        model_name: 'DynamicTableDef',
        foreign_key: 'dynamicTableDefId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// MENU SCHEMA
/////////////////////////////////////////
exports.MenuSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    treeData: zod_1.z.any().column({ display_name: '菜单树', column_type: 'Json' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
}).resource({
    name: 'Menu',
    slug: 'menus',
    table_name: 'Menu',
    class_name: 'Menu',
    display_name: '菜单',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'name',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.MenuWithRelationsSchema = exports.MenuSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// SENT SMS SCHEMA
/////////////////////////////////////////
exports.SentSmsSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    mobile: zod_1.z.string().column({ display_name: 'Mobile', column_type: 'String' }),
    code: zod_1.z.string().column({ display_name: 'Code', column_type: 'String' }),
}).resource({
    name: 'SentSms',
    slug: 'sent_sms',
    table_name: 'SentSms',
    class_name: 'SentSms',
    display_name: '已发送短信',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'name',
    'x-legacy': { route_prefix: '/utilities/notification' }
});
/////////////////////////////////////////
// WEIXIN PROFILE SCHEMA
/////////////////////////////////////////
exports.WeixinProfileSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    unionOrOpenid: zod_1.z.string().column({ display_name: 'Union Or Openid', column_type: 'String' }),
    unionid: zod_1.z.string().nullable().column({ display_name: '微信 unionid', column_type: 'String' }),
    loginOpenid: zod_1.z.string().nullable().column({ display_name: '微信 openid', column_type: 'String' }),
    headimgurl: zod_1.z.string().nullable().column({ display_name: 'Headimgurl', column_type: 'String' }),
    nickname: zod_1.z.string().nullable().column({ display_name: 'Nickname', column_type: 'String' }),
    sex: zod_1.z.number().int().nullable().column({ display_name: 'Sex', column_type: 'Int' }),
}).resource({
    name: 'WeixinProfile',
    slug: 'weixin_profiles',
    table_name: 'WeixinProfile',
    class_name: 'WeixinProfile',
    display_name: '微信用户信息',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'nickname',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.WeixinProfileWithRelationsSchema = exports.WeixinProfileSchema.merge(zod_1.z.object({
    users: zod_1.z.lazy(() => exports.UserWithRelationsSchema).array().association({
        display_name: 'Users',
        slug: 'users',
        model_name: 'User',
        visible: true,
        foreign_key: 'weixinProfileId',
        primary_key: 'id'
    }),
}));
/////////////////////////////////////////
// ORDER PROFILE SCHEMA
/////////////////////////////////////////
exports.OrderProfileSchema = zod_1.z.object({
    productType: exports.ProductTypeSchema.column({ display_name: 'Product Type', column_type: 'ProductType' }),
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    userId: zod_1.z.number().int().column({ display_name: 'User Id', column_type: 'Int' }),
    plan: zod_1.z.number().int().nullable().column({ display_name: 'Plan', column_type: 'Int' }),
    amount: zod_1.z.number().int().nullable().column({ display_name: '额度', column_type: 'Int' }),
    expireAt: zod_1.z.date().nullable().column({ display_name: 'Expire At', column_type: 'DateTime' }),
}).resource({
    name: 'OrderProfile',
    slug: 'order_profiles',
    table_name: 'OrderProfile',
    class_name: 'OrderProfile',
    display_name: '用户订单信息',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    display_column: 'productType',
    'x-legacy': { route_prefix: '/tenant_admin/tenant' }
});
exports.OrderProfileWithRelationsSchema = exports.OrderProfileSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).reference({
        display_name: 'User',
        model_name: 'User',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////
exports.ProductSchema = zod_1.z.object({
    productType: exports.ProductTypeSchema.column({ display_name: 'Product Type', column_type: 'ProductType' }),
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    uid: zod_1.z.string().cuid().column({ display_name: 'Uid', column_type: 'String' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    name: zod_1.z.string().column({ display_name: '产品名', column_type: 'String' }),
    price: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: "Field 'price' must be a Decimal. Location: ['Models', 'Product']", }).column({
        display_name: '价格',
        column_type: 'Decimal',
        'x-legacy': { override_type: 'integer' }
    }),
    plan: zod_1.z.number().int().nullable().column({ display_name: 'Plan', column_type: 'Int' }),
    amount: zod_1.z.number().int().column({ display_name: '额度', column_type: 'Int' }),
    extendedDescriptionData: zod_1.z.any().optional().nullable().column({ display_name: 'Extended Description Data', column_type: 'Json' }),
    fileSize: zod_1.z.string().nullable().column({ display_name: 'File Size', column_type: 'String' }),
    storeDuration: zod_1.z.number().int().nullable().column({ display_name: 'Store Duration', column_type: 'Int' }),
    hasAds: zod_1.z.string().nullable().column({ display_name: '广告', column_type: 'String' }),
    tecSupport: zod_1.z.string().nullable().column({ display_name: '技术支持', column_type: 'String' }),
    validityPeriod: zod_1.z.number().int().nullable().column({ display_name: '有效期/天', column_type: 'Int' }),
    restricted: zod_1.z.number().int().column({ display_name: 'Restricted', column_type: 'Int' }),
}).resource({
    name: 'Product',
    slug: 'products',
    table_name: 'Product',
    class_name: 'Product',
    display_name: '产品',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    searchable_columns: 'id,name',
    display_column: 'name',
    'x-legacy': { route_prefix: '/order_admin/product' }
});
exports.ProductWithRelationsSchema = exports.ProductSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array().association({
        display_name: 'Product Snapshots',
        slug: 'product_snapshots',
        model_name: 'ProductSnapshot',
        visible: true,
        foreign_key: 'productId',
        primary_key: 'id'
    }),
}));
/////////////////////////////////////////
// PRODUCT SNAPSHOT SCHEMA
/////////////////////////////////////////
exports.ProductSnapshotSchema = zod_1.z.object({
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    userId: zod_1.z.number().int().column({ display_name: 'User Id', column_type: 'Int' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    snapshotPrice: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: "Field 'snapshotPrice' must be a Decimal. Location: ['Models', 'ProductSnapshot']", }).column({ display_name: 'Snapshot Price', column_type: 'Decimal' }),
    orderId: zod_1.z.number().int().column({ display_name: 'Order Id', column_type: 'Int' }),
    productId: zod_1.z.number().int().column({ display_name: 'Product Id', column_type: 'Int' }),
}).resource({
    name: 'ProductSnapshot',
    slug: 'product_snapshots',
    table_name: 'ProductSnapshot',
    class_name: 'ProductSnapshot',
    display_name: 'Product Snapshots',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/order_admin/product' }
});
exports.ProductSnapshotWithRelationsSchema = exports.ProductSnapshotSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).reference({
        display_name: 'User',
        model_name: 'User',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    order: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).reference({
        display_name: 'Order',
        model_name: 'Order',
        foreign_key: 'orderId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    product: zod_1.z.lazy(() => exports.ProductWithRelationsSchema).reference({
        display_name: 'Product',
        model_name: 'Product',
        foreign_key: 'productId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////
exports.OrderSchema = zod_1.z.object({
    status: exports.OrderStatusSchema.column({ display_name: 'Status', column_type: 'OrderStatus' }),
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    uid: zod_1.z.string().cuid().column({ display_name: 'Uid', column_type: 'String' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    userId: zod_1.z.number().int().column({ display_name: 'User Id', column_type: 'Int' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    serial: zod_1.z.number().int().column({ display_name: 'Serial', column_type: 'Int' }),
}).resource({
    name: 'Order',
    slug: 'orders',
    table_name: 'Order',
    class_name: 'Order',
    display_name: '订单',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/order_admin/order' }
});
exports.OrderWithRelationsSchema = exports.OrderSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).reference({
        display_name: 'User',
        model_name: 'User',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    pay: zod_1.z.lazy(() => exports.PayWithRelationsSchema).nullable().reference({
        display_name: 'Pay',
        model_name: 'Pay',
        foreign_key: 'orderId',
        primary_key: 'id',
        reference_type: 'has_one'
    }),
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array().association({
        display_name: 'Product Snapshots',
        slug: 'product_snapshots',
        model_name: 'ProductSnapshot',
        visible: true,
        foreign_key: 'orderId',
        primary_key: 'id'
    }),
}));
/////////////////////////////////////////
// PAY SCHEMA
/////////////////////////////////////////
exports.PaySchema = zod_1.z.object({
    status: exports.PayStatusSchema.column({ display_name: 'Status', column_type: 'PayStatus' }),
    id: zod_1.z.number().int().column({ display_name: 'Id', column_type: 'Int' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    updatedAt: zod_1.z.date().column({ display_name: 'Updated At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    userId: zod_1.z.number().int().column({ display_name: 'User Id', column_type: 'Int' }),
    tenantId: zod_1.z.number().int().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    orderId: zod_1.z.number().int().column({ display_name: 'Order Id', column_type: 'Int' }),
    transactionId: zod_1.z.string().column({ display_name: 'Transaction Id', column_type: 'String' }),
}).resource({
    name: 'Pay',
    slug: 'pays',
    table_name: 'Pay',
    class_name: 'Pay',
    display_name: 'Pays',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/order_admin/order' }
});
exports.PayWithRelationsSchema = exports.PaySchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).reference({
        display_name: 'User',
        model_name: 'User',
        foreign_key: 'userId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema).reference({
        display_name: 'Tenant',
        model_name: 'Tenant',
        foreign_key: 'tenantId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
    Order: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).reference({
        display_name: 'Order',
        model_name: 'Order',
        foreign_key: 'orderId',
        primary_key: 'id',
        reference_type: 'belongs_to'
    }),
}));
/////////////////////////////////////////
// REQUEST ERROR LOG SCHEMA
/////////////////////////////////////////
exports.RequestErrorLogSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().column({ display_name: 'Id', column_type: 'String' }),
    createdAt: zod_1.z.date().column({ display_name: 'Created At', column_type: 'DateTime' }),
    isDeleted: zod_1.z.boolean().column({ display_name: 'Is Deleted', column_type: 'Boolean' }),
    requestId: zod_1.z.string().column({ display_name: 'Request Id', column_type: 'String' }),
    tenantId: zod_1.z.number().int().nullable().column({ display_name: 'Tenant Id', column_type: 'Int' }),
    userId: zod_1.z.number().int().nullable().column({ display_name: 'User Id', column_type: 'Int' }),
    log: zod_1.z.any().column({ display_name: 'Log', column_type: 'Json' }),
}).resource({
    name: 'RequestErrorLog',
    slug: 'request_error_logs',
    table_name: 'RequestErrorLog',
    class_name: 'RequestErrorLog',
    display_name: 'Request Error Logs',
    primary_key: 'id',
    visible: true,
    display_primary_key: 'true',
    'x-legacy': { route_prefix: '/utilities/log' }
});


/***/ }),

/***/ "@flowda/schema":
/***/ ((module) => {

module.exports = require("@flowda/schema");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@paralleldrive/cuid2":
/***/ ((module) => {

module.exports = require("@paralleldrive/cuid2");

/***/ }),

/***/ "@prisma/client-flowda":
/***/ ((module) => {

module.exports = require("@prisma/client-flowda");

/***/ }),

/***/ "@trpc/server":
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ "@trpc/server/adapters/express":
/***/ ((module) => {

module.exports = require("@trpc/server/adapters/express");

/***/ }),

/***/ "axios":
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "consola":
/***/ ((module) => {

module.exports = require("consola");

/***/ }),

/***/ "dayjs":
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/advancedFormat":
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ "dayjs/plugin/timezone":
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ "dayjs/plugin/utc":
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "http-proxy-middleware":
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "inversify":
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-zod":
/***/ ((module) => {

module.exports = require("nestjs-zod");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "pluralize":
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ "radash":
/***/ ((module) => {

module.exports = require("radash");

/***/ }),

/***/ "reflect-metadata":
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "tencentcloud-sdk-nodejs":
/***/ ((module) => {

module.exports = require("tencentcloud-sdk-nodejs");

/***/ }),

/***/ "trpc-panel":
/***/ ((module) => {

module.exports = require("trpc-panel");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "wechat-oauth":
/***/ ((module) => {

module.exports = require("wechat-oauth");

/***/ }),

/***/ "wechatpay-node-v3":
/***/ ((module) => {

module.exports = require("wechatpay-node-v3");

/***/ }),

/***/ "znv":
/***/ ((module) => {

module.exports = require("znv");

/***/ }),

/***/ "zod":
/***/ ((module) => {

module.exports = require("zod");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
__webpack_require__("reflect-metadata");
__webpack_require__("../../libs/flowda-shared/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const setup_1 = __webpack_require__("./src/setup.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const port = process.env.PORT || 3350;
        (0, setup_1.setupNestApp)(app, port);
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${setup_1.globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map