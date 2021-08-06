// Business Logic for Visited Places ---------
function VisitedPlaces() {
    this.VisitedPlaces = {};
    this.currentId = 0;
}

VisitedPlace.prototype.addPlace = function (VisitedPlace) {
    place.id = this.assignId();
    this.places[contact.id] = place;
};

VisitedPlace.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

VisitedPlace.prototype.findPlace = function (id) {
    if (this.places[id] != undefined) {
        return this.places[id];
    }
    return false;
};

VisitedPlace.prototype.deletePlace = function (id) {
    if (this.places[id] === undefined) {
        return false;
    }
    delete this.places[id];
    return true;
};

// Business Logic for Places ---------
function Place(location, landmark, timeOfYear, notes) {
    this.location = location;
    this.landmark = landmark;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

Place.prototype.locationLandmark = function () {
    return this.location + " " + this.landmark;
};

// User Interface Logic ---------
let visitedPlace = new VisitedPlace();

function displayPlaceDetails(visitedPlaceToDisplay) {

    let placesList = $("ul#places");
    let htmlForPlaceInfo = "";
    Object.keys(visitedPlaceToDisplay.places).forEach(function (key) {
        const place = visitedPlaceToDisplay.findPlace(key);
        htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + " " + place.location + "</li>";
    });
    placesList.html(htmlForPlaceInfo);
}
function showPlace(placeId) {
    const place = visitedPlace.findPlace(placeId);
    $("#show-place").show();
    $(".location").html(place.location);
    $(".landmark").html(place.landmark);
    $(".timeOfYear").html(place.timeOfYear);
    $(".notes").html(place.notes);
    let buttons = $("#buttons");
    buttons.empty();
    // buttons.append("<button class='deleteButton' id=" + + contact.id + 
    ">Delete</button>");
    buttons.append("<button class='deleteButton' id='+ contact.id +'>Done</button>");

}

function attachPlaceListeners() {
    $("ul#places").on("click", "li", function () {
        showPlace(this.id);     // <--- This is new!
    });
    // Code below here is new!
    $("#buttons").on("click", ".deleteButton", function () {
        visitedPlace.deletePlace(this.id);
        $("#show-place").hide();
        displayPlaceDetails(visitedPlace);
    });
}

$(document).ready(function () {
    attachPlaceListeners();
    $("form#new-place").submit(function (event) {
        event.preventDefault();
        const inputtedlocation = $("input#new-location").val();
        const inputtedlandmark = $("input#new-landmark").val();
        const inputtedtimeOfYear = $("input#new-timeOfYear").val();
        const inputtednotes = $("input#new-notes").val();
        // The next three lines are new:
        $("input#new-location").val("");
        $("input#new-last-name").val("");
        $("input#new-timeOfYear").val("");
        $("input#new-notes").val("");
        let newPlace = new Place(inputtedlocation, inputtedlandmark,
            inputtedtimeOfYear, inputtednotes);
        visitedPlace.addPlace(newPlace);
        displayPlaceDetails(visitedPlace);
    });
});












































// function showContact(contactId) {
    // const contact = addressBook.findContact(contactId);
    // $("#show-contact").show();
    // $(".first-name").html(contact.firstName);
    // $(".last-name").html(contact.lastName);
    // $(".phone-number").html(contact.phoneNumber);
    // let buttons = $("#buttons");
    // buttons.empty();
    // buttons.append("<button class='deleteButton' id=" + + contact.id +
        // ">Delete</button>");
// }





























































// // Business Logic
// function PlaceVisited(location, landmark, time, notes) {
//     this.location = location;
//     this.landmark = landmark;
//     this.time = time;
//     this.notes = notes;
// }

// PlaceVisited.prototype.display = function () {
//     return this.location;
// };

// PlaceVisited.prototype.whatToDisplayUl = function () {
//     let whatToDisplay = this.location + " " + this.landmark + " " + this.time + " " + this.notes
//     return whatToDisplay;


// };


// //User Interface Logic

// $(document).ready(function () {
//     $("form#word-counter").submit(function (event) {
//         event.preventDefault();
//         let location = $("#location").val();
//         let landmark = $("#landmark").val();
//         let time = $("#time").val();
//         let notes = $("#notes").val();
//     })
// })