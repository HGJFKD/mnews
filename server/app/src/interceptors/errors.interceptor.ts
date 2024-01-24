import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    CallHandler,
    HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const ctx = GqlExecutionContext.create(context).getContext();
        return next
            .handle()
            .pipe(
                catchError((err) => {
                    console.log(err.extensions);
                    console.log(err);
                    
                    return throwError(() => new BadGatewayException(err));
                }),
            );
    }
}
