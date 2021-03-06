import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
      private router: Router,
      private auth: LoginService,
    ) {}

    ngOnInit() {
        
    }

    goToRegister() {
      this.router.navigate(['register'])
    }

    goToReport() {
      this.router.navigate(['report'])
    }
}
