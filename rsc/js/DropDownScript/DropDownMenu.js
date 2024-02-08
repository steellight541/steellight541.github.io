// dropdown menu
document.addEventListener("DOMContentLoaded", () => {
    const dropSelector = document.getElementsByClassName("dropSelector")[0];
    const drop = document.getElementById("dropElements");
    const dropItems = drop.getElementsByTagName("li");
    let dropOpen = false;
    
    dropSelector.addEventListener("click", () => {
        drop.style.width = dropSelector.offsetWidth + "px";
        drop.style.left = dropSelector.offsetLeft + "px";
        drop.style.top = dropSelector.offsetTop + dropSelector.offsetHeight + "px";
        drop.style.display = dropOpen ? "none": "block";
        dropOpen = dropOpen ? false : true;
    });

    for (let i = 0; i < dropItems.length; i++) {
        dropItems[i].addEventListener("click", () => {
            drop.style.display = "none";
            dropOpen = false;
        });
    }
});