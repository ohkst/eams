/*amd /page/component/TopNavigation.xml 3545 d1a71edf53811bd04fa4ffd63686499aff1768d8c18298f205f5a3046bb6df90 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.setMediumWeight();
};
scwin.btnSearch_onclick = function (e) {
  scwin.setMediumWeight();
  btnSystemSearch.setStyle("font-weight", "bold");
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/SystemSearch.xml");
};
scwin.btnDocSearch_onclick = function (e) {
  scwin.setMediumWeight();
  btnDocManagement.setStyle("font-weight", "bold");
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/DocManagement.xml");
};
scwin.btnCMDBSearch_onclick = function (e) {
  scwin.setMediumWeight();
  btnCMDBManagement.setStyle("font-weight", "bold");
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/CMDBManagement.xml");
};
scwin.imgLogo_onclick = function (e) {
  scwin.setMediumWeight();
  $p.parent().wfmLayoutContents.setSrc("/page/subpage/HomeDashboard.xml");
};
scwin.setMediumWeight = function () {
  btnSystemSearch.setStyle("font-weight", "300");
  btnDocManagement.setStyle("font-weight", "300");
  btnCMDBManagement.setStyle("font-weight", "300");
};
scwin.imgLogout_onclick = function (e) {
  $p.url("/page/LoginPage.xml");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:'max-width:100%;min-width:100%;font-family:\'Pretendard\',sans-serif;'},E:[{T:1,N:'xf:group',A:{id:'',style:'background-color: #0E2147;height:100%;width:100%;display: flex;align-items: center;'},E:[{T:1,N:'xf:group',A:{style:'width:100%;height:100%;direction:ltr;display:flex;',id:''},E:[{T:1,N:'xf:group',A:{style:'width: 24px;height: 100%;',id:''}},{T:1,N:'xf:image',A:{src:'/img/logo.svg','ev:onclick':'scwin.imgLogo_onclick',style:'position:static;top:35px;width:132px;height:100%;',id:'imgLogo'}},{T:1,N:'xf:group',A:{style:'left:160px;position:relative;display: flex;align-items: flex-end;gap: 32px;',id:''},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:400;width:120 px;font-size:20px;border-color: ;border-width:0px;position:static;height:48px;font-family:\'Pretendard\',sans-serif;',id:'btnSystemSearch',label:'통합검색'}},{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnDocSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:400;width:120 px;font-size:20px;border-width:0px;border-color: ;position:static;height:48px;font-family:\'Pretendard\',sans-serif;',id:'btnDocManagement',label:'문서관리'}},{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnCMDBSearch_onclick',style:'background-color:#0E2147;top:14px;color:#FFFFFF;left:117px;font-weight:400;width:120 px;font-size:20px;border-width:0px;border-color: ;position:static;height:48px;font-family:\'Pretendard\',sans-serif;',id:'btnCMDBManagement',label:'CMDB관리'}}]}]},{T:1,N:'xf:image',A:{src:'/img/logout.svg',style:'width: 24px;height: 24px;',id:'imgLogout','ev:onclick':'scwin.imgLogout_onclick'}},{T:1,N:'xf:group',A:{style:'width: 24px;height: 100%;',id:''}}]}]}]}]})