import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomModel} from '../model/room.model';

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    private readonly USER_CONTROL = '/api/private/v1/room';
    constructor(private http: HttpClient) {
    }
    getAllRoom(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }
    createRoom(roomModel: RoomModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, roomModel);
    }

    deleteRoom(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/delete/` + id);
    }
}
