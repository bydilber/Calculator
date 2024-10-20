document.addEventListener('DOMContentLoaded', function() {
    let calc = document.getElementById('calc');

    function appendValue(value) {
        calc.value += value;
    }

    function calculate() {
        try {
            calc.value = eval(calc.value);
        } catch (e) {
            calc.value = 'Error';
        }
    }

    function clearInput() {
        calc.value = '';
    }

    document.getElementById('btn0').addEventListener('click', function() { appendValue('0'); });
    document.getElementById('btn1').addEventListener('click', function() { appendValue('1'); });
    document.getElementById('btn2').addEventListener('click', function() { appendValue('2'); });
    document.getElementById('btn3').addEventListener('click', function() { appendValue('3'); });
    document.getElementById('btn4').addEventListener('click', function() { appendValue('4'); });
    document.getElementById('btn5').addEventListener('click', function() { appendValue('5'); });
    document.getElementById('btn6').addEventListener('click', function() { appendValue('6'); });
    document.getElementById('btn7').addEventListener('click', function() { appendValue('7'); });
    document.getElementById('btn8').addEventListener('click', function() { appendValue('8'); });
    document.getElementById('btn9').addEventListener('click', function() { appendValue('9'); });

    
    document.getElementById('btnPlus').addEventListener('click', function() { appendValue('+'); });
    document.getElementById('btnMinus').addEventListener('click', function() { appendValue('-'); });
    document.getElementById('btnMultiply').addEventListener('click', function() { appendValue('*'); });
    document.getElementById('btnDivide').addEventListener('click', function() { appendValue('/'); });
    document.getElementById('btnDot').addEventListener('click', function() { appendValue('.'); });


    document.getElementById('btnEqual').addEventListener('click', calculate);

    document.getElementById('clear').addEventListener('click', clearInput);
});
