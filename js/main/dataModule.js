
var dataModule = (function() {

    function Candidate(person) {
        this.id = person.id;
        this.name = person.name;
        this.birthday = person.birthday;
        this.email = person.email;
        this.education = person.education;
        this.avatar = person.avatar;
    }

    function createCandidate(list) {
        var candidateList = [];
        list.forEach(function (candidate, index) {
            candidateList[index] = new Candidate(candidate);
        });
        return candidateList;
    }

    return {
        candidate: Candidate,
        createCandidate: createCandidate
    }
})()