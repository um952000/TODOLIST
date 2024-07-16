import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})


export class TodolistComponent implements OnInit
{


  // For taking the data from local storage to website
         ngOnInit(): void {

                let saveDTodoLists = localStorage.getItem("allTaskStore");
                this.allTasks=saveDTodoLists?JSON.parse(saveDTodoLists):[];
         }

  taskTitle:string="";
  taskDate:Date=new Date();

  allTasks:Task[]=[];

  createTask(){

        let task:Task=
        {
          id:this.getRandomTaskId(),
          title:this.taskTitle,
          date:this.taskDate
        };
        this.allTasks.push(task);

        localStorage.setItem("allTaskStore",JSON.stringify(this.allTasks)); // To connect to the local storage

        console.log(this.allTasks);
        this.taskTitle = "";
        this.taskDate = new Date();
  }

   deleteTask(index:number){

       this.allTasks.splice(index,1);
       localStorage.setItem("allTaskStore",JSON.stringify(this.allTasks)); // To connect to the local storage
  }

  getRandomTaskId():string
  {

     const characterSet = "abcdefghijklmnopqrstuvwxyz1234567890";
     let result="";

    for(let i=0;i<5;i++)
      {

         result = result + characterSet.charAt(Math.floor(Math.random()*characterSet.length));
       }

     return result;
  }
}

interface Task{

    id:string,
    title:string,
    date:Date
}
