"use strict";(self.webpackChunktp_saladejuegos=self.webpackChunktp_saladejuegos||[]).push([[226],{4226:(T,l,r)=>{r.r(l),r.d(l,{PreguntadosModule:()=>I});var o=r(6814),g=r(51),t=r(4946),c=r(8081),p=r(7398),d=r(9862);let h=(()=>{var s;class n{constructor(e){this.http=e,this.imageUrl="",this.key="39970197-795398b39a30957cfcdaf60fe"}solicitarImagen(e){return this.http.get(`https://pixabay.com/api/?key=${this.key}&q=${e}`,{headers:{Accept:"application/json"}}).pipe((0,p.U)(a=>(this.imageUrl=a.hits[0].webformatURL,this.imageUrl)))}}return(s=n).\u0275fac=function(e){return new(e||s)(t.LFG(d.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),n})();var m=r(3519),u=r.n(m),f=r(1634);function v(s,n){if(1&s){const i=t.EpF();t.ynx(0),t.TgZ(1,"p",5),t._uU(2,"Preguntados"),t.qZA(),t.TgZ(3,"p",6),t._uU(4,"Temas de las preguntas"),t.qZA(),t.TgZ(5,"div",7)(6,"div",8)(7,"div",9),t._UZ(8,"img",10),t.TgZ(9,"div",11)(10,"h5",12),t._uU(11,"Deportes"),t.qZA()()()(),t.TgZ(12,"div",8)(13,"div",9),t._UZ(14,"img",10),t.TgZ(15,"div",11)(16,"h5",12),t._uU(17,"Geografia"),t.qZA()()()(),t.TgZ(18,"div",8)(19,"div",9),t._UZ(20,"img",10),t.TgZ(21,"div",11)(22,"h5",12),t._uU(23,"Ciencia"),t.qZA()()()()(),t.TgZ(24,"div",13)(25,"a",14),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.jugar())}),t._uU(26,"Jugar"),t.qZA()(),t.BQk()}if(2&s){const i=t.oxw();t.xp6(8),t.Q6J("src",i.urlDeportes,t.LSH),t.xp6(6),t.Q6J("src",i.urlGeografia,t.LSH),t.xp6(6),t.Q6J("src",i.urlCiencia,t.LSH)}}function P(s,n){if(1&s){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"div",16)(3,"h3",17),t._uU(4),t.qZA(),t._UZ(5,"img",18),t.qZA(),t.TgZ(6,"ul",19)(7,"li",20),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.verRespuesta(1))}),t._uU(8),t.qZA(),t.TgZ(9,"li",21),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.verRespuesta(2))}),t._uU(10),t.qZA(),t.TgZ(11,"li",22),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.verRespuesta(3))}),t._uU(12),t.qZA()()(),t.BQk()}if(2&s){const i=t.oxw();t.xp6(4),t.Oqu(i.pregunta),t.xp6(1),t.Q6J("src",i.urlPregunta,t.LSH),t.xp6(3),t.Oqu(i.op1),t.xp6(2),t.Oqu(i.op2),t.xp6(2),t.Oqu(i.op3)}}const x=[{path:"",component:(()=>{var s;class n{constructor(){this.firestore=(0,t.f3M)(c.gg),this.apiImagenes=(0,t.f3M)(h),this.instanciaFirestore=(0,c.hJ)(this.firestore,"preguntados"),this.pregunta="",this.op1="",this.op2="",this.op3="",this.jugando=!1,this.urlDeportes="",this.urlGeografia="",this.urlCiencia="",this.urlPregunta="",this.respuesta_correcta=0,this.cantRespuestasCorrectas=0,this.cantIntentos=0,this.preguntasSeleccionadas=[]}ngOnInit(){(0,c.BS)(this.instanciaFirestore).subscribe(e=>{console.log(e),this.dataPreguntas=e}),this.apiImagenes.solicitarImagen("geografia").subscribe(e=>{console.log(e),this.urlGeografia=e}),this.apiImagenes.solicitarImagen("sport").subscribe(e=>{console.log(e),this.urlDeportes=e}),this.apiImagenes.solicitarImagen("science test tubes").subscribe(e=>{console.log(e),this.urlCiencia=e})}cargarPregunta(){let e;do{e=this.dataPreguntas[Math.floor(Math.random()*this.dataPreguntas.length)]}while(this.preguntasSeleccionadas.includes(e));this.urlPregunta="Deportes"==e.categoria?this.urlDeportes:"Ciencia"==e.categoria?this.urlCiencia:this.urlGeografia,this.preguntasSeleccionadas.push(e),this.pregunta=e.pregunta,this.op1=e.op1,this.op2=e.op2,this.op3=e.op3,this.respuesta_correcta=e.respuesta_correcta,this.cantIntentos++}verRespuesta(e){e==this.respuesta_correcta?(u().fire({icon:"success",title:"Respuesta Correcta!"}),this.cantRespuestasCorrectas++,this.verificarPuntuacion()||this.cargarPregunta()):(u().fire({icon:"error",title:"Respuesta Incorrecta!",text:`La respuesta correcta es la opci\xf3n ${this.respuesta_correcta}`}),this.verificarPuntuacion()||this.cargarPregunta())}jugar(){this.jugando=!0,this.cargarPregunta()}verificarPuntuacion(){return this.cantIntentos>=5&&(u().fire({icon:"success",title:"Fin de la partida!",text:`Finalizaste con ${this.cantRespuestasCorrectas} correctas en ${this.cantIntentos} preguntas`}),this.jugando=!1,!0)}}return(s=n).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-preguntados"]],decls:7,vars:2,consts:[[1,"container"],[1,"container","border","border-5","rounded","shadow-lg","p-3","mb-5","rounded"],[1,"row"],[1,"col-md-12"],[4,"ngIf"],["id","titulo_productos",1,"h1","text-center"],["id","titulo_productos",1,"h3","text-center"],[1,"d-flex","flex-wrap","justify-content-center"],[1,"col-12","col-lg-4"],[1,"card","text-center",2,"width","18rem"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"d-grid","gap-2"],[1,"btn","btn-primary",3,"click"],["id","tablero"],[1,"text-center","mb-4"],["id","pregunta-titulo",1,"h3"],["alt","Imagen",1,"img-chica",3,"src"],["id","pregunta-respuestas",1,"list-group","list-group-flush"],["id","op1",1,"list-group-item","list-group-item-info","list-group-item-action",3,"click"],["id","op2",1,"list-group-item","list-group-item-info","list-group-item-action",3,"click"],["id","op3",1,"list-group-item","list-group-item-info","list-group-item-action",3,"click"]],template:function(e,a){1&e&&(t._UZ(0,"app-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),t.YNc(5,v,27,3,"ng-container",4),t.qZA()(),t.YNc(6,P,13,5,"ng-container",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",!a.jugando),t.xp6(1),t.Q6J("ngIf",a.jugando))},dependencies:[o.O5,f.S],styles:[".img-chica[_ngcontent-%COMP%]{width:300px;height:auto}"]}),n})(),children:[]}];let Z=(()=>{var s;class n{}return(s=n).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.Bz.forChild(x),o.ez,g.Bz]}),n})();var C=r(95),_=r(8524);let I=(()=>{var s;class n{}return(s=n).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[o.ez,Z,C.u5,_.m]}),n})()}}]);