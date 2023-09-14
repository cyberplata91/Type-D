// Array de palabras para el juego
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];
  
  let palabraAleatoria = '';
  let time = 10;
  let score = 0;
  
  // Función para obtener una palabra aleatoria
  function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  // Función para agregar una palabra aleatoria al DOM
  function addToDOM() {
    palabraAleatoria = randomWords();
    document.getElementById('randomWord').textContent = palabraAleatoria;
  }
  
  // Evento de tipo input
  document.getElementById('text').addEventListener('input', function (e) {
    const palabraIngresada = e.target.value.trim();
  
    if (palabraIngresada === palabraAleatoria) {
      time += 3; // Aumenta el tiempo en 3 segundos
      e.target.value = ''; // Limpia el input
      addToDOM(); // Agrega una nueva palabra aleatoria
      updateScore(); // Incrementa la puntuación
    }
  });
  
  // Función para actualizar el tiempo
  function actualizarTiempo() {
    time--;
    document.getElementById('timeSpan').textContent = time + 's';
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  // Iniciar el intervalo para actualizar el tiempo (cada 1 segundo)
  let timeInterval = setInterval(actualizarTiempo, 1000);
  
  // Función para actualizar la puntuación
  function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
  }
  
  // Función para manejar el fin del juego
  function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
  
    const gameOverTitle = document.createElement('h2');
    gameOverTitle.textContent = '¡Tiempo agotado!';
    endGameContainer.appendChild(gameOverTitle);
  
    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Puntuación final: ${score}`;
    endGameContainer.appendChild(scoreParagraph);
  
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Volver a empezar';
    restartButton.onclick = function () {
      location.reload();
    };
    endGameContainer.appendChild(restartButton);
  
    document.querySelector('.main').style.display = 'none';
  }
  
  // Inicializar el juego
  addToDOM();
  