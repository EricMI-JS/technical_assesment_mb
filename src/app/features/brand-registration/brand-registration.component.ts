import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from './brand.service';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-brand-registration',
  templateUrl: './brand-registration.component.html',
  styleUrls: ['./brand-registration.component.scss'],
  providers: [MessageService]
})
export class BrandRegistrationComponent implements OnInit {
  brandForm: FormGroup;
  csfFileName: string = '';
  officialIdFileName: string = '';
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private brandService: BrandService,
    private messageService: MessageService
  ) {
    this.brandForm = this.fb.group({
      companyInfo: this.fb.group({
        commercialName: ['', Validators.required],
        phone: ['', Validators.required],
        csf: [null, Validators.required],
        officialId: [null, Validators.required]
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        extNumber: ['', Validators.required],
        intNumber: [''],
        colony: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      consent: this.fb.group({
        termsAndConditions: [false, Validators.requiredTrue],
        marketingEmails: [false]
      })
    });
  }

  ngOnInit(): void {
  }
  
  async onSubmit(): Promise<void> {
    if (this.brandForm.valid) {
      const formData = this.brandForm.value;
      const brandData = {
        calle: formData.address.street,
        numero_exterior: formData.address.extNumber,
        numero_interior: formData.address.intNumber,
        colonia: formData.address.colony,
        cp: formData.address.postalCode,
        telefono_empresa: formData.companyInfo.phone,
        nombre_comercial: formData.companyInfo.commercialName,
        csf: formData.companyInfo.csf,
        identificacion_oficial: formData.companyInfo.officialId
      };

      try {
        const response = await lastValueFrom(this.brandService.createBrand(brandData));
        console.log('response', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Marca creada exitosamente'
        });
        this.router.navigate(['/']);
      } catch (error: any) {
        console.log('error', error);
        if (error.status === 401) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error de autenticación',
            detail: 'Token inválido. Por favor, inicie sesión nuevamente.'
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ocurrió un error al crear la marca'
          });
        }
      }
    } else {
      this.markFormGroupTouched(this.brandForm);
    }
  }
  
  onFileSelected(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      const control = controlName === 'csf' ? 
        this.brandForm.get('companyInfo.csf') : 
        this.brandForm.get('companyInfo.officialId');
      
      if (control) {
        control.setValue(file.name);
        if (controlName === 'csf') {
          this.csfFileName = file.name;
        } else {
          this.officialIdFileName = file.name;
        }
      }
    }
  }
  
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
} 