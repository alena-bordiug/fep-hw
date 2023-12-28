document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('main-form');
  const userData = document.getElementById('user-data');
  const dataTable = document.getElementById('data-table');
  const closeBtn = document.getElementById('close-btn');

  document.getElementById('submit-btn').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const secondName = document.getElementById('secondName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;

    const languages = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach(function (checkbox) {
        languages.push(checkbox.name);
      });

    const tableContent = `
      <table>
        <tr>
          <td>First Name:</td>
          <td>${firstName}</td>
        </tr>
        <tr>
          <td>Second Name:</td>
          <td>${secondName}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>${gender}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>${city}</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>${address}</td>
        </tr>
        <tr>
          <td>Languages:</td>
          <td>${languages.join(', ')}</td>
        </tr>
      </table>
    `;

      dataTable.innerHTML = tableContent;
      dataTable.classList.add('table')
    form.classList.add('d-none');
    userData.classList.remove('d-none');
  });

  closeBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('d-none');
    userData.classList.add('d-none');
  });
});

