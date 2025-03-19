class prefix{
	constructor(tense){
  	const dict = [0];
  	this.tense = tense;
  }
  getTense(d){
 		var name = "";
    var color = "";
    if(this.tense === "perfect"){name="F";color="pink";}
    else if(this.tense === "ing"){name="G";color="lime";}
    else if(this.tense === "base"){name="B";color="cyan";}
    else if(this.tense === "modal"){name="[";color="gray";}
    else if(this.tense === "main"){name="]";color="grey";}
    d.style.backgroundColor = color;
    d.innerHTML = name;
    return d;
  }
  getShape(){
  	this.div = document.createElement("div");
    this.div.style.width = "10px";
    this.div.style.display = "inline";
    this.div = this.getTense(this.div);
    return this.div;
  }
}
class VerbBlock{
  constructor(home, name, tense, nextTense){
		this.block = document.createElement("div");
    this.block.draggable = true;
    this.name = document.createElement("p");
    this.name.style.display = "inline";
    this.name.innerHTML = name;
    this.name.color = "blue"
    
    this.tense = tense;
    this.pre = new prefix(tense);
    this.suf = new prefix(nextTense);
    
    this.block.appendChild(this.pre.getShape());
    this.block.appendChild(this.name);
    this.block.appendChild(this.suf.getShape())
    home.appendChild(this.block);
  }
  
  canBeBefore(otherVB){
  	if(otherVB == null){return false;}
  	return otherVB.tense === this.tense;
  }

}

var vp = document.getElementById("VP");

var a = new VerbBlock(vp, "could", "modal", "base");
var b = new VerbBlock(vp, "have", "base", "perfect");
var c = new VerbBlock(vp, "been", "perfect", "ing");
var d = new VerbBlock(vp, "being", "ing", "perfect");
var e = new VerbBlock(vp, "given", "perfect", "main");

