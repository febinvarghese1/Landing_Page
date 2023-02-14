

const start = document.querySelector(".start");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const values = [start,first,second,third];






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
            let current = document.querySelector(`.hero__right_slider a[href='#${entry.target.id}']`);
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