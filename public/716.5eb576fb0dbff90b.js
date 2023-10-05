"use strict";(self.webpackChunktp_saladejuegos=self.webpackChunktp_saladejuegos||[]).push([[716],{3716:(Z,p,s)=>{s.r(p),s.d(p,{AhorcadoModule:()=>U});var h=s(6814),u=s(5920),f=s(3519),n=s.n(f),a=s(4946),m=s(1634),c=s(95);let g=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-boton-letra"]],inputs:{letra:"letra"},decls:2,vars:1,consts:[[1,"btn","btn-primary","m-1",2,"width","50px"]],template:function(e,i){1&e&&(a.TgZ(0,"button",0),a._uU(1),a.qZA()),2&e&&(a.xp6(1),a.hij(" ",i.letra,"\n"))}}),r})();function v(t,r){if(1&t){const o=a.EpF();a.TgZ(0,"div")(1,"app-boton-letra",10),a.NdJ("click",function(){const d=a.CHM(o).$implicit,l=a.oxw();return a.KtG(l.verificarLetra(d))}),a.qZA()()}if(2&t){const o=r.$implicit;a.xp6(1),a.Q6J("letra",o)}}let b=(()=>{var t;class r{constructor(){this.palabras=["casa","perro","gato","amarillo","computadora","jardin","taza","silla","libro","televisor","bicicleta","ciudad","monta\xf1a","amigo","ventana","escuela","trabajo","playa","auto","viaje","musica","pelota","foto","familia","sol","lluvia","fruta","papel","reloj","cielo"],this.palabraSeleccionada="",this.palabraGuionada=this.generarPalabraGuionada(this.palabraSeleccionada),this.letrasRestantes=this.palabraSeleccionada.split(""),this.letrasAdivinadas=[],this.letrasUtilizadas=[],this.intentosRestantes=6,this.letraSeleccionada="",this.abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]}ngOnInit(){this.palabraSeleccionada=this.palabras[Math.floor(Math.random()*this.palabras.length)],this.letrasRestantes=this.palabraSeleccionada.split(""),this.palabraGuionada=this.generarPalabraGuionada(this.palabraSeleccionada)}verificarLetra(e){let i=[],d=!1;if(this.letraSeleccionada=e,this.letraSeleccionada=this.letraSeleccionada.toLowerCase().trim(),""!==this.letraSeleccionada)if(this.letrasUtilizadas.includes(this.letraSeleccionada))n().fire({icon:"error",title:"Error!",text:"Letra Ya Utilizada"});else{for(let l=0;l<this.palabraSeleccionada.length;l++)this.palabraSeleccionada[l]===this.letraSeleccionada&&(i.push(l),d=!0);d?(this.letrasAdivinadas.push(this.letraSeleccionada),this.letrasUtilizadas.push(this.letraSeleccionada),this.eliminarLetraAdivinada(this.letraSeleccionada),this.cargarLetraEnPalabraGuionada()):(this.intentosRestantes--,this.letrasUtilizadas.push(this.letraSeleccionada)),this.letraSeleccionada="",this.verificarGanador(),this.declararPerdedor()}else n().fire({icon:"error",title:"Error!",text:"Letra Vacia"})}eliminarLetraAdivinada(e){this.letrasRestantes=this.letrasRestantes.filter(i=>i!==e)}generarPalabraGuionada(e){this.palabraGuionada=[];for(let i=0;e.length>i;i++)this.palabraGuionada.push("__  ");return this.palabraGuionada}cargarLetraEnPalabraGuionada(){for(let e=0;e<this.palabraSeleccionada.length;e++)this.palabraSeleccionada[e]==this.letraSeleccionada&&(this.palabraGuionada[e]=this.letraSeleccionada)}verificarGanador(){return 0==this.letrasRestantes.length&&(this.intentosRestantes<2?n().fire({icon:"success",title:"Ganaste en la ultima!",imageUrl:"assets/ganaste_justo.gif",imageAlt:"gif",imageHeight:250}):n().fire({icon:"success",title:"Ganaste, Felicitaciones!",imageUrl:"assets/ganaste.gif",imageAlt:"gif",imageHeight:250}),this.reiniciarJuego(),!0)}declararPerdedor(){0==this.intentosRestantes&&(n().fire({icon:"error",title:"Perdiste!",imageUrl:"assets/gif-perdiste-ahorcado.gif",imageAlt:"gif",imageHeight:250}),this.reiniciarJuego())}reiniciarJuego(){this.palabraSeleccionada=this.palabras[Math.floor(Math.random()*this.palabras.length)],this.palabraGuionada=this.generarPalabraGuionada(this.palabraSeleccionada),this.letrasRestantes=this.palabraSeleccionada.split(""),this.letrasAdivinadas=[],this.letrasUtilizadas=[],this.intentosRestantes=6,this.letraSeleccionada=""}}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-ahorcado"]],decls:19,vars:4,consts:[[1,"container"],[1,"form-group"],["for","palabraGuionada"],["type","text","id","palabraGuionada","name","palabraGuionada","readonly","",1,"form-control",3,"value"],["for","letrasUtilizadas"],["type","text","id","letrasUtilizadas","name","letrasUtilizadas","readonly","",1,"form-control",3,"value"],["for","intentosRestantes"],["type","text","id","intentosRestantes","name","intentosRestantes","readonly","",1,"form-control",3,"value"],[1,"container","d-flex","flex-wrap","justify-content-center","mt-2"],[4,"ngFor","ngForOf"],[3,"letra","click"]],template:function(e,i){1&e&&(a._UZ(0,"app-navbar"),a.TgZ(1,"div",0)(2,"h1"),a._uU(3,"AHORCADO"),a.qZA(),a.TgZ(4,"form")(5,"div",1)(6,"label",2),a._uU(7,"Palabra:"),a.qZA(),a._UZ(8,"input",3),a.qZA(),a.TgZ(9,"div",1)(10,"label",4),a._uU(11,"Letras ya utilizadas"),a.qZA(),a._UZ(12,"input",5),a.qZA(),a.TgZ(13,"div",1)(14,"label",6),a._uU(15,"Intentos Restantes"),a.qZA(),a._UZ(16,"input",7),a.qZA(),a.TgZ(17,"div",8),a.YNc(18,v,2,1,"div",9),a.qZA()()()),2&e&&(a.xp6(8),a.Q6J("value",i.palabraGuionada.join(" ")),a.xp6(4),a.Q6J("value",i.letrasUtilizadas.join(" ")),a.xp6(4),a.Q6J("value",i.intentosRestantes),a.xp6(2),a.Q6J("ngForOf",i.abecedario))},dependencies:[h.sg,m.S,c._Y,c.JL,c.F,g]}),r})();var A=s(8524);const S=[{path:"",component:b,children:[]}];let G=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[u.Bz.forChild(S),h.ez,A.m,c.u5,u.Bz]}),r})(),U=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[h.ez,G]}),r})()}}]);