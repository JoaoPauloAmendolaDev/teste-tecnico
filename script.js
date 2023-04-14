let numberOfSixMonthsPassed = 0
let currentMonth = 11
let year = 2019

document.addEventListener("DOMContentLoaded", () => {
    const increaseMonths = document.getElementById("increaseMonths");
    const decreaseMonths = document.getElementById("decreaseMonths");
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const headerMonths = document.getElementById("headerMonths")


    //AQUI SÃO AS FUNÇÕES DE AUMENTAR OU DIMINUIR OS MESES
    increaseMonths.addEventListener("click", () => {
        currentMonth += 6
        console.log(numberOfSixMonthsPassed);

        if (currentMonth > 12) {
            year++
            currentMonth -= 12
        }

        headerMonths.innerHTML = `${`${(currentMonth !== 11 ? `Novembro/${year - 1}` : `Julho/${year}`)} a ${mesesDoAno[currentMonth - 1]}/${year}`}`;
    });

    decreaseMonths.addEventListener("click", () => {
        currentMonth -= 6
        console.log(numberOfSixMonthsPassed);

        if (currentMonth < 1) {
            year--
            currentMonth += 12
        }

        headerMonths.innerHTML = `${`${(currentMonth !== 11 ? `Dezembro/${year - 1}` : `Julho/${year}`)} a ${mesesDoAno[currentMonth - 1]}/${year}`}`;
    });
});

function toggleMail(identification) {
    const mail1 = document.getElementById("company1Solicitation")
    const mail2 = document.getElementById("company2Solicitation")
    const mail3 = document.getElementById("company3Solicitation")

    console.log('teeeeeeeeeste')
    console.log(identification)
    console.log(mail1)
    switch (identification) {
        case (1):
            if (mail1.classList.contains("hidden")) {
                console.log('entrei no 1')
                mail1.classList.remove("hidden")
            } else {
                console.log('entrei no 1')
                mail1.classList.add("hidden")
            }
            break
        case (2):
            if (mail2.classList.contains("hidden")) {
                console.log('entrei no 2')
                mail2.classList.remove("hidden")
            } else {
                console.log('entrei no 2')
                mail2.classList.add("hidden")
            }
            break
        case (3):
            if (mail3.classList.contains("hidden")) {
                console.log('entrei no 3')
                mail3.classList.remove("hidden")
            } else {
                console.log('entrei no 3')
                mail3.classList.add("hidden")
            }
            break
    }
}

