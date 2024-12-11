import { Component } from '@angular/core';

@Component({
  selector: 'app-service-provider-form',
  templateUrl: './service-provider-form.component.html',
  styleUrls: ['./service-provider-form.component.css']
})
export class ServiceProviderFormComponent {
  serviceProvider = {
    fullName: '',
    email: '',
    phoneNumber: '',
    weeklySalary: 0,
    availableFrom: '',
    availableTo: ''
  };

  serviceProviders: any[] = [];

  onSubmit(form: any) {
    if (this.serviceProvider['id']) {
      // Update logic here
      console.log('Updating service provider:', this.serviceProvider);
    } else {
      // Add logic here
      console.log('Adding service provider:', this.serviceProvider);
      this.serviceProviders.push({ ...this.serviceProvider });
    }
    form.reset();
  }

  onEdit(provider: any) {
    this.serviceProvider = { ...provider };
  }

  onDelete() {
    this.serviceProviders = this.serviceProviders.filter(
      (p) => p.email !== this.serviceProvider.email
    );
    this.serviceProvider = {
      fullName: '',
      email: '',
      phoneNumber: '',
      weeklySalary: 0,
      availableFrom: '',
      availableTo: ''
    };
  }
}
