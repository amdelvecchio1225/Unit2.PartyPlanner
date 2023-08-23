const eventList = document.getElementById("list");
const submitButton = document.getElementById("submit");
const form = document.getElementById("form");

async function getEvent() {
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ET-WEB-FT-SF/events', {
            method: 'GET'
        });
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error(error.message);
    }
}

function createElement(data) {
    const elem = document.createElement("li");
    eventList.appendChild(elem);
    const newElem = {
        name: data.name,
        description: data.description,
        date: data.date,
        location: data.location
    }
    console.log(newElem);
    elem.append(newElem.name, " ---- ", newElem.description, " ---- ", newElem.date, " ---- ", newElem.location);
}

getEvent().then((reponse) => {
    reponse.data.forEach((i) => createElement(i));
})