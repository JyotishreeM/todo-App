import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  
  taskArr=[{
    taskName:'Jyotishree',
    IsCompleted:false
  }]

  onSubmit(form:NgForm){
    console.log(form);
    this.taskArr.push({
      taskName:form.controls['task'].value,
      IsCompleted:false
    })

    //reset form
    form.reset();

  }

  OnDelete(index:number){
    console.log(index);
    this.taskArr.splice(index,1)

  }

  //checkbox functionality
  onCheck(index:number){
    console.log(this.taskArr)
    this.taskArr[index].IsCompleted = !this.taskArr[index].IsCompleted;
    if(this.taskArr[index].IsCompleted == true){
      alert("Task Completed !..")
    }
  }
}
