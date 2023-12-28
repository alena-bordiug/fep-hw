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
    const languages = getCheckboxValue();
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
    dataTable.classList.add('table');
    form.classList.add('d-none');
    userData.classList.remove('d-none');
  });

  closeBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('d-none');
    userData.classList.add('d-none');
  });
});

function getCheckboxValue() {
  const languagesCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  const checkboxValue = [];

  if (languagesCheckbox.length === 0) {
    checkboxValue.push('No languages checked');
  } else {
    languagesCheckbox.forEach((checkbox) => {
      checkboxValue.push(checkbox.value);
    });
  }
  console.log(checkboxValue);
  return checkboxValue;
}