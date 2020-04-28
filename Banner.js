(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Banner_atlas_", frames: [[0,0,1928,656],[0,658,1080,811]]},
		{name:"Banner_atlas_2", frames: [[0,1626,166,54],[0,0,1080,811],[0,813,1080,811]]}
];


// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Banner_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Banner_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MALVIN1pngcopia = function() {
	this.initialize(ss["Banner_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MALVIN3pngcopia = function() {
	this.initialize(ss["Banner_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MALVIN = function() {
	this.initialize(ss["Banner_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.MALVIN1pngcopia();
	this.instance.setTransform(-138.95,-109,0.2573,0.2689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-138.9,-109,277.9,218.1), null);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.MALVIN();
	this.instance.setTransform(-138.95,-109,0.2573,0.2689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.9,-109,277.9,218.1);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.MALVIN();
	this.instance.setTransform(-138.95,-109,0.2573,0.2689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.9,-109,277.9,218.1);


(lib.Click2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.MALVIN3pngcopia();
	this.instance.setTransform(0,0,0.2573,0.2689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2953,scaleY:0.3169},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319,257);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Interpolación1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-138.9,-109,277.9,218.1), null);


(lib.Objeto3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.movieClip_5.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("http://www.alvicorpropiedades.com/p/2450860-Departamento-en-Venta-en-Palermo-Unidad-107---Apartamento-de-1-Dormitorio-.-Inversores-Renta", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.movieClip_5 = new lib.Símbolo3();
	this.movieClip_5.setTransform(138.95,109);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Objeto3, new cjs.Rectangle(0,0,277.9,218.1), null);


(lib.Link1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(138.95,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0507,scaleY:1.05,x:138.5,y:108.6},0).wait(1).to({regY:0.1,scaleX:1.0939,scaleY:1.0963,x:138.8,y:109.05},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-10.5,304,239.1);


(lib.Imagen3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Objeto3();
	this.instance.setTransform(139,109,1,1,0,0,0,139,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Imagen3, new cjs.Rectangle(0,0,277.9,218.1), null);


(lib.Imagen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.alvicorpropiedades.com/p/2358158-Departamento-en-Venta-en-Malv%C3%ADn-Unidad-401---Apartamento-de-3-Dormitorios-en-Venta", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.movieClip_1 = new lib.Símbolo1();
	this.movieClip_1.setTransform(138.95,109);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Imagen2, new cjs.Rectangle(0,0,277.9,218.1), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Imagen3();
	this.instance.setTransform(139,109,1,1,0,0,0,139,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3458,scaleY:1.3208,x:187.05,y:143.95},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,288);


// stage content:
(lib.Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.alvicorpropiedades.com/p/2406197-Departamento-en-Venta-en-La-Blanqueada-Unidad-207--Apartamento-1-Dormitorio-En-Venta", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(104));

	// Imagen_3
	this.button_4 = new lib.Símbolo2();
	this.button_4.setTransform(788.9,162.95,0.9999,1.0001,0,0,0,139,109);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2);

	this.instance = new lib.Imagen3();
	this.instance.setTransform(817.7,163,1,1,0,0,0,139,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_4}]}).to({state:[{t:this.instance}]},39).to({state:[]},63).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.button_4).to({_off:true,scaleX:1,scaleY:1,x:817.7,y:163},39).wait(65));

	// Imagen_2
	this.button_2 = new lib.Click2();
	this.button_2.setTransform(484,163,1,1,0,0,0,139,109);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_2).to({_off:true},102).wait(2));

	// Imagen_1
	this.movieClip_3 = new lib.Imagen2();
	this.movieClip_3.setTransform(181,163,1,1,0,0,0,139,109);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(237.35,263.35,0.5,0.5);

	this.instance_2 = new lib.Link1();
	this.instance_2.setTransform(146,163,1,1,0,0,0,139,109);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Link1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.movieClip_3}]}).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.instance_2}]},38).to({state:[{t:this.instance_2}]},60).to({state:[]},1).to({state:[]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1).to({x:163.95},0).to({_off:true,x:146},38).wait(65));

	// Fondo
	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},102).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1051.8,341.9);
// library properties:
lib.properties = {
	id: 'FE57A749E4DDDE41939C28CC2C41B644',
	width: 964,
	height: 328,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Banner_atlas_.png", id:"Banner_atlas_"},
		{src:"images/Banner_atlas_2.png", id:"Banner_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE57A749E4DDDE41939C28CC2C41B644'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;