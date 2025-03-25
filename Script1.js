// condition testing 
proximity_s= true;
locktouch_s= false;
camara_image= true;
object_identified= "Human";

if(proximity_s && camara_image){
    console.log("Something infront of the door.");
}else if(proximity_s && locktouch_s){
    console.log("Something trying to unlock the door.");
}else if(proximity_s && object_identified == "Human"){
    console.log("Someone infront of the door");
}else if(proximity_s || camara_image){
    console.log("Something infront of the door");
}