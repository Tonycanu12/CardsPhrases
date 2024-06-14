const quotes = async(category) =>{
    const apikey = "VOItv2KM5Ctq/fXmITQ+9g==EIGBRJ3p9K7xTDEw"
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {headers:{'X-Api-Key':apikey}}).then(res => res.json());
    console.log(response )
    return response;
    }; 

export default quotes ;