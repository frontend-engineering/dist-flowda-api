
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type TenantPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Tenant"
  objects: {
    /**
     * @schema.model_name User
     */
    users: UserPayload<ExtArgs>[]
    menu: MenuPayload<ExtArgs> | null
    /**
     * @schema.model_name DynamicTableDef
     */
    dynamicTableDefs: DynamicTableDefPayload<ExtArgs>[]
    /**
     * @schema.model_name DynamicTableDefColumn
     */
    dynamicTableDefColumns: DynamicTableDefColumnPayload<ExtArgs>[]
    /**
     * @schema.model_name DynamicTableData
     */
    dynamicTableData: DynamicTableDataPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    /**
     * @schema.title 租户名称
     */
    name: string
  }, ExtArgs["result"]["tenant"]>
  composites: {}
}

/**
 * Model Tenant
 * @schema.display_name 租户信息
 * @schema.display_column name
 */
export type Tenant = runtime.Types.DefaultSelection<TenantPayload>
export type TaskFormRelationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TaskFormRelation"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    taskDefinitionKey: string
    formKey: string
  }, ExtArgs["result"]["taskFormRelation"]>
  composites: {}
}

/**
 * Model TaskFormRelation
 * @schema.display_name 节点和表单关联关系
 */
export type TaskFormRelation = runtime.Types.DefaultSelection<TaskFormRelationPayload>
export type TableFilterPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TableFilter"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    path: string
    name: string
    filterJSON: string
  }, ExtArgs["result"]["tableFilter"]>
  composites: {}
}

/**
 * Model TableFilter
 * @schema.display_name 表和查询条件的关系
 */
export type TableFilter = runtime.Types.DefaultSelection<TableFilterPayload>
export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    profile: UserProfilePayload<ExtArgs> | null
    tenant: TenantPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    username: string
    hashedPassword: string | null
    hashedRefreshToken: string | null
    /**
     * @schema.title 微信 unionid
     */
    unionid: string | null
    /**
     * @schema.title 邮箱
     */
    email: string | null
    /**
     * @schema.title 手机号
     */
    mobile: string | null
    /**
     * @schema.title 头像
     */
    image: string | null
    /**
     * @schema.reference Tenant
     */
    tenantId: number
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * @schema.display_name 员工
 * @schema.display_column username
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type UserProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "UserProfile"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    userId: number
    fullName: string
    tenantId: number
  }, ExtArgs["result"]["userProfile"]>
  composites: {}
}

/**
 * Model UserProfile
 * 
 */
export type UserProfile = runtime.Types.DefaultSelection<UserProfilePayload>
export type AuditsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Audits"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    /**
     * @schema.title 关联 id
     */
    auditId: number
    /**
     * @schema.title 审计类型(关联 schema)
     */
    auditType: string
    /**
     * @schema.title 用户 id
     */
    userId: string
    /**
     * @schema.title 用户名
     */
    username: string | null
    /**
     * @schema.title 动作(e.g. update)
     */
    action: string
    /**
     * @schema.title 变化
     */
    auditChanges: string
    /**
     * @schema.title 版本
     */
    version: number
  }, ExtArgs["result"]["audits"]>
  composites: {}
}

/**
 * Model Audits
 * @schema.display_name 审计日志
 */
export type Audits = runtime.Types.DefaultSelection<AuditsPayload>
export type DynamicTableDefPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DynamicTableDef"
  objects: {
    /**
     * @schema.model_name DynamicTableDefColumn
     */
    dynamicTableDefColumns: DynamicTableDefColumnPayload<ExtArgs>[]
    /**
     * @schema.model_name DynamicTableData
     */
    dynamicTableData: DynamicTableDataPayload<ExtArgs>[]
    tenant: TenantPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    /**
     * @schema.title 表英文名
     */
    name: string
    /**
     * @schema.title 表扩展
     */
    extendedSchema: Prisma.JsonValue | null
    /**
     * @schema.reference Tenant
     */
    tenantId: number
  }, ExtArgs["result"]["dynamicTableDef"]>
  composites: {}
}

/**
 * Model DynamicTableDef
 * @schema.display_name 动态表定义
 * @schema.display_column name
 */
export type DynamicTableDef = runtime.Types.DefaultSelection<DynamicTableDefPayload>
export type DynamicTableDefColumnPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DynamicTableDefColumn"
  objects: {
    dynamicTableDef: DynamicTableDefPayload<ExtArgs>
    tenant: TenantPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    /**
     * @schema.reference DynamicTableDef
     */
    dynamicTableDefId: number
    /**
     * @schema.title 列名
     */
    name: string
    /**
     * @schema.title 类型
     */
    type: DynamicColumnType
    /**
     * @schema.title 列扩展
     */
    extendedSchema: Prisma.JsonValue | null
    /**
     * @schema.reference Tenant
     */
    tenantId: number
  }, ExtArgs["result"]["dynamicTableDefColumn"]>
  composites: {}
}

/**
 * Model DynamicTableDefColumn
 * @schema.display_name 动态表列定义
 * @schema.display_column name
 */
export type DynamicTableDefColumn = runtime.Types.DefaultSelection<DynamicTableDefColumnPayload>
export type DynamicTableDataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DynamicTableData"
  objects: {
    dynamicTableDef: DynamicTableDefPayload<ExtArgs>
    tenant: TenantPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    /**
     * @schema.reference DynamicTableDef
     */
    dynamicTableDefId: number
    /**
     * @schema.title 数据
     */
    data: Prisma.JsonValue
    /**
     * @schema.reference Tenant
     */
    tenantId: number
  }, ExtArgs["result"]["dynamicTableData"]>
  composites: {}
}

/**
 * Model DynamicTableData
 * @schema.display_name 动态表数据
 */
export type DynamicTableData = runtime.Types.DefaultSelection<DynamicTableDataPayload>
export type MenuPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Menu"
  objects: {
    tenant: TenantPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    /**
     * @schema.title 菜单树
     */
    treeData: Prisma.JsonValue
    /**
     * @schema.reference Tenant
     */
    tenantId: number
  }, ExtArgs["result"]["menu"]>
  composites: {}
}

/**
 * Model Menu
 * @schema.display_name 菜单
 * @schema.display_column name
 */
export type Menu = runtime.Types.DefaultSelection<MenuPayload>
export type SentSmsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SentSms"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    mobile: string
    code: string
  }, ExtArgs["result"]["sentSms"]>
  composites: {}
}

/**
 * Model SentSms
 * @schema.display_name 已发送短信
 * @schema.display_column name
 */
export type SentSms = runtime.Types.DefaultSelection<SentSmsPayload>

/**
 * Enums
 */

export const DynamicColumnType: {
  string: 'string',
  textarea: 'textarea',
  integer: 'integer',
  boolean: 'boolean',
  datetime: 'datetime',
  tag: 'tag',
  reference: 'reference'
};

