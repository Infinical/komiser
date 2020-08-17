
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StoreService } from './store.service';

@Injectable()
export class DigitaloceanService {
  private BASE_URL = '/digitalocean'

  constructor(private http: Http, private storeService: StoreService) { }

  public getProfile(){
    return this.http
     .get(`${this.BASE_URL}/account`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getActionsHistory(){
    return this.http
     .get(`${this.BASE_URL}/actions`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getContentDeliveryNetworks(){
    return this.http
     .get(`${this.BASE_URL}/cdns`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getCertificates(){
    return this.http
     .get(`${this.BASE_URL}/certificates`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getDomains(){
    return this.http
     .get(`${this.BASE_URL}/domains`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getDroplets(){
    return this.http
     .get(`${this.BASE_URL}/droplets`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getListOfFirewalls(){
    return this.http
     .get(`${this.BASE_URL}/firewalls/list`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getUnsecureFirewalls(){
    return this.http
     .get(`${this.BASE_URL}/firewalls/unsecure`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getFloatingIps(){
    return this.http
     .get(`${this.BASE_URL}/floatingips`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getKubernetesClusters(){
    return this.http
     .get(`${this.BASE_URL}/k8s`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getSshKeys(){
    return this.http
     .get(`${this.BASE_URL}/keys`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getLoadBalancers(){
    return this.http
     .get(`${this.BASE_URL}/loadbalancers`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getProjects(){
    return this.http
     .get(`${this.BASE_URL}/projects`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getRecords(){
    return this.http
     .get(`${this.BASE_URL}/records`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getSnapshots(){
    return this.http
     .get(`${this.BASE_URL}/snapshots`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getVolumes(){
    return this.http
     .get(`${this.BASE_URL}/volumes`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }

  public getDatabases(){
    return this.http
     .get(`${this.BASE_URL}/databases`).pipe(
     map(res => {
       return res.json()
     }))
     .catch(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err.json().error)
     })
  }


}
