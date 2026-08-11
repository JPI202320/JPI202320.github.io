function calcular() {
    const precio = parseFloat(document.getElementById("precio").value);
    const tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
    const porcentajeImpuesto = parseFloat(document.getElementById("impuesto").value);

    if (isNaN(precio) || isNaN(tipoCambio) || isNaN(porcentajeImpuesto)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (precio < 0 || tipoCambio <= 0 || porcentajeImpuesto < 0) {
        alert("Ingresa valores válidos.");
        return;
    }

    const precioConvertido = precio * tipoCambio;
    const totalImpuesto = precioConvertido * (porcentajeImpuesto / 100);
    const fees = 500;
    const edson = 200;
    const pagoFijo = 16918.16;
    const total = precioConvertido + totalImpuesto + fees + edson + pagoFijo;

    document.getElementById("precioOriginal").textContent = "Q" + precio.toFixed(2);
    document.getElementById("precioConvertido").textContent = "Q" + precioConvertido.toFixed(2);
    document.getElementById("totalImpuesto").textContent = "Q" + totalImpuesto.toFixed(2);
    document.getElementById("total").textContent = "Q" + total.toFixed(2);
}

function limpiar() {
    document.getElementById("precio").value = "";
    document.getElementById("tipoCambio").value = "7.80";
    document.getElementById("impuesto").value = "32";
    document.getElementById("precioOriginal").textContent = "Q0.00";
    document.getElementById("precioConvertido").textContent = "Q0.00";
    document.getElementById("totalImpuesto").textContent = "Q0.00";
    document.getElementById("total").textContent = "Q0.00";
}
