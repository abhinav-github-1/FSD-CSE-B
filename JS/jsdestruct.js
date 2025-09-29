const num=[10,20,30,40,50];
//Array Destructuring
const [a,b,c,d,e]=num;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Object destructuring
const obj={name:"abc",id:2,email:'abc@gmail.com'}
// const n=obj.name;
// const id=obj.id;
// const email=obj.email;
const{name:newname,id,email}=obj;
console.log(newname);
console.log(id);
console.log(email);

//Rest usage on arrays
const[f,s,...rest]=num;
console.log(f);
console.log(s);
console.log(rest);

//rest on object
const{name,...other}=obj;
console.log(name);
console.log(other);

const arr=[1,2];
const arr1=[3,4,5];
const newarr=[...arr,...arr1];
console.log(newarr);