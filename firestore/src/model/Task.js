export default class Task {
    constructor(id, title, isDone){
        this.id = id;
        this.title = title;
        this.isDone = isDone;
    }

    toJson(){
        return {
            id: this.id,
            title: this.title,
            isDone: this.isDone
        }
    }

    static fromJson(json) {
        return new Task(json.id, json.title, json.isDone);
    }
}