import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  link = '';
  constructor(private _router: Router){ }

  verProd(nom: any) {
    this._router.navigate(['/productos', nom ]);
    }

}
