// Code your solution in this file!

const name = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(name){
    return name.slice(0,2)
}

const returnLastTwoDrivers = function(name){
    return name.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplierFare) {
    return function(number) {
        return multiplierFare * number
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(name, func) {
    return func(name)
}