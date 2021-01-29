let acc = document.getElementsByClassName("accordion");

function openAcc(activeIndex) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].classList.remove("active");
        let panel = acc[i].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }

    }

    acc[activeIndex].classList.toggle("active");
    let panel = acc[activeIndex].nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}



let dummyTextCollection = document.getElementsByClassName('dummyText')

for (let i = 0; i < dummyTextCollection.length; i++) {
    dummyTextCollection[i].innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
function openTab(evt, tabName) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = "block";
    if(evt){
    evt.currentTarget.classList.add('active');
    }else{
        tablinks[0].classList.add('active');
    }
}


openTab(null,'care');
