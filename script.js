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