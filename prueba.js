let a = 'casa';
let b = 'piscina';

var mes = 'Febrero';




switch (mes) {
  case 'Enero':
    dias = 31;
    break;
  case 'Febrero':
    dias = 28;
    break;
  case 'Marzo':
    dias = 31;
    break;
  case 'Abril':
    dias = 30;
    break;
  case 'Mayo':
    dias = 31;
    break;
  case 'Junio':
    dias = 30;
    break;
  case 'Julio':
    dias = 31;
    break;
  case 'Agosto':
    dias = 31;
    break;
  case 'Septiembre':
    dias = 30;
    break;
  case 'Octubre':
    dias = 31;
    break;
  case 'Noviembre':
    dias = 30;
    break;
  case 'Diciembre':
    dias = 31;
    break;
  default:
    console.log('error')

 }

if (mes === 'Febrero'){
  if (dias%4==0 && dias%100!=0 || dias%100==0 && dias%400!=0){
    console.log('NO es bisiesto');
  }
  else { (dias%100==0 && dias%400!=0)
    console.log('es bisiesto')
  }
}
 console.log(mes + ' tiene ' + dias + ' dias')

