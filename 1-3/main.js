let BTN = document.querySelector('button')
BTN.addEventListener('click',
    function () {
        let userInput = +document.querySelector('input').value
  
        switch (userInput) {
            case 3:
                console.log('shakom');
                return;
            case 5:
                console.log('lhitraot');
                return
            case 7:
                console.log('toda');
                return;
            default:
                console.log('no answer');
        }
    })

// 2
btn2.addEventListener('click',
function checkNameUser() {
    
    switch (inpt2.value) {
        case 'jacob':
            printName.innerHTML+=
            `
            <p>${inpt2.value}</p>
            `
            return;
            case 'Nathan':
                printName.innerHTML+=
                `
                <p>${inpt2.value.toUpperCase()}</p>
                `
                return;  
            case 'Dalya':
                printName.innerHTML+=
                    `
                    <p>${inpt2.value.toLowerCase()}</p>
                    `
                return;      
            default:
                printName.innerHTML+=
                `
                <p>no exisst</p>
                `
            return; 
          
    }
})
