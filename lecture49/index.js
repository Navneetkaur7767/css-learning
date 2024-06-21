console.log("babbar")
let src=
{
    age:12,
    wt:6,
    ht:180
};

// console.log(obj)

// obj.color="white"
// console.log(obj)
// let dest={...src};
// src.age=90; 
// console.log(dest);
// console.log(src);
 
// let dest =Object.assign({},src);
// src.age=90;
// console.log(dest);
//  console.log(src);
let dest={};
for(let key in src)
    {
        // console.log(key)
        // let newKey=key;
        // let newValue =src[key];
        // //insert newKey and value in dest and crete a clone
        // dest[newKey]=newValue;
        dest[key]=src[key]; 
    }
    src.age=90;
  console.log(dest);
 console.log(src);