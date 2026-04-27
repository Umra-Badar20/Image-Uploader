var imageInput = document.getElementById("imgInput")
var previewImg =  document.getElementById("previewImg")

imageInput.addEventListener("change",function(){
    var file = imageInput.files[0] 
    if(file){
        var reader= new FileReader()
        console.log(reader);
        reader.onload = function(e){
            // console.log("event",e.target.result);
            previewImg.src = e.target.result
            previewImg.style.display = "block"
            
        }
    }   
    reader.readAsDataURL(file)    
})