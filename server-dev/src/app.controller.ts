/* eslint-disable prettier/prettier */
import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Accumulate')                                               
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray { 
    this.logger.log('Adding ' + numberArray.data.toString());               
    return { sum: this.appService.accumulate(numberArray.data) }; 
  } 
}
