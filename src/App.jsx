import React from "react";

function App(){
let curdate=new Date();
curdate = curdate.getHours();
let greeting = '';
const css ={ };

if(curdate >=1 && curdate <12){
  greeting= ' Good Morning..'
  css.color = "green"
}else if (curdate>=12 && curdate<=19){
  greeting = " Good Afternoon..";
  css.color = "orange"
} else{
  greeting = ' Good Night..';
  css.color = "blue"
}

return (
<>
<div className="bg">
<h1> hello,<span style={css}>{greeting}</span></h1>

</div>
</>

);
};

export default App;