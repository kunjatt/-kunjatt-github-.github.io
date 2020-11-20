const text = ['Natural Proses', 'Washed Proses', 'Semi-washed Proses', 'Honey Proses']
let total = 0;
let txtIndex = 0;
let currentText = '';
let kata = '';

(function ketik(){
    // console.log(text[0]);
    if(total === text.length){
        total = 0
    }

    currentText = text[total];

    kata = currentText.slice(0, ++txtIndex);
    // console.log(kata);
    document.querySelector('.efek-ketik').textContent = kata;

    if(kata.length === currentText.length) {
        total++
        txtIndex = 0
    }

    setTimeout(ketik, 500);

}) ();