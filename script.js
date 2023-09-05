function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var convertedValue;

    // Convert from centimeter
    if (fromUnit === "cm") {
        if (toUnit === "inch") {
            convertedValue = inputValue / 2.54;
        } else if (toUnit === "m") {
            convertedValue = inputValue / 100;
        } else if (toUnit === "km") {
            convertedValue = inputValue / 100000;
        } else {
            convertedValue = inputValue;
        }
    }
    // Convert from inch
    if (fromUnit === "inch") {
        if (toUnit === "cm") {
            convertedValue = inputValue * 2.54;
        } else if (toUnit === "m") {
            convertedValue = inputValue * 0.0254;
        } else if (toUnit === "km") {
            convertedValue = inputValue * 0.0000254;
        } else {
            convertedValue = inputValue;
        }
    }

    // Convert from meter
    if (fromUnit === "m") {
        if (toUnit === "cm") {
            convertedValue = inputValue * 100;
        } else if (toUnit === "inch") {
            convertedValue = inputValue * 39.37;
        } else if (toUnit === "km") {
            convertedValue = inputValue * 0.001;
        } else {
            convertedValue = inputValue;
        }
    }

    // Convert from kilometer
    if (fromUnit === "km") {
        if (toUnit === "cm") {
            convertedValue = inputValue * 100000;
        } else if (toUnit === "inch") {
            convertedValue = inputValue * 39370.1;
        } else if (toUnit === "m") {
            convertedValue = inputValue * 1000;
        } else {
            convertedValue = inputValue;
        }
    }

    document.getElementById("outputValue").value = convertedValue;
}

function reset() {
    document.getElementById("inputValue").value = "";
    document.getElementById("outputValue").value = "";
}

function cancel() {
    reset();
    document.getElementById("fromUnit").value = "cm";
    document.getElementById("toUnit").value = "cm";
}
