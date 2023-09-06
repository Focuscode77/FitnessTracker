//Set Html

// Passes in a value if less than 10 adds in a zero to it
const addZeroToNumberIfLessThan10 = num => {

    if (num < 10) {

        return "0" + num;
    }

    return num;

};

console.log(addZeroToNumberIfLessThan10(3));


const getHr = () => {
    const time = new Date();
    let hr = time.getHours();

    if (hr > 12) {

        hr = hr - 12;


    }

    return hr;

};


const setHTML = (hr) => {

    const hour = document.getElementById("hr");
    hour.innerText = addZeroToNumberIfLessThan10(hr);


};

//setHTML(3);


const setDate = () => {

    const hr = getHr();

    setHTML(hr);

}

setInterval(() => {

    setDate()



}, 1000);