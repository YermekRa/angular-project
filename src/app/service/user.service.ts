import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

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

    createUser(userModel: UserModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, userModel);
    }

    getAllUserPaging(page, size): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/page/${page}/size/${size}`);
    }
}
