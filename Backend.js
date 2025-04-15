class User{
   constructor(username,name,email,password,etat=false){
    this.username=username;
    this.name=name;
    this.email=email;
    this.password=password;
    this.etat=etat;
   }}
   function SignUp(username,n,email,password){
        if(username!==''&&n!==''&&email!==''&&password!==''){
          const user={username:username,name:n,email:email,password:password};
          console.log("test");
          usersData.push(user)
         
            console.log('User Signed Up Successfully');
         
         
        }
   }
   function Login(username,pass){
     if(username!==''&&pass!==''){
        
        const user=usersData.find(user=>user.username==username&&user.password==pass);
        if(user){
           user.etat=true;
           console.log("Login with success");
           console.log(user.etat);
        }else{
            console.log('in');
        }
     }
   }

class Posts{
    constructor(id,title,description){
        this.id=id;
        this.title=title;
        this.description=description;
    }}
    function Listeposts(){
        const posts=postsData;
       
        let table=document.querySelector(".posts");
    posts.map((el)=>{
        const row=document.createElement("tr");
       
            const cell1=document.createElement("td");
            cell1.innerText=el.title;
            row.appendChild(cell1);
            const cell2=document.createElement("td");
            cell2.innerText=el.description;
            row.appendChild(cell2);
        table.appendChild(row);

    })
    }
    function AjouterPost(title,description){
       
        const post={
            id:postsData[postsData.length].id+1,
            title:title,
            description:description

        };
        postsData.push(post);
        console.log("Post added with success");
    }
