// reduce (reduce the count)
let customerSpentAmount= [450,80,90,20];
let totalAmountSpent= customerSpentAmount.reduce((prevVal,currentVal) => {
    console.log(prevVal+currentVal)
    return prevVal+currentVal
},0);
console.log(totalAmountSpent);

// reduceRight (count value right side)
let customerSpentAmountt= [450,80,90,20];
let totalAmountSpentt= customerSpentAmountt.reduceRight((prevVal,currentVal) => {
    console.log(prevVal+currentVal)
    return prevVal+currentVal
},0);
console.log(totalAmountSpentt);

// concat (add many string and merge)
let books=["node.js","react.js"];
let updatebook= books.concat(["next.js","express.js"]);
console.log(updatebook);
// slice (cut values)
let foods=["noodels","chicken_rice","briyani","kottu"];
console.log(foods.slice(2));
console.log(foods.slice(2,3));
console.log(foods.slice(2,-1));
// splice (cut and add value)
let animals=["cat","dog","rabbit","tortoise"];
animals.splice(1,0,"parrot");
console.log(animals);
animals.splice(1,1,"ken");
console.log(animals);
// includes (true or false)
let arr=[10,"math",30,"tech"];
console.log(arr.includes("math"));
console.log(arr.includes(20));
// indexof(wich place be value)
let str="this is paragraph.hello guys, how are you?, nice you meet you!paragraph";
console.log(str.indexOf("paragraph")); //first value index only show
// lastindexof 
let nav=[20,30,40,50,55];
console.log(nav.lastIndexOf(50));
console.log(nav.lastIndexOf(30));
console.log(nav.lastIndexOf(65));
// flatmap
let product=["shoe,watch","pant,shirt","t_shirt,sunglass"];
console.log(product);
console.log(product.flatMap(a=>a.split(",")));
// toReversed (copy and reversed but reverse method is no copy orinal elements reversed)
let fruit=["apple","orange","pineapple","woodapple"];
let fruitreversed=fruit.toReversed();
console.log(fruitreversed);
console.log(fruit);