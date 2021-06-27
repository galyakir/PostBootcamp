import * as cdk from '@aws-cdk/core';
import * as eks from '@aws-cdk/aws-eks';
import  * as ec2  from '@aws-cdk/aws-ec2';


export class eksStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const cluster = new eks.Cluster(this, id, {
            version: eks.KubernetesVersion.V1_20,
            defaultCapacity: 0
        });
        cluster.addNodegroupCapacity(id, {
            instanceTypes: [new ec2.InstanceType('t2.micro')],
            minSize: 4,
            diskSize: 50,
        });
        cluster.addHelmChart('nginx-ingress', {
            chart: 'nginx-ingress-controller',
            repository: 'https://charts.bitnami.com/bitnami',
        });
    }
}
