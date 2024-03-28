### Hexlet tests and linter status:
[![Actions Status](https://github.com/ElenaSamosudova/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ElenaSamosudova/frontend-project-44/actions)


Установка пакета игр:
1. Создаем новую директорию командой touch brainProject
2. Переходим в новую созданную директорию командой cd brainProject
3. Копируем в нее проект командой git clone git@github.com:ElenaSamosudova/frontend-project-44.git
4. Устанавливаем проект командой npm install
5. Запускаем игру. Для запуска игры используем команды:
Проверка на четность - make even
Калькулятор - make calc
Наибольший общий делитель - make gcd
Арифметическая прогрессия - make progression
Простое число - make prime

Описание игр:
1. Игра "Проверка на чётность" - bin/brain-even.js.
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

Пример:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!

[![asciicast](https://asciinema.org/a/esocPOxddvKbwfWpER7aQFW09.svg)](https://asciinema.org/a/esocPOxddvKbwfWpER7aQFW09)

2. Игра "Калькулятор" - bin/brain-calc.js. Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Пример:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!

[![asciicast](https://asciinema.org/a/F9geCmWBATXPVJih6n3Q2HCet.svg)](https://asciinema.org/a/F9geCmWBATXPVJih6n3Q2HCet)

3. Игра "наибольший общий делитель (НОД)" - bin/brain-gcd.js. Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Пример:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

[![asciicast](https://asciinema.org/a/hzMQwNBPYcFxv8eM3bQZUcYos.svg)](https://asciinema.org/a/hzMQwNBPYcFxv8eM3bQZUcYos)

4. Игра "Арифметическая прогрессия" - bin/brain-progression.js.

Пример:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!

[![asciicast](https://asciinema.org/a/DIhleMsNwCEEzPuwxlhDrc9um.svg)](https://asciinema.org/a/DIhleMsNwCEEzPuwxlhDrc9um)

5. Игра "Простое число" - bin/brain-prime.js. 

Пример:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!

[![asciicast](https://asciinema.org/a/IT3RdGWYuxOGbbNMB01b4e27W.svg)](https://asciinema.org/a/IT3RdGWYuxOGbbNMB01b4e27W)



[![Maintainability](https://api.codeclimate.com/v1/badges/4519834c0908d67ff2c7/maintainability)](https://codeclimate.com/github/ElenaSamosudova/frontend-project-44/maintainability)