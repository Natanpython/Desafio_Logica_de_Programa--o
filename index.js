const hero = "Natanael"
const xp = 1000000

if(xp <= 1000){
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** FERRO`)
}else if(xp >= 2000 && xp <=3000){
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** BRONZE`)
}else if(xp >= 3001 && xp <=4000 ){
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** PRATA`)
}else if(xp >= 4001 && xp <=5000 ) {
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** OURO`)
}else if(xp >= 5001 && xp <=6000) {
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** PLATINA`)
}else if(xp >= 6001 && xp <=7000 ) {
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** ASCENDENTE`)
}else if(xp >= 7001 && xp <=8000 ){
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** IMORTAL`)
}else  {
    console.log(`O Herói de nome **${hero}** está no nível de **${xp}** RADIANTE`)
}

