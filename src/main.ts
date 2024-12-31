import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importa aquí

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Configura HttpClient
  ],
}).catch((err) => console.error(err));
