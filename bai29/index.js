function myFriends(name,age,gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var dung = new myFriends('Dung',20,"Nữ");
console.log(dung);