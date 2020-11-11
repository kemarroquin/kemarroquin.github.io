var projects = {
	'pro' : {
		'catn' : 'Profesionales',
		'proj' : {
			'emarroquin' : {
				'name' : 'Erick Marroquín (WP)',
				'path' : 'https://emarroquindesign.github.io/',
				'icon' : '',
				'nick' : 'emarroquin',
				'info' : {
					'responsive' : ['Responsive','97%']
				}
			},
			'jwp_two' : {
				'name' : 'Javier Ramírez (WP V2)',
				'path' : 'projects/jwp_two/',
				'icon' : '',
				'nick' : 'jwp_two',
				'info' : {
					'responsive' : ['Responsive','94%']
				}
			},
			'lwp_two' : {
				'name' : 'Lilian Villalta (WP V2)',
				'path' : 'projects/lwp_two/',
				'icon' : '',
				'nick' : 'lwp_two',
				'info' : {
					'responsive' : ['Responsive','93%']
				}
			}
		}
	},
	'medium' : {
		'catn' : 'Semi-Profesionales',
		'proj' : {
			'idec' : {
				'name' : 'IDEC',
				'path' : 'projects/idec/',
				'icon' : '',
				'nick' : 'idec',
				'info' : {
					'responsive' : ['Responsive','90%']
				}
			},
			'dinasty' : {
				'name' : 'DINASTY',
				'path' : 'projects/dinasty/',
				'icon' : '',
				'nick' : 'dinasty',
				'info' : {
					'responsive' : ['Responsive','90%']
				}
			},
			'jwp_one' : {
				'name' : 'Lilian Villalta (WP V1)',
				'path' : 'projects/jwp_one/',
				'icon' : '',
				'nick' : 'jwp_one',
				'info' : {
					'responsive' : ['Responsive','91%']
				}
			},
			'lwp_one' : {
				'name' : 'Lilian Villalta (WP V1)',
				'path' : 'projects/lwp_one/',
				'icon' : '',
				'nick' : 'lwp_one',
				'info' : {
					'responsive' : ['Responsive','92%']
				}
			}
		}
	},
	'basic' : {
		'catn' : 'Básicos',
		'proj' : {
			'twist' : {
				'name' : 'Twist',
				'path' : 'projects/twist/',
				'icon' : '',
				'nick' : 'twist',
				'info' : {
					'responsive' : ['Responsive','0%']
				}
			},
			'ewallet' : {
				'name' : 'E-Wallet',
				'path' : 'projects/ewallet/',
				'icon' : '',
				'nick' : 'ewallet',
				'info' : {
					'responsive' : ['Responsive','25%']
				}
			}
		}
	}
};


var icons = [
	"pixel1.svg",
	"pixel2.svg",
	"pixel3.svg",
	"pixel4.svg",
	"pixel5.svg",
	"pixel6.svg",
	"pixel7.svg",
	"pixel8.svg",
	"pixel9.svg"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var svg_take = [];
var rnum = 0;

for (var proj_1 in projects) {
	for(var proj_2 in projects[proj_1]["proj"]){
		rnum = getRandomInt(0, (icons.length - 1));
		while (svg_take.indexOf(rnum) !== -1){
			rnum = getRandomInt(0, (icons.length - 1));
		}
		projects[proj_1]["proj"][proj_2]["icon"] = icons[rnum];
		svg_take.push(rnum);
	}
}
