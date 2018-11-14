function hide() {
    $('.about').hide();
    $('.test').show();
}

function back() {
    $('.about').show();
    $('.test').hide();
}

function perimetr() {
    let a = +$('#a').val();
    let b = +$('#b').val();
    let c = +$('#c').val();
    let perimetr = a + b + c;

    if (a > 0 && b > 0 && c > 0) {
        if (a > b + c) {
            $('#resault').html('Не існує!');
        } else {
            $('#resault').html(perimetr);
        }
    } else {
        $('#resault').html('сторони мають бути більші за нуль');

    }
}