let cardInfo = [
    {
        h1: `Title 1`,
        p: `Lorem ipsum dolor sit 1`
    },
    {
        h1: `Title 2`,
        p: `Lorem ipsum dolor sit 2`
    },
    {
        h1: `Title 3`,
        p: `Lorem ipsum dolor sit 3`
    },
    
]

const cardTemplat = (obj) => {
    return `
    <div class="card">
        <h1>${obj.h1}</h1>
        <p>${obj.p}</p>
        <button>See more</button>
    </div>
  `
}

cardInfo.forEach((obj, i) => {
    document.querySelector('.content').innerHTML += cardTemplat(obj)
})