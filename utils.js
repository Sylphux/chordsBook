// Global functions useful across all the pages

function setCookie(cname, val, exdays = 2000) {
  cvalue = JSON.stringify(val)
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}

function deleteCookie(name){
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  checkForCookies()
  checkUnsaved()
}

function searchCookie(){
  if (document.cookie != ""){
    console.log("Cookie detected")
    toggleWelcome()
  } else {
    console.log("No cookie detected")
    savedParams.isNew = false
    setCookie("savedParams", savedParams)
    console.log("Cookie created :")
    console.log(document.cookie)
  }
}

let savedParams = {
  isNew: true,
  savedChords: {
    "Fly me to the moon": { 
      transpose: 0, 
      chords: ["Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bø", "E", "Am", "A7"]
    }
  },
  quizzHighScore: 0,
}

function save(){ // saves progress to cookie
  setCookie("savedParams", savedParams)
  console.log("Saved cookie")
}

function load(){ // loads progress from cookie
    savedParams = getCookie("savedParams")
    console.log("Loaded cookie")
}

function sync(){
  if (document.cookie == ""){
    save()
    return false
  } else {
    load()
    return true
  }
}