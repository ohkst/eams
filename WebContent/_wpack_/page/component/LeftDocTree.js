/*amd /page/component/LeftDocTree.xml 6027 bb67ccef9d5ba8e479dbb132879093612b5854fed78c519ad2d041dff6d0c392 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList8',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'폴더',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'BA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'AA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'DA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'TA'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.searchboxOK_onkeypress = function (e) {
  // 엔터치면 코드 적용
  if ((e.charCode || e.keyCode) === 13) {
    // $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultDetail.xml");
    dataList1.clearFilter();
    dataList3.clearFilter();
    dataList4.clearFilter();
    dataList5.clearFilter();
    dataList7.clearFilter();
    let jsonFilterOptions = {};
    jsonFilterOptions.type = "row";
    jsonFilterOptions.colIndex = "name";
    jsonFilterOptions.key = searchboxOK.getValue();
    jsonFilterOptions.exactMatch = false;
    jsonFilterOptions.condition = "and";
    dataList1.setColumnFilter(jsonFilterOptions);
    dataList3.setColumnFilter(jsonFilterOptions);
    dataList4.setColumnFilter(jsonFilterOptions);
    dataList5.setColumnFilter(jsonFilterOptions);
    dataList7.setColumnFilter(jsonFilterOptions);
  } else {
    // $p.log("SEARCH!!!!");

    // 검색을 구현하면 될듯
    // dataList1.clearFilter();

    // let jsonFilterOptions = {};

    // jsonFilterOptions.type = "row";
    // jsonFilterOptions.colIndex = "name";
    // jsonFilterOptions.key = searchboxOK.getValue();
    // jsonFilterOptions.exactMatch = false;
    // jsonFilterOptions.condition = "and";

    // dataList1.setColumnFilter(jsonFilterOptions);        
  }
};
scwin.searchDetail = function (rowIndex, columnIndex, columnId, type) {
  // $p.log(rowIndex + columnId + columnId);

  var cellData = "";
  if (type === 0) {
    cellData = dataList1.getCellData(rowIndex, columnId);
  } else if (type === 1) {
    cellData = dataList3.getCellData(rowIndex, columnId);
  } else if (type === 2) {
    cellData = dataList4.getCellData(rowIndex, columnId);
  } else if (type === 3) {
    cellData = dataList5.getCellData(rowIndex, columnId);
  } else if (type === 4) {
    cellData = dataList7.getCellData(rowIndex, columnId);
  }
  $p.log(cellData);
  var rowJSON = {
    "Personal Info": {
      "Name": "Lee",
      "Age": 50,
      "Married": false
    },
    "Region": "Seoul",
    "Carrier": true,
    "name": cellData
  };

  // 새로 열릴 화면에 데이터를 전달 (dataObject를 통해 전달 가능)
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "LeftSearch",
      "data": rowJSON
    }
  };
  scwin.setContentsSrc(type, obj);
};
scwin.setContentsSrc = async function (type, obj) {
  if (type === 0) {
    await $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultBizDetail.xml", obj);
  } else if (type === 1) {
    await $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultScreenDetail.xml", obj);
  } else if (type === 2) {
    await $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultTRDetail.xml", obj);
  } else if (type === 3) {
    await $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultDBDetail.xml", obj);
  } else if (type === 4) {
    await $p.parent().wfmRightContents.setSrc("/page/component/SystemSearchResultMemberDetail.xml", obj);
  }
};

// 업무 검색
scwin.gridBASearchResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.searchDetail(rowIndex, columnIndex, columnId, 0);
};

// 화면 검색
scwin.gridAAScreenSearchResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.searchDetail(rowIndex, columnIndex, columnId, 1);
};

// TR 검색
scwin.gridAATRSearchResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.searchDetail(rowIndex, columnIndex, columnId, 2);
};

// DB 검색
scwin.gridDADBSearchResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.searchDetail(rowIndex, columnIndex, columnId, 3);
};

// 담당자 검색
scwin.gridMemberSearchResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.searchDetail(rowIndex, columnIndex, columnId, 4);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:';max-width:100%;min-width:100%;'},E:[{T:1,N:'xf:group',A:{style:'width:100%;height: 100vh;background-color:#EFF0F4;padding: 12px;display: flex;flex-direction: column;overflow-y: auto;scrollbar-width: none;gap: 12px;box-sizing: border-box;',id:''},E:[{T:1,N:'w2:searchbox',A:{'ev:onchange':'scwin.searchboxOK_onchange','ev:onkeypress':'scwin.searchboxOK_onkeypress',id:'searchbox1',style:'width: 100%;height: 48px;display: flex;flex-shrink: 0;'}},{T:1,N:'w2:treeview',A:{id:'',dataType:'listed',tooltipGroupClass:'false',style:'width: 100%;height: 100%;flex: 1;'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList8'},E:[{T:1,N:'w2:label',A:{ref:'col1'}},{T:1,N:'w2:value',A:{ref:'col1'}},{T:1,N:'w2:depth',A:{ref:'col1'}},{T:1,N:'w2:folder',A:{ref:'col1'}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]}]}]})