var imageInput = document.getElementById("imgInput");
var previewImg = document.getElementById("previewImg");

window.onload = function () {
  var savedImg = localStorage.getItem("imgData");
  if (savedImg) {
    previewImg.src = savedImg;
    previewImg.style.display = "block";
  }
};

imageInput.addEventListener("change", function () {
  var file = imageInput.files[0];
  if (file) {
    var reader = new FileReader();
    console.log(reader);
    reader.onload = function (e) {
      // console.log("event",e.target.result);
      previewImg.src = e.target.result;
      previewImg.style.display = "block";
      localStorage.setItem("imgData", e.target.result);
    };
  }
  reader.readAsDataURL(file);
});
