function chunkString(str, chunkLength) {

    if (str === null) {
        return [];
    }

    let result = [];

    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}


function createChunks() {

    let str = document.getElementById("inputString").value;

    let chunkLength = Number(
        document.getElementById("chunkLength").value
    );

    let result = document.getElementById("result");

    // Check chunk length
    if (chunkLength <= 0) {
        result.textContent = "Please enter a valid chunk length.";
        return;
    }

    let chunks = chunkString(str, chunkLength);

    result.textContent = JSON.stringify(chunks);
}