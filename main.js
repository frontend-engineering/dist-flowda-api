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
exports.AppModule = void 0;
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
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule, schedule_1.ScheduleModule.forRoot()],
        controllers: [
            app_controller_1.AppController,
            data_controller_1.DataController,
            task_controller_1.TaskController,
            user_controller_1.UserController,
            table_filter_controller_1.TableFilterController,
            audit_controller_1.AuditController,
            dynamic_table_def_controller_1.DynamicTableDefController,
            dynamic_table_data_controller_1.DynamicTableDataController,
            menu_controller_1.MenuController,
        ],
        providers: [
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
        ],
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
        return this.menu.get(req.user);
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
    container.bind(flowda_services_1.SmsClientSymbol).toConstantValue(new smsClient({
        credential: {
            secretId: process.env.SMS_SECRET_ID,
            secretKey: process.env.SMS_SECRET_KEY,
        },
        region: 'ap-nanjing',
    }));
    container.bind(flowda_shared_1.PrismaClientSymbol).toConstantValue(prisma);
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

/***/ "./src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserController_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const userLocalAuth_guard_1 = __webpack_require__("./src/user/userLocalAuth.guard.ts");
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
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_services_1.RegisterDto !== "undefined" && flowda_services_1.RegisterDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('resetPassword'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_c = typeof flowda_services_1.resetPasswordSchemaDto !== "undefined" && flowda_services_1.resetPasswordSchemaDto) === "function" ? _c : Object]),
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
            // eslint-disable-next-line no-useless-catch
            const tokens = yield this.user.validate(username, password);
            return tokens;
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
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const trpc_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts");
const schema_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/schema.router.ts");
const user_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/user.router.ts");
const hello_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/hello.router.ts");
exports.flowdaServiceTrpcServerModule = new inversify_1.ContainerModule(bind => {
    bind(trpc_service_1.TrpcService).toSelf().inSingletonScope();
    bind(schema_router_1.SchemaRouter).toSelf().inSingletonScope();
    bind(user_router_1.UserRouter).toSelf().inSingletonScope();
    bind(hello_router_1.HelloRouter).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, trpc_router_1.TrpcRouter);
});


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services-trpc-server/src/flowdaServiceTrpcServer.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/hello.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var HelloRouter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelloRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
let HelloRouter = HelloRouter_1 = class HelloRouter {
    constructor(trpc, loggerFactory) {
        this.trpc = trpc;
        this.helloRouter = this.trpc.router({
            createRoot: this.trpc.procedure.input(zod_1.z.any()).query((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return {
                    id: 'WorkspaceNodeId',
                    name: 'WorkspaceNode',
                    visible: false,
                    children: [
                        {
                            id: '0',
                            name: 'resources',
                            selected: false,
                            expanded: false,
                            children: [],
                        },
                        {
                            id: '1',
                            name: 'workflows',
                            selected: false,
                            expanded: false,
                            children: [],
                        },
                        {
                            id: '2',
                            name: 'reports',
                            selected: false,
                            expanded: false,
                            children: [],
                        },
                    ],
                };
            })),
            resolveChildren: this.trpc.procedure
                .input(zod_1.z.object({
                pid: zod_1.z.string(),
            }))
                .query((opts) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const id = _.uid(4);
                return [
                    {
                        id: id,
                        name: '服务器管理' + id,
                        selected: false,
                        uri: {
                            scheme: 'resource',
                            name: '服务器管理' + id,
                        },
                    },
                ];
            })),
        });
        this.logger = loggerFactory(HelloRouter_1.name);
    }
};
exports.HelloRouter = HelloRouter;
exports.HelloRouter = HelloRouter = HelloRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Function])
], HelloRouter);


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
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
let SchemaRouter = SchemaRouter_1 = class SchemaRouter {
    constructor(trpc, schemaService, dynamicTableDef, loggerFactory) {
        this.trpc = trpc;
        this.schemaService = schemaService;
        this.dynamicTableDef = dynamicTableDef;
        this.schemaRouter = this.trpc.router({
            getSchema: this.trpc.procedure.input(zod_1.z.undefined()).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // todo: 验证 & 权限控制放在哪里？
                // 之前 nestjs 可以放在 guard 上，但是用了 trpc 就不适合了，估计要放在 inversify，但是要能传递 context(inner)
                const zodSchema = this.schemaService.getSchema();
                const dynamicSchema = yield this.dynamicTableDef.getSchema();
                const ret = Object.assign({}, zodSchema, dynamicSchema);
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
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_services_1.DynamicTableDefServiceSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, Object, Function])
], SchemaRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.context.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createContext = void 0;
const tslib_1 = __webpack_require__("tslib");
function createContext({ req, res }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log('======================================== Start ========================================');
        console.log('url                  :', req.url);
        console.log('from                 :', req.headers['x-from']);
        console.log('request args         :', req.params, req.query);
        console.log('======================================== End ========================================\n');
        return {
            _meta: {
                'x-from': req.headers['x-from'],
            },
        };
    });
}
exports.createContext = createContext;


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TrpcRouter_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts");
const trpcExpress = tslib_1.__importStar(__webpack_require__("@trpc/server/adapters/express"));
const schema_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/schema.router.ts");
const user_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/user.router.ts");
const hello_router_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/hello.router.ts");
const trpc_context_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/trpc/trpc.context.ts");
// import { createOpenApiExpressMiddleware } from 'trpc-openapi'
let TrpcRouter = TrpcRouter_1 = class TrpcRouter {
    constructor(trpc, schemaRouter, userRouter, helloRouter, loggerFactory) {
        this.trpc = trpc;
        this.schemaRouter = schemaRouter;
        this.userRouter = userRouter;
        this.helloRouter = helloRouter;
        this.appRouter = this.trpc.router({
            schema: this.schemaRouter.schemaRouter,
            user: this.userRouter.userRouter,
            hello: this.helloRouter.helloRouter,
        });
        this.logger = loggerFactory(TrpcRouter_1.name);
    }
    applyMiddleware(app, globalPrefix) {
        this.logger.log(`applyMiddleware ${globalPrefix}/trpc`);
        // app.use(`/${globalPrefix}/trpc-api`, createOpenApiExpressMiddleware({ router: this.appRouter }))
        app.use(`/${globalPrefix}/trpc`, trpcExpress.createExpressMiddleware({
            router: this.appRouter,
            createContext: trpc_context_1.createContext,
        }));
    }
};
exports.TrpcRouter = TrpcRouter;
exports.TrpcRouter = TrpcRouter = TrpcRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(schema_router_1.SchemaRouter)),
    tslib_1.__param(2, (0, inversify_1.inject)(user_router_1.UserRouter)),
    tslib_1.__param(3, (0, inversify_1.inject)(hello_router_1.HelloRouter)),
    tslib_1.__param(4, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof schema_router_1.SchemaRouter !== "undefined" && schema_router_1.SchemaRouter) === "function" ? _b : Object, typeof (_c = typeof user_router_1.UserRouter !== "undefined" && user_router_1.UserRouter) === "function" ? _c : Object, typeof (_d = typeof hello_router_1.HelloRouter !== "undefined" && hello_router_1.HelloRouter) === "function" ? _d : Object, Function])
], TrpcRouter);


