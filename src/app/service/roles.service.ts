import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RolesService {
    private readonly ROLES_CONTROL = '/api/private/v1/role';
    constructor(private http: HttpClient) {
    }
    getAllUser(): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all`);
    }
}