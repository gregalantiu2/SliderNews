import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Adding Headers....');

        let jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {'X-Api-Key': environment.apiKey}
        });

        return next.handle(jsonReq);
    }

}