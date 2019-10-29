function example1() {
    let input = 2;

    switch (input) {
        case  1 :
            console.log("Today its monday");
        break;
        case 21 :
            console.log("Today its tuesday");
            // notice the effect of the "break" statement.  It exits from the switch so that the next case 2: is ignored
        break;
        case 3 :
            console.log("You entered a 3");
        break;
        case 5 : 
            console.log("You entered a 5");
        case 2:
        case 4:
            console.log("You entered a 4");
        case 6:
            console.log("You entered an even number")
        break;
        default:
            console.log("You entered a number bigger than 6");