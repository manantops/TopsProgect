ProjectsNumber = setInterval(ProjectsSet);
upto = 0;
function ProjectsSet() {
    var count = document.getElementById("counat_number_02");
    count.innerHTML = ++upto;
    if (upto == 250) {
        clearInterval(ProjectsNumber);
    }
}

ComplaintsNumber = setInterval(ComplaintsSet);
upto = 0;
function ComplaintsSet() {
    var count = document.getElementById("counat_number_03");
    count.innerHTML = ++upto;
    if (upto == 200) {
        clearInterval(ComplaintsNumber);
    }
}

MembersNumber = setInterval(MembersSet);
upto = 0;
function MembersSet() {
    var count = document.getElementById("counat_number_01");
    count.innerHTML = ++upto;
    if (upto == 150) {
        clearInterval(MembersNumber);
    }
}






