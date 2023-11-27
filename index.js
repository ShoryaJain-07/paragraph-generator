const input = document.getElementById("numOfwords");

const button = document.getElementById("btn");

const container=document.querySelector(".container");

let num;

const generateWord=(n)=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";

    for(let i=0;i<n;i++)
    {
        const random= (Math.random()*25).toFixed(0);
        text+=letters[random];
        
    }

    return text;
}
const getData =()=>{
    num=Number(input.value);

    const para = document.createElement("p");

    let data="";

    for(let i=0;i<num; ++i)
    {
        const rand=(Math.random()*15).toFixed(0);
        data+=generateWord(rand);
        data+=" ";
    }
    
    data=data.toLowerCase();
    para.innerText=data;
    para.setAttribute("class","paras");
    container.append(para);
};
button.onclick=getData;

