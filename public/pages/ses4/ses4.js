let box = document.getElementById("box");

getWeeks(4);

async function getWeeks() {
  const response = await fetch(
    `/ses/4`
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

    subtitel.textContent = entry.subTitle;
    box.appendChild(subtitel);
    let text = document.createElement("p");
    text.textContent = entry.text;
    box.appendChild(text);

    //tilføjer billede
    const image = document.createElement("img");
    image.src = entry.imageUrl;
    box.appendChild(image);
  });
}
