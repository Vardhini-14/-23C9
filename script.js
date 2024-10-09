document.getElementById("sortButton").addEventListener("click", function() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    quickSort(array, 0, array.length - 1);

    document.getElementById("output").textContent = array.join(', ');
});

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}