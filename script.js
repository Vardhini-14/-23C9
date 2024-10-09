document.getElementById("sortButton").addEventListener("click", function() {
    const input = document.getElementById("arrayInput").value.trim();
    
    // Handle empty input
    if (input === "") {
        alert("Please enter numbers separated by commas.");
        return;
    }
    
    // Convert input string to an array of numbers
    const array = input.split(',').map(Number);
    
    // Check for valid input
    if (array.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    // Perform quick sort
    quickSort(array, 0, array.length - 1);

    // Display sorted array
    document.getElementById("output").textContent = array.join(', ');
});

// Quick Sort Implementation
function quickSort(arr, low, high) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = (low - 1);
    
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  // Swap with pivot
    return (i + 1);
}
