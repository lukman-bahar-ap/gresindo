const PremissionFunct = () => {

  // Periksa service worker
  if (!('serviceWorker' in navigator)) {
      console.log("Service worker tidak didukung browser ini.");
    } else {
      registerServiceWorker();
    }
    // Register service worker
    function registerServiceWorker() {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
          console.log('Registrasi service worker berhasil.');
          registration;
        }).catch(function (err) {
          console.error('Registrasi service worker gagal.', err);
        });
      
    }
}
export default PremissionFunct;