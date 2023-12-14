const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td');
    let number = i * 10 + j;
    cell.textContent = number;
    cell.classList.add('js-table-cell');
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.getElementById('js-table').appendChild(table);
