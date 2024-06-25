function scuberGreetingForFeet(distance){
  // Write your code here!

  if(distance > 2500){
    return ('No can do.') 
  }

  else if(distance < 400){
    return ('This one is on me!')
  }

  else if(distance >= 400 && distance < 2000) {
    return ('That will be twenty bucks.')
  }

  else if(distance > 2000){
    return ('I will gladly take your thirty bucks.')
  } 

}

function ternaryCheckCity(location){
  // Write your code here!
return location ==='NYC' ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(value){
  // Write your code here!
 // if(value === 'generous'){
  //  return 'Thank you so much.'
  
switch(value){
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
     default:
      return 'Bye.'   
  }

}