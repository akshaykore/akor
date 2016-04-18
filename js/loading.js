 $(window).ready(function() {
    $('#loading').hide();
            $("#loading").show();
setTimeout(function() { $("#loading").hide(); }, 1000);
});
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
        
        