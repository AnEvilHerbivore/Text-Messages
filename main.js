const messArt = document.querySelector("#messages");




function createArray(messages) {
    const newArray = messages.split(";");
    return newArray
}


function makeFragment (inArray) {
    const newFragment = document.createDocumentFragment()
    inArray.forEach(element => {
        let newSec = document.createElement("section");
        newSec.textContent = element;
        newSec.classList = "message";

        newFragment.appendChild(newSec);
    })
    return newFragment;
}

const messArray = createArray("Hi;Hello;How are you?;Good.;Glad to hear it.");

const fragment = makeFragment(messArray);

messArt.appendChild(fragment);