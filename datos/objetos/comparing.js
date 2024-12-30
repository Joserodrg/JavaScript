
let wende1 = new Date(1980, 10, 9),
    wende2 = new Date(1980, 10, 9);

//  wende1 === wende2; = true;
// wende1 === new Date(1980, 10, 9) = false;

wende1.getTime() === wende2.getTime(); 
//true;