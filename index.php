<button id="listar">Ver productos</button>
<button id="limpiar">Limpiar productos</button>

<div id="productos"> </div>


<form id="formProductos"> 

Código producto 
<input type="number" id="codigo" required><br>

Cantidad 
<input type="number" id="cantidad" required><br>

<button id="calcular">Agregar</button>

<table border="1">
<thead>
<tr>
    <th>Código</th>
    <th>Descripción</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Total</th>
    <th>Total IVA</th>
</tr>
</thead>

<tbody id="tablaFactura"></tbody>

</table>

<table border="1">
<thead>
<tr>
    <th>Total sin IVA</th>
    <th>Total FINAL</th>
</tr>
</thead>

<tbody id="tablaPrecios"></tbody>

</table>
<button id="reiniciar">Limpiar factura</button>
</form>



<script src="script.js"></script>