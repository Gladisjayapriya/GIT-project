//object : (it is collection of methods(function)r properties
// minimum details we need use this model:
//we can use function inside the object.
const person1={
    name :"glad",
    age: 25,
    ispresent:true, 
   //function use in object
    say: function () {
        console.log(`this is ${this.name} she is employee`);       
    },

};
person1.say();
const person2={
    name:"roja",
    age:28,
    ispresent:false
};
console.log(person1.ispresent);
console.log(person2.age);


//mored data we need use this method:
function details (employee_name,employee_age,employeeispresent){
    this.employee_name=employee_name,
    this.employee_age=employee_age,
    this.ispresent=this.ispresent;
}
const obj1=new details("aswin",32,true);
console.log(obj1.employee_name);
console.log(obj1);


