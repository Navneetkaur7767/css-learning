// code 1
// const t1 =performance.now()
// for(let i=1 ;i<=100 ;i++)
//     {
//         let para =document.createElement('p')
//         para.textContent="this is para "+i;
//         document.body.appendChild(para)


//     }
    
// const t2 =performance.now()

// console.log("time"+(t2-t1))

// let myDiv=document.createElement('div' )
// const t3 =performance.now()

// for(let i=1 ;i<=100 ;i++)
//     {
//         let para =document.createElement('p')
//         para.textContent="this is para "+i;
    
//         myDiv.appendChild(para)
 
//     }
//     document.body.appendChild(myDiv)
// const t4 =performance.now()


// console.log("time"+(t4-t3))

// best code
const t3 =performance.now()
let fragment = document.createDocumentFragment();

for (let i=1;i<=100;i++)
    {
        let para = document.createElement('p');
        para.textContent = "this is para "+(i+1000);
        // no reflow and repaint
        fragment.appendChild(para);
    }
    // below line take one repoaint and rflow

document.body.appendChild(fragment);
const t4 =performance.now()
console.log("time"+(t4-t3))