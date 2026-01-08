document.getElementById('cleaningForm').onsubmit = function(e) {

    e.preventDefault();

    this.style.display = 'none';

    document.getElementById('msg').style.display = 'block';

};