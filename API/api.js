async function omdb() {
    let titulo = document.getElementById("titulo").value
    let resposta = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=39679d18`)
                    
                    .then(response => {return  response.json()})

    document.getElementById("year").innerHTML = resposta.Year
    document.getElementById("diretor").innerHTML = resposta.Director 
    document.getElementById("runtime").innerHTML = resposta.Runtime
    document.getElementById("genre").innerHTML = resposta.Genre
    document.getElementById("released").innerHTML = resposta.Released
    document.getElementById("actors").innerHTML = resposta.Actors
    document.getElementById("plot").innerHTML = resposta.Plot
    document.getElementById("awards").innerHTML = resposta.Awards
    document.getElementById("poster").src = resposta.Poster
}