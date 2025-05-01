(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,7680);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,7590);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fill, new cjs.Rectangle(-10,-10,20,20), null);


(lib.leaf_65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH5KUIiPilIiPikQhIhSg8hfQg7hfgnhwIhMA7QhXBDhiA4QhiA3h6AiQgoAKgVgXIgBAAIgBgNIACAAIAAgCIAAgFQBMhOAch7QALgxAJgvQAaiCAvhqQAwhrA/hZQA0hKBSgpQAKgFAMgFQA9gUBHgLIAAgCQAIABAGgCIABAAIAEAAIACAAIAAgCQAJAAAGgBIACAAIAegEIACAAIAAgCIANAAIABAAIAKAAIACAAIAAgCIAMAAIACAAIAgAAIADAAIAMAAIABAAIAOABIAAABIAKAAIACAAIANABIAAABIADAAIANABIAAABIAOABIAAABIAHAAIACAAQAHACAKAAIAAABQCBAYBnAyQAPAHAMAIIAAE0IAADhIAAAXIAAABIAAEzIAAE0IAACdQgZgbgZgcg");
	mask.setTransform(55.55,71.45);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AH5KUIiPilIiPikQhIhSg8hfQg7hfgnhwIhMA7QhXBDhiA4QhiA3h6AiQgoAKgVgXIgBAAIgBgNIACAAIAAgCIAAgFQBMhOAch7QALgxAJgvQAaiCAvhqQAwhrA/hZQA0hKBSgpQAKgFAMgFQA9gUBHgLIAAgCQAIABAGgCIABAAIAEAAIACAAIAAgCQAJAAAGgBIACAAIAegEIACAAIAAgCIANAAIABAAIAKAAIACAAIAAgCIAMAAIACAAIAgAAIADAAIAMAAIABAAIAOABIAAABIAKAAIACAAIANABIAAABIADAAIANABIAAABIAOABIAAABIAHAAIACAAQAHACAKAAIAAABQCBAYBnAyQAPAHAMAIIAAE0IAADhIAAAXIAAABIAAEzIAAE0IAACdQgZgbgZgcg");
	this.shape.setTransform(55.55,71.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.1,142.9);


(lib.leaf_64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMiIbQgOgBgNgDQh+gahkg0Qhng1hdg+IiKhbQheg8hLhPQhVAkhdAbQh2AkiNANIAAABIgNABIgBAAIgEAAIgBABIgNABIgBAAIgJAAIAAAAIgOABIgBAAIgGAAIAAABIgNABIgCAAIgNAAIAAABIgNABIgCAAIgNAAIAAABIgPAAIgBAAIgOAAIglAAQiaAAhtgsQgdgLgGggQACgFABgHIAAgCQAigZAngTQAygZArgjQBWhEBDhWIB1iYQAQgWATgUQBJhQBZhBQA3gpBQgSQA7gNBEgCIAAgCIAaAAIABAAIAOAAIACAAIAOABIAAABIAJAAIACAAIANAAIAAABIAHAAIABAAIATADIAAABQALAAAJADIABAAQAFACAHABIAAABQAFgCABADIABAAIANAFIABAAQAaAKAUAPIABABQACgEAHADIABABQBPAkAzBAQAjArAnAmQAtAsAiA2IBNhBIABgBIAAgBQAOgEgEAJIgBAAIgBABQgeAugrAgQARAYADAdQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAIAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBgBAAAAQAAADACACIABABQBMBOAqBtQAsBwAfB7QAfB6BQBLIATASQgDAkgmAAIgCAAIAAABIgNAAIgCABIgFAAQgGAAgFgCg");
	mask.setTransform(87.6,54.1125);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AMiIbQgOgBgNgDQh+gahkg0Qhng1hdg+IiKhbQheg8hLhPQhVAkhdAbQh2AkiNANIAAABIgNABIgBAAIgEAAIgBABIgNABIgBAAIgJAAIAAAAIgOABIgBAAIgGAAIAAABIgNABIgCAAIgNAAIAAABIgNABIgCAAIgNAAIAAABIgPAAIgBAAIgOAAIglAAQiaAAhtgsQgdgLgGggQACgFABgHIAAgCQAigZAngTQAygZArgjQBWhEBDhWIB1iYQAQgWATgUQBJhQBZhBQA3gpBQgSQA7gNBEgCIAAgCIAaAAIABAAIAOAAIACAAIAOABIAAABIAJAAIACAAIANAAIAAABIAHAAIABAAIATADIAAABQALAAAJADIABAAQAFACAHABIAAABQAFgCABADIABAAIANAFIABAAQAaAKAUAPIABABQACgEAHADIABABQBPAkAzBAQAjArAnAmQAtAsAiA2IBNhBIABgBIAAgBQAOgEgEAJIgBAAIgBABQgeAugrAgQARAYADAdQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAIAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBgBAAAAQAAADACACIABABQBMBOAqBtQAsBwAfB7QAfB6BQBLIATASQgDAkgmAAIgCAAIAAABIgNAAIgCABIgFAAQgGAAgFgCg");
	this.shape.setTransform(87.6,54.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.2,108.2);


(lib.leaf_63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqHFQgZgEgDgZIgBAAIgBgOIAAgCQgRhegbhVIgCAAQghhsgWh1QgEgSgEgJIAFgKQAEgBAAgDIAAgCIAEgDIgBgHQACgEAGADIACgCQALgUAVgUIAEgJQAEACACgGIAAgEIARgRIAGgCIADgHIAGgCIACgGIAJgEQAOgVATgRIACgJIANgNIACgGIAJgGIACgHIAEgCQAEgBgCgFQAYgaARghIADgCQAKgKAEgOQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAFgJAIgKIAAgGIAJgLIAAgGIAEgEIAEgHIAAgIQAEAAABgDQAGgOACgXQACgBACgGQACgEgCgGIAHgNIACACIADADQA9BDAEB9IAAACQADAEgCAIIAAACIAAAhIAAABQADALgBAPIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAFIAAABIAAACQABAIgDAEQgEA1gIAvQgWCFgxBpIAAACIAAABIgBAAIgQAlIgwBmQgYA2guAfIgBAAg");
	mask.setTransform(18.2375,45.275);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AgqHFQgZgEgDgZIgBAAIgBgOIAAgCQgRhegbhVIgCAAQghhsgWh1QgEgSgEgJIAFgKQAEgBAAgDIAAgCIAEgDIgBgHQACgEAGADIACgCQALgUAVgUIAEgJQAEACACgGIAAgEIARgRIAGgCIADgHIAGgCIACgGIAJgEQAOgVATgRIACgJIANgNIACgGIAJgGIACgHIAEgCQAEgBgCgFQAYgaARghIADgCQAKgKAEgOQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAFgJAIgKIAAgGIAJgLIAAgGIAEgEIAEgHIAAgIQAEAAABgDQAGgOACgXQACgBACgGQACgEgCgGIAHgNIACACIADADQA9BDAEB9IAAACQADAEgCAIIAAACIAAAhIAAABQADALgBAPIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAFIAAABIAAACQABAIgDAEQgEA1gIAvQgWCFgxBpIAAACIAAABIgBAAIgQAlIgwBmQgYA2guAfIgBAAg");
	this.shape.setTransform(18.2375,45.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,90.6);


(lib.leaf_62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKCKjQgtgagkgkQgagagggTQhjg5h3ghQh5gihrgvQhqgvheg9Qhdg8hRhIQhRhJhGhUQhFhVg3hjQg3higXiDIgBAAIgCgRIAAgCIAAgEIgBAAIgBgNIgBAAIgBgOIAAgCIgBAAIAAgOIAAgBIAAgCIgBAAIgBgOIAAgCIAAgIIgBAAIgBgOIAAgCIAAgdIACAAIAAgCIAAgMIACAAIAAgBIAAgLQAPhfBpgGIACAAIARABIAAABQBHAGA6ATQB0AmBkA1QBmA1BWBDQBWBEBHBTQBHBSBABaQBABaBCBXQBCBYA3BiQA4BjAqBwQAeBSAQBhQADAIgCALIgBAAIAAACQgCAOgKAHIgKABQgJAAgIgEg");
	mask.setTransform(68.265,67.9227);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AKCKjQgtgagkgkQgagagggTQhjg5h3ghQh5gihrgvQhqgvheg9Qhdg8hRhIQhRhJhGhUQhFhVg3hjQg3higXiDIgBAAIgCgRIAAgCIAAgEIgBAAIgBgNIgBAAIgBgOIAAgCIgBAAIAAgOIAAgBIAAgCIgBAAIgBgOIAAgCIAAgIIgBAAIgBgOIAAgCIAAgdIACAAIAAgCIAAgMIACAAIAAgBIAAgLQAPhfBpgGIACAAIARABIAAABQBHAGA6ATQB0AmBkA1QBmA1BWBDQBWBEBHBTQBHBSBABaQBABaBCBXQBCBYA3BiQA4BjAqBwQAeBSAQBhQADAIgCALIgBAAIAAACQgCAOgKAHIgKABQgJAAgIgEg");
	this.shape.setTransform(68.265,67.9227);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.6,135.9);


(lib.leaf_61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AO8TsIgBAAIgBgFIAAAAIgBgQIABAAIAAgCIAAgNIACAAIAAgCIAAgDQASg5ABhKIAAgCIAAgCIAAgiIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgRIgBgBIAAgNIAAgCIAAgDIgBAAIgBgOIAAgCIAAgIIgBgBIgBgNIAAgCIAAgHIgBAAIgBgOIAAgBIAAgFIAAgBIgBgNIAAgCIgBAAIgBgOIAAgBIgBAAIgBgOIAAgCIgBAAIAAgOIgBgBQgRh/gfhyQgUhLgahHQgohwg3hkQg3hjg7heQg8hdg2hkIgOgdIgLARQg9BfhCBWQgwA+gyA8IACABIgHADIgKAHIgEAKIgFAAQgHACgBAIQgHABgCAGQgCAIgIgBIgFAMIgHADIgFAJIgCAIIgIACIAAAFQgCAFgFACIgCAIIgDAAQgDABgCAGQgKAFgGAIQgEAGgGADQgBAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAHgIAAIgFAGQgDAFgEACQgBAFgCgCQgJADACAIIgKAFIgFAHIgJADIgBAFQgBAEgIAAQgDAJgGAGQgEADgGACQABAGgBABQgDADgHAAQgJAKgHAGQgEADgHACIgCAIIgJADQgEACABAHIgNAFQgBAIgFADQgDABgFAAIgCAHQgGgBgDAEIgHAHIgFAHIgFAAQgFACAAAIIgBAAIABgJIgxAkQhaA/hnAzIAAACIgEAAIgUAKIAAABIgDAAQgDAEgHAAIgDABQgBACgEAAIgDAAIgEADIgiAGIgkAJQgIADgHAEIgGABIgCADIgUAHQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgDADIgFABIgCABQgQAEgPAGQgIAEgLACIgDACIgDABQgCACgDAAIgCACIgNAEIgBABQgDAAgDACIgBABIgfAJIgGACIgDACQgIABgHAEIgBACIgEAAQgBACgFACIgCgBQgDADgGADIgCABIgBAAIgBACIgQAHIgDAAQgQAKgQAFQgUAGgWAJQgCABgFgBIgKAFQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIgSAFIgDAAIgCACIgfAJIgDAAIggAKIghAGQgOAEgLAFQgBAAgBAAQgBABAAAAQAAAAAAAAQgBAAABgBIgJABIAAAAIgBABIACgEIgxAMQg+AQg6AVQhvAohTBIQgVARgRAVQgbAggwAJIAAgBQgNgBgEgKIgBAAIgBgiQATiHAih4QAVhJAXhHIAAgCIAAgCQAlh0AphwQAphxAvhtQAuhrA0hkQA0hmA5hhQA5hhA8heQA7hfBDhXQBChXBLhPQA4g7A9g2IAWgTIAHgHIACgBIALgKIALgIIADgCIADgDIBFgMQBBgcBCgPIAKAAIANgKIAOAAQAagOAdgLIAEgBIAQAAQBqghBrgbQCSgZCUggQAEgCAFAAQBHgUBNgTQAKgIAKgDQAIgFAIADQAPgIAPgJQAOgRAUgMIACADIAEADIABABIABACICECeQBHBUBABZQBBBZA2BkQA2BkAuBtQAtBsAcB/QAcB9AXCDQAQBbAGBnQADAEgCAIIAAACIAAASIAAACQADAEgBAIIAAACIAAAbIAAACIAAAXIAAABQADANgCAQIgBAAIAAATIAAACIAAAMIAAACIAAAMIAAACIAAABQABAJgDADIAAASIAAABIAAACQACAIgDAEIAAAJIAAABIAAACQABAIgDAEIAAAEIAAABIAAACQABAIgDAEIAAACQgHBdgUBQIAAACIAAACQgQA/gbA0QgzBmg5BhQgqBIgpBKQg3Bkg9BcQgJANgJAAQgIAAgIgIg");
	mask.setTransform(137.565,126.8494);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AO8TsIgBAAIgBgFIAAAAIgBgQIABAAIAAgCIAAgNIACAAIAAgCIAAgDQASg5ABhKIAAgCIAAgCIAAgiIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgRIgBgBIAAgNIAAgCIAAgDIgBAAIgBgOIAAgCIAAgIIgBgBIgBgNIAAgCIAAgHIgBAAIgBgOIAAgBIAAgFIAAgBIgBgNIAAgCIgBAAIgBgOIAAgBIgBAAIgBgOIAAgCIgBAAIAAgOIgBgBQgRh/gfhyQgUhLgahHQgohwg3hkQg3hjg7heQg8hdg2hkIgOgdIgLARQg9BfhCBWQgwA+gyA8IACABIgHADIgKAHIgEAKIgFAAQgHACgBAIQgHABgCAGQgCAIgIgBIgFAMIgHADIgFAJIgCAIIgIACIAAAFQgCAFgFACIgCAIIgDAAQgDABgCAGQgKAFgGAIQgEAGgGADQgBAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAHgIAAIgFAGQgDAFgEACQgBAFgCgCQgJADACAIIgKAFIgFAHIgJADIgBAFQgBAEgIAAQgDAJgGAGQgEADgGACQABAGgBABQgDADgHAAQgJAKgHAGQgEADgHACIgCAIIgJADQgEACABAHIgNAFQgBAIgFADQgDABgFAAIgCAHQgGgBgDAEIgHAHIgFAHIgFAAQgFACAAAIIgBAAIABgJIgxAkQhaA/hnAzIAAACIgEAAIgUAKIAAABIgDAAQgDAEgHAAIgDABQgBACgEAAIgDAAIgEADIgiAGIgkAJQgIADgHAEIgGABIgCADIgUAHQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgDADIgFABIgCABQgQAEgPAGQgIAEgLACIgDACIgDABQgCACgDAAIgCACIgNAEIgBABQgDAAgDACIgBABIgfAJIgGACIgDACQgIABgHAEIgBACIgEAAQgBACgFACIgCgBQgDADgGADIgCABIgBAAIgBACIgQAHIgDAAQgQAKgQAFQgUAGgWAJQgCABgFgBIgKAFQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIgSAFIgDAAIgCACIgfAJIgDAAIggAKIghAGQgOAEgLAFQgBAAgBAAQgBABAAAAQAAAAAAAAQgBAAABgBIgJABIAAAAIgBABIACgEIgxAMQg+AQg6AVQhvAohTBIQgVARgRAVQgbAggwAJIAAgBQgNgBgEgKIgBAAIgBgiQATiHAih4QAVhJAXhHIAAgCIAAgCQAlh0AphwQAphxAvhtQAuhrA0hkQA0hmA5hhQA5hhA8heQA7hfBDhXQBChXBLhPQA4g7A9g2IAWgTIAHgHIACgBIALgKIALgIIADgCIADgDIBFgMQBBgcBCgPIAKAAIANgKIAOAAQAagOAdgLIAEgBIAQAAQBqghBrgbQCSgZCUggQAEgCAFAAQBHgUBNgTQAKgIAKgDQAIgFAIADQAPgIAPgJQAOgRAUgMIACADIAEADIABABIABACICECeQBHBUBABZQBBBZA2BkQA2BkAuBtQAtBsAcB/QAcB9AXCDQAQBbAGBnQADAEgCAIIAAACIAAASIAAACQADAEgBAIIAAACIAAAbIAAACIAAAXIAAABQADANgCAQIgBAAIAAATIAAACIAAAMIAAACIAAAMIAAACIAAABQABAJgDADIAAASIAAABIAAACQACAIgDAEIAAAJIAAABIAAACQABAIgDAEIAAAEIAAABIAAACQABAIgDAEIAAACQgHBdgUBQIAAACIAAACQgQA/gbA0QgzBmg5BhQgqBIgpBKQg3Bkg9BcQgJANgJAAQgIAAgIgIg");
	this.shape.setTransform(137.565,126.8494);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.2,253.7);


(lib.leaf_60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABHIcIgLgsQggh4grhtQgrhwgYiCIgBAAIgBgQIAAgBQgBgKgEgKQg6BAhKAzQhbA/hyAnQgdAKghAFQhUANhNATIAAgBIAAiTQA9hcBFhUQBEhWBOhMQBNhOBRhIIALgLQAbggAlgXIADAAIAAgCQBfg7B6geQARgFAUgBIAAgCIAYAAIABAAIAOABIAAABIACAAIAHAAIABAAIAAgCIAQADIAAABIAFAAIACAAQALgBAHAEIABABQBUAhA/A5IABABIABAAQBQBKA3BiQA3BjAnBzQAeBZAgBZQAFAOgFAMIAAACIgJAFIgIgBQhVgXhEgpQhhg5hShHIgBAAIgIgJIgBAAQgBgCgDgCQAEAbABAdIAAACQADAJgCANIgBAAIAAAJIAAACIAAACQACAIgDADQgBAegHAYQgTBMgcBBQguBsgwBpQgNAbgJAbQgKAfgcALQgHgBgCgIg");
	mask.setTransform(65.044,54.95);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ABHIcIgLgsQggh4grhtQgrhwgYiCIgBAAIgBgQIAAgBQgBgKgEgKQg6BAhKAzQhbA/hyAnQgdAKghAFQhUANhNATIAAgBIAAiTQA9hcBFhUQBEhWBOhMQBNhOBRhIIALgLQAbggAlgXIADAAIAAgCQBfg7B6geQARgFAUgBIAAgCIAYAAIABAAIAOABIAAABIACAAIAHAAIABAAIAAgCIAQADIAAABIAFAAIACAAQALgBAHAEIABABQBUAhA/A5IABABIABAAQBQBKA3BiQA3BjAnBzQAeBZAgBZQAFAOgFAMIAAACIgJAFIgIgBQhVgXhEgpQhhg5hShHIgBAAIgIgJIgBAAQgBgCgDgCQAEAbABAdIAAACQADAJgCANIgBAAIAAAJIAAACIAAACQACAIgDADQgBAegHAYQgTBMgcBBQguBsgwBpQgNAbgJAbQgKAfgcALQgHgBgCgIg");
	this.shape.setTransform(65.044,54.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.1,109.9);


(lib.leaf_59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiQMvQgLgCgCgJQgZhDgcg9IgBgCQgqhWg7hGIAAgCIAAgaIAAhKIAAk0IAAkyIAAk0IAAk0QBoAyBYBBQBZBBBGBUQBGBTAxBpQAwBqAuBsIA8CJIABADIgBACQABAGgGACIgGAFIgGABQgXACgYgGQh6gghwgpQhwgqheg8QAsBvAbB/QAbB7AJCOQADAJgBANIAAACIAAAYIAAACQACAEgBAIIAAACIAAAMIAAABIAAAMIAAACIAAAMIAAACIAAACQABAIgCAEIAAAKIAAACIAAAMIAAABIAAACQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAIIAAACIAAACQACAIgEAEIAAABQgFBDgMA9IAAADIAAACIgCAVQgEBAgWAvIAAACIAAACQgCADgGAAIgCAAg");
	mask.setTransform(31.3,81.5278);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AiQMvQgLgCgCgJQgZhDgcg9IgBgCQgqhWg7hGIAAgCIAAgaIAAhKIAAk0IAAkyIAAk0IAAk0QBoAyBYBBQBZBBBGBUQBGBTAxBpQAwBqAuBsIA8CJIABADIgBACQABAGgGACIgGAFIgGABQgXACgYgGQh6gghwgpQhwgqheg8QAsBvAbB/QAbB7AJCOQADAJgBANIAAACIAAAYIAAACQACAEgBAIIAAACIAAAMIAAABIAAAMIAAACIAAAMIAAACIAAACQABAIgCAEIAAAKIAAACIAAAMIAAABIAAACQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAIIAAACIAAACQACAIgEAEIAAABQgFBDgMA9IAAADIAAACIgCAVQgEBAgWAvIAAACIAAACQgCADgGAAIgCAAg");
	this.shape.setTransform(31.3,81.5278);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.6,163.1);


(lib.leaf_58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjPGxQgMgFgGgMIAAAAIgBgJIgBAAIgBgNIAAgCIAAgMIAAgCIAAgFIgBAAIgBgOQgGgugPgrQgohygUiFIAAAAIgBgPIAAgBIAAgCIgBAAIgBgNIAAgCIAAgBIgBAAIgBgOIAAgCIAAgLIAAgLIAAgDQgSAPgSASIAAgCIAAkLQAag9BGgQIACgBIAAgBIAWABIAAAAQAWgeAegXIAAgCQAMgDAOgBIACAAQABgGAFgBIACgBQAoAJAXAZQAFAFAJADQB2AhBSBIQAfAcAVAjQA2BdArBoIAIAQQAaAuAhApQAEAGgBAKQgGAQgVABIgCAAIAAABIgOABQhGAAgtgYQhkg2g5hhIgBAAIAAASIAAABIAAAOIAAACIAAABQABAJgDADQgNCKgwBnQgyBphNBMQgTAUghAGIgBAAg");
	mask.setTransform(35.2528,43.35);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjPGxQgMgFgGgMIAAAAIgBgJIgBAAIgBgNIAAgCIAAgMIAAgCIAAgFIgBAAIgBgOQgGgugPgrQgohygUiFIAAAAIgBgPIAAgBIAAgCIgBAAIgBgNIAAgCIAAgBIgBAAIgBgOIAAgCIAAgLIAAgLIAAgDQgSAPgSASIAAgCIAAkLQAag9BGgQIACgBIAAgBIAWABIAAAAQAWgeAegXIAAgCQAMgDAOgBIACAAQABgGAFgBIACgBQAoAJAXAZQAFAFAJADQB2AhBSBIQAfAcAVAjQA2BdArBoIAIAQQAaAuAhApQAEAGgBAKQgGAQgVABIgCAAIAAABIgOABQhGAAgtgYQhkg2g5hhIgBAAIAAASIAAABIAAAOIAAACIAAABQABAJgDADQgNCKgwBnQgyBphNBMQgTAUghAGIgBAAg");
	this.shape.setTransform(35.2528,43.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.5,86.7);


(lib.leaf_57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEiH/QgSgCgIgKIgCgJQgXhfgnhNQg0hmgqhuQgrhwgfh6QgvAng3AhQhgA4hzAmQh1AmiHATIAAAAIgOABIgiABQgdAAgEgXQANgaAZgPQAMgHAJgKQBJhQA9heQA7hdBKhRQBKhQBrguQAYgKAcgGIAAgBIACAAIABAAIAAgCIAVABIAAABIACAAIAPAAIACAAIAAgCIAMAAIABAAQA0gIAsgQIACAAQAHAAAFABIABABQAhgGAkgDIACAAIAAgCIAMAAIACAAIAbAAIACAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIARAAIACAAIAOABIAAABQCPAKB2AlIA0APIAADwIAAACIAAACIAAAUIAAACIgCAAQh0gJhngWQAQBCADBPIAAABQADAEgBAIIAAACIAAATIAAACIAAACIAAABQADAEgBAIIAAACIAAALIAAACIAAAMIAAABIAAANIAAABIAAACQABAIgDAEIAAAPIAAACIAAAMIAAACIAAAMIAAACIAAABQABAJgDADIAAANIAAABIAAACQACAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACIAAACQABAIgDAEIAAACIAAABQACAIgDAEQgHBCgOA6QgPA6gRA1QgUA7grAjIgBAAg");
	mask.setTransform(61.475,51.075);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AEiH/QgSgCgIgKIgCgJQgXhfgnhNQg0hmgqhuQgrhwgfh6QgvAng3AhQhgA4hzAmQh1AmiHATIAAAAIgOABIgiABQgdAAgEgXQANgaAZgPQAMgHAJgKQBJhQA9heQA7hdBKhRQBKhQBrguQAYgKAcgGIAAgBIACAAIABAAIAAgCIAVABIAAABIACAAIAPAAIACAAIAAgCIAMAAIABAAQA0gIAsgQIACAAQAHAAAFABIABABQAhgGAkgDIACAAIAAgCIAMAAIACAAIAbAAIACAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIARAAIACAAIAOABIAAABQCPAKB2AlIA0APIAADwIAAACIAAACIAAAUIAAACIgCAAQh0gJhngWQAQBCADBPIAAABQADAEgBAIIAAACIAAATIAAACIAAACIAAABQADAEgBAIIAAACIAAALIAAACIAAAMIAAABIAAANIAAABIAAACQABAIgDAEIAAAPIAAACIAAAMIAAACIAAAMIAAACIAAABQABAJgDADIAAANIAAABIAAACQACAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACIAAACQABAIgDAEIAAACIAAABQACAIgDAEQgHBCgOA6QgPA6gRA1QgUA7grAjIgBAAg");
	this.shape.setTransform(61.475,51.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,102.2);


(lib.leaf_56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlDFnIgCAAQgTgBAAgUQA5hhAwhqQAwhqBBhYQAggsAkgrIgcACIgCAAIAAABIgNABIgCAAIgLAAIAAABIgNABIgCAAQgNABgJgDIgCAAQg2gHg8gCIAAABIgNABIgCAAQgNABgIgDIgBAAQghAEgEgYIAHgOIAAgCQBeg8BygpQBWggBlgQIAAgCIAPAAIACAAIAAgCIATAAIACAAIANABIAAABIAOABIAAABQAOABAJAFIABAAQAcgTArgGIABgBIACgDIAAgBQAPgBANADIAAABQAiAIAVAVIACAAIAIAIIAAABQAWAZAEAsIAAABQADAOgBATIAAACIAAABQABAJgDADQABAKgBAGQgYBog1BJQhBBYhRBJQhSBIhhA6QhgA4iGAUIAAABIgOABIgBAAIgHAAQgHAAgFgCg");
	mask.setTransform(34.4875,36.1107);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AlDFnIgCAAQgTgBAAgUQA5hhAwhqQAwhqBBhYQAggsAkgrIgcACIgCAAIAAABIgNABIgCAAIgLAAIAAABIgNABIgCAAQgNABgJgDIgCAAQg2gHg8gCIAAABIgNABIgCAAQgNABgIgDIgBAAQghAEgEgYIAHgOIAAgCQBeg8BygpQBWggBlgQIAAgCIAPAAIACAAIAAgCIATAAIACAAIANABIAAABIAOABIAAABQAOABAJAFIABAAQAcgTArgGIABgBIACgDIAAgBQAPgBANADIAAABQAiAIAVAVIACAAIAIAIIAAABQAWAZAEAsIAAABQADAOgBATIAAACIAAABQABAJgDADQABAKgBAGQgYBog1BJQhBBYhRBJQhSBIhhA6QhgA4iGAUIAAABIgOABIgBAAIgHAAQgHAAgFgCg");
	this.shape.setTransform(34.4875,36.1107);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,72.3);


(lib.leaf_55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhwDQIgBAAQgMgGABgUQAYhJAGhcQACgaAGgZQAQhKAkg3QgHgTASgMQAQgLAWgCIAAgCIANABIAAABIAHABIAAAAQAcAHASAQIABACIAIAHIAAABQAcAeAFAzIAAACQADAJgCANIgBAAQgDA2gVAjQgkA9gvAwQguAyhEAcIAAABIgHABQgEAAgDgCg");
	mask.setTransform(12.4567,20.9771);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AhwDQIgBAAQgMgGABgUQAYhJAGhcQACgaAGgZQAQhKAkg3QgHgTASgMQAQgLAWgCIAAgCIANABIAAABIAHABIAAAAQAcAHASAQIABACIAIAHIAAABQAcAeAFAzIAAACQADAJgCANIgBAAQgDA2gVAjQgkA9gvAwQguAyhEAcIAAABIgHABQgEAAgDgCg");
	this.shape.setTransform(12.4567,20.9771);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,42);


(lib.leaf_54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlDDsQgggBgdgEQgegDgHgaQALglAkgOIAJgFQBahABOhMQATgSAWgRQBVhFBhg5QBhg4B/gZIARgBIAOABIAAAAIAYAKQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBQBoAuALCKIAAACIAAACQABAIgDAEQgJBBgoAkQhRBJh1AlQh0AmiNALIAAABIgOABIgCAAIgHAAIAAABIgNABIgCAAIgaAAIAAAAIgOABIgBAAIgMAAIgCAAIgOAAIgCAAIgUAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIg2AAIgBAAIgEAAQgFAAgDgCg");
	mask.setTransform(42.2375,23.8375);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AlDDsQgggBgdgEQgegDgHgaQALglAkgOIAJgFQBahABOhMQATgSAWgRQBVhFBhg5QBhg4B/gZIARgBIAOABIAAAAIAYAKQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBQBoAuALCKIAAACIAAACQABAIgDAEQgJBBgoAkQhRBJh1AlQh0AmiNALIAAABIgOABIgCAAIgHAAIAAABIgNABIgCAAIgaAAIAAAAIgOABIgBAAIgMAAIgCAAIgOAAIgCAAIgUAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIg2AAIgBAAIgEAAQgFAAgDgCg");
	this.shape.setTransform(42.2375,23.8375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,47.7);


(lib.leaf_53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiiCEIgCAAIgRAAIAAgCIAAkHQBzAmBVBEQBHA4BOAyQADAKAJAEIAAABIABABQACAIgEADIgBABIgDABIAAABQgOACgKgDIgBAAIgSAAIgBAAIgQAAIgCAAIgMAAIgBAAIgJAAIAAABIgOABIgBAAIgXAAIAAABIgOABIgBAAQgkADgZAOIAAABQgJADgBgGIAAgBIgaABIAAABIgOABIgCAAIgBAAIgBABIgNAAIgCAAIgHAAIAAABIgOABIgBAAIgOAAIgCAAIgFAAIAAABIgMABQgIAAgHgCg");
	mask.setTransform(18.2058,13.415);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AiiCEIgCAAIgRAAIAAgCIAAkHQBzAmBVBEQBHA4BOAyQADAKAJAEIAAABIABABQACAIgEADIgBABIgDABIAAABQgOACgKgDIgBAAIgSAAIgBAAIgQAAIgCAAIgMAAIgBAAIgJAAIAAABIgOABIgBAAIgXAAIAAABIgOABIgBAAQgkADgZAOIAAABQgJADgBgGIAAgBIgaABIAAABIgOABIgCAAIgBAAIgBABIgNAAIgCAAIgHAAIAAABIgOABIgBAAIgOAAIgCAAIgFAAIAAABIgMABQgIAAgHgCg");
	this.shape.setTransform(18.2058,13.415);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,26.9);


(lib.leaf_52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJZJ3Qg6hhhFhVIiLipQhFhVgyhnQgzhmgXiEIAAAAQAAgIgDgEQhGAihOAZQh1AliPALIAAABIgOAAIgCAAIgHAAIAAABIgNABIgCAAIgRAAIAAABIgOABIgCAAIgMAAIgCAAIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgdAAIgCAAIgNAAIAAABIgOABIgCAAQh7ALg7BLIgCABQgRAFADgZQAZiABAhaQBAhaBLhOQBMhPBVhEQBVhFBhg4IAxgdQAMgIAOgDQBrgaB9gHIAAgCIAMAAIACAAIAFAAIACAAIAAgCIATAAIACAAIAFAAIABAAIAAgBIATAAIACAAIAHAAIACAAIAAgCIAWAAIACAAIAFAAIACAAIAAgCIAMAAIABAAIAMAAIACAAIAVAAIABAAIAOABIAAABIAHAAIACAAIAMAAIACAAIANABIAAABIAHAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAEAAIABAAIAHgBIAAgBIgBAAIgCAAIgCAAQgFgBgDgEIABgBIACAAIAAgCIAPABIABABQBVARBOAZIACABIAAEzIAAE0IAAEzIAAE0IAACeQgegqgagsg");
	mask.setTransform(65.6458,71.725);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AJZJ3Qg6hhhFhVIiLipQhFhVgyhnQgzhmgXiEIAAAAQAAgIgDgEQhGAihOAZQh1AliPALIAAABIgOAAIgCAAIgHAAIAAABIgNABIgCAAIgRAAIAAABIgOABIgCAAIgMAAIgCAAIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgdAAIgCAAIgNAAIAAABIgOABIgCAAQh7ALg7BLIgCABQgRAFADgZQAZiABAhaQBAhaBLhOQBMhPBVhEQBVhFBhg4IAxgdQAMgIAOgDQBrgaB9gHIAAgCIAMAAIACAAIAFAAIACAAIAAgCIATAAIACAAIAFAAIABAAIAAgBIATAAIACAAIAHAAIACAAIAAgCIAWAAIACAAIAFAAIACAAIAAgCIAMAAIABAAIAMAAIACAAIAVAAIABAAIAOABIAAABIAHAAIACAAIAMAAIACAAIANABIAAABIAHAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAEAAIABAAIAHgBIAAgBIgBAAIgCAAIgCAAQgFgBgDgEIABgBIACAAIAAgCIAPABIABABQBVARBOAZIACABIAAEzIAAE0IAAEzIAAE0IAACeQgegqgagsg");
	this.shape.setTransform(65.6458,71.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.3,143.5);


(lib.leaf_51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An/JaQgPgDgCgOIgBAAIgBgNIACAAIAAgCIAAgHQAnhzAKiPIACguIAAgCIAAgMIACAAIAAgCIAAgWIAAgCIAAgMIACAAIAAgCIAAgkIAAgCIAAgMIABAAIABgZQAGiVAfh1IgBAAQhfAph5AQIAAABIgNABIgCAAIgDAAIgBAAIgNABIgCAAIgMAAIgCAAIgIAAIgCAAQgSACgNgDQg0gCgpgLQgbgGgEgcQAFgLAKgFIABgBQB8geBQhJQBRhKBdg9QBOg0BcgnQAjgfA7gLQASgEAVgCIAAgBQAHAAAFgCIABAAIAfgDIACgBQAEgBAGAAIACAAIAFAAIACAAQADgDAHABIACAAIAJAAIABAAIAAgCIAYABIAAABQAXgBAUgKIAOgGQBogqCEgLIAAgCIAjAAIACAAIAAgCIAYAAIABAAIAOABIAAABIAHAAIACAAIAMAAIACAAIANABIAAABIAFAAIACAAIAOAAIAAABIACAAIANABIAAABIAEAAIACAAIANABIAAABIAFAAIACAAIATACIAAABIAEAAIABAAIAQADIAAABQCCAXBcA+QAtAeAyAaQAEABAEAAIAMAAIACAAIAMAAIABAAIAcgGIABgBIAAgBIAQABIAAAAQALAEAEAKIAAACQADAGgCALIgBAAQgBARgLAJQhWBDiLAPIAAABIgOABIgBAAIgGAAIAAABIgNABIgCAAIgVAAIAAABIgNABIgCAAQgSABgNgDIgCAAQhcgEhFgZQA+A0BJApQALAGALADQAeAKAcALQADAMgFAKQgFAJgIAGQhKA9iEACIAAABIgNABIgCAAIgTAAIAAABIgOABIgBAAQgNABgIgDIgCAAQh3gEhJgxIgBAAQAAAHgDADQgHBAgRA1QgmB1g7BdQg9BehDBWQhEBWhUBGQgrAjgvAeQgpAahBACg");
	mask.setTransform(86.49,60.275);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("An/JaQgPgDgCgOIgBAAIgBgNIACAAIAAgCIAAgHQAnhzAKiPIACguIAAgCIAAgMIACAAIAAgCIAAgWIAAgCIAAgMIACAAIAAgCIAAgkIAAgCIAAgMIABAAIABgZQAGiVAfh1IgBAAQhfAph5AQIAAABIgNABIgCAAIgDAAIgBAAIgNABIgCAAIgMAAIgCAAIgIAAIgCAAQgSACgNgDQg0gCgpgLQgbgGgEgcQAFgLAKgFIABgBQB8geBQhJQBRhKBdg9QBOg0BcgnQAjgfA7gLQASgEAVgCIAAgBQAHAAAFgCIABAAIAfgDIACgBQAEgBAGAAIACAAIAFAAIACAAQADgDAHABIACAAIAJAAIABAAIAAgCIAYABIAAABQAXgBAUgKIAOgGQBogqCEgLIAAgCIAjAAIACAAIAAgCIAYAAIABAAIAOABIAAABIAHAAIACAAIAMAAIACAAIANABIAAABIAFAAIACAAIAOAAIAAABIACAAIANABIAAABIAEAAIACAAIANABIAAABIAFAAIACAAIATACIAAABIAEAAIABAAIAQADIAAABQCCAXBcA+QAtAeAyAaQAEABAEAAIAMAAIACAAIAMAAIABAAIAcgGIABgBIAAgBIAQABIAAAAQALAEAEAKIAAACQADAGgCALIgBAAQgBARgLAJQhWBDiLAPIAAABIgOABIgBAAIgGAAIAAABIgNABIgCAAIgVAAIAAABIgNABIgCAAQgSABgNgDIgCAAQhcgEhFgZQA+A0BJApQALAGALADQAeAKAcALQADAMgFAKQgFAJgIAGQhKA9iEACIAAABIgNABIgCAAIgTAAIAAABIgOABIgBAAQgNABgIgDIgCAAQh3gEhJgxIgBAAQAAAHgDADQgHBAgRA1QgmB1g7BdQg9BehDBWQhEBWhUBGQgrAjgvAeQgpAahBACg");
	this.shape.setTransform(86.49,60.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,120.6);


(lib.leaf_50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEtFVIgCAAIgWAAIgCAAQgIABgEgDQg8gCg5gFQiNgNh/gcQh+gbhxgqQhwgphlg0Qhmg0h5ggQgggIghgDQgegCgDgaQAagzA6gVIAOgGQBxgoCCgYQCBgYBxgrIClg/QBvgsCEgWQAcgFAhgCIAAgCIAMAAIABAAIAQAAIACAAIAAgBIAMAAIABAAIAMAAIACAAIARAAIACAAIAVAAIABAAIAQAAIACAAIAMAAIABAAIAOABIAAAAIAMAAIACAAIAOABIAAABIABAAIACAAIAVACIABAAIAVACIAAABIAOABIAAABIAHAAIABAAIAQADIAAAAIAFAAIACAAIAPADIAAABQCEAWBbA/QBbA/BABbQAfAtAVA3QAWA4AHBGQADAFgCAJIgBAAIABABQABAJgDADIAAACQABASgNADIgBAAIgBgQIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOQgBgCAAgDIgBgEQgJgBgJAMIgCAAQgSAEgBgNQACgGgKADQgkANghAPIiXBIQhqAyh4AiQAFADAJgCIABAAIANAAIABAAIAEAAIABAAIAAgBIAMAAIACAAIAMAAIACAAIAHAAIACAAIAAgCIAMAAIABAAQARAAAQgCIACAAIAAgCIAMAAIABAAIAMAAIACAAQADgCAGABIABAAICBgOIACAAIAAgCQAIABAGgCIACAAIAngGIACAAIAAgBIAWABIAAAAIADABQAMAKgRAEQhpAch9AHIAAABIgOABIgBAAIgLAAIAAABIgNABIgCAAIgJAAIAAABIgNAAIgCAAIgXAAIAAABIgNABIgCAAIgWAAIAAABIgOABIgCAAIgMAAIgCAAIgMAAIgBAAIgTAAIgCAAIgMAAIgCAAIgFAAQgEAAgDgCg");
	mask.setTransform(89.59,34.325);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AEtFVIgCAAIgWAAIgCAAQgIABgEgDQg8gCg5gFQiNgNh/gcQh+gbhxgqQhwgphlg0Qhmg0h5ggQgggIghgDQgegCgDgaQAagzA6gVIAOgGQBxgoCCgYQCBgYBxgrIClg/QBvgsCEgWQAcgFAhgCIAAgCIAMAAIABAAIAQAAIACAAIAAgBIAMAAIABAAIAMAAIACAAIARAAIACAAIAVAAIABAAIAQAAIACAAIAMAAIABAAIAOABIAAAAIAMAAIACAAIAOABIAAABIABAAIACAAIAVACIABAAIAVACIAAABIAOABIAAABIAHAAIABAAIAQADIAAAAIAFAAIACAAIAPADIAAABQCEAWBbA/QBbA/BABbQAfAtAVA3QAWA4AHBGQADAFgCAJIgBAAIABABQABAJgDADIAAACQABASgNADIgBAAIgBgQIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOQgBgCAAgDIgBgEQgJgBgJAMIgCAAQgSAEgBgNQACgGgKADQgkANghAPIiXBIQhqAyh4AiQAFADAJgCIABAAIANAAIABAAIAEAAIABAAIAAgBIAMAAIACAAIAMAAIACAAIAHAAIACAAIAAgCIAMAAIABAAQARAAAQgCIACAAIAAgCIAMAAIABAAIAMAAIACAAQADgCAGABIABAAICBgOIACAAIAAgCQAIABAGgCIACAAIAngGIACAAIAAgBIAWABIAAAAIADABQAMAKgRAEQhpAch9AHIAAABIgOABIgBAAIgLAAIAAABIgNABIgCAAIgJAAIAAABIgNAAIgCAAIgXAAIAAABIgNABIgCAAIgWAAIAAABIgOABIgCAAIgMAAIgCAAIgMAAIgBAAIgTAAIgCAAIgMAAIgCAAIgFAAQgEAAgDgCg");
	this.shape.setTransform(89.59,34.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.2,68.7);


(lib.leaf_49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkZEeQADgSgBgQQgMicAwhuQAfhKArhAQg3ALg+ANQg1AMg2AAQgHAAAAgKQBAhaBeg7QAwgeA+gOQAwgLA2gFQAzgEA1ACQA4ACAoAPQCPALA2BjQAfA4ADBLQAAAGgEACQgfAFglgJQhagThDgtQgWgQgTgRQgQCKhYBBQhWBDhUBGQgFAEgEAGQgmA/giBCQgMAYgaAIQgagNAHgog");
	mask.setTransform(40.0778,33.8942);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AkZEeQADgSgBgQQgMicAwhuQAfhKArhAQg3ALg+ANQg1AMg2AAQgHAAAAgKQBAhaBeg7QAwgeA+gOQAwgLA2gFQAzgEA1ACQA4ACAoAPQCPALA2BjQAfA4ADBLQAAAGgEACQgfAFglgJQhagThDgtQgWgQgTgRQgQCKhYBBQhWBDhUBGQgFAEgEAGQgmA/giBCQgMAYgaAIQgagNAHgog");
	this.shape.setTransform(40.0778,33.8942);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,67.8);


(lib.leaf_48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjLLpQghg4gkg2IAAiiIAAk0IAAkyIAAk0IAAk0QB3AiBjA3QBjA3BNBNQBNBNArBvQASAwAMA3IABABQACAKgFAFIAAABQgVAIgggGIgCAAIgTAAIgCAAIgNAAIgCAAIgJAAIAAABIgNABIgCAAQgJACgMAAIAAABIgOABIgBAAIgCAAIAAAAIgOABIgCAAIgBAAIAAABIgOABIgCAAIgFAAIAAABIgOABIgBAAQgRABgNgDQgdAAgYgGQh8gbhfg8QArBvAVCEQARBiAFBuQADAEgBAIIAAACIAAAmIAAACQADAEgBAIIgBABIAAANIAAABIAABkIAAACIAAAMIAAABIAAAMIAAACIABACQABAIgDAEIAAAOIAAABIAAAMIAAACIAAACQABAIgDAEIAAAOIAAABIAAACQABAIgDAEIAAACQgHBYgPBQIAAAOIAAACIAAAYIAAACIAHBRIAAABQADAGgCAKIgBAAIgBAFQgCAFgEAAIgDABQgQAAgIgNg");
	mask.setTransform(27.3308,75.7534);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjLLpQghg4gkg2IAAiiIAAk0IAAkyIAAk0IAAk0QB3AiBjA3QBjA3BNBNQBNBNArBvQASAwAMA3IABABQACAKgFAFIAAABQgVAIgggGIgCAAIgTAAIgCAAIgNAAIgCAAIgJAAIAAABIgNABIgCAAQgJACgMAAIAAABIgOABIgBAAIgCAAIAAAAIgOABIgCAAIgBAAIAAABIgOABIgCAAIgFAAIAAABIgOABIgBAAQgRABgNgDQgdAAgYgGQh8gbhfg8QArBvAVCEQARBiAFBuQADAEgBAIIAAACIAAAmIAAACQADAEgBAIIgBABIAAANIAAABIAABkIAAACIAAAMIAAABIAAAMIAAACIABACQABAIgDAEIAAAOIAAABIAAAMIAAACIAAACQABAIgDAEIAAAOIAAABIAAACQABAIgDAEIAAACQgHBYgPBQIAAAOIAAACIAAAYIAAACIAHBRIAAABQADAGgCAKIgBAAIgBAFQgCAFgEAAIgDABQgQAAgIgNg");
	this.shape.setTransform(27.3308,75.7534);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.7,151.5);


(lib.leaf_47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiYBOQBDhWBZg/QAbgTAlgIIAAgCIAQABIAAABQABgBABAAQAAAAABAAQAAABABAAQAAAAAAABIABABQAHgEAHAEIAAABIABAAQAfALASAYQgGAqgZAVQhTBGh/AaIAAAAIgPABIgBAAIgMABQgeAAgGgXg");
	mask.setTransform(15.3,10.0951);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AiYBOQBDhWBZg/QAbgTAlgIIAAgCIAQABIAAABQABgBABAAQAAAAABAAQAAABABAAQAAAAAAABIABABQAHgEAHAEIAAABIABAAQAfALASAYQgGAqgZAVQhTBGh/AaIAAAAIgPABIgBAAIgMABQgeAAgGgXg");
	this.shape.setTransform(15.3,10.0951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,20.2);


(lib.leaf_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABtDZQgOgJgDgVIgBAAIgBgOIAAgCIAAgMQgIg5gkgfQgzgsg6gmQgXgPgVgSQgzgtgYhIIgBAAIgBgTIACAAIAAgCIAAgDQAJgXAZgHIAAgBQAvgBAWAYQAJAKAIADQADgKAOABIACAAIAAgCIATAAIACAAQAMgCAOABIACAAIAOABIAAAAQCBAZAbCAQAGAdABAiQADALgBAPIAAACIAAABQABAIgDAEIAAACQABAJgDAFQgDAcgIAZQgHAZgJAWQgLAdggAHIgCgBg");
	mask.setTransform(18.5125,21.748);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ABtDZQgOgJgDgVIgBAAIgBgOIAAgCIAAgMQgIg5gkgfQgzgsg6gmQgXgPgVgSQgzgtgYhIIgBAAIgBgTIACAAIAAgCIAAgDQAJgXAZgHIAAgBQAvgBAWAYQAJAKAIADQADgKAOABIACAAIAAgCIATAAIACAAQAMgCAOABIACAAIAOABIAAAAQCBAZAbCAQAGAdABAiQADALgBAPIAAACIAAABQABAIgDAEIAAACQABAJgDAFQgDAcgIAZQgHAZgJAWQgLAdggAHIgCgBg");
	this.shape.setTransform(18.5125,21.748);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,43.5);


(lib.leaf_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqE0QgmgkgFhEIAAAAIgBgOIAAgCIAAgfIABAAIAAgBIAAgOQAWiEA9hcIAWghIAAgBIgKgBIgCAAIgTAAIAAABIgNABIgCAAIgOAAIgCAAIgGAAIgCAAIgMAAIgCAAIgOAAIAAABIgNABIgCAAIhUAIIAAABIgQABIgCAAQgZADgJgNIgBAAIgBgQIACAAIAAgBIAAgCQBLhPBdg9QArgcBAgGIAAgCIAKAAIACAAIAAgBIATABIAAAAIACAAIANABIABABQBPAJAgA0IAFABIAFAAIAAgCIANABIAAABIAEAAIACAAIANABIAAABQAkAIAdAMQALAFAMABQCHAUBTBHQAkAgATAwQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAFAaAAAdIAAACQADAIgCAMIgBABIAAABQADAugigGIgBAAQgEABgDgFIAAgBQgBgMgEgHQgVgTgfgGQh6gXhHhIQgRA3gcAsQg7BfhvAoQhjAkggBnIgBAAQgDAGgIAAQgGAAgDgCg");
	mask.setTransform(42.39,31.025);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjqE0QgmgkgFhEIAAAAIgBgOIAAgCIAAgfIABAAIAAgBIAAgOQAWiEA9hcIAWghIAAgBIgKgBIgCAAIgTAAIAAABIgNABIgCAAIgOAAIgCAAIgGAAIgCAAIgMAAIgCAAIgOAAIAAABIgNABIgCAAIhUAIIAAABIgQABIgCAAQgZADgJgNIgBAAIgBgQIACAAIAAgBIAAgCQBLhPBdg9QArgcBAgGIAAgCIAKAAIACAAIAAgBIATABIAAAAIACAAIANABIABABQBPAJAgA0IAFABIAFAAIAAgCIANABIAAABIAEAAIACAAIANABIAAABQAkAIAdAMQALAFAMABQCHAUBTBHQAkAgATAwQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAFAaAAAdIAAACQADAIgCAMIgBABIAAABQADAugigGIgBAAQgEABgDgFIAAgBQgBgMgEgHQgVgTgfgGQh6gXhHhIQgRA3gcAsQg7BfhvAoQhjAkggBnIgBAAQgDAGgIAAQgGAAgDgCg");
	this.shape.setTransform(42.39,31.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.8,62.1);


(lib.leaf_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpDRQgeAAgYgEQhPgKgngwIgBAAIgBgRIACAAIAAgCIAAgDIANgQIABgBQBBgfAtg0QAlgoAhgrQArg2Aog4QAHgKAMgHQAggUAxgDIAAgCIATAAIACAAIAWADIAAABQB3AaAPCCIAAACQADAKgBAOIAAACIAAACQABAIgDAEQgHAtgZAdQgaAegfAYQhYBCiDAVIAAABIgOABIgCAAIAAABIgNABIgCAAIgMAAIgCAAIgIAAQgMAAgJgCg");
	mask.setTransform(27.9625,21.0875);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AhpDRQgeAAgYgEQhPgKgngwIgBAAIgBgRIACAAIAAgCIAAgDIANgQIABgBQBBgfAtg0QAlgoAhgrQArg2Aog4QAHgKAMgHQAggUAxgDIAAgCIATAAIACAAIAWADIAAABQB3AaAPCCIAAACQADAKgBAOIAAACIAAACQABAIgDAEQgHAtgZAdQgaAegfAYQhYBCiDAVIAAABIgOABIgCAAIAAABIgNABIgCAAIgMAAIgCAAIgIAAQgMAAgJgCg");
	this.shape.setTransform(27.9625,21.0875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,42.2);


(lib.leaf_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AETEcQg9gXgsgmQhMhDiMgDIgCAAQgIABgEgDIgBAAQh6gGhygPIAAhsIAAkzQBrAwBiA3QBiA3BTBGQArAkAiAqQBFBVAuBrQAKAYADAfIABABIACACIABAAQAAAHgEAEQgGAEgFAAQgEAAgEgCg");
	mask.setTransform(29.775,28.555);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AETEcQg9gXgsgmQhMhDiMgDIgCAAQgIABgEgDIgBAAQh6gGhygPIAAhsIAAkzQBrAwBiA3QBiA3BTBGQArAkAiAqQBFBVAuBrQAKAYADAfIABABIACACIABAAQAAAHgEAEQgGAEgFAAQgEAAgEgCg");
	this.shape.setTransform(29.775,28.555);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.6,57.1);


(lib.leaf_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AE5FiQiFgWh2glQh0gkhlg2QhWgvhKg6IgHgGIgJgHIgEgEQgIjcgdjFIgBgGIgNgOIAAgIIBLAWQAcAJAcAKQBwArBuArQBtAsBqAwIDNBcIAAEzIAABrQgogDgigGg");
	mask.setTransform(38.725,36.3);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AE5FiQiFgWh2glQh0gkhlg2QhWgvhKg6IgHgGIgJgHIgEgEQgIjcgdjFIgBgGIgNgOIAAgIIBLAWQAcAJAcAKQBwArBuArQBtAsBqAwIDNBcIAAEzIAABrQgogDgigGg");
	this.shape.setTransform(38.725,36.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.5,72.6);


(lib.leaf_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA0CnQhDgDg6gNQg4gOgzgTQgPgGgDgRQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAdAEAZAKIgogkQhQhKgnhzIABgCQABgGgHACIAAABQgSAIgJgIQATgXAlgHQAhgHAogFQAEgBAGAAIACAAIAIAAIACAAIAAgCIAdAAIACAAIAMAAIACAAIANABIAAABIAGAAIABAAIAOABIAAAAIAEAAIABAAIAOABIAAACIAFAAIACAAIARACIAAABIAFAAIACAAQAGACAIAAIAAABQB+AbBTBGQAbAXAYAZIAIAHIABABQAtA6A5AvIABABIABAAQAGALgJAGIgBAAQgJAHgFAJIgCAAQgvAZhEAEIAAAAIgOABIgCAAIgFAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgTAAQgSABgQgDg");
	mask.setTransform(33.5241,16.95);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AA0CnQhDgDg6gNQg4gOgzgTQgPgGgDgRQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAdAEAZAKIgogkQhQhKgnhzIABgCQABgGgHACIAAABQgSAIgJgIQATgXAlgHQAhgHAogFQAEgBAGAAIACAAIAIAAIACAAIAAgCIAdAAIACAAIAMAAIACAAIANABIAAABIAGAAIABAAIAOABIAAAAIAEAAIABAAIAOABIAAACIAFAAIACAAIARACIAAABIAFAAIACAAQAGACAIAAIAAABQB+AbBTBGQAbAXAYAZIAIAHIABABQAtA6A5AvIABABIABAAQAGALgJAGIgBAAQgJAHgFAJIgCAAQgvAZhEAEIAAAAIgOABIgCAAIgFAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgTAAQgSABgQgDg");
	this.shape.setTransform(33.5241,16.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.1,33.9);


(lib.leaf_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkYCpQgdgBgEgZQAUgdAcgUQAMgIAJgLQA8hJBHg/QA8g3BZgaQA3gQA9gJIAAgCIAZAAIABAAIAOABIAAABIAIAEIABABQADAAgBAFIABAAQAVgNAUAQIAaAUQAlAdAEA9QADAIgCALIgBAAIAAACQACAIgDAEQgFAlgWAVQgxAvhKAWQh1AkiMANIAAABIgOABIgBAAIgHAAIAAABIgOABIgCAAIgTAAIAAAAIgNABIgCAAIgMAAIgCAAIgTAAIgCAAIgYAAIgOAAIgngBg");
	mask.setTransform(31.39,17.0313);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AkYCpQgdgBgEgZQAUgdAcgUQAMgIAJgLQA8hJBHg/QA8g3BZgaQA3gQA9gJIAAgCIAZAAIABAAIAOABIAAABIAIAEIABABQADAAgBAFIABAAQAVgNAUAQIAaAUQAlAdAEA9QADAIgCALIgBAAIAAACQACAIgDAEQgFAlgWAVQgxAvhKAWQh1AkiMANIAAABIgOABIgBAAIgHAAIAAABIgOABIgCAAIgTAAIAAAAIgNABIgCAAIgMAAIgCAAIgTAAIgCAAIgYAAIgOAAIgngBg");
	this.shape.setTransform(31.39,17.0313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,34.1);


(lib.leaf_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjHGcQgNgCgEgKIgBAAIgBgOIAAgBIAAgCQAgguANg/QANhBAEhJQAIiSAch/QAch9BIhSQARgTANgUQAOgVAfgFIAAgCIARABIAAABQBYAaAcBaQAVBHAHBYQADAMgBAPIAAACIAAANIAAABIAAABQABAJgDAEIAAADIAAACIAAABQACAJgDAEQgEAtgNAiQgsBvhIBRQgkAqgnAnQhLBNhzAnIAAABIgOABIgCAAg");
	mask.setTransform(21.8625,41.2);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjHGcQgNgCgEgKIgBAAIgBgOIAAgBIAAgCQAgguANg/QANhBAEhJQAIiSAch/QAch9BIhSQARgTANgUQAOgVAfgFIAAgCIARABIAAABQBYAaAcBaQAVBHAHBYQADAMgBAPIAAACIAAANIAAABIAAABQABAJgDAEIAAADIAAACIAAABQACAJgDAEQgEAtgNAiQgsBvhIBRQgkAqgnAnQhLBNhzAnIAAABIgOABIgCAAg");
	this.shape.setTransform(21.8625,41.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,82.4);


(lib.leaf_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjJEpQgGgFgCgGQgRg2AAhEQACiXBDhVIgBAAQhCAchSALIAAABIgQABIgBAAQgnAGgDgeQA1hlBXhDQBCgyBhgSIAAgBIAWAAIACAAIAEAAIABAAIAAgCIAMAAIACAAIAVAAIACAAIAFAAIACAAIAAgCIARAAIACAAIAOABIAAABIABAAIAMAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIAFAAIACAAIAPADIAAABQCEAWA+BcQAxBHAJBuQADAKgDAOIAAAAQAAANgCALIgDAWQgCAagTAHQgIABgBgEQgMgdgigGQh0gThEhAQgIAlgWAZQg/BHhSA0QhGAsgpBKIgCABQgCADgHAAIgDAAg");
	mask.setTransform(36.5568,29.685);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjJEpQgGgFgCgGQgRg2AAhEQACiXBDhVIgBAAQhCAchSALIAAABIgQABIgBAAQgnAGgDgeQA1hlBXhDQBCgyBhgSIAAgBIAWAAIACAAIAEAAIABAAIAAgCIAMAAIACAAIAVAAIACAAIAFAAIACAAIAAgCIARAAIACAAIAOABIAAABIABAAIAMAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIAFAAIACAAIAPADIAAABQCEAWA+BcQAxBHAJBuQADAKgDAOIAAAAQAAANgCALIgDAWQgCAagTAHQgIABgBgEQgMgdgigGQh0gThEhAQgIAlgWAZQg/BHhSA0QhGAsgpBKIgCABQgCADgHAAIgDAAg");
	this.shape.setTransform(36.5568,29.685);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.1,59.4);


(lib.leaf_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH2C9IgBAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgBAAQgHAEgLgBIAAABIgNABIgCAAIgMAAIAAABIgOABIgCAAIgUAAIAAABIgOABQgxABgngKQgngKgngIQiDgZhtgtQhtgshYhBIgBABIgHADIAAABIgVAAQggAAgTAOQgmAfg2APIAAAAIgNABIgCAAIgiAAIgCAAQgIACgEgDIgCAAIgRAAIgCAAQgIABgEgDIgCAAIgWAAIgCAAQgIABgEgDIgBAAIgMAAIgCAAIAFgJIANgGIAAgPIAJgMIAJgmQAJgGAAgMQABgGAFAAIAMgQIAAgBQAFgCAEAAIAGgPIAJgDQAFgNAHgMQACgEAHACQgBgHADgDQADgHAHACIAGgPIAKgDIAGgMIADgbQAGgCAHgBIACAAIAAgCIAUAAIACAAIAOABIAAABIADAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIACAAIAOAAIACAAIANABIAAAAIAJAAIACAAIANABIAAABIAJAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAHAAIACAAIANAAIABABIAWACIACAAIANABIAAABQCJARBvAoQByAqBdA+QAuAdAoAlQAyAvAjA+IAKATIABAAQACALgFAEIAAABQgEAEgEAAQgFAAgEgHg");
	mask.setTransform(52.2641,19.5563);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AH2C9IgBAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgBAAQgHAEgLgBIAAABIgNABIgCAAIgMAAIAAABIgOABIgCAAIgUAAIAAABIgOABQgxABgngKQgngKgngIQiDgZhtgtQhtgshYhBIgBABIgHADIAAABIgVAAQggAAgTAOQgmAfg2APIAAAAIgNABIgCAAIgiAAIgCAAQgIACgEgDIgCAAIgRAAIgCAAQgIABgEgDIgCAAIgWAAIgCAAQgIABgEgDIgBAAIgMAAIgCAAIAFgJIANgGIAAgPIAJgMIAJgmQAJgGAAgMQABgGAFAAIAMgQIAAgBQAFgCAEAAIAGgPIAJgDQAFgNAHgMQACgEAHACQgBgHADgDQADgHAHACIAGgPIAKgDIAGgMIADgbQAGgCAHgBIACAAIAAgCIAUAAIACAAIAOABIAAABIADAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIACAAIAOAAIACAAIANABIAAAAIAJAAIACAAIANABIAAABIAJAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAHAAIACAAIANAAIABABIAWACIACAAIANABIAAABQCJARBvAoQByAqBdA+QAuAdAoAlQAyAvAjA+IAKATIABAAQACALgFAEIAAABQgEAEgEAAQgFAAgEgHg");
	this.shape.setTransform(52.2641,19.5563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,39.1);


(lib.leaf_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap4DIQAXgaAegSQAZgNAXgQQBbg/BogxQBogyBygoQBygoB9gdQBSgTBdgKIAAgBQAJAAAIgCIACAAIBNgHIACAAIAAgCIAMAAIABAAIAGAAIABAAIAAgBIAMAAIACAAIAMAAIACAAIAPAAIACAAIAAgCIAQAAIABAAIASAAIABAAIAQABIAAABQAIAAAFgCIACAAQALAAAKgCIACAAQACgCAGAAIACABIADAAIACAAQAFgCAHAAIABAAQATgBAQgCIACgBIAAgBQAHACACgGIABAAIAAgBIAAgCIAJgEIgDAbIgGAMIgKADIgGAPQgGgCgEAHQgCADAAAHQgGgCgDAEQgGAMgFANIgJADIgHAPQgEAAgFACIAAABIgMAQQgFAAgBAGQAAAMgJAGIgJAnIgJALIAAAPIgMAGIgGAJIAAAAIgMAAIgBAAIgNAAIgCAAIgNAAIgCAAIgMAAIgBAAIggAAIgCAAIgLAAIgCAAIgOAAIgBAAIgMAAIgDAAIgDAAIAAABIgOABIgBAAIgMAAIgCAAIgBAAIgBABIgOABQhNAIhJAPQgYAFgXAIQhSAfhZAbQh1AkiJAQIgBABIgOAAIgBAAIAAABIgOABIgCAAIgJAAIAAABIgNABIgBAAIgJAAIAAABIgOABIgCAAIgOAAIAAAAIgNABIgCAAIgLAAIAAABIgNABIgCAAIgKAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgCAAIgBAAIAAABIgPABIgBAAIAAABIgOABIAAABIhMAJIAAABIgNABIgCAAIgEAAQgMAAgBgKg");
	mask.setTransform(63.3,21.0388);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("Ap4DIQAXgaAegSQAZgNAXgQQBbg/BogxQBogyBygoQBygoB9gdQBSgTBdgKIAAgBQAJAAAIgCIACAAIBNgHIACAAIAAgCIAMAAIABAAIAGAAIABAAIAAgBIAMAAIACAAIAMAAIACAAIAPAAIACAAIAAgCIAQAAIABAAIASAAIABAAIAQABIAAABQAIAAAFgCIACAAQALAAAKgCIACAAQACgCAGAAIACABIADAAIACAAQAFgCAHAAIABAAQATgBAQgCIACgBIAAgBQAHACACgGIABAAIAAgBIAAgCIAJgEIgDAbIgGAMIgKADIgGAPQgGgCgEAHQgCADAAAHQgGgCgDAEQgGAMgFANIgJADIgHAPQgEAAgFACIAAABIgMAQQgFAAgBAGQAAAMgJAGIgJAnIgJALIAAAPIgMAGIgGAJIAAAAIgMAAIgBAAIgNAAIgCAAIgNAAIgCAAIgMAAIgBAAIggAAIgCAAIgLAAIgCAAIgOAAIgBAAIgMAAIgDAAIgDAAIAAABIgOABIgBAAIgMAAIgCAAIgBAAIgBABIgOABQhNAIhJAPQgYAFgXAIQhSAfhZAbQh1AkiJAQIgBABIgOAAIgBAAIAAABIgOABIgCAAIgJAAIAAABIgNABIgBAAIgJAAIAAABIgOABIgCAAIgOAAIAAAAIgNABIgCAAIgLAAIAAABIgNABIgCAAIgKAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgCAAIgBAAIAAABIgPABIgBAAIAAABIgOABIAAABIhMAJIAAABIgNABIgCAAIgEAAQgMAAgBgKg");
	this.shape.setTransform(63.3,21.0388);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,42.1);


(lib.leaf_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACxCgIgCAAIgBAAIgCAAQh1gPh9gHIgBAAIgMAAIgCAAQgIABgEgDIgCAAIhDgDIgCAAQgIABgEgDIgBAAIgCAAIgCAAIgfAAQgTABgRAEQgRAEgOAIQgbAOgjAAIgBgBQgEgCAAgIIgBAAIgBgIQBNhOBdg9QBcg8BngyQBQgnBpgOIAAgCIAfAAIABAAIARADIABABQBVAgASBjIAAABQADAJgBAOIgBABIABABQABAJgDAFIAAACQgUB5h5AVIAAABIgOABIgCAAIgBAAIgCAAIAAABIgIABQgDAAgDgCg");
	mask.setTransform(35.2875,16.1818);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ACxCgIgCAAIgBAAIgCAAQh1gPh9gHIgBAAIgMAAIgCAAQgIABgEgDIgCAAIhDgDIgCAAQgIABgEgDIgBAAIgCAAIgCAAIgfAAQgTABgRAEQgRAEgOAIQgbAOgjAAIgBgBQgEgCAAgIIgBAAIgBgIQBNhOBdg9QBcg8BngyQBQgnBpgOIAAgCIAfAAIABAAIARADIABABQBVAgASBjIAAABQADAJgBAOIgBABIABABQABAJgDAFIAAACQgUB5h5AVIAAABIgOABIgCAAIgBAAIgCAAIAAABIgIABQgDAAgDgCg");
	this.shape.setTransform(35.2875,16.1818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.6,32.4);


(lib.leaf_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC4EeQgJgTgIgUQgVhAg/gYQgvgTgmgdQhXhChKhPQgmgngPg/IAIgPIABgCIgBAAIgBgaIACAAIAAgBIAAgOQAEgvAUghQACgDgHgFQACgJANABIACAAQA0AZA2AZQBpAvBGBTQBHBTAYB+QAJApABAtQADAGgBAJIAAACIAAACQABAIgDAEIAAADIAAACIAAACQABAJgDAFIAAABQABAlgUAPIAAABIgCAAQgGAAgCgFg");
	mask.setTransform(21.7,29.1029);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AC4EeQgJgTgIgUQgVhAg/gYQgvgTgmgdQhXhChKhPQgmgngPg/IAIgPIABgCIgBAAIgBgaIACAAIAAgBIAAgOQAEgvAUghQACgDgHgFQACgJANABIACAAQA0AZA2AZQBpAvBGBTQBHBTAYB+QAJApABAtQADAGgBAJIAAACIAAACQABAIgDAEIAAADIAAACIAAACQABAJgDAFIAAABQABAlgUAPIAAABIgCAAQgGAAgCgFg");
	this.shape.setTransform(21.7,29.1029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,58.2);


(lib.leaf_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABhDwQgVgigXggQhBhYhOhMQg6g4gIhrIgBAAIgBgNIACAAIAAgCIAAgJQAFgRAKgMIAAgCQAEgDAIAAIACAAQAdgxBNALQAWADAQAOQBSBHAkB1QARA3AFBCQADAOgBASIAAACIAAAQIAAABIAAACQABAIgDAEIAAACIAAACQACAIgDAEIgBARQgDA4gmAVQgLgDgGgJg");
	mask.setTransform(15.9375,25.2316);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ABhDwQgVgigXggQhBhYhOhMQg6g4gIhrIgBAAIgBgNIACAAIAAgCIAAgJQAFgRAKgMIAAgCQAEgDAIAAIACAAQAdgxBNALQAWADAQAOQBSBHAkB1QARA3AFBCQADAOgBASIAAACIAAAQIAAABIAAACQABAIgDAEIAAACIAAACQACAIgDAEIgBARQgDA4gmAVQgLgDgGgJg");
	this.shape.setTransform(15.9375,25.2316);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,50.5);


(lib.leaf_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkLHLIgCAAQgPgDgDgOIAAgCIAAgRQAuhhAGiHQAHiYAUh/IgBAAQgpAIgsAEIAAABIgOAAIgCAAIgHAAIAAABIgNABIgCAAIgQAAIAAABIgNABIgCAAIgYAAIAAABIgOABIgCAAIgNAAIgCAAIgYAAIAAAAIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgMAAIgCAAIgdAAIAAABIgOABIgCAAQgOABgKgDIgTABQgcAAgGgUQALgbAhgHQAPgEAMgIQBHgsAzg/QBFhWBkg1QBagxBygXIAAgCQAHAAAFgBIABgBIAVgBIACAAIAAgCIATAAIACAAIAAgCIAWABIABABIANABIAAABQAOAEAOgDIACAAIANABIAAABIAKABIABABQAtAJAaAQIgBgDQAAgKAMABIACABIAOAAIAAABIAMABIAAABQCHATBaBAQAYASAWAVQBPBLAfB7QANA2AIA9QADAcAKAYQAHAQgCARQgCAKgLgFIgBAAQgMABgHgDQhHgDgygXQhrgwhShHIgLAkQgnByhFBUQhGBVhUBGIgqAiQhWBDiBAZIAAABIgIABQgFAAgDgCg");
	mask.setTransform(62.2329,46.09);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AkLHLIgCAAQgPgDgDgOIAAgCIAAgRQAuhhAGiHQAHiYAUh/IgBAAQgpAIgsAEIAAABIgOAAIgCAAIgHAAIAAABIgNABIgCAAIgQAAIAAABIgNABIgCAAIgYAAIAAABIgOABIgCAAIgNAAIgCAAIgYAAIAAAAIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgMAAIgCAAIgdAAIAAABIgOABIgCAAQgOABgKgDIgTABQgcAAgGgUQALgbAhgHQAPgEAMgIQBHgsAzg/QBFhWBkg1QBagxBygXIAAgCQAHAAAFgBIABgBIAVgBIACAAIAAgCIATAAIACAAIAAgCIAWABIABABIANABIAAABQAOAEAOgDIACAAIANABIAAABIAKABIABABQAtAJAaAQIgBgDQAAgKAMABIACABIAOAAIAAABIAMABIAAABQCHATBaBAQAYASAWAVQBPBLAfB7QANA2AIA9QADAcAKAYQAHAQgCARQgCAKgLgFIgBAAQgMABgHgDQhHgDgygXQhrgwhShHIgLAkQgnByhFBUQhGBVhUBGIgqAiQhWBDiBAZIAAABIgIABQgFAAgDgCg");
	this.shape.setTransform(62.2329,46.09);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,92.2);


(lib.leaf_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiUE0IgCAAQgNgBgBgNIgBAAIgBgQIACAAIAAgBIAAgFQAhhOAFhpIAAgBIAAgCIAAgMIACAAIAAgCIAAgRIAAgCIAAgMIABAAIAAgCIAAgZIAAgCIAAgMIACAAIAAgBIAAgWQAGiUA+hdIAFgIQAUgXAggMQAKABAJgBIABAAIAAgCIAVABIAAABQAnAJAYAYIABABIAIAIIAAABQAuA4ACBjIAAACQADAMgCARIgBAAIAAAIIAAACIAAACQACAJgDAFQgIBGgZA2QgxBphbA/IgXAQQgqAjg9ARIAAABIgGABQgEAAgDgCg");
	mask.setTransform(16.69,30.965);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AiUE0IgCAAQgNgBgBgNIgBAAIgBgQIACAAIAAgBIAAgFQAhhOAFhpIAAgBIAAgCIAAgMIACAAIAAgCIAAgRIAAgCIAAgMIABAAIAAgCIAAgZIAAgCIAAgMIACAAIAAgBIAAgWQAGiUA+hdIAFgIQAUgXAggMQAKABAJgBIABAAIAAgCIAVABIAAABQAnAJAYAYIABABIAIAIIAAABQAuA4ACBjIAAACQADAMgCARIgBAAIAAAIIAAACIAAACQACAJgDAFQgIBGgZA2QgxBphbA/IgXAQQgqAjg9ARIAAABIgGABQgEAAgDgCg");
	this.shape.setTransform(16.69,30.965);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,62);


(lib.leaf_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFTGkIgCAAQgugBgrgGIgCAAIgOgDQhtgNhfgcIgEgBIgmgNIgFgCQgigMgegPIgNgGIgXgMQgWgNgUgNIgOgKIgJgGIgPgMIgDgCIgBgBIgBgBIgFgEIgBgBIABAEQgQgogBgpIAAgHIgahOQgni9gsi/QgPhAgYg8IAHAFIAHAFIAQAKIAGAEIALAHIAEACIAJAGIAEADIACABIABAAIAPAJIAIAFIAAABIAEACIAKAFIAzAWQBRAlBIAsQBfA6BWBEIBWBFQBUBFBQBJIAKAIIAAAaIAAABIAAACIAAACIAAEQIAAABIAAACIAAAVIAAABIAAACIgCAAIgJAAQgOAAgLgCg");
	mask.setTransform(37.525,42.2375);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AFTGkIgCAAQgugBgrgGIgCAAIgOgDQhtgNhfgcIgEgBIgmgNIgFgCQgigMgegPIgNgGIgXgMQgWgNgUgNIgOgKIgJgGIgPgMIgDgCIgBgBIgBgBIgFgEIgBgBIABAEQgQgogBgpIAAgHIgahOQgni9gsi/QgPhAgYg8IAHAFIAHAFIAQAKIAGAEIALAHIAEACIAJAGIAEADIACABIABAAIAPAJIAIAFIAAABIAEACIAKAFIAzAWQBRAlBIAsQBfA6BWBEIBWBFQBUBFBQBJIAKAIIAAAaIAAABIAAACIAAACIAAEQIAAABIAAACIAAAVIAAABIAAACIgCAAIgJAAQgOAAgLgCg");
	this.shape.setTransform(37.525,42.2375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.1,84.5);


(lib.leaf_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai1FOIAAgBQgGgIADgRQADgIAAgMIAAgCIAAgCIAAgRIAAgCIAAgMIgBAAIgBgNIAAgCIAAAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgMIAAgBIAAgMIAAgCIAAgQIgBAAIAAgNIAAgCIAAgTIABAAIAAgCIAAgfQAViEAxhpQAdg9Ajg3QArgoBJgIIACAAIAQABIAAABQBgAWAMBrIAAABQADAJgBAOIAAABIAAACQABAIgDAEQgNBqgtBJQg5BghFBVQhFBVhdA8IgCAAIgGAAQgJAAgGgEg");
	mask.setTransform(19.0125,33.8173);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("Ai1FOIAAgBQgGgIADgRQADgIAAgMIAAgCIAAgCIAAgRIAAgCIAAgMIgBAAIgBgNIAAgCIAAAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgMIAAgBIAAgMIAAgCIAAgQIgBAAIAAgNIAAgCIAAgTIABAAIAAgCIAAgfQAViEAxhpQAdg9Ajg3QArgoBJgIIACAAIAQABIAAABQBgAWAMBrIAAABQADAJgBAOIAAABIAAACQABAIgDAEQgNBqgtBJQg5BghFBVQhFBVhdA8IgCAAIgGAAQgJAAgGgEg");
	this.shape.setTransform(19.0125,33.8173);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,67.7);


(lib.leaf_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsGLQgMgCgBgJQgJg/gUgzQgrhugNiMIgBAAIgBgOIAAgCIAAgOIgBAAIgBgOIAAgCIAAgUIAAgCIAAgQIAAgBIAAhKQAJiRBWhFQArgiBIgHIAAgBIAQAAIACAAIAOAAIAAABQBhATArBIQAPAZALAeQAKAdABAnQADAPgBATIAAACIAAABQABAJgDADIgEAaQgYB6gyBiQg0BmhEBWIgQAXQggAtg2AYIAAAAIgJABQgFAAgDgBg");
	mask.setTransform(21.0875,39.6318);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AhsGLQgMgCgBgJQgJg/gUgzQgrhugNiMIgBAAIgBgOIAAgCIAAgOIgBAAIgBgOIAAgCIAAgUIAAgCIAAgQIAAgBIAAhKQAJiRBWhFQArgiBIgHIAAgBIAQAAIACAAIAOAAIAAABQBhATArBIQAPAZALAeQAKAdABAnQADAPgBATIAAACIAAABQABAJgDADIgEAaQgYB6gyBiQg0BmhEBWIgQAXQggAtg2AYIAAAAIgJABQgFAAgDgBg");
	this.shape.setTransform(21.0875,39.6318);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,79.3);


(lib.leaf_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdDCIgCAAQgRgFAFgbQAKgYACgfIAAgCIAAgCIAAgMIAAgCIAAgYIAAgBIAAgMIAAgCIAAgHIgBAAIgBgOIAAgBIAAgQIAAgCIAAAAIgBgMIAAgCIAAgMIABAAIAAgCIAAgkQAGhbA7gnQAJgGAMgDIAAgCIARABIAAABQBaAVALBlIAAABQADAGgCAKIgBAAIAAACIAAABQABAJgDADQgHAwgTAkQg3BkhnAxIgBABIgGABQgEAAgDgCg");
	mask.setTransform(10.875,19.615);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AhdDCIgCAAQgRgFAFgbQAKgYACgfIAAgCIAAgCIAAgMIAAgCIAAgYIAAgBIAAgMIAAgCIAAgHIgBAAIgBgOIAAgBIAAgQIAAgCIAAAAIgBgMIAAgCIAAgMIABAAIAAgCIAAgkQAGhbA7gnQAJgGAMgDIAAgCIARABIAAABQBaAVALBlIAAABQADAGgCAKIgBAAIAAACIAAABQABAJgDADQgHAwgTAkQg3BkhnAxIgBABIgGABQgEAAgDgCg");
	this.shape.setTransform(10.875,19.615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.8,39.3);


(lib.leaf_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjuGuIgCAAQgNgCgEgMIgBAAIgBgVIACAAIAAgBIAAgOQAEgKgBgQIAAgCIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgNIAAAAIgBgOIAAgCIAAgRIgBAAIgBgOIAAgBIAAgLIgBAAIgBgOIAAgBIAAgEIgBAAIAAgNIAAgCIAAgQIAAgBIAAgCIgBAAIgBgOIAAgCIAAgRIAAgBIAAgMIACAAIAAgCIAAgYIAAgCIAAgMIABAAIAAgCIAAgPQANiNAohxQAehVAvhEQAPgWAagMQAtg7BdgKIACAAIAAgCIAeAAIACAAIAVADIAAABQCBAZAXCDQAEAZAAAdQADARgBAWIAAACIAAACQABAIgDAEIAAABIAAACIAAACQACAIgDAEQAAAFgCAFQgbBug3BSQg9BdhIBSQhIBRhYBCQgsAhg8ASIAAABIgIABQgFAAgEgCg");
	mask.setTransform(26.3375,43.165);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AjuGuIgCAAQgNgCgEgMIgBAAIgBgVIACAAIAAgBIAAgOQAEgKgBgQIAAgCIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgNIAAAAIgBgOIAAgCIAAgRIgBAAIgBgOIAAgBIAAgLIgBAAIgBgOIAAgBIAAgEIgBAAIAAgNIAAgCIAAgQIAAgBIAAgCIgBAAIgBgOIAAgCIAAgRIAAgBIAAgMIACAAIAAgCIAAgYIAAgCIAAgMIABAAIAAgCIAAgPQANiNAohxQAehVAvhEQAPgWAagMQAtg7BdgKIACAAIAAgCIAeAAIACAAIAVADIAAABQCBAZAXCDQAEAZAAAdQADARgBAWIAAACIAAACQABAIgDAEIAAABIAAACIAAACQACAIgDAEQAAAFgCAFQgbBug3BSQg9BdhIBSQhIBRhYBCQgsAhg8ASIAAABIgIABQgFAAgEgCg");
	this.shape.setTransform(26.3375,43.165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,86.4);


(lib.leaf_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABwC0IgBAAQg5gfhVgDIgCAAIgMAAIgBAAIgOAAIgCAAIgMAAIgCAAIgMAAIgBAAIgMAAIgCAAIgMAAIgCAAIgTAAIAAgCIAAgBIAAgVIAAgCIAAgBIAAkNIAAgCIAAgCIAAgCIAAgZIBRBPIAAABIAIAIIABABIAIAHIAAACQAHAIAIAIIABABIAIAHIAAABQBIBQA6BgIAVAlQACATgLAGIgCAAIAAABIgGABQgFAAgDgCg");
	mask.setTransform(13.6904,18.215);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ABwC0IgBAAQg5gfhVgDIgCAAIgMAAIgBAAIgOAAIgCAAIgMAAIgCAAIgMAAIgBAAIgMAAIgCAAIgMAAIgCAAIgTAAIAAgCIAAgBIAAgVIAAgCIAAgBIAAkNIAAgCIAAgCIAAgCIAAgZIBRBPIAAABIAIAIIABABIAIAHIAAACQAHAIAIAIIABABIAIAHIAAABQBIBQA6BgIAVAlQACATgLAGIgCAAIAAABIgGABQgFAAgDgCg");
	this.shape.setTransform(13.6904,18.215);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,36.5);


(lib.leaf_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AigL6QgFAAgBgEQgJgUgDgaIgBAAIgBgOIAAgBIAAgMIgBgBIgBgNIAAgCIAAgCIgBAAIgBgNIAAAAIgBgOIAAgCIgBAAIgBgOIAAgBQgDgDABgIIgBAAIgBgNIAAgBIgBgNIgBAAIgBgMIgBAAIgBgOIAAgCIAAgBIgBAAIAAgOIAAgCIAAgCIgBAAIgBgNIgBgCQgCgDABgHIgBAAQAAgKgCgIQgOhBgYg4QgphcgmhfQgrhwgViEIgBAAIgBgQIACAAIAAgCIgKhiIgBAAIgBgNIAAgCIAAgDIgBgBIgBgNIAAgCIAAgDIAAAAIgBgOIAAgCIAAgKIgBAAIgBgOIAAgCIAAgMIAAgBIAAgGIgBAAIgBgNIAAgCIAAgMIAAgCIAAgKIgBAAIAAgOIAAgCIAAgMIAAgBIAAgOIAAgCIAAgnIABAAIAAgCQABgOgBgHQgKAIgLAHQhOAvhgAeQhzAlhsAuQgiAPgVAbQgSAXggABIAAABQgKAHACgPIACAAIAAgCIAAgGQAmh0A+hcQA+hcBQhKQBQhJBpgzQBPgnBfgZQANgEAPgCIAAgCIAMAAIACAAIAAgBIANAAIABABIABAAIAmAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAAAIACAAIANABIAAABIAOABIAAABIAFAAIACAAIATADIAAAAIADAAIACAAQAHACAKABIAAABIAEAAIABAAQAHACAJAAIAAABQAHAAAFACIACAAQAFACAIABIAAAAQA3AMAsATIACAAQATAUAcAMQAZAMAYAPQBgA6BYBCQBHA1A/A8IAIAHIABACIAIAHIAAABICcCYQAUATASAVQBFBPAvBkQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAQgNAFgFgNIgBAAQAHAhgIAdIAAAEQgLABgBACIABAAQAvARA1AKIACABIANABIABAAIAMAAIABAAIAAgBIAMAAIACAAQAIAAAGgCIACAAIADAAIACAAIAAgCIAPABIAAABQABgBABAAQABAAAAAAQAAABAAAAQAAAAAAABQgHAWgngBIAAABQgLACgIgDQgkgBgbgKQhqglh4gWQiDgXh7ghQh3ghhig4QAEAmABAnIAAACIAAAFIAAACQADADgBAJIAAABIAAAVIAAACIAAALIAAABIAAACQABAIgDAEIAAALIAAABIAAAMIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAADIAAACIAAACQABAIgDAEIAAABIABACQABAIgDAEIAAACQAAARgEAOIAAACIAAABIAAACQACAIgDAEIAAACIAAABIAAACQABAIgDAEQgLB4geBhQglB2g3BkIgbAwQgdAyg4AVIAAABIgHAAQgFAAgEgBg");
	mask.setTransform(93.6013,76.34);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AigL6QgFAAgBgEQgJgUgDgaIgBAAIgBgOIAAgBIAAgMIgBgBIgBgNIAAgCIAAgCIgBAAIgBgNIAAAAIgBgOIAAgCIgBAAIgBgOIAAgBQgDgDABgIIgBAAIgBgNIAAgBIgBgNIgBAAIgBgMIgBAAIgBgOIAAgCIAAgBIgBAAIAAgOIAAgCIAAgCIgBAAIgBgNIgBgCQgCgDABgHIgBAAQAAgKgCgIQgOhBgYg4QgphcgmhfQgrhwgViEIgBAAIgBgQIACAAIAAgCIgKhiIgBAAIgBgNIAAgCIAAgDIgBgBIgBgNIAAgCIAAgDIAAAAIgBgOIAAgCIAAgKIgBAAIgBgOIAAgCIAAgMIAAgBIAAgGIgBAAIgBgNIAAgCIAAgMIAAgCIAAgKIgBAAIAAgOIAAgCIAAgMIAAgBIAAgOIAAgCIAAgnIABAAIAAgCQABgOgBgHQgKAIgLAHQhOAvhgAeQhzAlhsAuQgiAPgVAbQgSAXggABIAAABQgKAHACgPIACAAIAAgCIAAgGQAmh0A+hcQA+hcBQhKQBQhJBpgzQBPgnBfgZQANgEAPgCIAAgCIAMAAIACAAIAAgBIANAAIABABIABAAIAmAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAAAIACAAIANABIAAABIAOABIAAABIAFAAIACAAIATADIAAAAIADAAIACAAQAHACAKABIAAABIAEAAIABAAQAHACAJAAIAAABQAHAAAFACIACAAQAFACAIABIAAAAQA3AMAsATIACAAQATAUAcAMQAZAMAYAPQBgA6BYBCQBHA1A/A8IAIAHIABACIAIAHIAAABICcCYQAUATASAVQBFBPAvBkQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAQgNAFgFgNIgBAAQAHAhgIAdIAAAEQgLABgBACIABAAQAvARA1AKIACABIANABIABAAIAMAAIABAAIAAgBIAMAAIACAAQAIAAAGgCIACAAIADAAIACAAIAAgCIAPABIAAABQABgBABAAQABAAAAAAQAAABAAAAQAAAAAAABQgHAWgngBIAAABQgLACgIgDQgkgBgbgKQhqglh4gWQiDgXh7ghQh3ghhig4QAEAmABAnIAAACIAAAFIAAACQADADgBAJIAAABIAAAVIAAACIAAALIAAABIAAACQABAIgDAEIAAALIAAABIAAAMIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAADIAAACIAAACQABAIgDAEIAAABIABACQABAIgDAEIAAACQAAARgEAOIAAACIAAABIAAACQACAIgDAEIAAACIAAABIAAACQABAIgDAEQgLB4geBhQglB2g3BkIgbAwQgdAyg4AVIAAABIgHAAQgFAAgEgBg");
	this.shape.setTransform(93.6013,76.34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.2,152.7);


(lib.leaf_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqGpIgCAAIgmAAIgCAAQgIABgEgDQiTgHiAgbQh+gbiQgKIgCAAIgMAAIgBAAIgeAAIgBAAIgMAAIgCAAIgOAAIAAABIgOABIgBAAIAAABIgOABIAAABQgwAHgtALIAAABIgPABIgCAAQgOAAgIgGIgBABQgEAFgEgEIgBAAIgBgHQACgPAHgLIAAgBIBMhPQBJhQBVhGQBVhFBbg+QBag/Bgg6QBgg6BngzQBngzBtgsQBugsCCgXQATgDATgBIAAgCQAKABAHgCIACAAIAYgCIACAAIAAgCIAMAAIACAAIAMAAIABAAIAHAAIACAAIAAgCIARAAIACAAIAOABIAAABIAKAAIACAAIANAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIAKAAIACAAIANAAIABABIABAAIAOABIAAABIACAAIANABIAAABIACAAIACAAIAOABIAAABIABAAQAJgBAHACIACAAIASADIAAABIACAAIARACIAAABIAHAAIACAAIAPADIAAABIACAAIACAAIAPACIAAABQAOABALAEIABAAQAFACAHABIAAABQAHAAAHACIAAABIAMADIAAAAIAMADIAAABIAMACIAAABQAFgBABADIABAAIAMADIAAAAIAaAIIAAABIAMADIAAABQAZAGAVAJIACAAQAFADAHABIAAABQBEAaA+AgIABABIAKAEIAAABQASAKAOANIABABIABAAQAIAOgQgHIgCgBIhdgqQAwA2ACBjIAAACIAAABQABAIgDAEIAAAKQgLA+gcAtQg7BehWBEQhXBDhoAyQhnAyh4AkQh2AjiMAOIAAABIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgFAAIAAABIgOABIgBAAIgFAAIgBABIgNABIgCAAIgJAAIAAAAIgNABIgCAAIgJAAIAAABIgOABIgCAAIgPAAIAAABIgOABIgCAAIgMAAIgBAAIgSAAIAAABIgNAAIgCAAIgMAAIgCAAIgOAAIgBAAIgQAAIgCAAIgMAAIgBABIgEAAQgFAAgDgCg");
	mask.setTransform(101.5583,42.6875);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AiqGpIgCAAIgmAAIgCAAQgIABgEgDQiTgHiAgbQh+gbiQgKIgCAAIgMAAIgBAAIgeAAIgBAAIgMAAIgCAAIgOAAIAAABIgOABIgBAAIAAABIgOABIAAABQgwAHgtALIAAABIgPABIgCAAQgOAAgIgGIgBABQgEAFgEgEIgBAAIgBgHQACgPAHgLIAAgBIBMhPQBJhQBVhGQBVhFBbg+QBag/Bgg6QBgg6BngzQBngzBtgsQBugsCCgXQATgDATgBIAAgCQAKABAHgCIACAAIAYgCIACAAIAAgCIAMAAIACAAIAMAAIABAAIAHAAIACAAIAAgCIARAAIACAAIAOABIAAABIAKAAIACAAIANAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIAKAAIACAAIANAAIABABIABAAIAOABIAAABIACAAIANABIAAABIACAAIACAAIAOABIAAABIABAAQAJgBAHACIACAAIASADIAAABIACAAIARACIAAABIAHAAIACAAIAPADIAAABIACAAIACAAIAPACIAAABQAOABALAEIABAAQAFACAHABIAAABQAHAAAHACIAAABIAMADIAAAAIAMADIAAABIAMACIAAABQAFgBABADIABAAIAMADIAAAAIAaAIIAAABIAMADIAAABQAZAGAVAJIACAAQAFADAHABIAAABQBEAaA+AgIABABIAKAEIAAABQASAKAOANIABABIABAAQAIAOgQgHIgCgBIhdgqQAwA2ACBjIAAACIAAABQABAIgDAEIAAAKQgLA+gcAtQg7BehWBEQhXBDhoAyQhnAyh4AkQh2AjiMAOIAAABIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgFAAIAAABIgOABIgBAAIgFAAIgBABIgNABIgCAAIgJAAIAAAAIgNABIgCAAIgJAAIAAABIgOABIgCAAIgPAAIAAABIgOABIgCAAIgMAAIgBAAIgSAAIAAABIgNAAIgCAAIgMAAIgCAAIgOAAIgBAAIgQAAIgCAAIgMAAIgBABIgEAAQgFAAgDgCg");
	this.shape.setTransform(101.5583,42.6875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,85.4);


(lib.leaf_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AktFiIAAk0IAAkyIAAk0QBrAvBOBMQBEBCA8BJQAbAfAXAjIA/BbQBABaAwBoQAwBrAPCLQACAPgCAVQADANgBASIAAABIAAACQABAKgDAGIAAABQgBAagUAFQgLgCgGgKIgUggQg+hbhbg/QgtgggqgkQhQhIg2hjIAAAHIAAABQABAUAAAWIAAACQADAEgBAIIAAACIAAAhIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAAMIAAABIAAACQACAIgDAEIAAAFIAAACIAAACQABAIgDAEQgNB4gnBgQgsBshHBTIAAjXg");
	mask.setTransform(30.1975,56.925);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AktFiIAAk0IAAkyIAAk0QBrAvBOBMQBEBCA8BJQAbAfAXAjIA/BbQBABaAwBoQAwBrAPCLQACAPgCAVQADANgBASIAAABIAAACQABAKgDAGIAAABQgBAagUAFQgLgCgGgKIgUggQg+hbhbg/QgtgggqgkQhQhIg2hjIAAAHIAAABQABAUAAAWIAAACQADAEgBAIIAAACIAAAhIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAAMIAAABIAAACQACAIgDAEIAAAFIAAACIAAACQABAIgDAEQgNB4gnBgQgsBshHBTIAAjXg");
	this.shape.setTransform(30.1975,56.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,113.9);


(lib.leaf_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFSKIIgBAAIgBgDQACgDAAgEIAAAAIgCAAQgIgCADgMQAKgqgBg2IAAgCIgCAAIAAgOIAAgBIAAgOIAAgCIAAgIIgBgBIgBgNIgGg8QgNiPgSiFQgTiIgshuQhgA5htAsQhrAsh/AdQh8AdiIASIAAABIgNAAIgCAAIgHAAIAAABQgMACgHgDIgBAAQgVAAgFgNIgBAAIgBgOIACAAIAAgCIAAgCIBNhNQAtgqAag8QAvhrA8heQA8hdBRhKQAoglAvgeQBRg0BogfIAVgHQA5gVBJgEIAAgCIAWAAIACAAIAAgCIAcABIAAABIACAAIABAAIAMAAIABAAIAOABIAAABIAGAAIACAAIANAAIAAABIAOABIAAABIADAAIACAAIAPADIAAAAQA7ALAxAWIABAAIAABYIAAACIAAAUIAAACIAAAJIAAABIAAAqIAAABIAAE0IAAEzIAAE0IAAAWIAAAdIAAACQhEBHhhArQgJAFgIAAQgHAAgHgEgACrpgIABAHIABAAIAAgBQAJgGgFAAIgGAAg");
	mask.setTransform(53.4,65.1509);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("AFSKIIgBAAIgBgDQACgDAAgEIAAAAIgCAAQgIgCADgMQAKgqgBg2IAAgCIgCAAIAAgOIAAgBIAAgOIAAgCIAAgIIgBgBIgBgNIgGg8QgNiPgSiFQgTiIgshuQhgA5htAsQhrAsh/AdQh8AdiIASIAAABIgNAAIgCAAIgHAAIAAABQgMACgHgDIgBAAQgVAAgFgNIgBAAIgBgOIACAAIAAgCIAAgCIBNhNQAtgqAag8QAvhrA8heQA8hdBRhKQAoglAvgeQBRg0BogfIAVgHQA5gVBJgEIAAgCIAWAAIACAAIAAgCIAcABIAAABIACAAIABAAIAMAAIABAAIAOABIAAABIAGAAIACAAIANAAIAAABIAOABIAAABIADAAIACAAIAPADIAAAAQA7ALAxAWIABAAIAABYIAAACIAAAUIAAACIAAAJIAAABIAAAqIAAABIAAE0IAAEzIAAE0IAAAWIAAAdIAAACQhEBHhhArQgJAFgIAAQgHAAgHgEgACrpgIABAHIABAAIAAgBQAJgGgFAAIgGAAg");
	this.shape.setTransform(53.4,65.1509);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.8,130.3);


(lib.leaf_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2kLSIgBgCQgDgIACgMQAjh2A+hcIA/hcQBAhaBMhOQBNhOBUhFQBVhFBZg/QBahBBcg9QBdg+Bgg5QBhg6Bkg0QBmg1BsgwQBogvBzgoQBxgnB8gfQB7gfCGgUQAngGAqgEIB/ADIAGAGQA+AJBCAQIB3AdIBAAKIARAIQAlAEAjALQASgDAPAJQAtAEAmANIAmAIIgvgHIkOglIkNgmQAiByAECRIAAACQADAEgBAIIAAACIAAAaIAAABQADAEgBAIIAAACIAAAaIAAABQADAEgCAJIAAABIAAAMIAAACIAAAyIAAACQADADgBAJIAAABIAAAMIAAACIAAAvIAAABIAAAFIAAACIAAAfIAAACIAAAYIAAACIAAADIAAACIAAAOIAAABIAABCIAAABIAAAMIAAACIAAAMIAAABIAAAMIAAACIAAABQABAIgDAEIAAAaIAAACIAAACQACAIgDAEIAAAIIAAACIAAACQABAIgDAEIAAAKIAAACIAAABQABAJgDADIAAACQAAAqgPAbQBeg1BdhAQANgIAQgGIAAgBIADgCIACAAIAAgCIACAAIACAAIAAgCIAFgDIABAAIAAgCQALgGgHAJIgBABIgBABQgEABgCADIgBABIgFAEIgCAAIgBACQgUAWgZARQhZBBhhA5QhgA5hoAzQhnAzhuAsQhtAthyAnQh0Anh4AhQh3AiiAAbQh/AbiOALIAAABIgOABIgCAAIgFAAIAAAAIgOABIgBAAIgHAAIAAABIgOABIgCAAIgKAAIAAABIgNABIgCAAIgNAAIAAABIgNAAIgCAAIgOAAIAAABIgOABIgBAAIgSAAIAAABIgNABIgCAAIgMAAIAAABIgNABIgCAAIgRAAIAAAAIgPABIgBAAIgMAAIgCAAIgPAAIAAABIgOABIgCAAIgMAAIgCAAIgMAAIgBAAIgTAAIgCAAIgMAAIgCAAIgNAAIAAABIgRABIgDAAIgMAAIgBAAIgMAAIgCAAIgRAAIgCAAIgMAAIgBAAIgNAAIgBAAIgMAAIgCAAIgOAAIAAABIgNAAIgCAAIgNAAIgBAAIgkAAIgCABQgIABgEgDIgCAAIgCAAIgBAAIgOAAIgCAAIgBAAIgCAAIgQAAIgBAAIgMAAIgCAAIg3AAIgCAAIgLAAIgDAAIgMAAIgBAAQgIABgEgDIgCAAIgzAAIAAABIgPABQgqADgkANQgYAIgaAAQgOAAgNgCg");
	mask.setTransform(144.8,72.4333);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.1,scaleX:32.3955,scaleY:32.3955,x:51.25},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("A2kLSIgBgCQgDgIACgMQAjh2A+hcIA/hcQBAhaBMhOQBNhOBUhFQBVhFBZg/QBahBBcg9QBdg+Bgg5QBhg6Bkg0QBmg1BsgwQBogvBzgoQBxgnB8gfQB7gfCGgUQAngGAqgEIB/ADIAGAGQA+AJBCAQIB3AdIBAAKIARAIQAlAEAjALQASgDAPAJQAtAEAmANIAmAIIgvgHIkOglIkNgmQAiByAECRIAAACQADAEgBAIIAAACIAAAaIAAABQADAEgBAIIAAACIAAAaIAAABQADAEgCAJIAAABIAAAMIAAACIAAAyIAAACQADADgBAJIAAABIAAAMIAAACIAAAvIAAABIAAAFIAAACIAAAfIAAACIAAAYIAAACIAAADIAAACIAAAOIAAABIAABCIAAABIAAAMIAAACIAAAMIAAABIAAAMIAAACIAAABQABAIgDAEIAAAaIAAACIAAACQACAIgDAEIAAAIIAAACIAAACQABAIgDAEIAAAKIAAACIAAABQABAJgDADIAAACQAAAqgPAbQBeg1BdhAQANgIAQgGIAAgBIADgCIACAAIAAgCIACAAIACAAIAAgCIAFgDIABAAIAAgCQALgGgHAJIgBABIgBABQgEABgCADIgBABIgFAEIgCAAIgBACQgUAWgZARQhZBBhhA5QhgA5hoAzQhnAzhuAsQhtAthyAnQh0Anh4AhQh3AiiAAbQh/AbiOALIAAABIgOABIgCAAIgFAAIAAAAIgOABIgBAAIgHAAIAAABIgOABIgCAAIgKAAIAAABIgNABIgCAAIgNAAIAAABIgNAAIgCAAIgOAAIAAABIgOABIgBAAIgSAAIAAABIgNABIgCAAIgMAAIAAABIgNABIgCAAIgRAAIAAAAIgPABIgBAAIgMAAIgCAAIgPAAIAAABIgOABIgCAAIgMAAIgCAAIgMAAIgBAAIgTAAIgCAAIgMAAIgCAAIgNAAIAAABIgRABIgDAAIgMAAIgBAAIgMAAIgCAAIgRAAIgCAAIgMAAIgBAAIgNAAIgBAAIgMAAIgCAAIgOAAIAAABIgNAAIgCAAIgNAAIgBAAIgkAAIgCABQgIABgEgDIgCAAIgCAAIgBAAIgOAAIgCAAIgBAAIgCAAIgQAAIgBAAIgMAAIgCAAIg3AAIgCAAIgLAAIgDAAIgMAAIgBAAQgIABgEgDIgCAAIgzAAIAAABIgPABQgqADgkANQgYAIgaAAQgOAAgNgCg");
	this.shape.setTransform(144.8,72.4333);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.6,144.9);


(lib.leaf_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACjDWIgCAAIgBAAIgUAAQg7gDg3gFQh1gKhxgPIgmgHQgmgOgtgEQgPgJgSAEQgjgMglgEIgRgIIhAgKIh3gdQhCgQg+gJIgGgFIiAgEQBeg8Blg1QBkg1B0gnQBzgmCJgSQATgCAUAAIAAgCIAMAAIACAAIAWAAIACAAIAAgCIAdAAIACAAIAMAAIABAAIAPABIAAABIARAAIACAAIALAAIACAAIAOABIAAABIABAAIAPAAIABAAIAOAAIAAABIAEAAIABAAIAMABIABAAIAPABIAAABIAHAAIACAAIASADIABABIAFAAIACAAIAPACIAAABQAvAHApAKIACAAQAEACAIABIAAABQALAAAIAFIABAAIAMACIABABIAEACIAAABIAMACIAAAAQBzAoBkA1QBlA2BmAyQAaANAcALQBYAjBnAWQAJAEACAKIAAACQgSAUgjAFIi1AfQgfAFgiADIAAABIgNAAIgCAAIgCAAIAAABIgNABIgDAAIgDAAIAAAAIgNABIgCAAIgHAAIAAABIgOACIgBAAIgMAAIAAAAIgPABIgBAAIgUAAIgBABIgNABIgCAAIgQAAIgBAAIgQAAIAAAAIgNABIgDAAIgMAAIgBAAIgMAAIgCAAIgVAAIgBAAIgCAAIgQAAIgBAAIgVAAIgCAAIgMAAIgBAAIgTAAIgCAAQgIABgEgCIgCAAQgfAFgiACIAAABIgPABIgCAAIgHAAIAAAAIgOABIgCAAg");
	mask.setTransform(89.25,21.4);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:20.7,scaleY:20.7},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("ACjDWIgCAAIgBAAIgUAAQg7gDg3gFQh1gKhxgPIgmgHQgmgOgtgEQgPgJgSAEQgjgMglgEIgRgIIhAgKIh3gdQhCgQg+gJIgGgFIiAgEQBeg8Blg1QBkg1B0gnQBzgmCJgSQATgCAUAAIAAgCIAMAAIACAAIAWAAIACAAIAAgCIAdAAIACAAIAMAAIABAAIAPABIAAABIARAAIACAAIALAAIACAAIAOABIAAABIABAAIAPAAIABAAIAOAAIAAABIAEAAIABAAIAMABIABAAIAPABIAAABIAHAAIACAAIASADIABABIAFAAIACAAIAPACIAAABQAvAHApAKIACAAQAEACAIABIAAABQALAAAIAFIABAAIAMACIABABIAEACIAAABIAMACIAAAAQBzAoBkA1QBlA2BmAyQAaANAcALQBYAjBnAWQAJAEACAKIAAACQgSAUgjAFIi1AfQgfAFgiADIAAABIgNAAIgCAAIgCAAIAAABIgNABIgDAAIgDAAIAAAAIgNABIgCAAIgHAAIAAABIgOACIgBAAIgMAAIAAAAIgPABIgBAAIgUAAIgBABIgNABIgCAAIgQAAIgBAAIgQAAIAAAAIgNABIgDAAIgMAAIgBAAIgMAAIgCAAIgVAAIgBAAIgCAAIgQAAIgBAAIgVAAIgCAAIgMAAIgBAAIgTAAIgCAAQgIABgEgCIgCAAQgfAFgiACIAAABIgPABIgCAAIgHAAIAAAAIgOABIgCAAg");
	this.shape.setTransform(89.25,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.5,42.8);


(lib.leaf_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ak4FZQgjAAgcgGQgfgFgGgdIAEgKIAAgCQBahAA1hlQA0hlAmh1QAkh0BShIQAZgWAcgSQAbgRAngHIAAgCIAMAAIACAAIAZAAIACAAIAMAAIACAAIACAAIAAgCIANABIAAABIAGAAIABAAIARADIAAABQCDAXBLBOQAnApAKBFQADAKgBAOIAAACIAAACQABAIgDAEQgFAvgTAgQggAzguAnQgqAjgvAfQhcA9hhA5QhgA5iGAUIAAABIgNABIgCAAIgCAAIAAABIgNABIgCAAIgOAAIAAABIgOABIgBAAIgOAAIgCAAIgKAAQgOAAgMgCg");
	var mask_graphics_49 = new cjs.Graphics().p("Ak4FZQgjAAgcgGQgfgFgGgdIAEgKIAAgCQBahAA1hlQA0hlAmh1QAkh0BShIQAZgWAcgSQAbgRAngHIAAgCIAMAAIACAAIAZAAIACAAIAMAAIACAAIACAAIAAgCIANABIAAABIAGAAIABAAIARADIAAABQCDAXBLBOQAnApAKBFQADAKgBAOIAAACIAAACQABAIgDAEQgFAvgTAgQggAzguAnQgqAjgvAfQhcA9hhA5QhgA5iGAUIAAABIgNABIgCAAIgCAAIAAABIgNABIgCAAIgOAAIAAABIgOABIgBAAIgOAAIgCAAIgKAAQgOAAgMgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41.2875,y:34.6875}).wait(49).to({graphics:mask_graphics_49,x:41.2875,y:34.6875}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:20.7,scaleY:20.7},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,120,77,0.996)").s().p("Ak4FZQgjAAgcgGQgfgFgGgdIAEgKIAAgCQBahAA1hlQA0hlAmh1QAkh0BShIQAZgWAcgSQAbgRAngHIAAgCIAMAAIACAAIAZAAIACAAIAMAAIACAAIACAAIAAgCIANABIAAABIAGAAIABAAIARADIAAABQCDAXBLBOQAnApAKBFQADAKgBAOIAAACIAAACQABAIgDAEQgFAvgTAgQggAzguAnQgqAjgvAfQhcA9hhA5QhgA5iGAUIAAABIgNABIgCAAIgCAAIAAABIgNABIgCAAIgOAAIAAABIgOABIgBAAIgOAAIgCAAIgKAAQgOAAgMgCg");
	this.shape.setTransform(41.2875,34.6875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.6,69.4);


(lib.leaf_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgPGwIAAgCQgDgLABgPQAMgcgDgkIAAgBIAAgCIAAgMIACAAQAGgSABgXQAMiNAnhxQAohyA8heQgpAbgyATQhuAriAAaIAAABQgKACgFgDIgCAAQgGABABgIQAUg5AigrQAhgrAngmIAagaQAbgZAcgWQBWhEBogyIADgBIAAE0IAAEzIAADOQg/ArhWAUQgPADgNAAQgYAAgPgMg");
	var mask_graphics_49 = new cjs.Graphics().p("AgPGwIAAgCQgDgLABgPQAMgcgDgkIAAgBIAAgCIAAgMIACAAQAGgSABgXQAMiNAnhxQAohyA8heQgpAbgyATQhuAriAAaIAAABQgKACgFgDIgCAAQgGABABgIQAUg5AigrQAhgrAngmIAagaQAbgZAcgWQBWhEBogyIADgBIAAE0IAAEzIAADOQg/ArhWAUQgPADgNAAQgYAAgPgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:20.0433,y:44.3974}).wait(49).to({graphics:mask_graphics_49,x:20.0433,y:44.3974}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(48,-27.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:20.7,scaleY:20.7},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AgPGwIAAgCQgDgLABgPQAMgcgDgkIAAgBIAAgCIAAgMIACAAQAGgSABgXQAMiNAnhxQAohyA8heQgpAbgyATQhuAriAAaIAAABQgKACgFgDIgCAAQgGABABgIQAUg5AigrQAhgrAngmIAagaQAbgZAcgWQBWhEBogyIADgBIAAE0IAAEzIAADOQg/ArhWAUQgPADgNAAQgYAAgPgMg");
	this.shape.setTransform(20.0433,44.3974);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,88.8);


(lib.leaf_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlEVIAAkzIAAk0IAAgCIAAgZQBogzB/gbQAwgKA7gCIAAgCIAMAAIACAAIANABIAAABIAJAAIACAAIANABIAAABIAEAAIACAAIARADIAAABIADAAIACAAIAOACIAAABQAGAAACAEIAAABIAAACQAFACgCAIIgBAAIAAACIABABIABADQARARgDAnIAAACQADAIgCAMIAAACIAAAtIAAACIAAANIAAACIAAACQACAIgDAEIAAABIAAANIAAABIAAACQABAIgDAEIAAABIAAADIAAABQABAIgDAEQgFAwgKAqQgKAqgMAnQgkB3g9BcQg+BdhRBHQhTBIhdA9IAAi1g");
	mask.setTransform(22.975,45.75);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(10,-22.95);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:28.4,scaleY:28.4},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AjlEVIAAkzIAAk0IAAgCIAAgZQBogzB/gbQAwgKA7gCIAAgCIAMAAIACAAIANABIAAABIAJAAIACAAIANABIAAABIAEAAIACAAIARADIAAABIADAAIACAAIAOACIAAABQAGAAACAEIAAABIAAACQAFACgCAIIgBAAIAAACIABABIABADQARARgDAnIAAACQADAIgCAMIAAACIAAAtIAAACIAAANIAAACIAAACQACAIgDAEIAAABIAAANIAAABIAAACQABAIgDAEIAAABIAAADIAAABQABAIgDAEQgFAwgKAqQgKAqgMAnQgkB3g9BcQg+BdhRBHQhTBIhdA9IAAi1g");
	this.shape.setTransform(22.975,45.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,91.5);


(lib.leaf_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH5D3IgBAAIgGgCIgBgBQgEgCAAgGIgCAAQgIACAAgFIgCAAQgdgLgrACIgCAAQgIACgEgDIgCAAIgSAAIgCAAIgMAAIgCAAIgPAAIgCAAIgMAAIgCAAIgTAAIgCAAIgRAAIgBAAIgvAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgwAAIgCAAQgIABgEgDQhngEhcgQQiAgXhvgsQgogQgrgPQhXgdg3g7IgBgBIgFgKIgBAAIgEgJIgBAAIgCgKIAAgCIAAgTIACAAIAAgCIAAgBQAzhkCCgXQAGgBAFgDQBNg0BvgRIAAgCQALABAIgDIABAAIAEAAIABAAQAGgBAGAAIACgBIAHAAIACAAIAAgBIARAAIACAAIAAgCIANABIAAABIAHAAIACAAIAOABIAAAAIADAAIACAAIAOABIAAABIABAAIACAAIAOADIAAABIAGAAIAAABIAMADIAAABIAMACIAAABQByAoBkA2QBkA2BQBKQBQBJATCGIAAAQIABABQABAJgDAFIAAACQgBAGgEACIgBACQgCAEgGAAIgCAAg");
	mask.setTransform(52.3125,24.6775);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(23.2,-7.25);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:11.03,scaleY:11.03},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AH5D3IgBAAIgGgCIgBgBQgEgCAAgGIgCAAQgIACAAgFIgCAAQgdgLgrACIgCAAQgIACgEgDIgCAAIgSAAIgCAAIgMAAIgCAAIgPAAIgCAAIgMAAIgCAAIgTAAIgCAAIgRAAIgBAAIgvAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgwAAIgCAAQgIABgEgDQhngEhcgQQiAgXhvgsQgogQgrgPQhXgdg3g7IgBgBIgFgKIgBAAIgEgJIgBAAIgCgKIAAgCIAAgTIACAAIAAgCIAAgBQAzhkCCgXQAGgBAFgDQBNg0BvgRIAAgCQALABAIgDIABAAIAEAAIABAAQAGgBAGAAIACgBIAHAAIACAAIAAgBIARAAIACAAIAAgCIANABIAAABIAHAAIACAAIAOABIAAAAIADAAIACAAIAOABIAAABIABAAIACAAIAOADIAAABIAGAAIAAABIAMADIAAABIAMACIAAABQByAoBkA2QBkA2BQBKQBQBJATCGIAAAQIABABQABAJgDAFIAAACQgBAGgEACIgBACQgCAEgGAAIgCAAg");
	this.shape.setTransform(52.3125,24.6775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,49.4);


(lib.leaf_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjcFjQgjgBgegEIg8gMQhRgSgugyIAAgBIAAgOQAVgkArgQQANgFANgIQBeg8BPhLQBPhJBGhUQBFhUBUhGQBGg6BigeQAHgDAIgBQAFgCAIABIABAAQALABAFgEIABAAIAAgCIACAAIACAAIAAgCIAOABIAAABIABAAIAOABIAAABQASAEAQgBIACAAQBYAoAHB5IAAACIACADIgGAMQABAGgBAEQgCAHgDAAQgCAXgGAOQgBAEgDgBIAAAIIgEAHIgFAEIAAAGIgIALIAAAGQgIAKgFAJQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAOgLAKIgCACQgSAggYAaQABAFgDACIgFACIgCAGIgIAGIgCAHIgNAMIgCAJQgTARgPAVIgIAEIgDAHIgGACIgCAGIgGACIgRARIgBAEQgCAGgEgBIgEAIQgUAUgMAUIgCACQgGgCgBADIABAHIgEADIAAACQgBADgEABIgFAKIAAgBQgkAVglAUQhmA0iJAPIAAABIgOABIgCAAIgDAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgFAAQgFAAgDgCg");
	mask.setTransform(47.325,35.7);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(92.95,-8.55);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regY:-0.6,scaleX:12.465,scaleY:12.465,y:-16.05},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AjcFjQgjgBgegEIg8gMQhRgSgugyIAAgBIAAgOQAVgkArgQQANgFANgIQBeg8BPhLQBPhJBGhUQBFhUBUhGQBGg6BigeQAHgDAIgBQAFgCAIABIABAAQALABAFgEIABAAIAAgCIACAAIACAAIAAgCIAOABIAAABIABAAIAOABIAAABQASAEAQgBIACAAQBYAoAHB5IAAACIACADIgGAMQABAGgBAEQgCAHgDAAQgCAXgGAOQgBAEgDgBIAAAIIgEAHIgFAEIAAAGIgIALIAAAGQgIAKgFAJQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAOgLAKIgCACQgSAggYAaQABAFgDACIgFACIgCAGIgIAGIgCAHIgNAMIgCAJQgTARgPAVIgIAEIgDAHIgGACIgCAGIgGACIgRARIgBAEQgCAGgEgBIgEAIQgUAUgMAUIgCACQgGgCgBADIABAHIgEADIAAACQgBADgEABIgFAKIAAgBQgkAVglAUQhmA0iJAPIAAABIgOABIgCAAIgDAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgFAAQgFAAgDgCg");
	this.shape.setTransform(47.325,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.7,71.4);


(lib.leaf_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKbISQgbgdgXgiQg9hbhNhOIgBAAIgHgIQg2gxg+goQgvgfg2gWQhtguiUgFIgCAAIgKgCIgCAAIgfgCIgCAAIgKgBIgCAAIgBAAIgCAAQgGAAgEgCIgCAAIgFAAIgCAAQgGABgDgDIgBAAQgIgCgJABIgCAAIgQgEIgBAAQg6gIg2gLIgCAAQgHAAgFgDQgfgGgcgIQhXgXhHgmQhig4hChYQgggsgNhBIgBAAIgDgYIAAgBIAAgTIACAAIAAgCIAAgKQALgcAKgeQAchYA9g5IAMgFIAAAAIAOAAIABAAQAHgBADADIABABQABADAGgBIABAAIAAgCIASAAIABAAIAAgCIAaAAIACAAIAMAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAKAAIACAAIAOABIAAAAIARABIAAABIACAAIAOABIAAABQCIARBxAoQByApBnAxQBpAyBUBGQBVBFA+BbQA3BQAvBXQA0BlAsBtQAoBiAOB6QADAFgCAIIgBABIAAABQgBAMgLACIgCAAQgDAAgBgCg");
	mask.setTransform(68.69,53.2008);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(8.6,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.1,scaleX:21.685,scaleY:21.685,x:32.45},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AKbISQgbgdgXgiQg9hbhNhOIgBAAIgHgIQg2gxg+goQgvgfg2gWQhtguiUgFIgCAAIgKgCIgCAAIgfgCIgCAAIgKgBIgCAAIgBAAIgCAAQgGAAgEgCIgCAAIgFAAIgCAAQgGABgDgDIgBAAQgIgCgJABIgCAAIgQgEIgBAAQg6gIg2gLIgCAAQgHAAgFgDQgfgGgcgIQhXgXhHgmQhig4hChYQgggsgNhBIgBAAIgDgYIAAgBIAAgTIACAAIAAgCIAAgKQALgcAKgeQAchYA9g5IAMgFIAAAAIAOAAIABAAQAHgBADADIABABQABADAGgBIABAAIAAgCIASAAIABAAIAAgCIAaAAIACAAIAMAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAKAAIACAAIAOABIAAAAIARABIAAABIACAAIAOABIAAABQCIARBxAoQByApBnAxQBpAyBUBGQBVBFA+BbQA3BQAvBXQA0BlAsBtQAoBiAOB6QADAFgCAIIgBABIAAABQgBAMgLACIgCAAQgDAAgBgCg");
	this.shape.setTransform(68.69,53.2008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.4,106.4);


(lib.leaf_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnvFdIgBAAIgCAAIgaAAIgBAAIgNAAIgBAAQgIABgEgDIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIgCAAQgIACgEgDIgBAAIgTAAIgCAAQgMABgJgDIgBAAIgLAAIgBAAIgMAAIgCAAIgdAAIgCAAQgIABgEgDIgCAAIgDAAIgCAAIgfAAIgCAAQgIABgEgDIgBAAIgHAAIgCAAIgiAAIgCAAQgIABgEgDIgCAAIgmAAIgBAAQgJABgDgCIgCAAIgHAAIgCAAIgaAAIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAQgIABgEgDIgBAAIgeAAIgBAAQgIABgEgCIgCgBQgYgCgaAAIgCAAQgIACgEgDIgBAAIg7gCIgCAAQgIACgEgDIgBAAIgaAAIgCAAIgPAAIgCAAIghADIAAAAIgRAEIgCAAIgHAAIAAAAIgNABIgCAAIgFAAIAAABIgOABIgCAAQgLABgIgDIgBAAQgwgCgegVIgBAAQgFgEgBgHIACAAIAAgCIAAgCQAWgbAqgHIACAAIAAgCIAMgCIABAAQB2giBzgoIABAAIAAgBQAFAAACgBIACgBIDWheQBrguBqgwQBmgvBwgmIAHgDIACAAIDhhUQAegLAggKIAAgCQAFABACgCIACAAQAngPApgMIACgBIAAgBQAFAAACgCIACAAQBsgpB4gdIABAAIAAgDQAGAAAFgBIABAAQAogJArgGIABAAIAAgDIAMgBIACAAIACAAIACAAIAAgCQAJABAGgCIACAAIACAAIABAAIAAgCQAKABAGgDIABAAIAEAAIACAAIAAgCQAJABAGgCIACAAQAJgCAKAAIABAAIAAgCQAMABAHgDIACAAIAEAAIABAAIAAgCIAOAAIACAAIAFAAIACAAIAAgBIARAAIACAAIAAgBIAMAAIABAAIAOAAIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIATAAIACAAIAOABIAAABIAFAAIACAAIAMAAIABAAIAOABIAAABIAFAAIACAAIAOAAIAAABIAOABIAAAAIANABIAAABIAOACIAAAAIACAAIACAAQAJAAAIACIACAAIARACIAAABIAFAAIACAAIAPADIAAABIACAAIABAAIAQADIAAAAIADAAIACAAIAOADIAAAAIAZAGIABABIAMADIAAABQBiAmBbAuIACAAQAEADAHABIABABQBzAnBiA4QA3AfAyAiIATAOIABABIASANIASAOIAIAGIAPAMIACABQASANASAIIABgCQAGABAEACQggAZgiASQgJgCgIAEQgJAEgKAHQhNAUhHATQgFAAgFACQiUAhiRAZQhrAahrAhIgRAAIgEABQgdALgaAOIgNAAIgNAKIgKAAQhCAQhCAbIhFAMIABAAIAAgBIgDAAIgGgBIAAABIgWADIAAABQgKAAgHACIgCAAIgJAAIAAABIgRABIAAAAIgOABIgBAAIgEAAIAAABIgOACIgBAAIgDAAIgGAAIAAAAIgOABIgBAAIgJAAIAAABIgOABIgBAAIgOAAIAAAAIgOABIgCAAIgMAAIAAABIgNABIgCAAIgMAAIgCAAIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgWAAIgCAAIAAABIgOABIgCAAIgLAAIgBAAIgMAAIgCAAIgOAAIgCAAIgMAAIgBAAIgQAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAIgfAAIAAAAIggABIgCAAIgOAAIgBAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIgVAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgOAAIgBAAIgMAAIgCAAIgOAAIgCAAIgYAAIAAAAIg1ABIgCAAIgUAAIgCAAIgaAAIgBAAIgFABQgFAAgDgCg");
	mask.setTransform(141.575,35.1);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(228.3,-6.1);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.4,scaleX:28.055,scaleY:28.055,x:267.6},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AnvFdIgBAAIgCAAIgaAAIgBAAIgNAAIgBAAQgIABgEgDIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIgCAAQgIACgEgDIgBAAIgTAAIgCAAQgMABgJgDIgBAAIgLAAIgBAAIgMAAIgCAAIgdAAIgCAAQgIABgEgDIgCAAIgDAAIgCAAIgfAAIgCAAQgIABgEgDIgBAAIgHAAIgCAAIgiAAIgCAAQgIABgEgDIgCAAIgmAAIgBAAQgJABgDgCIgCAAIgHAAIgCAAIgaAAIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAQgIABgEgDIgBAAIgeAAIgBAAQgIABgEgCIgCgBQgYgCgaAAIgCAAQgIACgEgDIgBAAIg7gCIgCAAQgIACgEgDIgBAAIgaAAIgCAAIgPAAIgCAAIghADIAAAAIgRAEIgCAAIgHAAIAAAAIgNABIgCAAIgFAAIAAABIgOABIgCAAQgLABgIgDIgBAAQgwgCgegVIgBAAQgFgEgBgHIACAAIAAgCIAAgCQAWgbAqgHIACAAIAAgCIAMgCIABAAQB2giBzgoIABAAIAAgBQAFAAACgBIACgBIDWheQBrguBqgwQBmgvBwgmIAHgDIACAAIDhhUQAegLAggKIAAgCQAFABACgCIACAAQAngPApgMIACgBIAAgBQAFAAACgCIACAAQBsgpB4gdIABAAIAAgDQAGAAAFgBIABAAQAogJArgGIABAAIAAgDIAMgBIACAAIACAAIACAAIAAgCQAJABAGgCIACAAIACAAIABAAIAAgCQAKABAGgDIABAAIAEAAIACAAIAAgCQAJABAGgCIACAAQAJgCAKAAIABAAIAAgCQAMABAHgDIACAAIAEAAIABAAIAAgCIAOAAIACAAIAFAAIACAAIAAgBIARAAIACAAIAAgBIAMAAIABAAIAOAAIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIATAAIACAAIAOABIAAABIAFAAIACAAIAMAAIABAAIAOABIAAABIAFAAIACAAIAOAAIAAABIAOABIAAAAIANABIAAABIAOACIAAAAIACAAIACAAQAJAAAIACIACAAIARACIAAABIAFAAIACAAIAPADIAAABIACAAIABAAIAQADIAAAAIADAAIACAAIAOADIAAAAIAZAGIABABIAMADIAAABQBiAmBbAuIACAAQAEADAHABIABABQBzAnBiA4QA3AfAyAiIATAOIABABIASANIASAOIAIAGIAPAMIACABQASANASAIIABgCQAGABAEACQggAZgiASQgJgCgIAEQgJAEgKAHQhNAUhHATQgFAAgFACQiUAhiRAZQhrAahrAhIgRAAIgEABQgdALgaAOIgNAAIgNAKIgKAAQhCAQhCAbIhFAMIABAAIAAgBIgDAAIgGgBIAAABIgWADIAAABQgKAAgHACIgCAAIgJAAIAAABIgRABIAAAAIgOABIgBAAIgEAAIAAABIgOACIgBAAIgDAAIgGAAIAAAAIgOABIgBAAIgJAAIAAABIgOABIgBAAIgOAAIAAAAIgOABIgCAAIgMAAIAAABIgNABIgCAAIgMAAIgCAAIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgWAAIgCAAIAAABIgOABIgCAAIgLAAIgBAAIgMAAIgCAAIgOAAIgCAAIgMAAIgBAAIgQAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAIgfAAIAAAAIggABIgCAAIgOAAIgBAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIgVAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgOAAIgBAAIgMAAIgCAAIgOAAIgCAAIgYAAIAAAAIg1ABIgCAAIgUAAIgCAAIgaAAIgBAAIgFABQgFAAgDgCg");
	this.shape.setTransform(141.575,35.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.2,70.2);


(lib.leaf_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKtF0QgSgEgJgOIgBgCQgCgEABgHQgtgpgmgwQg7hLh+gHIgCAAIgVAAIgBAAIgOAAIgCAAIgHAAIAAAAIgOABIgBAAIgQAAIAAABIgNABIgCAAIgTAAIAAABIgOABIgCAAIgMAAIgBAAIgOAAIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIhlAAIgCAAQgIACgEgDQhxgDhlgRQiDgWhrgvIhpgwQhrgwhChYIgBAAQgDgHABgKIgBgBQgJgMgBgUIgBAAIAAgNIABAAIAAgCQAOhmBMgoIA1gaQAtgVA6gJQACgCAFAAIACAAIABAAIAAgBQAMAAAHgCIACAAIAEAAIABAAIALgCIABAAIAHAAIACAAIAAgBIAYAAIACAAIAAgCIAMAAIABAAIAVAAIACAAIAaAAIABAAIAMAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIAJAAIACAAIANAAIAAABIACAAIAOABIAAABIAFAAIACAAIANABIABABIABAAIAOABIAAAAIACAAIABAAIAOABIAAABIACAAIACAAIATADIAAABIADAAIACAAIAPACIAAABQB+AcBnAxQBpAyBhA5QBiA4BTBHIAdAaIAIAHIAAACQAFAHAHAEIAAABIAIAIIABABQBJBRAnB0QARAzAIA+QADARgCAWIgBAAIAAACQgCAGgGACIgCAAg");
	mask.setTransform(69.715,37.225);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(2.95,-3.35);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1,scaleX:19.7,scaleY:19.7,x:22.65},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AKtF0QgSgEgJgOIgBgCQgCgEABgHQgtgpgmgwQg7hLh+gHIgCAAIgVAAIgBAAIgOAAIgCAAIgHAAIAAAAIgOABIgBAAIgQAAIAAABIgNABIgCAAIgTAAIAAABIgOABIgCAAIgMAAIgBAAIgOAAIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIhlAAIgCAAQgIACgEgDQhxgDhlgRQiDgWhrgvIhpgwQhrgwhChYIgBAAQgDgHABgKIgBgBQgJgMgBgUIgBAAIAAgNIABAAIAAgCQAOhmBMgoIA1gaQAtgVA6gJQACgCAFAAIACAAIABAAIAAgBQAMAAAHgCIACAAIAEAAIABAAIALgCIABAAIAHAAIACAAIAAgBIAYAAIACAAIAAgCIAMAAIABAAIAVAAIACAAIAaAAIABAAIAMAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIAJAAIACAAIANAAIAAABIACAAIAOABIAAABIAFAAIACAAIANABIABABIABAAIAOABIAAAAIACAAIABAAIAOABIAAABIACAAIACAAIATADIAAABIADAAIACAAIAPACIAAABQB+AcBnAxQBpAyBhA5QBiA4BTBHIAdAaIAIAHIAAACQAFAHAHAEIAAABIAIAIIABABQBJBRAnB0QARAzAIA+QADARgCAWIgBAAIAAACQgCAGgGACIgCAAg");
	this.shape.setTransform(69.715,37.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.5,74.5);


(lib.leaf_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtRFwQgogDgdgPIgCAAIgDgLQAuggA3gUQBUghBMgoQAYgOAYgPQBeg8BXhCQBZhBBag/QBahABkg1QBlg1BugsQBugrCAgaQCFgaCXAKQCOAJBWBEQAlAegPA/QgKAtgYAgQhCBahHBSQhGBThdA9QhdA9iCAWQhlARhzAAQiagCiSAIQiTAHiHAUQhkAOhiASQhCAMhIAAQglAAgogEg");
	mask.setTransform(92.3541,37.2002);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(165.25,-9.7);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regY:-1,scaleX:19.435,scaleY:19.435,y:-29.15},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AtRFwQgogDgdgPIgCAAIgDgLQAuggA3gUQBUghBMgoQAYgOAYgPQBeg8BXhCQBZhBBag/QBahABkg1QBlg1BugsQBugrCAgaQCFgaCXAKQCOAJBWBEQAlAegPA/QgKAtgYAgQhCBahHBSQhGBThdA9QhdA9iCAWQhlARhzAAQiagCiSAIQiTAHiHAUQhkAOhiASQhCAMhIAAQglAAgogEg");
	this.shape.setTransform(92.3541,37.2002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.7,74.4);


(lib.leaf_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlFDgIgCAAQhNADgvgdIgBAAQgGgDACgKIACAAIAAgCIAAgCQA8heBYhCQAsggAugfQBdg9Blg1QA7ggBJgRIAAgBQAGAAADgCIACAAIACAAIABAAIAAgCQAGAAAFgBIABgBQAMgDAOgCIACAAIAAgBQAKABAHgDIACAAIABAAIACAAIAAgCIAMAAIACAAIAHAAIABAAIAAgCIANAAIABAAIAAgBIATAAIACAAIAOAAIAAABIADAAIACAAIANABIABABIADAAIACAAIAPADIAAABIAEAAIABAAIAOACIAAABIAEAAIABAAIAMADIAAAAQAGgBACADIABAAIAMADIAAABIAFAAIAAABIAMADIAAABQA/AQAXA4IAAACIABAAQADAKgHACQgYAWgVAbQhCBVhnA0IAAABIgKAGIgBAAQgJAHgMADIgBABIgKAEQgBADgDACQhpAwh2AjIgBABQgFACgGABIgBABQhCAThKALIAAAAIgSADIgBAAIgJAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgBAAIgEAAIAAABIgOABIgBAAIgSAAIgBAAIAAABIgOABIgCAAIgKAAQgKAAgHgCg");
	mask.setTransform(45.7918,22.625);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(84.5,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:11.1,scaleY:11.1},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AlFDgIgCAAQhNADgvgdIgBAAQgGgDACgKIACAAIAAgCIAAgCQA8heBYhCQAsggAugfQBdg9Blg1QA7ggBJgRIAAgBQAGAAADgCIACAAIACAAIABAAIAAgCQAGAAAFgBIABgBQAMgDAOgCIACAAIAAgBQAKABAHgDIACAAIABAAIACAAIAAgCIAMAAIACAAIAHAAIABAAIAAgCIANAAIABAAIAAgBIATAAIACAAIAOAAIAAABIADAAIACAAIANABIABABIADAAIACAAIAPADIAAABIAEAAIABAAIAOACIAAABIAEAAIABAAIAMADIAAAAQAGgBACADIABAAIAMADIAAABIAFAAIAAABIAMADIAAABQA/AQAXA4IAAACIABAAQADAKgHACQgYAWgVAbQhCBVhnA0IAAABIgKAGIgBAAQgJAHgMADIgBABIgKAEQgBADgDACQhpAwh2AjIgBABQgFACgGABIgBABQhCAThKALIAAAAIgSADIgBAAIgJAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgBAAIgEAAIAAABIgOABIgBAAIgSAAIgBAAIAAABIgOABIgCAAIgKAAQgKAAgHgCg");
	this.shape.setTransform(45.7918,22.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.6,45.3);


(lib.leaf_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHjL7IAAAAIgBgQIABAAIAAgCIAAgKQAHgfAAglIAAgDIAAgBIAAgMIAAgCIAAgWIAAgCIAAgMIAAgBIAAgGIgBAAQgBgHAAgIQgLhFgWg6QgshugOiMIgBAAIgBgNIAAgCIAAgFIgBAAIAAgOIAAgCIAAg5IAAgBIAAgQIAAgBIAAgNIAAgCIAAgUIABAAIAAgCQAChXAOhNIgBABQgMAFgOADIgBABIgOAEIgBAAQhFAVhIATIAAAAIgMADIgBAAQh5AiiHAOIAAACQgKAAgIACIgBAAIgHAAIAAABQgJABgIACIgCAAIgTABIAAABIgNABIAAABIhkANIAAABIgQABIAAAAIgOABIAAABIgPABIAAABIgQABIAAABIgPABIAAAAIgNABIAAABIgPABIAAABIgNABIgCAAIAAABIgOAAIgBAAIAAABIgQABIgBAAIAAABIgQABIgBAAIgCAAIAAABIgQAAIgBAAIAAACIgPAAIgBAAIgHAAIAAABIgNABIgCAAIgGAAIAAABIgNABIgCAAIgHAAIAAABIgOABIgBAAIgJAAIAAAAIgOABIgCAAIgLAAIgCAAIgEAAIAAABIgNABIgCAAIgOAAIgBAAIgBABIgOABIgBAAIgMAAIgCAAIgRAAIgCAAIgEAAIAAABIgNAAIgCAAIgMAAIgBAAIgMAAIAAABIgOABIgCAAIgMAAIgCAAIgYAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgSAAIgBAAQgIACgEgDIgCAAIgRAAIgBAAQgJABgEgDIgCAAQgSgCgVAAIgBAAQgJACgEgDIgCgBQgVgBgXAAIgCAAQgIABgEgDIiKgIQhCgEhAgLQiCgWh9gdIj0g7IgBAAQgFgGgBgKIACAAIAAgBIAAgJQAagnA1gMIACAAIAAgCQAFAAACgBIACgBIABAAIAAgCQAFABACgCIACAAIABAAIAAgCIAJgBIABgBQAMgEANgDIABAAIAAgBIAJgCIACAAIAAgCIAfgGIACgBIAAgBIAHgCIABAAQAkgMAmgJIACAAIAAgBQAFAAADgCIACAAIACAAIACAAIAAgCIAIgBIACgBQADgCAGAAIABAAIAAgBQAGAAAGgCIACAAIACAAIAAgBQAGAAAEgCIABAAIAmgJIACAAIAAgCQAHABAGgCIABAAQAJgDAKgBIABAAIAAgBQAHAAAEgCIACAAIACAAIAAgCQAHAAAGgBIACgBIACAAIACAAIAAgBQAFAAAEgCIACAAIAGAAIABAAIAAgCQAIABAEgDIACAAQAagFAbgDIACgBIAAgBQAKABAFgCIACAAIAMgCIACAAIAAgCIAMgBIACgBIAKgBIACAAIAAgCQAKAAAHgCIABAAIACAAIAAgCIAQgBIABAAQAJgDAKgBIACAAIAAgBQAIABAFgDIABAAIABAAIACAAIAAgCQAJABAGgDIABAAIAWgDIACAAIAAgCQAGAAAFgBIABAAIAOgDIACAAIAAgBQAHAAAGgBIACgBIACAAIAAgBQAGAAAEgCIACAAIADAAIACAAIAAgCQAGABAFgCIABAAQAFgCAFAAIACAAIAAgCQAGAAAEgBIACgBIACAAIAAgBIALgCIACAAIACAAIACAAIAAgCQAHAAAFgBIABgBQAIgCAIgBIACAAIAAgCQAFABADgCIACAAIACAAIACAAIAAgCQAHAAAGgCIACAAIACAAIAAgCQAHABAFgDIABAAIACAAIAAgBQAHABAEgCIACgBIAxgMIACAAIAAgBQAFAAAEgCIABAAIAHgCIACAAIAAgCQAEAAAEgBIACAAQAIgEAKgBIABgBIAAgBQAFAAACgCIACAAQBygpBygmQB0gnB2gkQAygQA5gJIAAgCQAHABADgCIACAAQAGgCAIAAIABAAIAAgCQAHABAEgCIABAAQAIAAAHgCIABAAIAHgCIABAAQA0gHA4gFIABAAIANgBIACgBIADAAIABAAQAGgCAIABIACAAQALgDAPABIABAAIAAgCIAOAAIACAAIAAgBIAMAAIABAAIANAAIACAAIAHAAIABAAIAAgCIAMAAIACAAIAMAAIACAAIAgAAIACAAIAMAAIABAAIANAAIACAAIANABIAAABIAKAAIADAAQBZgoBqgXIACAAIAAgBQAHAAAFgCIACAAQAXgFAdgCIABAAIAAgBIAKAAIACAAIAAgCIAOAAIABAAIACAAIAAgCIAVABIAAABIAFAAIACAAIAKABIAAABIAlAAIABAAQBbg/B+gdIAagFIAAgBQAIABAFgDIACAAIAEAAIABAAIAAgCQAHABADgCIACgBIAGAAIABAAIAAgCQAHABADgCIACAAIAEAAIABAAIAAgCQAIABAEgCIACAAIAFAAIACAAIAAgCQAJABAGgDIACAAQAFgCAHAAIACAAQAEgBAGAAIACAAIADAAIACAAQADgDAGABIACAAIAEAAIACAAIAAgCIAaAAIACAAIAAgCIAVAAIABAAIAQAAIACAAIALAAIACAAIAMAAIACAAIAOABIAAABIAEAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIADAAIACAAIAVADIAAABIACAAIACAAQAHAAAIACIAAABIADAAIACAAQAFACAHABIAAAAIACAAIACAAIAKADIAAABIABAAIACAAQAFACAHABIABABQAIgBAFAEIACAAQAEADAGAAIAAAAIAMADIAAABIAKACIAAABIAKADIABABQAEgBACACIAAAAIAMAFIAAABIALACIAAABIAIADIAAABQAGAAAFACIAAABIAJACIAAABIAKADIAAABIACAAIALAEIAAABIACAAQAFADAHABIABABIABAAQAFADAHABIAAABIACACIACAAIALAEIAAABQAgAMAdAPIACABIAKAEIAAABQAWAKAVALIAAABIAKAEIAAABIA2AmIABAAIAAgBQAHgCAHAHIAAABIAAAEIAAACQADAHgBALIAAACIAAACQABAIgDAEIAAAKIAAABIAAADQABAIgDAEQgEAugNAnQgdBVgoBKQg3Bkg5BiQg4BfhJBSQhJBRhOBMQhNBMhSBIQhSBIhZBBQhaBBhdA9QguAegzAaQgnATgkAYQgKAGgIAAQgMAAgJgMg");
	mask.setTransform(168.9,77.4997);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(242.7,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:27.68,scaleY:27.68},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AHjL7IAAAAIgBgQIABAAIAAgCIAAgKQAHgfAAglIAAgDIAAgBIAAgMIAAgCIAAgWIAAgCIAAgMIAAgBIAAgGIgBAAQgBgHAAgIQgLhFgWg6QgshugOiMIgBAAIgBgNIAAgCIAAgFIgBAAIAAgOIAAgCIAAg5IAAgBIAAgQIAAgBIAAgNIAAgCIAAgUIABAAIAAgCQAChXAOhNIgBABQgMAFgOADIgBABIgOAEIgBAAQhFAVhIATIAAAAIgMADIgBAAQh5AiiHAOIAAACQgKAAgIACIgBAAIgHAAIAAABQgJABgIACIgCAAIgTABIAAABIgNABIAAABIhkANIAAABIgQABIAAAAIgOABIAAABIgPABIAAABIgQABIAAABIgPABIAAAAIgNABIAAABIgPABIAAABIgNABIgCAAIAAABIgOAAIgBAAIAAABIgQABIgBAAIAAABIgQABIgBAAIgCAAIAAABIgQAAIgBAAIAAACIgPAAIgBAAIgHAAIAAABIgNABIgCAAIgGAAIAAABIgNABIgCAAIgHAAIAAABIgOABIgBAAIgJAAIAAAAIgOABIgCAAIgLAAIgCAAIgEAAIAAABIgNABIgCAAIgOAAIgBAAIgBABIgOABIgBAAIgMAAIgCAAIgRAAIgCAAIgEAAIAAABIgNAAIgCAAIgMAAIgBAAIgMAAIAAABIgOABIgCAAIgMAAIgCAAIgYAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgSAAIgBAAQgIACgEgDIgCAAIgRAAIgBAAQgJABgEgDIgCAAQgSgCgVAAIgBAAQgJACgEgDIgCgBQgVgBgXAAIgCAAQgIABgEgDIiKgIQhCgEhAgLQiCgWh9gdIj0g7IgBAAQgFgGgBgKIACAAIAAgBIAAgJQAagnA1gMIACAAIAAgCQAFAAACgBIACgBIABAAIAAgCQAFABACgCIACAAIABAAIAAgCIAJgBIABgBQAMgEANgDIABAAIAAgBIAJgCIACAAIAAgCIAfgGIACgBIAAgBIAHgCIABAAQAkgMAmgJIACAAIAAgBQAFAAADgCIACAAIACAAIACAAIAAgCIAIgBIACgBQADgCAGAAIABAAIAAgBQAGAAAGgCIACAAIACAAIAAgBQAGAAAEgCIABAAIAmgJIACAAIAAgCQAHABAGgCIABAAQAJgDAKgBIABAAIAAgBQAHAAAEgCIACAAIACAAIAAgCQAHAAAGgBIACgBIACAAIACAAIAAgBQAFAAAEgCIACAAIAGAAIABAAIAAgCQAIABAEgDIACAAQAagFAbgDIACgBIAAgBQAKABAFgCIACAAIAMgCIACAAIAAgCIAMgBIACgBIAKgBIACAAIAAgCQAKAAAHgCIABAAIACAAIAAgCIAQgBIABAAQAJgDAKgBIACAAIAAgBQAIABAFgDIABAAIABAAIACAAIAAgCQAJABAGgDIABAAIAWgDIACAAIAAgCQAGAAAFgBIABAAIAOgDIACAAIAAgBQAHAAAGgBIACgBIACAAIAAgBQAGAAAEgCIACAAIADAAIACAAIAAgCQAGABAFgCIABAAQAFgCAFAAIACAAIAAgCQAGAAAEgBIACgBIACAAIAAgBIALgCIACAAIACAAIACAAIAAgCQAHAAAFgBIABgBQAIgCAIgBIACAAIAAgCQAFABADgCIACAAIACAAIACAAIAAgCQAHAAAGgCIACAAIACAAIAAgCQAHABAFgDIABAAIACAAIAAgBQAHABAEgCIACgBIAxgMIACAAIAAgBQAFAAAEgCIABAAIAHgCIACAAIAAgCQAEAAAEgBIACAAQAIgEAKgBIABgBIAAgBQAFAAACgCIACAAQBygpBygmQB0gnB2gkQAygQA5gJIAAgCQAHABADgCIACAAQAGgCAIAAIABAAIAAgCQAHABAEgCIABAAQAIAAAHgCIABAAIAHgCIABAAQA0gHA4gFIABAAIANgBIACgBIADAAIABAAQAGgCAIABIACAAQALgDAPABIABAAIAAgCIAOAAIACAAIAAgBIAMAAIABAAIANAAIACAAIAHAAIABAAIAAgCIAMAAIACAAIAMAAIACAAIAgAAIACAAIAMAAIABAAIANAAIACAAIANABIAAABIAKAAIADAAQBZgoBqgXIACAAIAAgBQAHAAAFgCIACAAQAXgFAdgCIABAAIAAgBIAKAAIACAAIAAgCIAOAAIABAAIACAAIAAgCIAVABIAAABIAFAAIACAAIAKABIAAABIAlAAIABAAQBbg/B+gdIAagFIAAgBQAIABAFgDIACAAIAEAAIABAAIAAgCQAHABADgCIACgBIAGAAIABAAIAAgCQAHABADgCIACAAIAEAAIABAAIAAgCQAIABAEgCIACAAIAFAAIACAAIAAgCQAJABAGgDIACAAQAFgCAHAAIACAAQAEgBAGAAIACAAIADAAIACAAQADgDAGABIACAAIAEAAIACAAIAAgCIAaAAIACAAIAAgCIAVAAIABAAIAQAAIACAAIALAAIACAAIAMAAIACAAIAOABIAAABIAEAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIADAAIACAAIAVADIAAABIACAAIACAAQAHAAAIACIAAABIADAAIACAAQAFACAHABIAAAAIACAAIACAAIAKADIAAABIABAAIACAAQAFACAHABIABABQAIgBAFAEIACAAQAEADAGAAIAAAAIAMADIAAABIAKACIAAABIAKADIABABQAEgBACACIAAAAIAMAFIAAABIALACIAAABIAIADIAAABQAGAAAFACIAAABIAJACIAAABIAKADIAAABIACAAIALAEIAAABIACAAQAFADAHABIABABIABAAQAFADAHABIAAABIACACIACAAIALAEIAAABQAgAMAdAPIACABIAKAEIAAABQAWAKAVALIAAABIAKAEIAAABIA2AmIABAAIAAgBQAHgCAHAHIAAABIAAAEIAAACQADAHgBALIAAACIAAACQABAIgDAEIAAAKIAAABIAAADQABAIgDAEQgEAugNAnQgdBVgoBKQg3Bkg5BiQg4BfhJBSQhJBRhOBMQhNBMhSBIQhSBIhZBBQhaBBhdA9QguAegzAaQgnATgkAYQgKAGgIAAQgMAAgJgMg");
	this.shape.setTransform(168.9,77.4997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.8,155);


(lib.leaf_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnkOWQgdgCgRgNIgBAAIgIgIIAAgCIgBgCIgBAAIgEgKIgBgBQgCgCABgFIgBAAIAAgOIAAgCIAAgKQAJgnAEgsIAAgBIAAgCIAAgOIgBgBQgBgDAAgFIgBAAIgCgSIAAgCIAAgHIgBAAIgBgOIAAgCIAAgEIAAgBIgCgOIAAgBIAAgMIAAgCIAAgNIAAgCIAAgOIAAgCIAAgRIAAgCIAAgRIACAAIAAgBIAAgGQADgCgBgHIAAgBIAAgCIAAgMIABAAIAAgCIAAgNQAPiNAeh6QAfh8AnhzQAlhzA4hiQA5hhBJhRQAZgbAagXQg8AKhIAIIgCAAIAAABIgPABIAAABIgOABIgCAAIgIAAIAAAAIgOACIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIAAABIgnABIgCAAIgiAAIgCAAQgIACgFgEIgBAAQhIgEhHgEIgCAAQgIABgDgDIgDAAIgMAAIgBAAIgXAAIgBAAIgMAAIgCAAIgKAAIAAABIgOABIgCAAIgMAAIgCAAIgCAAIAAABIgPAAIgCAAQgXAFgaACIAAABIgOABIgCAAQgbADgEgWQA6g5BJgrIBIgqQBig5BngyQBpgxBtgsQBuguBzgnQBngjBwgcIAAgCQAHABACgCIACgBQATgFAWgDIACAAIAAgCQAHAAAFgBIACAAQAFgCAGAAIACgBIAAgBQAHABAEgDIACAAQAZgEAbgEIADgBQACgCAGABIACAAIABAAIACAAIAAgBIAKAAIACAAQAJgDAMABIACAAIAAgCIAYAAIACAAIAAgCIALAAIACAAIAOAAIABAAIAAgCIAMAAIADAAIANABIAAABIAKAAIACAAIAOABIAAABIAFAAIACAAIANAAIAAACIAOABIABABQAJgBAIACIABAAQAHACAJAAIAAABIADAAIACAAQAFACAJABIAAABIABAAIACAAIAKACIAAABQAFAAACABIACABQAEACAGABIAAABIAMACIABABIADAAQAEABADACIABAAQAFACAFgDIAAABICHAmIAaAHIAGACIABAIIAMANIABAHQAdDEAIDdIgDgBIAAABQgHAmgLAkIgDAOQgkB2g2BjQg3BjhBBaQguBBgyA8IgpAuQhIBRhTBHQhRBJhYBDQhWBChcA/QhbA9hjA4QhiA3h1AmIAAAAQgFADgHAAIAAABQgTAGgYAEIAAABIgRABIgCAAg");
	mask.setTransform(86.8,91.75);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(162.1,-5.2);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.2,scaleX:25.225,scaleY:25.225,x:192.35},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AnkOWQgdgCgRgNIgBAAIgIgIIAAgCIgBgCIgBAAIgEgKIgBgBQgCgCABgFIgBAAIAAgOIAAgCIAAgKQAJgnAEgsIAAgBIAAgCIAAgOIgBgBQgBgDAAgFIgBAAIgCgSIAAgCIAAgHIgBAAIgBgOIAAgCIAAgEIAAgBIgCgOIAAgBIAAgMIAAgCIAAgNIAAgCIAAgOIAAgCIAAgRIAAgCIAAgRIACAAIAAgBIAAgGQADgCgBgHIAAgBIAAgCIAAgMIABAAIAAgCIAAgNQAPiNAeh6QAfh8AnhzQAlhzA4hiQA5hhBJhRQAZgbAagXQg8AKhIAIIgCAAIAAABIgPABIAAABIgOABIgCAAIgIAAIAAAAIgOACIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIAAABIgnABIgCAAIgiAAIgCAAQgIACgFgEIgBAAQhIgEhHgEIgCAAQgIABgDgDIgDAAIgMAAIgBAAIgXAAIgBAAIgMAAIgCAAIgKAAIAAABIgOABIgCAAIgMAAIgCAAIgCAAIAAABIgPAAIgCAAQgXAFgaACIAAABIgOABIgCAAQgbADgEgWQA6g5BJgrIBIgqQBig5BngyQBpgxBtgsQBuguBzgnQBngjBwgcIAAgCQAHABACgCIACgBQATgFAWgDIACAAIAAgCQAHAAAFgBIACAAQAFgCAGAAIACgBIAAgBQAHABAEgDIACAAQAZgEAbgEIADgBQACgCAGABIACAAIABAAIACAAIAAgBIAKAAIACAAQAJgDAMABIACAAIAAgCIAYAAIACAAIAAgCIALAAIACAAIAOAAIABAAIAAgCIAMAAIADAAIANABIAAABIAKAAIACAAIAOABIAAABIAFAAIACAAIANAAIAAACIAOABIABABQAJgBAIACIABAAQAHACAJAAIAAABIADAAIACAAQAFACAJABIAAABIABAAIACAAIAKACIAAABQAFAAACABIACABQAEACAGABIAAABIAMACIABABIADAAQAEABADACIABAAQAFACAFgDIAAABICHAmIAaAHIAGACIABAIIAMANIABAHQAdDEAIDdIgDgBIAAABQgHAmgLAkIgDAOQgkB2g2BjQg3BjhBBaQguBBgyA8IgpAuQhIBRhTBHQhRBJhYBDQhWBChcA/QhbA9hjA4QhiA3h1AmIAAAAQgFADgHAAIAAABQgTAGgYAEIAAABIgRABIgCAAg");
	this.shape.setTransform(86.8,91.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.6,183.5);


(lib.leaf_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA8GBQgLgCgEgJQgcg9gmgzQhBhYg4hiQg4hhggh6IgBAAIAAgOIgBgCQgFgXgDgZIgBAAIgBgOIgBAAIAAgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgQIAAgBIAAgVIACAAIAAgCIAAgMQAFgaAGgZIABgCQAJgOAVgDIACAAIAAgCQAHABAEgCIABgBIACAAIACAAQADgCAHAAIACABIAKAAIACAAIAAgCIAHAAIABAAIAAgCIAMAAIACAAIAaABIAAABIAFAAIACAAIANABIABABIABAAQAJgBAFACIACAAIANADIABABQAEgBADACIABAAIAMADIAAABIAMACIAAABIAKADIABABIAKACIAAABQAGACACAFIABAAQAKABAJACIAAABQCNANAvBqQASAnAGAyQAHAzADA2QADADgBAJIAAABIAAAsIAAACIAAABQABAJgDADIAAACIAAACIAAACQABAJgDAEQgMBTgdBDIgvBrQgXA3g5AUIgBABIgGABQgEAAgDgCg");
	mask.setTransform(24.6125,38.69);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(19.75,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.5,regY:-0.5,scaleX:10.195,scaleY:10.195,x:24.85,y:-15.1},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AA8GBQgLgCgEgJQgcg9gmgzQhBhYg4hiQg4hhggh6IgBAAIAAgOIgBgCQgFgXgDgZIgBAAIgBgOIgBAAIAAgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgQIAAgBIAAgVIACAAIAAgCIAAgMQAFgaAGgZIABgCQAJgOAVgDIACAAIAAgCQAHABAEgCIABgBIACAAIACAAQADgCAHAAIACABIAKAAIACAAIAAgCIAHAAIABAAIAAgCIAMAAIACAAIAaABIAAABIAFAAIACAAIANABIABABIABAAQAJgBAFACIACAAIANADIABABQAEgBADACIABAAIAMADIAAABIAMACIAAABIAKADIABABIAKACIAAABQAGACACAFIABAAQAKABAJACIAAABQCNANAvBqQASAnAGAyQAHAzADA2QADADgBAJIAAABIAAAsIAAACIAAABQABAJgDADIAAACIAAACIAAACQABAJgDAEQgMBTgdBDIgvBrQgXA3g5AUIgBABIgGABQgEAAgDgCg");
	this.shape.setTransform(24.6125,38.69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,77.4);


(lib.leaf_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");
	var mask_graphics_49 = new cjs.Graphics().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:51.175,y:58.49}).wait(49).to({graphics:mask_graphics_49,x:51.175,y:58.49}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(96.05,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1,scaleX:19.62,scaleY:19.62,x:115.65},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");
	this.shape.setTransform(51.175,58.49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.4,117);


(lib.leaf_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");
	var mask_graphics_49 = new cjs.Graphics().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33.4625,y:55.0167}).wait(49).to({graphics:mask_graphics_49,x:33.4625,y:55.0167}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(26.05,-12.4);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.7,regY:-0.7,scaleX:14.165,scaleY:14.165,x:35.95,y:-22.3},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");
	this.shape.setTransform(33.4625,55.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,110.1);


(lib.leaf_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA8OeIgCAAQgTgHACgbIgBAAIgBgOIAAgCIAAgPIAAgCIAAgDIgBgBIgBgNIAAgCIAAgMIAAgCIAAgBIAAgBIgBgNIAAgCIAAgFIgBAAIgBgOQgRhogyhGIheiBIgjgyQgwhEgnhMQg0hmgeh7Qgeh7gKiQIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgCIAAgMIAAgBIAAgXIgBAAIgBgTIAAgBIAAgMIACAAIAAgCIAAgcQAIiRAhh4QAhh6A9hcQAggwApglQAWgHAcgDIABAAIAAgCIAjAAIACAAIANABIAAABIAJAAIACAAIAGABIALACIAAAAQAhAHAeAKIATAHQAfAKAcAOQAPAGAOAIQATAKASAMIAAABIAJAGIAJAGQAYA8APBAQAtC/AmC+IAaBOIAAAHQACApAPAoIAGAcIAEAWQAJA5ADA/IAAACQADAEgCAIIAAACIAAATIAAABIAAAMIAAACIAAACQACAIgDAEIAAAOIAAABIAAACQABAIgDAEQgLB6gXBuQgbCAgiB3QgjB4g3BiQgOAZgPAXQggAvg0AZIAAABIgIABQgEAAgDgCg");
	mask.setTransform(37.7125,92.7818);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(25.3,-11.7);
	this.fill._off = true;

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1).to({_off:false},0).to({scaleX:25.19,scaleY:25.19},48).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AA8OeIgCAAQgTgHACgbIgBAAIgBgOIAAgCIAAgPIAAgCIAAgDIgBgBIgBgNIAAgCIAAgMIAAgCIAAgBIAAgBIgBgNIAAgCIAAgFIgBAAIgBgOQgRhogyhGIheiBIgjgyQgwhEgnhMQg0hmgeh7Qgeh7gKiQIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgCIAAgMIAAgBIAAgXIgBAAIgBgTIAAgBIAAgMIACAAIAAgCIAAgcQAIiRAhh4QAhh6A9hcQAggwApglQAWgHAcgDIABAAIAAgCIAjAAIACAAIANABIAAABIAJAAIACAAIAGABIALACIAAAAQAhAHAeAKIATAHQAfAKAcAOQAPAGAOAIQATAKASAMIAAABIAJAGIAJAGQAYA8APBAQAtC/AmC+IAaBOIAAAHQACApAPAoIAGAcIAEAWQAJA5ADA/IAAACQADAEgCAIIAAACIAAATIAAABIAAAMIAAACIAAACQACAIgDAEIAAAOIAAABIAAACQABAIgDAEQgLB6gXBuQgbCAgiB3QgjB4g3BiQgOAZgPAXQggAvg0AZIAAABIgIABQgEAAgDgCg");
	this.shape.setTransform(37.7125,92.7818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.4,185.6);


(lib.leaf_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANiSvIgBAAQgQgEAAgUIgBAAIgBgOQgMg3gOg1Qgih5gzhmQgbg0gggtQhBhYhOhNQhDhCg7hMQhDhXgzhnIgZg2QgvhpgTiGIgBAAQAAgJgCgIIAAgCIAAgHIgBAAIgBgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgEIAAAAIgBgOIAAgBIAAgHIgBAAIgBgOIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgVIAAgCIAAgMIACAAIAAgBIAAgJIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgkAegqAYQhiA4hpAvQhrAwh1AkQh2AjiGAUIAAABQgKABgHACIgCAAQgHACgKAAIAAAAIgQABIAAABIgNABIgCAAIgCAAIAAABIgOABIgBAAIgGAAIAAABIgNAAIgCAAIgJAAIAAABIgPABIgCAAIgMAAIAAABIgOABIgBAAQgUABgQgDIgCAAIgCAAIgCAAQgUABgQgDIgBAAQgtgBgpgEIgCAAIgMAAIgCAAIgTAAIgBAAIgaACIgCAAIgDAAIAAABQgLAAgIACQgLACgKADQgkAMgOgZQAigrA6gVQANgFANgHQBhg4BQhLQBPhKBChYQBChYA7hfQA7hfA5hiQA4hhBIhRQBJhSBdg9QBbg+BsgtQBagmBvgSIAAgBQAJAAAFgCIABAAIALAAIABAAIAAgCIATAAIACAAIAAgCIAmAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIAFAAIACAAIANABIAAABIAOABIAAABIACAAIACAAIAAgCIADgCIACAAIAAgCIAFAAIACAAIAAgBIAbAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAHAAIACAAIATADIAAABQB/AaBQBKQBRBJAtBvQAsBsAXCDQAXCDAMCMQAIBXAGBXQADAEgCAIIAAABIACA5IAAACQADAEgBAIIAAACIAAAYIAAACQADADgBAJIAAABIAAAaIAAACQADAEgCAIIAAACIAAAMIAAABIAAAYIAAACIAAACIAAARIAAABIAAABQADAGgBAKIAAACIAAAPIAAACIAAAMIAAACIAAANIAAACIAAAMIAAACIAAAMIAAACIAAABQABAIgDAEIAAATIAAACIAAAMIAAACIAAABQACAJgDADIAAANIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAABQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACQACAKgDAGIAAABQgBASgDAPIAAACIAAABIAAACQABAIgDAEIAAACQAAAQgDANIAAACIAAACQABAIgDAEIAAABQgCAdgFAZIAAABIAAACQACAIgDAEIAAACQgBAVgFARIAAABIAAACIABACQABAIgDAEIAAACQABAIgDAEIAAABQABAJgDADQgJBogPBiIgJBDQgRCMgfB4QgMAwggAZIAAABIgHABQgFAAgEgCg");
	mask.setTransform(105.2625,120.115);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(163.9,-14.4);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.4,scaleX:28.06,scaleY:28.06,x:203.2},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("ANiSvIgBAAQgQgEAAgUIgBAAIgBgOQgMg3gOg1Qgih5gzhmQgbg0gggtQhBhYhOhNQhDhCg7hMQhDhXgzhnIgZg2QgvhpgTiGIgBAAQAAgJgCgIIAAgCIAAgHIgBAAIgBgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgEIAAAAIgBgOIAAgBIAAgHIgBAAIgBgOIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgVIAAgCIAAgMIACAAIAAgBIAAgJIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgkAegqAYQhiA4hpAvQhrAwh1AkQh2AjiGAUIAAABQgKABgHACIgCAAQgHACgKAAIAAAAIgQABIAAABIgNABIgCAAIgCAAIAAABIgOABIgBAAIgGAAIAAABIgNAAIgCAAIgJAAIAAABIgPABIgCAAIgMAAIAAABIgOABIgBAAQgUABgQgDIgCAAIgCAAIgCAAQgUABgQgDIgBAAQgtgBgpgEIgCAAIgMAAIgCAAIgTAAIgBAAIgaACIgCAAIgDAAIAAABQgLAAgIACQgLACgKADQgkAMgOgZQAigrA6gVQANgFANgHQBhg4BQhLQBPhKBChYQBChYA7hfQA7hfA5hiQA4hhBIhRQBJhSBdg9QBbg+BsgtQBagmBvgSIAAgBQAJAAAFgCIABAAIALAAIABAAIAAgCIATAAIACAAIAAgCIAmAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIAFAAIACAAIANABIAAABIAOABIAAABIACAAIACAAIAAgCIADgCIACAAIAAgCIAFAAIACAAIAAgBIAbAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAHAAIACAAIATADIAAABQB/AaBQBKQBRBJAtBvQAsBsAXCDQAXCDAMCMQAIBXAGBXQADAEgCAIIAAABIACA5IAAACQADAEgBAIIAAACIAAAYIAAACQADADgBAJIAAABIAAAaIAAACQADAEgCAIIAAACIAAAMIAAABIAAAYIAAACIAAACIAAARIAAABIAAABQADAGgBAKIAAACIAAAPIAAACIAAAMIAAACIAAANIAAACIAAAMIAAACIAAAMIAAACIAAABQABAIgDAEIAAATIAAACIAAAMIAAACIAAABQACAJgDADIAAANIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAABQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACQACAKgDAGIAAABQgBASgDAPIAAACIAAABIAAACQABAIgDAEIAAACQAAAQgDANIAAACIAAACQABAIgDAEIAAABQgCAdgFAZIAAABIAAACQACAIgDAEIAAACQgBAVgFARIAAABIAAACIABACQABAIgDAEIAAACQABAIgDAEIAAABQABAJgDADQgJBogPBiIgJBDQgRCMgfB4QgMAwggAZIAAABIgHABQgFAAgEgCg");
	this.shape.setTransform(105.2625,120.115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,240.3);


(lib.leaf_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AN2VKIgcAAIAAgBQgcgNgWgSIgBAAIgFgGIgCgBIg1gnIgCgBQgDgDgEgDIgBgBIgvghIgBgBIgIgGIgBAAQgCgEgEgCIgBAAIgGgGIgBgBIhRg7IgBgBIgGgHQhIg0hLgyIi3h8Qhdg+hShIQgpgkgugfQhcg9hZhBIiyiCQhDgwhCgyIitiGQhWhEhHhTQg1g+gvhDQg/hbg0hmIgBAAIgEgKIgBgBQgohSgehdIgBAAQgCgHAAgKIgBgBQgBgDAAgFIgBAAIgCgKIAAgBIgBAAIgDgNIgBAAIgBgGIgBAAIgCgKIAAgDIgBAAIgDgMIAAgBIAAAAIgDgMIAAgCIAAgCIgBAAQAAgGgCgFIAAgCIAAgEIgBAAIgDgMIAAgBIAAgEIgBAAIgCgNIAAgCIAAgCIgBgBIgDgNIAAgBIAAgDIgBAAQAAgIgCgHIAAgBIAAgDIgBAAQgBgIgCgGIAAgDIAAgDIAAAAIgDgRIAAgCQgCgHAAgJIgBAAIAAgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgCIgBAAIgBgOIAAgBIAAAAIgBgOIAAgCIgBAAIgBgNIAAgDIAAgMIAAgBIAAgCIgBAAIgBgOIAAgBIAAgMIgBAAIgBgOIAAgCIAAgaIAAgBIAAgXIACAAIAAgCIAAgIIAAgCIAAgSIACAAIAAgCIAAgVIACAAIAAgCIAAgiQAKiQAeh7IAShDIgCAAQgEABgBgEQAEAAACgBIABgBIACgBIACAAIAAgDIAGAAIACAAQACgBADAAIACAAQADgDAGABIABAAQADgCAEABIACAAIACAAIABAAIAAgCQAJABAFgDIACAAIAkgFIACAAIAAgCQAIABAEgCIABgBIAjgEIACAAIAAgCQAHABAFgCIABgBQAQgDARgBIACAAIAAgBQAIAAAGgBIABgBIAEAAIABAAIAAgBQAMABAHgDIACgBIATgBIACAAIAAgCQAKABAHgCIACAAIAngEIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIAaAAIACAAIAOABIAAABIATAAIABAAIAAgCIAVAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAABQBkAPBXAdQBzAmByAoQByAoBsAtQBsAuBoAyQBUAqBTAsQAEADAGACIAAACQAIADAGAEIACABIALAGIABAAIAKAHIAAAAIAKAEIAAACQBkA2BWBDQBWBFBSBIQA6A0A2A2IAIAHIABABIAFAEIAAABIAIAIIABABQADAGAFADIAAABIAIAIIABABIAIAIIAAAAIACABIAAABIAHAIIAAABIAIAIIABAAIABACIAAACIAJAHIAAABIAAADIAGAFIABABIABACIABACIAGAFIAAACIACACIAAABIAHAGIAAABQACADADACIAAABQAEAGAEAEIABABQBFBVAwBoQAXAxAjAjIABAAQADARgLgFIgBABQgJAMgTADIAAABQgVAEgSgEIgCAAIgFAAIgCAAIgJgCQgKgEgKgCQh+gchzgnIi3hBQhygph2glQh0glh6ggQBPBLBHBUQBGBSBABbQA/BaA7BeQAtBHAnBLQA1BmAuBrQAtBtAjB4QAiB4AUCHQAHA0ACA5QADAXgBAaIAAACIAAANIAAACIAAAMIAAACIAAAMIAAABIAAANIAAACIAAABQABAIgDAEIAAAOIAAABIAAANIAAACIAAALIAAACIAAAMIAAACIAAABQABAJgDADIAAAGIAAABIAAACQACAIgDAEIAAACQABAIgDAEIAAABQgBARgEALIAAACIAAACIAAABQABAJgDADIAAAHIAAACIABAAQADALgGADIAAABIgNAIIgCAAg");
	mask.setTransform(119.174,135.35);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(-0.65,-2.9);
	this.fill._off = true;

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1).to({_off:false},0).to({regY:-1.9,scaleX:37.035,scaleY:37.035,y:-73.25},48).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AN2VKIgcAAIAAgBQgcgNgWgSIgBAAIgFgGIgCgBIg1gnIgCgBQgDgDgEgDIgBgBIgvghIgBgBIgIgGIgBAAQgCgEgEgCIgBAAIgGgGIgBgBIhRg7IgBgBIgGgHQhIg0hLgyIi3h8Qhdg+hShIQgpgkgugfQhcg9hZhBIiyiCQhDgwhCgyIitiGQhWhEhHhTQg1g+gvhDQg/hbg0hmIgBAAIgEgKIgBgBQgohSgehdIgBAAQgCgHAAgKIgBgBQgBgDAAgFIgBAAIgCgKIAAgBIgBAAIgDgNIgBAAIgBgGIgBAAIgCgKIAAgDIgBAAIgDgMIAAgBIAAAAIgDgMIAAgCIAAgCIgBAAQAAgGgCgFIAAgCIAAgEIgBAAIgDgMIAAgBIAAgEIgBAAIgCgNIAAgCIAAgCIgBgBIgDgNIAAgBIAAgDIgBAAQAAgIgCgHIAAgBIAAgDIgBAAQgBgIgCgGIAAgDIAAgDIAAAAIgDgRIAAgCQgCgHAAgJIgBAAIAAgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgCIgBAAIgBgOIAAgBIAAAAIgBgOIAAgCIgBAAIgBgNIAAgDIAAgMIAAgBIAAgCIgBAAIgBgOIAAgBIAAgMIgBAAIgBgOIAAgCIAAgaIAAgBIAAgXIACAAIAAgCIAAgIIAAgCIAAgSIACAAIAAgCIAAgVIACAAIAAgCIAAgiQAKiQAeh7IAShDIgCAAQgEABgBgEQAEAAACgBIABgBIACgBIACAAIAAgDIAGAAIACAAQACgBADAAIACAAQADgDAGABIABAAQADgCAEABIACAAIACAAIABAAIAAgCQAJABAFgDIACAAIAkgFIACAAIAAgCQAIABAEgCIABgBIAjgEIACAAIAAgCQAHABAFgCIABgBQAQgDARgBIACAAIAAgBQAIAAAGgBIABgBIAEAAIABAAIAAgBQAMABAHgDIACgBIATgBIACAAIAAgCQAKABAHgCIACAAIAngEIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIAaAAIACAAIAOABIAAABIATAAIABAAIAAgCIAVAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAABQBkAPBXAdQBzAmByAoQByAoBsAtQBsAuBoAyQBUAqBTAsQAEADAGACIAAACQAIADAGAEIACABIALAGIABAAIAKAHIAAAAIAKAEIAAACQBkA2BWBDQBWBFBSBIQA6A0A2A2IAIAHIABABIAFAEIAAABIAIAIIABABQADAGAFADIAAABIAIAIIABABIAIAIIAAAAIACABIAAABIAHAIIAAABIAIAIIABAAIABACIAAACIAJAHIAAABIAAADIAGAFIABABIABACIABACIAGAFIAAACIACACIAAABIAHAGIAAABQACADADACIAAABQAEAGAEAEIABABQBFBVAwBoQAXAxAjAjIABAAQADARgLgFIgBABQgJAMgTADIAAABQgVAEgSgEIgCAAIgFAAIgCAAIgJgCQgKgEgKgCQh+gchzgnIi3hBQhygph2glQh0glh6ggQBPBLBHBUQBGBSBABbQA/BaA7BeQAtBHAnBLQA1BmAuBrQAtBtAjB4QAiB4AUCHQAHA0ACA5QADAXgBAaIAAACIAAANIAAACIAAAMIAAACIAAAMIAAABIAAANIAAACIAAABQABAIgDAEIAAAOIAAABIAAANIAAACIAAALIAAACIAAAMIAAACIAAABQABAJgDADIAAAGIAAABIAAACQACAIgDAEIAAACQABAIgDAEIAAABQgBARgEALIAAACIAAACIAAABQABAJgDADIAAAHIAAACIABAAQADALgGADIAAABIgNAIIgCAAg");
	this.shape.setTransform(119.174,135.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.4,270.7);


(lib.leaf_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");
	var mask_graphics_49 = new cjs.Graphics().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:101.3,y:139.68}).wait(49).to({graphics:mask_graphics_49,x:101.3,y:139.68}).wait(1));

	// Layer_4
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(119.3,-12.7);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:32.975,scaleY:32.975,x:117.1,y:0.05},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");
	this.shape.setTransform(101.3,139.68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.6,279.4);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkNHnQhwhwAAieQAAhKAqiTQApiKAmhMQBojLAMgVQBdicBCAAQBDAABcCgQAtBQA8CMQAhBPAiCIQAkCSAABKQAACehwBwQhwBwieAAQidAAhwhwg");
	var mask_graphics_1 = new cjs.Graphics().p("AhMIHQg3gRhBgfQgngShNgpQg5gfgXgVQgUgSgbgkQhfiDgKh9QgCghAFgVQgCgJAAgMQACgrAXgRQARgMAZAEQAWAEAVAPQASANAUAXQAMAMAWAaQAvA2A0ApIABAAIAQgGQBHgTAshnQAYg6gHgmQgDgRgMgYIgVgoQgZg4AHg/QAIhAAmgwQAmgvA8gWQA7gWA8AMQAkAHAeAUQAgAUAQAfQAeA3gVBLQgNAugtBJQgSAcgGAPQgMAYgCAWQgDAsAlA7QAdAuAdAXQArAgArgHIANgCIANAAIAEABQAtg0AngQQAcgMAeAFQAgAEASAVQAdAggJA/QgFAigNAfQgGARgKAFQgEAHgGAGQgEAFgaASQgOALgJADIgSAUIgTASIgMANQgIAJgOAKQgOAMgLACIgVAPQgdAUg5AgQgnAXgPAGIibA7QgQAGgKABQgKACgJgDQgDADgFABQgIADgKAAQgQAAgXgHg");
	var mask_graphics_3 = new cjs.Graphics().p("AmGE0QhLgFhTgMQhAgJgugMQg6gOgugWQgwgXgWgeQgOgTgDgWQgEgYAKgTQAKgWAagMQAXgLAdgCQA0gEBFAXQBPAdAnANQB8ArChAHQAsACA4AAQANgHANgOQAyg7AIhhQADglgEgvQgCgagHg7QgEggABgTQACgcANgTQAQgWAegIQAbgIAgAFQAxAIAZAbQAXAYAFAnQAEAcgHAqIgRBVQgLA0gBAhQAAAbADAnQACAbAGAMQADAHAKALQCWgNBhgTQC5gjCFhMQAigTASgFQAhgJAWAQQAWAPADAiQAFA3gqA0QgdAkg8AkQgvAcgkAOQgzAThCAJQgoAFhSAFIimAIQjVALhkACIhTABQh+AAhpgJg");
	var mask_graphics_5 = new cjs.Graphics().p("AAMEyQgUgDgfgMIg/gXQhHgbgegUQg2glgOgyQgJghANgXQAIgPARgHQAQgHAQAFQALADAMAKIAVARQAdAXAwALIBWAOIAhAGQATACAPAAQAWAAAlgIQAegHBAgTQA9gTAhgHQAcgGAPAFQASAGAHAVQAHAUgGAUQgLAfgrAaQgbARglAPQgXAJgsAPQgkAMgTABIgXAAQgOAAgJAEQgHADgJAHIgQAMQgPAJgVAAIgOgBgAndBtQgMgDgLgKQgKgJgEgKQgDgLAGgMQAGgMAMgEQAOgEATAHQAVAIAIALQANARgJAQQgGAKgQAFQgJACgIAAQgGAAgFgBgAHpBjQgLgKABgPQABgMAIgHQAKgKARABQALACAJAIQAJAIAAALQABANgKAJQgIAIgOABIgEAAQgLAAgJgHgArKBTQgSgEgQgMIgSgPQgTgRgMgNQgJgKgEgIIgFgNQgDgEgFgEIgIgIQgEgFgHgSQgFgPAAgKQABgJAHgLQAIgKAJgEQASgJAcAOQAOAGALAHIAOAJIALADIALADQAMAFAMAOQAdAeAMAUQAIAMADAMQAFAWgLATQgGAKgJAHQgOAJgSAAQgKAAgMgDgAAIBDQgOgCgGgNQgDgHgBgPQAAgWABgHQAFgQAKgIQAFgEAHgCQAIgBAGADQALAGADAOQABAFgBAJIgBAVQgCAWgGAHQgIAKgMAAIgDAAgAJ9AwQgNgJgDgRQgEgQAHgOIAHgPIAEgNQAEgJALgJIAngXIATgMIAfgVQANgHANgBQAUgCAiAQQARAKAGAJQAIALgDAQQgCANgJANIgnArQgKAMgJAGQgKAGgUAEIgzAMQgXAEgIAAQgSAAgLgHgAgHiOQgGgKgCgSQgBgXACgUIADgbIAGgiQACgQAGgIQAJgKAOADQAOAEADANQACAHgCALIgDARQABAGAFAQQAMAmgOAlQgJAcgTAAIgBAAQgOAAgIgOg");
	var mask_graphics_7 = new cjs.Graphics().p("AAVFLQgOgBgWgIIglgNQgRgEgGgHQgEgFAAgIQABgIAGgEIAJgIIACgGIACgHQAFgNAYgEQARgEAKAEIAOAIQAHACAKgBIAigDQASgBAIgCIASgJQARgIANAAQATAAAJAMQAKALgCAQQgCAMgKAPQgKALgMAHQgKAGgYAHQgZAIgQADQgPADgNAAIgOgBgApTCQQgLgEgFgKQgGgKAEgLQACgIAJgGQAIgFAKgBQAQgBAJAMQAHAHgBALQAAAKgGAIQgHAHgKADIgIABQgGAAgFgDgAJSB+QgGgEgCgHQgFgLAFgLQADgHAIgEQALgFALAEQANAEAFALQAFANgJALQgJALgOAAIgCAAQgIAAgGgFgAAAAkQgKgKADgOQACgIAFgEQAFgGAIgBQAJgCAKAGQAIAFADAJQACAKgFAJQgGAKgJACIgIABQgKAAgHgHgAsmACQgdgNgagTQgngcgFgfQgDgUAJgSQAMgTAQAAQAIABAIAGIAOANQARAPAEAGQADAGADAJIAFAPQAHAUASAQQAPANACAGQAEAIgFAJQgFAIgJACIgEAAQgIAAgMgFgAMigGQgJgGgBgKQgBgQAVgUIAWgWQAKgMAKgFQALgGAMABQANABAIAHQAJAJAAANQAAANgJAHQgLAFgEAEIgEAIIgEAHQgEAGgLAEIgTAHQgNAIgIABIgFABQgHAAgGgFgAAMkCQgFgFgCgIIAAgMIACgMIABgDIAAgEQgCgNAIgJQAFgFANgCIAIABQANABAFAOQAEANgJALIgEAEQABAGgBAHQgCAKgEAGQgGAHgJABQgJAAgHgIg");
	var mask_graphics_9 = new cjs.Graphics().p("AAFFYQgPgBgLgIQgNgKAAgOQAAgLAJgIQAIgGAQgCIAXgDQAUgDAKAEQAIAEAFAIQAEAJgBAIQgEAWgdAIQgLADgLAAIgIAAgAp4BnQgGgGACgJQACgIAGgEQAEgDAEABQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAJABAFAFQAGAGgCAJIgCAIQgFAHgKABIgCAAQgIAAgFgHgAJ4BqQgFgBgFgFQgDgGAAgGQAAgGADgFQAFgFAFgBIAGgCQAMADADAHQADAEAAAFQAAAFgDAEQgCAGgHACQgDACgEAAIgFgBgAAEAGQgLgFAAgGQgCgEACgDIACgHQAFgEAEAAQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAGABADADQAIAGgEAMQgBADgCACIgGADIgEACgAOAhQQgKgDgBgMQAAgEABgEQAFgLAKABIABAAIABAAIgBgBIABAAIADgDQAGgGAHAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBgBQAEACAIAAQAIACAAAFIgCAIIABAFIgCAHQgDAJgIACQgEACgHgCQgEADgEABIgFABIgGgBgAuNhwQgKgDgHgNIgJgXQgFgJAAgFQABgHAFgFQAFgFAHABQAHgBAKAGQASAJAHAPQAEAIgBAKQAAAJgGAHQgFAFgIACIgFAAQgEAAgEgBgAAMk5QgGgEABgIQgBgFAEgHQAEgFAGAAIADgBQAGAAAGAEQAEAEABAGQABAGgDAFQgDAGgFACQgEACgDAAQgGAAgFgFg");
	var mask_graphics_11 = new cjs.Graphics().p("AAMENQgLgEgBgLQgDgMAHgIQAGgHAKAAQAMAAAGAKQAGAKgFALQgFALgNABQgFAAgEgBgAOpi+IgEgDQgDgCgBgFQgBgCABgDIACgGQAFgGAGACIAAgBQAGABADADQAEAEAAAGIgBAEIgDAFIgEADIgFABIgFgBgAuxj3IgFgCIgDgGIgBgDIABgCIACgFQAEgEAFABIAAgBIAHAEQADADABAEQAAAEgDADQgCADgEABIgDABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:38.2,y:59.925}).wait(1).to({graphics:mask_graphics_1,x:38.5098,y:71.0993}).wait(2).to({graphics:mask_graphics_3,x:35.1926,y:95.7172}).wait(2).to({graphics:mask_graphics_5,x:36.9277,y:103.5813}).wait(2).to({graphics:mask_graphics_7,x:37.489,y:97.2446}).wait(2).to({graphics:mask_graphics_9,x:39,y:96.8705}).wait(2).to({graphics:mask_graphics_11,x:39.375,y:105.375}).wait(2).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(43.45,97.1,11.775,11.775,0,0,0,0.6,0.6);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({_off:true},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,0,191,134.3);


(lib.page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(420.05,302.4,0.1185,0.1185);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// Layer_6
	this.leaf_31 = new lib.leaf_15();
	this.leaf_31.name = "leaf_31";
	this.leaf_31.setTransform(833.15,1919.7);

	this.leaf_30 = new lib.leaf_14();
	this.leaf_30.name = "leaf_30";
	this.leaf_30.setTransform(625.95,1978.15);

	this.leaf_29 = new lib.leaf_13();
	this.leaf_29.name = "leaf_29";
	this.leaf_29.setTransform(420.45,1813.6);

	this.leaf_28 = new lib.leaf_12();
	this.leaf_28.name = "leaf_28";
	this.leaf_28.setTransform(95.75,1839.9);

	this.leaf_27 = new lib.leaf_11();
	this.leaf_27.name = "leaf_27";
	this.leaf_27.setTransform(826.65,1702.65);

	this.leaf_26 = new lib.leaf_10();
	this.leaf_26.name = "leaf_26";
	this.leaf_26.setTransform(647.1,1739.7);

	this.leaf_25 = new lib.leaf_9();
	this.leaf_25.name = "leaf_25";
	this.leaf_25.setTransform(464.05,1708);

	this.leaf_24 = new lib.leaf_8();
	this.leaf_24.name = "leaf_24";
	this.leaf_24.setTransform(43.3,1623.7);

	this.leaf_23 = new lib.leaf_7();
	this.leaf_23.name = "leaf_23";
	this.leaf_23.setTransform(785.85,1457.1);

	this.leaf_22 = new lib.leaf_6();
	this.leaf_22.name = "leaf_22";
	this.leaf_22.setTransform(690.6,1520.9);

	this.leaf_21 = new lib.leaf_5();
	this.leaf_21.name = "leaf_21";
	this.leaf_21.setTransform(314.7,1422.5);

	this.leaf_20 = new lib.leaf_4();
	this.leaf_20.name = "leaf_20";
	this.leaf_20.setTransform(140.85,1432.85);

	this.leaf_19 = new lib.leaf_3();
	this.leaf_19.name = "leaf_19";
	this.leaf_19.setTransform(900.2,1234.05);

	this.leaf_17 = new lib.leaf_2();
	this.leaf_17.name = "leaf_17";
	this.leaf_17.setTransform(443.5,1275.5);

	this.leaf_18 = new lib.leaf_1();
	this.leaf_18.name = "leaf_18";
	this.leaf_18.setTransform(617.15,1086.15);

	this.leaf_16 = new lib.leaf_0();
	this.leaf_16.name = "leaf_16";
	this.leaf_16.setTransform(194.5,1124.5);

	this.leaf_15 = new lib.leaf_15();
	this.leaf_15.name = "leaf_15";
	this.leaf_15.setTransform(833.15,887.9);

	this.leaf_14 = new lib.leaf_14();
	this.leaf_14.name = "leaf_14";
	this.leaf_14.setTransform(625.95,946.35);

	this.leaf_13 = new lib.leaf_13();
	this.leaf_13.name = "leaf_13";
	this.leaf_13.setTransform(420.45,781.8);

	this.leaf_12 = new lib.leaf_12();
	this.leaf_12.name = "leaf_12";
	this.leaf_12.setTransform(95.75,808.1);

	this.leaf_11 = new lib.leaf_11();
	this.leaf_11.name = "leaf_11";
	this.leaf_11.setTransform(826.65,670.85);

	this.leaf_10 = new lib.leaf_10();
	this.leaf_10.name = "leaf_10";
	this.leaf_10.setTransform(647.1,707.9);

	this.leaf_9 = new lib.leaf_9();
	this.leaf_9.name = "leaf_9";
	this.leaf_9.setTransform(464.05,676.2);

	this.leaf_8 = new lib.leaf_8();
	this.leaf_8.name = "leaf_8";
	this.leaf_8.setTransform(43.3,591.9);

	this.leaf_7 = new lib.leaf_7();
	this.leaf_7.name = "leaf_7";
	this.leaf_7.setTransform(785.85,425.3);

	this.leaf_6 = new lib.leaf_6();
	this.leaf_6.name = "leaf_6";
	this.leaf_6.setTransform(690.6,489.1);

	this.leaf_5 = new lib.leaf_5();
	this.leaf_5.name = "leaf_5";
	this.leaf_5.setTransform(314.7,390.7);

	this.leaf_4 = new lib.leaf_4();
	this.leaf_4.name = "leaf_4";
	this.leaf_4.setTransform(140.85,401.05);

	this.leaf_3 = new lib.leaf_3();
	this.leaf_3.name = "leaf_3";
	this.leaf_3.setTransform(900.2,202.25);

	this.leaf_2 = new lib.leaf_2();
	this.leaf_2.name = "leaf_2";
	this.leaf_2.setTransform(443.5,243.7);

	this.leaf_1 = new lib.leaf_1();
	this.leaf_1.name = "leaf_1";
	this.leaf_1.setTransform(617.15,54.35);

	this.leaf_0 = new lib.leaf_0();
	this.leaf_0.name = "leaf_0";
	this.leaf_0.setTransform(194.5,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leaf_0},{t:this.leaf_1},{t:this.leaf_2},{t:this.leaf_3},{t:this.leaf_4},{t:this.leaf_5},{t:this.leaf_6},{t:this.leaf_7},{t:this.leaf_8},{t:this.leaf_9},{t:this.leaf_10},{t:this.leaf_11},{t:this.leaf_12},{t:this.leaf_13},{t:this.leaf_14},{t:this.leaf_15},{t:this.leaf_16},{t:this.leaf_18},{t:this.leaf_17},{t:this.leaf_19},{t:this.leaf_20},{t:this.leaf_21},{t:this.leaf_22},{t:this.leaf_23},{t:this.leaf_24},{t:this.leaf_25},{t:this.leaf_26},{t:this.leaf_27},{t:this.leaf_28},{t:this.leaf_29},{t:this.leaf_30},{t:this.leaf_31}]}).wait(1));

	// Layer_1
	this.instance = new lib.leaf_17();
	this.instance.setTransform(991.7,1354.6);

	this.instance_1 = new lib.leaf_16();
	this.instance_1.setTransform(0,1345.3);

	this.instance_2 = new lib.leaf_17();
	this.instance_2.setTransform(991.7,322.8);

	this.instance_3 = new lib.leaf_16();
	this.instance_3.setTransform(0,313.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_8
	this.instance_4 = new lib.leaf_65();
	this.instance_4.setTransform(920.7,1904.75);

	this.instance_5 = new lib.leaf_64();
	this.instance_5.setTransform(740.15,1924);

	this.instance_6 = new lib.leaf_63();
	this.instance_6.setTransform(691.5,1995.6);

	this.instance_7 = new lib.leaf_62();
	this.instance_7.setTransform(465,1893.9);

	this.instance_8 = new lib.leaf_61();
	this.instance_8.setTransform(168,1876.7);

	this.instance_9 = new lib.leaf_59();
	this.instance_9.setTransform(0,1914.7);

	this.instance_10 = new lib.leaf_58();
	this.instance_10.setTransform(0,1821.5);

	this.instance_11 = new lib.leaf_57();
	this.instance_11.setTransform(908.85,1758.4);

	this.instance_12 = new lib.leaf_56();
	this.instance_12.setTransform(573,1759.8);

	this.instance_13 = new lib.leaf_55();
	this.instance_13.setTransform(528.95,1752.75);

	this.instance_14 = new lib.leaf_54();
	this.instance_14.setTransform(67.4,1727.8);

	this.instance_15 = new lib.leaf_53();
	this.instance_15.setTransform(0,1764.95);

	this.instance_16 = new lib.leaf_52();
	this.instance_16.setTransform(900.5,1554.1);

	this.instance_17 = new lib.leaf_51();
	this.instance_17.setTransform(548.05,1622.05);

	this.instance_18 = new lib.leaf_50();
	this.instance_18.setTransform(368.85,1665.2);

	this.instance_19 = new lib.leaf_49();
	this.instance_19.setTransform(71,1573.15);

	this.instance_20 = new lib.leaf_48();
	this.instance_20.setTransform(0,1558.6);

	this.instance_21 = new lib.leaf_47();
	this.instance_21.setTransform(90.8,1539.85);

	this.instance_22 = new lib.leaf_46();
	this.instance_22.setTransform(372.1,1538.3);

	this.instance_23 = new lib.leaf_45();
	this.instance_23.setTransform(261.2,1525.05);

	this.instance_24 = new lib.leaf_44();
	this.instance_24.setTransform(74.8,1487.2);

	this.instance_25 = new lib.leaf_43();
	this.instance_25.setTransform(0,1496.15);

	this.instance_26 = new lib.leaf_42();
	this.instance_26.setTransform(954.35,1465);

	this.instance_27 = new lib.leaf_41();
	this.instance_27.setTransform(714,1521.8);

	this.instance_28 = new lib.leaf_40();
	this.instance_28.setTransform(644.5,1521.6);

	this.instance_29 = new lib.leaf_39();
	this.instance_29.setTransform(584.85,1504.05);

	this.instance_30 = new lib.leaf_38();
	this.instance_30.setTransform(490.25,1482.05);

	this.instance_31 = new lib.leaf_37();
	this.instance_31.setTransform(384.2,1422.9);

	this.instance_32 = new lib.leaf_36();
	this.instance_32.setTransform(272.05,1423.35);

	this.instance_33 = new lib.leaf_35();
	this.instance_33.setTransform(91.8,1435.6);

	this.instance_34 = new lib.leaf_34();
	this.instance_34.setTransform(40.55,1346.9);

	this.instance_35 = new lib.leaf_33();
	this.instance_35.setTransform(684.4,1436.6);

	this.instance_36 = new lib.leaf_32();
	this.instance_36.setTransform(720.85,1369.25);

	this.instance_37 = new lib.leaf_31();
	this.instance_37.setTransform(865.65,1359.6);

	this.instance_38 = new lib.leaf_30();
	this.instance_38.setTransform(956.75,1244.4);

	this.instance_39 = new lib.leaf_29();
	this.instance_39.setTransform(399.65,1328.3);

	this.instance_40 = new lib.leaf_28();
	this.instance_40.setTransform(438.5,1252.15);

	this.instance_41 = new lib.leaf_27();
	this.instance_41.setTransform(406.6,1252.8);

	this.instance_42 = new lib.leaf_26();
	this.instance_42.setTransform(292.15,1304.75);

	this.instance_43 = new lib.leaf_25();
	this.instance_43.setTransform(0,1296);

	this.instance_44 = new lib.leaf_24();
	this.instance_44.setTransform(26.8,1227.9);

	this.instance_45 = new lib.leaf_23();
	this.instance_45.setTransform(84.25,1125.2);

	this.instance_46 = new lib.leaf_22();
	this.instance_46.setTransform(0,1132.95);

	this.instance_47 = new lib.leaf_21();
	this.instance_47.setTransform(925,1128.5);

	this.instance_48 = new lib.leaf_20();
	this.instance_48.setTransform(395.8,1091.85);

	this.instance_49 = new lib.leaf_19();
	this.instance_49.setTransform(616.65,1065.05);

	this.instance_50 = new lib.leaf_18();
	this.instance_50.setTransform(435.75,1045.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Layer_2
	this.instance_51 = new lib.leaf_65();
	this.instance_51.setTransform(920.7,872.75);

	this.instance_52 = new lib.leaf_64();
	this.instance_52.setTransform(740.15,892);

	this.instance_53 = new lib.leaf_63();
	this.instance_53.setTransform(691.5,963.6);

	this.instance_54 = new lib.leaf_62();
	this.instance_54.setTransform(465,861.9);

	this.instance_55 = new lib.leaf_61();
	this.instance_55.setTransform(168,844.7);

	this.instance_56 = new lib.leaf_60();
	this.instance_56.setTransform(0,1022);

	this.instance_57 = new lib.leaf_59();
	this.instance_57.setTransform(0,882.7);

	this.instance_58 = new lib.leaf_58();
	this.instance_58.setTransform(0,789.5);

	this.instance_59 = new lib.leaf_57();
	this.instance_59.setTransform(908.85,726.4);

	this.instance_60 = new lib.leaf_56();
	this.instance_60.setTransform(573,727.8);

	this.instance_61 = new lib.leaf_55();
	this.instance_61.setTransform(528.95,720.75);

	this.instance_62 = new lib.leaf_54();
	this.instance_62.setTransform(67.4,695.8);

	this.instance_63 = new lib.leaf_53();
	this.instance_63.setTransform(0,732.95);

	this.instance_64 = new lib.leaf_52();
	this.instance_64.setTransform(900.5,522.1);

	this.instance_65 = new lib.leaf_51();
	this.instance_65.setTransform(548.05,590.05);

	this.instance_66 = new lib.leaf_50();
	this.instance_66.setTransform(368.85,633.2);

	this.instance_67 = new lib.leaf_49();
	this.instance_67.setTransform(111.1,575.05,1,1,0,0,0,40.1,33.9);

	this.instance_68 = new lib.leaf_48();
	this.instance_68.setTransform(0,526.6);

	this.instance_69 = new lib.leaf_47();
	this.instance_69.setTransform(90.8,507.85);

	this.instance_70 = new lib.leaf_46();
	this.instance_70.setTransform(372.1,506.3);

	this.instance_71 = new lib.leaf_45();
	this.instance_71.setTransform(261.2,493.05);

	this.instance_72 = new lib.leaf_44();
	this.instance_72.setTransform(74.8,455.2);

	this.instance_73 = new lib.leaf_43();
	this.instance_73.setTransform(0,464.15);

	this.instance_74 = new lib.leaf_42();
	this.instance_74.setTransform(954.35,433);

	this.instance_75 = new lib.leaf_41();
	this.instance_75.setTransform(714,489.8);

	this.instance_76 = new lib.leaf_40();
	this.instance_76.setTransform(644.5,489.6);

	this.instance_77 = new lib.leaf_39();
	this.instance_77.setTransform(584.85,472.05);

	this.instance_78 = new lib.leaf_38();
	this.instance_78.setTransform(490.25,450.05);

	this.instance_79 = new lib.leaf_37();
	this.instance_79.setTransform(384.2,390.9);

	this.instance_80 = new lib.leaf_36();
	this.instance_80.setTransform(272.05,391.35);

	this.instance_81 = new lib.leaf_35();
	this.instance_81.setTransform(91.8,403.6);

	this.instance_82 = new lib.leaf_34();
	this.instance_82.setTransform(40.55,314.9);

	this.instance_83 = new lib.leaf_33();
	this.instance_83.setTransform(684.4,404.6);

	this.instance_84 = new lib.leaf_32();
	this.instance_84.setTransform(720.85,337.25);

	this.instance_85 = new lib.leaf_31();
	this.instance_85.setTransform(865.65,327.6);

	this.instance_86 = new lib.leaf_30();
	this.instance_86.setTransform(956.75,212.4);

	this.instance_87 = new lib.leaf_29();
	this.instance_87.setTransform(399.65,296.3);

	this.instance_88 = new lib.leaf_28();
	this.instance_88.setTransform(438.5,220.15);

	this.instance_89 = new lib.leaf_27();
	this.instance_89.setTransform(406.6,220.8);

	this.instance_90 = new lib.leaf_26();
	this.instance_90.setTransform(292.15,272.75);

	this.instance_91 = new lib.leaf_25();
	this.instance_91.setTransform(0,264);

	this.instance_92 = new lib.leaf_24();
	this.instance_92.setTransform(26.8,195.9);

	this.instance_93 = new lib.leaf_23();
	this.instance_93.setTransform(84.25,93.2);

	this.instance_94 = new lib.leaf_22();
	this.instance_94.setTransform(0,100.95);

	this.instance_95 = new lib.leaf_21();
	this.instance_95.setTransform(925,96.5);

	this.instance_96 = new lib.leaf_20();
	this.instance_96.setTransform(395.8,59.85);

	this.instance_97 = new lib.leaf_19();
	this.instance_97.setTransform(616.65,33.05);

	this.instance_98 = new lib.leaf_18();
	this.instance_98.setTransform(435.75,13.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51}]}).wait(1));

	// Layer_3
	this.instance_99 = new lib.CachedBmp_1();
	this.instance_99.setTransform(0,0,0.2687,0.2687);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(1));

	// Layer_4
	this.instance_100 = new lib.CachedBmp_2();
	this.instance_100.setTransform(0,0,0.2687,0.2687);

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243D30").s().p("EBLzChOIk0AAIk0AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIkzAAIk0AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk1AAIkzAAIk0AAIkzAAIk0AAIk1AAIkzAAIigAAIAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk1IAAkzIAAk0IAAkzIAAk1IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAigIAAkyIAAk0IAAk1IAAkzIAAk0IAAk0IAAkzIAAk1IAAkzIAAk0IAAk0IAAkzIAAk1IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAigIE0AAID4AAIA8AAIEzAAIE0AAIE0AAIAcAAIEYAAIE0AAIEzAAIE0AAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAIEzAAIEzAAIE0AAIE1AAIEzAAIE0AAIEzAAIE0AAIE1AAIEzAAIE0AAIE0AAIEzAAIE1AAIE0AAIEzAAIE0AAICgAAIAAE0IAAE0IAAEzIAAE0IAAE1IAAEzIAAE0IAAEzIAAE0IAAE1IAAEzIAAE0IAAE0IAAEzIAAE1IAAE0IAAEzIAAE0IAAEzIAAE1IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAACfIAAE0IAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAACgIk0AAg");
	this.shape.setTransform(515.9,1031.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.page, new cjs.Rectangle(0,-24.2,1049.7,2154.6), null);


// stage content:
(lib.elijah_gaskins_geller__project_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.page = new lib.page();
	this.page.name = "page";
	this.page.setTransform(711.2,714.35,1.8609,1.8608,0,0,0,383.9,383.9);

	this.timeline.addTween(cjs.Tween.get(this.page).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(956.8,339,993.3,3625.3);
// library properties:
lib.properties = {
	id: '854620DD4A16F742838C9B46504B8515',
	width: 1920,
	height: 768,
	fps: 30,
	color: "#243D30",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['854620DD4A16F742838C9B46504B8515'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;