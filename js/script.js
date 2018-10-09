// document.getElementById("month").addEventListener('change', monthSelect);
document.getElementById("day").addEventListener('change', daySelect);


const signObj = {
  signs: ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"],
  endDays: [19, 18, 20, 19, 20, 21, 22, 22, 22, 22, 21, 21, 19, 18, 20],
};

function daySelect(){
  // gives index of month selction and an integer of selected day
  let month = document.getElementById("month").selectedIndex;
  let day = document.getElementById("day").value;

  // add function that adds the horoscope paragraph
  // condition for last month, last sign
  if(day > signObj.endDays[month]){
    displaySign(signObj.signs[month+1])
    // display content of the signs
    document.getElementById(signObj.signs[month+1]).style.display = "block";
  }else{
    displaySign(signObj.signs[month])
    document.getElementById(signObj.signs[month]).style.display = "block";
  }
}

function displaySign(msg) {
  document.getElementById("description").innerHTML = msg;
}
