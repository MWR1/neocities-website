
export default function manageObserver(details){

    if(details.create){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add(details.classToAdd);
                    observer.unobserve(details.reference.current);
                }
            })
        }, {
            root: null,
            threshold: details.threshold
        });
        observer.observe(details.reference.current);
    }
    else if(details.destroy)
        try {
            observer.unobserve(details.reference.current);
        } catch(e){}
}


/*
 * the try catch block is necessary so,
 * in the case where the user scrolled to the bottom(activated every animation),
 * I already unobserve the element when it isIntersecting, so when the user commutes to another page,
 * I attached a "destroy" event on componentWillUnmount, which will trigger the unobserve method again,
 * rendering an error, I suppose. So to prevent the error I put it in a try catch block... lmfao
 * I'm so smart /s 
*/