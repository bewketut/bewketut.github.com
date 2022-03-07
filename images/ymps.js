
ymaps.ready(drawGon);

var obstr1="<object dir='rtl' height='500px' style=' width:420px; direction:rtl; float: none; clear: both; margin: 2px auto;'data='";
var obstr2='</object>';
var gonstr="https://www.youtube.com/embed/4Du8-2g9J94'"

gonlat=12.677724,gonlon=37.4667, gonhint="Gondar! Click!"
gonhead="City of old Castles !!-tour $??/person"
function drawGon(){

gonMap= new ymaps.Map('gnmap',{center:[12.677724, 37.4667] , zoom:6, controls:[] }, { searchConrolProvider: 'yandex#search'}),

gonMap.setType('yandex#hybrid');
gonMark=addMark(gonlat,gonlon,gonstr,gonhint,gonhead);
gonMap.geoObjects.add(gonMark);
simienMark=addMark(13.49278,38.44361,"https://www.youtube.com/embed/9Eog20HtloI'","Simein Mts! Click!","Feel the Height !!");
gonMap.geoObjects.add(simienMark);
damMark= addMark2(11.21528,35.09306,"https://www.youtube.com/embed/04Cl6wYX_L4'","Renaissiance-Hidase Dam! Click!", "How big a dam!!",'assets/elecsock.jpg');
dankilMark= addMark(14.2418,40.3004,"https://www.youtube.com/embed/rRovCEi6OUo'", "Danakil Volcanos","The great active volcano");
addsMark= addMark(8.9806, 38.7578,"http://www.youtube.com/embed/'",'Head Office of Africa',"<span style='position:relative;width:700px;'>Welcome to AU Head quarter</span>");
gonMap.geoObjects.add(addsMark);
gonMap.geoObjects.add(dankilMark); 
gonMap.geoObjects.add(damMark);
}
//MLn8h59SnlY
function addMark(lat,lon, vid,hint, head){
gonMark= new ymaps.Placemark([lat, lon], {hintContent:hint, 
balloonContentBody:obstr1 + vid + obstr2,
balloonContentHeader: head }),
return gonMark;
}
function addMark2(lat,lon, vid,hint, head,icon){
gonMark= new ymaps.Placemark([lat, lon], {hintContent:hint, 
balloonContentBody:obstr1 + vid + obstr2,
balloonContentHeader: head }, {iconLayout: 'default#image',
iconImageHref:icon , iconImageSize: [24,37], 
iconImageOffset: [-3, -42]});

return gonMark;
}
