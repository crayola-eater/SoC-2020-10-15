const controls = [{ name: "Filter" }, { name: "Sort" }];

const createTableHead = (columns) => {
  const thead = document.createElement("thead");

  const headerRow = document.createElement("tr");
  headerRow.classList.add("header-row");
  headerRow.append(
    ...columns.map(({ name, headerFunc }) => {
      const th = document.createElement("th");
      th.classList.add("header", "cell");

      // Header text el
      const span = document.createElement("span");
      span.textContent =
        "function" === typeof headerFunc ? headerFunc(name) : name;

      // // Controls
      // const controlsContainer = document.createElement("div");
      // controlsContainer.append(
      //   ...controls.map((control) => {
      //     const button = document.createElement("button");
      //     button.classList.add("control");
      //     button.textContent = control.name;
      //     return button;
      //   })
      // );

      th.append(span /*, controlsContainer*/);

      return th;
    })
  );

  thead.append(headerRow);
  return thead;
};

const createTableBody = (data, columns) => {
  const tbody = document.createElement("tbody");
  const bodyRows = data.map((row) => {
    const tr = document.createElement("tr");
    tr;

    tr.append(
      ...columns.map(({ name, valueFunc }) => {
        const td = document.createElement("td");
        td.textContent =
          "function" === typeof valueFunc ? valueFunc(row[name]) : row[name];
        td.classList.add("cell");
        return td;
      })
    );
    return tr;
  });
  tbody.append(...bodyRows);
  return tbody;
};

export const createTable = (data, columns) => {
  const table = document.createElement("table");
  table.classList.add("main-data", "sortable");

  table.append(
    // thead
    createTableHead(columns),
    // tbody
    createTableBody(data, columns)
  );

  sorttable.makeSortable(table);

  return table;
};
