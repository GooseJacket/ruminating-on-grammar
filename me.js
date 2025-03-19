class prefix{
	constructor(tense){
  	const dict = [0];
  	this.tense = tense;
    this.color = "";
  }
  getTense(d){
 		var name = "";
    if(this.tense === "perfect"){name="{";this.color="pink";}
    else if(this.tense === "ing"){name="(";this.color="lime";}
    else if(this.tense === "base"){name="[";this.color="cyan";}
    else if(this.tense === "oper"){name=".";this.color="gray";}
    else if(this.tense === "main"){name=".";this.color="grey";}
    d.style.backgroundColor = this.color;
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
    //this.block.style.padding = "4px";
    this.block.style.backgroundColor = "purple";
    this.block.style.display = "inline";
    this.name = document.createElement("p");
    //this.name.style.color = "white";
    this.name.style.display = "inline";
    this.name.innerHTML = name;
    this.name.color = "blue"
    
    this.tense = tense;
    this.nextTense = nextTense;
    this.pre = new prefix(tense);
    this.suf = new prefix(nextTense);
    
    this.block.appendChild(this.pre.getShape());
    this.block.style.backgroundColor = this.pre.color;
    this.block.appendChild(this.name);
    this.block.appendChild(this.suf.getShape());
    //this.block.appendChild(document.createElement("p"))
  }
  
  canBeAfter(otherVB){
  	if(otherVB == null){return false;}
  	return otherVB.nextTense === this.tense;
  }

}

class VerbPhrase{
	constructor(home){
  	this.block = document.createElement("div");
  	this.block.style.backgroundColor = "lavender";
    this.block.style.padding = "3px";
    //this.block.style.display = "inline";
    home.appendChild(this.block);
    this.last = null;
    
  }
  add(vp){
  	if(this.last == null){
    	this.block.appendChild(vp.block);
      this.last = vp;
    }
  	else if(vp.canBeAfter(this.last)){
      this.connect = document.createElement("p");
      this.connect.innerHTML = "-"
      this.connect.style.display = "inline";
    	this.block.appendChild(this.connect);
  		this.block.appendChild(vp.block);
      this.last = vp;
    }
  }
}

var vp = document.getElementById("VP");

VP = new VerbPhrase(vp);

VP.add(new VerbBlock(vp, "could", "oper", "base"));
VP.add(new VerbBlock(vp, "have", "base", "perfect"));
VP.add(new VerbBlock(vp, "been", "perfect", "ing"));
VP.add(new VerbBlock(vp, "being", "ing", "perfect"));
VP.add(new VerbBlock(vp, "given", "perfect", "main"));

var it = document.getElementById("items");
var it = document.getElementById("items");
var it = document.getElementById("items");
var it = document.getElementById("items");

new VerbBlock(it, "have", "base", "base");
new VerbBlock(it, "had", "perfect", "base");
new VerbBlock(it, "having", "ing", "base");

new VerbBlock(it, "be", "base", "base");
new VerbBlock(it, "am/is/are", "oper", "ing");
new VerbBlock(it, "am/is/are", "oper", "perfect");
new VerbBlock(it, "am/is/are", "oper", "main");
new VerbBlock(it, "was/were", "oper", "ing");
new VerbBlock(it, "was/were", "oper", "perfect");
new VerbBlock(it, "was/were", "oper", "main");
new VerbBlock(it, "been", "perfect", "ing");
new VerbBlock(it, "been", "perfect", "perfect");
new VerbBlock(it, "been", "perfect", "main");
new VerbBlock(it, "being", "ing", "perfect");
new VerbBlock(it, "being", "ing", "main");

/*
.flex {
  background-color: navy !important;
  grid-template-columns: auto auto auto;
  padding = 10px;
  display: inline-grid;
}
*/
