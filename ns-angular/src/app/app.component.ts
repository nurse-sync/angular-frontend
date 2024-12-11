import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceProviderFormComponent } from './components/service-provider/service-provider-form/service-provider-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceProviderFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ns-angular';
}
