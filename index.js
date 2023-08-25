const inputEl = document.querySelector('input'),
      buttonEl = document.querySelector('button'),
      timerEl = document.querySelector('span');

// Переменная для отмены setInterval, когда кол-во секунд будет 0
let clearIn;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (sec) => {
  
  return (seconds) => {
    clearIn = setInterval(()=> {
            // Получаем кол-во часов
      const hours = Math.floor(seconds / 3600),
          // Получаем кол-во одного часа
          minute = Math.floor(seconds / 60) % 60,
          // Получаем кол-во секунд одной минуты
          second = seconds % 60;

      // Выводим данные на страницу, добавляем впереди ноль, если часы, минуты или секунды меньше 10
      timerEl.innerHTML = `${hours < 10 ? '0' + hours : hours} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`
      seconds--
      // Останавливаем setInterval, когда кол-во секунд 0
      seconds < 0 ? (clearInterval(clearIn), console.log('Finished')) : seconds
    }, 1000)
    
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  clearInterval(clearIn)
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);

  inputEl.value = '';
});

