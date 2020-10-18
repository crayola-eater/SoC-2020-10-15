import { createTable } from "./table.js";

{
  const columns = [{ name: "name" }, { name: "bootcamp" }].map((o, i) => {
    o.headerFunc = (h) => h[0].toUpperCase() + h.slice(1);
    o.columnIndex = i;
    return o;
  });
  const screen = document.querySelector("main.container");

  const getSessions = async () => {
    const response = await fetch("/api/participants");
    const { payload: data } = await response.json();

    screen.innerHTML = "";
    screen.appendChild(createTable(data, columns));
  };

  // Add listener for search box.

  const els = {
    input: document.querySelector("#search-for-participants"),
    buttonByName: document.querySelector("#search-by-name"),
    buttonByBootcamp: document.querySelector("#search-by-bootcamp"),
  };

  els.buttonByName.addEventListener("click", async () => {
    console.log("About to search by name");
    const partialName = els.input.value.trim();
    screen.textContent = "Getting data, please wait...";

    // It's inefficient to re-request the data each time from the server.
    // But can do it this way for now.
    const response = await fetch(
      `/api/participants?name=${encodeURIComponent(partialName)}`
    );
    const { payload: data } = await response.json();
    screen.innerHTML = "";
    screen.appendChild(createTable(data, columns));
  });

  els.buttonByBootcamp.addEventListener("click", async () => {
    console.log("About to search by bootcamp");
    const bootcamp = els.input.value.trim();
    screen.textContent = "Getting data, please wait...";

    // It's inefficient to re-request the data each time from the server.
    // But can do it this way for now.
    const response = await fetch(
      `/api/participants?bootcamp=${encodeURIComponent(bootcamp)}`
    );
    const { payload: data } = await response.json();
    screen.innerHTML = "";
    screen.appendChild(createTable(data, columns));
  });

  getSessions();
}
