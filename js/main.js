let elLIst = document.querySelector('.list')

fetch('https://6311eab4f5cba498da88465f.mockapi.io/users/list')
.then(res => res.json())
.then(data => {
    data.map((e,i)=>{
        let newLi = document.createElement('li')
        let newH = document.createElement('h3')
        let newspen = document.createElement('p')
        let newA = document.createElement('a')

        newA.setAttribute('href', `tel: ${e.tel}`)
        newH.textContent = e.name
        newspen.textContent = e.date
        newA.textContent = e.tel
        newLi.appendChild(newH)
        newLi.appendChild(newA)
        newLi.appendChild(newspen)
        elLIst.appendChild(newLi)
    })
})