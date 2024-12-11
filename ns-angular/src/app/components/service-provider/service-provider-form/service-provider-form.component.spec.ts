import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderFormComponent } from './service-provider-form.component';

describe('ServiceProviderFormComponent', () => {
  let component: ServiceProviderFormComponent;
  let fixture: ComponentFixture<ServiceProviderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProviderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProviderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
