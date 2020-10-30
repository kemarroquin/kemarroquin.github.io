$(document).ready(function(){

	setTimeout(function(){
		$(".loader").fadeOut(1000, function(){
			$(".loader").remove();
		});
	}, 2000);

	var html = '';

	var pr_f = projects;
	for (var v_f in pr_f) {
		var pr_s = pr_f[v_f];
		
		var pr_t = pr_s["proj"];

		html += '<div class="section">'+
					'<h3>'+pr_s["catn"]+'</h3>'+
					'<div class="section_c">';

		for (var v_t in pr_t){
			html += 	'<a target="_blank" href="'+pr_t[v_t]["path"]+'" class="project pro_theme_'+pr_t[v_t]["nick"]+'" data-themepro="'+pr_t[v_t]["nick"]+'">'+
							'<div class="pro_f">'+
								'<img src="img/'+pr_t[v_t]["icon"]+'" class="svgimg img_pr">'+
								'<p class="name_pr">'+pr_t[v_t]["name"]+'</p>'+
							'</div>'+
							'<div class="pro_inf">';
			for (var info_obj in pr_t[v_t]["info"]) {
				html += 		'<p class="prope_pr">&#9679; <span>'+pr_t[v_t]["info"][info_obj][0]+'</span> '+pr_t[v_t]["info"][info_obj][1]+'</p>';
			}
			html += 		'</div>'+
						'</a>';
		}

		html +=		'</div>'+
				'</div>';

	}


	$(".content").html(html);
	change_svg();
	setTimeout(function(){
		$(".project").hover(function(){
			$("body").attr("data-theme", $(this).attr("data-themepro"));
		}, function(){
			$("body").attr("data-theme", "");
		});
	}, 500);

});

function change_svg(){
	$('img.svgimg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}