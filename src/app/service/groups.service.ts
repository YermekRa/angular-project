import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupsModel} from '../model/groups.model';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {
    private readonly USER_CONTROL = '/api/private/v1/classs';

    constructor(private http: HttpClient) {
    }

    getAllGroups(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }

    createGroup(groupsModel: GroupsModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, groupsModel);
    }

    deleteGroup(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/id/` + id);
    }

    getAllGroupsPaging(page, size): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/page/${page}/size/${size}`);
    }
}
