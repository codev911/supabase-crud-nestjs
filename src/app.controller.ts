import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('alldata')
  getAllData(): Promise<any> {
    return this.appService.getAllData();
  }

  @Get('getdata/:id')
  getDataById(@Param() param : any){
    return this.appService.getDataById(param.id);
  }

  @Get('getdatabyfname/:fname')
  getDataByFirstName(@Param() param : any){
    return this.appService.getDataByFirstName(param.fname);
  }

  @Get('getdatabylname/:lname')
  getDataByLastName(@Param() param : any){
    return this.appService.getDataByLastName(param.lname);
  }

  @Post('data')
  insertData(@Body() body: any){
    return this.appService.insertData(body);
  }

  @Put('data/:id')
  updateDate(@Body() body: any, @Param() param: any){
    return this.appService.updateData(body, param.id)
  }

  @Delete('data/:id')
  deleteData(@Param() param: any){
    return this.appService.deleteData(param.id)
  }
}
