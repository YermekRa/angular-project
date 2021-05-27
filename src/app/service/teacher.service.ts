import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherModel} from '../model/teacher.model';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private readonly USER_CONTROL = '/api/private/v1/teacher';

    constructor(private http: HttpClient) {
    }

    getAllUser(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }

    createTeacher(teacherModel: TeacherModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, teacherModel);
    }
}
