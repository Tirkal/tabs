// on charge le DOM
$(function(){
	//on récupère la liste où l'on va faire l'evt click
	$('#tabs ul li').click(function(){
		// on récupère le "href" qui est l'enfant de "#tas ul li"  pour lequel il y l'evt click
		var id=$(this).children().attr('href');

		//cache celui qui est actif
		$('#tabs div.active').removeClass('active').toggle();
		$('#tabs ul li.active').removeClass('active');

		//affiche celui qui est cliqué
		$(id).addClass('active').toggle();
		$(this).addClass('active');

	});

});