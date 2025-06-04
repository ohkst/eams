/*amd /page/component/TopNavigation.xml 2637 5710f596ddec64b3e51996361f205fe343bd23f8712b362d04dad427c805485c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.btnSearch_onclick = function (e) {
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/SystemSearch.xml");
};
scwin.btnDocSearch_onclick = function (e) {
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/DocManagement.xml");
};
scwin.btnCMDBSearch_onclick = function (e) {
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/CMDBManagement.xml");
};
scwin.imgLogo_onclick = function (e) {
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/HomeDashboard.xml");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:';max-width:100%;min-width:100%;'},E:[{T:1,N:'xf:group',A:{id:'',style:'background-color: #0E2147;height:100%;width:100%;'},E:[{T:1,N:'xf:group',A:{style:'position:relative;width:100%;height:100%;direction:ltr;display:flex;',id:''},E:[{T:1,N:'xf:group',A:{style:'width: 24px;height: 100%;',id:''}},{T:1,N:'xf:image',A:{src:'/img/logo.svg',style:'position:static; top:35px; left:174px; width:132px; height:100%;',id:'imgLogo','ev:onclick':'scwin.imgLogo_onclick'}},{T:1,N:'xf:group',A:{id:'',style:'left:160px;position:relative;display: flex;align-items: flex-end;gap: 32px;'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:bold;width:120 px;font-size:20px;border-color: ;border-width:0px;position:static;height:48px;',id:'btnSystemSearch',label:'통합검색'}},{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnDocSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:bold;width:120 px;font-size:20px;border-width:0px;border-color: ;position:static;height:48px;',id:'btnDocManagement',label:'문서관리'}},{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnCMDBSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:bold;width:120 px;font-size:20px;border-width:0px;border-color: ;position:static;height:48px;',id:'btnCMDBManagement',label:'CMDB관리'}}]}]}]}]}]}]})