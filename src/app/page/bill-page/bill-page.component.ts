import { Component } from '@angular/core';

import { Input } from '@angular/core';

import Swal from'sweetalert2';

@Component({
  selector: 'app-bill-page',
  standalone: true,
  imports: [],
  templateUrl: './bill-page.component.html',
  styleUrl: './bill-page.component.css'
})
export class BillPageComponent {

  public rental: any = {
    rentalDate: '',
    returnDate: '',
    dueDate: '',
    totalCost: '',
    customerName: '',
    itemId: '',
    itemName: '',
  };

  @Input() customerName!: string;
  @Input() itemName!: string;
  @Input() totalCost!: number;

  printBill() {
    const billElement = document.querySelector('#bill') || document.querySelector('app-bill-page');
    if (billElement) {
      const printContents = billElement.innerHTML;
      const originalContents = document.body.innerHTML;
  
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    } else {
      console.error('Bill element not found for printing.');
    }
  }

  showBill = false;

  generateBill() {
    console.log('Rental Object:', this.rental); // Debug log
  
    if (!this.rental.customerName || !this.rental.itemName || !this.rental.totalCost) {
      Swal.fire({
        title: "Missing Information",
        text: "Please provide all details before generating the bill.",
        icon: "error",
      });
      return;
    }
  
    this.showBill = true; // Display the bill component
  }

}
