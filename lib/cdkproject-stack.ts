import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkprojectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The  code thst defines your stack goes here
    const Vpc = new  ec2.Vpc(this, 'CDKVPC', {
      cidr: "10.0.0.0/16",
      maxAzs: 2,
      natGateways:0,
    });
  }
}
