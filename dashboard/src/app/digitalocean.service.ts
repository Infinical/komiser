
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DigitaloceanService {
  private BASE_URL = '/digitalocean'

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getProfile(){
    return this.http
     .get(`${this.BASE_URL}/account`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getActionsHistory(){
    return this.http
     .get(`${this.BASE_URL}/actions`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getContentDeliveryNetworks(){
    return this.http
     .get(`${this.BASE_URL}/cdns`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getCertificates(){
    return this.http
     .get(`${this.BASE_URL}/certificates`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getDomains(){
    return this.http
     .get(`${this.BASE_URL}/domains`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getDroplets(){
    return this.http
     .get(`${this.BASE_URL}/droplets`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getListOfFirewalls(){
    return this.http
     .get(`${this.BASE_URL}/firewalls/list`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getUnsecureFirewalls(){
    return this.http
     .get(`${this.BASE_URL}/firewalls/unsecure`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getFloatingIps(){
    return this.http
     .get(`${this.BASE_URL}/floatingips`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getKubernetesClusters(){
    return this.http
     .get(`${this.BASE_URL}/k8s`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getSshKeys(){
    return this.http
     .get(`${this.BASE_URL}/keys`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getLoadBalancers(){
    return this.http
     .get(`${this.BASE_URL}/loadbalancers`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getProjects(){
    return this.http
     .get(`${this.BASE_URL}/projects`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getRecords(){
    return this.http
     .get(`${this.BASE_URL}/records`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getSnapshots(){
    return this.http
     .get(`${this.BASE_URL}/snapshots`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getVolumes(){
    return this.http
     .get(`${this.BASE_URL}/volumes`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }

  public getDatabases(){
    return this.http
     .get(`${this.BASE_URL}/databases`).pipe(
     map(res => {
       return res  
     }))
     ,catchError(err => {
      let payload = JSON.parse(err._body)
      if (payload && payload.error)
        this.storeService.add(payload.error);
       return observableThrowError(err  .error)
     })
  }


}
