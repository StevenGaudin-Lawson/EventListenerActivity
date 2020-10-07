

window.addEventListener('load', function(e){

    const featureLink = document.querySelector('p > a')


    featureLink.addEventListener('click', featureLinkHandler)


    // featureLinkHandler()
    // Called by click event 
    function featureLinkHandler(evt){

        let featureImage = document.querySelector('img.feature')
        console.log(featureImage)
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
        evt.preventDefault();
    }
    

})




