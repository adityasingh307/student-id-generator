function getDetails() {

    const name_val = document.getElementById("form-name").value;
    const college_val = document.getElementById("form-college").value;
    const address_val = document.getElementById("form-location").value;
    const fileupload = document.getElementById("file_image").files[0].name;
    document.getElementById("user-name").innerHTML = name_val;
    document.getElementById("college-name").innerHTML = college_val;
    document.getElementById("user-location").innerHTML = address_val;
    document.getElementById("id-user-photo").style.backgroundImage = "url('photo.jpg')";
    document.getElementById("id-container").style.display = "flex";



}