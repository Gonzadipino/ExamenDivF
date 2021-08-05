function mostrar()
{
	/*Llegan vuelos con vacunas de distintos lugares del mundo
	Mientras el usuario quiera se debe registrar de cada vuelo:
	-Origen (“Oriente”, “Occidente”, “Secreto”)
	-Cantidad de vacunas (entre 500000 y 2500000)
	-Costo del vuelo (entre 1 millón y 5 millones de pesos)
	Informar:
	a- El origen que envió menor cantidad de vacunas
	b- El promedio por vuelo de vacunas llegadas de Occidente
	c- El total sin descuentos a pagar por los gastos de los viajes
	d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 8 millones el descuento es del 15% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento*/
let origen;
let costo;
let cantidad;
let ingresar;

let contadorOriente = 0;
let contadorOccidente = 0;
let contadorSecreto = 0;
let menor;

let promedioOccidente;
let acumuladorOccidente= 0;
let acumuladorCosto = 0;

let acumuladorVacunas = 0;
let costoDescuento;
let descuento = 0;

	do
	{
	origen = prompt("Ingrese origen del vuelo (oriente, occidente o secreto)").toLowerCase();
	while (!isNaN(origen) || origen != "oriente" && origen != "occidente" && origen !="secreto")
	{
		origen = prompt("ERROR. ingrese un origen correcto (oriente, occidente o secreto)").toLowerCase();
	}
	cantidad = parseInt(prompt("Ingrese cantidad de vacunas (Entre 500000 y 2500000)"));
		while(isNaN(cantidad) || cantidad < 500000 && cantidad < 2500000)
		{
			cantidad = parseInt(prompt("Error. ngrese cantidad de vacunas (Entre 500000 y 2500000)"));
		}
	
	costo = parseInt(prompt("Ingrese costo del vuelo ( entre 1 millon y 5 millones"));
	while (isNaN(costo) || costo < 1000000 && costo > 5000000 )
	{
		costo = parseInt(prompt("Error. Ingrese un costo entre 1 millon o 5 millones)"));
	}

	ingresar = prompt("Quiere seguir ingresando datos? S/N").toLowerCase();
	while (!isNaN(ingresar) || ingresar != "s" && ingresar != "n")
	{
	   ingresar = prompt("ERROR. Quiere seguir ingresando datos? S/N").toLowerCase();
	}
	switch(origen)
	{

		case "oriente":
			contadorOriente++;

			break;
		case "occidente":
			contadorOccidente++;
			acumuladorOccidente = acumuladorOccidente + cantidad;


			break;
		case "secreto":
			contadorSecreto++;
			break;

	}

	acumuladorCosto = acumuladorCosto + costo;
	acumuladorVacunas = acumuladorVacunas + cantidad;





} while (ingresar == "s");

/*Informar:
	a- El origen que envió menor cantidad de vacunas
	b- El promedio por vuelo de vacunas llegadas de Occidente
	c- El total sin descuentos a pagar por los gastos de los viajes
	d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento*/


	/*ejercicio a */
	if(contadorOriente < contadorOccidente && contadorOriente< contadorSecreto)
	{
		menor = "Oriente";
	}
	else if (contadorOccidente< contadorSecreto && contadorOccidente < contadorOriente)
	{
		menor = "Occidente";
	}
	else
	{
		menor = "Secreto";

	}
	alert("El origen que envio menor cantidad de vacunas es " + menor);

	/*ejercicio b */
	promedio = acumuladorOccidente / contadorOriente;
	alert("El promedio por vuelo de vacunas llegas de occidente es de " + promedio);

	/*ejercicio c */
	alert("El total sin descuentos a pagar por los gastos de los viajes es de $" + acumuladorCosto);

	/*ejercicio d */
	if (acumuladorVacunas > 10000000)
	{
		costoDescuento =  acumuladorCosto * 0.75;
		descuento = 25;
	} else if( acumuladorVacunas >= 5000000 && acumuladorVacunas <10000000)
	{
		costoDescuento = acumuladorCosto * 0.85;
		descuento = 15;
	}
	alert ( "Se le aplica un descuneto del " + descuento +"% y el precio es de $" + costoDescuento);
}
