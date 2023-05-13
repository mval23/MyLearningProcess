let datos = document.getElementById('datos')

//datos.innerText = "Hello";
datos.innerHTML = `
    <nav>
    <ul>
    <li>H O M E</li>
    <li>N O S O T R O S</li>
    <li>C O N T A C T O</li>
    </uL>
`

function mensaje(){
    alert('Ingreso datos')
    console.log('Ingreso datos');
}

function pasar(){
    let txt1 = document.getElementById('txt1').value;
    alert(txt1);
    let txt2 = document.getElementById('txt2');
    txt2.value = txt1;

}

