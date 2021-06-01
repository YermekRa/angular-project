import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TimetableModel} from '../model/timetable.model';

@Injectable({
    providedIn: 'root'
})
export class TimetableService {
    private readonly USER_CONTROL = '/api/private/v1/timetable';

    constructor(private http: HttpClient) {
    }

    getAllTimetable(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }

    createTimetable(timetableModel: TimetableModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, timetableModel);
    }

    deleteTimetable(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/id/` + id);
    }
}
