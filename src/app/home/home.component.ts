import { Component, OnInit, ViewChild  } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  @ViewChild('ask-help') public publicacoes: any

  ngOnInit() {
  }

  logout(): void {
    this.auth.logout();
  }

}
