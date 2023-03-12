import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  productName: string;
  productDescription: string;
  productPrice: string;
  paymentLink: string = 'https://buy.stripe.com/test_fZe8wy0wz3CTbn28ww';

  constructor(
    public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productName = data.productName;
    this.productDescription = data.productDescription;
    this.productPrice = data.productPrice;
    this.paymentLink = data.paymentLink;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
