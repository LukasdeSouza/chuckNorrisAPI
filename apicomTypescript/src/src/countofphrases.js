const selection = document.getElementById('sel');

async function countofPhrases(){
    var response = await fetch('http://api.icndb.com/jokes/count');

    data = await response.json();
    useApiCount(data)
}

function useApiCount(data){
    content = document.getElementById('count').innerHTML = data.value +" Jokes for you to see!";

}

 function jokesbyCategory(position){

    selection.addEventListener('change',function(){
        var data = this.value;
        
        fetchbyCategory(data); 
        
    })
    //    var responsejson = data.json();
    //     console.log(responsejson);
    }

async function fetchbyCategory(data){
    await fetch('https://api.chucknorris.io/jokes/random?category='+data)
    .then(response => response.json())
     .then(data => content = document.getElementById('showPhrasesbyCateg').innerHTML = data.value);
    
}



// function usefetchbyCategory(data){
//     content = document.getElementById('showPhrasesbyCateg').innerHTML = data.value
// }
    
    // var populateDiv = document.getElementById('showPhrasesbyCateg');
    //         for (var i = 0; i < categories.length; i++) {
    //             // Popular SELECT com JSON.
    //             populateDiv.innerHTML = populateDiv.innerHTML +
    //                 '<span value="' + categories[i]['category'] + '">' + categories[i]['category'] + '</option>';
    //         }
    //         console.log(categories[i])

    // var responseCategories = await fetch(`https://api.chucknorris.io/jokes/random?category=${categories['category']}`)
    // searchcategories = await responseCategories.json();
    




