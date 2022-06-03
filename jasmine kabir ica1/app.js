(function () {

    const articles = document.querySelectorAll('article');
    
    for (const article of articles.values()) {
        
        new Waypoint.Inview({
            
            element: article, 
            entered(direction) {
                
                if (direction == 'down') {
                    article.classList.add('move-up');
                }
               
            }, 
            exit(direction) {
                
                if (direction == 'up') {
                    article.classList.remove('move-up');
                }
                
            }
            
        });
        
    }
    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0.5
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);
    document.querySelectorAll('#grid>div').forEach(el => obs.observe(el));
    
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += "responsive";
      } else {
        x.className = "topnav";
      }
}    
    
    
 })();

