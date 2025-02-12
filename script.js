var dropdownBool = true;

function dropdown(){
    if(dropdownBool){
        document.getElementById('navList').style.display = 'block';
        document.getElementById('dropdown').style.rotate = "180deg";
        dropdownBool = false;
    }
    else{
        document.getElementById('navList').style.display = 'none';
        document.getElementById('dropdown').style.rotate = "0deg";
        dropdownBool = true;
    }
}