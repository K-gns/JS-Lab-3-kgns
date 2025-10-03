/**
 * Проверка корректности скобочной последовательности
 * @param {string} str - Строка для проверки
 * @returns {boolean} - true если скобки корректны, false иначе
 */
function isValidBrackets(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Если это открывающая скобка - добавляем в стек
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }

        // Если это закрывающая скобка
        else if (char === ')' || char === ']' || char === '}') {
            // Проверяем, есть ли что-то в стеке
            if (stack.length === 0) {
                return false;
            }

            // Достаём последнюю открывающую скобку
            const top = stack.pop();

            // Проверяем соответствие для каждого типа
            if (char === ')' && top !== '(') {
                return false;
            }
            if (char === ']' && top !== '[') {
                return false;
            }
            if (char === '}' && top !== '{') {
                return false;
            }
        }

        // Остальные символы игнорируем
    }

    return stack.length === 0;
}

console.log('{[}]:', isValidBrackets('{[}]'));
console.log('{[]}:', isValidBrackets('{[]}'));
console.log('(():', isValidBrackets('(()'));