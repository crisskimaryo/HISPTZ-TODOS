import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from './../../provider/task.service';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {
  tasksForm: FormGroup;
  items = [];
  constructor(
    public formBuilder: FormBuilder,
    public tsk: TaskService

  ) {
    this.tasksForm = this.formBuilder.group({
      task: ['', Validators.required],
    });
  }
  get task() {
    return this.tasksForm.get('task');
  }
  ngOnInit() {
    this.tsk.getStore().subscribe((data) => {
      this.items = data;
    });
  }
  newtask() {
    if (this.task.value.length >= 1) {
      this.items.push(this.task.value);
      this.tsk.Store(this.items).subscribe((d) => {
        console.log(d);
        this.tasksForm.reset();
        // this.tasksForm.
      });
    } else {
      alert('must fill the task');
    }


  }
  removeTask(i) {
    this.items.splice(i, 1);
    this.tsk.Store(this.items).subscribe((d) => {
      console.log(d);

    });
  }
}
