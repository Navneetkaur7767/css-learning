// let obk=
// {
//     name:"sandy"
//     ,age:25,weight:85,
//     greet:function()
//     {
//         console.log("hello sandy");
//     }

// };
// for(let key in obk)
//     {
//         console.log(key,obk[key]);
//     }
// console.log(obk.age); //output: sandy
// obk.greet();

// creation of array
// let arr=[1,2,3,4,5]
// console.log(arr) //output: 1
// let brr=new Array('array',1 ,true)
// brr.unshift("sandyyy")
// brr.push(20);
// brr.push(30,40);
// brr.push(20);
// console.log(brr.slice(2,4))
// brr.splice(1,0,'kunal')

// console.log(brr) //output: ["array", 1, true]
// let arr=[10,20,30,50]
// let ans=arr.map((number,index)=>
//     {
//         console.log(number+1);
//         console.log(index);
//     }
// )
// let ans=arr.map((number)=>
//     {
//         return number*number;
//     }
// )
// console.log(ans);
// let arr  = [10,20,30,40,50,41];
// let ansa=arr.filter((number)=>
//     {

//         return number%2===0;
//         // if(number%2===0)
//         //     {
//         //         return true;
//         //     }
//         // else
//         // {
//         //     return false;
//         // }
        
//     }
// );
// console.log(ansa); //output: [20,40,50]  //filter method returns a
// 
// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>
//     {
//         return acc+curr;
//     },20);
//     console.log(ans)
// let arr=[9,5,6,3,5];
// arr.sort();
// arr.reverse();
// console.log(arr)
let arr=[10,20,30,40,50]
// (let value of arr)
//     {
//         console.log(value);
//     }


// let fulforlName="babbar"
// for(let char of fullName)
//     {
//         console.log(char);
//     }
let getSum=(arr)=>
    {
        let sum=0;
        arr.forEach((value)=>
            {
                sum+=value;
            })
            return sum;
    }
    let totalSUm=getSum(arr);
    console.log(totalSUm); //output: 150