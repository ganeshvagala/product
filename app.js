const search=()=>{
    const searchchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("search-item")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")


    for(var i=0; i<pname.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];
        if(match){
            let texvalue=match.textContent || match.innerHTML

            if(texvalue.toUpperCase().toUpperCase().indexOf(searchchbox)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}