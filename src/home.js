const content = document.querySelector("#content");
const title = document.createElement("div");
const schedule = document.createElement("div");
const location = document.createElement("div");

title.classList = "title";
schedule.classList = "schedule";
location.classList = "location";

title.textContent = "The Stardrop Saloon";
schedule.textContent = "12:00pm to 12:00am";
location.textContent = "Center of Pelican Town";

function renderHome() {
    content.replaceChildren();
    content.appendChild(title);
    content.appendChild(schedule);
    content.appendChild(location);
}

export default renderHome;