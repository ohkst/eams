/*amd /page/gridViewTypeChange.xml 3954 c2ea760f8cb81e7f723b7bf6f97534934a7eefb431f51bf711a4cbe4b3e6e3ae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true','ev:ondataload':'scwin.dataList1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'N'}]},{T:1,N:'col3',E:[{T:4,cdata:'aaa'}]},{T:1,N:'col4',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'2'}]},{T:1,N:'col2',E:[{T:4,cdata:'N'}]},{T:1,N:'col3',E:[{T:4,cdata:'bbb'}]},{T:1,N:'col4',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'Y'}]},{T:1,N:'col3',E:[{T:4,cdata:'ccc'}]},{T:1,N:'col4',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'4'}]},{T:1,N:'col2',E:[{T:4,cdata:'Y'}]},{T:1,N:'col3',E:[{T:4,cdata:'ddd'}]},{T:1,N:'col4',E:[{T:4,cdata:'40'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var length = gridView1.getDataLength();
  for (var i = 0; i < length; i++) {
    if (gridView1.getCellDisplayData(i, 1) === 'N') {
      //특정 열의 값이 N일경우
      var info1 = {
        inputType: "text",
        value: ""
      };
      gridView1.setCellInputType(i, "col3", info1); // rowIndex, colID에 해당하는 셀의 타입 변경
      gridView1.setDisabled("cell", i, "col3", true);
    } else {
      var info2 = {
        inputType: "button"
      };
      gridView1.setCellInputType(i, "col3", info2);
    }
  }
  dataList1.setJSON(dataList1.getAllJSON());
};
scwin.dataList1_ondataload = function () {
  for (let idx = 0; idx <= dataList1.getRowCount(); idx++) {
    alert(dataList1.getCellData(idx, 'col2'));
    if (!(dataList1.getCellData(idx, 'col2') == 'N')) {
      continue;
    }
    gridView1.setCellBackgroundColor(idx, "col2", "#FF0000");
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'gridView1',style:'width: 500px;height: 150px;',dataList:'data:dataList1',setCellInputTypeCustom:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',value:'id',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'value',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'name4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'custom',id:'col3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col4',displayMode:'label'}}]}]}]}]}]}]})