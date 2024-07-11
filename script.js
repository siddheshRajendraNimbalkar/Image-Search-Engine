const accessKey = ""

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.querySelector("#Show-more-btn")

let inputData = ""
let page = 1;


let searchImages = async ()=>{
    inputData=inputEl.value;

    const url = ``

    
        const res = await fetch(url);
        const data = await   res.json();

    const results =data.results;

    if(page===1){
        searchResult.innerHTML=""
    }
    results.map((result)=>{
        const imaageRapper = document.createElement('div')
        imaageRapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target="_/blank"
        imageLink.textContent = result.alt_description

        imaageRapper.appendChild(image)
        imaageRapper.appendChild(imageLink)
        searchResult.appendChild(imaageRapper)
    });

    page++;
    if(page>1){
        showMore.style.display="block"
    }

}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    pade=1;
    searchImages()
})

showMore.addEventListener("click",()=>{
    searchImages()
})
