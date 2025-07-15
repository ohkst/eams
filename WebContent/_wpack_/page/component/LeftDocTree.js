/*amd /page/component/LeftDocTree.xml 2928 4271d1e8fdf955a5371ee107c51e94325515c1d2bd820d2f6afe5b32d2125085 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList8',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'폴더',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'BA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'AA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'DA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'TA'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.btnBA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/BADocList.xml");
  btnBA.addClass("on");
  btnAA.removeClass("on");
  btnDA.removeClass("on");
  btnTA.removeClass("on");
};
scwin.btnAA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/AADocList.xml");
  btnBA.removeClass("on");
  btnAA.addClass("on");
  btnDA.removeClass("on");
  btnTA.removeClass("on");
};
scwin.btnDA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/DADocList.xml");
  btnBA.removeClass("on");
  btnAA.removeClass("on");
  btnDA.addClass("on");
  btnTA.removeClass("on");
};
scwin.btnTA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/TADocList.xml");
  btnBA.removeClass("on");
  btnAA.removeClass("on");
  btnDA.removeClass("on");
  btnTA.addClass("on");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:';max-width:100%;min-width:100%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'eams_sidebox'},E:[{T:1,N:'xf:group',A:{id:'',class:'eams_side_list'},E:[{T:1,N:'xf:group',A:{id:'',class:'side_menu_list2'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnBA_onclick',style:'',id:'btnBA',label:'BA',class:'btn_menu_cmdb'}}]},{T:1,N:'xf:group',A:{id:'',class:'side_menu_list2'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnAA_onclick',style:'',id:'btnAA',label:'AA',class:'btn_menu_cmdb'}}]},{T:1,N:'xf:group',A:{id:'',class:'side_menu_list2'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnDA_onclick',style:'',id:'btnDA',label:'DA',class:'btn_menu_cmdb'}}]},{T:1,N:'xf:group',A:{id:'',class:'side_menu_list2'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnTA_onclick',style:'',id:'btnTA',label:'TA',class:'btn_menu_cmdb'}}]}]}]}]}]}]})