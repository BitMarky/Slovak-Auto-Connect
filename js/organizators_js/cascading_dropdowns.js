// Function to fetch JSON data
function fetchJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonData = JSON.parse(xhr.responseText);
      callback(jsonData);
    }
  };
  xhr.send();
}

// Functions to populate dropdowns
function populateCountryDropdown(data) {
  const countrySelect = document.getElementById("country");
  countrySelect.innerHTML = '<option value="">Please select</option>';

  for (const country in data) {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  }
}

function populateRegionDropdown(data, country) {
  const regionSelect = document.getElementById("province");
  regionSelect.innerHTML = '<option value="">Please select</option>';

  const regions = data[country];
  for (const region in regions) {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  }
}

function populateCityDropdown(data, country, region) {
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = '<option value="">Please select</option>';

  const cities = data[country][region];
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

// Event listeners for dropdown changes
document.getElementById("country").addEventListener("change", function () {
  const selectedCountry = this.value;
  fetchJson('/json/organizators_json/form.json', (data) => {
      if (selectedCountry) {
          populateRegionDropdown(data, selectedCountry);
          document.getElementById("province").dispatchEvent(new Event("change"));
      }
  });
});

document.getElementById("province").addEventListener("change", function () {
  const selectedCountry = document.getElementById("country").value;
  const selectedRegion = this.value;
  fetchJson('/json/organizators_json/form.json', (data) => {
      if (selectedCountry && selectedRegion) {
          populateCityDropdown(data, selectedCountry, selectedRegion);
      }
  });
});

// Initialize country dropdown on page load
document.addEventListener("DOMContentLoaded", function () {
  fetchJson('/json/organizators_json/form.json', populateCountryDropdown);
});
