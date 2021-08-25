class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode,enteredCode) {
        textSize(15);
        fill("black");
        text(code, 300,200);
    if(actualCode === enteredCode.toUpperCase()) 
        return true
    else
        return false
    }

}