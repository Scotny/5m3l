alert("Sizda hozir random sonlar chiqishni boshledi😉")

let num1 = Math.round(Math.random()*100)
let num2 = num1*2
let num3 = num1/2
let num4 = num1%3
let num5 = alert("Random orqali chiqqan son: " + num1)

if (confirm("biz random sonni 2 ga kopaytirmoqchimiz va bo'lmoqchimiz!") == true) {
    alert("Random orqali chiqqan son: " + num1 + " edi\n" + "biz uni 2 ga ko'paytirib " + num2 + " sonni chiqardik,\n" + "va shu sonni 2 ga bo'lib: " + num3 + " sonini chiqardik,\n" + "va shu sonni 3 ga bolgandagi qoldiq: " + num4 + " sonini chiqardik")
} else {}

