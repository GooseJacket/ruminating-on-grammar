class prefix{
	constructor(tense){
  	const dict = [0];
  	this.tense = tense;
    this.color = "";
  }
  getTense(d){
 		var name = "";
    if(this.tense === "perfect"){name="F";this.color="pink";}
    else if(this.tense === "ing"){name="G";this.color="lime";}
    else if(this.tense === "base"){name="B";this.color="cyan";}
    else if(this.tense === "oper"){name="[";this.color="gray";}
    else if(this.tense === "main"){name="]";this.color="grey";}
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
    this.pre = new prefix(tense);
    this.suf = new prefix(nextTense);
    
    this.block.appendChild(this.pre.getShape());
    this.block.style.backgroundColor = this.pre.color;
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

new VerbBlock(vp, "could", "oper", "base");
new VerbBlock(vp, "have", "base", "perfect");
new VerbBlock(vp, "been", "perfect", "ing");
new VerbBlock(vp, "being", "ing", "perfect");
new VerbBlock(vp, "given", "perfect", "main");

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


