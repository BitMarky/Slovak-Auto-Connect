// AJAX function to fetch JSON data
function fetchJson(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        callback(jsonData);
      }
    };
    xhr.send();
  }
  
  // Function to populate country dropdown
  function populateCountryDropdown(data) {
    var countrySelect = document.getElementById("country");
    countrySelect.innerHTML = '<option value="">Please select</option>'; // Reset dropdown
  
    for (var country in data) {
      var option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    }
  }
  
  // Function to populate region dropdown based on selected country
  function populateRegionDropdown(data, country) {
    var regionSelect = document.getElementById("province");
    regionSelect.innerHTML = '<option value="">Please select</option>'; // Reset dropdown
  
    var regions = data[country];
    for (var region in regions) {
      var option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    }
  }
  
  // Function to populate city dropdown based on selected region
  function populateCityDropdown(data, country, region) {
    var citySelect = document.getElementById("city");
    citySelect.innerHTML = '<option value="">Please select</option>'; // Reset dropdown
  
    var cities = data[country][region];
    cities.forEach(function (city) {
      var option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
  
  // Event listeners for dropdown changes
  document.getElementById("country").addEventListener("change", function () {
    var selectedCountry = this.value;
    fetchJson('/json/organizators_json/form.json', function (data) {
      if (selectedCountry) {
        populateRegionDropdown(data, selectedCountry);
        document.getElementById("province").dispatchEvent(new Event("change")); // Trigger region change
      }
    });
  });
  
  document.getElementById("province").addEventListener("change", function () {
    var selectedCountry = document.getElementById("country").value;
    var selectedRegion = this.value;
    fetchJson('/json/organizators_json/form.json', function (data) {
      if (selectedCountry && selectedRegion) {
        populateCityDropdown(data, selectedCountry, selectedRegion);
      }
    });
  });
  
  // Initialize the country dropdown on page load
  document.addEventListener("DOMContentLoaded", function () {
    fetchJson('/json/organizators_json/form.json', populateCountryDropdown);
  });
  