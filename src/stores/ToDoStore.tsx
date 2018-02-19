import {autorun, observable} from "mobx";

class ToDoStore {
    @observable todos = ['buy link', 'buy eggs'];
    @observable filter = '';
}

const instance = new ToDoStore();
export default instance;

autorun(()=> {
    console.log('instance.filter:', instance.filter);
    console.log('instance.todos:', instance.todos[0]);
});
