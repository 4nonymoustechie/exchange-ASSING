let forInp = document.querySelector('.inputer')
//let  output = document.querySelector('h1')
const usd = document.querySelector('.usdbtn')
const ngn = document.querySelector('.ngnbtn')
const forbtt = document.querySelector('.btn')

const forConvert = async() => {
const forApi =   await fetch("https://api.frankfurter.app/latest?from=USD")

const convertAndRead  =  await  forApi.json()

console.log(convertAndRead.rates)

return convertAndRead.rates.ZAR

}


const forConverting = async() => {
    const forApis =   await fetch("https://api.frankfurter.app/latest?from=ZAR")
    
    const convertAndReadIt  =  await  forApis.json()
    
    console.log(convertAndReadIt)

    
    return(convertAndReadIt.rates.USD) 
    
    }




usd.addEventListener('click', async() =>{
forbtt.addEventListener('click', async () => {

    let forNgn = await forConvert()
    

document.querySelector('h1').textContent =   forInp.value * forNgn

} )
 
})
ngn.addEventListener('click', async() => {
    forbtt.addEventListener('click', async() => {

        let forUsd = await forConverting()

    document.querySelector('h1').textContent =   forInp.value  * forUsd 


    } )
     
    
    })
