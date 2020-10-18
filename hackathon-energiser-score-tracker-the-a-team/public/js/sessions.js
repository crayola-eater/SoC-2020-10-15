import { createTable } from "./table.js";

{
  const columns = [
    { name: "date", valueFunc: (d) => d.slice(0, 10) },
    { name: "name" },
    { name: "points" },
    { name: "bootcamp" },
    { name: "energiser" },
    { name: "category" },
  ].map((o, i) => {
    o.headerFunc = (h) => h[0].toUpperCase() + h.slice(1);
    o.columnIndex = i;
    return o;
  });

  const screen = document.querySelector("main.container");

  const getSessions = async () => {
    const response = await fetch("/api/sessions");
    const { payload: data } = await response.json();

    screen.innerHTML = "";
    screen.appendChild(createTable(data, columns));
  };

  // Add listener for search box.
  const input = document.querySelector("#search-by-energiser-name");
  input.addEventListener("change", async (e) => {
    const partialEnergiserName = e.target.value.trim();

    if (!partialEnergiserName) {
      // return;
    }

    screen.textContent = "Getting data, please wait...";

    // It's inefficient to re-request the data each time from the server.
    // But can do it this way for now.
    const response = await fetch(
      `/api/sessions?energiser=${encodeURIComponent(partialEnergiserName)}`
    );
    const { payload: data } = await response.json();

    screen.innerHTML = "";
    screen.appendChild(createTable(data, columns));
  });

  getSessions();
}
