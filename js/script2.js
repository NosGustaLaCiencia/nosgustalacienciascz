
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => {
      console.log('Service Worker registrado exitosamente:', reg);
    })
    .catch(err => {
      console.error('Error al registrar el Service Worker:', err);
    });
}
