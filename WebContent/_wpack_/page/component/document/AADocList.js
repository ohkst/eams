/*amd /page/component/document/AADocList.xml 12297 9810c99facef4bb7636fc0b2dea93fd61578a44066c3627474288feeb134fa29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'common'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'guid',name:'guid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'message',name:'message',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detailMessage',name:'detailMessage',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'guid',E:[{T:4,cdata:'c342cbf886334f33b4f3f16fd78c50e5'}]},{T:1,N:'code',E:[{T:4,cdata:'N000'}]},{T:1,N:'message',E:[{T:4,cdata:'정상처리'}]},{T:1,N:'detailMessage'}]}]},{T:1,N:'w2:dataMap',A:{id:'pageInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'offset',name:'offset',dataType:'text'}},{T:1,N:'w2:key',A:{id:'limit',name:'limit',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sortMethod',name:'sortMethod',dataType:'text'}},{T:1,N:'w2:key',A:{id:'total',name:'total',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'offset',E:[{T:4,cdata:'0'}]},{T:1,N:'limit',E:[{T:4,cdata:'10'}]},{T:1,N:'type',E:[{T:4,cdata:'PAGE'}]},{T:1,N:'sortMethod',E:[{T:4,cdata:'NO'}]},{T:1,N:'total',E:[{T:4,cdata:'10'}]}]}]},{T:1,N:'w2:dataList',A:{id:'docs'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prdtnId',name:'산출물ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linkSysId',name:'연결시스템ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtName',name:'문서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtnSysDvsn',name:'산출물시스템구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtnLclsCd',name:'산출물대분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtnSclsCd',name:'산출물소분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtnSclsCdName',name:'산출물소분류코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtMngtDep',name:'문서관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtMngtDepName',name:'문서관리부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtChrr',name:'문서담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtChrrNo',name:'문서담당자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcmtChrrName',name:'문서담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frstErlmDt',name:'최초등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcenChngDt',name:'최근변경일',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'prdtnId',E:[{T:4,cdata:'1'}]},{T:1,N:'linkSysId',E:[{T:4,cdata:'1'}]},{T:1,N:'dcmtName',E:[{T:4,cdata:'홈페이지개발매뉴얼'}]},{T:1,N:'prdtnSysDvsn',E:[{T:4,cdata:'A'}]},{T:1,N:'prdtnLclsCd',E:[{T:4,cdata:'AMDVL'}]},{T:1,N:'prdtnSclsCd',E:[{T:4,cdata:'AMDVL'}]},{T:1,N:'prdtnSclsCdName',E:[{T:4,cdata:'개발매뉴얼'}]},{T:1,N:'ver',E:[{T:4,cdata:'0.1'}]},{T:1,N:'dcmtMngtDep',E:[{T:4,cdata:'2'}]},{T:1,N:'dcmtMngtDepName',E:[{T:4,cdata:'인사부'}]},{T:1,N:'dcmtChrr',E:[{T:4,cdata:'1'}]},{T:1,N:'dcmtChrrNo',E:[{T:4,cdata:'000001'}]},{T:1,N:'dcmtChrrName',E:[{T:4,cdata:'홍길동'}]},{T:1,N:'frstErlmDt',E:[{T:4,cdata:'20200101'}]},{T:1,N:'rcenChngDt',E:[{T:4,cdata:'20200101'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbmAADocList',action:'doc/query/api/v1/document-list',method:'get',mediatype:'application/json',ref:'',target:'data:json,["common","pageInfo","docs"]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submitdone':'scwin.sbmAADocList_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  const param = {
    offset: 0,
    limit: 100,
    type: "PAGE",
    sortMethod: "NO",
    searchMethods: ["CONTAINS"],
    sortFields: ["prdtnSysDvsn"],
    searchFields: ["prdtnSysDvsn"],
    searchContent: "A"
  };
  $c.sbm.execute($p, sbmAADocList, param);
};
scwin.btnSearch_onclick = function (e) {
  docs.clearFilter();
  let jsonFilterOptions = {};
  jsonFilterOptions.type = "row";
  jsonFilterOptions.colIndex = "dcmtName";
  jsonFilterOptions.key = tfBizName.getValue();
  jsonFilterOptions.exactMatch = false;
  jsonFilterOptions.condition = "and";
  docs.setColumnFilter(jsonFilterOptions);
  let jsonFilterOptions2 = {};
  jsonFilterOptions2.type = "row";
  jsonFilterOptions2.colIndex = "dcmtChrrName";
  jsonFilterOptions2.key = tfOwnerName.getValue();
  jsonFilterOptions2.exactMatch = false;
  jsonFilterOptions2.condition = "and";
  docs.setColumnFilter(jsonFilterOptions2);
};
scwin.btnReset_onclick = function (e) {
  tfBizName.setValue("");
  tfOwnerName.setValue("");
  syss.clearFilter();
};
scwin.imgBtnCSV_onclick = function (e) {
  var jsnOptions;
  var today = $c.date.getServerDateTime($p, "yyyyMMddHHmmss");
  jsnOptions = {
    fileName: "TestCSV" + today + ".csv"
  };
  grdSystemList.saveCSV(jsnOptions);
};
scwin.grdSystemList_oncellclick = function (rowIndex, columnIndex, columnId) {
  var rowJSON = {
    "id": syss.getCellData(rowIndex, "sysId")
  };
  var dataObject = {
    "type": "json",
    "name": "PopupData",
    "data": rowJSON
  };
  var options = {
    id: "popuptest",
    type: "wframePopup",
    popupName: "업무 시스템 세부 리스트",
    modal: true,
    useIFrame: false,
    resizable: true,
    status: true,
    menubar: false,
    scrollbars: false,
    title: false,
    dataObject: dataObject,
    closeAction: "scwin.closeAction"
  };
  $c.util.openEamsPopup($p, "/page/component/cmdb/PopupDetailSystemList.xml", options);
};
scwin.closeAction = function (id, info) {
  if (!info.isCloseButtonClick) {
    return true;
  }
  return true;
};
scwin.sbmAADocList_submitdone = function (e) {};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:''},E:[{T:1,N:'xf:group',A:{style:'width:100%;height:100%;padding: 24px;box-sizing: border-box;display: flex;flex-direction: column;gap: 16px;',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'AA 산출물 리스트',style:'width:197px;height:43px;font-size:22px;font-weight:bold;'}},{T:1,N:'xf:group',A:{style:'width: 100%;display: flex;justify-content: flex-end;gap: 14px;',id:''},E:[{T:1,N:'w2:button',A:{style:'top:103px;left:260px;width:100px;height:28px;position:static;background-color:#3772E0;color:#FFFFFF;font-size:14px;font-weight:bold;border-width:0px;border-radius: 6px;',id:'btnSearch',label:'조회','ev:onclick':'scwin.btnSearch_onclick'}},{T:1,N:'w2:button',A:{style:'top:103px;left:260px;width:100px;height:28px;position:static;background-color:#3772E0;color:#FFFFFF;font-size:14px;font-weight:bold;border-width:0px;border-radius: 6px;',id:'btnReset',label:'초기화','ev:onclick':'scwin.btnReset_onclick'}},{T:1,N:'xf:image',A:{src:'/img/downloadCSV.svg',style:'top:103px;left:260px;width:24px;height:24px;position:static;border-width:0px;border-radius: 6px;',id:'imgBtnCSV','ev:onclick':'scwin.imgBtnCSV_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'width: 100%;display: flex;'},E:[{T:1,N:'xf:group',A:{id:'',style:'display: flex;'},E:[{T:1,N:'w2:textbox',A:{style:'position:static; top:65px; left:277px; width:150px; height:23px; ',id:'',label:'문서명'}},{T:1,N:'xf:input',A:{style:'width: 144px;height: 21px;',id:'tfBizName'}}]},{T:1,N:'xf:group',A:{id:'',style:'display: flex;margin-left: auto;','ev:onclick':'scwin.btnSearch_onclick'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'담당자명',style:'position:static; top:65px; left:277px; width:150px; height:23px; '}},{T:1,N:'xf:input',A:{id:'tfOwnerName',style:'width: 144px;height: 21px;'}}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'grdSystemList',style:'width: 100%;height: 150px;flex: 1;',dataList:'data:docs',autoFit:'allColumn',useFilterSearch:'false',useFilterList:'true',sortable:'true','ev:oncellclick':'scwin.grdSystemList_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column15',value:'산출물ID',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column14',value:'연결시스템ID',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column13',value:'문서명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column12',value:'산출물시스템구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column11',value:'산출물대분류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column10',value:'산출물소분류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column9',value:'산출물소분류코드명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column8',value:'버전',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column7',value:'문서관리부서',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column6',value:'문서관리부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column5',value:'문서담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column4',value:'문서담당자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column3',value:'문서담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column2',value:'최초등록일',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column1',value:'최근변경일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdtnId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'linkSysId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdtnSysDvsn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdtnLclsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdtnSclsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdtnSclsCdName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ver',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtMngtDep',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtMngtDepName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtChrr',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtChrrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcmtChrrName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'frstErlmDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rcenChngDt',value:'',displayMode:'label'}}]}]}]}]}]}]}]})