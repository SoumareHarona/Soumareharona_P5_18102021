 function fetchServer(url){
    return new Promise(function (resolve, reject){
        try {
            let response = fetch(url)
            .then((response)=> response.json())
            .then((data) =>  resolve(data))
        } catch (error) {
            console.error(error);
            alert('Un problème est survenu.')
            reject([])
        }
    })    
}

// Return id from url
function getId(){
    let params = new URLSearchParams(document.location.search);
    return params.get("id");
}

async function getKanap(){
    const url = new URL('http://localhost:3000/api/products/' + getId())
    let kanap = await fetchServer(url);
    return kanap
}

async function setHTML() {
    const kanap = await getKanap()
    const {name, price, imageUrl, colors, altText, description} = kanap

    // Set img source
    const imgElt = document.querySelector('.item__img img')
        if (imgElt !== null) {
        imgElt.src = imageUrl
        
    }
    
    

  
}

setHTML()