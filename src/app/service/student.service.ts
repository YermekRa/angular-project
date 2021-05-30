import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from '../model/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private readonly USER_CONTROL = '/api/private/v1/student';

    constructor(private http: HttpClient) {
    }

    getAllStudent(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }

    createStudent(studentModel: StudentModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, studentModel);
    }

    deleteStudent(id: number): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}/id`, id);
    }
}
