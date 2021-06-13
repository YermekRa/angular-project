import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {shareReplay} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {routes} from '../const/routes';
import {AuthPageComponent} from '../components/containers/auth-page/auth-page/auth-page.component';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public routers: typeof routes = routes;
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        let cloneReq;

        if (token) {
            cloneReq = req.clone({
                headers: req.headers.set('Authorization', token)
            });
        }

        const hanlder: Observable<any> = next.handle(token ? cloneReq : req).pipe(shareReplay());

        hanlder.toPromise().then().catch(event => {
            console.log(event.status);
            if (event instanceof HttpErrorResponse && (event.status === 401 || event.status === 403)) {
                this.authService.signOut();
                this.router.navigate([this.authService.routers.LOGIN]).then();
            }
        });

        return hanlder;
    }

}
