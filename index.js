let forInp = document.querySelector('.inputer')
//let  output = document.querySelector('h1')
const usd = document.querySelector('.usdbtn')
const ngn = document.querySelector('.ngnbtn')
const forbtt = document.querySelector('.btn')

const forConvert = async() => {
const forApi =   await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_uaXdDC3aZvNuD4TPBIaSn8Y0oyzV7PryRxsfYuru")

const convertAndRead  =  await  forApi.json()

console.dir(convertAndRead)
//console.log(convertAndRead.data.ZAR.value)

return convertAndRead.data.NGN.value

}

const forConverting = async() => {
    const forApis =   await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_uaXdDC3aZvNuD4TPBIaSn8Y0oyzV7PryRxsfYuru")
    
    const convertAndReadIt  =  await  forApis.json()
    
    console.dir(convertAndReadIt)
    //console.log(convertAndRead.data.ZAR.value)
    
    return(convertAndReadIt.data.NGN.value)
    
    }




ngn.addEventListener('click', async() =>{
forbtt.addEventListener('click', async () => {

    let forNgn = await forConvert()
    

document.querySelector('h1').textContent =   forInp.value / forNgn

} )
 
})
usd.addEventListener('click', async() => {
    forbtt.addEventListener('click', async() => {

        let forUsd = await forConverting()

    document.querySelector('h1').textContent =   forInp.value  * forUsd 


    } )
     
    
    })
