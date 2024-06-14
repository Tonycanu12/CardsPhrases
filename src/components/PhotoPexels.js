
// const apikey = "JgtCj4EPud1LBg59LUeNY4y3sE1FjnOxLaKxKBDHaRc7rD0ek2EFapSZ"
// const data = await fetch('https://api.pexels.com/v1/search?query=abstract&per_page=50', {headers:{"Authorization":apikey}}).then(res => res.json());
// console.log(data)
// console.log(data.photos[1].src.large)


// export default data.photos; 

const fetchData = async(query, perPage) => {
    const apikey = "JgtCj4EPud1LBg59LUeNY4y3sE1FjnOxLaKxKBDHaRc7rD0ek2EFapSZ"
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {headers:{"Authorization":apikey}}).then(res => res.json());
    //const data = await response.json();
    //console.log(response.photos)
    return response.photos;
};

export default fetchData;