export interface IEnvironmentConfig {
 readonly  APP_NAME : '',
 readonly stage : ''

}
export const enviroment: string = process.env.stage || 'test'