
	$(document).ready(function() {    

      $("#owl-demo4").owlCarousel({
      jsonPath : "http://www.shahreroya.ir/phonegap/api/setting.json" ,
      jsonSuccess : customData2 ,
  });
 
  function customData2(data){
    var content = "";
    for(var i in data["items"]){   
       var value = data["items"][i].value;
       var title = data["items"][i].title;
	if(title=='update' && value==1){
alert('آپدیت جدیدی از برنامه منتشره شده لطفا برنامه خود را بروز نماید!!')
  }
  }
 }

      $("#owl-demo").owlCarousel({
      jsonPath : "http://www.shahreroya.ir/phonegap/api/slider.json" ,
      jsonSuccess : customDataSuccess ,
	  navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true,
      autoPlay: 5000,
	  pagination : false,
	  navigation : false
  });
 
  function customDataSuccess(data){
    var content = "";
    for(var i in data["items"]){   
       var img = data["items"][i].img;
       var alt = data["items"][i].alt;
	   var direct = data["items"][i].direct;
	   var ip = data["items"][i].ip;
       content += "<div class='item2'><img src=\"http://" +ip+direct+img+ "\" alt=\"" +alt+ "\"></div>"
    }
    $("#owl-demo").html(content);
  }
 

var owl = $("#owl-demo2");

owl.owlCarousel({
jsonPath : "http://www.shahreroya.ir/phonegap/api/sinma.json" ,
jsonSuccess : DataSuccess ,        
	itemsCustom : [
   [0, 3],
	  [450, 3],
	  [600, 3],
	  [700, 3],
	  [1000, 3],
	  [1200, 3],
	  [1400, 4],
	  [1600, 4]
	],
	pagination : false,
    navigation : false,
    autoHeight : false,
});
function DataSuccess(data){
    var content = "";
    for(var i in data["items"]){
       var id = data["items"][i].id;
       var img = data["items"][i].img;
       var alt = data["items"][i].alt;
	   var direct = data["items"][i].direct;
	   var ip = data["items"][i].ip;
 
       content += "<div class='item'><a href='#content' data-transition='slide'  onClick='posts("+id+")' ><img src=\"http://" +ip+direct+img+ "\" alt=\"" +alt+ "\"></a></div>"
    }
    $("#owl-demo2").html(content);
  }

var owl = $("#owl-demo3");

owl.owlCarousel({
   
	itemsCustom : [
	  [0, 1],
	  [450, 1],
	  [600, 1],
	  [700, 1],
	  [1000, 1],
	  [1200, 1],
	  [1400, 1],
	  [1600, 3]

	],
	pagination : false,
navigation : false
});


document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#pageone')){
    navigator.notification.confirm("آیا می خواهید از برنامه خارج شوید؟", onConfirm, "خروج از برنامه!", "بله,خیر"); 
    // Prompt the user with the choice
    function onConfirm(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp();// Otherwise we quit the app.
    }
}
  
}else {
        navigator.app.backHistory()
    }
}, false);


});