import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-customer-page.component.html',
  styleUrl: './add-customer-page.component.css'
})
export class AddCustomerPageComponent {

  public customer:any={
    customerName:'',
    city:'',
    contact:'',
  };

  constructor(private http:HttpClient){}


  public onSubmit() {
    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
      this.successAlert();
      this.resetForm();
    });

  }

  resetForm() {
    this.customer = {
      customerName:'',
      city:'',
      contact:'',
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Customer Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
