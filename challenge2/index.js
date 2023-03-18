const calculate = () => {

    let speed = document.querySelector("#speed").value;
    
    let status = "";
    
    let totalspeed =
        parseFloat(speed);
        
    let demerit = (totalspeed - 70) / 5;
    if (demerit <= 0 ) {
        status = "OK";
    } else if (demerit >= 1 && demerit <= 4 ) {
        status = "Poor";
    } else if (demerit >= 5 && demerit <= 11 ) {
        status = "warning";
    } else { (demerit >= 12 )
        status = "License suspended";
    }
    
    if (speed == "")
          {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
       
            
    } else {
    
        if (demerit >= 12) {
        document.querySelector("#showdata").innerHTML =
            ` Total speed:${totalspeed} km/h <br>
            Demerit is Points:${demerit} <br>
            Your driving status :${status}. <br> You are an incompetent driver.`;
        } 
       
        
        else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Total speed:${totalspeed} km/h <br>
            Demerit  Points:${demerit} <br>
            Your driving status :${status}. <br> You are a competent driver. `;
        
        }
    }
}
;