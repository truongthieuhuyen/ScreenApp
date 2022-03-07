/* Handler see password */
var state = false;
function toggle(id) {
	if (state) {
		document.getElementById("pass-" + id).setAttribute("type", "password");
		document.getElementById("img-" + id).src = "Images/Symbols/blindfold.png";
		state = false
	} else {
		document.getElementById("pass-" + id).setAttribute("type", "text");
		document.getElementById("img-" + id).src = "Images/Symbols/Read.png";
		state = true;
	}
}

/* Change Password */
function save() {
	alert("Password has changed");
}

/* Sign out */

// $('#exampleModal').on('show.bs.modal', event => {
// 	var button = $(event.relatedTarget);
// 	var modal = $(this);
// 	// Use above variables to manipulate the DOM

// });