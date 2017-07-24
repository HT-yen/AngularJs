var $sub = document.getElementById("submit");
var $show = document.getElementById("show");
var $txt = document.getElementById('nametxt');

class Member
{
	protected $newMem;

	constructor(name: string){
		this.setContent(name);
		this.createMember(true);
	}

	setContent(name: String)
	{
		this.$newMem = document.createElement('li');
		this.$newMem.className ="list-group-item";
		var $span = document.createElement('span');
		$span.innerHTML = name;
		this.$newMem.appendChild($span);
	}

	createMember(canDel: boolean = true){
		var $del = document.createElement('button');
		$del.className = `btn btn-danger btn-xs pull-right`;
		$del.innerHTML = `delete`;
		this.$newMem.appendChild($del);
		$show.appendChild(this.$newMem);
		/*
		$del.addEventListener(`click`, function(){
        	var $parentDel = this.parentNode;
        	$show.removeChild($parentDel);
    	});
    	*/
    	if (canDel) {
    		$del.addEventListener(`click`, (e)=>{
        		var $parentDel = e.target.parentNode;
        		$show.removeChild($parentDel);
    		});
    	}
   	}
}

$sub.addEventListener('click', function() {
	let $name: any = $txt.value;
	let $newmember = new Member($name);
});
	
