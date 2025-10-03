/**
* Бинарный поиск
* @param {Array} arr - Отсортированный массив
* @param {*} target - Искомый элемент
* @returns {number} - Индекс элемента или -1, если не найден
*/
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let step = 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        step++;
    }

    return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
console.log("Отсортированный массив:", [...sortedArray])

const index = binarySearch(sortedArray, 9);
console.log(index > 0 ? `Найдено на позиции ${index}` : "Элемент не найден" )
