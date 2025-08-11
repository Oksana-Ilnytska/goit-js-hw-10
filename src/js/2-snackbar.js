import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector(".js-form");
formEl.addEventListener('submit', (e) => {
    e.preventDefault();


const delayValue = Number(formEl.delay.value.trim());
const state = formEl.state.value;
const isActive = true;
 

createPromise(state, isActive, delayValue)
        .then(message => {
            iziToast.show({ 
                message: message,
                position: 'topCenter',
                color: '#FFFFFF',           
                backgroundColor: '#326101'
            }); 
        })
        .catch(message => {
            iziToast.show({ 
                message: message,
                position: 'bottomCenter',
                color: '#FFFFFF',           
                backgroundColor: '#EF4040'
            }); 
        });

        formEl.reset();
});


function createPromise(state, isActive, delayValue) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (isActive && state === "fulfilled") {
                res(`✅ Fulfilled promise in ${delayValue}ms`);  
            } else {
                rej(`❌ Rejected promise in ${delayValue}ms`);
            }
        }, delayValue);
    })
} 



