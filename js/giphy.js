// let api = "https://api.giphy.com/v1/gifs/search?q="
// let key = '&api_key=' + "GxKcO82hLAP2N3qftGKgOPC9vb1DRUUx" 

// const searchgiphy = async () => {

//     let giphy = document.querySelector('#giphy')
//     let giphyurl =  api + input.value + "&limit=20"

//     let response = await fetch(giphyurl)
//     let data = await response.json()

//     let arr=data.data

//     let div = document.querySelector('.output')
//     div.innerHTML= ''
//     input.innerHTML= ''

// }


// arr.forEach(el => {
//     let ifrm = document.createElement('iframe')
//     ifrm.src = el.embed_url
//     div.append(ifrm)

// })




let api = "https://api.giphy.com/v1/gifs/search?q="
let key = '&api_key=' + "GxKcO82hLAP2N3qftGKgOPC9vb1DRUUx"


const giphysearch = async() => {
let input = document.querySelector('#input')
let url = api + input.value + key + '&limit=5'

let response = await fetch(url)
let data = await response.json()

let arr=data.data

let div = document.querySelector('.output')

div.innerHTML= ''
input.innerHTML= ''



arr.forEach(el => {
    let ifrm = document.createElement('iframe')
    ifrm.src = el.embed_url
    div.append(ifrm)

})
}