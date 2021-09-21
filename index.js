console.log("Script added")

var inputTxt = document.querySelector("#input-txt")
var translateBtn = document.querySelector("#btn-translate")
var outputTxt = document.querySelector("#output-txt")

var serverAPIUrl= "https://api.funtranslations.com/translate/minion.json";

//To take our input and create our Url from which we want to fetch data
function getInputTranslationURL(text) 
{ 
    return serverAPIUrl+ "?" + "text=" + text
}

//For error Handling
function errorHandler(error)
{
    console.log(`Error occured: ${error}`)
    alert("Something is wrong with the server, try again after some time")
}

//Callback function called on click event
function clickHandler()
{
    var input = inputTxt.value;

    //Calling server with our url
    fetch(getInputTranslationURL(input))
    .then(res=> res.json())
    .then(
            output => {
                        var translatedTxt = output.contents.translated;
                        outputTxt.innerText = translatedTxt;
                      } 
                      
         )
    .catch(errorHandler)   //We don't need to explicitly pass error as it will pass automatically because it is a Callback function
}

translateBtn.addEventListener("click",clickHandler)
// translateBtn.addEventListener("click",()=>console.log("Button clicked"))