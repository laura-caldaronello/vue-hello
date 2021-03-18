// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var root = new Vue({
    el: '#root',
    data: {
        message: {
            inH1: 'Visualizzatore di immagini',
            inH3: 'Inserire link all\'immagine',
            inButton: 'Visualizza',
            imgUrl: ''
        },
        myClasses: 'display-none'
    },
    methods: {
        pickImgUrl() {
            var myImg = document.getElementById('image');
            var myInput = document.getElementById('npt');

            this.myClasses = 'display-block beautify-img';
            myImg.setAttribute('src',myInput.value);
        }
    }
});
