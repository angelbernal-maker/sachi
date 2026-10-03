// ================================
// WELCOME MESSAGE
// ================================

window.addEventListener("load", function () {

    console.log("Teacher's Month website loaded successfully! ❤️");

});


// ================================
// BUTTON EFFECT
// ================================

const readButton = document.querySelector(".btn");

if (readButton) {

    readButton.addEventListener("click", function () {

        console.log("Opening the message section... 💌");

    });

}


// ================================
// PHOTO CLICK EFFECT
// ================================

const teacherPhoto = document.querySelector(".teacher-photo");

if (teacherPhoto) {

    teacherPhoto.addEventListener("click", function () {

        this.classList.toggle("photo-active");

    });

}


// ================================
// MUSIC MESSAGE
// ================================

const audio = document.querySelector("audio");

if (audio) {

    audio.addEventListener("play", function () {

        console.log("Music is playing. 🎵");

    });

    audio.addEventListener("pause", function () {

        console.log("Music paused. ⏸️");

    });

}


// ================================
// SCROLL ANIMATION
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    observer.observe(section);

});