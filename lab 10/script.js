function generateCourseInfo(course) {
    const correctKeys = ['courseName', 'courseDuration', 'courseOwner'];
    const courseKeys = Object.keys(course);

    for (let key of courseKeys) {
        if (!correctKeys.includes(key)) {
            throw new Error(`Invalid ,Only courseName, courseDuration, and courseOwner are allowed. ${key} is not allowed.`);
        }
    }

    return `Course Name: ${course.courseName}, Duration: ${course.courseDuration}, Owner: ${course.courseOwner}`;
}

var xhr = new XMLHttpRequest();
    xhr.open("GET", "rockbands.json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var rockBands = JSON.parse(xhr.responseText);
            dropdown(rockBands);
        }
    };
    xhr.send();
    
function dropdown(rockBands) {
    const bandSelect = document.getElementById("band");
    const artistSelect = document.getElementById("artist");

    for (let band in rockBands) {
        let option = document.createElement("option");
        option.value = band;
        option.textContent = band.charAt(0).toUpperCase() + band.slice(1);
        bandSelect.appendChild(option);
    }

    bandSelect.addEventListener("change", function() {
        artistSelect.innerHTML = '<option value="">-------------</option>';

        let selectedBand = bandSelect.value;

        if (selectedBand) {
            let artists = rockBands[selectedBand];
            artists.forEach(artist => {
                let option = document.createElement("option");
                option.value = artist.value;
                option.textContent = artist.name;
                artistSelect.appendChild(option);
            });
        }
    });

    artistSelect.addEventListener("change", function() {
        let selectedUrl = artistSelect.value;
        
        if (selectedUrl) {
            window.open(selectedUrl);
        }
    });
}

