const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
    console.log("Grandparent clicked");
}
);

parent.addEventListener("click", () => {
    console.log("Parent clicked");
    // Prevent the event from bubbling up to the grandparent
    
});

//event capturing
//to stop event bubbling, we can use the stopPropagation method
// event bubbling is the process where an event starts from the target element and bubbles up to the root of the DOM tree
// event capturing is the process where an event starts from the root of the DOM tree and goes down to the target element


