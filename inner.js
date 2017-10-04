function outer(name) {
    console.log("outer : "+ name)
    function inner(name) {
        console.log("inner : "+ name);
    }
    inner("maravanthe"); //I can able to call here;
}

var outer = new outer("Raj");

outer("esh") //will thrwo error, since I did not return inner fun