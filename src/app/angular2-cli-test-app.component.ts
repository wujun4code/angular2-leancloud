import { Component,OnInit} from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-cli-test-app-app',
  templateUrl: 'angular2-cli-test-app.component.html',
  styleUrls: ['angular2-cli-test-app.component.css'],
  providers:[
    TodoService
  ]
})
export class Angular2CliTestAppAppComponent implements OnInit{
  title = 'Fuck Angular!';
  constructor(
  private _todoService: TodoService) { }
  ngOnInit() {
    this._todoService.getTodo();
  }
}
