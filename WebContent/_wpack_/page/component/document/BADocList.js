/*amd /page/component/document/BADocList.xml 9299 bba2c21eab7429f86e2c39f7f5d1dccd8031177dd042d73e05e59e87457b2b98 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'common'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'guid',name:'guid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'message',name:'message',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detailMessage',name:'detailMessage',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'guid',E:[{T:4,cdata:'c342cbf886334f33b4f3f16fd78c50e5'}]},{T:1,N:'code',E:[{T:4,cdata:'N000'}]},{T:1,N:'message',E:[{T:4,cdata:'정상처리'}]},{T:1,N:'detailMessage'}]}]},{T:1,N:'w2:dataMap',A:{id:'pageInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'offset',name:'offset',dataType:'text'}},{T:1,N:'w2:key',A:{id:'limit',name:'limit',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sortMethod',name:'sortMethod',dataType:'text'}},{T:1,N:'w2:key',A:{id:'total',name:'total',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'offset',E:[{T:4,cdata:'0'}]},{T:1,N:'limit',E:[{T:4,cdata:'10'}]},{T:1,N:'type',E:[{T:4,cdata:'PAGE'}]},{T:1,N:'sortMethod',E:[{T:4,cdata:'NO'}]},{T:1,N:'total',E:[{T:4,cdata:'10'}]}]}]},{T:1,N:'w2:dataList',A:{id:'unitTasks'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'manlName',name:'매뉴얼명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitAfrsId',name:'단위업무ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitAfrsCd',name:'단위업무코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depName',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitAfrsName',name:'단위업무명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chrrNo',name:'담당자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chrrName',name:'담당자명',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'unitAfrsId',E:[{T:4,cdata:'1'}]},{T:1,N:'unitAfrsCd',E:[{T:4,cdata:'u0QKh71yTpm3PIhv7V'}]},{T:1,N:'depName',E:[{T:4,cdata:'인사부'}]},{T:1,N:'unitAfrsName',E:[{T:4,cdata:'string'}]},{T:1,N:'chrrNo',E:[{T:4,cdata:'113565'}]},{T:1,N:'chrrName',E:[{T:4,cdata:'최동규'}]},{T:1,N:'manlName',E:[{T:4,cdata:'계좌계설가이드'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbmUnitTaskList',action:'ba/query/api/v1/unit-task-list',method:'get',mediatype:'application/json',ref:'',target:'data:json,["common","pageInfo","unitTasks"]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbmUnitTaskList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // const param = {
  //     offset: 0,
  //     limit: 100,
  //     type: "PAGE",
  //     sortMethod: "NO",
  //     searchMethods: ["CONTAINS"],
  //     sortFields: ["prdtnSysDvsn"],
  //     searchFields: ["prdtnSysDvsn"],
  //     searchContent: "B"
  // };

  // $c.sbm.execute(sbmBADocList, param);

  $c.sbm.execute($p, sbmUnitTaskList);
};
scwin.btnSearch_onclick = function (e) {
  unitTasks.clearFilter();
  let jsonFilterOptions = {};
  jsonFilterOptions.type = "row";
  jsonFilterOptions.colIndex = "manlName";
  jsonFilterOptions.key = tfBizName.getValue();
  jsonFilterOptions.exactMatch = false;
  jsonFilterOptions.condition = "and";
  unitTasks.setColumnFilter(jsonFilterOptions);
  let jsonFilterOptions2 = {};
  jsonFilterOptions2.type = "row";
  jsonFilterOptions2.colIndex = "chrrName";
  jsonFilterOptions2.key = tfOwnerName.getValue();
  jsonFilterOptions2.exactMatch = false;
  jsonFilterOptions2.condition = "and";
  unitTasks.setColumnFilter(jsonFilterOptions2);
};
scwin.btnReset_onclick = function (e) {
  tfBizName.setValue("");
  tfOwnerName.setValue("");
  unitTasks.clearFilter();
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
    "id": unitTasks.getCellData(rowIndex, "unitAfrsId"),
    "type": "BA"
  };
  var dataObject = {
    "type": "json",
    "name": "PopupData",
    "data": rowJSON
  };
  $c.util.openEamsPopup($p, "/page/component/document/PopupDetailDocList.xml", "문서 리스트", dataObject);
};
scwin.closeAction = function (id, info) {
  if (!info.isCloseButtonClick) {
    return true;
  }
  return true;
};
scwin.sbmUnitTaskList_submitdone = function (e) {};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_contents flex_cont'},E:[{T:1,N:'xf:group',A:{id:'',class:'pgtbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'BA 산출물 리스트',class:'pgt_tit'}}]},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'매뉴얼명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'tfBizName',style:'width:100%;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'담당자명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'tfOwnerName',style:'width:100%;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnSearch_onclick',id:'btnSearch',label:'조회',style:'',class:'btn_cm sch'}},{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnReset_onclick',id:'btnReset',label:'초기화',style:'',class:'btn_cm refresh'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.imgBtnCSV_onclick',style:'',id:'imgBtnCSV',label:'CSV 다운로드',class:'btn_cm download'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox grp_flex'},E:[{T:1,N:'w2:gridView',A:{useFilterSearch:'false','ev:oncellclick':'scwin.grdSystemList_oncellclick',checkAllType:'false',dataList:'data:unitTasks',style:'width: 100%;height: 150px;',id:'grdSystemList',autoFit:'allColumn',useFilterList:'true',sortable:'true',class:'gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column1',value:'매뉴얼명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column7',value:'단위업무ID',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column6',value:'단위업무코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column5',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column4',value:'단위업무명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column3',value:'담당자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column2',value:'담당자명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'manlName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unitAfrsId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unitAfrsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'depName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unitAfrsName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chrrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chrrName',value:'',displayMode:'label'}}]}]}]}]}]}]}]}]})