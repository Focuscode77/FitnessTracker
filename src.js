//Set Html

// Passes in a value if less than 10 adds in a zero to it
const addZeroToNumberIfLessThan10 = num => {

    if (num < 10) {

        return "0" + num;
    }

    return num;

};

console.log(addZeroToNumberIfLessThan10(1));


const getHr = () => {
    const time = new Date();
    let hr = time.getHours();

    if (hr > 12) {

        hr = hr - 12;

    }

    return hr;

};

const getMin = () => {
    const time = new Date();
    const min = time.getMinutes();

    return min;

};



const getSec = () => {
    const time = new Date();
    const sec = time.getSeconds();

    return sec;

};

const getTimeOfDay = () => {
    const time = new Date();
    const hr = time.getHours();
    let timeOfDay = "AM";

    if (hr > 11) {

        timeOfDay = "PM";

    }

    return timeOfDay;
};

const setHTML = (hr, min, sec) => {

    const hour = document.getElementById("hr");
    const minutes = document.getElementById("min");
    const seconds = document.getElementById("sec");
    hour.innerText = addZeroToNumberIfLessThan10(hr);
    minutes.innerText = addZeroToNumberIfLessThan10(min);
    seconds.innerText = addZeroToNumberIfLessThan10(sec);


};

//setHTML(3);


const setDate = () => {

    const hr = getHr();
    const min = getMin();
    const sec = getSec();

    setHTML(hr, min, sec);

}

setInterval(() => {

    setDate()



}, 1000);