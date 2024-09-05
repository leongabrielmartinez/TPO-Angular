import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ContactFormComponent],
  template: `
    <div class="grid-container">
      <header>
        <h1>Ecommerce TechLink</h1>
      </header>
      <main>
        <router-outlet />
      </main>
      <aside>
        <app-contact-form/>
      </aside>
    </div>

    

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TPO-Angular';
}