/***/ }),

/***/ "../../libs/flowda-services-trpc-server/src/trpc/trpc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcService = void 0;
const tslib_1 = __webpack_require__("tslib");
const server_1 = __webpack_require__("@trpc/server");
const inversify_1 = __webpack_require__("inversify");
// import { OpenApiMeta } from 'trpc-openapi'
let TrpcService = class TrpcService {
    constructor() {
        this.trpc = server_1.initTRPC
            .context()
            // .meta<OpenApiMeta>()
            .create();
        this.procedure = this.trpc.procedure;
        this.router = this.trpc.router;
        this.mergeRouters = this.trpc.mergeRouters;
    }
};
exports.TrpcService = TrpcService;
exports.TrpcService = TrpcService = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], TrpcService);


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
const zod_1 = __webpack_require__("zod");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const prisma_flowda_1 = __webpack_require__("../../libs/prisma-flowda/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
let UserRouter = UserRouter_1 = class UserRouter {
    constructor(trpc, userService, prisma, loggerFactory) {
        this.trpc = trpc;
        this.userService = userService;
        this.prisma = prisma;
        this.userRouter = this.trpc.router({
            getTenant: this.trpc.procedure
                .input(zod_1.z.object({ tid: zod_1.z.number() }))
                .output(prisma_flowda_1.TenantSchema)
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.getTenantInfo(input.tid);
            })),
            sendSmsVerifyCode: this.trpc.procedure.input(zod_1.z.object({ mobile: zod_1.z.string() })).mutation(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.sendSmsVerifyCode(input.mobile);
            })),
            verifyMobile: this.trpc.procedure.input(flowda_services_1.verifyMobileSchema).mutation(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.verifyMobile(input);
            })),
            accountExists: this.trpc.procedure.input(flowda_services_1.accountExistsSchema).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.accountExists(input);
            })),
            findByUnionIdAndTenantId: this.trpc.procedure
                .input(flowda_services_1.findByUnionIdAndTenantIdSchema)
                .output(zod_1.z.nullable(prisma_flowda_1.UserSchema))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.findByUnionIdAndTenantId(input);
            })),
            registerByUnionId: this.trpc.procedure
                .input(flowda_services_1.registerByUnionIdSchema)
                .output(prisma_flowda_1.UserSchema)
                .mutation(({ input }) => {
                return this.userService.registerByUnionId(input);
            }),
            getTenantByName: this.trpc.procedure
                .input(flowda_services_1.getTenantByNameSchema)
                .output(prisma_flowda_1.TenantSchema)
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.userService.getTenantByName(input);
            })),
            validate: this.trpc.procedure
                .input(zod_1.z.object({
                username: zod_1.z.string(),
                password: zod_1.z.string(),
            }))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const ret = yield this.userService.validate(input.username, input.password);
                return ret;
            })),
            validateByEmail: this.trpc.procedure
                .input(zod_1.z.object({
                email: zod_1.z.string(),
                tenantId: zod_1.z.number(),
                password: zod_1.z.string(),
            }))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const ret = yield this.userService.validateByEmail(input.tenantId, input.email, input.password);
                return ret;
            })),
            findMany: this.trpc.procedure
                .input(zod_1.z.object({
                userIds: zod_1.z.array(zod_1.z.number()),
            }))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const ret = yield this.prisma.user.findMany({
                    where: {
                        id: {
                            in: input.userIds,
                        },
                    },
                });
                return ret;
            })),
            updateUserInfo: this.trpc.procedure
                .input(zod_1.z.object({
                userId: zod_1.z.number(),
                email: zod_1.z.string().optional(),
                username: zod_1.z.string().optional(),
                image: zod_1.z.string().optional(),
            }))
                .mutation(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const ret = yield this.prisma.user.findUnique({
                    where: input,
                });
                return ret;
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
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
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
const prisma_flowda_1 = __webpack_require__("../../libs/prisma-flowda/src/index.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../libs/flowda-services/src/lib/schema.ts"));
const task_service_1 = __webpack_require__("../../libs/flowda-services/src/services/task.service.ts");
const user_service_1 = __webpack_require__("../../libs/flowda-services/src/services/user.service.ts");
const axios_1 = __webpack_require__("../../libs/flowda-services/src/axios.ts");
const dynamic_table_def_service_1 = __webpack_require__("../../libs/flowda-services/src/services/dynamic-table-def.service.ts");
const dynamic_table_data_service_1 = __webpack_require__("../../libs/flowda-services/src/services/dynamic-table-data.service.ts");
const symbols_1 = __webpack_require__("../../libs/flowda-services/src/symbols.ts");
const menu_service_1 = __webpack_require__("../../libs/flowda-services/src/services/menu.service.ts");
exports.flowdaServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_1.PrismaZodSchemaSymbol).toConstantValue(prisma_flowda_1.zt);
    bind(flowda_shared_1.CustomZodSchemaSymbol).toConstantValue(schema);
    bind(flowda_shared_1.APISymbol).toConstantValue(axios_1.axiosApiInstance);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, task_service_1.TaskService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, symbols_1.DynamicTableDefServiceSymbol, dynamic_table_def_service_1.DynamicTableDefService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, symbols_1.DynamicTableDataServiceSymbol, dynamic_table_data_service_1.DynamicTableDataService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, symbols_1.MenuServiceSymbol, menu_service_1.MenuService);
});


