document.getElementById('startBtn').addEventListener('click', function() {
    const datetimeInput = document.getElementById('datetime').value;
    if (!datetimeInput) {
        alert('Please select a valid date and time.');
        return;
    }

    const targetDate = new Date(datetimeInput);
    if (targetDate < new Date()) {
        alert('Please select a future date and time.');
        return;
    }

    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }

    document.getElementById('message').innerText = '';
    document.getElementById('countdown').style.display = 'flex';

    window.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(window.countdownInterval);
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('message').innerText = 'Time is up!';
            return;
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', function() {
    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
        window.countdownInterval = null;
        document.getElementById('message').innerText = 'Countdown stopped.';
    }
});
