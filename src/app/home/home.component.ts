import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // this.openCheckoutDialog();
  }

  openCheckoutDialog(): void {
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '500px',
      height: '500px',
      data: { name: 'John', animal: 'Dog' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
