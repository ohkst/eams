/*amd /page/component/TopNavigation.xml 4707 5d2502e07e534ed7dfb804d5d3a580479a77b8c5f4c21a2ae687f5943ecf190f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  /* header 상단 좌측 메뉴 클릭시 */
  scwin.btnToggleMenu_onclick = function (e) {
    $(".wrap").toggleClass("show_menu");
    $(".btn_toggle_menu").toggleClass("on");
  };
};
scwin.btnSearch_onclick = function (e) {
  $p.parent().wrap.removeClass("home");
  grpDocManagement.removeClass("on");
  grpCMDBManagement.removeClass("on");
  grpSystemSearch.addClass("on");
  var rowJSON = {
    "name": ""
  };

  // 새로 열릴 화면에 데이터를 전달 (dataObject를 통해 전달 가능)
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "HomeSearch",
      "data": rowJSON
    }
  };
  $p.parent().wfmLeftContents.setSrc("/page/component/LeftSystemSearch.xml", obj);
  $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchDashboard.xml");
  //$p.parent().wfmLayoutContents.setSrc("/page/subpage/SystemSearch.xml", obj);
};
scwin.btnDocSearch_onclick = function (e) {
  $p.parent().wrap.removeClass("home");
  grpSystemSearch.removeClass("on");
  grpCMDBManagement.removeClass("on");
  grpDocManagement.addClass("on");
  $p.parent().wfmLeftContents.setSrc("/page/component/LeftDocTree.xml");
  $p.parent().wfmRightContents.setSrc("/page/component/DocManagementDashboard.xml");
  //$p.parent().wfmLayoutContents.setSrc("/page/subpage/DocManagement.xml");
};
scwin.btnCMDBSearch_onclick = function (e) {
  $p.parent().wrap.removeClass("home");
  grpDocManagement.removeClass("on");
  grpSystemSearch.removeClass("on");
  grpCMDBManagement.addClass("on");
  $p.parent().wfmLeftContents.setSrc("/page/component/LeftCMDBMenu.xml");
  $p.parent().wfmRightContents.setSrc("/page/component/CMDBManagementDashboard.xml");
  //$p.parent().wfmLayoutContents.setSrc("/page/subpage/CMDBManagement.xml");
};
scwin.imgLogo_onclick = function (e) {
  $p.parent().wrap.addClass("home");
  grpDocManagement.removeClass("on");
  grpSystemSearch.removeClass("on");
  grpCMDBManagement.removeClass("on");
  $p.parent().wfmRightContents.setSrc("/page/subpage/HomeDashboard.xml");
};
scwin.imgLogout_onclick = function (e) {
  $p.url("/page/LoginPage.xml");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:'max-width:100%;min-width:100%;font-family:\'Pretendard\',sans-serif;'},E:[{T:1,N:'xf:group',A:{class:'header_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'header_lt',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'logobox',id:''},E:[{T:1,N:'xf:group',A:{class:'btn_toggle_menu','ev:onclick':'scwin.btnToggleMenu_onclick',id:'',style:'',tagname:'a'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'javascript:void(null);'}]}]},{T:1,N:'w2:span',A:{id:'',label:'menu',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'h1'},E:[{T:1,N:'xf:group',A:{class:'logo','ev:onclick':'scwin.imgLogo_onclick',id:'imgLogo',tagname:'a'}}]}]},{T:1,N:'xf:group',A:{class:'gnb_menu',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'grpSystemSearch',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{class:'','ev:onclick':'scwin.btnSearch_onclick',id:'btnSystemSearch',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합검색'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grpDocManagement',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{class:'','ev:onclick':'scwin.btnDocSearch_onclick',id:'btnDocManagement',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'문서관리'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grpCMDBManagement',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{class:'','ev:onclick':'scwin.btnCMDBSearch_onclick',id:'btnCMDBManagement',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CMDB관리'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'header_rt',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'logoutbox',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_icon logout','ev:onclick':'scwin.imgLogout_onclick',id:'imgLogout',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정'}]}]}]}]}]}]}]}]})