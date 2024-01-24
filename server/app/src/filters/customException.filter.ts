import { Catch, ArgumentsHost, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch(HttpException)
export class CustomExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = GqlArgumentsHost.create(host);

    const response = ctx.switchToHttp().getResponse();
    console.log(response);
    
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;

    let customCode = 'INTERNAL_SERVER_ERROR';

    // Customize the error code based on the exception
    if (exception instanceof NotFoundException) {
      customCode = 'USER_NOT_FOUND';
    } else {
      customCode = 'SOME_OTHER_ERROR';
    }

    response.status(status).json({
      data: {},
      errors: [
        {
          message: exception.message,
          code: customCode,
          status: status,
        },
      ],
    });
  }
}