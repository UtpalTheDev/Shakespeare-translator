txt_input=document.querySelector("#input");
output=document.querySelector("#output");
button=document.querySelector("#btn-translate");

var url="https://api.funtranslations.com/translate/shakespeare.json";
button.addEventListener("click",text_translation);


function text_translation()
{       var text= txt_input.value;
       
        var server_url=url + "?text="+text;
         console.log(server_url);
         
        fetch(server_url)
        .then(response=>response.json())
        .then(json=>{var result=json.contents.translated;
            output.innerText = result;
        }
            )
        .catch(errorhandler)
    
}

function errorhandler(){
    console.log("error occured",error);
    alert("something wrong with server! try again after some time");
}
