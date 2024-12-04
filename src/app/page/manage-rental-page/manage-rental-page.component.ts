import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-rental-page',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,HttpClientModule],
  templateUrl: './manage-rental-page.component.html',
  styleUrl: './manage-rental-page.component.css'
})
export class ManageRentalPageComponent {

}
