window.onload = function(){
  let form = document.querySelector("form");
  form.onsubmit = function(e){
    e.preventDefault();
    const valueName = document.querySelector("#customerName").value;
    const valueLastName = document.querySelector("#customerLastName").value;
    document.querySelector("#message").innerText = valueName.toUpperCase();
    document.querySelector("#message2").innerText = valueLastName.toUpperCase();
    

    document.querySelector("#showMessage").removeAttribute("class");
    form.reset()


  }
}