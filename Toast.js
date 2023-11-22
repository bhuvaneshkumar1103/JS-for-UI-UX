// This styleAttribute is used as key value for status parameter in fire function below, based upon key the color and icon of toast changes.
const styleAttribute={
		"success":{
			borderColor:"#16db65",
			icon:"fa-check-circle",
			background:"#ddf8c3"
		},
		"error":{
			borderColor:"#f21b3f",
			icon:"fa-times-circle",
			background:"#f3cfce"
		},
		"info":{
			borderColor:"#1be7ff",
			icon:"fa-info-circle",
			background:"#daf5fe"
		},
		"warning":{
			borderColor:"#f9a620",
			icon:"fa-warning",
			background:"#fcf5c7"
		}
}
//use Toast.fire("success","your custom message",2000(optional));
const Toast = {
	fire:function(status,message,duration=3000){
		const toast = document.createElement("div");
		toast.style.cssText = `
		      z-index:100;
     	              height:20px;
		      position: fixed;
		      top: 20px;
		      left: 50%;
		      transform: translateX(250%);
		      background-color: ${styleAttribute[status].background};
		      color: #333;
		      padding: 15px 25px;
		      border-radius: 5px;
		      border-left:6px solid ${styleAttribute[status].borderColor};
		      display: flex;
		      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
		      align-items:center;
		      font-size:20px;
		      font-weight:600;
		      animation: fadeIn 1s ease-in-out;
		      overflow:hidden;
		`;
		const icon = document.createElement("i");
		icon.classList.add("fa",styleAttribute[status].icon);
		icon.style.cssText = `color:${styleAttribute[status].borderColor};
		padding:2px 20px 2px 2px;`;
		const span = document.createElement("span");
		span.innerHTML=`<h5>${message}</h5>`;
		span.style.cssText=`padding: 0px 0px 0px 2px/`;
		const close = document.createElement("i");
		close.classList.add('fa','fa-close');
		close.id = "closeToast";
		close.addEventListener("click",() => {
			toast.style.display="none";
		})
		close.style.cssText=`
			cursor:pointer;
			padding:2px 2px 2px 20px;
		`;
		toast.appendChild(icon);
		toast.appendChild(span);
		toast.appendChild(close);
		document.body.appendChild(toast);
		toast.style.display = "flex";
		
		setTimeout(() => {
		      document.body.removeChild(toast);
		}, duration);
	}	
};
// this style is used for animation.  The toast will move from x(300%) to x(250%).
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(300%); border-bottom:{width:50%} 2px solid }
    to { opacity: 1; transform: translateX(250%); }
  }
  #closeToast:hover{
	color:red;
  }
`;

document.head.appendChild(style);
