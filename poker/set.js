m3dv='0.9';
m3dconf={

	ver:'2.0',
	vfile:'',
	connect:'frame', //frame,self
	htmlname:'index.htm',

	setup:{
	
		hosts:{
			aphost:'',
			appath:'',
			
			corehost:'',
			corepath:''
		},
		
		libs: [
			['css/style_lite.css',	'', 						'core_css'], //my css
			['css/style.css',	 	'', 						'ap_css'] //my css
		],
		main: [
			['js/3bags_lng_',		'lng', 						'ap_lng'], //3bags_lng_ru.js
			['app.js',				'ap', 						'ap']
		],
		
		loadStdRes: false,
		loadMenu: false,
		enterPoint: function() {ap.loadLocationMyLocation();},
		
		aspect:{w:1100, h:680, p:0, scale:1.0, maximize:true},
		sn:{sn:0},
		linkp:'',
		lang:{browser:false, storage:false}
		
	}
	

};