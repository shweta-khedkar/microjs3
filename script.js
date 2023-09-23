function createTable(data) {
    var table = document.getElementById("myTable");

    // Clear the existing table content
    table.innerHTML = '';

    // Create table header row
    var headerRow = document.createElement("tr");
    for (var key in data[0]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Create table rows based on JSON data
    for (var i = 0; i < data.length; i++) {
        var dataRow = document.createElement("tr");
        for (var key in data[i]) {
            var cell = document.createElement("td");
            cell.textContent = data[i][key];
            dataRow.appendChild(cell);
        }
        table.appendChild(dataRow);
    }
}

function allItems(){
    
    const allItems=data.map((item)=>{
        return({
            item
        });
    });

     createTable(data);
     
    }
    function vegcategory(){
       
        let vegetable=data.filter(item=>item.category==='Vegetable');
        createTable(vegetable);
        
    }
    function fruitf(){
        let fruit=data.filter(item=>item.category==='Fruit');
       createTable(fruit);
    }
    function proteinf(){
        let protein=data.filter(item=>item.category==='Protein');
        createTable(protein);
    }
    function nutsf(){
        let nuts=data.filter(item=>item.category==='Nuts');
       createTable(nuts);
        
    }
    function grainf(){
        let grains=data.filter(item=>item.category==='Grain');
        createTable(grains);
    }

    function dairyf(){
        let dairy=data.filter(item=>item.category==='Dairy');
        createTable(dairy)
    }
    
    function calories100f(){
        let caloriesa=data.filter(item=>item.calorie>100);
   createTable(caloriesa)
    
    }
    function calories0f(){
    let caloriesb=data.filter(item=>item.calorie<100);
    createTable(caloriesb);
    }
    function htlp(){
    let hightolowprotiens=data.sort((a,b)=>b.protiens-a.protiens);
    createTable(hightolowprotiens);
    }
    
    function lthc(){
    let lthp=data.sort((a,b)=>a.cab-b.cab);
   createTable(lthp);
    }
    

// Fetch JSON data from an external file
fetch('food.json')
    .then(response => response.json())
    .then(data => {
        // Store the fetched data in a variable
        window.data = data;
        
        // Create the initial table with all data
        createTable(data);
    })
    .catch(error => console.error('Error fetching JSON data:', error));