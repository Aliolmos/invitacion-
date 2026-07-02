
    const layer = document.getElementById('petalLayer');
    const card = document.getElementById('card');

    function spawnPetal(){
      const petal = document.createElement('div');
      petal.className = 'petal';

      const cardWidth = card.clientWidth;
      const cardHeight = card.clientHeight;

      const startX = Math.random() * cardWidth;
      const fall = cardHeight + 40;
      const drift = (Math.random() * 80 - 40).toFixed(0) + 'px';
      const spin = (Math.random() * 360 + 180).toFixed(0) + 'deg';
      const duration = (Math.random() * 4 + 6).toFixed(2) + 's';
      const size = (Math.random() * 5 + 6).toFixed(1) + 'px';

      petal.style.left = startX + 'px';
      petal.style.width = size;
      petal.style.height = (parseFloat(size) * 0.78) + 'px';
      petal.style.setProperty('--drift', drift);
      petal.style.setProperty('--fall', fall + 'px');
      petal.style.setProperty('--spin', spin);
      petal.style.animation = `petal-fall ${duration} linear forwards`;

      layer.appendChild(petal);

      setTimeout(() => petal.remove(), parseFloat(duration) * 1000 + 100);
    }

    // gentle, sparse petal fall
    setInterval(spawnPetal, 550);
    // seed a few at start so it doesn't feel empty
    for(let i=0;i<4;i++){
      setTimeout(spawnPetal, i * 300);
    }
  