import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProviderService } from '../services/service-provider.service';
import { ServiceProvider } from '../models/service-provider.model';

@Component({
  selector: 'app-service-provider-form',
  templateUrl: './service-provider-form.component.html',
  styleUrls: ['./service-provider-form.component.css']
})
export class ServiceProviderFormComponent implements OnInit {
  serviceProviderForm!: FormGroup;
  isNurseDualRole: boolean = false;
  isApplicableForQualification: boolean = false;

  constructor(
    private fb: FormBuilder,
    private serviceProviderService: ServiceProviderService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    // Watch category changes to toggle fields
    this.serviceProviderForm.get('category')?.valueChanges.subscribe((value) => {
      this.isNurseDualRole = value === 'Nurse' || value === 'Dual Role Nurse Cum Caretaker';
      this.isApplicableForQualification = value !== 'Caretaker';

      if (!this.isNurseDualRole) {
        this.serviceProviderForm.patchValue({ nurseLicenseUrl: '' });
      }

      if (!this.isApplicableForQualification) {
        this.serviceProviderForm.patchValue({ experienceYears: '', roleName: '' });
      }
    });
  }

  initializeForm(): void {
    this.serviceProviderForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      category: ['', Validators.required],
      weeklySalary: ['', [Validators.required, Validators.min(0)]],
      availableFrom: ['', Validators.required],
      availableTo: ['', Validators.required],
      address: this.fb.group({
        flatNumber: ['', Validators.required],
        houseNumber: ['', Validators.required],
        streetName: ['', Validators.required],
        locality: ['', Validators.required],
        district: ['', Validators.required],
        pincode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      liveIn: [false, Validators.required],
      idProofUrl: ['', Validators.required],
      nurseLicenseUrl: [''],
      experienceYears: [''],
      roleName: [''],
    });
  }

  onSubmit(): void {
    if (this.serviceProviderForm.valid) {
      const formValue = { ...this.serviceProviderForm.value, adminId: 1, statusId: 21 };
      this.serviceProviderService.addServiceProvider(formValue).subscribe(
        (response) => {
          alert('Service provider added successfully!');
          this.serviceProviderForm.reset();
        },
        (error) => {
          console.error('Error adding service provider:', error);
          alert('Failed to add service provider. Please try again.');
        }
      );
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}








// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ServiceProvider } from '../models/service-provider.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class ServiceProviderService {
//   private baseUrl = 'http://localhost:8080/api/service-providers';

//   constructor(private http: HttpClient) {}

//   /**
//    * Get all service providers
//    */
//   getAllServiceProviders(): Observable<ServiceProvider[]> {
//     return this.http.get<ServiceProvider[]>(`${this.baseUrl}`);
//   }

//   /**
//    * Add a new service provider
//    * @param serviceProvider - the service provider object to add
//    */
//   addServiceProvider(serviceProvider: ServiceProvider): Observable<ServiceProvider> {
//     return this.http.post<ServiceProvider>(`${this.baseUrl}`, serviceProvider);
//   }

//   /**
//    * Edit an existing service provider
//    * @param id - the ID of the service provider to edit
//    * @param serviceProvider - the updated service provider object
//    */
//   editServiceProvider(id: number, serviceProvider: ServiceProvider): Observable<ServiceProvider> {
//     return this.http.put<ServiceProvider>(`${this.baseUrl}/${id}`, serviceProvider);
//   }

//   /**
//    * Delete a service provider
//    * @param id - the ID of the service provider to delete
//    */
//   deleteServiceProvider(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${id}`);
//   }

//   /**
//    * Change the status of a service provider
//    * @param id - the ID of the service provider
//    * @param statusId - the new status ID
//    */
//   changeStatus(id: number, statusId: number): Observable<ServiceProvider> {
//     return this.http.patch<ServiceProvider>(`${this.baseUrl}/${id}/status`, { statusId });
//   }
// }
