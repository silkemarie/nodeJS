let box = document.getElementById("box");

//eventlistener + få den i linje 5 

getWeeks(2);

async function getWeeks() {
  const response = await fetch(
    `/ses/2`
    //`/ses/${(weeksId)}`
  );
  const weeks = await response.json();

  console.log(response);
  console.log(weeks.data.title);

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
