for (let outerLoop = 0; outerLoop < 5; outerLoop++) {
    for (let innerLoop = 0; innerLoop < 5; innerLoop++) {
        +
        console.log({ outerLoop: outerLoop, innerLoop: innerLoop })
    }
}

for (let outerLoop = 0; outerLoop < 5; outerLoop++) {
    console.log({ outerLoop: outerLoop })
}