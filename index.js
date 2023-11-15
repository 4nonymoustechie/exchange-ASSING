const forInp = document.querySelector('.inputer')
//let  output = document.querySelector('h1')
const usd = document.querySelector('.usdbtn')
const ngn = document.querySelector('.ngnbtn')
const forbtt = document.querySelector('.btn')
// const forConvert = async() => {
// const forApi =   await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

// const convertAndRead  =  await  forApi.json()

// console.dir(convertAndRead)
// return(convertAndRead.bpi.USD.rate_float)

// }

// forConvert()


//let dollarVal = forInp.value * 845.44 

usd.addEventListener('click', function(){
forbtt.addEventListener('click', () =>{

document.querySelector('h1').textContent =   forInp.value * 845.44  

} )
 

})
