/*amd /page/component/search/pop01.xml 1771 fe201556e088752fa7be2ad351ab32c4b355f62a14fd3d31747258160090d068 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.btnRegister_onclick = function (e) {
  $p.parent().scwin.openRegisterSystemInfoPopup();
  $p.closePopup();
};
scwin.btnAddSystem_onclick = function (e) {
  $p.parent().scwin.openRegisterSystemInfoPopup();
  $p.closePopup();
};
scwin.btnClose_onclick = function (e) {
  $p.closePopup();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'pop_contents flex_cont'},E:[{T:1,N:'xf:group',A:{id:'',class:'grp_poptxt',style:'display:flex;align-items:center;justify-content:center;'},E:[{T:1,N:'xf:group',A:{id:'',class:'temp_hanbtn',style:''},E:[{T:1,N:'w2:button',A:{style:'',id:'btnRegister',label:'신규등록',class:'btn_cm pt','ev:onclick':'scwin.btnRegister_onclick'}},{T:1,N:'w2:button',A:{style:'margin-top:8px;',id:'btnAddSystem',label:'기존 시스템에 등록',class:'btn_cm pt','ev:onclick':'scwin.btnAddSystem_onclick'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'w2:button',A:{style:'',id:'btnClose',label:'닫기',class:'btn_cm','ev:onclick':'scwin.btnClose_onclick'}}]}]}]}]}]}]})