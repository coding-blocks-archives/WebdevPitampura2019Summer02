console.log(1)
console.log(2)


setTimeout(()=>{
    console.log("After 1 sec")
}, 1000)

for(let i=0; i<1e5; i++){
    console.log("blank")
}
console.log("done")