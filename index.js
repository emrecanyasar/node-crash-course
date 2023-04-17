console.log("Hello World!");

import slugify from "slugify";
import {topla,hello,cikar,text,user,users} from  "./my-module.js"
const title = slugify('some string','*')

console.log(title);
console.log(topla(2,4))
console.log(cikar(4,2))
hello("emre")
console.log(text);
console.log(user);
console.log(users);