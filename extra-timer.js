const divJs = document.querySelector('.timeCounter')
       const startButton = document.querySelector('.start-button')
       const lapsButton = document.querySelector('.laps-button')
       const lapsContainer =  document.querySelector('.HTML-generate')

       let totalTime = 0;
       let id = ''
       let result = "00:00";
       let emptyArray = [];


       function Starting(){
            id = setInterval(() => {
            totalTime++;
            let m = Math.floor(totalTime / 60);
            let s = totalTime % 60;
            result = String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");

            divJs.innerHTML = result;
        },1000)}

        function realTime (){
            return result;
        }
        function StartTimer(){
        if ( startButton.innerHTML === "start"){
            startButton.innerHTML = "stop";
            lapsButton.innerHTML = "laps";
            Starting();
            }
        else {
            lapsButton.innerHTML = "reset"  
            clearInterval(id);
            startButton.innerHTML = "start"
        }
       }

       function ResetButton () {
        if( lapsButton.innerHTML === "laps" ){
            let HTML = '';  
            emptyArray.push(realTime()); 
            emptyArray.forEach((value) =>{
            let HTMLcodes = `<p>Laps:${value}</p>`;
            HTML += HTMLcodes; 
        })
            lapsContainer.innerHTML = HTML;
            
        } else {
            clearInterval(id);
            divJs.innerHTML = "00:00";
            totalTime = 0;
            lapsContainer.innerHTML = '';
            lapsButton.innerHTML = "laps";
            emptyArray = [];
            result = "00:00"
        }
       }

       