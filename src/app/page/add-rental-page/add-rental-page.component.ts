import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rental-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-rental-page.component.html',
  styleUrl: './add-rental-page.component.css'
})
export class AddRentalPageComponent {

  public rental:any={
    rentalDate:'',
    returnDate:'',
    dueDate:'',
    totalCost:'',
  };

  constructor(private http:HttpClient){}


  public onSubmit() {
    this.http.post("http://localhost:8080/rental/add-rental",this.rental).subscribe((data)=>{
      this.successAlert();
      this.resetForm();
    });

  }

  resetForm() {
    this.rental = {
      rentalDate:'',
      returnDate:'',
      dueDate:'',
      totalCost:'',
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Rental Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
