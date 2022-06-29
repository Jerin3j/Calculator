alert("Dont type a operator twice 'Not working'\n Calculator by jerin3j")
function btnClick(val){

    document.getElementById("value-show").value+=val;

}//                                              By Jerin jj
                           
function clr(){
    document.getElementById("value-show").value="";
} 
function equalClick(){
        var text=document.getElementById("value-show").value
        var result=eval(text)
        document.getElementById("value-show").value=result
}
function forwardClick(){
    const valu=document.getElementById("value-show")
    valu.value= valu.value.slice(0, -1)
    

}