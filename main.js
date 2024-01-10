try{
if(!window.top && top.location.hostname == "crazystuffofficial.github.io"){
  console.log("loaded!");
} else{
  while(true){
    window.location.reload();
  }
}
} catch(e){
  while(true){
    window.location.reload();
  }
}