/***/ }),

/***/ "../../libs/flowda-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/flowdaServiceModule.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/lib/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/task.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/user.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/user.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/dynamic-table-def.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/dynamic-table-data.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-services/src/services/menu.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-services/src/lib/error-code.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserError = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
var UserError;
(function (UserError) {
    class UserExist extends flowda_shared_1.CustomError {
        constructor() {
            super(1001, 'User exist');
        }
    }
    UserError.UserExist = UserExist;
})(UserError || (exports.UserError = UserError = {}));


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
    REFRESH_TOKEN_SECRET: zod_1.z.string().min(1),
    REFRESH_TOKEN_EXPIRE: zod_1.z.number().default(7 * 24 * 60 * 60), // 1 week
    ACCESS_TOKEN_SECRET: zod_1.z.string().min(1),
    ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(24 * 60 * 60),
    C7_REST_URL: zod_1.z.string().min(1),
    SMS_SECRET_ID: zod_1.z.string().min(1),
    SMS_SECRET_KEY: zod_1.z.string().min(1),
});


/***/ }),

/***/ "../../libs/flowda-services/src/lib/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableDataResourceSchema = exports.DynamicTableDefColumnResourceSchema = exports.DynamicTableDefResourceSchema = exports.WorkflowUserResourceSchema = exports.ProcessDefinitionResourceSchema = exports.TaskResourceSchema = exports.TaskFormRelationResourceSchema = exports.MenuResourceSchema = exports.TenantResourceSchema = exports.UserResourceSchema = void 0;
const prisma_flowda_1 = __webpack_require__("../../libs/prisma-flowda/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const zod_1 = __webpack_require__("zod");
exports.UserResourceSchema = prisma_flowda_1.UserSchema.omit({
    hashedPassword: true,
    hashedRefreshToken: true,
})
    .extend({
    // todo: 暂时先 optional, 否则 编辑 不填 password 无法通过
    // 这个 extend password 是为了配合 createRequestUrl
    password: zod_1.z.string().optional().openapi({
        title: '密码',
        prisma: false,
    }),
    __meta: (0, flowda_shared_1.meta)({
        extends: 'UserSchema',
    }),
})
    .openapi({
    custom: {
        route_prefix: '/tenant_admin/tenant',
    },
});
exports.TenantResourceSchema = prisma_flowda_1.TenantWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'TenantSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/tenant_admin/tenant',
    },
});
exports.MenuResourceSchema = prisma_flowda_1.MenuWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'MenuSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/tenant_admin/tenant',
    },
});
exports.TaskFormRelationResourceSchema = prisma_flowda_1.TaskFormRelationSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'TaskFormRelationSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/workflows/manage',
    },
});
// prisma:false camunda API
exports.TaskResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string().cuid().openapi({ title: '任务 Id' }),
    name: zod_1.z.string().openapi({ title: '任务标题' }),
    assignee: zod_1.z.string().openapi({ title: '处理人' }),
    created: zod_1.z.date().openapi({ title: '创建时间' }),
    processDefinitionId: zod_1.z.string().openapi({ title: '流程定义' }),
    processInstanceId: zod_1.z.string().openapi({ title: '流程实例' }),
    taskDefinitionKey: zod_1.z.string().openapi({ title: '任务定义' }),
    variables: zod_1.z.string().openapi({ title: '变量' }),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '任务',
    display_column: 'name',
    display_primary_key: false,
});
exports.ProcessDefinitionResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    version: zod_1.z.number(),
    resource: zod_1.z.string(),
    deploymentId: zod_1.z.string().cuid(),
    suspended: zod_1.z.boolean(),
    historyTimeToLive: zod_1.z.number(),
    startableInTasklist: zod_1.z.boolean(),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '已部署流程图',
    display_column: 'name',
    display_primary_key: 'true',
});
exports.WorkflowUserResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '用户',
    display_column: 'id',
});
exports.DynamicTableDefResourceSchema = prisma_flowda_1.DynamicTableDefWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'DynamicTableDefSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/tenant_admin/dynamic_table',
    },
});
exports.DynamicTableDefColumnResourceSchema = prisma_flowda_1.DynamicTableDefColumnWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'DynamicTableDefColumnSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/tenant_admin/dynamic_table',
    },
});
exports.DynamicTableDataResourceSchema = prisma_flowda_1.DynamicTableDataWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'DynamicTableDataSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/tenant_admin/dynamic_table',
    },
});


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
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
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
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.DynamicTableSchemaTransformerSymbol)),
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
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
            {
                name: '动态表',
                slug: 'dynamic_table',
                id: 'dynamic_table',
                children: [{ id: 'dynamic_table_defs', name: '动态表定义列表', slug: 'dynamic_table_defs' }],
            },
        ],
    },
];
let MenuService = MenuService_1 = class MenuService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(MenuService_1.name);
    }
    get(reqUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (reqUser.tid == null) {
                throw new Error('No tenant id');
            }
            const tenantRet = yield this.prisma.tenant.findUnique({
                where: {
                    id: reqUser.tid,
                },
            });
            if (tenantRet == null) {
                throw new Error('No tenant');
            }
            const menuRet = yield this.prisma.menu.findUnique({
                where: {
                    tenantId: reqUser.tid,
                },
            });
            if (tenantRet.name === 'superadmin') {
                if (menuRet && Array.isArray(menuRet.treeData)) {
                    return menuRet.treeData.concat(tenantMenu);
                }
                else {
                    return tenantMenu;
                }
            }
            else {
                return (menuRet === null || menuRet === void 0 ? void 0 : menuRet.treeData) || [];
            }
        });
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = MenuService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], MenuService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/task.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TaskService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskService = exports.GetTaskFormSchemaDto = exports.StartSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.APISymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Object, Function])
], TaskService);


/***/ }),

