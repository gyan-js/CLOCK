setInterval(() =>{
         const time = document.getElementById('time');
         
         let date = new Date();
         let hours = date.getHours();
         let minutes = date.getMinutes();
         let seconds = date.getSeconds();
         let night = 'AM'
     
         if(hours > 12){
             hours = hours - 12;
             night = 'PM'
         }
     
         if(minutes < 10){
            minutes = '0' + minutes;
         }
     
         if (seconds < 10 ) {
             seconds = '0' + seconds;
         }
     
         time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + night;
     });