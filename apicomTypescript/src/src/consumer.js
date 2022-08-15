
async function enviarRequisicao(){
    var response = await fetch('https://api.chucknorris.io/jokes/random');

    data = await response.json();
    console.log(data);
    useApiData(data)
}

function useApiData(data){
    content = document.getElementById('phrase').innerHTML = data.value;
    anotherphrase = document.getElementById('anotherphrase').innerHTML = "Click on the button again to generate another phrase.";

}

//toast script//
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}