gsap.to('#box',{
    duration:2,
    delay:1,
    x:1000,
    rotation:90,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat:1, // infinte use karne ke liye -1 use karen by default 1 baar to chalega hi but 1 vaule dene se wo do baar chelega
    yoyo:true, // dono direction mein use karne ke liye yoyo use hota hai
})


gsap.from('h2',{
    opacity:0,
    duration:1,
    delay:1,
    y:30,
    stagger:1,
})

//Gsap timeline concept 
//timeline basically chizon ko line by line chalata hai  jab tak pahle wala complete nahi ho jaata tab tak dusra perform nahi karega
var tl = gsap.timeline()

tl.to('#box',{
    duration:2,
    delay:1,
    x:1000,
    rotation:90,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat:1, 
    yoyo:true, 
})
