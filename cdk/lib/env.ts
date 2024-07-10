export interface IEnvironmentConfig {
    readonly APP_NAME: '',
    readonly stage: '',
    readonly MongoUri: '',
    readonly DataBaseName: ''
}
export const enviroment: string = process.env.stage || 'test'