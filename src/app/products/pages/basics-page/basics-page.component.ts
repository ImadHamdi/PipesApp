import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'imad';
  public nameUpper: string = 'IMAD';
  public fullName: string = 'iMaD hAmDi';

  public customDate: Date = new Date();
}
