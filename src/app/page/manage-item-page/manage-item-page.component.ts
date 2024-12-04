import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-item-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './manage-item-page.component.html',
  styleUrl: './manage-item-page.component.css'
})
export class ManageItemPageComponent {

  public searchQuery: string = '';

  public itemList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/hardwareItem/get-all").subscribe(data =>{
      console.log(data);
      this.itemList = data;
    })
  }

  deleteItem(itemId: number) {
    this.http.delete(`http://localhost:8080/hardwareItem/delete-by-id/${itemId}`).subscribe(data => {
      this.deleteSuccessAlert();
      this.loadTable();
    })
  }

  public itemTemp:any = {}
  updateItem(item:any) {
    console.log(item);
    this.itemTemp = item;
  }

  saveItem(){
    this.http.put("http://localhost:8080/hardwareItem/update-hardwareItem",this.itemTemp).subscribe(data => {
      this.updateSuccessAlert();
      this.loadTable();
    })
  }

  searchItem(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const itemId = parseInt(searchQuery);

    if (isNaN(itemId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/hardwareItem/search-by-id/${itemId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.itemList = [response];
          } else {
            this.itemList = [];
            this.noBookErrorAlert();
          }
        }, 
      });
  }

  public deleteSuccessAlert(){
    Swal.fire({
      title: "Item Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "Item Updated Successfully?",
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
      title: "No Item found with this ID",
      icon: "question",
      background:"#fff",
    });
  }

}
