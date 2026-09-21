const calculateButton = document.getElementById("calculate");

const attendedInput = document.getElementById("attended");
const totalInput = document.getElementById("total");
const requiredInput = document.getElementById("required");

const result = document.getElementById("result");

calculateButton.addEventListener("click", function() {
    const attended = Number(attendedInput.value);
    const total = Number(totalInput.value);
    const required = Number(requiredInput.value);

    if (
        attendedInput.value === "" ||
        totalInput.value === "" ||
        requiredInput.value === ""
        ){
            result.textContent = "Please fill all the fields";
            return;
        }

    if(total <= 0){
        result.textContent = "Total lectures must be greater than 0.";
        return;
    }

    if (attended < 0 || attended> total){
        result.textContent = "Attended lectures cannot be greater than total lectures.";
        return;
    }

    if(required < 0 || required > 100){
        result.textContent = "Required attendance must be between 0% and 100%.";
        return;
    }

    const attendance = (attended/total)*100;

    console.log("Attendance :", attendance);

    result.textContent = `Your Attendance is ${attendance.toFixed(2)}%`;

    const maxBunks = Math.floor((attended * 100 / required) - total);

    if(attendance >= required){
        result.innerHTML += `<br> You can bunk ${maxBunks} lectures.`;
    }
    else{
        const requiredLectures = Math.ceil(
            (required * total - 100 * attended) / (100 - required)
        );

        result.innerHTML += `<br>You need to attend ${requiredLectures} more lectures to reach ${required}%.`;
    }
});