import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTES } from '../../constants/api.routes';
import { UserPatient } from '../../models/Users/user-patient.model';

@Injectable({
    providedIn: 'root'
})
export class UserPatientService {
    constructor(private http: HttpClient) {}

    getUserPatientsByUser(id_user: number): Observable<UserPatient[]> {
        // console.log('ID USER', id_user);
        // console.log('API URL', API_ROUTES.USER_PATIENT.LIST_BY_USER(id_user));
        return this.http.get<UserPatient[]>(API_ROUTES.USER_PATIENT.LIST_BY_USER(id_user));
    }

    createUserPatient(userPatient: UserPatient): Observable<UserPatient> {
        return this.http.post<UserPatient>(API_ROUTES.USER_PATIENT.CREATE, userPatient);
    }
}