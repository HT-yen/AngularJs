var $sub = document.getElementById("submit");
var $show = document.getElementById("show");
var $txt = document.getElementById('nametxt');
var Member = (function () {
    function Member(name) {
        this.setContent(name);
        this.createMember(true);
    }
    Member.prototype.setContent = function (name) {
        this.$newMem = document.createElement('li');
        this.$newMem.className = "list-group-item";
        var $span = document.createElement('span');
        $span.innerHTML = name;
        this.$newMem.appendChild($span);
    };
    Member.prototype.createMember = function (canDel) {
        if (canDel === void 0) { canDel = true; }
        var $del = document.createElement('button');
        $del.className = "btn btn-danger btn-xs pull-right";
        $del.innerHTML = "delete";
        this.$newMem.appendChild($del);
        $show.appendChild(this.$newMem);
        /*
        $del.addEventListener(`click`, function(){
            var $parentDel = this.parentNode;
            $show.removeChild($parentDel);
        });
        */
        if (canDel) {
            $del.addEventListener("click", function (e) {
                var $parentDel = e.target.parentNode;
                $show.removeChild($parentDel);
            });
        }
    };
    return Member;
}());
$sub.addEventListener('click', function () {
    var $name = $txt.value;
    var $newmember = new Member($name);
});
