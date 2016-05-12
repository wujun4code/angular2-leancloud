/// <reference path="avoscloud-sdk.d.ts"/>
import * as AV from 'avoscloud-sdk';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
  }

  getTodo() {

    try{
      console.log(AV);
      AV.initialize('uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
        'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
        'o9sd6j9d30kukvljnhpwv5in73ljrmg95m5csl588917kp8s');
      let todo = new AV.Object('Todo');

      todo.set('title', '工程师周会');
      todo.set('content', '每周工程师会议，周一下午2点');
      todo.save<AV.Object>().then(
          (data) => {
            // data 是根据 todo.save<AV.Object> 传入的泛型参数决定
            let savedTodo : AV.Object = data;
          },
          (error) => {
            if(error) throw error;
          }
      );
    }
    catch(e){
      console.log(e);
    }

  }
}
