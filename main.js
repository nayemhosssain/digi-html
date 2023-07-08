var current_level = 3002;

     function timer() {

        var days = Math.floor(current_level/86400);
        var remainingDays = current_level - (days * 86400);

        //if (days <= 0){
        //    days = current_level;
        //}

        var hours = Math.floor(remainingDays/3600);
        var remainingHours = remainingDays - (hours * 3600);

        //if (hours >= 24){
        //     hours = 23;
        //}

        var minutes = Math.floor(remainingHours/60);
        var remainingMinutes = remainingHours - (minutes * 60);

        //if (minutes >= 60) {
        //     minutes = 59;
        //}

        var seconds = remainingMinutes;

        document.getElementById('countdown').innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        //if (seconds == 0) {
        //    clearInterval(countdownTimer);
        //     document.getElementById('countdown').innerHTML = "Completed";
        //}

        current_level--;
     }
     var countdownTimer = setInterval(timer, 1000);