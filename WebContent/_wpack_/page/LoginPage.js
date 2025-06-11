/*amd /page/LoginPage.xml 3598 e4626c689ab30fc24028165285492518bcdd6375f4f765f6911009fcd6a2dcee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'guid',name:'guid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'message',name:'message',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detailMessage',name:'detailMessage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'data',name:'data',dataType:'json'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',action:'http://10.50.241.179:8081/org/api/v1/command/emp-login',method:'post',mediatype:'application/json',ref:'',target:'data:json,dataMap1',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submission1_submit','ev:submitdone':'scwin.submission1_submitdone','ev:submiterror':'scwin.submission1_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  $p.executeSubmission("submission1", {
    "empNo": "113565",
    "pwd": "cdk200022"
  });
};
scwin.btnLoginClick_onclick = function (e) {
  $p.url("/page/layout/TopNavigationBottomContents.xml");
};
scwin.submission1_submit = function (e) {
  var jsoninfo = JSON.stringify(dataMap1.getJSON());
  alert("submit" + jsoninfo);
};
scwin.submission1_submitdone = function (e) {
  var jsoninfo = JSON.stringify(dataMap1.getJSON());
  alert("done" + jsoninfo);
};
scwin.submission1_submiterror = function (e) {
  var jsoninfo = JSON.stringify(dataMap1.getJSON());
  alert("error" + jsoninfo);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:'background-color:#0E2147;display:flex;justify-content: center;align-items: center;'},E:[{T:1,N:'xf:group',A:{style:'width:314px;height:266px;display: flex;flex-direction: column;gap: 12px;',id:''},E:[{T:1,N:'xf:group',A:{style:'position:static;top:242px;left:423px;width:100%;height:100px;display: flex;justify-content: center;align-items: center;',id:''},E:[{T:1,N:'xf:image',A:{src:'/img/loginLogo.svg',style:'width: 244px;height: 72px;',id:''}}]},{T:1,N:'xf:group',A:{style:'top:242px;left:423px;width:100%;display: flex;gap: 8px;flex-direction: column;justify-content: center;align-items: center;',id:''},E:[{T:1,N:'xf:input',A:{style:'position:static;top:152px;left:272px;width:314px;height:40px;',id:'',placeholder:'사번'}},{T:1,N:'xf:input',A:{style:'position:static;top:152px;left:272px;width:314px;height:40px;',id:'',placeholder:'패스워드'}}]},{T:1,N:'xf:group',A:{style:'position:static;top:242px;left:423px;width:100%;height:48px;display: flex;justify-content: center;align-items: center;',id:''},E:[{T:1,N:'w2:button',A:{'ev:onclick':'scwin.btnLoginClick_onclick',style:'position:static;top:318px;left:153px;width:314px;height:48px;background-color:#3761BB;color:#FFFFFF;font-size:18px;font-weight:bold;border-width:0px;border-radius: 8px;',id:'btnLoginClick',label:'로그인'}}]}]}]}]}]})