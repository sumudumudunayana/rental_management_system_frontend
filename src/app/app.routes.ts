import { Routes } from '@angular/router';
import { MainPageComponent } from './common/main-page/main-page.component';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';
import { AddItemPageComponent } from './page/add-item-page/add-item-page.component';
import { ManageItemPageComponent } from './page/manage-item-page/manage-item-page.component';
import { AddRentalPageComponent } from './page/add-rental-page/add-rental-page.component';
import { ManageRentalPageComponent } from './page/manage-rental-page/manage-rental-page.component';

export const routes: Routes = [
    {path:'main',component:MainPageComponent},
    {path:'add-customer',component:AddCustomerPageComponent},
    {path:'manage-customer',component:ManageCustomerPageComponent},
    {path:'add-item',component:AddItemPageComponent},
    {path:'manage-item',component:ManageItemPageComponent},
    {path:'add-rental',component:AddRentalPageComponent},
    {path:'manage-rental',component:ManageRentalPageComponent},
];
