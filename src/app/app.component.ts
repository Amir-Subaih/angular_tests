import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Import the standalone component
import { FooterComponent } from './footer/footer.component'; // Import the standalone component
import { EmployeeComponent } from './employee/employee.component'; // Import the standalone component
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,EmployeeComponent,FormsModule],//RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test';
}
