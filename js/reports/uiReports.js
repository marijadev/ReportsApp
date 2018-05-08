var uiReports = (function () {

    function displaySingleCandidate(candidate) {
        var img = document.querySelector(".info-img");
        var name = document.querySelector(".info-name");
        var email = document.querySelector(".info-email");
        var education = document.querySelector(".info-education");
        var dateOfBirth = document.querySelector(".date-of-birth");

        img.src = candidate[0].avatar;
        name.textContent = candidate[0].name;
        email.textContent = candidate[0].email;
        education.textContent = candidate[0].education;
        dateOfBirth.textContent = getDate(candidate[0].birthday);
    }

    function getDate(dateOfBirth) {
        var date = new Date(dateOfBirth);
        
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ".";
    }

    return {
        displaySingleCandidate: displaySingleCandidate
    }

})()