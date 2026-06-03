document.getElementById('listar').addEventListener('click', cargarProductos);
document.getElementById('limpiar').addEventListener('click', limpiarProductos);
document.getElementById('calcular').addEventListener('click', calcularProductos);
document.getElementById('reiniciar').addEventListener('click', reiniciarProductos);
let totalSinIVA = 0;
let totalConIVA = 0;



function limpiarProductos(){

    document.getElementById('productos').innerHTML = '';
}

function reiniciarProductos(){

	document.getElementById('reiniciar').innerHTML = '';;
}

function cargarProductos(){

    fetch("api.php?accion=listar")
    .then(res=>res.json())
    .then(data=>{
        let tabla=document.getElementById("productos");
        tabla.innerHTML='';

        data.forEach(a=>{
            tabla.innerHTML+=`<div>
            ${a.codigo} - ${a.descripcion} - $${a.precio}
            </div>`;
        });
    });
}

function reiniciarProductos(){

    document.getElementById("tablaFactura").innerHTML = '';
    document.getElementById("tablaPrecios").innerHTML = '';

    totalSinIVA = 0;
    totalConIVA = 0;
}

function calcularProductos(e){

    e.preventDefault();

    let codigo = document.getElementById("codigo").value;
    let cantidad = document.getElementById("cantidad").value;

    fetch(`api.php?accion=calcular&codigo=${codigo}`)
    .then(res => res.json())
    .then(data => {

        let subtotal = data.precio * cantidad;
        let subtotalIva = subtotal + (subtotal * 0.08);

        let tabla = document.getElementById("tablaFactura");

        tabla.innerHTML += `
        <tr>
            <td>${data.codigo}</td>
            <td>${data.descripcion}</td>
            <td>${data.precio}</td>
            <td>${cantidad}</td>
            <td>${subtotal.toFixed(2)}</td>
            <td>${subtotalIva.toFixed(2)}</td>
        </tr>
        `;

        totalSinIVA += subtotal;
        totalConIVA += subtotalIva;

        
        let tablaP = document.getElementById("tablaPrecios");

        tablaP.innerHTML = `
        <tr>
            <td>${totalSinIVA.toFixed(2)}</td>
            <td>${totalConIVA.toFixed(2)}</td>
        </tr>
        `;
    });
}

