if(window.self != window.top && location.hostname == "crazystuffofficial.github.io"){
  console.log("loaded!");
} else{
  alert("Don't copy my website.");
  while(true){
    window.open(location.href);
  }
}
