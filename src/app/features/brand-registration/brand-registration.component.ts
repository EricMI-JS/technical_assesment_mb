import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-registration',
  templateUrl: './brand-registration.component.html',
  styleUrls: ['./brand-registration.component.scss']
})
export class BrandRegistrationComponent implements OnInit {
  brandForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
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
  
  onSubmit(): void {
    if (this.brandForm.valid) {
      console.log('Formulario enviado:', this.brandForm.value);
      // Aquí iría la lógica para registrar la marca
      this.router.navigate(['/registro-marca/exito']);
    } else {
      this.markFormGroupTouched(this.brandForm);
    }
  }
  
  onFileSelected(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      // En un caso real, aquí subiríamos el archivo al servidor
      // y guardaríamos la referencia en el formulario
      const control = controlName === 'csf' ? 
        this.brandForm.get('companyInfo.csf') : 
        this.brandForm.get('companyInfo.officialId');
      
      if (control) {
        control.setValue(file.name);
      }
    }
  }
  
  // Método para marcar todos los campos como 'touched' para mostrar validaciones
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
} 