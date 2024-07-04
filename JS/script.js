document.addEventListener('DOMContentLoaded', function() {
  function updateTime() {
      const now = new Date();
      const time = now.toUTCString().split(' ')[4];
      const day = now.toLocaleString('en-US', { weekday: 'long' });

      document.getElementById('time').textContent = time;
      document.getElementById('day').textContent = day;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update the time every second
});
