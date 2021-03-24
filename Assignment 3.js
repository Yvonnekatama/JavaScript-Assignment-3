function getGrade(marks){
    let grade=75;
    
    switch(true){
        case grade>=80:
            return'A';
            break;
        case grade>=70:
            return 'B';
            break;
        case grade>=60:
            return'C';
            break;
        case grade >=50:
            return 'D';
            break;
        case grade>=40:
            return'E';
            break; 
           default:
             return 'F';
            
            
    
    }
    
    
}
console.log(getGrade());