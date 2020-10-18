const InitJquery = () => {
  
  // Select the node that will be observed for mutations
  const targetNode = document.getElementById('body-content');
  // Options for the observer (which mutations to observe)
  const config = { attributes: false, childList: true, subtree: false };
  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            reinint();
        }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

    const reinint = () => {

        const collapsibles = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibles)
        const tabs = document.querySelectorAll('.tabs')
        M.Tabs.init(tabs);
        const tooltips = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(tooltips);
        
       // $('.carousel').carousel();
        $('.parallax').parallax();
        $('.materialboxed').materialbox();
        $('.slider').slider();
        $('.slider').slider('next');

        // const elemSlider = document.querySelectorAll('.slider');
        // M.Slider.init(elemSlider, 
        //   {
        //     indicators:false, 
        //     duration:300
        //   });
    }
    //end reinit
    
    //tab target tidak perlu di inisialisasi di obsorver lagi karena berada di luar page
    $('.tap-target').tapTarget();
    $('.tap-target').tapTarget('open');

    // const elems = document.querySelectorAll('.materialboxed');
    // let instances = M.Materialbox.init(elems, options);

    //logo auto move in banner home
    // const autoplay = () => {
    //   $('.carousel').carousel('next');
    // }
    // setInterval(autoplay, 6000);

}
export default InitJquery;