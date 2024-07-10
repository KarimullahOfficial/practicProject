import { Construct } from "constructs";
import { IEnvironmentConfig, enviroment } from "../env";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { resolve } from "path";

export class NewToProgress extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        const env: IEnvironmentConfig = scope.node.tryGetContext(enviroment)
        const { stage, APP_NAME, MongoUri, DataBaseName } = env

        const cronJob = new lambda.Function(this, `${APP_NAME}-${stage}-cron-job-lambda`, {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'main-handler',
            code: lambda.Code.fromAsset(resolve(__dirname, '///')),
            environment: {
                NODE_PATH: '$NODE_PATH:/opt',
                MongoUri,
                DataBaseName
            }

        })
        const rule = new events.Rule(this, '', {
            schedule: events.Schedule.cron({ minute: '' })
        })
        rule.addTarget(new targets.LambdaFunction(cronJob))
    }
}