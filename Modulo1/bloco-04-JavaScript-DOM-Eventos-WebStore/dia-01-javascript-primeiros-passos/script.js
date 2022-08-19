// let idadeMaria = 30
// let idadeSilvia = 19
// let idadeIza = 20


// if (idadeMaria < idadeSilvia && idadeMaria < idadeIza){
//     console.log("Maria é a pessoa mais jovem e possui" + idadeMaria + "anos de idade")
// } 
// else if (idadeSilvia < idadeMaria && idadeSilvia < idadeIza) {
//     console.log ("Silva é a pessoa mais jovem e possui"+ idadeSilvia + "anos de idade")
// }
// else if ( idadeMaria === idadeSilvia || idadeMaria === idadeIza || idadeIza === idadeSilvia) {
//     console.log("Todas possuem a mesma idade")
// }
// else {
//     console.log("Iza é a pessoa mais jovem e possui" + idadeIza + "anos de idade")
// }

let age = 30
let sex = "masculino"
let weight = 70
let height = 170
let bmr = 0

if (sex === "masculino"){
    bmr= height*6.25+weight*9.99-age*4.2+5
}
else {
    bmr=height*6.25+weight*9.99-age*4.92-161
} console.log ("A taxa metabólica basal é:" + bmr + "Kcal")


