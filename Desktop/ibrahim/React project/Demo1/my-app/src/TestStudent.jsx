import Person from "./TestPersonal";

export default class Student extends Person{
    constructor(name,title,age){
        super(name,title)
        this.age = age;
    }
    

}