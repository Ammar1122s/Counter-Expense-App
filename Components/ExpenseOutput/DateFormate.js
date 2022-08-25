export function DateFormate(date){
    return date.toISOString().slice(0,10)
}


export function Past7days(currentDay, daysMinus){
    return new Date(currentDay.getFullYear(), currentDay.getMonth() , currentDay.getDate() -  daysMinus)
}