/***/ "../../libs/flowda-services/src/services/user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifyMobileSchemaDto = exports.verifyMobileSchema = exports.resetPasswordSchemaDto = exports.resetPasswordSchema = exports.RegisterByUnionIdSchemaDto = exports.registerByUnionIdSchema = exports.FindByUnionIdAndTenantIdSchemaDto = exports.findByUnionIdAndTenantIdSchema = exports.GetTenantByNameSchemaDto = exports.getTenantByNameSchema = exports.AccountExistsSchemaDto = exports.accountExistsSchema = exports.RegisterDto = exports.registerSchema = void 0;
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterDto extends (0, nestjs_zod_1.createZodDto)(exports.registerSchema) {
}
exports.RegisterDto = RegisterDto;
exports.accountExistsSchema = zod_1.z.object({
    username: zod_1.z.string(),
    tenantName: zod_1.z.string(),
});
class AccountExistsSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.accountExistsSchema) {
}
exports.AccountExistsSchemaDto = AccountExistsSchemaDto;
exports.getTenantByNameSchema = zod_1.z.object({
    tenantName: zod_1.z.string(),
});
class GetTenantByNameSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.getTenantByNameSchema) {
}
exports.GetTenantByNameSchemaDto = GetTenantByNameSchemaDto;
exports.findByUnionIdAndTenantIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class FindByUnionIdAndTenantIdSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.findByUnionIdAndTenantIdSchema) {
}
exports.FindByUnionIdAndTenantIdSchemaDto = FindByUnionIdAndTenantIdSchemaDto;
exports.registerByUnionIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterByUnionIdSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.registerByUnionIdSchema) {
}
exports.RegisterByUnionIdSchemaDto = RegisterByUnionIdSchemaDto;
exports.resetPasswordSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    tenantId: zod_1.z.number(),
    password: zod_1.z.string(),
});
class resetPasswordSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.resetPasswordSchema) {
}
exports.resetPasswordSchemaDto = resetPasswordSchemaDto;
exports.verifyMobileSchema = zod_1.z.object({
    uid: zod_1.z.number(),
    tid: zod_1.z.number(),
    mobile: zod_1.z.string(),
    code: zod_1.z.string(),
    slug: zod_1.z.string(),
});
class verifyMobileSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.verifyMobileSchema) {
}
exports.verifyMobileSchemaDto = verifyMobileSchemaDto;


/***/ }),

/***/ "../../libs/flowda-services/src/services/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
const error_code_1 = __webpack_require__("../../libs/flowda-services/src/lib/error-code.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const flowda_env_1 = __webpack_require__("../../libs/flowda-services/src/lib/flowda-env.ts");
const common_1 = __webpack_require__("@nestjs/common");
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
const symbols_1 = __webpack_require__("../../libs/flowda-services/src/symbols.ts");
let UserService = UserService_1 = class UserService {
    constructor(prisma, smsClient, loggerFactory) {
        this.prisma = prisma;
        this.smsClient = smsClient;
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
                this.logger.warn('User exist:' + dto.username);
                throw new error_code_1.UserError.UserExist();
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
    validateByEmail(tenantId, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield this.prisma.user.findFirstOrThrow({
                where: {
                    email: email,
                    tenantId: tenantId,
                },
            });
            return this.validate(userRet.username, password);
        });
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    username: username,
                },
                include: {
                    tenant: true,
                },
            });
            if (!user) {
                throw new common_1.UnauthorizedException({ reason: 'User does not exist', username });
            }
            if (!user.hashedPassword) {
                throw new common_1.UnauthorizedException({ reason: 'Password is not initialized', username });
            }
            const match = yield bcrypt.compare(password, user.hashedPassword);
            if (!match) {
                throw new common_1.UnauthorizedException({ reason: 'Username and password is not matched', username });
            }
            const payload = { uid: user.id, tid: user.tenantId };
            const rt = this.generateJwt(payload, flowda_env_1.FLOWDA_ENV.REFRESH_TOKEN_SECRET, flowda_env_1.FLOWDA_ENV.REFRESH_TOKEN_EXPIRE);
            yield this.prisma.user.update({
                where: { id: user.id },
                data: {
                    hashedRefreshToken: rt.token,
                },
            });
            const at = this.generateJwt(payload, flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET, flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE);
            this.logger.log(`validate pass, t: ${user.tenant.name}, u: ${user.username}, e: ${(0, dayjs_1.default)().add(flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_EXPIRE, 's')}`);
            return {
                username: user.username,
                refresh_token: rt.token,
                access_token: at.token,
            };
        });
    }
    generateJwt(payload, secret, expires) {
        const exp0 = Date.now() + expires * 1000;
        const token = jwt.sign(Object.assign(Object.assign({}, payload), { exp0 }), secret, {
            expiresIn: `${expires}s`,
        });
        const decode = jwt.decode(token);
        return {
            token: token,
            iat: decode.iat,
            exp: decode.exp,
        };
    }
    verifyAccessToken(at) {
        return jwt.verify(at, flowda_env_1.FLOWDA_ENV.ACCESS_TOKEN_SECRET);
    }
    getUserInfo(uid) {
        // todo: 后续可以放 profile
        return this.prisma.user.findUniqueOrThrow({
            where: {
                id: uid,
            },
            select: {
                id: true,
                username: true,
                unionid: true,
            },
        });
    }
    getTenantInfo(tid) {
        return this.prisma.tenant.findUniqueOrThrow({
            where: {
                id: tid,
            },
        });
    }
    sendSmsVerifyCode(mobile) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const code = generateVerificationCode();
            this.logger.debug(`[sendSmsVerifyCode] ${mobile} ${code}`);
            try {
                const res = yield this.smsClient.SendSms({
                    SmsSdkAppId: '1400886368',
                    PhoneNumberSet: ['+86' + mobile],
                    TemplateId: '2062585',
                    SignName: '上海只冲网络科技有限公司',
                    TemplateParamSet: [code],
                });
                this.logger.debug('[sendSmsVerifyCode]');
                console.log(res);
            }
            catch (e) {
                throw new Error(e);
                console.error(e);
            }
            return this.prisma.sentSms.create({
                data: {
                    mobile,
                    code: generateVerificationCode(),
                },
            });
        });
    }
    verifyMobile(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            yield this.prisma.user.findFirstOrThrow({
                where: {
                    id: dto.uid,
                    tenantId: dto.tid,
                },
            });
            return this.prisma.user.update({
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
                    unionid: dto.unionid,
                    tenantId: dto.tenantId,
                },
            });
            return ret;
        });
    }
    registerByUnionId(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    unionid: dto.unionid,
                    tenantId: dto.tenantId,
                },
            });
            if (user) {
                throw new Error(`User exits with unionid: ${dto.unionid}`);
            }
            const aUser = yield this.prisma.user.create({
                data: {
                    username: dto.unionid, // 后续可以判断如果 unionid === username 则可以改动一次用户名
                    hashedPassword: null,
                    hashedRefreshToken: null,
                    unionid: dto.unionid,
                    tenantId: dto.tenantId,
                },
            });
            return aUser;
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(symbols_1.SmsClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Object, Function])
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


