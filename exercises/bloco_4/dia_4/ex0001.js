1.
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
//  console.log(`Bem vinda ${info.personagem}!`)

2.
  info['recorrente'] = 'sim' 
  //console.log(info)

/*  3.
  for(let key in info){
      console.log(key)
  }
  4.
  for(let key in info){
    console.log(info[key])
}
*/
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "No último MacPatinhas",
    recorrente: "sim",
  };
  
  for (let properties in info) {
    if (
      info[properties] === info.recorrente  
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(`${info[properties]} e ${info2[properties]}`);
    }
  }


  