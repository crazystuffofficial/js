var x;
try{
if(!window.top && top.location.hostname == "crazystuffofficial.github.io"){
  console.log("loaded!");
} else{
  alert("Don't copy my website.");
  while(true){
    window.open(location.href);
  }
}
} catch(e){
  alert("Don't copy my website.");
  while(true){
   window.open(location.href);
  }
}
