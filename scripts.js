function calculateAspectRatio() {
    // Get input values
    const width1 = parseFloat(document.getElementById('widthInput1').value);
    const height1 = parseFloat(document.getElementById('heightInput1').value);
    const width2 = parseFloat(document.getElementById('widthInput2').value);
    const height2 = parseFloat(document.getElementById('heightInput2').value);

    // Check if one set of dimensions is fully specified
    if ((width1 && height1 && width1 > 0 && height1 > 0) && (width2 && width2 > 0)) {
        // Calculate corresponding height for width2 to maintain aspect ratio
        const aspectRatio = height1 / width1;
        const height2Calculated = aspectRatio * width2;

        // Display the calculated height
        const resultElement = document.getElementById('result');
        resultElement.textContent = `For ${width2} width at ${width1}:${height1} aspect ratio, height should be ${height2Calculated.toFixed(2)}`;
    } else if ((width2 && height2 && width2 > 0 && height2 > 0) && (width1 && width1 > 0)) {
        // Calculate corresponding height for width1 to maintain aspect ratio
        const aspectRatio = height2 / width2;
        const height1Calculated = aspectRatio * width1;

        // Display the calculated height
        const resultElement = document.getElementById('result');
        resultElement.textContent = `For ${width1} width at ${width2}:${height2} aspect ratio, height should be ${height1Calculated.toFixed(2)}`;
    } else {
        // Display error message if input values are invalid or incomplete
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Please enter valid width and height values for one set of dimensions.';
    }
}

