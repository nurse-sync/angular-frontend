import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProvider } from '../models/service-provider.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceProviderService {
  private baseUrl = 'http://localhost:8080/api/service-providers';

  constructor(private http: HttpClient) {}

  /**
   * Get all service providers
   */
  getAllServiceProviders(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(`${this.baseUrl}`);
  }

  /**
   * Add a new service provider
   * @param serviceProvider - the service provider object to add
   */
  addServiceProvider(serviceProvider: ServiceProvider): Observable<ServiceProvider> {
    return this.http.post<ServiceProvider>(`${this.baseUrl}`, serviceProvider);
  }

  /**
   * Edit an existing service provider
   * @param id - the ID of the service provider to edit
   * @param serviceProvider - the updated service provider object
   */
  editServiceProvider(id: number, serviceProvider: ServiceProvider): Observable<ServiceProvider> {
    return this.http.put<ServiceProvider>(`${this.baseUrl}/${id}`, serviceProvider);
  }

  /**
   * Delete a service provider
   * @param id - the ID of the service provider to delete
   */
  deleteServiceProvider(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Change the status of a service provider
   * @param id - the ID of the service provider
   * @param statusId - the new status ID
   */
  changeStatus(id: number, statusId: number): Observable<ServiceProvider> {
    return this.http.patch<ServiceProvider>(`${this.baseUrl}/${id}/status`, { statusId });
  }
}
