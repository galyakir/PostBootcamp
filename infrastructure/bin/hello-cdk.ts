#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {eksStack} from '../lib/eks-cluster';
import {ecrStack} from '../lib/ecr-stack';

const app = new cdk.App();
new eksStack(app, 'ssEks');
new eksStack(app, 'devEks');
new eksStack(app, 'prodEks');
new ecrStack(app, 'ecr');

