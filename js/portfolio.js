//Intro Overlay
        function introopen(){
            var a = document.getElementById("topbar");
            a.style.height = "100%";
            document.getElementById("introtitle").style.display = "block";
            document.getElementById("introbase").style.display = "block";
            document.getElementById("closeicon").style.display = "block";
            
        }
        
        function introclose(){
            var a = document.getElementById("topbar");
            a.style.height = "0%";
            document.getElementById("introtitle").style.display = "none";
            document.getElementById("introbase").style.display = "none";
            document.getElementById("closeicon").style.display = "none";
            
        }
   
/*Datastructure ********************************************
********************************************************
********************************************************/

var data = [
  {
    "id": 1,
    "title": "Mumbai Data",
    "name": "mumbaidata",
    "dataviz": 1,
    "uiux": 1,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 2,
    "title": "Phnbk",
    "name": "phonebook",
    "dataviz": 1,
    "uiux": 1,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 3,
    "title": "VR Kolkata",
    "name": "drs",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 4,
    "title": "IIT Tea",
    "name": "iittea",
    "dataviz": 1,
    "uiux": 1,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 5,
    "title": "Holo-interface",
    "name": "hologram",
    "dataviz": 1,
    "uiux": 1,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 6,
    "title": "Networtifact",
    "name": "dataexplorer",
    "dataviz": 1,
    "uiux": 1,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 7,
    "title": "Lookup Mumbai",
    "name": "lookup",
    "dataviz": 0,
    "uiux": 0,
    "newmedia": 1,
    "other": 1
  },
  {
    "id": 8,
    "title": "Cheese",
    "name": "cheese",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 1,
    "other": 1
  },
  {
    "id": 9,
    "title": "Laikas ark",
    "name": "laika",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 1
  },
  {
    "id": 10,
    "title": "Aai",
    "name": "aai",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 11,
    "title": "Keep watch",
    "name": "keepwatch",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 12,
    "title": "Vikasdilawari.in",
    "name": "vda",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 13,
    "title": "User studies",
    "name": "user",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 1
  },
  {
    "id": 14,
    "title": "IITB Placements",
    "name": "service",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 1
  },
  {
    "id": 15,
    "title": "Nota Infographic",
    "name": "nota",
    "dataviz": 1,
    "uiux": 0,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 16,
    "title": "Vayu",
    "name": "vayu",
    "dataviz": 0,
    "uiux": 0,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 17,
    "title": "Typot",
    "name": "typot",
    "dataviz": 0,
    "uiux": 0,
    "newmedia": 1,
    "other": 0
  },
  {
    "id": 18,
    "title": "IITB Heritage Fund",
    "name": "iitbhf",
    "dataviz": 0,
    "uiux": 1,
    "newmedia": 0,
    "other": 0
  },
  {
    "id": 19,
    "title": "O-LAP",
    "name": "olap",
    "dataviz": 0,
    "uiux": 0,
    "newmedia": 1,
    "other": 1
  },
  {
    "id": 20,
    "title": "Before 2014",
    "name": "arch",
    "dataviz": 0,
    "uiux": 0,
    "newmedia": 0,
    "other": 1
  }
]

var datalenght = data.length;


/*filtering ********************************************
********************************************************
********************************************************/


        function erasedata(){
            document.getElementById("mumbaidata").style.opacity = "0";
            document.getElementById("drs").style.opacity = "0";
            
        }
        
        function showdata(){
            document.getElementById("mumbaidata").style.opacity = "1";
            document.getElementById("drs").style.opacity = "1";
            
        }


function eraseallthumb(){
    
    for(var i = 0; i<=datalenght; i++){
        document.getElementById(data[i].name).style.opacity = "0";
        
    }
   
    
}

function showallthumb(){
    
    for(var i = 0; i<=datalenght; i++){
        document.getElementById(data[i].name).style.opacity = "1";
        
    }
   
    
}





function showelement(x){
    document.getElementById(x).style.display = "inline-block";
   
}

function eraseelement(x){
    document.getElementById(x).style.display = "none";
}






function uiux(){
        
    for(var i = 0; i<datalenght; i++){
        
        if(data[i].uiux === 1){
            showelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "1";
            
        }
        
        else{
            
            document.getElementById(data[i].name).style.opacity = "0";
            eraseelement(data[i].name);
        }
    
    }
}


function dataviz(){
        
    for(var i = 0; i<datalenght; i++){
        if(data[i].dataviz === 1){
            showelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "1";
            
        }
        
        else{
            eraseelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "0";
        }
    
    }
}

function newmedia(){
        
    for(var i = 0; i<datalenght; i++){
        if(data[i].newmedia === 1){
            showelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "1";
            
        }
        
        else{
            eraseelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "0";
        }
    
    }
}


function other(){
        
    for(var i = 0; i<datalenght; i++){
        if(data[i].other === 1){
            showelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "1";
            
        }
        
        else{
            eraseelement(data[i].name);
            document.getElementById(data[i].name).style.opacity = "0";
        }
    
    }
}


function showall(){
        
    for(var i = 0; i<datalenght; i++){
            document.getElementById(data[i].name).style.opacity = "1";
            showelement(data[i].name);
               
        
    
    }
}



/*changecolorinfo ********************************************
********************************************************
********************************************************/

function changecolor(x){
    document.getElementById("aboutbutton").style.color = "#cecece";
    document.getElementById("skillsbutton").style.color = "#cecece";
    document.getElementById("newsbutton").style.color = "#cecece";
    document.getElementById("awardsbutton").style.color = "#cecece";
    document.getElementById("contactbutton").style.color = "#cecece";
    document.getElementById(x).style.color = "#212121";
    
}

/*changecolorhome ********************************************
********************************************************
********************************************************/

function changecolorhome(x){
    document.getElementById("all").style.color = "#cecece";
    document.getElementById("dataviz").style.color = "#cecece";
    document.getElementById("uiux").style.color = "#cecece";
    document.getElementById("newmedia").style.color = "#cecece";
    document.getElementById("other").style.color = "#cecece";
    document.getElementById(x).style.color = "#212121";
    
}

