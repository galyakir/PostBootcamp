import * as cdk from '@aws-cdk/core';
import * as ecr from '@aws-cdk/aws-ecr';


export class ecrStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new ecr.Repository(this, 'Repository_Registry');
    }
}


