
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StoreService } from './store.service';

@Injectable()
export class OvhService {

  private BASE_URL = '/ovh'

  constructor(private http: Http, private storeService: StoreService) { }

  public getCloudProjects(){
    return this.http
     .get(`${this.BASE_URL}/cloud/projects`).pipe(
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

  public getCloudInstances(){
    return this.http
     .get(`${this.BASE_URL}/cloud/instances`).pipe(
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

  public getStorageContainers(){
    return this.http
     .get(`${this.BASE_URL}/cloud/storage`).pipe(
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

  public getUsers(){
    return this.http
     .get(`${this.BASE_URL}/cloud/users`).pipe(
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

  public getCloudVolumes(){
    return this.http
     .get(`${this.BASE_URL}/cloud/volumes`).pipe(
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

  public getCloudSnapshots(){
    return this.http
     .get(`${this.BASE_URL}/cloud/snapshots`).pipe(
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

  public getCloudAlerts(){
    return this.http
     .get(`${this.BASE_URL}/cloud/alerts`).pipe(
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

  public getCurrentBill(){
    return this.http
     .get(`${this.BASE_URL}/cloud/current`).pipe(
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

  public getCloudImages(){
    return this.http
     .get(`${this.BASE_URL}/cloud/images`).pipe(
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

  public getCloudIps(){
    return this.http
     .get(`${this.BASE_URL}/cloud/ip`).pipe(
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

  public getPublicNetworks(){
    return this.http
     .get(`${this.BASE_URL}/cloud/network/public`).pipe(
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

  public getPrivateNetworks(){
    return this.http
     .get(`${this.BASE_URL}/cloud/network/private`).pipe(
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

  public getFailoverIps(){
    return this.http
     .get(`${this.BASE_URL}/cloud/failover/ip`).pipe(
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

  public getVRacks(){
    return this.http
     .get(`${this.BASE_URL}/cloud/vrack`).pipe(
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

  public getKubeClusters(){
    return this.http
     .get(`${this.BASE_URL}/cloud/kube/clusters`).pipe(
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

  public getKubeNodes(){
    return this.http
     .get(`${this.BASE_URL}/cloud/kube/nodes`).pipe(
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

  public getSSHKeys(){
    return this.http
     .get(`${this.BASE_URL}/cloud/sshkeys`).pipe(
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

  public getLimits(){
    return this.http
     .get(`${this.BASE_URL}/cloud/quotas`).pipe(
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
     .get(`${this.BASE_URL}/cloud/ssl/certificates`).pipe(
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

  public getSSLGateways(){
    return this.http
     .get(`${this.BASE_URL}/cloud/ssl/gateways`).pipe(
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

  public getProfile(){
    return this.http
     .get(`${this.BASE_URL}/cloud/profile`).pipe(
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

  public getTickets(){
    return this.http
     .get(`${this.BASE_URL}/cloud/tickets`).pipe(
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