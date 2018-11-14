function arithmetic() {
    let a = +$('#a').val();
    let b = +$('#b').val();
    let c = +$('#c').val();
    let sum = (a + b + c) / 3;
    $('#releases').html(sum);
}
function hide(){
$('#id2').hide();
}
