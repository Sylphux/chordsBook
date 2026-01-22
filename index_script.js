function toggleWelcome(){
  document.getElementById('first_time').style.display = "none"
  document.getElementById('choose_activity').style.display = "block"
}

if (sync() == true){ // if a cookie is already present (not the first time) then-. Or create a cookie anyway.
    toggleWelcome()
}