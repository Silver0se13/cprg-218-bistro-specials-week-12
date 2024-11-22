shake.addEventListener("click",function(){
    console.log("You shook me!");
    let response = Math.random();
    console.log(response);
    response = Math.floor(Math.random()*11); //0 to 10
    //response = Math.floor(Math.random())*10)+1; //1 to 10
    console.log(response);

    if(response==0){
        output.innerHTML="Yes, indeed."
    }
    
    if(response==1){
        output.innerHTML="Maybe."
    }
    
    if(response==2){
        output.innerHTML="Idk."
    }
    
    if(response==3){
        output.innerHTML="I think so."
    }
    
    if(response==4){
        output.innerHTML="Never."
    }
    
    if(response==5){
        output.innerHTML="No way."
    }
    
    if(response==6){
        output.innerHTML="Sure."
    }
    
    if(response==7){
        output.innerHTML="I doubt it."
    }
    
    if(response==8){
        output.innerHTML="Perhaps."
    }
    
    if(response==9){
        output.innerHTML="100%."
    }
    
    if(response==10){
        output.innerHTML="For sure."
    }
});
