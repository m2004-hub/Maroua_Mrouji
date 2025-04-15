class Vecteur2D{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    Affichage(){
        console.log(this.x+':'+this.y);
    }
    Surcharge(new_v){
       return 'x:'+(new_v.x+this.x)+' y:'+(new_v.y+this.y);
       
    }
}

const v1=new  Vecteur2D();
const v2=new Vecteur2D(3,2);
//console.log(v1.Surcharge(v2));
//console.log(v2.x+':'+v2.y);
class Rectangle{
    constructor(longueur=4,largeur=2,nom="rectangle"){
            this.longueur=longueur;
            this.largeur=largeur;
            this.nom=nom;
    }
    Affichage(){
        console.log("le rectagle "+this.nom+' avec largeur:'+this.largeur+' et longeur:'+this.longueur);
    }
    Surface(){
        return this.longueur*this.largeur;
    }
}
class Carre extends Rectangle{
    constructor(longueur,largeur,nom="carre"){
        super(longueur,largeur);
        this.nom=nom;
    }
}
const rec=new Rectangle(4,3,)
const carre=new  Carre();
//console.log(rec.nom);
//console.log(carre.longueur);
class Point{
    constructor(x=0.0,y=0.0){
        this.x=x;
        this.y=y;
    }
}
class Segment{
    constructor(orig,extrem){
     this.orig=orig;
     this.extrem=extrem;
    }
}
const p1=new Point();
const p2=new Point(2.2,3.4);
const Seg=new Segment(p1,p2);
console.log(Seg.extrem);