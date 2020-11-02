async function getPosts(url){
  try{
    return await fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json())
  }catch(err){
    return err
  }
}
let btn = document.getElementsByTagName('button')[0]

btn.addEventListener('click', (e) =>{
  e.preventDefault()
  getPosts().then(resp => {
    renderPost(resp)
  })
})

function renderPost(postArray) {
  let resultSection = document.getElementById('post-data')
  let postsUl = document.createElement('ul')
  postArray.forEach(post => {
    let postLi = createLiFromPost(post)
    postsUl.appendChild(postLi)
  })
  resultSection.appendChild(postsUl)
}

function createLiFromPost(post){
  let postLi = document.createElement('li')
  let title = document.createElement('strong')
  let titleText = document.createTextNode(post.title)
  let contenetText = document.createTextNode(post.body)
  title.appendChild(titleText)
  postLi.appendChild(titleText)
  postLi.appendChild(contenetText)
  return postLi
}