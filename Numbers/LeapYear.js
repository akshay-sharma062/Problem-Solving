

let year;


function LeapYear(year) {

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year,"is an leap year")
    }
    else{

        console.log(year,"is Not  an leap year")
    }
}





LeapYear(2000)