function scuberGreetingForFeet(ride){
  let customers;
  if(ride <= 400){
    customers = 'This one is on me!'
  }else if(ride > 2000){
    customers = 'I will gladly take your thirty bucks.'
  }else if(ride > 2500){
    customers = 'No can do.'
  }
  return customers

}

function ternaryCheckCity(city){
  let destination = city === 'NYC'? 'Ok, sounds good.': 'No go.'
}


function switchOnCharmFromTip(tip){
  let response;
  switch(tip){
    case 'generous':
      response = 'Thank you so much.';
    case  'not as generous':
      response = 'Thank you.';
    case 'thanks for everything':
      response = 'Bye';
  }
  return response
}