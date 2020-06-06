function emoji() {
  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    window.location.hash = '👩🏽‍💻';
  }
}
emoji();
console.log("You found my portfolio! You're awesome.");
