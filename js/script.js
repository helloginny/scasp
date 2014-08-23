$(document).ready(function() {
    $("#sidebar li a").mouseover(function(){$(this).stop().animate({backgroundColor: "#b4b1a7"},{queue:false, duration:100}) });
    $("#sidebar li a").mouseout(function(){$(this).stop().animate({backgroundColor: "#c8c6ba"},{queue:false, duration:300})});
	$("#sidebar li.active").mouseout(function(){$(this).stop().animate({backgroundColor: "#b4b1a7"},{queue:false, duration:300})});
	$("#nav.navigation li").mouseover(function(){$(this).stop().animate({backgroundColor: "#2d487d"},{queue:false, duration:100})});
    $("#nav.navigation li").mouseout(function(){$(this).stop().animate({backgroundColor: "#33518c"},{queue:false, duration:300})});
	$("#nav.navigation li.active").mouseout(function(){$(this).stop().animate({backgroundColor: "#2d487d"},{queue:false, duration:300})});	
	$('.topbar-wrap').floatmenu();		
	$('#sidebar').floatmenu({topPadding:50});		
});