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
    else if(this.tense === "oper"){name=".";this.color="orange";}
    else if(this.tense === "main"){name=".";this.color="grey";}
    else if(this.tense === "past"){name=".";this.color="gray";}
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
class Verb{
	constructor(tenses){
  	this.tenses = tenses;
    //0-base, 1-past, 2-perfect, 3-progressive, 4-3POVPres, 5-1POVPres, 6-PluralPres
    this.currentTense; 
  }
  getTense(){
	  return this.currentTense;
  }
  setTense(newTenseIndex){
  	if(this.tenses.length > newTenseIndex){
  		this.currentTense = this.tenses[newTenseIndex];
      return this.currentTense;
    }
    else{
	    return null;
    }
  }
}

class VerbBlock{
  constructor(verb, name, tense, nextTense){
  	this.tenses = ["base", "past", "ing", "perfect"]; 
		this.block = document.createElement("div");
    this.block.draggable = true;
    //this.block.style.padding = "4px";
    this.block.style.backgroundColor = "purple";
    this.block.style.display = "inline";
    
    this.myVerb = verb;
    
    this.name = document.createElement("p");
    //this.name.style.color = "white";
    this.name.style.display = "inline";
    this.name.innerHTML = this.myVerb.setTense(this.tenses.indexOf(tense));
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


var could = new Verb(["could"])
var be = new Verb(["be", "was", "being", "been", "is"])
var have = new Verb(["have", "had", "having", "had", "has"])
var give = new Verb(["give", "gave", "giving", "given", "gives"])


VP.add(new VerbBlock(could, "could", "oper", "base"));
VP.add(new VerbBlock(have, "have", "base", "perfect"));
VP.add(new VerbBlock(be, "", "perfect", "ing"));
VP.add(new VerbBlock(be, "", "ing", "perfect"));
VP.add(new VerbBlock(give, "given", "perfect", "main"));

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

<div id="items" class="flex"></div>

<div id="VP"></div>

Make the phrase, "Could have been being given".

<div class="hi"></div>
*/
