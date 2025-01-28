const img = [
    "asset/Stiker1.gif",
    "asset/Stiker2.gif",
    "asset/Stiker3.gif",
    "asset/Stiker4.gif",
    "asset/Stiker5.gif",
    "asset/Stiker6.gif",
    "asset/Stiker7.gif",
    "asset/Stiker8.gif",
    "asset/Stiker9.gif",
    "asset/Stiker10.gif",
    "asset/Stiker11.gif",
    "asset/Stiker12.gif",
    "asset/Stiker13.gif",
    "asset/Stiker14.gif",
    "asset/Stiker15.gif",
]

const text = [
    "Hello Caleb",
    "How are you?",
    "Today is your spesial day!!",
    "Happy Brithday!!",
    "First of all,I want to thank you for choosing to be my friend",
    "You are a good man and a great listener,even though you never share your own stories",
    "I pray to God every day that your dreams come true,and that one day you will have a harmonious family of your own in the future",
    "I'm sorry if my words before have ever upset or made you uncomfortable",
    "It's okay to fall sometimes,but you must always get back up and continue chasing your dreams",
    "I know i'm not someone significant in your life",
    "I'm just someone who happened to know you,but these feelings I have are real and sincere",
    "I won't bother you anymore as you focus on pursuing your dreams now and in the future",
    "Love you and stay healthy ",
    "Warm regards,your friend,Nathasa Valeri K",
    "Goodbye",
]

let indexSaatIni = 0;

function start(){
    document.querySelector(".Start-container").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function next() {
    const gifElement = document.querySelector(".gif");
    const txtElement = document.querySelector(".text");
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    const massageContainer = document.querySelector('.massage-container');
    const massageContent = document.querySelector('.massage-content');
    
    // Menambahkan efek perbesaran pada container, content, massage-container, dan massage-content
    container.classList.add('scale-up');
    content.classList.add('scale-up');
    massageContainer.classList.add('scale-up');
    massageContent.classList.add('scale-up');
    
    // Menghilangkan kelas setelah transisi selesai agar efek bisa diulang
    setTimeout(() => {
        container.classList.remove('scale-up');
        content.classList.remove('scale-up');
        massageContainer.classList.remove('scale-up');
        massageContent.classList.remove('scale-up');
    }, 350);

    if(indexSaatIni < img.length){
        gifElement.src = img[indexSaatIni];
        txtElement.textContent = text[indexSaatIni];
        indexSaatIni++;
    }else{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".massage-container").style.display = "block";
    }
}

function send() {
    const message = document.querySelector(".text-massage").value;
    const phoneNumber = "6282182058737"; // Ganti dengan nomor WA Anda
    if (message.trim() !== "") {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    } else {
        alert("Please enter a message.");
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("sound/Audio.mp3");
    audio.loop = true; // Ulang terus
    audio.play().catch(error => {
        console.log("Autoplay gagal, menunggu interaksi pengguna:", error);
    });
});

window.onload = function() {
    next();
};

