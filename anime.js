
<script type="text/javascript">
        (function()
            var words = [
                "Samagna",
                "",
                "",
                ""
            ];
            var i = 0;
            var highlightElement = document.getElementById('highlight');
            
            setInterval(function(){
                highlightElement.style.opacity = 0}; // Start fade out
                setTimeout(function() {
                    highlightElement.textContent = words[i]}; // Change text
                    highlightElement.style.opacity = 1; // Start fade in
                    i = (i + 1) % words.length;
                , 1500); // 1.5 seconds to match the fade-out transition
            , 3000); // Change the word every 3 seconds
        )();
    </script>