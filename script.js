chapter nomber 17 adding removing element 
shift concept
remove in first element
 const animals=["dog","hourse","cheeta","marhoor","bill"];
 animals.shift();
 console.log(animals);

 unshift concept
so unshift concpet as  da in first 

const animals=["dog","hourse","cheeta","marhoor","bill"];
animals.unshift("billi");
console.log(animals);

splice
add replace and remove

const animals=["dog","hourse","cheeta","marhoor","bill"];
animals.splice(2,0,"billi","dog");
console.log(animals);

const animals=["dog","hourse","cheeta","marhoor","bill"];
animals.splice(2,2,"billi","dog");
console.log(animals);

const month=["jan","march","apriall","may"];
month.splice(1,0,"feb");
console.log(month);

const pets=["dog","cat","fly","bag","bufilo"];
pets.splice(2,1,"geedR","MARHOoor");
console.log(pets);

pop vs slice 
const pets=["dog","cat","fly","bag","bufilo"];
const spliced=pets.splice(2,1,);
console.log(pets);

slice 




