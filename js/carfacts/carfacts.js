document.getElementById("carType").addEventListener("change", function() {
    var carType = this.value;
    var carBrandSelect = document.getElementById("carBrand");
    var carModelSelect = document.getElementById("carModel");
    var carInfoParagraph = document.getElementById("carInfo");
    carBrandSelect.innerHTML = ""; 
    carModelSelect.innerHTML = ""; 

    
    fetch("json/carfacts/carfacts.json")
    .then(response => response.json())
    .then(data => {
        var brands = Object.keys(data[carType]);
        brands.forEach(brand => {
            var option = document.createElement("option");
            option.text = brand;
            option.value = brand;
            carBrandSelect.add(option);
        });

    
        carBrandSelect.addEventListener("change", function() {
            var selectedBrand = this.value;
            var models = Object.keys(data[carType][selectedBrand]);
            carModelSelect.innerHTML = ""; 

            models.forEach(model => {
                var option = document.createElement("option");
                option.text = model;
                option.value = model;
                carModelSelect.add(option);
            });

    
            carModelSelect.addEventListener("change", function() {
                var selectedModel = this.value;
                carInfoParagraph.innerText = data[carType][selectedBrand][selectedModel];
            });
        });
    })
    .catch(error => console.error('Error fetching car info:', error));
});
