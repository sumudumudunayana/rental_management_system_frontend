import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import{ Router } from '@angular/router';

import Swal from'sweetalert2';

@Component({
  selector: 'app-bill-page',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './bill-page.component.html',
  styleUrl: './bill-page.component.css'
})
export class BillPageComponent implements OnInit {

  rental: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.rental = history.state.rental;

    if (!this.rental) {
      
      window.history.back();
    }
  }

}