export type DynamicColumnType = (typeof DynamicColumnType)[keyof typeof DynamicColumnType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.taskFormRelation`: Exposes CRUD operations for the **TaskFormRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskFormRelations
    * const taskFormRelations = await prisma.taskFormRelation.findMany()
    * ```
    */
  get taskFormRelation(): Prisma.TaskFormRelationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tableFilter`: Exposes CRUD operations for the **TableFilter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableFilters
    * const tableFilters = await prisma.tableFilter.findMany()
    * ```
    */
  get tableFilter(): Prisma.TableFilterDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.audits`: Exposes CRUD operations for the **Audits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audits.findMany()
    * ```
    */
  get audits(): Prisma.AuditsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.dynamicTableDef`: Exposes CRUD operations for the **DynamicTableDef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicTableDefs
    * const dynamicTableDefs = await prisma.dynamicTableDef.findMany()
    * ```
    */
  get dynamicTableDef(): Prisma.DynamicTableDefDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.dynamicTableDefColumn`: Exposes CRUD operations for the **DynamicTableDefColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicTableDefColumns
    * const dynamicTableDefColumns = await prisma.dynamicTableDefColumn.findMany()
    * ```
    */
  get dynamicTableDefColumn(): Prisma.DynamicTableDefColumnDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.dynamicTableData`: Exposes CRUD operations for the **DynamicTableData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicTableData
    * const dynamicTableData = await prisma.dynamicTableData.findMany()
    * ```
    */
  get dynamicTableData(): Prisma.DynamicTableDataDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.sentSms`: Exposes CRUD operations for the **SentSms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentSms
    * const sentSms = await prisma.sentSms.findMany()
    * ```
    */
  get sentSms(): Prisma.SentSmsDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    TaskFormRelation: 'TaskFormRelation',
    TableFilter: 'TableFilter',
    User: 'User',
    UserProfile: 'UserProfile',
    Audits: 'Audits',
    DynamicTableDef: 'DynamicTableDef',
    DynamicTableDefColumn: 'DynamicTableDefColumn',
    DynamicTableData: 'DynamicTableData',
    Menu: 'Menu',
    SentSms: 'SentSms'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tenant' | 'taskFormRelation' | 'tableFilter' | 'user' | 'userProfile' | 'audits' | 'dynamicTableDef' | 'dynamicTableDefColumn' | 'dynamicTableData' | 'menu' | 'sentSms'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Tenant: {
        payload: TenantPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>,
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      TaskFormRelation: {
        payload: TaskFormRelationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TaskFormRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFormRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          findFirst: {
            args: Prisma.TaskFormRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFormRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          findMany: {
            args: Prisma.TaskFormRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>[]
          }
          create: {
            args: Prisma.TaskFormRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          createMany: {
            args: Prisma.TaskFormRelationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskFormRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          update: {
            args: Prisma.TaskFormRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          deleteMany: {
            args: Prisma.TaskFormRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskFormRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskFormRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskFormRelationPayload>
          }
          aggregate: {
            args: Prisma.TaskFormRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTaskFormRelation>
          }
          groupBy: {
            args: Prisma.TaskFormRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskFormRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskFormRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskFormRelationCountAggregateOutputType> | number
          }
        }
      }
      TableFilter: {
        payload: TableFilterPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TableFilterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFilterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          findFirst: {
            args: Prisma.TableFilterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFilterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          findMany: {
            args: Prisma.TableFilterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>[]
          }
          create: {
            args: Prisma.TableFilterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          createMany: {
            args: Prisma.TableFilterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TableFilterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          update: {
            args: Prisma.TableFilterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          deleteMany: {
            args: Prisma.TableFilterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TableFilterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TableFilterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TableFilterPayload>
          }
          aggregate: {
            args: Prisma.TableFilterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTableFilter>
          }
          groupBy: {
            args: Prisma.TableFilterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TableFilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableFilterCountArgs<ExtArgs>,
            result: $Utils.Optional<TableFilterCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: UserProfilePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Audits: {
        payload: AuditsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AuditsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          findFirst: {
            args: Prisma.AuditsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          findMany: {
            args: Prisma.AuditsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>[]
          }
          create: {
            args: Prisma.AuditsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          createMany: {
            args: Prisma.AuditsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuditsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          update: {
            args: Prisma.AuditsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          deleteMany: {
            args: Prisma.AuditsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditsPayload>
          }
          aggregate: {
            args: Prisma.AuditsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAudits>
          }
          groupBy: {
            args: Prisma.AuditsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditsCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditsCountAggregateOutputType> | number
          }
        }
      }
      DynamicTableDef: {
        payload: DynamicTableDefPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DynamicTableDefFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicTableDefFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          findFirst: {
            args: Prisma.DynamicTableDefFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicTableDefFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          findMany: {
            args: Prisma.DynamicTableDefFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>[]
          }
          create: {
            args: Prisma.DynamicTableDefCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          createMany: {
            args: Prisma.DynamicTableDefCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DynamicTableDefDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          update: {
            args: Prisma.DynamicTableDefUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          deleteMany: {
            args: Prisma.DynamicTableDefDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicTableDefUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DynamicTableDefUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefPayload>
          }
          aggregate: {
            args: Prisma.DynamicTableDefAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDynamicTableDef>
          }
          groupBy: {
            args: Prisma.DynamicTableDefGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDefGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicTableDefCountArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDefCountAggregateOutputType> | number
          }
        }
      }
      DynamicTableDefColumn: {
        payload: DynamicTableDefColumnPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DynamicTableDefColumnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicTableDefColumnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          findFirst: {
            args: Prisma.DynamicTableDefColumnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicTableDefColumnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          findMany: {
            args: Prisma.DynamicTableDefColumnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>[]
          }
          create: {
            args: Prisma.DynamicTableDefColumnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          createMany: {
            args: Prisma.DynamicTableDefColumnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DynamicTableDefColumnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          update: {
            args: Prisma.DynamicTableDefColumnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          deleteMany: {
            args: Prisma.DynamicTableDefColumnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicTableDefColumnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DynamicTableDefColumnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDefColumnPayload>
          }
          aggregate: {
            args: Prisma.DynamicTableDefColumnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDynamicTableDefColumn>
          }
          groupBy: {
            args: Prisma.DynamicTableDefColumnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDefColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicTableDefColumnCountArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDefColumnCountAggregateOutputType> | number
          }
        }
      }
      DynamicTableData: {
        payload: DynamicTableDataPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DynamicTableDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicTableDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          findFirst: {
            args: Prisma.DynamicTableDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicTableDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          findMany: {
            args: Prisma.DynamicTableDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>[]
          }
          create: {
            args: Prisma.DynamicTableDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          createMany: {
            args: Prisma.DynamicTableDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DynamicTableDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          update: {
            args: Prisma.DynamicTableDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          deleteMany: {
            args: Prisma.DynamicTableDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicTableDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DynamicTableDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DynamicTableDataPayload>
          }
          aggregate: {
            args: Prisma.DynamicTableDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDynamicTableData>
          }
          groupBy: {
            args: Prisma.DynamicTableDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicTableDataCountArgs<ExtArgs>,
            result: $Utils.Optional<DynamicTableDataCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: MenuPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>,
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      SentSms: {
        payload: SentSmsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SentSmsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentSmsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          findFirst: {
            args: Prisma.SentSmsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentSmsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          findMany: {
            args: Prisma.SentSmsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>[]
          }
          create: {
            args: Prisma.SentSmsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          createMany: {
            args: Prisma.SentSmsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SentSmsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          update: {
            args: Prisma.SentSmsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          deleteMany: {
            args: Prisma.SentSmsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SentSmsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SentSmsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SentSmsPayload>
          }
          aggregate: {
            args: Prisma.SentSmsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSentSms>
          }
          groupBy: {
            args: Prisma.SentSmsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SentSmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentSmsCountArgs<ExtArgs>,
            result: $Utils.Optional<SentSmsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */


  export type TenantCountOutputType = {
    users: number
    dynamicTableDefs: number
    dynamicTableDefColumns: number
    dynamicTableData: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    dynamicTableDefs?: boolean | TenantCountOutputTypeCountDynamicTableDefsArgs
    dynamicTableDefColumns?: boolean | TenantCountOutputTypeCountDynamicTableDefColumnsArgs
    dynamicTableData?: boolean | TenantCountOutputTypeCountDynamicTableDataArgs
  }

  // Custom InputTypes

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDynamicTableDefsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDefWhereInput
  }


  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDynamicTableDefColumnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDefColumnWhereInput
  }


  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDynamicTableDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDataWhereInput
  }



  /**
   * Count Type DynamicTableDefCountOutputType
   */


  export type DynamicTableDefCountOutputType = {
    dynamicTableDefColumns: number
    dynamicTableData: number
  }

  export type DynamicTableDefCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    dynamicTableDefColumns?: boolean | DynamicTableDefCountOutputTypeCountDynamicTableDefColumnsArgs
    dynamicTableData?: boolean | DynamicTableDefCountOutputTypeCountDynamicTableDataArgs
  }

  // Custom InputTypes

  /**
   * DynamicTableDefCountOutputType without action
   */
  export type DynamicTableDefCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefCountOutputType
     */
    select?: DynamicTableDefCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DynamicTableDefCountOutputType without action
   */
  export type DynamicTableDefCountOutputTypeCountDynamicTableDefColumnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDefColumnWhereInput
  }


  /**
   * DynamicTableDefCountOutputType without action
   */
  export type DynamicTableDefCountOutputTypeCountDynamicTableDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDataWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Tenant
   */


  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    name: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: Enumerable<TenantOrderByWithAggregationInput>
    by: TenantScalarFieldEnum[]
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }


  export type TenantGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    name: string
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    name?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    menu?: boolean | MenuArgs<ExtArgs>
    dynamicTableDefs?: boolean | Tenant$dynamicTableDefsArgs<ExtArgs>
    dynamicTableDefColumns?: boolean | Tenant$dynamicTableDefColumnsArgs<ExtArgs>
    dynamicTableData?: boolean | Tenant$dynamicTableDataArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    name?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    menu?: boolean | MenuArgs<ExtArgs>
    dynamicTableDefs?: boolean | Tenant$dynamicTableDefsArgs<ExtArgs>
    dynamicTableDefColumns?: boolean | Tenant$dynamicTableDefColumnsArgs<ExtArgs>
    dynamicTableData?: boolean | Tenant$dynamicTableDataArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeArgs<ExtArgs>
  }


  type TenantGetPayload<S extends boolean | null | undefined | TenantArgs> = $Types.GetResult<TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TenantFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tenant'> extends True ? Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TenantFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tenant'> extends True ? Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TenantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
    **/
    create<T extends TenantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TenantCreateArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tenants.
     *     @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     *     @example
     *     // Create many Tenants
     *     const tenant = await prisma.tenant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TenantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
    **/
    delete<T extends TenantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TenantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TenantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TenantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
    **/
    upsert<T extends TenantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>
    ): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    menu<T extends MenuArgs<ExtArgs> = {}>(args?: Subset<T, MenuArgs<ExtArgs>>): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    dynamicTableDefs<T extends Tenant$dynamicTableDefsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$dynamicTableDefsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findMany', never>| Null>;

    dynamicTableDefColumns<T extends Tenant$dynamicTableDefColumnsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$dynamicTableDefColumnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findMany', never>| Null>;

    dynamicTableData<T extends Tenant$dynamicTableDataArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$dynamicTableDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tenant base type for findUnique actions
   */
  export type TenantFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUnique
   */
  export interface TenantFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TenantFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant base type for findFirst actions
   */
  export type TenantFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: Enumerable<TenantScalarFieldEnum>
  }

  /**
   * Tenant findFirst
   */
  export interface TenantFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TenantFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }


  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: Enumerable<TenantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }


  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }


  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }


  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Tenant.dynamicTableDefs
   */
  export type Tenant$dynamicTableDefsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    where?: DynamicTableDefWhereInput
    orderBy?: Enumerable<DynamicTableDefOrderByWithRelationInput>
    cursor?: DynamicTableDefWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DynamicTableDefScalarFieldEnum>
  }


  /**
   * Tenant.dynamicTableDefColumns
   */
  export type Tenant$dynamicTableDefColumnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    where?: DynamicTableDefColumnWhereInput
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    cursor?: DynamicTableDefColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DynamicTableDefColumnScalarFieldEnum>
  }


  /**
   * Tenant.dynamicTableData
   */
  export type Tenant$dynamicTableDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    where?: DynamicTableDataWhereInput
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    cursor?: DynamicTableDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DynamicTableDataScalarFieldEnum>
  }


  /**
   * Tenant without action
   */
  export type TenantArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantInclude<ExtArgs> | null
  }



  /**
   * Model TaskFormRelation
   */


  export type AggregateTaskFormRelation = {
    _count: TaskFormRelationCountAggregateOutputType | null
    _avg: TaskFormRelationAvgAggregateOutputType | null
    _sum: TaskFormRelationSumAggregateOutputType | null
    _min: TaskFormRelationMinAggregateOutputType | null
    _max: TaskFormRelationMaxAggregateOutputType | null
  }

  export type TaskFormRelationAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskFormRelationSumAggregateOutputType = {
    id: number | null
  }

  export type TaskFormRelationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    taskDefinitionKey: string | null
    formKey: string | null
  }

  export type TaskFormRelationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    taskDefinitionKey: string | null
    formKey: string | null
  }

  export type TaskFormRelationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    taskDefinitionKey: number
    formKey: number
    _all: number
  }


  export type TaskFormRelationAvgAggregateInputType = {
    id?: true
  }

  export type TaskFormRelationSumAggregateInputType = {
    id?: true
  }

  export type TaskFormRelationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    taskDefinitionKey?: true
    formKey?: true
  }

  export type TaskFormRelationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    taskDefinitionKey?: true
    formKey?: true
  }

  export type TaskFormRelationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    taskDefinitionKey?: true
    formKey?: true
    _all?: true
  }

  export type TaskFormRelationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskFormRelation to aggregate.
     */
    where?: TaskFormRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskFormRelations to fetch.
     */
    orderBy?: Enumerable<TaskFormRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskFormRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskFormRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskFormRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskFormRelations
    **/
    _count?: true | TaskFormRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskFormRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskFormRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskFormRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskFormRelationMaxAggregateInputType
  }

  export type GetTaskFormRelationAggregateType<T extends TaskFormRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskFormRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskFormRelation[P]>
      : GetScalarType<T[P], AggregateTaskFormRelation[P]>
  }




  export type TaskFormRelationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TaskFormRelationWhereInput
    orderBy?: Enumerable<TaskFormRelationOrderByWithAggregationInput>
    by: TaskFormRelationScalarFieldEnum[]
    having?: TaskFormRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskFormRelationCountAggregateInputType | true
    _avg?: TaskFormRelationAvgAggregateInputType
    _sum?: TaskFormRelationSumAggregateInputType
    _min?: TaskFormRelationMinAggregateInputType
    _max?: TaskFormRelationMaxAggregateInputType
  }


  export type TaskFormRelationGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    taskDefinitionKey: string
    formKey: string
    _count: TaskFormRelationCountAggregateOutputType | null
    _avg: TaskFormRelationAvgAggregateOutputType | null
    _sum: TaskFormRelationSumAggregateOutputType | null
    _min: TaskFormRelationMinAggregateOutputType | null
    _max: TaskFormRelationMaxAggregateOutputType | null
  }

  type GetTaskFormRelationGroupByPayload<T extends TaskFormRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TaskFormRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskFormRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskFormRelationGroupByOutputType[P]>
            : GetScalarType<T[P], TaskFormRelationGroupByOutputType[P]>
        }
      >
    >


  export type TaskFormRelationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    taskDefinitionKey?: boolean
    formKey?: boolean
  }, ExtArgs["result"]["taskFormRelation"]>

  export type TaskFormRelationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    taskDefinitionKey?: boolean
    formKey?: boolean
  }


  type TaskFormRelationGetPayload<S extends boolean | null | undefined | TaskFormRelationArgs> = $Types.GetResult<TaskFormRelationPayload, S>

  type TaskFormRelationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TaskFormRelationFindManyArgs, 'select' | 'include'> & {
      select?: TaskFormRelationCountAggregateInputType | true
    }

  export interface TaskFormRelationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskFormRelation'], meta: { name: 'TaskFormRelation' } }
    /**
     * Find zero or one TaskFormRelation that matches the filter.
     * @param {TaskFormRelationFindUniqueArgs} args - Arguments to find a TaskFormRelation
     * @example
     * // Get one TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFormRelationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFormRelationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TaskFormRelation'> extends True ? Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one TaskFormRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFormRelationFindUniqueOrThrowArgs} args - Arguments to find a TaskFormRelation
     * @example
     * // Get one TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFormRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFormRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first TaskFormRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationFindFirstArgs} args - Arguments to find a TaskFormRelation
     * @example
     * // Get one TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFormRelationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFormRelationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TaskFormRelation'> extends True ? Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first TaskFormRelation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationFindFirstOrThrowArgs} args - Arguments to find a TaskFormRelation
     * @example
     * // Get one TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFormRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFormRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more TaskFormRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskFormRelations
     * const taskFormRelations = await prisma.taskFormRelation.findMany()
     * 
     * // Get first 10 TaskFormRelations
     * const taskFormRelations = await prisma.taskFormRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskFormRelationWithIdOnly = await prisma.taskFormRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFormRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFormRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a TaskFormRelation.
     * @param {TaskFormRelationCreateArgs} args - Arguments to create a TaskFormRelation.
     * @example
     * // Create one TaskFormRelation
     * const TaskFormRelation = await prisma.taskFormRelation.create({
     *   data: {
     *     // ... data to create a TaskFormRelation
     *   }
     * })
     * 
    **/
    create<T extends TaskFormRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFormRelationCreateArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many TaskFormRelations.
     *     @param {TaskFormRelationCreateManyArgs} args - Arguments to create many TaskFormRelations.
     *     @example
     *     // Create many TaskFormRelations
     *     const taskFormRelation = await prisma.taskFormRelation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskFormRelationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFormRelationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskFormRelation.
     * @param {TaskFormRelationDeleteArgs} args - Arguments to delete one TaskFormRelation.
     * @example
     * // Delete one TaskFormRelation
     * const TaskFormRelation = await prisma.taskFormRelation.delete({
     *   where: {
     *     // ... filter to delete one TaskFormRelation
     *   }
     * })
     * 
    **/
    delete<T extends TaskFormRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFormRelationDeleteArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one TaskFormRelation.
     * @param {TaskFormRelationUpdateArgs} args - Arguments to update one TaskFormRelation.
     * @example
     * // Update one TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskFormRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFormRelationUpdateArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more TaskFormRelations.
     * @param {TaskFormRelationDeleteManyArgs} args - Arguments to filter TaskFormRelations to delete.
     * @example
     * // Delete a few TaskFormRelations
     * const { count } = await prisma.taskFormRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskFormRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFormRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskFormRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskFormRelations
     * const taskFormRelation = await prisma.taskFormRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskFormRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFormRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskFormRelation.
     * @param {TaskFormRelationUpsertArgs} args - Arguments to update or create a TaskFormRelation.
     * @example
     * // Update or create a TaskFormRelation
     * const taskFormRelation = await prisma.taskFormRelation.upsert({
     *   create: {
     *     // ... data to create a TaskFormRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskFormRelation we want to update
     *   }
     * })
    **/
    upsert<T extends TaskFormRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFormRelationUpsertArgs<ExtArgs>>
    ): Prisma__TaskFormRelationClient<$Types.GetResult<TaskFormRelationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of TaskFormRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationCountArgs} args - Arguments to filter TaskFormRelations to count.
     * @example
     * // Count the number of TaskFormRelations
     * const count = await prisma.taskFormRelation.count({
     *   where: {
     *     // ... the filter for the TaskFormRelations we want to count
     *   }
     * })
    **/
    count<T extends TaskFormRelationCountArgs>(
      args?: Subset<T, TaskFormRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskFormRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskFormRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskFormRelationAggregateArgs>(args: Subset<T, TaskFormRelationAggregateArgs>): Prisma.PrismaPromise<GetTaskFormRelationAggregateType<T>>

    /**
     * Group by TaskFormRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFormRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskFormRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskFormRelationGroupByArgs['orderBy'] }
        : { orderBy?: TaskFormRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskFormRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskFormRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskFormRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskFormRelationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TaskFormRelation base type for findUnique actions
   */
  export type TaskFormRelationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskFormRelation to fetch.
     */
    where: TaskFormRelationWhereUniqueInput
  }

  /**
   * TaskFormRelation findUnique
   */
  export interface TaskFormRelationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFormRelationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TaskFormRelation findUniqueOrThrow
   */
  export type TaskFormRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskFormRelation to fetch.
     */
    where: TaskFormRelationWhereUniqueInput
  }


  /**
   * TaskFormRelation base type for findFirst actions
   */
  export type TaskFormRelationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskFormRelation to fetch.
     */
    where?: TaskFormRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskFormRelations to fetch.
     */
    orderBy?: Enumerable<TaskFormRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskFormRelations.
     */
    cursor?: TaskFormRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskFormRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskFormRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskFormRelations.
     */
    distinct?: Enumerable<TaskFormRelationScalarFieldEnum>
  }

  /**
   * TaskFormRelation findFirst
   */
  export interface TaskFormRelationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFormRelationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TaskFormRelation findFirstOrThrow
   */
  export type TaskFormRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskFormRelation to fetch.
     */
    where?: TaskFormRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskFormRelations to fetch.
     */
    orderBy?: Enumerable<TaskFormRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskFormRelations.
     */
    cursor?: TaskFormRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskFormRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskFormRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskFormRelations.
     */
    distinct?: Enumerable<TaskFormRelationScalarFieldEnum>
  }


  /**
   * TaskFormRelation findMany
   */
  export type TaskFormRelationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskFormRelations to fetch.
     */
    where?: TaskFormRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskFormRelations to fetch.
     */
    orderBy?: Enumerable<TaskFormRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskFormRelations.
     */
    cursor?: TaskFormRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskFormRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskFormRelations.
     */
    skip?: number
    distinct?: Enumerable<TaskFormRelationScalarFieldEnum>
  }


  /**
   * TaskFormRelation create
   */
  export type TaskFormRelationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * The data needed to create a TaskFormRelation.
     */
    data: XOR<TaskFormRelationCreateInput, TaskFormRelationUncheckedCreateInput>
  }


  /**
   * TaskFormRelation createMany
   */
  export type TaskFormRelationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskFormRelations.
     */
    data: Enumerable<TaskFormRelationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TaskFormRelation update
   */
  export type TaskFormRelationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * The data needed to update a TaskFormRelation.
     */
    data: XOR<TaskFormRelationUpdateInput, TaskFormRelationUncheckedUpdateInput>
    /**
     * Choose, which TaskFormRelation to update.
     */
    where: TaskFormRelationWhereUniqueInput
  }


  /**
   * TaskFormRelation updateMany
   */
  export type TaskFormRelationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskFormRelations.
     */
    data: XOR<TaskFormRelationUpdateManyMutationInput, TaskFormRelationUncheckedUpdateManyInput>
    /**
     * Filter which TaskFormRelations to update
     */
    where?: TaskFormRelationWhereInput
  }


  /**
   * TaskFormRelation upsert
   */
  export type TaskFormRelationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * The filter to search for the TaskFormRelation to update in case it exists.
     */
    where: TaskFormRelationWhereUniqueInput
    /**
     * In case the TaskFormRelation found by the `where` argument doesn't exist, create a new TaskFormRelation with this data.
     */
    create: XOR<TaskFormRelationCreateInput, TaskFormRelationUncheckedCreateInput>
    /**
     * In case the TaskFormRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskFormRelationUpdateInput, TaskFormRelationUncheckedUpdateInput>
  }


  /**
   * TaskFormRelation delete
   */
  export type TaskFormRelationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
    /**
     * Filter which TaskFormRelation to delete.
     */
    where: TaskFormRelationWhereUniqueInput
  }


  /**
   * TaskFormRelation deleteMany
   */
  export type TaskFormRelationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskFormRelations to delete
     */
    where?: TaskFormRelationWhereInput
  }


  /**
   * TaskFormRelation without action
   */
  export type TaskFormRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskFormRelation
     */
    select?: TaskFormRelationSelect<ExtArgs> | null
  }



  /**
   * Model TableFilter
   */


  export type AggregateTableFilter = {
    _count: TableFilterCountAggregateOutputType | null
    _avg: TableFilterAvgAggregateOutputType | null
    _sum: TableFilterSumAggregateOutputType | null
    _min: TableFilterMinAggregateOutputType | null
    _max: TableFilterMaxAggregateOutputType | null
  }

  export type TableFilterAvgAggregateOutputType = {
    id: number | null
  }

  export type TableFilterSumAggregateOutputType = {
    id: number | null
  }

  export type TableFilterMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    path: string | null
    name: string | null
    filterJSON: string | null
  }

  export type TableFilterMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    path: string | null
    name: string | null
    filterJSON: string | null
  }

  export type TableFilterCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    path: number
    name: number
    filterJSON: number
    _all: number
  }


  export type TableFilterAvgAggregateInputType = {
    id?: true
  }

  export type TableFilterSumAggregateInputType = {
    id?: true
  }

  export type TableFilterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    path?: true
    name?: true
    filterJSON?: true
  }

  export type TableFilterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    path?: true
    name?: true
    filterJSON?: true
  }

  export type TableFilterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    path?: true
    name?: true
    filterJSON?: true
    _all?: true
  }

  export type TableFilterAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableFilter to aggregate.
     */
    where?: TableFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableFilters to fetch.
     */
    orderBy?: Enumerable<TableFilterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableFilters
    **/
    _count?: true | TableFilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableFilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableFilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableFilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableFilterMaxAggregateInputType
  }

  export type GetTableFilterAggregateType<T extends TableFilterAggregateArgs> = {
        [P in keyof T & keyof AggregateTableFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableFilter[P]>
      : GetScalarType<T[P], AggregateTableFilter[P]>
  }




  export type TableFilterGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TableFilterWhereInput
    orderBy?: Enumerable<TableFilterOrderByWithAggregationInput>
    by: TableFilterScalarFieldEnum[]
    having?: TableFilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableFilterCountAggregateInputType | true
    _avg?: TableFilterAvgAggregateInputType
    _sum?: TableFilterSumAggregateInputType
    _min?: TableFilterMinAggregateInputType
    _max?: TableFilterMaxAggregateInputType
  }


  export type TableFilterGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    path: string
    name: string
    filterJSON: string
    _count: TableFilterCountAggregateOutputType | null
    _avg: TableFilterAvgAggregateOutputType | null
    _sum: TableFilterSumAggregateOutputType | null
    _min: TableFilterMinAggregateOutputType | null
    _max: TableFilterMaxAggregateOutputType | null
  }

  type GetTableFilterGroupByPayload<T extends TableFilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TableFilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableFilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableFilterGroupByOutputType[P]>
            : GetScalarType<T[P], TableFilterGroupByOutputType[P]>
        }
      >
    >


  export type TableFilterSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    path?: boolean
    name?: boolean
    filterJSON?: boolean
  }, ExtArgs["result"]["tableFilter"]>

  export type TableFilterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    path?: boolean
    name?: boolean
    filterJSON?: boolean
  }


  type TableFilterGetPayload<S extends boolean | null | undefined | TableFilterArgs> = $Types.GetResult<TableFilterPayload, S>

  type TableFilterCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TableFilterFindManyArgs, 'select' | 'include'> & {
      select?: TableFilterCountAggregateInputType | true
    }

  export interface TableFilterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableFilter'], meta: { name: 'TableFilter' } }
    /**
     * Find zero or one TableFilter that matches the filter.
     * @param {TableFilterFindUniqueArgs} args - Arguments to find a TableFilter
     * @example
     * // Get one TableFilter
     * const tableFilter = await prisma.tableFilter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFilterFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TableFilterFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TableFilter'> extends True ? Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one TableFilter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TableFilterFindUniqueOrThrowArgs} args - Arguments to find a TableFilter
     * @example
     * // Get one TableFilter
     * const tableFilter = await prisma.tableFilter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TableFilterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFilterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first TableFilter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterFindFirstArgs} args - Arguments to find a TableFilter
     * @example
     * // Get one TableFilter
     * const tableFilter = await prisma.tableFilter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFilterFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TableFilterFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TableFilter'> extends True ? Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first TableFilter that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterFindFirstOrThrowArgs} args - Arguments to find a TableFilter
     * @example
     * // Get one TableFilter
     * const tableFilter = await prisma.tableFilter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TableFilterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFilterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more TableFilters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableFilters
     * const tableFilters = await prisma.tableFilter.findMany()
     * 
     * // Get first 10 TableFilters
     * const tableFilters = await prisma.tableFilter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableFilterWithIdOnly = await prisma.tableFilter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TableFilterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFilterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a TableFilter.
     * @param {TableFilterCreateArgs} args - Arguments to create a TableFilter.
     * @example
     * // Create one TableFilter
     * const TableFilter = await prisma.tableFilter.create({
     *   data: {
     *     // ... data to create a TableFilter
     *   }
     * })
     * 
    **/
    create<T extends TableFilterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TableFilterCreateArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many TableFilters.
     *     @param {TableFilterCreateManyArgs} args - Arguments to create many TableFilters.
     *     @example
     *     // Create many TableFilters
     *     const tableFilter = await prisma.tableFilter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TableFilterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFilterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TableFilter.
     * @param {TableFilterDeleteArgs} args - Arguments to delete one TableFilter.
     * @example
     * // Delete one TableFilter
     * const TableFilter = await prisma.tableFilter.delete({
     *   where: {
     *     // ... filter to delete one TableFilter
     *   }
     * })
     * 
    **/
    delete<T extends TableFilterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TableFilterDeleteArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one TableFilter.
     * @param {TableFilterUpdateArgs} args - Arguments to update one TableFilter.
     * @example
     * // Update one TableFilter
     * const tableFilter = await prisma.tableFilter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableFilterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TableFilterUpdateArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more TableFilters.
     * @param {TableFilterDeleteManyArgs} args - Arguments to filter TableFilters to delete.
     * @example
     * // Delete a few TableFilters
     * const { count } = await prisma.tableFilter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableFilterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFilterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableFilters
     * const tableFilter = await prisma.tableFilter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableFilterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TableFilterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TableFilter.
     * @param {TableFilterUpsertArgs} args - Arguments to update or create a TableFilter.
     * @example
     * // Update or create a TableFilter
     * const tableFilter = await prisma.tableFilter.upsert({
     *   create: {
     *     // ... data to create a TableFilter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableFilter we want to update
     *   }
     * })
    **/
    upsert<T extends TableFilterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TableFilterUpsertArgs<ExtArgs>>
    ): Prisma__TableFilterClient<$Types.GetResult<TableFilterPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of TableFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterCountArgs} args - Arguments to filter TableFilters to count.
     * @example
     * // Count the number of TableFilters
     * const count = await prisma.tableFilter.count({
     *   where: {
     *     // ... the filter for the TableFilters we want to count
     *   }
     * })
    **/
    count<T extends TableFilterCountArgs>(
      args?: Subset<T, TableFilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableFilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableFilterAggregateArgs>(args: Subset<T, TableFilterAggregateArgs>): Prisma.PrismaPromise<GetTableFilterAggregateType<T>>

    /**
     * Group by TableFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFilterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableFilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableFilterGroupByArgs['orderBy'] }
        : { orderBy?: TableFilterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableFilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TableFilter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TableFilterClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TableFilter base type for findUnique actions
   */
  export type TableFilterFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter, which TableFilter to fetch.
     */
    where: TableFilterWhereUniqueInput
  }

  /**
   * TableFilter findUnique
   */
  export interface TableFilterFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TableFilterFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TableFilter findUniqueOrThrow
   */
  export type TableFilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter, which TableFilter to fetch.
     */
    where: TableFilterWhereUniqueInput
  }


  /**
   * TableFilter base type for findFirst actions
   */
  export type TableFilterFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter, which TableFilter to fetch.
     */
    where?: TableFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableFilters to fetch.
     */
    orderBy?: Enumerable<TableFilterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableFilters.
     */
    cursor?: TableFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableFilters.
     */
    distinct?: Enumerable<TableFilterScalarFieldEnum>
  }

  /**
   * TableFilter findFirst
   */
  export interface TableFilterFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TableFilterFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TableFilter findFirstOrThrow
   */
  export type TableFilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter, which TableFilter to fetch.
     */
    where?: TableFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableFilters to fetch.
     */
    orderBy?: Enumerable<TableFilterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableFilters.
     */
    cursor?: TableFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableFilters.
     */
    distinct?: Enumerable<TableFilterScalarFieldEnum>
  }


  /**
   * TableFilter findMany
   */
  export type TableFilterFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter, which TableFilters to fetch.
     */
    where?: TableFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableFilters to fetch.
     */
    orderBy?: Enumerable<TableFilterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableFilters.
     */
    cursor?: TableFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableFilters.
     */
    skip?: number
    distinct?: Enumerable<TableFilterScalarFieldEnum>
  }


  /**
   * TableFilter create
   */
  export type TableFilterCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * The data needed to create a TableFilter.
     */
    data: XOR<TableFilterCreateInput, TableFilterUncheckedCreateInput>
  }


  /**
   * TableFilter createMany
   */
  export type TableFilterCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableFilters.
     */
    data: Enumerable<TableFilterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TableFilter update
   */
  export type TableFilterUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * The data needed to update a TableFilter.
     */
    data: XOR<TableFilterUpdateInput, TableFilterUncheckedUpdateInput>
    /**
     * Choose, which TableFilter to update.
     */
    where: TableFilterWhereUniqueInput
  }


  /**
   * TableFilter updateMany
   */
  export type TableFilterUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableFilters.
     */
    data: XOR<TableFilterUpdateManyMutationInput, TableFilterUncheckedUpdateManyInput>
    /**
     * Filter which TableFilters to update
     */
    where?: TableFilterWhereInput
  }


  /**
   * TableFilter upsert
   */
  export type TableFilterUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * The filter to search for the TableFilter to update in case it exists.
     */
    where: TableFilterWhereUniqueInput
    /**
     * In case the TableFilter found by the `where` argument doesn't exist, create a new TableFilter with this data.
     */
    create: XOR<TableFilterCreateInput, TableFilterUncheckedCreateInput>
    /**
     * In case the TableFilter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableFilterUpdateInput, TableFilterUncheckedUpdateInput>
  }


  /**
   * TableFilter delete
   */
  export type TableFilterDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
    /**
     * Filter which TableFilter to delete.
     */
    where: TableFilterWhereUniqueInput
  }


  /**
   * TableFilter deleteMany
   */
  export type TableFilterDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableFilters to delete
     */
    where?: TableFilterWhereInput
  }


  /**
   * TableFilter without action
   */
  export type TableFilterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableFilter
     */
    select?: TableFilterSelect<ExtArgs> | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    username: string | null
    hashedPassword: string | null
    hashedRefreshToken: string | null
    unionid: string | null
    email: string | null
    mobile: string | null
    image: string | null
    tenantId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    username: string | null
    hashedPassword: string | null
    hashedRefreshToken: string | null
    unionid: string | null
    email: string | null
    mobile: string | null
    image: string | null
    tenantId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    username: number
    hashedPassword: number
    hashedRefreshToken: number
    unionid: number
    email: number
    mobile: number
    image: number
    tenantId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    username?: true
    hashedPassword?: true
    hashedRefreshToken?: true
    unionid?: true
    email?: true
    mobile?: true
    image?: true
    tenantId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    username?: true
    hashedPassword?: true
    hashedRefreshToken?: true
    unionid?: true
    email?: true
    mobile?: true
    image?: true
    tenantId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    username?: true
    hashedPassword?: true
    hashedRefreshToken?: true
    unionid?: true
    email?: true
    mobile?: true
    image?: true
    tenantId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    username: string
    hashedPassword: string | null
    hashedRefreshToken: string | null
    unionid: string | null
    email: string | null
    mobile: string | null
    image: string | null
    tenantId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    username?: boolean
    hashedPassword?: boolean
    hashedRefreshToken?: boolean
    unionid?: boolean
    email?: boolean
    mobile?: boolean
    image?: boolean
    tenantId?: boolean
    profile?: boolean | UserProfileArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    username?: boolean
    hashedPassword?: boolean
    hashedRefreshToken?: boolean
    unionid?: boolean
    email?: boolean
    mobile?: boolean
    image?: boolean
    tenantId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    profile<T extends UserProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    tenant<T extends TenantArgs<ExtArgs> = {}>(args?: Subset<T, TenantArgs<ExtArgs>>): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model UserProfile
   */


  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tenantId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tenantId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    userId: number | null
    fullName: string | null
    tenantId: number | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    userId: number | null
    fullName: string | null
    tenantId: number | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    userId: number
    fullName: number
    tenantId: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
    fullName?: true
    tenantId?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
    fullName?: true
    tenantId?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    userId?: true
    fullName?: true
    tenantId?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: Enumerable<UserProfileOrderByWithAggregationInput>
    by: UserProfileScalarFieldEnum[]
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }


  export type UserProfileGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    userId: number
    fullName: string
    tenantId: number
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    fullName?: boolean
    tenantId?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    userId?: boolean
    fullName?: boolean
    tenantId?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileArgs> = $Types.GetResult<UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserProfile'> extends True ? Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserProfile'> extends True ? Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Types.GetResult<UserProfilePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserProfile base type for findUnique actions
   */
  export type UserProfileFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUnique
   */
  export interface UserProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserProfileFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile base type for findFirst actions
   */
  export type UserProfileFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }

  /**
   * UserProfile findFirst
   */
  export interface UserProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserProfileFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: Enumerable<UserProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
  }



  /**
   * Model Audits
   */


  export type AggregateAudits = {
    _count: AuditsCountAggregateOutputType | null
    _avg: AuditsAvgAggregateOutputType | null
    _sum: AuditsSumAggregateOutputType | null
    _min: AuditsMinAggregateOutputType | null
    _max: AuditsMaxAggregateOutputType | null
  }

  export type AuditsAvgAggregateOutputType = {
    id: number | null
    auditId: number | null
    version: number | null
  }

  export type AuditsSumAggregateOutputType = {
    id: number | null
    auditId: number | null
    version: number | null
  }

  export type AuditsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    auditId: number | null
    auditType: string | null
    userId: string | null
    username: string | null
    action: string | null
    auditChanges: string | null
    version: number | null
  }

  export type AuditsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    auditId: number | null
    auditType: string | null
    userId: string | null
    username: string | null
    action: string | null
    auditChanges: string | null
    version: number | null
  }

  export type AuditsCountAggregateOutputType = {
    id: number
    createdAt: number
    auditId: number
    auditType: number
    userId: number
    username: number
    action: number
    auditChanges: number
    version: number
    _all: number
  }


  export type AuditsAvgAggregateInputType = {
    id?: true
    auditId?: true
    version?: true
  }

  export type AuditsSumAggregateInputType = {
    id?: true
    auditId?: true
    version?: true
  }

  export type AuditsMinAggregateInputType = {
    id?: true
    createdAt?: true
    auditId?: true
    auditType?: true
    userId?: true
    username?: true
    action?: true
    auditChanges?: true
    version?: true
  }

  export type AuditsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    auditId?: true
    auditType?: true
    userId?: true
    username?: true
    action?: true
    auditChanges?: true
    version?: true
  }

  export type AuditsCountAggregateInputType = {
    id?: true
    createdAt?: true
    auditId?: true
    auditType?: true
    userId?: true
    username?: true
    action?: true
    auditChanges?: true
    version?: true
    _all?: true
  }

  export type AuditsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audits to aggregate.
     */
    where?: AuditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: Enumerable<AuditsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audits
    **/
    _count?: true | AuditsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditsMaxAggregateInputType
  }

  export type GetAuditsAggregateType<T extends AuditsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudits[P]>
      : GetScalarType<T[P], AggregateAudits[P]>
  }




  export type AuditsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AuditsWhereInput
    orderBy?: Enumerable<AuditsOrderByWithAggregationInput>
    by: AuditsScalarFieldEnum[]
    having?: AuditsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditsCountAggregateInputType | true
    _avg?: AuditsAvgAggregateInputType
    _sum?: AuditsSumAggregateInputType
    _min?: AuditsMinAggregateInputType
    _max?: AuditsMaxAggregateInputType
  }


  export type AuditsGroupByOutputType = {
    id: number
    createdAt: Date
    auditId: number
    auditType: string
    userId: string
    username: string | null
    action: string
    auditChanges: string
    version: number
    _count: AuditsCountAggregateOutputType | null
    _avg: AuditsAvgAggregateOutputType | null
    _sum: AuditsSumAggregateOutputType | null
    _min: AuditsMinAggregateOutputType | null
    _max: AuditsMaxAggregateOutputType | null
  }

  type GetAuditsGroupByPayload<T extends AuditsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuditsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditsGroupByOutputType[P]>
            : GetScalarType<T[P], AuditsGroupByOutputType[P]>
        }
      >
    >


  export type AuditsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    auditId?: boolean
    auditType?: boolean
    userId?: boolean
    username?: boolean
    action?: boolean
    auditChanges?: boolean
    version?: boolean
  }, ExtArgs["result"]["audits"]>

  export type AuditsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    auditId?: boolean
    auditType?: boolean
    userId?: boolean
    username?: boolean
    action?: boolean
    auditChanges?: boolean
    version?: boolean
  }


  type AuditsGetPayload<S extends boolean | null | undefined | AuditsArgs> = $Types.GetResult<AuditsPayload, S>

  type AuditsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AuditsFindManyArgs, 'select' | 'include'> & {
      select?: AuditsCountAggregateInputType | true
    }

  export interface AuditsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audits'], meta: { name: 'Audits' } }
    /**
     * Find zero or one Audits that matches the filter.
     * @param {AuditsFindUniqueArgs} args - Arguments to find a Audits
     * @example
     * // Get one Audits
     * const audits = await prisma.audits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuditsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Audits'> extends True ? Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Audits that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuditsFindUniqueOrThrowArgs} args - Arguments to find a Audits
     * @example
     * // Get one Audits
     * const audits = await prisma.audits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsFindFirstArgs} args - Arguments to find a Audits
     * @example
     * // Get one Audits
     * const audits = await prisma.audits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuditsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Audits'> extends True ? Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Audits that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsFindFirstOrThrowArgs} args - Arguments to find a Audits
     * @example
     * // Get one Audits
     * const audits = await prisma.audits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audits.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditsWithIdOnly = await prisma.audits.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Audits.
     * @param {AuditsCreateArgs} args - Arguments to create a Audits.
     * @example
     * // Create one Audits
     * const Audits = await prisma.audits.create({
     *   data: {
     *     // ... data to create a Audits
     *   }
     * })
     * 
    **/
    create<T extends AuditsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditsCreateArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Audits.
     *     @param {AuditsCreateManyArgs} args - Arguments to create many Audits.
     *     @example
     *     // Create many Audits
     *     const audits = await prisma.audits.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audits.
     * @param {AuditsDeleteArgs} args - Arguments to delete one Audits.
     * @example
     * // Delete one Audits
     * const Audits = await prisma.audits.delete({
     *   where: {
     *     // ... filter to delete one Audits
     *   }
     * })
     * 
    **/
    delete<T extends AuditsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditsDeleteArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Audits.
     * @param {AuditsUpdateArgs} args - Arguments to update one Audits.
     * @example
     * // Update one Audits
     * const audits = await prisma.audits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditsUpdateArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Audits.
     * @param {AuditsDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audits = await prisma.audits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audits.
     * @param {AuditsUpsertArgs} args - Arguments to update or create a Audits.
     * @example
     * // Update or create a Audits
     * const audits = await prisma.audits.upsert({
     *   create: {
     *     // ... data to create a Audits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audits we want to update
     *   }
     * })
    **/
    upsert<T extends AuditsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditsUpsertArgs<ExtArgs>>
    ): Prisma__AuditsClient<$Types.GetResult<AuditsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audits.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends AuditsCountArgs>(
      args?: Subset<T, AuditsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditsAggregateArgs>(args: Subset<T, AuditsAggregateArgs>): Prisma.PrismaPromise<GetAuditsAggregateType<T>>

    /**
     * Group by Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditsGroupByArgs['orderBy'] }
        : { orderBy?: AuditsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Audits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuditsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Audits base type for findUnique actions
   */
  export type AuditsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where: AuditsWhereUniqueInput
  }

  /**
   * Audits findUnique
   */
  export interface AuditsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuditsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Audits findUniqueOrThrow
   */
  export type AuditsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where: AuditsWhereUniqueInput
  }


  /**
   * Audits base type for findFirst actions
   */
  export type AuditsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: Enumerable<AuditsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: Enumerable<AuditsScalarFieldEnum>
  }

  /**
   * Audits findFirst
   */
  export interface AuditsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuditsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Audits findFirstOrThrow
   */
  export type AuditsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: Enumerable<AuditsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: Enumerable<AuditsScalarFieldEnum>
  }


  /**
   * Audits findMany
   */
  export type AuditsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: Enumerable<AuditsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audits.
     */
    cursor?: AuditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    distinct?: Enumerable<AuditsScalarFieldEnum>
  }


  /**
   * Audits create
   */
  export type AuditsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * The data needed to create a Audits.
     */
    data: XOR<AuditsCreateInput, AuditsUncheckedCreateInput>
  }


  /**
   * Audits createMany
   */
  export type AuditsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audits.
     */
    data: Enumerable<AuditsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Audits update
   */
  export type AuditsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * The data needed to update a Audits.
     */
    data: XOR<AuditsUpdateInput, AuditsUncheckedUpdateInput>
    /**
     * Choose, which Audits to update.
     */
    where: AuditsWhereUniqueInput
  }


  /**
   * Audits updateMany
   */
  export type AuditsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditsUpdateManyMutationInput, AuditsUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditsWhereInput
  }


  /**
   * Audits upsert
   */
  export type AuditsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * The filter to search for the Audits to update in case it exists.
     */
    where: AuditsWhereUniqueInput
    /**
     * In case the Audits found by the `where` argument doesn't exist, create a new Audits with this data.
     */
    create: XOR<AuditsCreateInput, AuditsUncheckedCreateInput>
    /**
     * In case the Audits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditsUpdateInput, AuditsUncheckedUpdateInput>
  }


  /**
   * Audits delete
   */
  export type AuditsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
    /**
     * Filter which Audits to delete.
     */
    where: AuditsWhereUniqueInput
  }


  /**
   * Audits deleteMany
   */
  export type AuditsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audits to delete
     */
    where?: AuditsWhereInput
  }


  /**
   * Audits without action
   */
  export type AuditsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audits
     */
    select?: AuditsSelect<ExtArgs> | null
  }



  /**
   * Model DynamicTableDef
   */


  export type AggregateDynamicTableDef = {
    _count: DynamicTableDefCountAggregateOutputType | null
    _avg: DynamicTableDefAvgAggregateOutputType | null
    _sum: DynamicTableDefSumAggregateOutputType | null
    _min: DynamicTableDefMinAggregateOutputType | null
    _max: DynamicTableDefMaxAggregateOutputType | null
  }

  export type DynamicTableDefAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type DynamicTableDefSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type DynamicTableDefMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
    tenantId: number | null
  }

  export type DynamicTableDefMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
    tenantId: number | null
  }

  export type DynamicTableDefCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    name: number
    extendedSchema: number
    tenantId: number
    _all: number
  }


  export type DynamicTableDefAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type DynamicTableDefSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type DynamicTableDefMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    tenantId?: true
  }

  export type DynamicTableDefMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    tenantId?: true
  }

  export type DynamicTableDefCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    extendedSchema?: true
    tenantId?: true
    _all?: true
  }

  export type DynamicTableDefAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableDef to aggregate.
     */
    where?: DynamicTableDefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefs to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicTableDefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicTableDefs
    **/
    _count?: true | DynamicTableDefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicTableDefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicTableDefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicTableDefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicTableDefMaxAggregateInputType
  }

  export type GetDynamicTableDefAggregateType<T extends DynamicTableDefAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicTableDef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicTableDef[P]>
      : GetScalarType<T[P], AggregateDynamicTableDef[P]>
  }




  export type DynamicTableDefGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDefWhereInput
    orderBy?: Enumerable<DynamicTableDefOrderByWithAggregationInput>
    by: DynamicTableDefScalarFieldEnum[]
    having?: DynamicTableDefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicTableDefCountAggregateInputType | true
    _avg?: DynamicTableDefAvgAggregateInputType
    _sum?: DynamicTableDefSumAggregateInputType
    _min?: DynamicTableDefMinAggregateInputType
    _max?: DynamicTableDefMaxAggregateInputType
  }


  export type DynamicTableDefGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    name: string
    extendedSchema: JsonValue | null
    tenantId: number
    _count: DynamicTableDefCountAggregateOutputType | null
    _avg: DynamicTableDefAvgAggregateOutputType | null
    _sum: DynamicTableDefSumAggregateOutputType | null
    _min: DynamicTableDefMinAggregateOutputType | null
    _max: DynamicTableDefMaxAggregateOutputType | null
  }

  type GetDynamicTableDefGroupByPayload<T extends DynamicTableDefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DynamicTableDefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicTableDefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicTableDefGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicTableDefGroupByOutputType[P]>
        }
      >
    >


  export type DynamicTableDefSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    name?: boolean
    extendedSchema?: boolean
    tenantId?: boolean
    dynamicTableDefColumns?: boolean | DynamicTableDef$dynamicTableDefColumnsArgs<ExtArgs>
    dynamicTableData?: boolean | DynamicTableDef$dynamicTableDataArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
    _count?: boolean | DynamicTableDefCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicTableDef"]>

  export type DynamicTableDefSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    name?: boolean
    extendedSchema?: boolean
    tenantId?: boolean
  }

  export type DynamicTableDefInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    dynamicTableDefColumns?: boolean | DynamicTableDef$dynamicTableDefColumnsArgs<ExtArgs>
    dynamicTableData?: boolean | DynamicTableDef$dynamicTableDataArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
    _count?: boolean | DynamicTableDefCountOutputTypeArgs<ExtArgs>
  }


  type DynamicTableDefGetPayload<S extends boolean | null | undefined | DynamicTableDefArgs> = $Types.GetResult<DynamicTableDefPayload, S>

  type DynamicTableDefCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DynamicTableDefFindManyArgs, 'select' | 'include'> & {
      select?: DynamicTableDefCountAggregateInputType | true
    }

  export interface DynamicTableDefDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicTableDef'], meta: { name: 'DynamicTableDef' } }
    /**
     * Find zero or one DynamicTableDef that matches the filter.
     * @param {DynamicTableDefFindUniqueArgs} args - Arguments to find a DynamicTableDef
     * @example
     * // Get one DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DynamicTableDefFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DynamicTableDefFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DynamicTableDef'> extends True ? Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DynamicTableDef that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DynamicTableDefFindUniqueOrThrowArgs} args - Arguments to find a DynamicTableDef
     * @example
     * // Get one DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DynamicTableDefFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DynamicTableDef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefFindFirstArgs} args - Arguments to find a DynamicTableDef
     * @example
     * // Get one DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DynamicTableDefFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DynamicTableDefFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DynamicTableDef'> extends True ? Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DynamicTableDef that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefFindFirstOrThrowArgs} args - Arguments to find a DynamicTableDef
     * @example
     * // Get one DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DynamicTableDefFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DynamicTableDefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicTableDefs
     * const dynamicTableDefs = await prisma.dynamicTableDef.findMany()
     * 
     * // Get first 10 DynamicTableDefs
     * const dynamicTableDefs = await prisma.dynamicTableDef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dynamicTableDefWithIdOnly = await prisma.dynamicTableDef.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DynamicTableDefFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DynamicTableDef.
     * @param {DynamicTableDefCreateArgs} args - Arguments to create a DynamicTableDef.
     * @example
     * // Create one DynamicTableDef
     * const DynamicTableDef = await prisma.dynamicTableDef.create({
     *   data: {
     *     // ... data to create a DynamicTableDef
     *   }
     * })
     * 
    **/
    create<T extends DynamicTableDefCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefCreateArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DynamicTableDefs.
     *     @param {DynamicTableDefCreateManyArgs} args - Arguments to create many DynamicTableDefs.
     *     @example
     *     // Create many DynamicTableDefs
     *     const dynamicTableDef = await prisma.dynamicTableDef.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DynamicTableDefCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DynamicTableDef.
     * @param {DynamicTableDefDeleteArgs} args - Arguments to delete one DynamicTableDef.
     * @example
     * // Delete one DynamicTableDef
     * const DynamicTableDef = await prisma.dynamicTableDef.delete({
     *   where: {
     *     // ... filter to delete one DynamicTableDef
     *   }
     * })
     * 
    **/
    delete<T extends DynamicTableDefDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefDeleteArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DynamicTableDef.
     * @param {DynamicTableDefUpdateArgs} args - Arguments to update one DynamicTableDef.
     * @example
     * // Update one DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DynamicTableDefUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefUpdateArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DynamicTableDefs.
     * @param {DynamicTableDefDeleteManyArgs} args - Arguments to filter DynamicTableDefs to delete.
     * @example
     * // Delete a few DynamicTableDefs
     * const { count } = await prisma.dynamicTableDef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DynamicTableDefDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicTableDefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicTableDefs
     * const dynamicTableDef = await prisma.dynamicTableDef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DynamicTableDefUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DynamicTableDef.
     * @param {DynamicTableDefUpsertArgs} args - Arguments to update or create a DynamicTableDef.
     * @example
     * // Update or create a DynamicTableDef
     * const dynamicTableDef = await prisma.dynamicTableDef.upsert({
     *   create: {
     *     // ... data to create a DynamicTableDef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicTableDef we want to update
     *   }
     * })
    **/
    upsert<T extends DynamicTableDefUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefUpsertArgs<ExtArgs>>
    ): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DynamicTableDefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefCountArgs} args - Arguments to filter DynamicTableDefs to count.
     * @example
     * // Count the number of DynamicTableDefs
     * const count = await prisma.dynamicTableDef.count({
     *   where: {
     *     // ... the filter for the DynamicTableDefs we want to count
     *   }
     * })
    **/
    count<T extends DynamicTableDefCountArgs>(
      args?: Subset<T, DynamicTableDefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicTableDefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicTableDef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DynamicTableDefAggregateArgs>(args: Subset<T, DynamicTableDefAggregateArgs>): Prisma.PrismaPromise<GetDynamicTableDefAggregateType<T>>

    /**
     * Group by DynamicTableDef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DynamicTableDefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicTableDefGroupByArgs['orderBy'] }
        : { orderBy?: DynamicTableDefGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DynamicTableDefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicTableDefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicTableDef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DynamicTableDefClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dynamicTableDefColumns<T extends DynamicTableDef$dynamicTableDefColumnsArgs<ExtArgs> = {}>(args?: Subset<T, DynamicTableDef$dynamicTableDefColumnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findMany', never>| Null>;

    dynamicTableData<T extends DynamicTableDef$dynamicTableDataArgs<ExtArgs> = {}>(args?: Subset<T, DynamicTableDef$dynamicTableDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findMany', never>| Null>;

    tenant<T extends TenantArgs<ExtArgs> = {}>(args?: Subset<T, TenantArgs<ExtArgs>>): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DynamicTableDef base type for findUnique actions
   */
  export type DynamicTableDefFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDef to fetch.
     */
    where: DynamicTableDefWhereUniqueInput
  }

  /**
   * DynamicTableDef findUnique
   */
  export interface DynamicTableDefFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDefFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableDef findUniqueOrThrow
   */
  export type DynamicTableDefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDef to fetch.
     */
    where: DynamicTableDefWhereUniqueInput
  }


  /**
   * DynamicTableDef base type for findFirst actions
   */
  export type DynamicTableDefFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDef to fetch.
     */
    where?: DynamicTableDefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefs to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableDefs.
     */
    cursor?: DynamicTableDefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableDefs.
     */
    distinct?: Enumerable<DynamicTableDefScalarFieldEnum>
  }

  /**
   * DynamicTableDef findFirst
   */
  export interface DynamicTableDefFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDefFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableDef findFirstOrThrow
   */
  export type DynamicTableDefFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDef to fetch.
     */
    where?: DynamicTableDefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefs to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableDefs.
     */
    cursor?: DynamicTableDefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableDefs.
     */
    distinct?: Enumerable<DynamicTableDefScalarFieldEnum>
  }


  /**
   * DynamicTableDef findMany
   */
  export type DynamicTableDefFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefs to fetch.
     */
    where?: DynamicTableDefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefs to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicTableDefs.
     */
    cursor?: DynamicTableDefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefs.
     */
    skip?: number
    distinct?: Enumerable<DynamicTableDefScalarFieldEnum>
  }


  /**
   * DynamicTableDef create
   */
  export type DynamicTableDefCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * The data needed to create a DynamicTableDef.
     */
    data: XOR<DynamicTableDefCreateInput, DynamicTableDefUncheckedCreateInput>
  }


  /**
   * DynamicTableDef createMany
   */
  export type DynamicTableDefCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicTableDefs.
     */
    data: Enumerable<DynamicTableDefCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DynamicTableDef update
   */
  export type DynamicTableDefUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * The data needed to update a DynamicTableDef.
     */
    data: XOR<DynamicTableDefUpdateInput, DynamicTableDefUncheckedUpdateInput>
    /**
     * Choose, which DynamicTableDef to update.
     */
    where: DynamicTableDefWhereUniqueInput
  }


  /**
   * DynamicTableDef updateMany
   */
  export type DynamicTableDefUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicTableDefs.
     */
    data: XOR<DynamicTableDefUpdateManyMutationInput, DynamicTableDefUncheckedUpdateManyInput>
    /**
     * Filter which DynamicTableDefs to update
     */
    where?: DynamicTableDefWhereInput
  }


  /**
   * DynamicTableDef upsert
   */
  export type DynamicTableDefUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * The filter to search for the DynamicTableDef to update in case it exists.
     */
    where: DynamicTableDefWhereUniqueInput
    /**
     * In case the DynamicTableDef found by the `where` argument doesn't exist, create a new DynamicTableDef with this data.
     */
    create: XOR<DynamicTableDefCreateInput, DynamicTableDefUncheckedCreateInput>
    /**
     * In case the DynamicTableDef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicTableDefUpdateInput, DynamicTableDefUncheckedUpdateInput>
  }


  /**
   * DynamicTableDef delete
   */
  export type DynamicTableDefDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
    /**
     * Filter which DynamicTableDef to delete.
     */
    where: DynamicTableDefWhereUniqueInput
  }


  /**
   * DynamicTableDef deleteMany
   */
  export type DynamicTableDefDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableDefs to delete
     */
    where?: DynamicTableDefWhereInput
  }


  /**
   * DynamicTableDef.dynamicTableDefColumns
   */
  export type DynamicTableDef$dynamicTableDefColumnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    where?: DynamicTableDefColumnWhereInput
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    cursor?: DynamicTableDefColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DynamicTableDefColumnScalarFieldEnum>
  }


  /**
   * DynamicTableDef.dynamicTableData
   */
  export type DynamicTableDef$dynamicTableDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    where?: DynamicTableDataWhereInput
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    cursor?: DynamicTableDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DynamicTableDataScalarFieldEnum>
  }


  /**
   * DynamicTableDef without action
   */
  export type DynamicTableDefArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDef
     */
    select?: DynamicTableDefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefInclude<ExtArgs> | null
  }



  /**
   * Model DynamicTableDefColumn
   */


  export type AggregateDynamicTableDefColumn = {
    _count: DynamicTableDefColumnCountAggregateOutputType | null
    _avg: DynamicTableDefColumnAvgAggregateOutputType | null
    _sum: DynamicTableDefColumnSumAggregateOutputType | null
    _min: DynamicTableDefColumnMinAggregateOutputType | null
    _max: DynamicTableDefColumnMaxAggregateOutputType | null
  }

  export type DynamicTableDefColumnAvgAggregateOutputType = {
    id: number | null
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDefColumnSumAggregateOutputType = {
    id: number | null
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDefColumnMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    dynamicTableDefId: number | null
    name: string | null
    type: DynamicColumnType | null
    tenantId: number | null
  }

  export type DynamicTableDefColumnMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    dynamicTableDefId: number | null
    name: string | null
    type: DynamicColumnType | null
    tenantId: number | null
  }

  export type DynamicTableDefColumnCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    dynamicTableDefId: number
    name: number
    type: number
    extendedSchema: number
    tenantId: number
    _all: number
  }


  export type DynamicTableDefColumnAvgAggregateInputType = {
    id?: true
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDefColumnSumAggregateInputType = {
    id?: true
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDefColumnMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    name?: true
    type?: true
    tenantId?: true
  }

  export type DynamicTableDefColumnMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    name?: true
    type?: true
    tenantId?: true
  }

  export type DynamicTableDefColumnCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    name?: true
    type?: true
    extendedSchema?: true
    tenantId?: true
    _all?: true
  }

  export type DynamicTableDefColumnAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableDefColumn to aggregate.
     */
    where?: DynamicTableDefColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefColumns to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicTableDefColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicTableDefColumns
    **/
    _count?: true | DynamicTableDefColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicTableDefColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicTableDefColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicTableDefColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicTableDefColumnMaxAggregateInputType
  }

  export type GetDynamicTableDefColumnAggregateType<T extends DynamicTableDefColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicTableDefColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicTableDefColumn[P]>
      : GetScalarType<T[P], AggregateDynamicTableDefColumn[P]>
  }




  export type DynamicTableDefColumnGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDefColumnWhereInput
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithAggregationInput>
    by: DynamicTableDefColumnScalarFieldEnum[]
    having?: DynamicTableDefColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicTableDefColumnCountAggregateInputType | true
    _avg?: DynamicTableDefColumnAvgAggregateInputType
    _sum?: DynamicTableDefColumnSumAggregateInputType
    _min?: DynamicTableDefColumnMinAggregateInputType
    _max?: DynamicTableDefColumnMaxAggregateInputType
  }


  export type DynamicTableDefColumnGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    dynamicTableDefId: number
    name: string
    type: DynamicColumnType
    extendedSchema: JsonValue | null
    tenantId: number
    _count: DynamicTableDefColumnCountAggregateOutputType | null
    _avg: DynamicTableDefColumnAvgAggregateOutputType | null
    _sum: DynamicTableDefColumnSumAggregateOutputType | null
    _min: DynamicTableDefColumnMinAggregateOutputType | null
    _max: DynamicTableDefColumnMaxAggregateOutputType | null
  }

  type GetDynamicTableDefColumnGroupByPayload<T extends DynamicTableDefColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DynamicTableDefColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicTableDefColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicTableDefColumnGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicTableDefColumnGroupByOutputType[P]>
        }
      >
    >


  export type DynamicTableDefColumnSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    dynamicTableDefId?: boolean
    name?: boolean
    type?: boolean
    extendedSchema?: boolean
    tenantId?: boolean
    dynamicTableDef?: boolean | DynamicTableDefArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicTableDefColumn"]>

  export type DynamicTableDefColumnSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    dynamicTableDefId?: boolean
    name?: boolean
    type?: boolean
    extendedSchema?: boolean
    tenantId?: boolean
  }

  export type DynamicTableDefColumnInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    dynamicTableDef?: boolean | DynamicTableDefArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }


  type DynamicTableDefColumnGetPayload<S extends boolean | null | undefined | DynamicTableDefColumnArgs> = $Types.GetResult<DynamicTableDefColumnPayload, S>

  type DynamicTableDefColumnCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DynamicTableDefColumnFindManyArgs, 'select' | 'include'> & {
      select?: DynamicTableDefColumnCountAggregateInputType | true
    }

  export interface DynamicTableDefColumnDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicTableDefColumn'], meta: { name: 'DynamicTableDefColumn' } }
    /**
     * Find zero or one DynamicTableDefColumn that matches the filter.
     * @param {DynamicTableDefColumnFindUniqueArgs} args - Arguments to find a DynamicTableDefColumn
     * @example
     * // Get one DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DynamicTableDefColumnFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DynamicTableDefColumnFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DynamicTableDefColumn'> extends True ? Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DynamicTableDefColumn that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DynamicTableDefColumnFindUniqueOrThrowArgs} args - Arguments to find a DynamicTableDefColumn
     * @example
     * // Get one DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DynamicTableDefColumnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefColumnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DynamicTableDefColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnFindFirstArgs} args - Arguments to find a DynamicTableDefColumn
     * @example
     * // Get one DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DynamicTableDefColumnFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DynamicTableDefColumnFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DynamicTableDefColumn'> extends True ? Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DynamicTableDefColumn that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnFindFirstOrThrowArgs} args - Arguments to find a DynamicTableDefColumn
     * @example
     * // Get one DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DynamicTableDefColumnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefColumnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DynamicTableDefColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicTableDefColumns
     * const dynamicTableDefColumns = await prisma.dynamicTableDefColumn.findMany()
     * 
     * // Get first 10 DynamicTableDefColumns
     * const dynamicTableDefColumns = await prisma.dynamicTableDefColumn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dynamicTableDefColumnWithIdOnly = await prisma.dynamicTableDefColumn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DynamicTableDefColumnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefColumnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DynamicTableDefColumn.
     * @param {DynamicTableDefColumnCreateArgs} args - Arguments to create a DynamicTableDefColumn.
     * @example
     * // Create one DynamicTableDefColumn
     * const DynamicTableDefColumn = await prisma.dynamicTableDefColumn.create({
     *   data: {
     *     // ... data to create a DynamicTableDefColumn
     *   }
     * })
     * 
    **/
    create<T extends DynamicTableDefColumnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefColumnCreateArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DynamicTableDefColumns.
     *     @param {DynamicTableDefColumnCreateManyArgs} args - Arguments to create many DynamicTableDefColumns.
     *     @example
     *     // Create many DynamicTableDefColumns
     *     const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DynamicTableDefColumnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefColumnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DynamicTableDefColumn.
     * @param {DynamicTableDefColumnDeleteArgs} args - Arguments to delete one DynamicTableDefColumn.
     * @example
     * // Delete one DynamicTableDefColumn
     * const DynamicTableDefColumn = await prisma.dynamicTableDefColumn.delete({
     *   where: {
     *     // ... filter to delete one DynamicTableDefColumn
     *   }
     * })
     * 
    **/
    delete<T extends DynamicTableDefColumnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefColumnDeleteArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DynamicTableDefColumn.
     * @param {DynamicTableDefColumnUpdateArgs} args - Arguments to update one DynamicTableDefColumn.
     * @example
     * // Update one DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DynamicTableDefColumnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefColumnUpdateArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DynamicTableDefColumns.
     * @param {DynamicTableDefColumnDeleteManyArgs} args - Arguments to filter DynamicTableDefColumns to delete.
     * @example
     * // Delete a few DynamicTableDefColumns
     * const { count } = await prisma.dynamicTableDefColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DynamicTableDefColumnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDefColumnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicTableDefColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicTableDefColumns
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DynamicTableDefColumnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefColumnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DynamicTableDefColumn.
     * @param {DynamicTableDefColumnUpsertArgs} args - Arguments to update or create a DynamicTableDefColumn.
     * @example
     * // Update or create a DynamicTableDefColumn
     * const dynamicTableDefColumn = await prisma.dynamicTableDefColumn.upsert({
     *   create: {
     *     // ... data to create a DynamicTableDefColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicTableDefColumn we want to update
     *   }
     * })
    **/
    upsert<T extends DynamicTableDefColumnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDefColumnUpsertArgs<ExtArgs>>
    ): Prisma__DynamicTableDefColumnClient<$Types.GetResult<DynamicTableDefColumnPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DynamicTableDefColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnCountArgs} args - Arguments to filter DynamicTableDefColumns to count.
     * @example
     * // Count the number of DynamicTableDefColumns
     * const count = await prisma.dynamicTableDefColumn.count({
     *   where: {
     *     // ... the filter for the DynamicTableDefColumns we want to count
     *   }
     * })
    **/
    count<T extends DynamicTableDefColumnCountArgs>(
      args?: Subset<T, DynamicTableDefColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicTableDefColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicTableDefColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DynamicTableDefColumnAggregateArgs>(args: Subset<T, DynamicTableDefColumnAggregateArgs>): Prisma.PrismaPromise<GetDynamicTableDefColumnAggregateType<T>>

    /**
     * Group by DynamicTableDefColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDefColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DynamicTableDefColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicTableDefColumnGroupByArgs['orderBy'] }
        : { orderBy?: DynamicTableDefColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DynamicTableDefColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicTableDefColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicTableDefColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DynamicTableDefColumnClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dynamicTableDef<T extends DynamicTableDefArgs<ExtArgs> = {}>(args?: Subset<T, DynamicTableDefArgs<ExtArgs>>): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    tenant<T extends TenantArgs<ExtArgs> = {}>(args?: Subset<T, TenantArgs<ExtArgs>>): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DynamicTableDefColumn base type for findUnique actions
   */
  export type DynamicTableDefColumnFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefColumn to fetch.
     */
    where: DynamicTableDefColumnWhereUniqueInput
  }

  /**
   * DynamicTableDefColumn findUnique
   */
  export interface DynamicTableDefColumnFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDefColumnFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableDefColumn findUniqueOrThrow
   */
  export type DynamicTableDefColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefColumn to fetch.
     */
    where: DynamicTableDefColumnWhereUniqueInput
  }


  /**
   * DynamicTableDefColumn base type for findFirst actions
   */
  export type DynamicTableDefColumnFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefColumn to fetch.
     */
    where?: DynamicTableDefColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefColumns to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableDefColumns.
     */
    cursor?: DynamicTableDefColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableDefColumns.
     */
    distinct?: Enumerable<DynamicTableDefColumnScalarFieldEnum>
  }

  /**
   * DynamicTableDefColumn findFirst
   */
  export interface DynamicTableDefColumnFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDefColumnFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableDefColumn findFirstOrThrow
   */
  export type DynamicTableDefColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefColumn to fetch.
     */
    where?: DynamicTableDefColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefColumns to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableDefColumns.
     */
    cursor?: DynamicTableDefColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableDefColumns.
     */
    distinct?: Enumerable<DynamicTableDefColumnScalarFieldEnum>
  }


  /**
   * DynamicTableDefColumn findMany
   */
  export type DynamicTableDefColumnFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableDefColumns to fetch.
     */
    where?: DynamicTableDefColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableDefColumns to fetch.
     */
    orderBy?: Enumerable<DynamicTableDefColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicTableDefColumns.
     */
    cursor?: DynamicTableDefColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableDefColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableDefColumns.
     */
    skip?: number
    distinct?: Enumerable<DynamicTableDefColumnScalarFieldEnum>
  }


  /**
   * DynamicTableDefColumn create
   */
  export type DynamicTableDefColumnCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a DynamicTableDefColumn.
     */
    data: XOR<DynamicTableDefColumnCreateInput, DynamicTableDefColumnUncheckedCreateInput>
  }


  /**
   * DynamicTableDefColumn createMany
   */
  export type DynamicTableDefColumnCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicTableDefColumns.
     */
    data: Enumerable<DynamicTableDefColumnCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DynamicTableDefColumn update
   */
  export type DynamicTableDefColumnUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a DynamicTableDefColumn.
     */
    data: XOR<DynamicTableDefColumnUpdateInput, DynamicTableDefColumnUncheckedUpdateInput>
    /**
     * Choose, which DynamicTableDefColumn to update.
     */
    where: DynamicTableDefColumnWhereUniqueInput
  }


  /**
   * DynamicTableDefColumn updateMany
   */
  export type DynamicTableDefColumnUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicTableDefColumns.
     */
    data: XOR<DynamicTableDefColumnUpdateManyMutationInput, DynamicTableDefColumnUncheckedUpdateManyInput>
    /**
     * Filter which DynamicTableDefColumns to update
     */
    where?: DynamicTableDefColumnWhereInput
  }


  /**
   * DynamicTableDefColumn upsert
   */
  export type DynamicTableDefColumnUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the DynamicTableDefColumn to update in case it exists.
     */
    where: DynamicTableDefColumnWhereUniqueInput
    /**
     * In case the DynamicTableDefColumn found by the `where` argument doesn't exist, create a new DynamicTableDefColumn with this data.
     */
    create: XOR<DynamicTableDefColumnCreateInput, DynamicTableDefColumnUncheckedCreateInput>
    /**
     * In case the DynamicTableDefColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicTableDefColumnUpdateInput, DynamicTableDefColumnUncheckedUpdateInput>
  }


  /**
   * DynamicTableDefColumn delete
   */
  export type DynamicTableDefColumnDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
    /**
     * Filter which DynamicTableDefColumn to delete.
     */
    where: DynamicTableDefColumnWhereUniqueInput
  }


  /**
   * DynamicTableDefColumn deleteMany
   */
  export type DynamicTableDefColumnDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableDefColumns to delete
     */
    where?: DynamicTableDefColumnWhereInput
  }


  /**
   * DynamicTableDefColumn without action
   */
  export type DynamicTableDefColumnArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableDefColumn
     */
    select?: DynamicTableDefColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDefColumnInclude<ExtArgs> | null
  }



  /**
   * Model DynamicTableData
   */


  export type AggregateDynamicTableData = {
    _count: DynamicTableDataCountAggregateOutputType | null
    _avg: DynamicTableDataAvgAggregateOutputType | null
    _sum: DynamicTableDataSumAggregateOutputType | null
    _min: DynamicTableDataMinAggregateOutputType | null
    _max: DynamicTableDataMaxAggregateOutputType | null
  }

  export type DynamicTableDataAvgAggregateOutputType = {
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDataSumAggregateOutputType = {
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDataMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDataMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    dynamicTableDefId: number | null
    tenantId: number | null
  }

  export type DynamicTableDataCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    dynamicTableDefId: number
    data: number
    tenantId: number
    _all: number
  }


  export type DynamicTableDataAvgAggregateInputType = {
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDataSumAggregateInputType = {
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDataMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDataMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    tenantId?: true
  }

  export type DynamicTableDataCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    dynamicTableDefId?: true
    data?: true
    tenantId?: true
    _all?: true
  }

  export type DynamicTableDataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableData to aggregate.
     */
    where?: DynamicTableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableData to fetch.
     */
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicTableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicTableData
    **/
    _count?: true | DynamicTableDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicTableDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicTableDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicTableDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicTableDataMaxAggregateInputType
  }

  export type GetDynamicTableDataAggregateType<T extends DynamicTableDataAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicTableData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicTableData[P]>
      : GetScalarType<T[P], AggregateDynamicTableData[P]>
  }




  export type DynamicTableDataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DynamicTableDataWhereInput
    orderBy?: Enumerable<DynamicTableDataOrderByWithAggregationInput>
    by: DynamicTableDataScalarFieldEnum[]
    having?: DynamicTableDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicTableDataCountAggregateInputType | true
    _avg?: DynamicTableDataAvgAggregateInputType
    _sum?: DynamicTableDataSumAggregateInputType
    _min?: DynamicTableDataMinAggregateInputType
    _max?: DynamicTableDataMaxAggregateInputType
  }


  export type DynamicTableDataGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    dynamicTableDefId: number
    data: JsonValue
    tenantId: number
    _count: DynamicTableDataCountAggregateOutputType | null
    _avg: DynamicTableDataAvgAggregateOutputType | null
    _sum: DynamicTableDataSumAggregateOutputType | null
    _min: DynamicTableDataMinAggregateOutputType | null
    _max: DynamicTableDataMaxAggregateOutputType | null
  }

  type GetDynamicTableDataGroupByPayload<T extends DynamicTableDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DynamicTableDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicTableDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicTableDataGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicTableDataGroupByOutputType[P]>
        }
      >
    >


  export type DynamicTableDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    dynamicTableDefId?: boolean
    data?: boolean
    tenantId?: boolean
    dynamicTableDef?: boolean | DynamicTableDefArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicTableData"]>

  export type DynamicTableDataSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    dynamicTableDefId?: boolean
    data?: boolean
    tenantId?: boolean
  }

  export type DynamicTableDataInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    dynamicTableDef?: boolean | DynamicTableDefArgs<ExtArgs>
    tenant?: boolean | TenantArgs<ExtArgs>
  }


  type DynamicTableDataGetPayload<S extends boolean | null | undefined | DynamicTableDataArgs> = $Types.GetResult<DynamicTableDataPayload, S>

  type DynamicTableDataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DynamicTableDataFindManyArgs, 'select' | 'include'> & {
      select?: DynamicTableDataCountAggregateInputType | true
    }

  export interface DynamicTableDataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicTableData'], meta: { name: 'DynamicTableData' } }
    /**
     * Find zero or one DynamicTableData that matches the filter.
     * @param {DynamicTableDataFindUniqueArgs} args - Arguments to find a DynamicTableData
     * @example
     * // Get one DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DynamicTableDataFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DynamicTableDataFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DynamicTableData'> extends True ? Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DynamicTableData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DynamicTableDataFindUniqueOrThrowArgs} args - Arguments to find a DynamicTableData
     * @example
     * // Get one DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DynamicTableDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DynamicTableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataFindFirstArgs} args - Arguments to find a DynamicTableData
     * @example
     * // Get one DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DynamicTableDataFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DynamicTableDataFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DynamicTableData'> extends True ? Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DynamicTableData that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataFindFirstOrThrowArgs} args - Arguments to find a DynamicTableData
     * @example
     * // Get one DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DynamicTableDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DynamicTableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findMany()
     * 
     * // Get first 10 DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dynamicTableDataWithIdOnly = await prisma.dynamicTableData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DynamicTableDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DynamicTableData.
     * @param {DynamicTableDataCreateArgs} args - Arguments to create a DynamicTableData.
     * @example
     * // Create one DynamicTableData
     * const DynamicTableData = await prisma.dynamicTableData.create({
     *   data: {
     *     // ... data to create a DynamicTableData
     *   }
     * })
     * 
    **/
    create<T extends DynamicTableDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDataCreateArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DynamicTableData.
     *     @param {DynamicTableDataCreateManyArgs} args - Arguments to create many DynamicTableData.
     *     @example
     *     // Create many DynamicTableData
     *     const dynamicTableData = await prisma.dynamicTableData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DynamicTableDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DynamicTableData.
     * @param {DynamicTableDataDeleteArgs} args - Arguments to delete one DynamicTableData.
     * @example
     * // Delete one DynamicTableData
     * const DynamicTableData = await prisma.dynamicTableData.delete({
     *   where: {
     *     // ... filter to delete one DynamicTableData
     *   }
     * })
     * 
    **/
    delete<T extends DynamicTableDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDataDeleteArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DynamicTableData.
     * @param {DynamicTableDataUpdateArgs} args - Arguments to update one DynamicTableData.
     * @example
     * // Update one DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DynamicTableDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDataUpdateArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DynamicTableData.
     * @param {DynamicTableDataDeleteManyArgs} args - Arguments to filter DynamicTableData to delete.
     * @example
     * // Delete a few DynamicTableData
     * const { count } = await prisma.dynamicTableData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DynamicTableDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DynamicTableDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicTableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DynamicTableDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DynamicTableData.
     * @param {DynamicTableDataUpsertArgs} args - Arguments to update or create a DynamicTableData.
     * @example
     * // Update or create a DynamicTableData
     * const dynamicTableData = await prisma.dynamicTableData.upsert({
     *   create: {
     *     // ... data to create a DynamicTableData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicTableData we want to update
     *   }
     * })
    **/
    upsert<T extends DynamicTableDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DynamicTableDataUpsertArgs<ExtArgs>>
    ): Prisma__DynamicTableDataClient<$Types.GetResult<DynamicTableDataPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DynamicTableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataCountArgs} args - Arguments to filter DynamicTableData to count.
     * @example
     * // Count the number of DynamicTableData
     * const count = await prisma.dynamicTableData.count({
     *   where: {
     *     // ... the filter for the DynamicTableData we want to count
     *   }
     * })
    **/
    count<T extends DynamicTableDataCountArgs>(
      args?: Subset<T, DynamicTableDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicTableDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicTableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DynamicTableDataAggregateArgs>(args: Subset<T, DynamicTableDataAggregateArgs>): Prisma.PrismaPromise<GetDynamicTableDataAggregateType<T>>

    /**
     * Group by DynamicTableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicTableDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DynamicTableDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicTableDataGroupByArgs['orderBy'] }
        : { orderBy?: DynamicTableDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DynamicTableDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicTableDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicTableData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DynamicTableDataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dynamicTableDef<T extends DynamicTableDefArgs<ExtArgs> = {}>(args?: Subset<T, DynamicTableDefArgs<ExtArgs>>): Prisma__DynamicTableDefClient<$Types.GetResult<DynamicTableDefPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    tenant<T extends TenantArgs<ExtArgs> = {}>(args?: Subset<T, TenantArgs<ExtArgs>>): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DynamicTableData base type for findUnique actions
   */
  export type DynamicTableDataFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableData to fetch.
     */
    where: DynamicTableDataWhereUniqueInput
  }

  /**
   * DynamicTableData findUnique
   */
  export interface DynamicTableDataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDataFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableData findUniqueOrThrow
   */
  export type DynamicTableDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableData to fetch.
     */
    where: DynamicTableDataWhereUniqueInput
  }


  /**
   * DynamicTableData base type for findFirst actions
   */
  export type DynamicTableDataFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableData to fetch.
     */
    where?: DynamicTableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableData to fetch.
     */
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableData.
     */
    cursor?: DynamicTableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableData.
     */
    distinct?: Enumerable<DynamicTableDataScalarFieldEnum>
  }

  /**
   * DynamicTableData findFirst
   */
  export interface DynamicTableDataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DynamicTableDataFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DynamicTableData findFirstOrThrow
   */
  export type DynamicTableDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableData to fetch.
     */
    where?: DynamicTableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableData to fetch.
     */
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicTableData.
     */
    cursor?: DynamicTableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicTableData.
     */
    distinct?: Enumerable<DynamicTableDataScalarFieldEnum>
  }


  /**
   * DynamicTableData findMany
   */
  export type DynamicTableDataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter, which DynamicTableData to fetch.
     */
    where?: DynamicTableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicTableData to fetch.
     */
    orderBy?: Enumerable<DynamicTableDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicTableData.
     */
    cursor?: DynamicTableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicTableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicTableData.
     */
    skip?: number
    distinct?: Enumerable<DynamicTableDataScalarFieldEnum>
  }


  /**
   * DynamicTableData create
   */
  export type DynamicTableDataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * The data needed to create a DynamicTableData.
     */
    data: XOR<DynamicTableDataCreateInput, DynamicTableDataUncheckedCreateInput>
  }


  /**
   * DynamicTableData createMany
   */
  export type DynamicTableDataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicTableData.
     */
    data: Enumerable<DynamicTableDataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DynamicTableData update
   */
  export type DynamicTableDataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * The data needed to update a DynamicTableData.
     */
    data: XOR<DynamicTableDataUpdateInput, DynamicTableDataUncheckedUpdateInput>
    /**
     * Choose, which DynamicTableData to update.
     */
    where: DynamicTableDataWhereUniqueInput
  }


  /**
   * DynamicTableData updateMany
   */
  export type DynamicTableDataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicTableData.
     */
    data: XOR<DynamicTableDataUpdateManyMutationInput, DynamicTableDataUncheckedUpdateManyInput>
    /**
     * Filter which DynamicTableData to update
     */
    where?: DynamicTableDataWhereInput
  }


  /**
   * DynamicTableData upsert
   */
  export type DynamicTableDataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * The filter to search for the DynamicTableData to update in case it exists.
     */
    where: DynamicTableDataWhereUniqueInput
    /**
     * In case the DynamicTableData found by the `where` argument doesn't exist, create a new DynamicTableData with this data.
     */
    create: XOR<DynamicTableDataCreateInput, DynamicTableDataUncheckedCreateInput>
    /**
     * In case the DynamicTableData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicTableDataUpdateInput, DynamicTableDataUncheckedUpdateInput>
  }


  /**
   * DynamicTableData delete
   */
  export type DynamicTableDataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
    /**
     * Filter which DynamicTableData to delete.
     */
    where: DynamicTableDataWhereUniqueInput
  }


  /**
   * DynamicTableData deleteMany
   */
  export type DynamicTableDataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicTableData to delete
     */
    where?: DynamicTableDataWhereInput
  }


  /**
   * DynamicTableData without action
   */
  export type DynamicTableDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicTableData
     */
    select?: DynamicTableDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DynamicTableDataInclude<ExtArgs> | null
  }



  /**
   * Model Menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    tenantId: number | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    tenantId: number | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    treeData: number
    tenantId: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    tenantId?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    tenantId?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    treeData?: true
    tenantId?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByWithAggregationInput>
    by: MenuScalarFieldEnum[]
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    treeData: JsonValue
    tenantId: number
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    treeData?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    treeData?: boolean
    tenantId?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantArgs<ExtArgs>
  }


  type MenuGetPayload<S extends boolean | null | undefined | MenuArgs> = $Types.GetResult<MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Menu'> extends True ? Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Menu'> extends True ? Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MenuPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuCreateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>
    ): Prisma__MenuClient<$Types.GetResult<MenuPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tenant<T extends TenantArgs<ExtArgs> = {}>(args?: Subset<T, TenantArgs<ExtArgs>>): Prisma__TenantClient<$Types.GetResult<TenantPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Menu base type for findUnique actions
   */
  export type MenuFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUnique
   */
  export interface MenuFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MenuFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu base type for findFirst actions
   */
  export type MenuFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }

  /**
   * Menu findFirst
   */
  export interface MenuFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MenuFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: Enumerable<MenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }


  /**
   * Menu without action
   */
  export type MenuArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
  }



  /**
   * Model SentSms
   */


  export type AggregateSentSms = {
    _count: SentSmsCountAggregateOutputType | null
    _avg: SentSmsAvgAggregateOutputType | null
    _sum: SentSmsSumAggregateOutputType | null
    _min: SentSmsMinAggregateOutputType | null
    _max: SentSmsMaxAggregateOutputType | null
  }

  export type SentSmsAvgAggregateOutputType = {
    id: number | null
  }

  export type SentSmsSumAggregateOutputType = {
    id: number | null
  }

  export type SentSmsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    mobile: string | null
    code: string | null
  }

  export type SentSmsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    mobile: string | null
    code: string | null
  }

  export type SentSmsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    mobile: number
    code: number
    _all: number
  }


  export type SentSmsAvgAggregateInputType = {
    id?: true
  }

  export type SentSmsSumAggregateInputType = {
    id?: true
  }

  export type SentSmsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    mobile?: true
    code?: true
  }

  export type SentSmsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    mobile?: true
    code?: true
  }

  export type SentSmsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    mobile?: true
    code?: true
    _all?: true
  }

  export type SentSmsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentSms to aggregate.
     */
    where?: SentSmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentSms to fetch.
     */
    orderBy?: Enumerable<SentSmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentSmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentSms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentSms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentSms
    **/
    _count?: true | SentSmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentSmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentSmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentSmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentSmsMaxAggregateInputType
  }

  export type GetSentSmsAggregateType<T extends SentSmsAggregateArgs> = {
        [P in keyof T & keyof AggregateSentSms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentSms[P]>
      : GetScalarType<T[P], AggregateSentSms[P]>
  }




  export type SentSmsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SentSmsWhereInput
    orderBy?: Enumerable<SentSmsOrderByWithAggregationInput>
    by: SentSmsScalarFieldEnum[]
    having?: SentSmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentSmsCountAggregateInputType | true
    _avg?: SentSmsAvgAggregateInputType
    _sum?: SentSmsSumAggregateInputType
    _min?: SentSmsMinAggregateInputType
    _max?: SentSmsMaxAggregateInputType
  }


  export type SentSmsGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    mobile: string
    code: string
    _count: SentSmsCountAggregateOutputType | null
    _avg: SentSmsAvgAggregateOutputType | null
    _sum: SentSmsSumAggregateOutputType | null
    _min: SentSmsMinAggregateOutputType | null
    _max: SentSmsMaxAggregateOutputType | null
  }

  type GetSentSmsGroupByPayload<T extends SentSmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SentSmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentSmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentSmsGroupByOutputType[P]>
            : GetScalarType<T[P], SentSmsGroupByOutputType[P]>
        }
      >
    >


  export type SentSmsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    mobile?: boolean
    code?: boolean
  }, ExtArgs["result"]["sentSms"]>

  export type SentSmsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    mobile?: boolean
    code?: boolean
  }


  type SentSmsGetPayload<S extends boolean | null | undefined | SentSmsArgs> = $Types.GetResult<SentSmsPayload, S>

  type SentSmsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SentSmsFindManyArgs, 'select' | 'include'> & {
      select?: SentSmsCountAggregateInputType | true
    }

  export interface SentSmsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentSms'], meta: { name: 'SentSms' } }
    /**
     * Find zero or one SentSms that matches the filter.
     * @param {SentSmsFindUniqueArgs} args - Arguments to find a SentSms
     * @example
     * // Get one SentSms
     * const sentSms = await prisma.sentSms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SentSmsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SentSmsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SentSms'> extends True ? Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SentSms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SentSmsFindUniqueOrThrowArgs} args - Arguments to find a SentSms
     * @example
     * // Get one SentSms
     * const sentSms = await prisma.sentSms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SentSmsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SentSmsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SentSms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsFindFirstArgs} args - Arguments to find a SentSms
     * @example
     * // Get one SentSms
     * const sentSms = await prisma.sentSms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SentSmsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SentSmsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SentSms'> extends True ? Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SentSms that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsFindFirstOrThrowArgs} args - Arguments to find a SentSms
     * @example
     * // Get one SentSms
     * const sentSms = await prisma.sentSms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SentSmsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SentSmsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SentSms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentSms
     * const sentSms = await prisma.sentSms.findMany()
     * 
     * // Get first 10 SentSms
     * const sentSms = await prisma.sentSms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentSmsWithIdOnly = await prisma.sentSms.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SentSmsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SentSmsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SentSms.
     * @param {SentSmsCreateArgs} args - Arguments to create a SentSms.
     * @example
     * // Create one SentSms
     * const SentSms = await prisma.sentSms.create({
     *   data: {
     *     // ... data to create a SentSms
     *   }
     * })
     * 
    **/
    create<T extends SentSmsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SentSmsCreateArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SentSms.
     *     @param {SentSmsCreateManyArgs} args - Arguments to create many SentSms.
     *     @example
     *     // Create many SentSms
     *     const sentSms = await prisma.sentSms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SentSmsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SentSmsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SentSms.
     * @param {SentSmsDeleteArgs} args - Arguments to delete one SentSms.
     * @example
     * // Delete one SentSms
     * const SentSms = await prisma.sentSms.delete({
     *   where: {
     *     // ... filter to delete one SentSms
     *   }
     * })
     * 
    **/
    delete<T extends SentSmsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SentSmsDeleteArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SentSms.
     * @param {SentSmsUpdateArgs} args - Arguments to update one SentSms.
     * @example
     * // Update one SentSms
     * const sentSms = await prisma.sentSms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SentSmsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SentSmsUpdateArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SentSms.
     * @param {SentSmsDeleteManyArgs} args - Arguments to filter SentSms to delete.
     * @example
     * // Delete a few SentSms
     * const { count } = await prisma.sentSms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SentSmsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SentSmsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentSms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentSms
     * const sentSms = await prisma.sentSms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SentSmsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SentSmsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SentSms.
     * @param {SentSmsUpsertArgs} args - Arguments to update or create a SentSms.
     * @example
     * // Update or create a SentSms
     * const sentSms = await prisma.sentSms.upsert({
     *   create: {
     *     // ... data to create a SentSms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentSms we want to update
     *   }
     * })
    **/
    upsert<T extends SentSmsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SentSmsUpsertArgs<ExtArgs>>
    ): Prisma__SentSmsClient<$Types.GetResult<SentSmsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SentSms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsCountArgs} args - Arguments to filter SentSms to count.
     * @example
     * // Count the number of SentSms
     * const count = await prisma.sentSms.count({
     *   where: {
     *     // ... the filter for the SentSms we want to count
     *   }
     * })
    **/
    count<T extends SentSmsCountArgs>(
      args?: Subset<T, SentSmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentSmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentSms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SentSmsAggregateArgs>(args: Subset<T, SentSmsAggregateArgs>): Prisma.PrismaPromise<GetSentSmsAggregateType<T>>

    /**
     * Group by SentSms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentSmsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SentSmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentSmsGroupByArgs['orderBy'] }
        : { orderBy?: SentSmsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentSmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentSmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SentSms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SentSmsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SentSms base type for findUnique actions
   */
  export type SentSmsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter, which SentSms to fetch.
     */
    where: SentSmsWhereUniqueInput
  }

  /**
   * SentSms findUnique
   */
  export interface SentSmsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SentSmsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SentSms findUniqueOrThrow
   */
  export type SentSmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter, which SentSms to fetch.
     */
    where: SentSmsWhereUniqueInput
  }


  /**
   * SentSms base type for findFirst actions
   */
  export type SentSmsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter, which SentSms to fetch.
     */
    where?: SentSmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentSms to fetch.
     */
    orderBy?: Enumerable<SentSmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentSms.
     */
    cursor?: SentSmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentSms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentSms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentSms.
     */
    distinct?: Enumerable<SentSmsScalarFieldEnum>
  }

  /**
   * SentSms findFirst
   */
  export interface SentSmsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SentSmsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SentSms findFirstOrThrow
   */
  export type SentSmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter, which SentSms to fetch.
     */
    where?: SentSmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentSms to fetch.
     */
    orderBy?: Enumerable<SentSmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentSms.
     */
    cursor?: SentSmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentSms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentSms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentSms.
     */
    distinct?: Enumerable<SentSmsScalarFieldEnum>
  }


  /**
   * SentSms findMany
   */
  export type SentSmsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter, which SentSms to fetch.
     */
    where?: SentSmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentSms to fetch.
     */
    orderBy?: Enumerable<SentSmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentSms.
     */
    cursor?: SentSmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentSms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentSms.
     */
    skip?: number
    distinct?: Enumerable<SentSmsScalarFieldEnum>
  }


  /**
   * SentSms create
   */
  export type SentSmsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * The data needed to create a SentSms.
     */
    data: XOR<SentSmsCreateInput, SentSmsUncheckedCreateInput>
  }


  /**
   * SentSms createMany
   */
  export type SentSmsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentSms.
     */
    data: Enumerable<SentSmsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SentSms update
   */
  export type SentSmsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * The data needed to update a SentSms.
     */
    data: XOR<SentSmsUpdateInput, SentSmsUncheckedUpdateInput>
    /**
     * Choose, which SentSms to update.
     */
    where: SentSmsWhereUniqueInput
  }


  /**
   * SentSms updateMany
   */
  export type SentSmsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentSms.
     */
    data: XOR<SentSmsUpdateManyMutationInput, SentSmsUncheckedUpdateManyInput>
    /**
     * Filter which SentSms to update
     */
    where?: SentSmsWhereInput
  }


  /**
   * SentSms upsert
   */
  export type SentSmsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * The filter to search for the SentSms to update in case it exists.
     */
    where: SentSmsWhereUniqueInput
    /**
     * In case the SentSms found by the `where` argument doesn't exist, create a new SentSms with this data.
     */
    create: XOR<SentSmsCreateInput, SentSmsUncheckedCreateInput>
    /**
     * In case the SentSms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentSmsUpdateInput, SentSmsUncheckedUpdateInput>
  }


  /**
   * SentSms delete
   */
  export type SentSmsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
    /**
     * Filter which SentSms to delete.
     */
    where: SentSmsWhereUniqueInput
  }


  /**
   * SentSms deleteMany
   */
  export type SentSmsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentSms to delete
     */
    where?: SentSmsWhereInput
  }


  /**
   * SentSms without action
   */
  export type SentSmsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentSms
     */
    select?: SentSmsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    name: 'name'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const TaskFormRelationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    taskDefinitionKey: 'taskDefinitionKey',
    formKey: 'formKey'
  };

  export type TaskFormRelationScalarFieldEnum = (typeof TaskFormRelationScalarFieldEnum)[keyof typeof TaskFormRelationScalarFieldEnum]


  export const TableFilterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    path: 'path',
    name: 'name',
    filterJSON: 'filterJSON'
  };

  export type TableFilterScalarFieldEnum = (typeof TableFilterScalarFieldEnum)[keyof typeof TableFilterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    username: 'username',
    hashedPassword: 'hashedPassword',
    hashedRefreshToken: 'hashedRefreshToken',
    unionid: 'unionid',
    email: 'email',
    mobile: 'mobile',
    image: 'image',
    tenantId: 'tenantId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    userId: 'userId',
    fullName: 'fullName',
    tenantId: 'tenantId'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const AuditsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    auditId: 'auditId',
    auditType: 'auditType',
    userId: 'userId',
    username: 'username',
    action: 'action',
    auditChanges: 'auditChanges',
    version: 'version'
  };

  export type AuditsScalarFieldEnum = (typeof AuditsScalarFieldEnum)[keyof typeof AuditsScalarFieldEnum]


  export const DynamicTableDefScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    name: 'name',
    extendedSchema: 'extendedSchema',
    tenantId: 'tenantId'
  };

  export type DynamicTableDefScalarFieldEnum = (typeof DynamicTableDefScalarFieldEnum)[keyof typeof DynamicTableDefScalarFieldEnum]


  export const DynamicTableDefColumnScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    dynamicTableDefId: 'dynamicTableDefId',
    name: 'name',
    type: 'type',
    extendedSchema: 'extendedSchema',
    tenantId: 'tenantId'
  };

  export type DynamicTableDefColumnScalarFieldEnum = (typeof DynamicTableDefColumnScalarFieldEnum)[keyof typeof DynamicTableDefColumnScalarFieldEnum]


  export const DynamicTableDataScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    dynamicTableDefId: 'dynamicTableDefId',
    data: 'data',
    tenantId: 'tenantId'
  };

  export type DynamicTableDataScalarFieldEnum = (typeof DynamicTableDataScalarFieldEnum)[keyof typeof DynamicTableDataScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    treeData: 'treeData',
    tenantId: 'tenantId'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const SentSmsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    mobile: 'mobile',
    code: 'code'
  };

  export type SentSmsScalarFieldEnum = (typeof SentSmsScalarFieldEnum)[keyof typeof SentSmsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: Enumerable<TenantWhereInput>
    OR?: Enumerable<TenantWhereInput>
    NOT?: Enumerable<TenantWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    name?: StringFilter | string
    users?: UserListRelationFilter
    menu?: XOR<MenuRelationFilter, MenuWhereInput> | null
    dynamicTableDefs?: DynamicTableDefListRelationFilter
    dynamicTableDefColumns?: DynamicTableDefColumnListRelationFilter
    dynamicTableData?: DynamicTableDataListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    menu?: MenuOrderByWithRelationInput
    dynamicTableDefs?: DynamicTableDefOrderByRelationAggregateInput
    dynamicTableDefColumns?: DynamicTableDefColumnOrderByRelationAggregateInput
    dynamicTableData?: DynamicTableDataOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TenantScalarWhereWithAggregatesInput>
    OR?: Enumerable<TenantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TenantScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
  }

  export type TaskFormRelationWhereInput = {
    AND?: Enumerable<TaskFormRelationWhereInput>
    OR?: Enumerable<TaskFormRelationWhereInput>
    NOT?: Enumerable<TaskFormRelationWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    taskDefinitionKey?: StringFilter | string
    formKey?: StringFilter | string
  }

  export type TaskFormRelationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    taskDefinitionKey?: SortOrder
    formKey?: SortOrder
  }

  export type TaskFormRelationWhereUniqueInput = {
    id?: number
    taskDefinitionKey?: string
  }

  export type TaskFormRelationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    taskDefinitionKey?: SortOrder
    formKey?: SortOrder
    _count?: TaskFormRelationCountOrderByAggregateInput
    _avg?: TaskFormRelationAvgOrderByAggregateInput
    _max?: TaskFormRelationMaxOrderByAggregateInput
    _min?: TaskFormRelationMinOrderByAggregateInput
    _sum?: TaskFormRelationSumOrderByAggregateInput
  }

  export type TaskFormRelationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskFormRelationScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskFormRelationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskFormRelationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    taskDefinitionKey?: StringWithAggregatesFilter | string
    formKey?: StringWithAggregatesFilter | string
  }

  export type TableFilterWhereInput = {
    AND?: Enumerable<TableFilterWhereInput>
    OR?: Enumerable<TableFilterWhereInput>
    NOT?: Enumerable<TableFilterWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    path?: StringFilter | string
    name?: StringFilter | string
    filterJSON?: StringFilter | string
  }

  export type TableFilterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    path?: SortOrder
    name?: SortOrder
    filterJSON?: SortOrder
  }

  export type TableFilterWhereUniqueInput = {
    id?: number
  }

  export type TableFilterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    path?: SortOrder
    name?: SortOrder
    filterJSON?: SortOrder
    _count?: TableFilterCountOrderByAggregateInput
    _avg?: TableFilterAvgOrderByAggregateInput
    _max?: TableFilterMaxOrderByAggregateInput
    _min?: TableFilterMinOrderByAggregateInput
    _sum?: TableFilterSumOrderByAggregateInput
  }

  export type TableFilterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TableFilterScalarWhereWithAggregatesInput>
    OR?: Enumerable<TableFilterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TableFilterScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    path?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    filterJSON?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    username?: StringFilter | string
    hashedPassword?: StringNullableFilter | string | null
    hashedRefreshToken?: StringNullableFilter | string | null
    unionid?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    mobile?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    tenantId?: IntFilter | number
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput> | null
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    unionid?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    mobile?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    unionid?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    username?: StringWithAggregatesFilter | string
    hashedPassword?: StringNullableWithAggregatesFilter | string | null
    hashedRefreshToken?: StringNullableWithAggregatesFilter | string | null
    unionid?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    mobile?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    tenantId?: IntWithAggregatesFilter | number
  }

  export type UserProfileWhereInput = {
    AND?: Enumerable<UserProfileWhereInput>
    OR?: Enumerable<UserProfileWhereInput>
    NOT?: Enumerable<UserProfileWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    userId?: IntFilter | number
    fullName?: StringFilter | string
    tenantId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    tenantId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = {
    id?: number
    userId?: number
  }

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    tenantId?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    fullName?: StringWithAggregatesFilter | string
    tenantId?: IntWithAggregatesFilter | number
  }

  export type AuditsWhereInput = {
    AND?: Enumerable<AuditsWhereInput>
    OR?: Enumerable<AuditsWhereInput>
    NOT?: Enumerable<AuditsWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    auditId?: IntFilter | number
    auditType?: StringFilter | string
    userId?: StringFilter | string
    username?: StringNullableFilter | string | null
    action?: StringFilter | string
    auditChanges?: StringFilter | string
    version?: IntFilter | number
  }

  export type AuditsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    auditId?: SortOrder
    auditType?: SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    action?: SortOrder
    auditChanges?: SortOrder
    version?: SortOrder
  }

  export type AuditsWhereUniqueInput = {
    id?: number
  }

  export type AuditsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    auditId?: SortOrder
    auditType?: SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    action?: SortOrder
    auditChanges?: SortOrder
    version?: SortOrder
    _count?: AuditsCountOrderByAggregateInput
    _avg?: AuditsAvgOrderByAggregateInput
    _max?: AuditsMaxOrderByAggregateInput
    _min?: AuditsMinOrderByAggregateInput
    _sum?: AuditsSumOrderByAggregateInput
  }

  export type AuditsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuditsScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuditsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuditsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    auditId?: IntWithAggregatesFilter | number
    auditType?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    action?: StringWithAggregatesFilter | string
    auditChanges?: StringWithAggregatesFilter | string
    version?: IntWithAggregatesFilter | number
  }

  export type DynamicTableDefWhereInput = {
    AND?: Enumerable<DynamicTableDefWhereInput>
    OR?: Enumerable<DynamicTableDefWhereInput>
    NOT?: Enumerable<DynamicTableDefWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    name?: StringFilter | string
    extendedSchema?: JsonNullableFilter
    tenantId?: IntFilter | number
    dynamicTableDefColumns?: DynamicTableDefColumnListRelationFilter
    dynamicTableData?: DynamicTableDataListRelationFilter
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type DynamicTableDefOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    extendedSchema?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    dynamicTableDefColumns?: DynamicTableDefColumnOrderByRelationAggregateInput
    dynamicTableData?: DynamicTableDataOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type DynamicTableDefWhereUniqueInput = {
    id?: number
  }

  export type DynamicTableDefOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    extendedSchema?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    _count?: DynamicTableDefCountOrderByAggregateInput
    _avg?: DynamicTableDefAvgOrderByAggregateInput
    _max?: DynamicTableDefMaxOrderByAggregateInput
    _min?: DynamicTableDefMinOrderByAggregateInput
    _sum?: DynamicTableDefSumOrderByAggregateInput
  }

  export type DynamicTableDefScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DynamicTableDefScalarWhereWithAggregatesInput>
    OR?: Enumerable<DynamicTableDefScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DynamicTableDefScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    extendedSchema?: JsonNullableWithAggregatesFilter
    tenantId?: IntWithAggregatesFilter | number
  }

  export type DynamicTableDefColumnWhereInput = {
    AND?: Enumerable<DynamicTableDefColumnWhereInput>
    OR?: Enumerable<DynamicTableDefColumnWhereInput>
    NOT?: Enumerable<DynamicTableDefColumnWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    dynamicTableDefId?: IntFilter | number
    name?: StringFilter | string
    type?: EnumDynamicColumnTypeFilter | DynamicColumnType
    extendedSchema?: JsonNullableFilter
    tenantId?: IntFilter | number
    dynamicTableDef?: XOR<DynamicTableDefRelationFilter, DynamicTableDefWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type DynamicTableDefColumnOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    extendedSchema?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    dynamicTableDef?: DynamicTableDefOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type DynamicTableDefColumnWhereUniqueInput = {
    id?: number
  }

  export type DynamicTableDefColumnOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    extendedSchema?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    _count?: DynamicTableDefColumnCountOrderByAggregateInput
    _avg?: DynamicTableDefColumnAvgOrderByAggregateInput
    _max?: DynamicTableDefColumnMaxOrderByAggregateInput
    _min?: DynamicTableDefColumnMinOrderByAggregateInput
    _sum?: DynamicTableDefColumnSumOrderByAggregateInput
  }

  export type DynamicTableDefColumnScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DynamicTableDefColumnScalarWhereWithAggregatesInput>
    OR?: Enumerable<DynamicTableDefColumnScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DynamicTableDefColumnScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    dynamicTableDefId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: EnumDynamicColumnTypeWithAggregatesFilter | DynamicColumnType
    extendedSchema?: JsonNullableWithAggregatesFilter
    tenantId?: IntWithAggregatesFilter | number
  }

  export type DynamicTableDataWhereInput = {
    AND?: Enumerable<DynamicTableDataWhereInput>
    OR?: Enumerable<DynamicTableDataWhereInput>
    NOT?: Enumerable<DynamicTableDataWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    dynamicTableDefId?: IntFilter | number
    data?: JsonFilter
    tenantId?: IntFilter | number
    dynamicTableDef?: XOR<DynamicTableDefRelationFilter, DynamicTableDefWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type DynamicTableDataOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
    dynamicTableDef?: DynamicTableDefOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type DynamicTableDataWhereUniqueInput = {
    id?: string
  }

  export type DynamicTableDataOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
    _count?: DynamicTableDataCountOrderByAggregateInput
    _avg?: DynamicTableDataAvgOrderByAggregateInput
    _max?: DynamicTableDataMaxOrderByAggregateInput
    _min?: DynamicTableDataMinOrderByAggregateInput
    _sum?: DynamicTableDataSumOrderByAggregateInput
  }

  export type DynamicTableDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DynamicTableDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<DynamicTableDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DynamicTableDataScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    dynamicTableDefId?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
    tenantId?: IntWithAggregatesFilter | number
  }

  export type MenuWhereInput = {
    AND?: Enumerable<MenuWhereInput>
    OR?: Enumerable<MenuWhereInput>
    NOT?: Enumerable<MenuWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    treeData?: JsonFilter
    tenantId?: IntFilter | number
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    treeData?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type MenuWhereUniqueInput = {
    id?: number
    tenantId?: number
  }

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    treeData?: SortOrder
    tenantId?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<MenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    treeData?: JsonWithAggregatesFilter
    tenantId?: IntWithAggregatesFilter | number
  }

  export type SentSmsWhereInput = {
    AND?: Enumerable<SentSmsWhereInput>
    OR?: Enumerable<SentSmsWhereInput>
    NOT?: Enumerable<SentSmsWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    mobile?: StringFilter | string
    code?: StringFilter | string
  }

  export type SentSmsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
  }

  export type SentSmsWhereUniqueInput = {
    id?: number
  }

  export type SentSmsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
    _count?: SentSmsCountOrderByAggregateInput
    _avg?: SentSmsAvgOrderByAggregateInput
    _max?: SentSmsMaxOrderByAggregateInput
    _min?: SentSmsMinOrderByAggregateInput
    _sum?: SentSmsSumOrderByAggregateInput
  }

  export type SentSmsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SentSmsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SentSmsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SentSmsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    mobile?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
  }

  export type TenantCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserCreateNestedManyWithoutTenantInput
    menu?: MenuCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    menu?: MenuUncheckedCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTenantNestedInput
    menu?: MenuUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    menu?: MenuUncheckedUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
  }

  export type TenantUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskFormRelationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    taskDefinitionKey: string
    formKey: string
  }

  export type TaskFormRelationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    taskDefinitionKey: string
    formKey: string
  }

  export type TaskFormRelationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    taskDefinitionKey?: StringFieldUpdateOperationsInput | string
    formKey?: StringFieldUpdateOperationsInput | string
  }

  export type TaskFormRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    taskDefinitionKey?: StringFieldUpdateOperationsInput | string
    formKey?: StringFieldUpdateOperationsInput | string
  }

  export type TaskFormRelationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    taskDefinitionKey: string
    formKey: string
  }

  export type TaskFormRelationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    taskDefinitionKey?: StringFieldUpdateOperationsInput | string
    formKey?: StringFieldUpdateOperationsInput | string
  }

  export type TaskFormRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    taskDefinitionKey?: StringFieldUpdateOperationsInput | string
    formKey?: StringFieldUpdateOperationsInput | string
  }

  export type TableFilterCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    path: string
    name: string
    filterJSON: string
  }

  export type TableFilterUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    path: string
    name: string
    filterJSON: string
  }

  export type TableFilterUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filterJSON?: StringFieldUpdateOperationsInput | string
  }

  export type TableFilterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filterJSON?: StringFieldUpdateOperationsInput | string
  }

  export type TableFilterCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    path: string
    name: string
    filterJSON: string
  }

  export type TableFilterUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filterJSON?: StringFieldUpdateOperationsInput | string
  }

  export type TableFilterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filterJSON?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    tenantId: number
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: IntFieldUpdateOperationsInput | number
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    tenantId: number
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    fullName: string
    tenantId: number
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    userId: number
    fullName: string
    tenantId: number
  }

  export type UserProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    userId: number
    fullName: string
    tenantId: number
  }

  export type UserProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type AuditsCreateInput = {
    createdAt?: Date | string
    auditId: number
    auditType: string
    userId: string
    username?: string | null
    action: string
    auditChanges: string
    version: number
  }

  export type AuditsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    auditId: number
    auditType: string
    userId: string
    username?: string | null
    action: string
    auditChanges: string
    version: number
  }

  export type AuditsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditId?: IntFieldUpdateOperationsInput | number
    auditType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    auditChanges?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AuditsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditId?: IntFieldUpdateOperationsInput | number
    auditType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    auditChanges?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AuditsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    auditId: number
    auditType: string
    userId: string
    username?: string | null
    action: string
    auditChanges: string
    version: number
  }

  export type AuditsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditId?: IntFieldUpdateOperationsInput | number
    auditType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    auditChanges?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AuditsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditId?: IntFieldUpdateOperationsInput | number
    auditType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    auditChanges?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDefCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutDynamicTableDefInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutDynamicTableDefInput
    tenant?: TenantCreateNestedOneWithoutDynamicTableDefsInput
  }

  export type DynamicTableDefUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutDynamicTableDefInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutDynamicTableDefInput
  }

  export type DynamicTableDefUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutDynamicTableDefNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutDynamicTableDefNestedInput
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDefsNestedInput
  }

  export type DynamicTableDefUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDefNestedInput
  }

  export type DynamicTableDefCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDefUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDefColumnCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDef: DynamicTableDefCreateNestedOneWithoutDynamicTableDefColumnsInput
    tenant?: TenantCreateNestedOneWithoutDynamicTableDefColumnsInput
  }

  export type DynamicTableDefColumnUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDefColumnUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDef?: DynamicTableDefUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput
  }

  export type DynamicTableDefColumnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDefColumnCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDefColumnUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDataCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    data: JsonNullValueInput | InputJsonValue
    dynamicTableDef: DynamicTableDefCreateNestedOneWithoutDynamicTableDataInput
    tenant?: TenantCreateNestedOneWithoutDynamicTableDataInput
  }

  export type DynamicTableDataUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    data: JsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    dynamicTableDef?: DynamicTableDefUpdateOneRequiredWithoutDynamicTableDataNestedInput
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDataNestedInput
  }

  export type DynamicTableDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDataCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    data: JsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    treeData: JsonNullValueInput | InputJsonValue
    tenant: TenantCreateNestedOneWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    treeData: JsonNullValueInput | InputJsonValue
    tenantId: number
  }

  export type MenuUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
    tenant?: TenantUpdateOneRequiredWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    treeData: JsonNullValueInput | InputJsonValue
    tenantId: number
  }

  export type MenuUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type SentSmsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    mobile: string
    code: string
  }

  export type SentSmsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    mobile: string
    code: string
  }

  export type SentSmsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    mobile?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type SentSmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    mobile?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type SentSmsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    mobile: string
    code: string
  }

  export type SentSmsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    mobile?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type SentSmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    mobile?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput | null
    isNot?: MenuWhereInput | null
  }

  export type DynamicTableDefListRelationFilter = {
    every?: DynamicTableDefWhereInput
    some?: DynamicTableDefWhereInput
    none?: DynamicTableDefWhereInput
  }

  export type DynamicTableDefColumnListRelationFilter = {
    every?: DynamicTableDefColumnWhereInput
    some?: DynamicTableDefColumnWhereInput
    none?: DynamicTableDefColumnWhereInput
  }

  export type DynamicTableDataListRelationFilter = {
    every?: DynamicTableDataWhereInput
    some?: DynamicTableDataWhereInput
    none?: DynamicTableDataWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DynamicTableDefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DynamicTableDefColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DynamicTableDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type TaskFormRelationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    taskDefinitionKey?: SortOrder
    formKey?: SortOrder
  }

  export type TaskFormRelationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskFormRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    taskDefinitionKey?: SortOrder
    formKey?: SortOrder
  }

  export type TaskFormRelationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    taskDefinitionKey?: SortOrder
    formKey?: SortOrder
  }

  export type TaskFormRelationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableFilterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    path?: SortOrder
    name?: SortOrder
    filterJSON?: SortOrder
  }

  export type TableFilterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableFilterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    path?: SortOrder
    name?: SortOrder
    filterJSON?: SortOrder
  }

  export type TableFilterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    path?: SortOrder
    name?: SortOrder
    filterJSON?: SortOrder
  }

  export type TableFilterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    hashedRefreshToken?: SortOrder
    unionid?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    image?: SortOrder
    tenantId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    hashedRefreshToken?: SortOrder
    unionid?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    image?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    hashedRefreshToken?: SortOrder
    unionid?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    image?: SortOrder
    tenantId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    tenantId?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    tenantId?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    tenantId?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
  }

  export type AuditsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    auditId?: SortOrder
    auditType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    action?: SortOrder
    auditChanges?: SortOrder
    version?: SortOrder
  }

  export type AuditsAvgOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    version?: SortOrder
  }

  export type AuditsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    auditId?: SortOrder
    auditType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    action?: SortOrder
    auditChanges?: SortOrder
    version?: SortOrder
  }

  export type AuditsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    auditId?: SortOrder
    auditType?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    action?: SortOrder
    auditChanges?: SortOrder
    version?: SortOrder
  }

  export type AuditsSumOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    version?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DynamicTableDefCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    extendedSchema?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type EnumDynamicColumnTypeFilter = {
    equals?: DynamicColumnType
    in?: Enumerable<DynamicColumnType>
    notIn?: Enumerable<DynamicColumnType>
    not?: NestedEnumDynamicColumnTypeFilter | DynamicColumnType
  }

  export type DynamicTableDefRelationFilter = {
    is?: DynamicTableDefWhereInput | null
    isNot?: DynamicTableDefWhereInput | null
  }

  export type DynamicTableDefColumnCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    extendedSchema?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefColumnAvgOrderByAggregateInput = {
    id?: SortOrder
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefColumnMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDefColumnSumOrderByAggregateInput = {
    id?: SortOrder
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }

  export type EnumDynamicColumnTypeWithAggregatesFilter = {
    equals?: DynamicColumnType
    in?: Enumerable<DynamicColumnType>
    notIn?: Enumerable<DynamicColumnType>
    not?: NestedEnumDynamicColumnTypeWithAggregatesFilter | DynamicColumnType
    _count?: NestedIntFilter
    _min?: NestedEnumDynamicColumnTypeFilter
    _max?: NestedEnumDynamicColumnTypeFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DynamicTableDataCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDataAvgOrderByAggregateInput = {
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDataMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDataMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }

  export type DynamicTableDataSumOrderByAggregateInput = {
    dynamicTableDefId?: SortOrder
    tenantId?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    treeData?: SortOrder
    tenantId?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type SentSmsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
  }

  export type SentSmsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SentSmsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
  }

  export type SentSmsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
  }

  export type SentSmsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserCreateWithoutTenantInput>, Enumerable<UserUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTenantInput>
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type MenuCreateNestedOneWithoutTenantInput = {
    create?: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
    connectOrCreate?: MenuCreateOrConnectWithoutTenantInput
    connect?: MenuWhereUniqueInput
  }

  export type DynamicTableDefCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDefCreateWithoutTenantInput>, Enumerable<DynamicTableDefUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDefCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDefWhereUniqueInput>
  }

  export type DynamicTableDefColumnCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutTenantInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDefColumnCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
  }

  export type DynamicTableDataCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutTenantInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDataCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserCreateWithoutTenantInput>, Enumerable<UserUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTenantInput>
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type MenuUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
    connectOrCreate?: MenuCreateOrConnectWithoutTenantInput
    connect?: MenuWhereUniqueInput
  }

  export type DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDefCreateWithoutTenantInput>, Enumerable<DynamicTableDefUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDefCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDefWhereUniqueInput>
  }

  export type DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutTenantInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDefColumnCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
  }

  export type DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutTenantInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutTenantInput>
    createMany?: DynamicTableDataCreateManyTenantInputEnvelope
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutTenantInput>, Enumerable<UserUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: UserCreateManyTenantInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MenuUpdateOneWithoutTenantNestedInput = {
    create?: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
    connectOrCreate?: MenuCreateOrConnectWithoutTenantInput
    upsert?: MenuUpsertWithoutTenantInput
    disconnect?: boolean
    delete?: boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<MenuUpdateWithoutTenantInput, MenuUncheckedUpdateWithoutTenantInput>
  }

  export type DynamicTableDefUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefCreateWithoutTenantInput>, Enumerable<DynamicTableDefUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDefUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDefCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDefWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefWhereUniqueInput>
    update?: Enumerable<DynamicTableDefUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDefUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDefScalarWhereInput>
  }

  export type DynamicTableDefColumnUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutTenantInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDefColumnUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDefColumnCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    update?: Enumerable<DynamicTableDefColumnUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDefColumnUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDefColumnScalarWhereInput>
  }

  export type DynamicTableDataUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutTenantInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDataUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDataCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDataWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDataWhereUniqueInput>
    delete?: Enumerable<DynamicTableDataWhereUniqueInput>
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
    update?: Enumerable<DynamicTableDataUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDataUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDataScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutTenantInput>, Enumerable<UserUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: UserCreateManyTenantInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MenuUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
    connectOrCreate?: MenuCreateOrConnectWithoutTenantInput
    upsert?: MenuUpsertWithoutTenantInput
    disconnect?: boolean
    delete?: boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<MenuUpdateWithoutTenantInput, MenuUncheckedUpdateWithoutTenantInput>
  }

  export type DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefCreateWithoutTenantInput>, Enumerable<DynamicTableDefUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDefUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDefCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDefWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefWhereUniqueInput>
    update?: Enumerable<DynamicTableDefUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDefUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDefScalarWhereInput>
  }

  export type DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutTenantInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDefColumnUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDefColumnCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    update?: Enumerable<DynamicTableDefColumnUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDefColumnUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDefColumnScalarWhereInput>
  }

  export type DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutTenantInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<DynamicTableDataUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: DynamicTableDataCreateManyTenantInputEnvelope
    set?: Enumerable<DynamicTableDataWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDataWhereUniqueInput>
    delete?: Enumerable<DynamicTableDataWhereUniqueInput>
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
    update?: Enumerable<DynamicTableDataUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<DynamicTableDataUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<DynamicTableDataScalarWhereInput>
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type DynamicTableDefColumnCreateNestedManyWithoutDynamicTableDefInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutDynamicTableDefInput>
    createMany?: DynamicTableDefColumnCreateManyDynamicTableDefInputEnvelope
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
  }

  export type DynamicTableDataCreateNestedManyWithoutDynamicTableDefInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutDynamicTableDefInput>
    createMany?: DynamicTableDataCreateManyDynamicTableDefInputEnvelope
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
  }

  export type TenantCreateNestedOneWithoutDynamicTableDefsInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDefsInput, TenantUncheckedCreateWithoutDynamicTableDefsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDefsInput
    connect?: TenantWhereUniqueInput
  }

  export type DynamicTableDefColumnUncheckedCreateNestedManyWithoutDynamicTableDefInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutDynamicTableDefInput>
    createMany?: DynamicTableDefColumnCreateManyDynamicTableDefInputEnvelope
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
  }

  export type DynamicTableDataUncheckedCreateNestedManyWithoutDynamicTableDefInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutDynamicTableDefInput>
    createMany?: DynamicTableDataCreateManyDynamicTableDefInputEnvelope
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
  }

  export type DynamicTableDefColumnUpdateManyWithoutDynamicTableDefNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutDynamicTableDefInput>
    upsert?: Enumerable<DynamicTableDefColumnUpsertWithWhereUniqueWithoutDynamicTableDefInput>
    createMany?: DynamicTableDefColumnCreateManyDynamicTableDefInputEnvelope
    set?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    update?: Enumerable<DynamicTableDefColumnUpdateWithWhereUniqueWithoutDynamicTableDefInput>
    updateMany?: Enumerable<DynamicTableDefColumnUpdateManyWithWhereWithoutDynamicTableDefInput>
    deleteMany?: Enumerable<DynamicTableDefColumnScalarWhereInput>
  }

  export type DynamicTableDataUpdateManyWithoutDynamicTableDefNestedInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutDynamicTableDefInput>
    upsert?: Enumerable<DynamicTableDataUpsertWithWhereUniqueWithoutDynamicTableDefInput>
    createMany?: DynamicTableDataCreateManyDynamicTableDefInputEnvelope
    set?: Enumerable<DynamicTableDataWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDataWhereUniqueInput>
    delete?: Enumerable<DynamicTableDataWhereUniqueInput>
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
    update?: Enumerable<DynamicTableDataUpdateWithWhereUniqueWithoutDynamicTableDefInput>
    updateMany?: Enumerable<DynamicTableDataUpdateManyWithWhereWithoutDynamicTableDefInput>
    deleteMany?: Enumerable<DynamicTableDataScalarWhereInput>
  }

  export type TenantUpdateOneRequiredWithoutDynamicTableDefsNestedInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDefsInput, TenantUncheckedCreateWithoutDynamicTableDefsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDefsInput
    upsert?: TenantUpsertWithoutDynamicTableDefsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutDynamicTableDefsInput, TenantUncheckedUpdateWithoutDynamicTableDefsInput>
  }

  export type DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefNestedInput = {
    create?: XOR<Enumerable<DynamicTableDefColumnCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDefColumnCreateOrConnectWithoutDynamicTableDefInput>
    upsert?: Enumerable<DynamicTableDefColumnUpsertWithWhereUniqueWithoutDynamicTableDefInput>
    createMany?: DynamicTableDefColumnCreateManyDynamicTableDefInputEnvelope
    set?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    delete?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    connect?: Enumerable<DynamicTableDefColumnWhereUniqueInput>
    update?: Enumerable<DynamicTableDefColumnUpdateWithWhereUniqueWithoutDynamicTableDefInput>
    updateMany?: Enumerable<DynamicTableDefColumnUpdateManyWithWhereWithoutDynamicTableDefInput>
    deleteMany?: Enumerable<DynamicTableDefColumnScalarWhereInput>
  }

  export type DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDefNestedInput = {
    create?: XOR<Enumerable<DynamicTableDataCreateWithoutDynamicTableDefInput>, Enumerable<DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>>
    connectOrCreate?: Enumerable<DynamicTableDataCreateOrConnectWithoutDynamicTableDefInput>
    upsert?: Enumerable<DynamicTableDataUpsertWithWhereUniqueWithoutDynamicTableDefInput>
    createMany?: DynamicTableDataCreateManyDynamicTableDefInputEnvelope
    set?: Enumerable<DynamicTableDataWhereUniqueInput>
    disconnect?: Enumerable<DynamicTableDataWhereUniqueInput>
    delete?: Enumerable<DynamicTableDataWhereUniqueInput>
    connect?: Enumerable<DynamicTableDataWhereUniqueInput>
    update?: Enumerable<DynamicTableDataUpdateWithWhereUniqueWithoutDynamicTableDefInput>
    updateMany?: Enumerable<DynamicTableDataUpdateManyWithWhereWithoutDynamicTableDefInput>
    deleteMany?: Enumerable<DynamicTableDataScalarWhereInput>
  }

  export type DynamicTableDefCreateNestedOneWithoutDynamicTableDefColumnsInput = {
    create?: XOR<DynamicTableDefCreateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDefColumnsInput>
    connectOrCreate?: DynamicTableDefCreateOrConnectWithoutDynamicTableDefColumnsInput
    connect?: DynamicTableDefWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutDynamicTableDefColumnsInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDefColumnsInput, TenantUncheckedCreateWithoutDynamicTableDefColumnsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDefColumnsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumDynamicColumnTypeFieldUpdateOperationsInput = {
    set?: DynamicColumnType
  }

  export type DynamicTableDefUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput = {
    create?: XOR<DynamicTableDefCreateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDefColumnsInput>
    connectOrCreate?: DynamicTableDefCreateOrConnectWithoutDynamicTableDefColumnsInput
    upsert?: DynamicTableDefUpsertWithoutDynamicTableDefColumnsInput
    connect?: DynamicTableDefWhereUniqueInput
    update?: XOR<DynamicTableDefUpdateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedUpdateWithoutDynamicTableDefColumnsInput>
  }

  export type TenantUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDefColumnsInput, TenantUncheckedCreateWithoutDynamicTableDefColumnsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDefColumnsInput
    upsert?: TenantUpsertWithoutDynamicTableDefColumnsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutDynamicTableDefColumnsInput, TenantUncheckedUpdateWithoutDynamicTableDefColumnsInput>
  }

  export type DynamicTableDefCreateNestedOneWithoutDynamicTableDataInput = {
    create?: XOR<DynamicTableDefCreateWithoutDynamicTableDataInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDataInput>
    connectOrCreate?: DynamicTableDefCreateOrConnectWithoutDynamicTableDataInput
    connect?: DynamicTableDefWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutDynamicTableDataInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDataInput, TenantUncheckedCreateWithoutDynamicTableDataInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDataInput
    connect?: TenantWhereUniqueInput
  }

  export type DynamicTableDefUpdateOneRequiredWithoutDynamicTableDataNestedInput = {
    create?: XOR<DynamicTableDefCreateWithoutDynamicTableDataInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDataInput>
    connectOrCreate?: DynamicTableDefCreateOrConnectWithoutDynamicTableDataInput
    upsert?: DynamicTableDefUpsertWithoutDynamicTableDataInput
    connect?: DynamicTableDefWhereUniqueInput
    update?: XOR<DynamicTableDefUpdateWithoutDynamicTableDataInput, DynamicTableDefUncheckedUpdateWithoutDynamicTableDataInput>
  }

  export type TenantUpdateOneRequiredWithoutDynamicTableDataNestedInput = {
    create?: XOR<TenantCreateWithoutDynamicTableDataInput, TenantUncheckedCreateWithoutDynamicTableDataInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDynamicTableDataInput
    upsert?: TenantUpsertWithoutDynamicTableDataInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutDynamicTableDataInput, TenantUncheckedUpdateWithoutDynamicTableDataInput>
  }

  export type TenantCreateNestedOneWithoutMenuInput = {
    create?: XOR<TenantCreateWithoutMenuInput, TenantUncheckedCreateWithoutMenuInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMenuInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<TenantCreateWithoutMenuInput, TenantUncheckedCreateWithoutMenuInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMenuInput
    upsert?: TenantUpsertWithoutMenuInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutMenuInput, TenantUncheckedUpdateWithoutMenuInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumDynamicColumnTypeFilter = {
    equals?: DynamicColumnType
    in?: Enumerable<DynamicColumnType>
    notIn?: Enumerable<DynamicColumnType>
    not?: NestedEnumDynamicColumnTypeFilter | DynamicColumnType
  }

  export type NestedEnumDynamicColumnTypeWithAggregatesFilter = {
    equals?: DynamicColumnType
    in?: Enumerable<DynamicColumnType>
    notIn?: Enumerable<DynamicColumnType>
    not?: NestedEnumDynamicColumnTypeWithAggregatesFilter | DynamicColumnType
    _count?: NestedIntFilter
    _min?: NestedEnumDynamicColumnTypeFilter
    _max?: NestedEnumDynamicColumnTypeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserCreateWithoutTenantInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: Enumerable<UserCreateManyTenantInput>
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutTenantInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    treeData: JsonNullValueInput | InputJsonValue
  }

  export type MenuUncheckedCreateWithoutTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    treeData: JsonNullValueInput | InputJsonValue
  }

  export type MenuCreateOrConnectWithoutTenantInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDefCreateWithoutTenantInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutDynamicTableDefInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutDynamicTableDefInput
  }

  export type DynamicTableDefUncheckedCreateWithoutTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutDynamicTableDefInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutDynamicTableDefInput
  }

  export type DynamicTableDefCreateOrConnectWithoutTenantInput = {
    where: DynamicTableDefWhereUniqueInput
    create: XOR<DynamicTableDefCreateWithoutTenantInput, DynamicTableDefUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDefCreateManyTenantInputEnvelope = {
    data: Enumerable<DynamicTableDefCreateManyTenantInput>
    skipDuplicates?: boolean
  }

  export type DynamicTableDefColumnCreateWithoutTenantInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDef: DynamicTableDefCreateNestedOneWithoutDynamicTableDefColumnsInput
  }

  export type DynamicTableDefColumnUncheckedCreateWithoutTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnCreateOrConnectWithoutTenantInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    create: XOR<DynamicTableDefColumnCreateWithoutTenantInput, DynamicTableDefColumnUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDefColumnCreateManyTenantInputEnvelope = {
    data: Enumerable<DynamicTableDefColumnCreateManyTenantInput>
    skipDuplicates?: boolean
  }

  export type DynamicTableDataCreateWithoutTenantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    data: JsonNullValueInput | InputJsonValue
    dynamicTableDef: DynamicTableDefCreateNestedOneWithoutDynamicTableDataInput
  }

  export type DynamicTableDataUncheckedCreateWithoutTenantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDataCreateOrConnectWithoutTenantInput = {
    where: DynamicTableDataWhereUniqueInput
    create: XOR<DynamicTableDataCreateWithoutTenantInput, DynamicTableDataUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDataCreateManyTenantInputEnvelope = {
    data: Enumerable<DynamicTableDataCreateManyTenantInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    username?: StringFilter | string
    hashedPassword?: StringNullableFilter | string | null
    hashedRefreshToken?: StringNullableFilter | string | null
    unionid?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    mobile?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    tenantId?: IntFilter | number
  }

  export type MenuUpsertWithoutTenantInput = {
    update: XOR<MenuUpdateWithoutTenantInput, MenuUncheckedUpdateWithoutTenantInput>
    create: XOR<MenuCreateWithoutTenantInput, MenuUncheckedCreateWithoutTenantInput>
  }

  export type MenuUpdateWithoutTenantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
  }

  export type MenuUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    treeData?: JsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefUpsertWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDefWhereUniqueInput
    update: XOR<DynamicTableDefUpdateWithoutTenantInput, DynamicTableDefUncheckedUpdateWithoutTenantInput>
    create: XOR<DynamicTableDefCreateWithoutTenantInput, DynamicTableDefUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDefUpdateWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDefWhereUniqueInput
    data: XOR<DynamicTableDefUpdateWithoutTenantInput, DynamicTableDefUncheckedUpdateWithoutTenantInput>
  }

  export type DynamicTableDefUpdateManyWithWhereWithoutTenantInput = {
    where: DynamicTableDefScalarWhereInput
    data: XOR<DynamicTableDefUpdateManyMutationInput, DynamicTableDefUncheckedUpdateManyWithoutDynamicTableDefsInput>
  }

  export type DynamicTableDefScalarWhereInput = {
    AND?: Enumerable<DynamicTableDefScalarWhereInput>
    OR?: Enumerable<DynamicTableDefScalarWhereInput>
    NOT?: Enumerable<DynamicTableDefScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    name?: StringFilter | string
    extendedSchema?: JsonNullableFilter
    tenantId?: IntFilter | number
  }

  export type DynamicTableDefColumnUpsertWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    update: XOR<DynamicTableDefColumnUpdateWithoutTenantInput, DynamicTableDefColumnUncheckedUpdateWithoutTenantInput>
    create: XOR<DynamicTableDefColumnCreateWithoutTenantInput, DynamicTableDefColumnUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDefColumnUpdateWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    data: XOR<DynamicTableDefColumnUpdateWithoutTenantInput, DynamicTableDefColumnUncheckedUpdateWithoutTenantInput>
  }

  export type DynamicTableDefColumnUpdateManyWithWhereWithoutTenantInput = {
    where: DynamicTableDefColumnScalarWhereInput
    data: XOR<DynamicTableDefColumnUpdateManyMutationInput, DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefColumnsInput>
  }

  export type DynamicTableDefColumnScalarWhereInput = {
    AND?: Enumerable<DynamicTableDefColumnScalarWhereInput>
    OR?: Enumerable<DynamicTableDefColumnScalarWhereInput>
    NOT?: Enumerable<DynamicTableDefColumnScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    dynamicTableDefId?: IntFilter | number
    name?: StringFilter | string
    type?: EnumDynamicColumnTypeFilter | DynamicColumnType
    extendedSchema?: JsonNullableFilter
    tenantId?: IntFilter | number
  }

  export type DynamicTableDataUpsertWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDataWhereUniqueInput
    update: XOR<DynamicTableDataUpdateWithoutTenantInput, DynamicTableDataUncheckedUpdateWithoutTenantInput>
    create: XOR<DynamicTableDataCreateWithoutTenantInput, DynamicTableDataUncheckedCreateWithoutTenantInput>
  }

  export type DynamicTableDataUpdateWithWhereUniqueWithoutTenantInput = {
    where: DynamicTableDataWhereUniqueInput
    data: XOR<DynamicTableDataUpdateWithoutTenantInput, DynamicTableDataUncheckedUpdateWithoutTenantInput>
  }

  export type DynamicTableDataUpdateManyWithWhereWithoutTenantInput = {
    where: DynamicTableDataScalarWhereInput
    data: XOR<DynamicTableDataUpdateManyMutationInput, DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDataInput>
  }

  export type DynamicTableDataScalarWhereInput = {
    AND?: Enumerable<DynamicTableDataScalarWhereInput>
    OR?: Enumerable<DynamicTableDataScalarWhereInput>
    NOT?: Enumerable<DynamicTableDataScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    dynamicTableDefId?: IntFilter | number
    data?: JsonFilter
    tenantId?: IntFilter | number
  }

  export type UserProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    fullName: string
    tenantId: number
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    fullName: string
    tenantId: number
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type TenantCreateWithoutUsersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    menu?: MenuCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    menu?: MenuUncheckedCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    menu?: MenuUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    menu?: MenuUncheckedUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
    tenantId: number
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDefColumnCreateWithoutDynamicTableDefInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenant?: TenantCreateNestedOneWithoutDynamicTableDefColumnsInput
  }

  export type DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDefColumnCreateOrConnectWithoutDynamicTableDefInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    create: XOR<DynamicTableDefColumnCreateWithoutDynamicTableDefInput, DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDefColumnCreateManyDynamicTableDefInputEnvelope = {
    data: Enumerable<DynamicTableDefColumnCreateManyDynamicTableDefInput>
    skipDuplicates?: boolean
  }

  export type DynamicTableDataCreateWithoutDynamicTableDefInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    data: JsonNullValueInput | InputJsonValue
    tenant?: TenantCreateNestedOneWithoutDynamicTableDataInput
  }

  export type DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    data: JsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDataCreateOrConnectWithoutDynamicTableDefInput = {
    where: DynamicTableDataWhereUniqueInput
    create: XOR<DynamicTableDataCreateWithoutDynamicTableDefInput, DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDataCreateManyDynamicTableDefInputEnvelope = {
    data: Enumerable<DynamicTableDataCreateManyDynamicTableDefInput>
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutDynamicTableDefsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserCreateNestedManyWithoutTenantInput
    menu?: MenuCreateNestedOneWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDynamicTableDefsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    menu?: MenuUncheckedCreateNestedOneWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDynamicTableDefsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDynamicTableDefsInput, TenantUncheckedCreateWithoutDynamicTableDefsInput>
  }

  export type DynamicTableDefColumnUpsertWithWhereUniqueWithoutDynamicTableDefInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    update: XOR<DynamicTableDefColumnUpdateWithoutDynamicTableDefInput, DynamicTableDefColumnUncheckedUpdateWithoutDynamicTableDefInput>
    create: XOR<DynamicTableDefColumnCreateWithoutDynamicTableDefInput, DynamicTableDefColumnUncheckedCreateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDefColumnUpdateWithWhereUniqueWithoutDynamicTableDefInput = {
    where: DynamicTableDefColumnWhereUniqueInput
    data: XOR<DynamicTableDefColumnUpdateWithoutDynamicTableDefInput, DynamicTableDefColumnUncheckedUpdateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDefColumnUpdateManyWithWhereWithoutDynamicTableDefInput = {
    where: DynamicTableDefColumnScalarWhereInput
    data: XOR<DynamicTableDefColumnUpdateManyMutationInput, DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefColumnsInput>
  }

  export type DynamicTableDataUpsertWithWhereUniqueWithoutDynamicTableDefInput = {
    where: DynamicTableDataWhereUniqueInput
    update: XOR<DynamicTableDataUpdateWithoutDynamicTableDefInput, DynamicTableDataUncheckedUpdateWithoutDynamicTableDefInput>
    create: XOR<DynamicTableDataCreateWithoutDynamicTableDefInput, DynamicTableDataUncheckedCreateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDataUpdateWithWhereUniqueWithoutDynamicTableDefInput = {
    where: DynamicTableDataWhereUniqueInput
    data: XOR<DynamicTableDataUpdateWithoutDynamicTableDefInput, DynamicTableDataUncheckedUpdateWithoutDynamicTableDefInput>
  }

  export type DynamicTableDataUpdateManyWithWhereWithoutDynamicTableDefInput = {
    where: DynamicTableDataScalarWhereInput
    data: XOR<DynamicTableDataUpdateManyMutationInput, DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDataInput>
  }

  export type TenantUpsertWithoutDynamicTableDefsInput = {
    update: XOR<TenantUpdateWithoutDynamicTableDefsInput, TenantUncheckedUpdateWithoutDynamicTableDefsInput>
    create: XOR<TenantCreateWithoutDynamicTableDefsInput, TenantUncheckedCreateWithoutDynamicTableDefsInput>
  }

  export type TenantUpdateWithoutDynamicTableDefsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTenantNestedInput
    menu?: MenuUpdateOneWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDynamicTableDefsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    menu?: MenuUncheckedUpdateOneWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type DynamicTableDefCreateWithoutDynamicTableDefColumnsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutDynamicTableDefInput
    tenant?: TenantCreateNestedOneWithoutDynamicTableDefsInput
  }

  export type DynamicTableDefUncheckedCreateWithoutDynamicTableDefColumnsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutDynamicTableDefInput
  }

  export type DynamicTableDefCreateOrConnectWithoutDynamicTableDefColumnsInput = {
    where: DynamicTableDefWhereUniqueInput
    create: XOR<DynamicTableDefCreateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDefColumnsInput>
  }

  export type TenantCreateWithoutDynamicTableDefColumnsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserCreateNestedManyWithoutTenantInput
    menu?: MenuCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDynamicTableDefColumnsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    menu?: MenuUncheckedCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDynamicTableDefColumnsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDynamicTableDefColumnsInput, TenantUncheckedCreateWithoutDynamicTableDefColumnsInput>
  }

  export type DynamicTableDefUpsertWithoutDynamicTableDefColumnsInput = {
    update: XOR<DynamicTableDefUpdateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedUpdateWithoutDynamicTableDefColumnsInput>
    create: XOR<DynamicTableDefCreateWithoutDynamicTableDefColumnsInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDefColumnsInput>
  }

  export type DynamicTableDefUpdateWithoutDynamicTableDefColumnsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableData?: DynamicTableDataUpdateManyWithoutDynamicTableDefNestedInput
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDefsNestedInput
  }

  export type DynamicTableDefUncheckedUpdateWithoutDynamicTableDefColumnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDefNestedInput
  }

  export type TenantUpsertWithoutDynamicTableDefColumnsInput = {
    update: XOR<TenantUpdateWithoutDynamicTableDefColumnsInput, TenantUncheckedUpdateWithoutDynamicTableDefColumnsInput>
    create: XOR<TenantCreateWithoutDynamicTableDefColumnsInput, TenantUncheckedCreateWithoutDynamicTableDefColumnsInput>
  }

  export type TenantUpdateWithoutDynamicTableDefColumnsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTenantNestedInput
    menu?: MenuUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDynamicTableDefColumnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    menu?: MenuUncheckedUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type DynamicTableDefCreateWithoutDynamicTableDataInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutDynamicTableDefInput
    tenant?: TenantCreateNestedOneWithoutDynamicTableDefsInput
  }

  export type DynamicTableDefUncheckedCreateWithoutDynamicTableDataInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutDynamicTableDefInput
  }

  export type DynamicTableDefCreateOrConnectWithoutDynamicTableDataInput = {
    where: DynamicTableDefWhereUniqueInput
    create: XOR<DynamicTableDefCreateWithoutDynamicTableDataInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDataInput>
  }

  export type TenantCreateWithoutDynamicTableDataInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserCreateNestedManyWithoutTenantInput
    menu?: MenuCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDynamicTableDataInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    menu?: MenuUncheckedCreateNestedOneWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDynamicTableDataInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDynamicTableDataInput, TenantUncheckedCreateWithoutDynamicTableDataInput>
  }

  export type DynamicTableDefUpsertWithoutDynamicTableDataInput = {
    update: XOR<DynamicTableDefUpdateWithoutDynamicTableDataInput, DynamicTableDefUncheckedUpdateWithoutDynamicTableDataInput>
    create: XOR<DynamicTableDefCreateWithoutDynamicTableDataInput, DynamicTableDefUncheckedCreateWithoutDynamicTableDataInput>
  }

  export type DynamicTableDefUpdateWithoutDynamicTableDataInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutDynamicTableDefNestedInput
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDefsNestedInput
  }

  export type DynamicTableDefUncheckedUpdateWithoutDynamicTableDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefNestedInput
  }

  export type TenantUpsertWithoutDynamicTableDataInput = {
    update: XOR<TenantUpdateWithoutDynamicTableDataInput, TenantUncheckedUpdateWithoutDynamicTableDataInput>
    create: XOR<TenantCreateWithoutDynamicTableDataInput, TenantUncheckedCreateWithoutDynamicTableDataInput>
  }

  export type TenantUpdateWithoutDynamicTableDataInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTenantNestedInput
    menu?: MenuUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDynamicTableDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    menu?: MenuUncheckedUpdateOneWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutMenuInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserCreateNestedManyWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMenuInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableDefs?: DynamicTableDefUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedCreateNestedManyWithoutTenantInput
    dynamicTableData?: DynamicTableDataUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMenuInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMenuInput, TenantUncheckedCreateWithoutMenuInput>
  }

  export type TenantUpsertWithoutMenuInput = {
    update: XOR<TenantUpdateWithoutMenuInput, TenantUncheckedUpdateWithoutMenuInput>
    create: XOR<TenantCreateWithoutMenuInput, TenantUncheckedCreateWithoutMenuInput>
  }

  export type TenantUpdateWithoutMenuInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableDefs?: DynamicTableDefUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutTenantNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    username: string
    hashedPassword?: string | null
    hashedRefreshToken?: string | null
    unionid?: string | null
    email?: string | null
    mobile?: string | null
    image?: string | null
  }

  export type DynamicTableDefCreateManyTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnCreateManyTenantInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDataCreateManyTenantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    dynamicTableDefId: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type UserUpdateWithoutTenantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    unionid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DynamicTableDefUpdateWithoutTenantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnUpdateManyWithoutDynamicTableDefNestedInput
    dynamicTableData?: DynamicTableDataUpdateManyWithoutDynamicTableDefNestedInput
  }

  export type DynamicTableDefUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDefColumns?: DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefNestedInput
    dynamicTableData?: DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDefNestedInput
  }

  export type DynamicTableDefUncheckedUpdateManyWithoutDynamicTableDefsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnUpdateWithoutTenantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    dynamicTableDef?: DynamicTableDefUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput
  }

  export type DynamicTableDefColumnUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnUncheckedUpdateManyWithoutDynamicTableDefColumnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDataUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    dynamicTableDef?: DynamicTableDefUpdateOneRequiredWithoutDynamicTableDataNestedInput
  }

  export type DynamicTableDataUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDataUncheckedUpdateManyWithoutDynamicTableDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dynamicTableDefId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DynamicTableDefColumnCreateManyDynamicTableDefInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    type?: DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDataCreateManyDynamicTableDefInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    data: JsonNullValueInput | InputJsonValue
    tenantId?: number
  }

  export type DynamicTableDefColumnUpdateWithoutDynamicTableDefInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDefColumnsNestedInput
  }

  export type DynamicTableDefColumnUncheckedUpdateWithoutDynamicTableDefInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDynamicColumnTypeFieldUpdateOperationsInput | DynamicColumnType
    extendedSchema?: NullableJsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicTableDataUpdateWithoutDynamicTableDefInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    tenant?: TenantUpdateOneRequiredWithoutDynamicTableDataNestedInput
  }

  export type DynamicTableDataUncheckedUpdateWithoutDynamicTableDefInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    data?: JsonNullValueInput | InputJsonValue
    tenantId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}