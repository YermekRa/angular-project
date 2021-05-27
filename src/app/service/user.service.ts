import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly USER_CONTROL = '/api/private/v1/user';
    constructor(private http: HttpClient) {
    }
    getAllUser(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }
}
