function mostrar()
/*
Mostrar información
Enunciado:
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta */
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let i =0;
    let totalIngresados= 0;
    let totalPositivos=0;
    let totalNegativos=0;
    let porcentajeNegativos;
    let porcentajePositivos;
    
    let contadorBeta = 0;
    let contadorAlfa = 0;
    let contadorDelta= 0;
    let cepaMenosCasos;

    let flagArgentino= 1;
    let menorArgentino;

    let contadorExtranjerosDelta= 0;




 while (i<8)
 {
    nacionalidad = prompt("Ingrese nacionalidad (Argentina/Extranjero)").toLowerCase();
    while(!isNaN(nacionalidad) || nacionalidad != "argentina" && nacionalidad != "extranjero" )
    {
        nacionalidad = prompt ("Ingrese la nacionalidad correcta (Argentina/Extranjero)").toLowerCase();   
    }
    resultado =  prompt("Ingrese resultado (Positivo/Negativo)").toLowerCase();
    while(!isNaN(resultado) || resultado != "positivo" && resultado!= "negativo" )
    {
        resultado =  prompt("Ingrese un resultado correcto (Positivo/Negativo)").toLowerCase();
    }
    edad = parseInt(prompt("Ingrese edad (mayor a 18 y menor a 65)"));
    while ( isNaN(edad) || edad < 18 || edad > 65)
    {
        edad = parseInt(prompt("Ingrese edad (mayor a 18 y menor a 65)")); 
    }
    cepa = prompt("Ingrese la cepa (delta, alfa, beta o ninguna").toLowerCase();
    if (resultado == "positivo")
    {
        while(!isNaN(cepa) || cepa != "alfa" && cepa != "beta" && cepa != "delta")
        {
            cepa = prompt("ERROR. Ingrese una cepa correcta (delta, alfa o beta").toLowerCase();
        }
    } else
        {
            while(!isNaN(cepa) || cepa != "ninguna")
            {
            cepa = prompt("ERROR. Si su resultado es negativo, ingrese -ninguna-").toLowerCase();
            }
           
        }

console.log(nacionalidad);
console.log(edad);
console.log(resultado);
console.log(cepa);

   /* a- Porcentaje de positivos
    b- Porcentaje de negativos
    c- Cuál es la cepa menos encontrada
    d- Edad del menor argentino contagiado
    e- Cantidad de personas extranjeras contagiadas con la delta */
        totalIngresados++;

        if (resultado == "positivo")
        {
            totalPositivos++;
        } else
        {
            totalNegativos++;
        }

switch(cepa)
{
    case "delta":
            contadorDelta++;
            if(nacionalidad == "extranjero")
            {
                contadorExtranjerosDelta++;

            }
     break;

    case "alfa":
         contadorAlfa++;
    break;

    case "beta":
         contadorBeta++;
    break;

} 

if(contadorDelta < contadorBeta && contadorDelta < contadorAlfa)
{
    cepaMenosCasos = "Delta";
} 
else if ( contadorAlfa < contadorBeta && contadorAlfa < contadorDelta)
{
    cepaMenosCasos = "Alfa"; 
} else
{
    cepaMenosCasos = "Beta";
}



  if (nacionalidad == "argentina")
  {
      if (flagArgentino)
      {
        menorArgentino = edad;
        flagArgentino = 0;
      } else
      {
        if(edad<menorArgentino)
        menorArgentino= edad;
      }
  }
  i++;
 }

porcentajeNegativos = totalNegativos * 100 / totalIngresados;
porcentajePositivos = totalPositivos * 100 / totalIngresados;
/*ejercicio a */
alert("El porcentaje de casos positivos es de " + porcentajePositivos + "%");
/*ejercicio b */
alert("El porcentaje de casos negativos es de " + porcentajeNegativos + "%");
/*ejercicio c*/
alert("La cepa con menor cantidad de casos es la " + cepaMenosCasos);
/*ejercicio d */
alert("La edad del menor argentino encontrado es de " + menorArgentino + " años");
/*ejercicio e */
alert ("La cantidad de extranjeros contagiados con la delta es de " + contadorExtranjerosDelta );


}
