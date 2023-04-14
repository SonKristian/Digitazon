console.log(count("caramella"))
function count(stringa){
    const mappa = new Map ()
    for(let i=0; i < stringa.length; i++){
        if(mappa.has(stringa[i])){
            mappa.set(stringa[i], mappa.get(stringa[i])+1)
        }else{
            mappa.set(stringa[i],1)
        }
    }
    return mappa
}