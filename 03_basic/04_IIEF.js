// Immediately Invocked Function Expression (IIFE)

(function chai(){
    // Named iife
    console.log('DB CONNECED'); // GGlobal scope se problem hota hai kai bar so we use IIFE
})();
// chai()

(function orCode(){
    console.log('DB CONNECED Two'); 
})();
((name)=> {
    console.log(`DB CONNECED Two ${name}`); 
})('Arjun')