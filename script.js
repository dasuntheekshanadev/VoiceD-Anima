function slideTabs() {
    var googleTab = document.getElementById("google-tab");
    var imageTab = document.getElementById("image-tab");
    
    if (googleTab.classList.contains("active-tab")) {
        googleTab.classList.remove("active-tab");
        imageTab.classList.add("active-tab");
    } else {
        googleTab.classList.add("active-tab");
        imageTab.classList.remove("active-tab");
    }
}
