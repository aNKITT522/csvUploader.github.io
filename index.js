// Event listener for submit button
document.getElementById('submitInput').addEventListener('click', function() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    // fileInput.files[0].id=0;
    // fileArray.push(file);
        const node = document.createElement("li");
        let fileDiv = document.createElement("div");
        fileDiv.setAttribute("id","fileDiv");
        // const fileName = file.name;
        // const textnode = document.createTextNode(file.name);
        const textnode = document.getElementById('csvFileInput');
        const fileNode = document.createTextNode(textnode.files[0].name)
        fileDiv.appendChild(fileNode);

        const buttonOpen = document.createElement("button");
        buttonOpen.setAttribute("id", "openButton");
        buttonOpen.textContent="Open";
        buttonOpen.setAttribute("target","_blank")
        buttonOpen.setAttribute("href","#");

        buttonOpen.addEventListener("click",() => handleFileSelect(file))//..openButton
        
        fileDiv.appendChild(buttonOpen);

        node.appendChild(fileDiv);
        document.getElementById("fileList").appendChild(node);
    // Perform further operations with the file
    if (file) {
      console.log('Selected file:', file.name);
      console.log('File type:', file.type);
      console.log('File size:', file.size);
    } else {
      console.log('No file selected');
    }
  });


  // document.getElementById('csv-file').addEventListener('change', handleFileSelect);

const  handleFileSelect = (file) => {
    console.log(file);
const reader = new FileReader();

reader.onload = function(event) {
  const csvData = event.target.result;
  console.log(csvData);
  const table = createTable(csvData);

  document.getElementById('table-container').innerHTML = '';
  document.getElementById('table-container').appendChild(table);


};

reader.readAsText(file);

}

///////////-------------------------------//////////////
function createTable(csvData) {
const rows = csvData.split('\n');
const table = document.createElement('table');

rows.forEach(function(row) {
  const cells = row.split(',');
  const tableRow = document.createElement('tr');

  cells.forEach(function(cell) {
    const tableCell = document.createElement('td');
    tableCell.textContent = cell.trim();
    tableRow.appendChild(tableCell);
  });

  table.appendChild(tableRow);
});

return table;
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.trim();
    filterTableRows(searchValue);
  });
// Filter table rows based on the search value
  function filterTableRows(searchValue) {
    const table = document.querySelector('#table-container table');
    const rows = table.querySelectorAll('tr');
  
    rows.forEach(function(row, rowIndex) {
      if (rowIndex === 0) {
        // Skip the header row
        return;
      }
  
      const cells = row.querySelectorAll('td');
      let matched = false;
  
      cells.forEach(function(cell) {
        const cellValue = cell.textContent.toLowerCase();
  
        if (cellValue.includes(searchValue.toLowerCase())) {
          matched = true;
        }
      });
  
      if (matched) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  

