import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GradeModel} from '../model/grade.model';

@Injectable({
    providedIn: 'root'
})
export class GradeService {
    private readonly USER_CONTROL = '/api/private/v1/grade';
    constructor(private http: HttpClient) {
    }
    getAllGrade(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }
    createGrade(gradeModel: GradeModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, gradeModel);
    }

    deleteGrade(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/delete/` + id);
    }
}
