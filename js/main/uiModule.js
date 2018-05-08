var uiModule = (function () {

    function displayCandidate(candidate) {
        var cardsHolder = document.querySelector('.cards-holder');
        var cardWrapper = document.createElement("div");
        var cardImage = document.createElement("img");
        var cardInfo = document.createElement("div");
        var cardName = document.createElement("h4");
        var cardEmail = document.createElement("p");
        var imagePlaceholder = "http://via.placeholder.com/350x150";

        cardWrapper.classList.add("card-wrapper");
        cardWrapper.addEventListener("click", function(event) {
            localStorage.setItem("id", cardWrapper.id);
            location.assign("reports.html");
        });
        cardImage.classList.add("card-avatar");
        cardInfo.classList.add("card-info");
        cardName.classList.add("card-name");
        cardEmail.classList.add("card-email");
        cardWrapper.setAttribute("id", candidate.id);
        
        cardImage.src = candidate.avatar ? candidate.avatar : imagePlaceholder;
        cardImage.classList.add("card-img");
        cardName.textContent = candidate.name;
        cardEmail.textContent = candidate.email;
        cardWrapper.appendChild(cardImage);
        cardWrapper.appendChild(cardName);
        cardWrapper.appendChild(cardEmail);
        cardsHolder.appendChild(cardWrapper);
    }

    function displayCandidatesList(list) {
        list.forEach(displayCandidate)
    }


    return {
        displayCandidate: displayCandidate,
        displayCandidatesList: displayCandidatesList
    }

})()