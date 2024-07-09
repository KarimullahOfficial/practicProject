import { Construct } from "constructs";
import * as cognito from '@aws-cdk/aws-cognito'
 
import { IEnvironmentConfig, enviroment } from "../env";

type UserPoolIdentityConstructorProps = {
    userPool: cognito.UserPool,
    clinetPool: cognito.UserPoolClient
    bucketArn: any
}

export class UserPoolIdentityConstructor extends Construct {
    public readonly identityPool: cognito.CfnIdentityPool

    constructor(scope: Construct, id: string, props: UserPoolIdentityConstructorProps) {
        super(scope, id)
        const env : IEnvironmentConfig = scope.node.tryGetContext(enviroment)
        const {stage,APP_NAME} =env
    }

}