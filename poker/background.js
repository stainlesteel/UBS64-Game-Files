apb={
	
	ver:'0.01',
	browser:{name:'chrome', orig:'o1', engine:'Chrome'},

	origins:{
	
		current:{
		},
		
		oindex: {
			path:{ pathIndex:'index.html?3bags' }, 
			path_t:{ pathIndex:'index.html?3bags' }, 
		},

		oindexweb: {
			path:''
		},

		o1:{
			path:{ pathData:'' }, 
			path_t:{ pathData:'' }, 
		}
		
	},
	
	indexid:-1,
	requestType:'get',
	indexComp:0, 
	dataServ:{},
	tabs:{},
	tabsSn:{},
	userTabs:[],
	userTabsSave:[],
	userTabsSaveIds:[],
	userTabsSaveIndexes:[],
	userTabsProc:false,
	idbAval:false,
	authSN:0,
	authSNstr:'',
	authSNname:'',
	authSNdata:'',
	authTabId:'',
	authCode:'',
	loadFrame:false,
	parsRequest:[],

	tmp:{},

	initEvents:function() {
	},
	openAppwindow:function(data) {
	},
	getTabs:function() {
	},
	sendMessageContent:function() {
	},
	tabsCreate:function(url,factive,cb) {
	},
	tabsRemove:function(tabid,cb) {
	},
	tabsHighlight:function(tabindex,tabid,cb) {
	},

	init:function(id) {
		apb.origins.current=apb.origins[apb.browser.orig];
		apb.origins.oindex.path.pathIndex=apb.origins.oindex.path.pathIndex+'&eng='+apb.browser.engine;
		if (typeof apb.test!=='undefined') {
			apb.origins.current.path=apb.origins.current.path_t;
			apb.origins.oindex.path.pathIndex=apb.origins.oindex.path_t.pathIndex+'&eng='+apb.browser.engine;
		};
		apb.origins.current.path.pathData+=apb.verp+'.php';
		
		var startup=['initEvents','openAppwindow','getTabs','sendMessageContent','tabsCreate','tabsRemove','tabsHighlight'];
		for (var i=0; i<startup.length; i++) { apb[startup[i]]=apb[startup[i]+id]; };
		
		apb.initEvents();
		
		//apb.idb.init('tabs','tabstable','comp',function(status){
			//if (status=='ok') {
				//apb.idbAval=true;
			//};
		//});
		
	},


	initEventsWeb:function() {
	},

	sendMessageContentWeb:function(mes) {
		ap.extMessageListenerWeb(mes);
	},

	openAppwindowWeb:function(data) {
	},

	getTabsWeb:function(cb) { 
		cb([]);
	},

	tabsCreateWeb:function(url, factive, cb) {
	},

	tabsRemoveWeb:function(tabid, cb) {
	},

	tabsHighlightWeb:function(tabindex, tabid, cb) {
	},

	openIndexWeb:function(tabs) {
	},




	initEventsChrome:function() {
		chrome.browserAction.onClicked.addListener(function(tab) {
			apb.requestType='clickextbt';
			apb.openAppwindow();
			
		});
		chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
			apb.extensionMessageListener(request, sender, sendResponse);
		});
		chrome.tabs.onUpdated.addListener( function(tabId, changeInfo) {
		});
	},

	sendMessageContentChrome:function(mes) {
		chrome.tabs.sendMessage(apb.indexid, mes, function(response) {
		});
	},

	openAppwindowChrome:function(data) {
			setTimeout(function(){
				apb.openIndexChrome();
			}, 300);
	},

	getTabsChrome:function(cb) { 
		chrome.tabs.query({},function(data){
			cb(data);
		});
	},

	tabsCreateChrome:function(url, factive, cb) {
        chrome.tabs.create({url:url, selected:factive}, function(tab) {
			cb(tab);
		});
	},
	
	tabsRemoveChrome:function(tabid, cb) {
		chrome.tabs.remove(tabid, function(){
			cb();
		});
	},

	tabsHighlightChrome:function(tabindex, tabid, cb) {
		chrome.tabs.highlight({tabs:tabindex}, function(){
			cb();
		});
	},

	openIndexChrome:function(tabs) {
			apb.tabsCreate(chrome.extension.getURL(apb.origins.oindex.path.pathIndex), true, function(tab) {
			});

	}

};


apb.init(apb.browser.engine);