/***/ }),

/***/ "../../libs/flowda-services/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsClientSymbol = exports.MenuServiceSymbol = exports.DynamicTableDefServiceSymbol = exports.DynamicTableDataServiceSymbol = void 0;
exports.DynamicTableDataServiceSymbol = Symbol.for('DynamicTableDataService');
exports.DynamicTableDefServiceSymbol = Symbol.for('DynamicTableDefService');
exports.MenuServiceSymbol = Symbol.for('MenuService');
exports.SmsClientSymbol = Symbol.for('SmsClient');


/***/ }),

/***/ "../../libs/flowda-shared-node/src/assist/audit.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuditService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = exports.QueryAuditSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], AuditService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/assist/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.TableFilterSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
// import { TableFilterSchema } from '@flowda-projects/prisma-wms'
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], TableFilterService);


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
const table_filter_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts");
const audit_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/assist/audit.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, table_filter_service_1.TableFilterService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, audit_service_1.AuditService);
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
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/assist/audit.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
const prismaUtils_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaUtils.ts");
const symbols_1 = __webpack_require__("../../libs/flowda-shared/src/symbols.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.DataServiceSymbol, data_service_1.DataService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.SchemaServiceSymbol, schema_service_1.SchemaService);
    bind(symbols_1.PrismaSchemaServiceSymbol).to(prismaSchema_service_1.PrismaSchemaService).inSingletonScope();
    bind(flowda_shared_1.PrismaUtilsSymbol).to(prismaUtils_1.PrismaUtils).inSingletonScope();
    bind(symbols_1.SchemaTransformerSymbol).to(schemaTransformer_1.SchemaTransformer).inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(symbols_1.SchemaTransformerSymbol);
            transformer.setZodType(z);
            return transformer;
        };
    });
    bind(flowda_shared_1.DynamicTableSchemaTransformerSymbol)
        .to(flowda_shared_1.DynamicTableSchemaTransformer)
        .inTransientScope();
});


/***/ }),

