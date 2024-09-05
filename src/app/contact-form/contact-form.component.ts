import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
      <form class="contact-form"
      [formGroup]="contactForm"
      (submit)="handleSubmit()">

        <fieldset>
            <legend>Formulario de Contacto</legend>

            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" 
            formControlName="name" required>

            
            <div
            class="alert alert-danger"
            [hidden]="name.valid || name.untouched">
            Name is required
            </div>


            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" 
            formControlName="email" required>

            <div
            class="alert alert-danger"
            [hidden]="email.valid || email.untouched">
            Email is required
            </div>

            <label for="phone">Número de Teléfono:</label>
            <input type="tel" id="phone" name="phone" 
            formControlName="phone" required>

            <div
            class="alert alert-danger"
            [hidden]="phone.valid || phone.untouched">
            Number is required
            </div>

            <button type="submit">Enviar</button>
        </fieldset>
      </form>
  `,
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm= new FormGroup({
    name: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
    
  get name() {
      return this.contactForm.get('name') as FormControl;
    }
  get email() {
      return this.contactForm.get('email') as FormControl;
    }
  get phone() {
      return this.contactForm.get('phone') as FormControl;
    }
  
    handleSubmit() {
      if (this.contactForm.invalid) return;
      const newcontact = {
        name: this.name.value,
        phone: this.phone.value,
        email: this.email.value,
      };
      
      alert('Los datos enviados fueron:')
      alert(JSON.stringify(newcontact))
  
}}
