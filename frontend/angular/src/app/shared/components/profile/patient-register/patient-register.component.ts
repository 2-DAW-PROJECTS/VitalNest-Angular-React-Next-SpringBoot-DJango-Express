import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPatientService } from '../../../../core/services/users/user-patient.service';
import { CookieService } from '../../../../core/services/cookies/cookie.service';
import { UserPatient } from '../../../../core/models/Users/user-patient.model';
import { SHARED_ROUTES } from '../../../../core/constants/shared.routes';
import { AllergyCategories, DEFAULT_ACTIVE_CATEGORY, ALLERGIES_CATEGORIES } from '../../../../core/constants/modal.content';



@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  patientForm: FormGroup;
  allergiesForm: FormGroup;
  currentUser: any;
  showAllergiesModal = false;
  selectedAllergies: string[] = [];
  activeCategory: keyof AllergyCategories = DEFAULT_ACTIVE_CATEGORY;
  allergiesCategories = ALLERGIES_CATEGORIES;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userPatientService: UserPatientService,
    private cookieService: CookieService
  ) {
    this.currentUser = this.cookieService.getCurrentUser();

    this.patientForm = this.fb.group({
      name_patient: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone_number: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      allergies: [[]],
      difficulties: [[]],
      discapacity: [0],
      isactive: [1]
    });

    this.allergiesForm = this.fb.group({
      customAllergy: ['']
    });
  }


  getAllergiesByCategory(category: keyof AllergyCategories): string[] {
    return this.allergiesCategories[category];
  }

  getCategories(): Array<keyof AllergyCategories> {
    return Object.keys(this.allergiesCategories) as Array<keyof AllergyCategories>;
  }

  
  toggleAllergyModal(): void {
    this.showAllergiesModal = !this.showAllergiesModal;
  }

  toggleAllergy(allergy: string): void {
    const index = this.selectedAllergies.indexOf(allergy);
    if (index > -1) {
      this.selectedAllergies.splice(index, 1);
    } else {
      this.selectedAllergies.push(allergy);
    }
    this.patientForm.patchValue({
      allergies: this.selectedAllergies
    });
  }

addCustomAllergy(): void {
  const value = this.allergiesForm.get('customAllergy')?.value;
  if (value?.trim()) {
    this.selectedAllergies.push(value.trim());
    this.allergiesForm.patchValue({ customAllergy: '' });
    this.patientForm.patchValue({
      allergies: this.selectedAllergies
    });
  }
}

  ngOnInit(): void {
    this.patientForm.get('email')?.valueChanges.subscribe(value => {
      if (!value) {
        this.patientForm.patchValue({
          email: this.currentUser.email
        });
      }
    });
  }

  navigateToFamily(): void {
    this.router.navigate([SHARED_ROUTES.ANGULAR.AUTH.FAMILY]);
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log('Form submitted:', this.patientForm.value);

      // const patientData = {
      //   ...this.patientForm.value,
      //   id_user: this.currentUser.id_user,
      //   createdat: new Date(),
      //   updatedat: new Date()
      // };

      // this.userPatientService.createUserPatient(patientData).subscribe({
      //   next: () => {
      //     navigateToFamily();
      //   },
      //   error: (error) => {
      //     console.error('Error creating patient:', error);
      //   }
      // });
    }
  }
}