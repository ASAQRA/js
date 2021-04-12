let url = "https://api.github.com/users/"
let output = document.getElementById('output')




const search = async (e) =>{
e.preventDefault()
output.innerHTML = ""
let input = document.getElementById('name')
const res = await fetch(url+input.value)
const req = await res.json()
console.log(req)
drawUser(req)
input.value=''

}


const drawUser = (user) => {
    let h1 = document.createElement('h1')
    let h3 = document.createElement('h3')
    let img = document.createElement('img')
    let follow = document.createElement('div')


  h1.innerHTML=user.login
  h3.innerHTML=user.bio
  img.src=user.avatar_url
  follow.innerHTML=`${user.followers} ${user.following}`

  output.appendChild(follow)
  output.appendChild(img)
  output.appendChild(h3)
  output.appendChild(h1)
  document.body.appendChild(output)

}