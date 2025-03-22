import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
