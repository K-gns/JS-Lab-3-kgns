/**
 * Сортировка вставками
 * @param {Array} arr - Массив для сортировки
 * @param {string} direction - Направление сортировки: 'asc' или 'desc'
 * @returns {Array} - Отсортированный массив
 */
function insertionSort(arr, direction = 'asc') {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        // Сравниваем и сдвигаем элементы в зависимости от direction
        if (direction === 'asc') {
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
        } else {
            while (j >= 0 && arr[j] < key) {
                arr[j + 1] = arr[j];
                j--;
            }
        }

        // Вставляем элемент на нужную позицию
        arr[j + 1] = key;
    }

    return arr;
}

// Временная сложность:
// Средний случай: O(n²) - в среднем примерно n²/4 сравнений
// Лучший случай: O(n) - когда массив уже отсортирован, цикл выполняется минимальное количество раз

//  Сложность по памяти:
// O(1) - константная память, меняем исходный массив

// Примеры использования
const numbers = [66, 33, 22, 44, 11, 77, 99];
console.log('Исходный массив:', [...numbers]);

const numbers1 = [...numbers]
insertionSort(numbers1, 'asc');
console.log('Сортированный по возрастанию:', numbers1);

const numbers2 = [...numbers]
insertionSort(numbers2, 'desc');
console.log('Сортированный по убыванию:', numbers2);