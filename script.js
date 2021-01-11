let english;
let punjabi;
let computing;

const getResult = () => {
    english = parseInt(document.getElementById('english').value);
    punjabi = parseInt(document.getElementById('punjabi').value);
    computing = parseInt(document.getElementById('computing').value);

    const average = (english + punjabi + computing) / 3;

    if (average >= 85) {
        document.getElementById('resultOutput').innerHTML = 'Your Grade is A! Keep it up';
    } else if (average >= 70) {
        document.getElementById('resultOutput').innerHTML = 'Your Grade is B! You can still improve';
    } else {
        document.getElementById('resultOutput').innerHTML = 'Your Grade is C! You need to work hard';
    } 
}