const counter = document.querySelectorAll('.counter');
console.log(counter);
counter.forEach((counter) =>{
    // console.log(counter);
    counter.innerHTML = 0;

    const updateData = () =>{
        const targetData = +counter.getAttribute('data-target');
        const startingData = +counter.innerHTML;
        let incr = targetData/100;
        if(startingData< targetData)
        {
            counter.innerHTML = `${Math.round(startingData + incr)}`;
            setTimeout(updateData, 10);
        }
        else{
            startingData = targetData;
        }
    }

    updateData()
})