/***/ "../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/schema.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COSSymbol = exports.CustomError = exports.K3CloudIdentifyInfoSymbol = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.ENVSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = void 0;
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
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;
exports.COSSymbol = Symbol('COS');


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
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const symbols_1 = __webpack_require__("../../libs/flowda-shared/src/symbols.ts");
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
            this.logger.debug(`get(reqUser ${JSON.stringify(reqUser, null, 2)}, path: ${pathname}, query: ${JSON.stringify(query, null, 2)})`);
            const findParamRet = yield this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (action === 'findUnique') {
                const ret = yield this.prisma[resource][action](param);
                if (ret.isDeleted)
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
            this.logger.debug(`put(reqUser ${JSON.stringify(reqUser, null, 2)}), path: ${path}, values: ${JSON.stringify(values, null, 2)}`);
            const updateParamRet = yield this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
                select: _.mapValues(param.data, item => true),
            });
            this.logger.debug(`prevRet ${JSON.stringify(prevRet, null, 2)}`);
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
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[post] reqUser ${JSON.stringify(reqUser, null, 2)}`);
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
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
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
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
                return ret;
            }
        });
    }
    remove(reqUser, pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[remove] reqUser ${JSON.stringify(reqUser, null, 2)}`);
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
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
};
exports.DataService = DataService;
exports.DataService = DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(symbols_1.PrismaSchemaServiceSymbol)),
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
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(prismaUtils, schemaService, loggerFactory) {
        this.prismaUtils = prismaUtils;
        this.schemaService = schemaService;
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields, theResourceSchema) {
        let fieldsArr = [];
        if (fields == null) {
            fieldsArr = theResourceSchema.columns.map(c => c.name);
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
            this.logger.debug(`[toFindParam] pathname: ${pathname}, query: ${JSON.stringify(query, null, 2)}`);
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
                const skip = query['current'] ? (_.toNumber(query['current']) - 1) * _.toNumber(query['pageSize']) : undefined;
                const take = query['pageSize'] ? _.toNumber(query['pageSize']) : undefined;
                if (parsedPath.length > 1) {
                    // 情况1：根据前一个 resource id 搜索 list
                    const pResource = parsedPath[parsedPath.length - 2];
                    // this.logger.log(`${resource}.findMany`)
                    param = _.omitBy({
                        where: Object.assign({
                            [`${pResource.resource}Id`]: pResource.id,
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
                }
                else {
                    param = _.omitBy({
                        where: Object.assign({
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
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
        if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
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
        item[k] = _.mapKeys(item[k], (v, k) => {
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
                return _.toNumber(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        _.forEach(item, (value, key) => {
            _.set(ret, key.replace(/\./g, '.'), value);
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
        // console.log(relationFields)
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
exports.PrismaSchemaService = PrismaSchemaService;
exports.PrismaSchemaService = PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaUtilsSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.SchemaServiceSymbol)),
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
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
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
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
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
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
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
                acc[k] = transformer.buildSchema(k).toSchema();
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
    tslib_1.__param(2, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaTransformer = exports.SUFFIX = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_1 = __webpack_require__("zod");
const inversify_1 = __webpack_require__("inversify");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
exports.SUFFIX = 'ResourceSchema';
let SchemaTransformer = SchemaTransformer_1 = class SchemaTransformer {
    constructor(loggerFactory, prismaZod) {
        this.prismaZod = prismaZod;
        this.modelLevelSchema = {};
        this.associations = [];
        this.columns = [];
        this.logger = loggerFactory(SchemaTransformer_1.name);
    }
    setZodType(z) {
        this.zodType = z;
    }
    buildSchema(schemaName) {
        if (!this.zodType) {
            const errMsg = 'zodType is not initialized';
            this.logger.error(errMsg);
            throw new Error(errMsg);
        }
        this.schemaName = schemaName;
        this.jsonSchema = (0, zod_openapi_1.generateSchema)(this.zodType);
        this.modelLevelSchema = this.getModelSchema();
        const props = this.getProperties();
        this.columns = props.reduce((acc, k) => {
            const jsProp = this.jsonSchema.properties[k];
            if (jsProp.virtual === 'true') {
                return acc; // 不处理 virtual，目前只有 1..1 用到
            }
            if (jsProp.type === 'array') {
                if (!jsProp.model_name) {
                    throw new Error(`${this.schemaName} 1..n model_name is not set`);
                }
                this.associations.push({
                    foreign_key: this.getForeignKey(jsProp.foreign_key),
                    model_name: jsProp.model_name,
                    primary_key: jsProp.primary_key || 'id',
                    name: k,
                    slug: (0, matchPath_1.toPath)(k),
                    display_name: jsProp.title,
                    schema_name: jsProp.model_name + exports.SUFFIX,
                });
                return acc; // 不处理 array
            }
            const c = _.omitBy(_.assign({ name: k }, {
                name: k,
                column_type: this.doColumnType(k),
                format: this.doFormat(k),
                display_name: this.doDisplayName(k),
                access_type: this.doAccessType(k),
                reference: jsProp.reference ? this.doRef(k) : undefined,
                validators: this.doValidators(k),
                prisma: jsProp.prisma,
            }), _.isUndefined);
            acc.push(c);
            return acc;
        }, []);
        if (Array.isArray(this.extendSchema.columns)) {
            // 合并 __meta.columns 和 cols
            this.columns.forEach((c) => {
                const f = this.extendSchema.columns.find((c1) => c1.name === c.name);
                Object.assign(c, f || {});
            });
        }
        return this;
    }
    toSchema() {
        const name = this.schemaName.split(exports.SUFFIX)[0];
        return _.omitBy({
            name: name,
            slug: (0, matchPath_1.toPath)(name),
            prisma: this.modelLevelSchema.prisma != null ? this.modelLevelSchema.prisma : undefined,
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            custom: this.jsonSchema.custom,
            display_column: this.doDisplayColumn(this.modelLevelSchema.display_column),
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null
                ? true
                : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
            // __jsonschema: this.jsonSchema,
        }, _.isUndefined);
    }
    doDisplayColumn(display_column) {
        if (!display_column)
            return undefined; // 默认 id
        const cols = display_column.split(',');
        if (cols.length > 1)
            return cols;
        else
            return display_column;
    }
    doRef(k) {
        const jsProp = this.jsonSchema.properties[k];
        // console.log(jsProp)
        const t = jsProp.reference + 'Schema';
        const ref = (0, zod_openapi_1.generateSchema)(this.prismaZod[t]);
        const { primary_key, display_name, display_column } = ref;
        const ret = {
            model_name: jsProp.reference,
            'x-relationField': jsProp['x-relationField'] || k.replace('Id', ''),
            'x-onSoftDelete': !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1 ? 'Restrict' : 'SetNull',
            primary_key,
            display_name: jsProp.display_name || display_name,
            display_column: this.doDisplayColumn(display_column),
            // foreign_key: jsProp.foreign_key,
        };
        if (jsProp['x-unique']) {
            return Object.assign(Object.assign({}, ret), { 'x-unique': true });
        }
        else {
            return ret;
        }
    }
    getProperties() {
        // 拿到最大的 columns
        const keys = Object.keys(this.zodType.shape);
        const properties = keys.filter(key => {
            const item = this.zodType.shape[key];
            return (key !== '__meta' &&
                !(item instanceof zod_1.z.ZodDefault || item._def.typeName === 'ZodDefault') &&
                !(item instanceof zod_1.z.ZodNever || item._def.typeName === 'ZodDefault') &&
                keys.indexOf(key + 'Id') === -1 && // 忽略 product (product + 'Id' === productId)
                key !== 'isDeleted');
        });
        return properties;
    }
    getModelSchema() {
        this.checkValid();
        const _extends = this.extendSchema.extends;
        const { prisma } = this.extendSchema;
        if (prisma !== false && !this.prismaZod[_extends]) {
            throw new Error('no _extends');
        }
        else {
            if (prisma !== false) {
                return (0, zod_openapi_1.generateSchema)(this.prismaZod[_extends]);
            }
            else {
                const ret = Object.assign({ prisma: false }, _.omit(this.jsonSchema, ['type', 'properties', 'required']));
                // this.logger.debug!(ret)
                return ret;
            }
        }
    }
    checkValid() {
        // 暂时认为必须有 __meta，简化下逻辑
        // 现在 __meta 里必须定义 extends
        // todo: support no prisma schema
        if (!this.jsonSchema.properties.__meta) {
            throw new Error('no __meta');
        }
        this.extendSchema = JSON.parse(this.jsonSchema.properties.__meta.description);
    }
    doDisplayName(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.title === 'string') {
            return jsProp.title;
        }
        else {
            if (k === 'createdAt') {
                return '创建时间';
            }
            if (k === 'updatedAt') {
                return '更新时间';
            }
            return;
        }
    }
    doAccessType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.access_type === 'string') {
            return jsProp.access_type;
        }
        else {
            if (k === 'createdAt' || k === 'updatedAt' || k === this.modelLevelSchema.primary_key) {
                return 'read_only';
            }
            else {
                return;
            }
        }
    }
    doColumnType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            return 'tag';
        }
        else if (jsProp.override_type) {
            jsProp.type = jsProp.override_type;
        }
        else if (jsProp.format === 'date-time') {
            return 'datetime';
        }
        if (jsProp.column_type) {
            return jsProp.column_type;
        }
        return jsProp.reference ? 'reference' : jsProp.type;
    }
    doValidators(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (!jsProp) {
            this.logger.warn('undef key: ' + k);
            return;
        }
        const validators = [];
        if (['createdAt', 'updatedAt'].indexOf(k) === -1 && !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1) {
            validators.push({ required: true });
        }
        return validators.length === 0 ? undefined : validators;
    }
    doFormat(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            if (jsProp['x-enumNames']) {
                const enumNames = jsProp['x-enumNames'].split(',');
                return {
                    select_options: jsProp.enum.map((opt, idx) => ({
                        value: opt,
                        label: enumNames[idx],
                    })),
                };
            }
            return {
                select_options: jsProp.enum.map((opt) => ({
                    value: opt,
                    label: opt,
                })),
            };
        }
        else {
            return;
        }
    }
    getForeignKey(fk) {
        if (fk)
            return fk;
        const schema = this.extendSchema.extends;
        return _.lowerFirst(schema.split('Schema')[0]) + 'Id';
    }
};
exports.SchemaTransformer = SchemaTransformer;
exports.SchemaTransformer = SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);


/***/ }),

/***/ "../../libs/flowda-shared/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowdaTrpcClientSymbol = exports.DynamicTableSchemaTransformerSymbol = exports.SchemaServiceSymbol = exports.DataServiceSymbol = exports.PrismaUtilsSymbol = exports.SchemaTransformerSymbol = exports.PrismaSchemaServiceSymbol = void 0;
exports.PrismaSchemaServiceSymbol = Symbol.for('PrismaSchemaService');
exports.SchemaTransformerSymbol = Symbol.for('SchemaTransformer');
exports.PrismaUtilsSymbol = Symbol.for('PrismaUtils');
exports.DataServiceSymbol = Symbol.for('DataService');
exports.SchemaServiceSymbol = Symbol.for('SchemaService');
exports.DynamicTableSchemaTransformerSymbol = Symbol.for('DynamicTableSchemaTransformer');
exports.FlowdaTrpcClientSymbol = Symbol.for('FlowdaTrpcClient');


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

/***/ "../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(types_1.ServiceSymbol).map((service) => {
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
exports.matchPath = exports.toSchemaName = exports.toPath = exports.toModelName = exports.isLikeNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
plur.addSingularRule(/data/i, 'data');
plur.addSingularRule(/defs/i, 'def');
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
function toSchemaName(slug) {
    const p = plur.singular(slug);
    return toModelName(p) + 'ResourceSchema';
}
exports.toSchemaName = toSchemaName;
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

/***/ "../../libs/prisma-flowda/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zt = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/prisma-flowda/src/zod/index.ts"), exports);
exports.zt = tslib_1.__importStar(__webpack_require__("../../libs/prisma-flowda/src/zod/index.ts"));


/***/ }),

/***/ "../../libs/prisma-flowda/src/zod/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentSmsSchema = exports.MenuWithRelationsSchema = exports.MenuSchema = exports.DynamicTableDataWithRelationsSchema = exports.DynamicTableDataSchema = exports.DynamicTableDefColumnWithRelationsSchema = exports.DynamicTableDefColumnSchema = exports.DynamicTableDefWithRelationsSchema = exports.DynamicTableDefSchema = exports.AuditsSchema = exports.UserProfileWithRelationsSchema = exports.UserProfileSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.TableFilterSchema = exports.TaskFormRelationSchema = exports.TenantWithRelationsSchema = exports.TenantSchema = exports.DynamicColumnTypeSchema = exports.JsonNullValueFilterSchema = exports.NullsOrderSchema = exports.JsonNullValueInputSchema = exports.NullableJsonNullValueInputSchema = exports.SortOrderSchema = exports.SentSmsScalarFieldEnumSchema = exports.MenuScalarFieldEnumSchema = exports.DynamicTableDataScalarFieldEnumSchema = exports.DynamicTableDefColumnScalarFieldEnumSchema = exports.DynamicTableDefScalarFieldEnumSchema = exports.AuditsScalarFieldEnumSchema = exports.UserProfileScalarFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.TableFilterScalarFieldEnumSchema = exports.TaskFormRelationScalarFieldEnumSchema = exports.TenantScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
const zod_1 = __webpack_require__("zod");
const client_flowda_1 = __webpack_require__("@prisma/client-flowda");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
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
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.TenantScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name']);
exports.TaskFormRelationScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'taskDefinitionKey', 'formKey']);
exports.TableFilterScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'path', 'name', 'filterJSON']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'username', 'hashedPassword', 'hashedRefreshToken', 'unionid', 'email', 'mobile', 'image', 'tenantId']);
exports.UserProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'fullName', 'tenantId']);
exports.AuditsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'auditId', 'auditType', 'userId', 'username', 'action', 'auditChanges', 'version']);
exports.DynamicTableDefScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'extendedSchema', 'tenantId']);
exports.DynamicTableDefColumnScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'dynamicTableDefId', 'name', 'type', 'extendedSchema', 'tenantId']);
exports.DynamicTableDataScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'dynamicTableDefId', 'data', 'tenantId']);
exports.MenuScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'treeData', 'tenantId']);
exports.SentSmsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'mobile', 'code']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.JsonNullValueInputSchema = zod_1.z.enum(['JsonNull',]);
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.DynamicColumnTypeSchema = zod_1.z.enum(['string', 'textarea', 'integer', 'boolean', 'datetime', 'tag', 'reference']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// TENANT SCHEMA
/////////////////////////////////////////
exports.TenantSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "租户名称" }),
}).openapi({ "display_name": "租户信息", "display_column": "name" });
exports.TenantWithRelationsSchema = exports.TenantSchema.merge(zod_1.z.object({
    users: zod_1.z.lazy(() => exports.UserWithRelationsSchema).array().openapi({ "model_name": "User" }),
    menu: zod_1.z.lazy(() => exports.MenuWithRelationsSchema).nullable(),
    dynamicTableDefs: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema).array().openapi({ "model_name": "DynamicTableDef" }),
    dynamicTableDefColumns: zod_1.z.lazy(() => exports.DynamicTableDefColumnWithRelationsSchema).array().openapi({ "model_name": "DynamicTableDefColumn" }),
    dynamicTableData: zod_1.z.lazy(() => exports.DynamicTableDataWithRelationsSchema).array().openapi({ "model_name": "DynamicTableData" }),
}));
/////////////////////////////////////////
// TASK FORM RELATION SCHEMA
/////////////////////////////////////////
exports.TaskFormRelationSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    taskDefinitionKey: zod_1.z.string(),
    formKey: zod_1.z.string(),
}).openapi({ "display_name": "节点和表单关联关系" });
/////////////////////////////////////////
// TABLE FILTER SCHEMA
/////////////////////////////////////////
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    path: zod_1.z.string(),
    name: zod_1.z.string(),
    filterJSON: zod_1.z.string(),
}).openapi({ "display_name": "表和查询条件的关系" });
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    username: zod_1.z.string(),
    hashedPassword: zod_1.z.string().nullable(),
    hashedRefreshToken: zod_1.z.string().nullable(),
    unionid: zod_1.z.string().nullable().openapi({ "title": "微信" }),
    email: zod_1.z.string().nullable().openapi({ "title": "邮箱" }),
    mobile: zod_1.z.string().nullable().openapi({ "title": "手机号" }),
    image: zod_1.z.string().nullable().openapi({ "title": "头像" }),
    tenantId: zod_1.z.number().int().openapi({ "reference": "Tenant" }),
}).openapi({ "display_name": "员工", "display_column": "username" });
exports.UserWithRelationsSchema = exports.UserSchema.merge(zod_1.z.object({
    profile: zod_1.z.lazy(() => exports.UserProfileWithRelationsSchema).nullable(),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema),
}));
/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////
exports.UserProfileSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    userId: zod_1.z.number().int(),
    fullName: zod_1.z.string(),
    tenantId: zod_1.z.number().int(),
});
exports.UserProfileWithRelationsSchema = exports.UserProfileSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));
/////////////////////////////////////////
// AUDITS SCHEMA
/////////////////////////////////////////
exports.AuditsSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    auditId: zod_1.z.number().int().openapi({ "title": "关联" }),
    auditType: zod_1.z.string().openapi({ "title": "审计类型(关联" }),
    userId: zod_1.z.string().openapi({ "title": "用户" }),
    username: zod_1.z.string().nullable().openapi({ "title": "用户名" }),
    action: zod_1.z.string().openapi({ "title": "动作(e.g." }),
    auditChanges: zod_1.z.string().openapi({ "title": "变化" }),
    version: zod_1.z.number().int().openapi({ "title": "版本" }),
}).openapi({ "display_name": "审计日志" });
/////////////////////////////////////////
// DYNAMIC TABLE DEF SCHEMA
/////////////////////////////////////////
exports.DynamicTableDefSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "表英文名" }),
    extendedSchema: exports.NullableJsonValue.optional(),
    tenantId: zod_1.z.number().int().openapi({ "reference": "Tenant" }),
}).openapi({ "display_name": "动态表定义", "display_column": "name" });
exports.DynamicTableDefWithRelationsSchema = exports.DynamicTableDefSchema.merge(zod_1.z.object({
    dynamicTableDefColumns: zod_1.z.lazy(() => exports.DynamicTableDefColumnWithRelationsSchema).array().openapi({ "model_name": "DynamicTableDefColumn" }),
    dynamicTableData: zod_1.z.lazy(() => exports.DynamicTableDataWithRelationsSchema).array().openapi({ "model_name": "DynamicTableData" }),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema),
}));
/////////////////////////////////////////
// DYNAMIC TABLE DEF COLUMN SCHEMA
/////////////////////////////////////////
exports.DynamicTableDefColumnSchema = zod_1.z.object({
    type: exports.DynamicColumnTypeSchema.openapi({ "title": "类型" }),
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    dynamicTableDefId: zod_1.z.number().int().openapi({ "reference": "DynamicTableDef" }),
    name: zod_1.z.string().openapi({ "title": "列名" }),
    extendedSchema: exports.NullableJsonValue.optional(),
    tenantId: zod_1.z.number().int().openapi({ "reference": "Tenant" }),
}).openapi({ "display_name": "动态表列定义", "display_column": "name" });
exports.DynamicTableDefColumnWithRelationsSchema = exports.DynamicTableDefColumnSchema.merge(zod_1.z.object({
    dynamicTableDef: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema),
}));
/////////////////////////////////////////
// DYNAMIC TABLE DATA SCHEMA
/////////////////////////////////////////
exports.DynamicTableDataSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    dynamicTableDefId: zod_1.z.number().int().openapi({ "reference": "DynamicTableDef" }),
    data: exports.InputJsonValue,
    tenantId: zod_1.z.number().int().openapi({ "reference": "Tenant" }),
}).openapi({ "display_name": "动态表数据" });
exports.DynamicTableDataWithRelationsSchema = exports.DynamicTableDataSchema.merge(zod_1.z.object({
    dynamicTableDef: zod_1.z.lazy(() => exports.DynamicTableDefWithRelationsSchema),
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema),
}));
/////////////////////////////////////////
// MENU SCHEMA
/////////////////////////////////////////
exports.MenuSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    treeData: exports.InputJsonValue,
    tenantId: zod_1.z.number().int().openapi({ "reference": "Tenant" }),
}).openapi({ "display_name": "菜单", "display_column": "name" });
exports.MenuWithRelationsSchema = exports.MenuSchema.merge(zod_1.z.object({
    tenant: zod_1.z.lazy(() => exports.TenantWithRelationsSchema),
}));
/////////////////////////////////////////
// SENT SMS SCHEMA
/////////////////////////////////////////
exports.SentSmsSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    mobile: zod_1.z.string(),
    code: zod_1.z.string(),
}).openapi({ "display_name": "已发送短信", "display_column": "name" });


