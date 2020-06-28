/*
   What happens when this is run?
   ReferenceError: foo is not defined
   This is a scope issue. The variable is defined in 
   a block, and called outside of the block
*/

{
  let foo = 'bar';
}

console.log(foo);