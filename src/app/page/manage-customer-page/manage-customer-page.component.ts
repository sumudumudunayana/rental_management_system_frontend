import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customer-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './manage-customer-page.component.html',
  styleUrl: './manage-customer-page.component.css'
})
export class ManageCustomerPageComponent {

  public searchQuery: string = '';

  public customerList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all").subscribe(data =>{
      console.log(data);
      this.customerList = data;
    })
  }

  deleteBook(customerId: number) {
    this.http.delete(`http://localhost:8080/customer/delete-by-id/${customerId}`).subscribe(data => {
      this.deleteSuccessAlert();
      this.loadTable();
    })
  }

  public customerTemp:any = {}
  updateBook(customer:any) {
    console.log(customer);
    this.customerTemp = customer;
  }

  saveBook(){
    this.http.put("http://localhost:8080/customer/update-customer",this.customerTemp).subscribe(data => {
      this.updateSuccessAlert();
      this.loadTable();
    })
  }

  searchBook(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const customerId = parseInt(searchQuery);

    if (isNaN(customerId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/customer/search-by-id/${customerId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.customerList = [response];
          } else {
            this.customerList = [];
            this.noBookErrorAlert();
          }
        }, 
      });
  }

  public deleteSuccessAlert(){
    Swal.fire({
      title: "Customer Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "Customer Updated Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public errorAlert(){
    Swal.fire({
      title: "Please enter a valid numeric ID",
      icon: "error",
      background:"#fff",
    });
  }

  public noBookErrorAlert(){
    Swal.fire({
      title: "No Customer found with this ID",
      icon: "question",
      background:"#fff",
    });
  }

}
