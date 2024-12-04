import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
  public item:any={
    itemName:'',
    availability:'',
    finePerDay:'',
    rentalPerDay:'',
  };

  constructor(private http:HttpClient){}


  public onSubmit() {
    this.http.post("http://localhost:8080/hardwareItem/add-hardwareItem",this.item).subscribe((data)=>{
      this.successAlert();
      this.resetForm();
    });

  }

  resetForm() {
    this.item = {
      itemName:'',
      availability:'',
      finePerDay:'',
      rentalPerDay:'',
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Item Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
