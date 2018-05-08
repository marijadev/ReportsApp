var controlModule = (function(data, ui) {
    var listOfCandidates = [];
    
    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("keyup", getCandidates);
    
    function getCandidates() {
        var request = new XMLHttpRequest();
        var inputValue = searchInput.value;
        var clearCandidates = document.querySelector(".cards-holder");
        
        if(inputValue.length > 0) {
            clearCandidates.innerHTML = "";
        } 

        if(clearCandidates.hasChildNodes() && inputValue == 0) {
            clearCandidates.innerHTML = "";
        }

        request.open("GET", "http://localhost:3333/api/candidates?q=" + inputValue);
        request.onload = function (response) {
            if (request.status >= 200 && request.status < 400) {
                var candidatesResponse = JSON.parse(request.response);
                var createListOfCandidates = data.createCandidate(candidatesResponse);
                listOfCandidates = createListOfCandidates;
                
                ui.displayCandidatesList(listOfCandidates);
            }
        };
        
        request.send();
    }
 
    function callFunctions() {
        getCandidates: getCandidates()
        
    }
    
    return {
        init: function() {
            callFunctions()
        }
    }
})(dataModule, uiModule)

controlModule.init();
