function receivesAFunction(callback){
    callback();

}
function responds(){
    return "You are special";
}

receivesAFunction(responds);

function returnsANamedFunction(){
    return function addNumbers(){
        return "200+10";
       
    }
}

returnsANamedFunction(addNumbers);

function returnsAnAnonymousFunction(){
    return function (){
        return "You did it!";
    }
}
returnsAnAnonymousFunction();