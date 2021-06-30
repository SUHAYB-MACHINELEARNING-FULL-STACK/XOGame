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
        
        
        
        $("#d2 #child #XOGame #d3").click(()=>{ 
            $("#d2 #child #XOGame #d3").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d3").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d4").click(()=>{ 
            $("#d2 #child #XOGame #d4").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d4").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d5").click(()=>{ 
            $("#d2 #child #XOGame #d5").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d5").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d6").click(()=>{ 
            $("#d2 #child #XOGame #d6").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d6").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d7").click(()=>{ 
            $("#d2 #child #XOGame #d7").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d7").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d8").click(()=>{ 
            $("#d2 #child #XOGame #d8").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d8").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d9").click(()=>{ 
            $("#d2 #child #XOGame #d9").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d9").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d10").click(()=>{ 
            $("#d2 #child #XOGame #d10").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d10").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        $("#d2 #child #XOGame #d11").click(()=>{ 
            $("#d2 #child #XOGame #d11").css({color:'#e6b31e'})  
            $("#d2 #child #XOGame #d11").html(`<p>${XO}</p>`) 
            XO = (XO=="X"?"O":"X")
        })
        
        
    
    }) 
    }
});
