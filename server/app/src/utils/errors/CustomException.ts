import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
    constructor(errorMessage: string, code: string, statusCode: number) {
        super({ message: errorMessage, code, statusCode }, HttpStatus.BAD_GATEWAY);
    }
}