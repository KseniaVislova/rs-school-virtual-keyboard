const listenEvent = () => {
  const KEYS = document.querySelectorAll('.key');

  document.addEventListener('keydown', (event) => {
    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code) {
        item.classList.add('active');
      }
    })
  })

  document.addEventListener('keyup', (event) => {
    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code) {
        item.classList.remove('active');
      }
    })
  })
}

export default listenEvent;