console.log("chargél");

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

async function getSofa(){


    // Appeler le server pour avoir la liste des produits
    // > Method fetch
    // Boucler sur la liste
    // > foreach
    // Pour chaque élément recréer le lien <a>...
    // A la fin de la boucle inserer dans l'eleemnt div
    const url = new URL('http://localhost:3000/api/products')
 
    let kanaps = await fetchServer(url);
    let content = ''
    console.log('debut:')
    console.log(content)
    kanaps.forEach(kanap => {
        content += `<a href="./product.html?id=${kanap._id}"><article><img src="${kanap.imageUrl}" alt="${kanaps.altTxt}"><h3>${kanap.name}</h3><p>${kanap.description}</p></article></a>`;
        console.log('boucle')
        console.log(content)
    });
    console.log('fin')
    console.log(content)

document.getElementById('items').innerHTML= content

}

getSofa()


