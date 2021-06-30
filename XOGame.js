$("#d1 button").click(()=>{ 
    if($("#d1 input").val().length == 0) {
        $("#p1").css("color","red")
        $("#p1").text("Enter Your Name, Please")
    } else {
    $("#p1").text("Your Name is valid , Good Job!")
    $("#p1").css("color","green")
    $("#d1").slideUp(3000,()=>{ 
    

        const YourName = $("#d1 input").val()
        
        $("#d2").css({ height:'855px',width:'100%',top:'0px',display:'flex',justifyContent:'center' })
        
        
        $("#d2 #child h1").css("font-size","75px")
        
        $("#d2 #child h1").text(YourName)
         
        $("#d2 #child #XOGame").css({ backgroundColor:'red',display:'flex',flexWrap:'wrap', width:'660px'})
        
        $("#d2 #child #XOGame div").css({ backgroundColor:'#141d2b',margin:'10px',height:'200px',width:'200px' })
        
            
                $("#d2").slideDown(3000)
            
        let XO = 'X'
        
        /* ............................................... */
        
        
        for(let i=3; i<=11; i++) {
            $(`#d2 #child #XOGame #d${i}`).click(()=>{ 
                $(`#d2 #child #XOGame #d${i}`).css({color:'#e6b31e'})  
                $(`#d2 #child #XOGame #d${i}`).html(`<p>${XO}</p>`) 
                XO = (XO=="X"?"O":"X")
            })
        }
        
    
    }) 
    }
});
