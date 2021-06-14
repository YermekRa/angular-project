import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubjectModel} from '../model/subject.model';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    private readonly USER_CONTROL = '/api/private/v1/subject';
    constructor(private http: HttpClient) {
    }
    getAllSubject(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }
    createSubject(subjectModel: SubjectModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, subjectModel);
    }

    deleteSubject(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/delete/` + id);
    }
}
