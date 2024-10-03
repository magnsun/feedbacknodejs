const fs = require('CLient/fsReading');

console.log("Starter læsning af fil...");

// Læs en fil asynkront
fs.readFile('dit.txt', 'utf8', function(err, data) {

    if (err) {
        return console.log(err);
    }
    console.log("Filens indhold: " + data);
});

console.log("Denne besked vises, før filen er læst færdig.");