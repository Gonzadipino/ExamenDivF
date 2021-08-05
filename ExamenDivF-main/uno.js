function mostrar()
{
let nombre;
let edad;
let vacuna;
let dosis;
let sexo;
let ingresar;

/*ejercicio a */
let promedio;
let acumuladorEdad = 0;
let contadorEdad = 0;
/*ejercicio b */
let flagMasJoven = 1;
let edadMasJoven;
let nombreMasJoven;
let vacunaMasJoven;
/*ejercicio c */
let contadorTotalAmericana = 0;
let contadorMenoresAmericana = 0;
let porcentajeMenoresDeEdad;
/*ejerciico d */
let contador1DosisTotal = 0;
let contadorTotal=0;
let porcentajePrimeraDosis;
/*ejercicio e */
let vacunaChina = 0;
let vacunaRusa = 0;
let vacunaAmericana = 0;
let mayorVacuna;

/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )*/

do
{
nombre = prompt("Ingrese su nombre (entre 3 y 10 caracteres)");
while (!isNaN(nombre) || nombre.length < 3 && nombre.length > 10)
{
	nombre = prompt("ERROR. Ingrese un nombre entre 3 y 10 caracteres");
}

edad = parseInt(prompt("Ingrese su edad (mayor o igual a 12.)"));
while (isNaN(edad) || edad < 12 )
{
	edad = parseInt(prompt("ERROR. Ingrese una edad valida (mayor o igual a 12.)"));
}


if (edad < 18)
 {
	vacuna = prompt ("siendo menor de edad solo se permite la vacuna americana").toLowerCase(); 

	while(!isNaN(vacuna)|| vacuna != "americana") 
	{
	vacuna = prompt("ERROR. Ingrese solo la vacuna americana)").toLowerCase();
	}
 }
 else
 {
	vacuna = prompt("Ingrese la vacuna (china, rusa o americana)").toLowerCase();

	while(!isNaN(vacuna)|| vacuna != "rusa" && vacuna != "americana" && vacuna != "china")
	{
		vacuna = prompt("ERROR. Ingrese la vacuna correcta (china, rusa o americana)").toLowerCase();
	}  
 }	
 dosis = prompt("Ingrese que dosis se esta dando. (p para l primera o s para la segunda").toLowerCase();
 while (!isNaN(dosis) || dosis != "p" && dosis != "s" )
 {
	 dosis = prompt("ERROR. Ingrese quna dosis valida. (p para l primera o s para la segunda").toLowerCase();
 }


  sexo = prompt("Ingrese su sexo ( f para femenino o m para masculino").toLowerCase();
   while (!isNaN(sexo) || sexo != "m" && sexo != "f" )
  {
	sexo = prompt("ERROR. Ingrese un sexo valido. ( f para femenino o m para masculino").toLowerCase();
  }


 ingresar = prompt("Quiere seguir ingresando datos? S/N").toLowerCase();
 while (!isNaN(ingresar) || ingresar != "s" && ingresar != "n")
 {
	ingresar = prompt("ERROR. Quiere seguir ingresando datos? S/N").toLowerCase();
 }

  /*nformar: 
informar 
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada*/

/*ejercicio b */
if (sexo == "m")
{
	if (flagMasJoven)
	{
		nombreMasJoven = nombre;
		vacunaMasJoven = vacuna;
		edadMasJoven =  edad;
		flagMasJoven = 0;
	} 
		else
		{
 		if (edad < edadMasJoven)
 		{
			nombreMasJoven = nombre;
			vacunaMasJoven = vacuna;
 		}

	}
} /*ejercicio e */
  switch (vacuna)
  { /*ejercicio a */
	  case "china":
		  vacunaChina++;
			acumuladorEdad = acumuladorEdad + edad;
			contadorEdad ++;

	  
		  break;
      /*ejercicio c */
	  case "americana":
		  vacunaAmericana++;
		   contadorTotalAmericana ++;
		   if (edad < 18);
		   contadorMenoresAmericana++;

		  break;
		  case "rusa":
			  vacunaRusa++;

  }
 if(dosis = "p")
 {
	 contador1DosisTotal++;
 }


 contadorTotal++
} while (ingresar == "s");


/*ejericio e*/
if (vacunaChina > vacunaAmericana && vacunaChina > vacunaRusa)
{
	mayorVacuna = "China";
} 
else if (vacunaAmericana > vacunaChina && vacunaAmericana > vacunaRusa)
{
	mayorVacuna = "Americana";
}
else
{
 	mayorVacuna = "Rusa";
} 

promedio = acumuladorEdad/contadorEdad;

porcentajeMenoresDeEdad = contadorMenoresAmericana * 100 /contadorTotalAmericana;

porcentajePrimeraDosis = (contador1DosisTotal * 100 / contadorTotal) ;






/*ejercicio a */
alert ("El promedio de edad de los vacunados con la vacuna china es de " + promedio);
/ejercicio b/
alert ("el nombre de la persona mas joven es " + nombreMasJoven + " y se vacuno con la vacuna " + vacunaMasJoven);
/*ejercicio c */
alert ("El porcentaje de menores que se dieron la vacuna americana es " + porcentajeMenoresDeEdad + "%");
/*ejercicio d */
alert ("El porcentaje de los que se dieron la primera dosis es de " + porcentajePrimeraDosis + "%");
/*ejercicio e */
alert ("La vacuna mas inoculado fue la " + mayorVacuna );




}
