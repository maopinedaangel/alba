export default {

    calculateAge: function(birthday) {
        let birthdayDate = new Date(birthday)
        let ageDifMs = Date.now() - birthdayDate.getTime();        
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);        
    }
}