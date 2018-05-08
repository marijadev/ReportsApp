var controlReports = (function(data, ui) {

    function getCandidate() {
        var request = new XMLHttpRequest();
        var candidateID = localStorage.getItem("id");
        
        request.open("GET", "http://localhost:3333/api/candidates/" + candidateID + "?_embed=reports");
        request.onload = function (response) {
            if (request.status >= 200 && request.status < 400) {
                var candidateResponse = JSON.parse(request.response);
                var response = candidateResponse;

                ui.displaySingleCandidate(response);
            }
        };
        
        request.send();
    }


    function callFunctions() {
        getCandidate()
    }
    
    return {
        init: function() {
            callFunctions()
        }
    }
})(dataReports, uiReports)

controlReports.init();
