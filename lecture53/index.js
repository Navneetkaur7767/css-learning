

// function changeText(event)
// {   console.log(event)
//     let fpara =document.getElementById('fpara')
// fpara.textContent="hello sandy"
// }


// let fpara =document.getElementById('fpara')
// fpara.addEventListener('click',changeText)

// // fpara.removeEventListener('click',changeText)
// let anchorElement =document.getElementById('fanchor')
// anchorElement.addEventListener('click',function(event)
// {event.preventDefault();
//     anchorElement.textContent="clich done"
// })
// let paras =document.querySelectorAll('p'
// )
function alertPara()
    {
        if(event.target.nodeName==="SPAN")
        alert("you have clicked on para"+event.target.textContent)
    }
// for( let i=1 ;i<paras.length;i++)
//     {
//         let para=paras[i]
//         para.addEventListener('click',alertPara)
//     }
let myDiv =document.getElementById('wrapper')

myDiv.addEventListener('click',alertPara);