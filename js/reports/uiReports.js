var uiReports = (function () {

    function displaySingleCandidate(candidate) {
        var img = document.querySelector(".info-img");
        var name = document.querySelector(".info-name");
        var email = document.querySelector(".info-email");
        var education = document.querySelector(".info-education");
        var dateOfBirth = document.querySelector(".date-of-birth");

        img.src = candidate.avatar;
        name.textContent = candidate.name;
        email.textContent = candidate.email;
        education.textContent = candidate.education;
        dateOfBirth.textContent = getDate(candidate.birthday);
    }

    function getDate(dateOfBirth) {
        var date = new Date(dateOfBirth);
        
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ".";
    }

    return {
        displaySingleCandidate: displaySingleCandidate
    }

})()