function compareByLength(s1, s2) {
  if (s2.length > s1.length) {
    return -1;
  } else if (s2.length < s1.length) {
    return 1;
  } else {
    return 0;
  }

}




a = compareByLength('patience', 'perseverance'); // -1
b = compareByLength('strength', 'dignity');      //  1
c = compareByLength('humor', 'grace');           //  0

console.log(a);
console.log(b);
console.log(c);