
var country = [
  //0 index Australia
  {
   Male : ["Oliver", "William", "Jack" , "Thomas" , "James" , "Mason" , "Ricky" , "Charlie" , "Max" , "Nathan"],
  Female : ["Olivia", "Amelia", "Ava" , "Mia" , "Chloe" , "Evie" , "Isla" , "Emma" , "Zara" , "Lucy"],
  },
  // 1 index Spain
  {
    Male : ["Mateo", "Rafael", "Santiago" , "Arlo" , "Diego" , "Franciso" , "Manuel" , "Juan" , "Ricardo" , "Fernando"],
    Female : ["Herminia", "Idoya", "Elicia" , "Dulce" , "Dorita" , "Clarisa" , "Chus" , "Alita" , "Adalina" , "Abella"],
  },
   // 2 index India
  {
    Male : ["Sohan", "Mohan", "Rakesh" , "Varun" , "Pratyush" , "Pankaj" , "Ankush" , "Atharv" , "Akshat" , "Aditya"],
    Female : ["Sunita", "Rajana", "Sonali" , "Drashti" , "Priya" , "Riti" , "Simran" , "Yashika" , "Janki" , "Sonam"],
  },
  //3 index Chile
  {
    Male : ["Benjamin", "Vicente", "Martin" , "Matias" , "Joaquin" , "Agustin" , "Maximiliano" , "Cristobal" , "Sebastian" , "Lucas"],
  Female : ["Catalina", "Julieta", "Ignacia" , "Monserrat" , "Camila" , " Javiera" , "Fernanda" , " Isidora" , "Carla" , "Paloma"],
  },
 
  //4 index Egypt
  {
    Male : ["Net", "Seth", "Lapis" , "Anubis" , "Maat" , "Nour" , "Rashida" , "Adom" , "Nile" , "Sabra"],
    Female : ["Gamal", "Cleopatra", "Osiris" , "Gamila" , "Amsu" , "Chione" , "Heqet" , "Nefertiti" , "Nenet" , "Nubia"],
  },

  //5 index Denmark
  {
    Male : ["Asger", "Theo", "Laurits" , "Jakob" , "Mithile" , "Mason" , "Ricky" , "Charlie" , "Max" , "Nathan"],
    Female : ["Oliver", "William", "Jack" , "Thomas" , "James" , "Mason" , "Ricky" , "Charlie" , "Max" , "Nathan"],
  },
  //6 index United Kingdom
  {
    Male : ["Jack", "Jacob", "Charlie" , "William" , "Archie" , "Ethan" , "Issac" , "Edward" , "Finley" , "Dylan"],
    Female : ["Olivia", "Lily", "Sophia" , "Emily" , "Ava" , "Isla" , "Isabella" , "Rosie" , "Elsie" , "Harper"],
  },

  // 7 index Pakistan
  {
    Male : ["Akram", "Shakib", "Hasan" , "Umar" , "Shoaib" , "Tareek" , "Taimur" , "Raheman" , "Faisal" , "Ibrahim"],
    Female : ["Maira", "Asin", "Zimal" , "Sanaya" , "Aayat" , "Baarizah" , "Effat" , "Gulnar" , "Iima" , "Afna"],
  },
 // 8 index Italy
  {
    Male : ["Esidoro", "Enrico", "Brando" , "Borromeo" , "Cesare" , "Orlando" , "Rocco" , "Armani" , "Roberto" , "Gianni"],
    Female : ["Greta", "Gaia", "Chiara" , "Noemi" , "Rebecca" , "Camilla" , "Bianca" , "Ilaria" , "Irene" , "Angelica"],
  },

  // 9 index Japan
  {
    Male : ["Hiroto", "Itsuki", "Kei" , "Minato" , "Ren" , "Goro" , "Hachi" , "Doi" , "Giichi" , "Youta"],
    Female : ["Yui", "Rio", "Yuna" , "Hina" , "Koharu" , "Mio" , "Saki" , "Haruka" , "Rin" , "Akari"],
  },
   
  ]





// index.html js file 
function validate() {
document.getElementById("name1").style.display="none";
document.getElementById("name2").style.display="none";
document.getElementById("name3").style.display="none";
document.getElementById("name4").style.display="none";
document.getElementById("name5").style.display="none";
document.getElementById("name6").style.display="none";
document.getElementById("name7").style.display="none";
document.getElementById("name8").style.display="none";
document.getElementById("name9").style.display="none";
document.getElementById("name10").style.display="none";
var x, text="";
  x = document.getElementById("number_input").value;

  if(isNaN(x)){
    document.getElementById("name_container").style.display="none";
    text="Invalid Input! Please enter only numeric values!!";
    document.getElementById("error").innerHTML=text;
    document.getElementById("number_input").style.border="2px solid red";

  }
  else if (isNaN(x) || x < 1 || x > 10) {
    document.getElementById("name_container").style.display="none";
    text = " Invalid Input! Please enter number between 1 - 10 .";
    document.getElementById("error").innerHTML=text;
    document.getElementById("number_input").style.border="2px solid red";
}

  else {
    // border-width: 0 0 2px;
    // border-color: black;
    document.getElementById("number_input").style.borderWidth="0 0 2px";
    document.getElementById("number_input").style.borderColor="black";

    document.getElementById("name_container").style.display="block";
      document.getElementById("error").innerHTML="";
    var u_country;
    var gender;

    u_country=document.getElementById("country_name").value;
    gender=document.getElementById("gender").value;
    //
    // if(country=="Australia" && gender=="Male"){
    //   var test=localStorage.getItem("name");
    //   alert(test);
    // }
    
    let index=0;
   
    // if(u_country=="Australia"){

    //   console.log(index ,"upper");
    //   index=0;
    //   console.log(index ,"lower");
    // }

    if(u_country=="Spain"){index=1;} 
    if(u_country=="India"){index=2;}
    if(u_country=="Chile"){index=3;}
    if(u_country=="Egypt"){index=4;}
    if(u_country=="Denmark"){index=5;}
    if(u_country=="United Kingdom"){index=6;}
    if(u_country=="Pakistan"){index=7;}
    if(u_country=="Italy"){index=8;}
    if(u_country=="Japan"){index=9;}
    var i,y;
    // var count;
    // count=document.getElementById("number_input").value;
    var a=(Math.floor(0 + Math.random() * 9));
    for(i=0;i<x;i++){
  
      var id = "name" + (i +1) + "";
      var store= document.getElementById(id);
      store.style.display="block";
      // if(gender=="Male"){

        
          // text+=i + ". " + males[y] + "<br>";
          // store.innerHTML=country[index].Male[i];
  
          //  document.getElementById("name_container").innerHTML = text;
  
        
      
      if(gender=="Male"){
     
        // store.innerHTML=country[index].Male[(Math.ceil(Math.random() * 10)) + i];
        // store.innerHTML=country[index].Male[(Math.ceil(Math.random() * 10)) + i];
        // store.innerHTMl=country[index].Male[i];
        store.innerHTML=country[index].Male[i];
        // console.log(a+i);
        
        
        
        // if(((Math.ceil(Math.random() * 10)) + i)>10)
      
      }
    else{
     
      store.innerHTML=country[index].Female[i];
     
      // store.innerHTML=country[index].Female[i];
      
    }
    
    }
     

   
  }
}
