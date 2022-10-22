let box = document.getElementById("box");

getWeeks(0);

async function getWeeks(weeksId) {
  const response = await fetch(
    // `/ses/1`
    `/ses/${(weeksId)}`
  );
  const weeks = await response.json();

  console.log(response);

  let titel = document.createElement("h1");
  titel.textContent = weeks.data.title;
  box.appendChild(titel);

  weeks.data.subEntries.forEach((entry) => {   
   
    let subtitel = document.createElement("h3");
    subtitel.id = entry.subEntriesId;
//^gør det samme som det her oppe i navbar + addeventlistener 

    subtitel.textContent = entry.subTitle;
   box.appendChild(subtitel);
    let text = document.createElement("p");
    text.textContent = entry.text;
    box.appendChild(text); 
  });
}
