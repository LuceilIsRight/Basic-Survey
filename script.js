const form = document.getElementById('survey-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData) {
    data[key] = value;
  }

  const dataString = JSON.stringify(data, null, 2);

  // Create a blob with the data
  const blob = new Blob([dataString], { type: 'text/plain' });

  // Create a link to download the file
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'survey_data.txt';
  a.click();

  // Alternatively, you can store the data in a text file on the server-side
  // using a server-side language like Node.js, PHP, or Python.
});
