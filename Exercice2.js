const Etudiant1={
  nom:"moroji",
  prenom:"marwa",
  age:21,
  cne:"k6zgee"
}
const Etudiant2={
    nom:"boulaich",
    prenom:"douae",
    age:21,
    cne:"k7888"
  }
  const Etudiant3={
    nom:"bzouaiii",
    prenom:"lina",
    age:21,
    cne:"k8999ß"
  }
const Professeur={
    nom:"El Achak",
    age:35,
    cin:"ktz77"
}
Etudiant1.etudier=function(){
    console.log("je suis un etudiant");
}
Professeur.enseigner=function(){
    console.log("je suis un professeur");
}
function Trier_alpha(liste){
         for(let i=0;i<liste.length;i++){
            for(let j=i+1;j<liste.length;j++){
                if(liste[i].nom>liste[j].nom){
                    let temp=liste[i];
                    liste[i]=liste[j];
                    liste[j]=temp;
                }
            }
            console.log(liste[i].nom+' '+liste[i].prenom+' '+liste[i].age);
         }
}
Trier_alpha([Etudiant1,Etudiant2,Etudiant3]);
