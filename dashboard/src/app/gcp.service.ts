
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StoreService } from './store.service';

@Injectable()
export class GcpService {

  private BASE_URL = '/gcp'

  constructor(private http: Http, private storeService: StoreService) { }

  public getProjects(){
    return this.http
     .get(`${this.BASE_URL}/resourcemanager/projects`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getComputeInstances(){
    return this.http
     .get(`${this.BASE_URL}/compute/instances`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getIamRoles(){
    return this.http
     .get(`${this.BASE_URL}/iam/roles`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getStorageBuckets(){
    return this.http
     .get(`${this.BASE_URL}/storage/buckets`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getComputeDisks(){
    return this.http
     .get(`${this.BASE_URL}/compute/disks`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDNSZones(){
    return this.http
     .get(`${this.BASE_URL}/dns/zones`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getPubSubTopics(){
    return this.http
     .get(`${this.BASE_URL}/pubsub/topics`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getCloudFunctions(){
    return this.http
     .get(`${this.BASE_URL}/cloudfunctions/functions`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getSqlInstances(){
    return this.http
     .get(`${this.BASE_URL}/sql/instances`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVpcNetworks(){
    return this.http
     .get(`${this.BASE_URL}/vpc/networks`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVpcFirewalls(){
    return this.http
     .get(`${this.BASE_URL}/vpc/firewalls`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVpcRouters(){
    return this.http
     .get(`${this.BASE_URL}/vpc/routers`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDiskSnapshots(){
    return this.http
     .get(`${this.BASE_URL}/compute/snapshots`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBucketsSize(){
    return this.http
     .get(`${this.BASE_URL}/storage/size`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBucketsObjects(){
    return this.http
     .get(`${this.BASE_URL}/storage/objects`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getIngestedLoggingBytes(){
    return this.http
     .get(`${this.BASE_URL}/logging/bytes_ingested`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getKubernetesClusters(){
    return this.http
     .get(`${this.BASE_URL}/kubernetes/clusters`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getComputeImages(){
    return this.http
     .get(`${this.BASE_URL}/compute/images`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getRedisInstances(){
    return this.http
     .get(`${this.BASE_URL}/redis/instances`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getComputeCPUUtilization(){
    return this.http
     .get(`${this.BASE_URL}/compute/cpu`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getIAMUsers(){
    return this.http
     .get(`${this.BASE_URL}/iam/users`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBigQueryStatements(){
    return this.http
     .get(`${this.BASE_URL}/bigquery/statements`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBigQueryStorage(){
    return this.http
     .get(`${this.BASE_URL}/bigquery/storage`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBigQueryTables(){
    return this.http
     .get(`${this.BASE_URL}/bigquery/tables`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBigQueryDatasets(){
    return this.http
     .get(`${this.BASE_URL}/bigquery/datasets`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getQuotas(){
    return this.http
     .get(`${this.BASE_URL}/compute/quotas`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getLBRequests(){
    return this.http
     .get(`${this.BASE_URL}/lb/requests`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getAPIRequests(){
    return this.http
     .get(`${this.BASE_URL}/api/requests`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getTotalLoadBalancers(){
    return this.http
     .get(`${this.BASE_URL}/lb/total`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVPCSubnets(){
    return this.http
     .get(`${this.BASE_URL}/vpc/subnets`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVPCAddresses(){
    return this.http
     .get(`${this.BASE_URL}/vpc/addresses`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getVPNTunnels(){
    return this.http
     .get(`${this.BASE_URL}/vpn/tunnels`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getSSLPolicies(){
    return this.http
     .get(`${this.BASE_URL}/ssl/policies`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getSSLCertificates(){
    return this.http
     .get(`${this.BASE_URL}/ssl/certificates`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getSecurityPolicies(){
    return this.http
     .get(`${this.BASE_URL}/security/policies`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getKMSCryptoKeys(){
    return this.http
     .get(`${this.BASE_URL}/kms/cryptokeys`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getAppEngineBandwidth(){
    return this.http
     .get(`${this.BASE_URL}/gae/bandwidth`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getEnabledAPIs(){
    return this.http
     .get(`${this.BASE_URL}/serviceusage/apis`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDataprocJobs(){
    return this.http
     .get(`${this.BASE_URL}/dataproc/jobs`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDataprocClusters(){
    return this.http
     .get(`${this.BASE_URL}/dataproc/clusters`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBillingLastSixMonths(){
    return this.http
     .get(`${this.BASE_URL}/billing/history`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getBillingPerService(){
    return this.http
     .get(`${this.BASE_URL}/billing/service`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDnsARecords(){
    return this.http
     .get(`${this.BASE_URL}/dns/records`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getServiceAccounts(){
    return this.http
     .get(`${this.BASE_URL}/iam/service_accounts`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getDataflowJobs(){
    return this.http
     .get(`${this.BASE_URL}/dataflow/jobs`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }

  public getNatGateways(){
    return this.http
     .get(`${this.BASE_URL}/nat/gateways`).pipe(
     map(res => {
       return res.json()
     }),
     catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     }),)
  }
}