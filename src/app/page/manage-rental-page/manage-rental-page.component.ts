import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-rental-page',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,HttpClientModule],
  templateUrl: './manage-rental-page.component.html',
  styleUrl: './manage-rental-page.component.css'
})
export class ManageRentalPageComponent {

  public searchQuery: string = '';

  public rentalList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/rental/get-all").subscribe(data =>{
      console.log(data);
      this.rentalList = data;
    })
  }

  deleteBook(rentId: number) {
    this.http.delete(`http://localhost:8080/rental/delete-by-id/${rentId}`).subscribe(data => {
      this.deleteSuccessAlert();
      this.loadTable();
    })
  }

  public rentalTemp:any = {}
  updateBook(rental:any) {
    console.log(rental);
    this.rentalTemp = rental;
  }

  saveBook(){
    this.http.put("http://localhost:8080/rental/update-rental",this.rentalTemp).subscribe(data => {
      this.updateSuccessAlert();
      this.loadTable();
    })
  }

  searchBook(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const rentId = parseInt(searchQuery);

    if (isNaN(rentId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/rental/search-by-id/${rentId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.rentalList = [response];
          } else {
            this.rentalList = [];
            this.noBookErrorAlert();
          }
        }, 
      });
  }

  public deleteSuccessAlert(){
    Swal.fire({
      title: "Rental Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "Rental Updated Successfully?",
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
      title: "No Rental found with this ID",
      icon: "question",
      background:"#fff",
    });
  }

}
