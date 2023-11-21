// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <=10; j++) {
//             // console.log(`Inner Loop ${j}`);

//             console.log(`${i} * ${j} = ${i*j} `);
//     }
//     }

    // let myArray=['flash','batman','superman']
    // for (let i = 0; i < myArray.length; i++) {
    //     const element = myArray[i];
    //     console.log(element);
        
    // }

    // break;
    for (let i = 1; i <=10; i++) {
        if (i==5) {
            console.log(`Detected ${i}`);
            break;
        }
       console.log(i);
        
    }
    // continue
    for (let i = 1; i <=10; i++) {
        if (i==5) {
            console.log(`Detected ${i}`);
            continue;
        }
       console.log(i);
        
    }