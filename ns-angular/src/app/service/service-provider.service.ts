import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  private baseUrl = 'http://localhost:8080/api/service-providers'; // Update this URL to match your backend endpoint

  constructor(private http: HttpClient) {}

  /**
   * Add a new service provider
   * @param serviceProvider The service provider object to be added
   * @returns Observable<any>
   */
  addServiceProvider(serviceProvider: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, serviceProvider);
  }

  /**
   * Edit an existing service provider
   * @param serviceProviderId The ID of the service provider to be edited
   * @param serviceProvider The updated service provider object
   * @returns Observable<any>
   */
  editServiceProvider(serviceProviderId: number, serviceProvider: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${serviceProviderId}`, serviceProvider);
  }

  /**
   * Delete a service provider
   * @param serviceProviderId The ID of the service provider to be deleted
   * @returns Observable<any>
   */
  deleteServiceProvider(serviceProviderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${serviceProviderId}`);
  }
}
