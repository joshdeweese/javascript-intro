let myProtoObj = {
  foo: 1,
  bar: 2,
};

let anObj = Object.create(myProtoObj);

console.log(myProtoObj);
console.log(anObj.foo);