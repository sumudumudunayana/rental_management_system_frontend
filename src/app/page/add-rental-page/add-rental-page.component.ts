import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rental-page',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-rental-page.component.html',
  styleUrl: './add-rental-page.component.css',
})
export class AddRentalPageComponent {
  public rental: any = {
    rentalDate: '',
    returnDate: '',
    dueDate: '',
    totalCost: '',
    customerName: '',
    itemId: '',
    itemName: '',
  };

  public customers: any[] = [];
  public items: any[] = [];

  constructor(private http: HttpClient) {}

  public onSubmit() {
    this.http
      .post('http://localhost:8080/rental/add-rental', this.rental)
      .subscribe((data) => {
        this.successAlert();
        this.resetForm();
      });
  }

  resetForm() {
    this.rental = {
      rentalDate: '',
      returnDate: '',
      dueDate: '',
      totalCost: '',
      customerName: '',
      itemId: '',
      itemName: '',
    };
  }

  public successAlert() {
    Swal.fire({
      title: 'The Rental Added Successfully?',
      icon: 'success',
      background: '#fff',
    });
  }

  ngOnInit() {
    this.fetchCustomers();
    this.fetchItems();
  }

  fetchCustomers() {
    this.http.get<any[]>('http://localhost:8080/customer/get-all').subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  fetchItems() {
    this.http
      .get<any[]>('http://localhost:8080/hardwareItem/get-all')
      .subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.error('Error fetching items:', error);
        }
      );
  }
}
