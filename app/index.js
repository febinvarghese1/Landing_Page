

const start = document.querySelector(".start");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const values = [start,first,second,third];




// values.forEach(value=>{
//     const rect = value.getBoundingClientRect();
//     console.log(rect.top.toFixed())
// })

// const windowHeight = window.innerHeight;

// window.addEventListener("scroll",()=>{
//     const scrollTop = window.scrollY;
//     values.forEach((section,i)=>{
//         if(section.offsetTop< scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2){
//             console.log(i)
//         }
//     })
// })


const sliders = document.querySelectorAll(".hero__right_slider a");
console.log(sliders)

const removeActiveClass = () =>{
    sliders.forEach(slider=>{
        slider.classList.remove("active");
    })

}




const addActiveClass = (entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            let slider = document.querySelector(".hero__right_slider");
            console.log()
            let current = document.querySelector(`.hero__right_slider a[href='#${entry.target.id}']`);
            console.log(current);
            removeActiveClass();
            current.classList.add("active");
        }
    })
}


const options = {
    threshold: 0.8,
};


const observer = new IntersectionObserver(addActiveClass,options);


values.forEach(section=>{
    observer.observe(section);
})