/***/ }),

/***/ "@anatine/zod-openapi":
/***/ ((module) => {

module.exports = require("@anatine/zod-openapi");

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

/***/ "dayjs":
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ "tencentcloud-sdk-nodejs":
/***/ ((module) => {

module.exports = require("tencentcloud-sdk-nodejs");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

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
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const http_proxy_middleware_1 = __webpack_require__("http-proxy-middleware");
const flowda_services_1 = __webpack_require__("../../libs/flowda-services/src/index.ts");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const flowda_services_trpc_server_1 = __webpack_require__("../../libs/flowda-services-trpc-server/src/index.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'flowda-api';
        app.setGlobalPrefix(globalPrefix);
        const trpc = app.get(flowda_services_trpc_server_1.TrpcRouter);
        trpc.applyMiddleware(app, globalPrefix);
        const user = app.get(flowda_services_1.UserService);
        app.use((req, res, next) => {
            if (req.originalUrl.includes('favicon.ico')) {
                res.status(204).end();
            }
            else if (req.url.indexOf(`/${globalPrefix}/camunda/engine-rest/`) > -1) {
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
        app.use(`/${globalPrefix}/camunda/engine-rest`, (0, http_proxy_middleware_1.createProxyMiddleware)({
            target: flowda_services_1.FLOWDA_ENV.C7_REST_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/${globalPrefix}/camunda/engine-rest`]: '',
            },
        }));
        const port = process.env.PORT || 3350;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
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