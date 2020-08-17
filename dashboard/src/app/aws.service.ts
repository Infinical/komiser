
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreService } from './store.service';

@Injectable()
export class AwsService {

  private BASE_URL = '/aws'

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getProfiles() {
    return this.http
      .get(`${this.BASE_URL}/profiles`).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCurrentCost() {
    return this.http
      .get(`${this.BASE_URL}/cost/current`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCostAndUsage() {
    return this.http
      .get(`${this.BASE_URL}/cost/history`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getIAMUsers() {
    return this.http
      .get(`${this.BASE_URL}/iam/users`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getInstancesPerRegion() {
    return this.http
      .get(`${this.BASE_URL}/ec2/regions`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getUsedRegions() {
    return this.http
      .get(`${this.BASE_URL}/resources/regions`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCloudwatchAlarms() {
    return this.http
      .get(`${this.BASE_URL}/cloudwatch/alarms`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getLambdaFunctions() {
    return this.http
      .get(`${this.BASE_URL}/lambda/functions`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getLambdaInvocationMetrics() {
    return this.http
      .get(`${this.BASE_URL}/lambda/invocations`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getAccountName() {
    return this.http
      .get(`${this.BASE_URL}/iam/account`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getNumberOfS3Buckets() {
    return this.http
      .get(`${this.BASE_URL}/s3/buckets`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getBucketObjects() {
    return this.http
      .get(`${this.BASE_URL}/s3/objects`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getBucketSize() {
    return this.http
      .get(`${this.BASE_URL}/s3/size`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getEBS() {
    return this.http
      .get(`${this.BASE_URL}/ebs`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getRDSInstances() {
    return this.http
      .get(`${this.BASE_URL}/rds/instances`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getDynamoDBTables() {
    return this.http
      .get(`${this.BASE_URL}/dynamodb/tables`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getElasticacheClusters() {
    return this.http
      .get(`${this.BASE_URL}/elasticache/clusters`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getVirtualPrivateClouds() {
    return this.http
      .get(`${this.BASE_URL}/vpc`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getAccessControlLists() {
    return this.http
      .get(`${this.BASE_URL}/acl`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getRouteTables() {
    return this.http
      .get(`${this.BASE_URL}/route_tables`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCloudFrontRequests() {
    return this.http
      .get(`${this.BASE_URL}/cloudfront/requests`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCloudFrontDistributions() {
    return this.http
      .get(`${this.BASE_URL}/cloudfront/distributions`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getApiGatewayRequests() {
    return this.http
      .get(`${this.BASE_URL}/apigateway/requests`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getApiGatewayRestAPIs() {
    return this.http
      .get(`${this.BASE_URL}/apigateway/apis`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getELBRequests() {
    return this.http
      .get(`${this.BASE_URL}/elb/requests`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getELBFamily() {
    return this.http
      .get(`${this.BASE_URL}/elb/family`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getKMSKeys() {
    return this.http
      .get(`${this.BASE_URL}/kms`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSecurityGroups() {
    return this.http
      .get(`${this.BASE_URL}/security_groups`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getKeyPairs() {
    return this.http
      .get(`${this.BASE_URL}/key_pairs`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getACMListCertificates() {
    return this.http
      .get(`${this.BASE_URL}/acm/certificates`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getACMExpiredCertificates() {
    return this.http
      .get(`${this.BASE_URL}/acm/expired`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getUnrestrictedSecurityGroups() {
    return this.http
      .get(`${this.BASE_URL}/security_groups/unrestricted`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSQSPublishedMessagesMetrics() {
    return this.http
      .get(`${this.BASE_URL}/sqs/messages`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSQSQueues() {
    return this.http
      .get(`${this.BASE_URL}/sqs/queues`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSNSTopics() {
    return this.http
      .get(`${this.BASE_URL}/sns/topics`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getActiveMQBrokers() {
    return this.http
      .get(`${this.BASE_URL}/mq/brokers`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getKinesisStreams() {
    return this.http
      .get(`${this.BASE_URL}/kinesis/streams`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getKinesisShards() {
    return this.http
      .get(`${this.BASE_URL}/kinesis/shards`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getGlueCrawlers() {
    return this.http
      .get(`${this.BASE_URL}/glue/crawlers`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getGlueJobs() {
    return this.http
      .get(`${this.BASE_URL}/glue/jobs`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getDataPipelines() {
    return this.http
      .get(`${this.BASE_URL}/datapipeline/pipelines`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getESDomains() {
    return this.http
      .get(`${this.BASE_URL}/es/domains`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSWFDomains() {
    return this.http
      .get(`${this.BASE_URL}/swf/domains`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getOpenSupportTickets() {
    return this.http
      .get(`${this.BASE_URL}/support/open`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSupportTicketsHistory() {
    return this.http
      .get(`${this.BASE_URL}/support/history`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getECS() {
    return this.http
      .get(`${this.BASE_URL}/ecs`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getRoute53Records() {
    return this.http
      .get(`${this.BASE_URL}/route53/records`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getRoute53Zones() {
    return this.http
      .get(`${this.BASE_URL}/route53/zones`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getLogsVolume() {
    return this.http
      .get(`${this.BASE_URL}/logs/volume`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getConsoleLoginEvents() {
    return this.http
      .get(`${this.BASE_URL}/cloudtrail/sign_in_event`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getLambdaErrors() {
    return this.http
      .get(`${this.BASE_URL}/lambda/errors`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getReservedInstances() {
    return this.http
      .get(`${this.BASE_URL}/ec2/reserved`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getScheduledInstances() {
    return this.http
      .get(`${this.BASE_URL}/ec2/scheduled`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getSpotInstances() {
    return this.http
      .get(`${this.BASE_URL}/ec2/spot`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getCostPerInstanceType() {
    return this.http
      .get(`${this.BASE_URL}/cost/instance_type`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getEKSClusters() {
    return this.http
      .get(`${this.BASE_URL}/eks/clusters`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getConsoleLoginSourceIps() {
    return this.http
      .get(`${this.BASE_URL}/cloudtrail/source_ip`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getLogsRetentionPeriod() {
    return this.http
      .get(`${this.BASE_URL}/logs/retention`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getNatGatewayTraffic() {
    return this.http
      .get(`${this.BASE_URL}/nat/traffic`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getOrganization() {
    return this.http
      .get(`${this.BASE_URL}/iam/organization`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getServiceLimits() {
    return this.http
      .get(`${this.BASE_URL}/service/limits`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getEmptyBuckets() {
    return this.http
      .get(`${this.BASE_URL}/s3/empty`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getDetachedElasticIps() {
    return this.http
      .get(`${this.BASE_URL}/eip/detached`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getRedshiftClusters() {
    return this.http
      .get(`${this.BASE_URL}/redshift/clusters`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getVPCSubnets() {
    return this.http
      .get(`${this.BASE_URL}/vpc/subnets`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  public getForecastPrice() {
    return this.http
      .get(`${this.BASE_URL}/cost/forecast`, { headers: this.getHeaders() }).pipe(
        map(res => {
          return res
        }),
        catchError(err => {
          let payload = JSON.parse(err._body)
          if (payload && payload.error)
            this.storeService.add(payload.error);
          return observableThrowError(err.error)
        }))
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    headers.append('profile', localStorage.getItem('profile'));
    return headers;
  }
}
