function Voiture(marque,model,annee,type,carburant){
    this.marque=marque;
    this.model=model;
    this.annee=annee;
    this.type=type;
    this.carburant=carburant;
}
class Hyundai extends Voiture{
    constructor(marque,model,annee,type,carburant,serie,hybride){
        super(marque,model,annee,type,carburant);
        this.serie=serie;
        this.hybride=hybride;
    }
     Alarmer() {
      console.log("Make sounds");   
    }
}
class Ford extends Voiture{
    constructor(marque,model,annee,type,carburant,options){
        super(marque,model,annee,type,carburant);
        this.options=options;
    }
}
function Trier_croissant(liste){
    for(let i=0;i<liste.length;i++){
        for(let j=i+1;j<liste.length;j++){
            if(liste[i].annee>=liste[j].annee){
                let temp=liste[i];
                liste[i]=liste[j];
                liste[j]=temp;
            }
        }
        console.log(liste[i].marque+' '+liste[i].annee);
    }
}
const v1=new Voiture('audi','RS6 ABT',2022,'Sport','Mazout');
const v2=new Voiture('BMW','M22',2023,'Sport','Mazout');
const v3=new Voiture('Mercedes','Benz',2021,'Conmfy','Mazout');
//console.log(v1.marque);
Trier_croissant([v1,v2,v3]);
