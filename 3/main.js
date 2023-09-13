btn.addEventListener('click',()=>
{
    switch (math.value) {
        case '*':
            console.log(+num1.value*+num2.value);
            break;
        case '-':
            console.log(+num1.value-+num2.value);
            break;
        case '/':
            console.log(+num1.value/+num2.value);
            break; 
        case '+':
            console.log(+num1.value+(+num2.value));
            break;   
        default:
            break;
    }   
})
//4
