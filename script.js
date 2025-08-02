document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("報名已送出，我們會盡快聯絡你！");
    this.reset();
});
