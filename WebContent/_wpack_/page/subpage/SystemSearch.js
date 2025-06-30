/*amd /page/subpage/SystemSearch.xml 1418 e8905573f4c0b0e41a793fee868a5e24aefac8c115c8ed0c930236a1948479a4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var paramData = $p.getParameter("HomeSearch");
  var rowJSON = {
    "name": paramData.name
  };

  // 새로 열릴 화면에 데이터를 전달 (dataObject를 통해 전달 가능)
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "HomeSearch",
      "data": rowJSON
    }
  };
  wfmLeftContents.setSrc("/page/component/LeftSystemSearch.xml", obj);
  wfmRightContents.setSrc("/page/component/SystemSearchDashboard.xml");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:';display:flex;width:100%;height:100%;'},E:[{T:1,N:'w2:wframe',A:{style:'width: 290px;height:100%;',id:'wfmLeftContents'}},{T:1,N:'w2:wframe',A:{style:'width:100%;height:100%;flex: 1;',id:'wfmRightContents'}}]}]}]}]})