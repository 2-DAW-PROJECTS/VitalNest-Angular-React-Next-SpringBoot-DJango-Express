import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from '../../shared/components/profile/profileView/profile-view.component'; // Actualiza la ruta
import { FamilyViewComponent } from '../../shared/components/profile/family-view/family-view.component'; // Actualiza la ruta
import { PaymentsViewComponent } from '../../shared/components/profile/payments-view/payments-view.component'; // Actualiza la ruta
import { BookingsViewComponent } from '../../shared/components/profile/bookings-view/bookings-view.component'; // Actualiza la ruta
import { PatientRegisterComponent } from '../../shared/components/profile/patient-register/patient-register.component'; // Actualiza la ruta
import { PatientUpdateComponent } from '../../shared/components/profile/patient-update/patient-update.component'; // Actualiza la ruta


const routes: Routes = [
  { 
    path: 'view', 
    component: ProfileViewComponent 
  },
  {
    path: 'family/view',
    component: FamilyViewComponent
  },
  {
    path: 'reservations/view',
    component: BookingsViewComponent
  },
  {
    path: 'payments/view',
    component: PaymentsViewComponent
  },
  {
    path: 'family/patient/register',
    component: PatientRegisterComponent
  },
  {
    path: 'family/patient/update/:id',
    component: PatientUpdateComponent
  },


  { 
    path: '', 
    redirectTo: 'view', 
    pathMatch: 'full' 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }