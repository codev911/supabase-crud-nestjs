import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class AppService {
  supabase: any;

  constructor(){
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SERVICE_KEY;
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getHello(): any {
    return { ok: "Welcome to supabase test playground" };
  }

  async getAllData(): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .select('*');

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async getDataById(id: number): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .select('*')
      .eq('id', id);

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async getDataByFirstName(fname: string): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .select('*')
      .ilike('fname', '%'+fname+'%');

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async getDataByLastName(lname: string): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .select('*')
      .ilike('lname', '%'+lname+'%');

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async insertData(data: any): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .insert(data);

    return { status: res.status + " " + res.statusText };
  }

  async updateData(data: any, id: number): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .update(data)
      .eq('id', id);

    return { status: res.status + " " + res.statusText };
  }

  async deleteData(id: number): Promise<any>{
    let res = await this.supabase
      .from('identity')
      .delete()
      .eq('id', id);

    return { status: res.status + " " + res.statusText };
  }
}
