/*amd /page/component/LeftDocTree.xml 2644 38cf3d5ba962c338515ddc41ec60756897d8805118c7bd53071c82eb26a64fd4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList8',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'폴더',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'BA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'AA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'DA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'TA'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.btnBA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/BADocList.xml");
};
scwin.btnAA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/AADocList.xml");
};
scwin.btnDA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/DADocList.xml");
};
scwin.btnTA_onclick = function (e) {
  $p.parent().wfmRightContents.setSrc("/page/component/document/TADocList.xml");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:';max-width:100%;min-width:100%;'},E:[{T:1,N:'xf:group',A:{style:'width:100%;height: 100vh;background-color:#EFF0F4;padding: 12px;display: flex;flex-direction: column;overflow-y: auto;scrollbar-width: none;gap: 12px;box-sizing: border-box;',id:''},E:[{T:1,N:'w2:button',A:{id:'btnBA',label:'BA',style:'width: 100%;height: 48px;font-size:18px;font-weight:bold;text-align:left;border-width:0px;','ev:onclick':'scwin.btnBA_onclick'}},{T:1,N:'w2:button',A:{id:'btnAA',label:'AA',style:'width: 100%;height: 48px;font-size:18px;font-weight:bold;text-align:left;border-width:0px;','ev:onclick':'scwin.btnAA_onclick'}},{T:1,N:'w2:button',A:{id:'btnDA',label:'DA',style:'width:100%;height:48px;font-size:18px;font-weight:bold;text-align:left;border-width:0px;','ev:onclick':'scwin.btnDA_onclick'}},{T:1,N:'w2:button',A:{id:'btnTA',label:'TA',style:'width:100%;height:48px;font-size:18px;font-weight:bold;text-align:left;border-width:0px;','ev:onclick':'scwin.btnTA_onclick'}}]}]}]}]})