import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  items = [];
  constructor(
    protected storage: LocalStorage
  ) { }




  //
  Store(data) {
    return this.storage.setItem('todos', data);
  }

  getStore() {
    return this.storage.getItem('todos');
  }
  //
  deleteStore(data) {

    this.storage.getItem('todos').subscribe((item) => {
      delete item[data];
      this.storage.setItem('todos', item);

    });

  }


}
