function makeGreeting(name){
    return function greeting(){
        console.log(`Hello, ${name}!`);
    }
}

let greetingAlice = makeGreeting ('Alice');
greetingAlice();

let greetingBob = makeGreeting ('Bob');
greetingBob();

// La función greeting recuerda la variable name de su scope original, 
// aunque makeGreeting ya terminó de ejecutarse.