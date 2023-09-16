// Import pakietu Vimeo Player
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Znajdź video na stronie
const iframe = document.querySelector('iframe');

// Inicjalizacja odtwarzania Vimeo do element iframe
const player = new Vimeo(iframe);

// Użyj lodash.throttle do ograniczenia częstotliwości zapisu
const saveTimeToLocalStorage = throttle(function(seconds) {
    // Zapisywanie czasu odtwarzania w kluczu "videoplayer-current-time"
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000); // Ograniczenie czasu

// Nasłuchiwanie zdarzenia "play" i "timeupdate"
player.on('play', function() {
    console.log('Play!');
});
// Nasłuchiwanie zdarzenia "pause"
player.on('pause', function() {
    console.log('Pause!');
});

player.on('timeupdate', function(data) {
    // Wywołanie funkcji zapisu
    saveTimeToLocalStorage(data.seconds);
});

// Sprawdzam czy czas jest zapisany
player.on('loaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        // Warunek jeśli czas jest zapisany ustaw go na odtwarzaczu
        player.setCurrentTime(parseFloat(savedTime));
        console.log('Automatyczny zapis - oglądaj dalej!');
    }
});


// Start wideo
player.ready()
