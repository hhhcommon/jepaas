var JE=window.JE=window.JE||{};JE.local=JE.local||{lang:{core:{}}},JE.local.lang.server={core:{success:"执行成功!",fail:"执行失败!",sqlFail:"传入SQL出错!",emptySql:"执行信息为空!",removeFail:"传入表名或者主键失败!",removeSuccess:"条记录被删除!",disableSuccess:"条记录被禁用!",enableSuccess:"条记录被启用!",updateSuccess:"条记录被更新!",queryFail:"未查询到记录!",requestFail:"传入信息失败!",uploadFail:"上传失败!",uniquenSuccess:"验证成功!",uniquenFail:"违反唯一性约束!"},wf:{processNameRepet:"该流程名称已存在，请更改！",deployed:"流程已经部署，请先取消流程定义!",clearSuccess:"清除流程定义成功!",deployFail:"部署出错，请检查流程键是否使用!",showImgFail:"流程实例传入出错！",pdidError:"传入流程定义id错误!",piidError:"传入流程实例id错误!",clearDirtySuccess:"清理成功!",updateSuccess:"更新成功!",noTask:"未找到任务!",batchSuccess:"批量审批成功! ",paramFail:"传入参数有误!",promptSuccess:"催办成功!"},dic:{saveFail:"传入信息出错!",saveSuccess:"数据字典添加成功!",updateSuccess:"条记录被更新!",ddItem:"字典项",checkEmpty:"编码为空，请检查！",checkRepet:"编码重复，请修改！",checkSuccess:"字典项合法!"},develop:{excelExpFail:"导出出错，错误信息：",excelFail:"'显示列信息传入错误!",saveInfoFail:"保存出错了,错误信息 ：",removeInfoSuccess:"个功能已删除！",removeInfoFail:"传入功能主键出错!",findInfoFail:"目标功能未找到!",findMainInfoFail:"目标的主功能未找到!",findSelfInfoFail:"本功能未找到!",infoErrorFail:"原功能信息不全，不能复制!",copyInfoFail:"功能复制出错，错误信息:",infoEmpty:"无此功能!",clearSuccess:"功能清空成功!",clearFail:"清空出错，错误信息:",relyonSuccess:"解除关系成功!",relyonFail:"传入主键失败!",implSuccess:"导入成功!",implChildFail:"导入出错，出错信息：",insertSuccess:"添加成功",funcCodeRepet:"功能编码重复",buildFail:"构建失败!",setSuccess:"设置成功...",syncSuccess:"同步成功!",requestFieldFail:"传入字段类型出错!"},rbac:{permSuccess:"授权成功!",permFail:"授权失败，异常信息:",removeSuccess:"移除成功!",noPermDept:"您没有部门",noPermRole:"您没有角色",editPerm:"修改权限!",paramsFail:"传入表名或者主键失败!"}},JE.local.lang.common={dragText:"拖动排序",okButtonText:"确定",cancelButtonText:"取消",fieldBlankText:"该项为必选项",addSuccessAlert:"添加成功！",updateSuccessAlert:"修改成功！",saveSuccessAlert:"保存成功！",deleteSuccessAlert:"删除成功！",deleteConfirm:"确定删除吗？",editText:"编辑",addText:"添加",updateText:"修改",saveText:"修改",deleteText:"删除",refreshText:"刷新",closeText:"关闭"},JE.local.lang.core.app={northview:{agent:"代理",message:"消息",user:"个人",exit:"退出",agentLogin:"代理登录"},topmenuview:{openFuncTip:"当前打开功能",position:"位置：",closeAllText:"关闭所有功能"},westview:{title:"业务导航",userData:{work:"事务",submit:"审批",round:"传阅",entrust:"委托",email:"邮件",calendar:"日历"},queryMenuEmptyText:"菜单名称或拼音...",queryMenuTip:"菜单查找"},centerview:{portalHtml:"插件没有配置主面板，请检查！"}},JE.local.lang.core.jemainview={treeTitle:"数据结构",formTitle:"详细信息",treeQueryTitle:"快速查询",panelswitcher:{label:"视图",listText:"列表",formText:"表单"},alert:{noFunc:"功能不存在，请检查功能编码：</br>{0}",funcCount:{msg:"你打开的功能已经超出规定的{0}个功能，请先关闭一些再打开新功能...",closeOther:"关闭其他",closeAll:"关闭全部",cancel:"取消"},DIC:"字典编码：{0}不存在！",PORTAL:{noId:"Portal功能的id没有传入，无法生成功能",noFunc:"Portal功能不存在，请检查菜单配置信息！"},dataview:{unSelect:"请选择要查看的数据！",singleSelect:"请选择一条数据进行查看！"}},common:{helpButton:{text:"帮助",noInfo:"暂无帮助信息",title:"帮助信息"},lczzButton:"流程追踪"}},JE.local.lang.core.jegridview={cxclButtonText:"查询策略",advancedQuery:"高级查询",batchWFButtonText:"批量审批",groupByText:"按本列分组",showGroupsText:"显示分组",doEditMask:"表单加载中，请稍等...",pageItems:{pageText:"每页",pageUnit:"条",displayMsg:"共 {total} 条",displayAllMsg:'每页 <span class="pagesize">{pageSize}</span> 条/共 {total} 条，显示 {fromRecord}-{toRecord} 条',lineNumber:"显示行数",count:"条",total:"共",leaveFor:"前往"},rowexpanderEmptyText:"无内容",button:{},alert:{editNoSelect:"请先选中您想要编辑的数据...",editOneSelect:"请选择【1】条要编辑的数据,您已选择【{0}】条...",editNoEdit:"无数据操作...",childAdd:"请选择一条主功能数据，再进行添加...",noSaveAdd:"您还有数据没有保存,请保存数据再来添加新的数据...",add:"添加成功...",removeNoSelect:"请先选中您想要删除的数据...",removeSelf:"只能删除本人录入的数据...",removeStartWf:"流程已启动不能被删除...",removeConfirm:"确定删除选中的【{num}】条数据吗？",disableConfirm:"确定禁用选中的【{num}】条数据吗？"},expExcel:{title:"导出设定",titleLabel:"标题",fileNameLabel:"文件名",expTypeLabel:"数据设定",expTypeData:{NOWPAGE:"当前页",SELECTION:"选中数据",ALL:"全部"},styleTypeLabel:"样式设定",styleTypeData:{GRID:"表格样式",REPORT:"打印样式",TEMPLATE:"模版样式"},styleTypeAlert:"请先设置表格打印样式!",docFolderNameLabel:"存入文件库",docFolderIdLabel:"目录ID"},cxclBar:{deselectTip:"清除策略",removeTip:"删除此策略",removeAlert:"确定删除吗？",errorFnAlert:"查询策略自定义方法错误："}},JE.local.lang.core.jeformview={filesLabel:"附件",historySet:{modifyUser:"修改人",modifyTime:"修改时间",modifyContent:"修改内容",by:"由",instead:"改为"},button:{},doFormWinAddTitle:"添加",alert:{add:"添加成功...",update:"保存成功...",saveNew:"新建成功，请填写信息...",saveCopy:"复制成功...",saveCopyError:"复制失败！",expError:"错误的{0}表达式：{1}",expFnError:"错误的{0}表达式方法：</br>{1}"},groupQuery:{title:"高级查询",button:{queryText:"查询",resetText:"重置",saveText:"存为查询策略",closeText:"关闭"},saveCxclAlert:{no:"没有可以保存的策略，请查询后再保存...",name:"策略名称:",addOk:"添加策略成功..."},queryType:{"=":"精确",like:"模糊",in:"包含",between:"区间",">":"大于",">=":"大于等于","<":"小于","<=":"小于等于","!=":"不等于"},orderTip:"排序",orderAscTip:"升序",orderDescTip:"降序",cbbLabel:"高级"}},JE.local.lang.core.jetreeview={queryCbb:{emptyText:"输入查询信息..."},bbar:{selModelLabel:"多选",searchModelLabel:"检索"},dragOkAlert:"操作完成"},JE.local.lang.core.jereportview={loadingText:"报表生成中，请稍等...",loadingPageText:"正在生成第{0}分页数据，请稍等...",searchForm:{title:"查询条件",queryButton:"查询",resetButton:"重置",close:"关闭"},menu:{search:"查询",print:"打印报表",printPage:"分页打印",saveFile:"存到文件库",sendFile:"发快递",exportWord:"导出word",exportExcel:"导出excel",refresh:"刷新"},pageInfo:{title:"分页信息",pageSizeLabel:"每页条数",bindDSLabel:"依赖数据源",afterPageText:"第 {0} 页,共 {1} 页",displayMsg:"显示 {0} - {1} 条，共 {2} 条，每页 {3} 条"},msg:{saveOrSendFile:"请输入文件名称",saveOrSendFileError:"文件保存失败!",exportFileOk:"操作成功！",exportChartWait:"请等待所有图表加载完成后，才能导出！",exportChartMask:"正在生成图表图片，请稍等...",exportChartError:"图表导出出错，错误信息如下:"}},JE.local.lang.core.jechartview={searchForm:{title:"查询条件",queryButton:"查询",resetButton:"重置",close:"关闭"},menu:{search:"查询",print:"打印图表",exportImg:"导出图片",exportPdf:"导出PDF"},msg:{exportReport:"请等待图表加载完成，才能导出！"},exportDialogMessage:"正在导出，请稍候...",echartCfgError:"EChart自定义配置项方法有错误，请检查！",max:"最大值",min:"最小值",average:"平均值"},JE.local.lang.core.jesswinview={disableTip:{expTip:"错误的树形字典项可选表达式：",title:"提示",msg:"选中的数据无效，请重新选择...",okText:"智能剔除无效数据",cancelText:"关闭"},selectPanel:{title:"已选数据",deselectTip:"确定清空所有结果吗？",clearColumnTip:"清空"}},JE.local.lang.core.jewfview={workflow:{addFileText:"添加附件",clearFileText:"清除",moreFileText:"查看更多",addFileTitle:"列表附件",msgEmptyText:"请输入您的意见...",msgTypeText:"常用意见",msgEmptyAlert:"请填写审批信息！",msgEmptyUser:"请选择人员!",selectNodeAlert:"请选择路径！",nodeLabel:"下一节点",userLabel:"人员",branchLabel:"分支",userTypeLabel:"筛选",sortLabel:"执行",useSort:"顺序",noUseSort:"并序",useForkTask:"使用此分支",noUseForkTask:"不使用此分支",doTaskLabel:"参与",doJointLabel:"候选",countersignTypeLabel:"类型",countersignType1:"% 的人员审核通过则节点通过",countersignType2:"审核通过则节点通过",countersignType2Label:"负责人",userEmptyText:"该角色下没有任何人员</br>请到角色授权功能中设置.",userSelectTip:"请选择处理人",userTitle:"人员",emptyText:"空",selectNodeText:"选择路径",selectUserText:"选择人员",formStep1:"第一步、选择路径",formStep2:"第二步、选择处理人",formStep3:'第三步、<span class="wf-msg">填写意见 <i class="fa fa-caret-down"></i></span>',winStep1:"第一步、选择路径",winStep2:"第二步、选择处理人",winStep3:"第三步、填写意见",winPrevStep:"上一步",winNextStep:"下一步",submitText:"送交",selectUserTip:{addAllConfirm:"确定选择所有的人？",addAdminAlert:"请选择一个执行人!",addSuccessMsg:"加入成功！",addOneMsg:"请选择人员！",addOneSelectMsg:"人员已经选择了！",removeAllConfig:"确定删除所有的人？",removeOneSelectAlert:"请选择要删除的人！",removeSuccessMsg:"删除成功！"}},workflowCtr:{dataHistory:"审批历史",callDeloy:"取消延迟",addDeloy:"加入延迟",addStar:"标记",warnYj:"预警",warnYq:"延期",preapprov:"待我审批",approved:"我经办的",owner:"我的流程",delay:"我的延迟",allTask:"全部",doWf:"处理",wfImg:"流程图",refresh:"刷新",title:"流程工作台",batchWf:"批量审批"},batchBar:{alert:{emptyWf:"请选中执行流程!",emptyOper:"请选中执行操作!",emptyTask:"请选中执行任务!",emptyRecord:"请选中审批数据!",decisionNode:"无法启动，因为首节点为判断节点!"},wfLabel:"流程",taskLabel:"任务",taskImageLabel:"流程图",operLabel:"操作",operData:{sponsor:"发起",submit:"提交",return:"退回",reject:"驳回",back:"取回",transmit:"转办",entrust:"委托",round:"传阅"}},button:{sponsor:"发起",start:"启动"},alert:{noStartWf:"流程未启动，无法查看！",cancelWfConfirm:"是否撤销流程？",userDiyWfConfirm:"是否转交处理人？",noSaveDataSubmitWf:"请先保存信息！",selectAssigeeUser:"请选择执行人员！",doWFStart:"流程启动成功!",doWFSponsor:"流程发起成功!",doWFBack:"取回成功!",doWFReturnBack:"退回成功!",doWFRejectBack:"驳回成功!",doWFSubmit:"提交成功!",doWFNextDiyUser:"提交成功!",doWFEnd:"流程已结束!",doWFReturn:"退回成功!",doWFTake:"任务已成功领取!",doWFRound:"传阅成功!",doWFRoundUser:"请选择传阅人员！",doWFTakeRound:"签收成功!",doWFPass:"通过成功!",doWFNoPass:"否决成功!",doWFWaiverPass:"弃权成功!",doWFTransmit:"转办成功!",doWFEntrust:"委托成功!",doWFCallEntrust:"已成功撤销委托!",doWFCancel:"流程撤销成功!",doWFSuspend:"流程已作废!",doWFReject:"驳回成功!",doWFUserDiy:"提交成功!",doWFBackUserDiy:"提交成功!",doWFReturnSubmit:"提交成功"},wfLog:{title:"审批记录",nodeName:"节点名称",oper:"操作",user:"执行人",opinion:"审批意见",file:"附件",status:"状态",receiptTime:"接受时间",appTime:"审批时间",takesTime:"耗时",circulateInfo:"传阅信息",countersignBefore:"会签按照",countersignNow:"比例标准为：",countersignUserNow:"负责人为：",countersignAfter:"当前通过比例为",countersignUserAfter:"处理状态",ONE_ASSGINE:"负责人决定制",PROPORTION_YES:"比例通过制",roundAssgine:"接受人",roundStatus:"审阅状态",roundComments:"意见",roundTime:"审阅时间",empty:"正在处理",to_submit:"已审批",to_jump:"已审批",to_allot:"已调拨",to_returnsubmit:"已审批",to_rollback:"审批退回",to_withdraw:"任务取回",to_entrust:"任务委托",to_returnback:"重新流转",to_callentrust:"撤销委托",to_transmit:"任务转办",to_taketask:"领取任务",to_end:"结束流程",to_round:"传阅",to_takeround:"审阅",to_circular:"已办理",to_reject:"审批驳回",no:"未处理",to_pass:"通过",to_nopass:"不通过",to_waiverpass:"弃权",to_userdiy:"转交管理员/发起人",to_backuserdiy:"转交处理人",ZC:'<span style="color:green;">正常</span>',YJ:'<span style="color:#F97300;">预警</span>',YQ:'<span style="color:#D60000;">延期</span>'},wfFlowInfo:{to_submit:"送交给我",to_jump:"送交给我",to_allot:"调拨给我",to_returnsubmit:"送交给我",to_rollback:"退回给我",to_withdraw:"取回",to_entrust:"委托给我",to_returnback:"退回给我",to_callentrust:"撤销委托",to_transmit:"转办给我",to_taketask:"领取任务",to_end:"流程结束",to_round:"传阅给我",to_takeround:"审阅",to_circular:"办理",to_reject:"驳回",no:"未处理",yes:"已处理",to_pass:"通过",to_nopass:"不通过",to_waiverpass:"弃权",to_userdiy:"转交",to_backuserdiy:"转交"},wfSendMsg:{approvalMsg:"常用审批语",approvalMsgData:["同意","同意***的意见","请审批","请处理","不同意","建议同意","呈领导阅示","建议呈报路径","妥否，请批示","关于***的请示/申请","预算执行进度为***","审核无误"],button:{end:"结束",returnback:"重新流转",nopass:"否决",waiverpass:"弃权",seeImage:"流程图"},alert:{countersignTwoP:"会签人员至少为两个,请联系管理员!",countersignPrincipal:"会签是负责人制度，请设置负责人!",selectToUser:"请选择提交人员！",selectToTask:"分支至少有一个使用分支！",selectProcessUser:"请为{0}选择处理人员!"},more:"更多",emptyText:"审批意见。如需要更详细的说明，请在右侧填写！"},wfProcessUser:{tbar:{remove:"删除",removeAll:"删除全部"},removeAlert:"请选择人员",pressTitle:"选择催办人员"},wfPrompt:{pressInfoTitle:"催办信息",userTitle:"选择人员",pressInfoColumns:{promptType:"催办方式",userNames:"提醒人",copyUserNames:"抄送",copyContext:"内容"},meRemindTitle:"我提醒的",meRemindColumns:{type:"类型",promptType:"催办方式",context:"催办内容",acceptName:"提醒人"},remindMeTitle:"我的提醒",remindMeColumns:{type:"类型",promptType:"催办方式",context:"催办内容",userName:"催办人"}},wfAction:{doWFRoundTitle:"传阅",doWFCancelComments:"我要撤销流程",doWFImageWinTitle:"流程追踪",doWFPromptWinTitle:"流程催办",doWFSubmitWin:{titleTpl:"流程{0}",title:{cancel:"退回",reject:"驳回",cancelMsg:"原路退回",submit:"提交",sponsor:"发起",end:"结束",back:"取回",takeround:"审阅",pass:"通过",nopass:"否决",waiverpass:"弃权",changepass:"通过",callentrust:"撤销委托",entrust:"委托",transmit:"转办",suspend:"作废",diyuserNode:"转交管理员/发起人",diyuserBtn:"提交"},alert:{expError:"错误显隐表达式：",wfBatchError:"由于任务【{0}】处理有特殊人处理，无法批量审批!",countersign:"会签节点无法转办，请重新检查流程!",noTranMsg:"没有有效的路径!"}},doWFFormEdit:{wfCurrentTaskText:"当前任务：{0}",alert:{expError:"错误的启动表达式方法：</br>"}},showRoundCommentsTitle:"传阅信息",showProcessTitle:"流程信息",showImageTitle:"流程信息",showLogTplTitle:"流程审批历史信息",doTaskUserTitle:"审批人选择",setFieldsConfig:{title:"赋值构造器",fieldColumn:"字段名",valueColumn:"值",alert:"请选中记录!"},doChangeTask:{title:"更改任务",alert:{noTask:"没有需处理的任务!",noSelect:"请选中任务!",changeOk:"更改成功,当前处理任务:"}},doChangeForm:{title:"历史单据",taskNameSuffix:"当前表单",noSelectTaskAlert:"请选中任务!"},setMessageConfig:{title:"消息提醒模版",DWRLabel:"页面",DWR:"流程提醒：由<font color=red>{@USER_NAME@}</font>在{@NOW_TIME@}给您提交了{@PROCESS_NAME@}任务,执行操作：{@SUBMIT_OPERATE@},执行意见：{@SUBMIT_COMMENTS@}",RTXLabel:"RTX",RTX:"你有一条任务需要审批!\n由{@USER_NAME@}在{@NOW_TIME@}给您提交了{@PROCESS_NAME@}流程任务,\n当前活动：{@PROCESS_CURRENTTASK@},请尽快审批!",EMAILLabel:"邮件",EMAIL:"你有一条任务需要审批!<br/>由{@USER_NAME@}在{@NOW_TIME@}给您提交了{@PROCESS_NAME@}流程任务,<br/>执行动作：{@SUBMIT_OPERATE@},执行意见：{@SUBMIT_COMMENTS@}<br/>当前活动：{@PROCESS_CURRENTTASK@},请尽快审批!",NOTELabel:"短信",NOTE:"流程提醒：由{@USER_NAME@}在{@NOW_TIME@}给您提交了{@PROCESS_NAME@}任务，请尽快处理!",EXPRESSLabel:"快递",EXPRESS:"你有一条任务需要审批!<br/>由{@USER_NAME@}在{@NOW_TIME@}给您{@SUBMIT_OPERATE@}了{@PROCESS_NAME@}流程任务,<br/>执行动作：{@SUBMIT_OPERATE@},执行意见：{@SUBMIT_COMMENTS@}<br/>当前活动：{@PROCESS_CURRENTTASK@},请尽快审批!",WXLabel:"企业微信",WXHTML:"你有一条任务需要审批!<br/>由{@USER_NAME@}在{@NOW_TIME@}给您{@SUBMIT_OPERATE@}了{@PROCESS_NAME@}流程任务,<br/>执行动作：{@SUBMIT_OPERATE@},执行意见：{@SUBMIT_COMMENTS@}<br/>当前活动：{@PROCESS_CURRENTTASK@},请尽快审批!",html:"<font color='#333333'>消息提醒模版配置,引用变量格式:  {字段名}   {@流程变量或系统变量@}</font><br/><font color='#333333'>流程变量有：@PROCESS_NAME@(流程名称)    @PROCESS_CURRENTTASK@(活动节点)    @SUBMIT_OPERATE@(执行动作)    @SUBMIT_COMMENTS@(审批意见)</font>"},doCountersignUser:{title:"会签人员分配",typeLabel:"会签类型",proportionLabel:"比例标准",assgineNameLabel:"负责人",userNamesLabel:"会签人员",tdDomHtml:"负责人:{0}",maxviewElHtml:"调整顺序",nameColumn:"用户名",idColumn:"主键",alert:{noUser:"请选择会签人员!",twoUser:"会签最少有两个人进行!",noAssgine:"请指定负责人!",assgineInUsers:"负责人必须包含在会签人员中!"}}}},JE.local.lang.core.util={DwrMsgUtil:{noticeTitle:"提醒",taskNoticeTitle:"消息提醒",taskNotice:"您有{0}条任务提醒,",taskNoticeDo:"处理!",funcTitle:"工作台",taskNoLoginNoticeTitle:"流程提醒",taskNoLoginNotice:"您有{0}条任务需处理!"},OpenFileUtil:{openFileByPathTitle:"文件查看",audio:"音乐播放",video:"视频播放",email:"查看邮件",unsupportedMsg:"该格式暂不支持...",addDocBatchFilesTitle:"我的目录",rootText:"我的文件库",moveFolder:"请选中要移动的目录!"},OverrideUtil:{gridHeaderUpdateItem:"更新整列数据",required:"必填项"},RendererUtil:{summaryRendererZdyTplError:"列表统计-自定义模版出错",dicNoItem:"没有数据项",fileDownload:"下载",filePreview:"预览",ckEditorTitle:"编辑"},VTypes:{uniqueText:"该数据已存在，请重新输入",repetitionText:"两个指定组件的组件值不一样"},Util:{uploadFileTitle:"上传",uploadFileFileTypeAlert:"请选择支持的文件类型: {0}",printHtmlMask:"打印信息准备中...",ajaxError:"请求参数：{0}",submitClientInvalid:"表单数据有误，请检查之后再提交...",submitConnectFailure:"Ajax通信失败！",submitServerInvalid:"出错了！",toFixedError:"toFixed() 数字参数必须在0到20",msgTitle:"消息",noticeTitle:"提示",errorTitle:"出错了",printFuncAlert:"没有数据ID，无法查看打印数据！",showChartAlert:"图表编码{0}不存在!请检查...",showChartTitle:"图表",showReportAlert:"报表编码{0}不存在!请检查...",showReportTitle:"报表",toNumError:"转数字出错...",doMaskMsg:"加载中...",timeLogMsg:"耗时",timeLogUnit:"秒",showFuncCfgTitle:"配置信息",copyAlert:"文本内容已经复制到剪切板！",previewImageAlert:"不支持Safari6.0以下浏览器的图片预览!",previewImageAlert2:"仅支持{0}为后缀名的文件!",numberToLetterEmptyText:"没有该项",modifyPw:{cantEdit:"代理登录无法修改密码!",title:"设置中心",phoneLabel:"手机号",userNameLabel:"用户名称",passwordLabel:"原始密码",newPasswordLabel:"新密码",newPassword2Label:"确认密码",newPassword2VtypeText:"密码不一致",updateSuccessMsg:"修改成功！"}},PrintUtil:{htmlTpl:"暂无数据",printDialogTitle:"数据打印",printWFLog:"确定将审批记录一起打印吗？",printDialogMsg:"打印全部数据，需要时间等待；打印选中数据，速度更快！</br>您要打印：",bigDataAlert:"数据超过2500条,打印全部需要消耗大量时间！",allDataText:"全部数据:{0}条",selectDataText:"选中数据:{0}条",noSelectAlert:"没有选中的数据，无法打印！",lodopInit:"功能打印",lodopStartMsg:"开始打印，请稍后...",lodopFormEndMsg:"打印完成，共打印了{0}次！",lodopGridEndMsg:"打印完成！",lodopNoData:"数据为空，请选择数据！",pageTpl:"第{#}页",noDataTpl:"无数据",noPrintInfo:"列表没有维护打印信息，请维护后再打印！"}},JE.local.lang.core.ux={textcode:"<系统自动生成>",uxcolumn:{checkBoxTip:"回车保存",updateselsLabel:"只修改列表选中的数据",batchUpdateTitle:"数据修改",batchUpdateNoSelect:"无选中数据可以修改！",successMsg:"修改成功"},datetime:{dayNames:["日","一","二","三","四","五","六"],separator:" 到  "},childfuncfield:{addTip:"添加",removeTip:"删除",removeAllTip:"批量删除",removeAlert:"请选择要删除的数据！",removeConfirm:"确定删除选中的数据吗？"},crgroup:{selectAllTip:"全选"},uxfilefield:{downLoadText:"下载",previewText:"预览",saveDocText:"转入文件库",removeConfirm:"文件将被永久删除，请慎重...",removeOkMsg:"文件删除成功...",allowFileAlert:"只允许上传后缀名为{0}的文件！",notAllowFileAlert:"不允许上传后缀名为{0}的文件！"},uxfilesfield:{upload:"新上传",files:"文件库",companyFiles:"公司文件库",downLoadAll:"全部下载",moveToDocFiles:"转移到文件库",removeAll:"清空",remove:"删除",see:"浏览",open:"打开",downLoad:"下载",attribute:"属性",downLoadZip:"打包下载",uploadTitle:"附件上传",selectFilesTitle:"选择文件",addDocFilesTitle:"我的目录",docFilesRootText:"我的文件库",alert:{selectFile:"请选中文件!",selectOneFile:"请选中一个文件!",fileCount:"已达到文件限制数({0})，请删除后再上传！",noFileDownLoad:"无文件可下载!",docFilesMove:"请选中要移动的目录!"}},filesset:{title:"附件上传",saveFormAlert:"请保存表单数据后再进行上传！",downLoadAllText:"全部下载"},formpagingbar:{prevText:"上一条",nextText:"下一条"},graphfield:{editLabel:"窗口编辑",editTitle:"编辑"},jsonfield:{keyColumn:"属性",valueColumn:"值",noColumnHtml:"请配置列信息！"},searchfield:{loadingText:"搜索中...",emptyText:"没找到要查询的内容"},ssfield:{enableExpFnError:"字段：{0} 可选表达式方法错误！"},qqfield:{noQueryFieldsMsg:"没有配置列的查询类型，无法查询！"},ueditorfield:{aligntableLabel:"表格对齐方式",aligntdLabel:"单元格对齐方式",winSeeLabel:"窗口查看",winSeeTitle:"内容查看",uploadTitle:"附件上传",attr:{tdTitle:"单元格属性",tableTitle:"表格属性",backgroundColor:"背景颜色",backgroundImage:"背景图片",backgroundRepeat:"背景平铺",backgroundRepeatX:"横向",backgroundRepeatY:"纵向",backgroundRepeatNo:"不平铺",borderColor:"边框颜色",borderColorTop:"上",borderColorBottom:"下",borderColorLeft:"左",borderColorRight:"右",borderWidth:"边框宽度",borderStyle:"边框样式",borderStyleSolid:"实线",borderStyleDashed:"虚线",padding:"内边距",margin:"外边据",width:"宽",height:"高",fill:"填充",font:"字体",fontSize:"字号",fontFamily:"样式",fontWeight:"正常",fontWeightBold:"粗体",fontColor:"颜色",align:"对齐方式"},align:{tableTitle:"表格对齐方式",tdTitle:"单元格对齐方式",left:"居左",center:"居中",right:"居右",leftTop:"左上",centerTop:"上",rightTop:"右上",leftMiddle:"左",centerMiddle:"中",rightMiddle:"右",leftBottom:"左下",centerBottom:"下",rightBottom:"右下"}},jeganttview:{lodingText:"数据规划中，请稍等...",saveSuccessMsg:"数据保存成功！",noModelId:"没有业务数据主键，无法操作！",newTaskName:"新任务",tpl:{start:"开始：",end:"结束：",percentDone:"进度："},column:{task:"任务",fzr:"负责人",cyr:"参与人",cjr:"创建人",bj:"标记"},tbar:{add:"添加",save:"保存",refresh:"刷新",queryEmptyText:"任务查询...",collapse:"收起",expand:"展开",zoomToFit:"缩放",recover:"恢复"}},uploadpanel:{addFileBtnText:"选择文件...",uploadBtnText:"上传",removeBtnText:"移除所有",cancelBtnText:"取消上传",closeBtnText:"关闭",column:{name:"文件名",fileName:"自定义文件名",type:"类型",size:"大小",percent:"进度",status:"状态",remove:"移除"},statusRenderer:{1:"等待上传",2:"上传中...",3:"上传失败",4:"上传成功",5:"停止上传"},alert:{title:"提示",nonSupport:"浏览器Flash Player版本太低,不能使用该上传功能！",loadFailed:"SWFUpload加载失败！",queueLimitExceeded:"上传文件列表数量超限,不能选择！",fileExceedsSizeLimit:"文件大小超过限制, 不能选择！",zeroByteFile:"该文件大小为0,不能选择！",invalidFileType:"该文件类型不允许上传！"}},tabclosemenu:{closeTabText:"关闭",closeOthersTabsText:"关闭其他",closeRightTabsText:"关闭右侧",closeAllTabsText:"关闭所有"}},JE.local.lang.sys={},JE.local.lang.sys.IM={msgWin:{history:{searchEmptyText:"查询历史记录...",seeMoreBtnText:"查看更多...",top100BtnText:"查看前100条信息...",viewEmptyText:"暂无消息"},buttons:{file:"附件",cloud:"云盘",email:"快递",sms:"短信",close:"关闭",send:"发送",msgLog:"消息记录"},title:{talk:"讨论组成员",history:"消息记录"}},userMenu:{invite:"邀请",inviteKf:"邀请客服",edit:"编辑",del:"删除",exit:"退出",add:"添加",refresh:"刷新",remove:"移除"},main:{talkGroupTitle:"讨论组",contactsTitle:"联系人",recentContactsTitle:"最近联系人",wolcomeTitle:"欢迎",kfTitle:"客服人员"},title:"即时通讯",notice:{msg:"发送了一条消息!",title:"及时通讯提醒"},msgTag:"消息",msgNewTag:"新消息！",myFiles:{sendFileTitle:"发送附件",sendSuccess:"发送成功!",myFilesTitle:"我的文件库",selectFileAlert:"请选择文件!",download:"下载",preview:"预览",saveFile:"转入文件库"},talkGroup:{updateAlert:"讨论组：{0} 人员有更新，请查看...",addAlert:"讨论组：{0} 将你加入...",kickAlert:"您被踢出讨论组：{0}",removeAlert:"讨论组：{0}已解散！",exitAlert:"您已退出讨论组：{0}",groupNameAlert:"请输入组名称",addSuccessAlert:"添加成功！",selectGroupAlert:"请选中讨论组!",removeGroupAlert:"确定要删除吗?",createRemoveGroupAlert:"只有创建人可以删除组!",refershGroupAlert:"刷新成功!",removeUserAlert:"请选择要移除的人员!",noSearchGroupAlert:"未找到该讨论组!",groupUserTitle:"人员"},allHistory:{barTitleText:"当前记录：",explainHtml:"请单击左边联系人查看记录",content:"内容",range:"范围",emptyText:"无信息"}},JE.local.lang.sys.document={westview:{filemenuTitle:"我的文件",queryformTitle:"高级检索",functreeTitle:"功能文件"},treeMenu:{operation:"操作",open:"打开",browse:"浏览",download:"下载",upload:"上传",packDownload:"打包下载",refresh:JE.local.lang.common.refreshText,checkAll:"全选",attribute:"属性",sendExpress:"发送快递",copy:"复制",cut:"剪切",zipPackage:"压缩打包",toCommon:"添加常用",cancelCommon:"取消常用",rename:"重命名",remove:"删除",del:"彻底删除",restore:"还原",paste:"粘贴",emptyTrash:"清空回收站",authorize:"授权",batchAuthorize:"批量授权",forward:"前进",back:"后退",top:"置顶",last:"置尾",newText:"新建",word:"Microsoft Office Word 文档",excel:"Microsoft Office Excel 工作表",ppt:"Microsoft Office PowerPoint 演示文稿",txt:"文本文档",saveFile:"转到文件库",returns:"返回"},queryForm:{title:"高级搜索",fileTitle:"文件",fileName:"文件名称",filePath:"文件路径",email:"邮箱地址",formatTitle:"格式",appoint:"指定",sizeTitle:"大小",to:"到",uploadTitle:"上传时间",lastModifyTime:"最后修改时间",timeFormat:"Y年m月d日",queryText:"查询",resetText:"重置"},fileProgress:{id:"主键",name:"名称",size:"大小",status:"状态",progress:"进度"},fileData:{uploadTpl:"松开即可上传!",name:"名称",title:"邮件标题",modifyTime:"修改时间",type:"类型",size:"大小",remark:"备注",view:"视图",thumbnail:"缩略图",icon:"图标",detail:"详细信息",order:"排序",path:"地址",downloadTime:"下载时间",uploader:"上传人",uploadTime:"上传时间",operation:"操作"},fileMenu:{dropOkAlert:"操作完成",myCommonTitle:"我的常用"},officeView:{taohong:"套红",taohongAlert:"当前文档不支持留痕模式...",taohongTitle:"模板查询",seal:"盖章",sealTitle:"盖章查询",traceEnable:"启用留痕",traceDisable:"关闭留痕",traceAlert:"当前文档不支持留痕模式..."},docPermForm:{visiblePermTitle:"可见权限",controllablePermTitle:"可控权限",user:"人员",department:"部门",role:"角色",post:"岗位",cascadeSubFolder:"级联子文件夹"},ctr:{noFolderAlert:"文件夹不存在！",uploadSuccess:"上传成功",uploading:"正在上传",uploadError:"上传出错",uploadErrorMsg:"文件{0}上传出错！",uploadErrorSize:"上传出错，文件大小超过1G。",uploadErrorLimit:"上传出错，一次性只能上传1000个文件。",uploadErrorDuplicate:"文件重复。",uploadErrorOther:"上传出错，错误编码:{0},请联系管理员!",noFindFolderAlert:"未找到目录!",topFolderAlert:"已经到了顶层目录!",noSelectInfo:"无选中信息！",uploadTitle:"附件上传"},util:{updateTimeAlert:"更新打开时间出错!",upTip:"向上",fileSearch:"文件检索",selectAlert:"请选中文件!",selectFolderAlert:"请选中目录！",noPermAlert:"权限不足！",selectOneAlert:"只能{0}一个文件!",folderCantDownload:"文件夹无法下载!",nameIllegalAlert:"您输入的名称不合法,请重新输入!",newNameAlert:"请输入新名称...",nameCantUpdate:"文件后缀名不允许修改!",renameSuccess:"重命名成功！",renameFailure:"重命名失败！",deleteSuccess:JE.local.lang.common.deleteSuccessAlert,deleteFailure:"删除失败！",deleteConfirm:JE.local.lang.common.deleteConfirm,deleteAlert:"一旦删除则无法还原，是否继续...",packageAlert:"请输入压缩包名称...",packageSuccess:"打包成功！",copyAlert:"已成功放入剪切板!",pasteAlert:"粘贴成功！",cutEmptyAlert:"剪切板为空!",commonAlert:"只有文件夹可以添加常用！",sendAlert:"请选中文件，目录无法发送!",restoreAlert:"确定还原吗?",restoreSuccess:"还原成功!",restoreFailure:"还原失败!",clearAlert:"一旦清空则无法还原，是否继续...",clearSuccess:"回收站已清空!",clearFailure:"清空失败!",officeNewName:"请输入文件名称...",docName:"新建 Microsoft Office Word 文档.doc",xlsName:"新建 Microsoft Office Excel 工作表.xls",pptName:"新建 Microsoft Office PowerPoint 演示文稿.ppt",txtName:"新建文本文档.txt",topAlert:"已置顶",lastAlert:"已置尾",unCommonAlert:"已取消常用",selectOneFolder:"请选中一个文件夹!",folderCreateAlert:"目录已创建!",permFolderAlert:"不是文件夹，无法授权!",permOneFolder:"请选择一个文件夹授权!",updateSuccess:JE.local.lang.common.updateSuccessAlert,updateFailure:"修改失败！"}},JE.local.lang.sys.email={common:{addSuccessAlert:JE.local.lang.common.addSuccessAlert,updateSuccessAlert:JE.local.lang.common.updateSuccessAlert,deleteSuccessAlert:JE.local.lang.common.deleteSuccessAlert,deleteConfirm:JE.local.lang.common.deleteConfirm,addText:JE.local.lang.common.addText,updateText:JE.local.lang.common.updateText,deleteText:JE.local.lang.common.deleteText,addressBook:"通讯录",companyAddressBook:"公司通讯录",subject:"主题",addresser:"发件人",recipients:"收件人",time:"时间",file:"附件",carbonCopy:"抄送",blindCarbonCopy:"密送",receive:"收信",transpond:"转发"},emailSign:{name:"名称",signature:"签名",setDefault:"设为默认"},emailReadEdit:{expressage:"转发快递",joinAddressBook:"加入通讯录",reply:"回复",print:"打印",carbonCopyTitle:"什么是抄送：同时将这一封邮件发送给其他联系人。",blindCarbonCopyTitle:"什么是密送：同时将这一封邮件发送给其他联系人，但收件人及抄送人不会看到密送人。",send:"发送",sendAlert:"发送完成！",saveDraft:"保存草稿",saveDraftAlert:"已保存到草稿箱！",emailRegexText:"邮箱格式错误，格式为：user@example.com",fileLabel:'<span title ="点击上传文件">附件</span>',urgency:"紧急",readReceipt:"已读回执",signature:"签名",recentContacts:"最近联系人"},emailList:{title:"账户",emptyTrash:"清空回收站",emptySuccessAlert:"清除回收站成功！",rename:"帐户重命名",removeEmail:"删除帐户",config:"邮箱设置",signature:"签名管理",collapse:"收起",up:"上移",down:"下移"},emailData:{read:"已读",mark:"标记",msgBoxTpl:"共 {0} 封，未读 {1} 封",markAllRead:"全部设为已读",tbar:{write:"写信",remove:"删除",del:"彻底删除",selectEmailAlert:"请选择邮件！",markedFor:"标记为...",read:"已读邮件",unRead:"未读邮件",star:"星标邮件",unStar:"取消星标",inInbox:"转到收件箱",files:"邮箱附件柜"}},emailConfig:{email:"邮箱",password:"密码",name:"昵称",port:"端口",test:"测试",serverSuccess:"接收服务器正常！",serverFsSuccess:"发送服务器正常！",serverFailure:"接收服务器测试失败，请检查配置！",serverFsFailure:"发送服务器测试失败，请检查配置！",dustbin:"垃圾箱"},emailAddress:{groupAddAlert:"分组名称：",groupAddAlertTitle:"添加分组",groupDeleteAlert:"删除分组同时将分组以下的通讯录转移到常用联系人!</br>确定删除吗？",noUpdateAlert:"无数据操作...",existEmailAlert:"该邮箱已经存在！",column:{name:"姓名",phone:"电话",remark:"备注",department:"部门",duty:"职务",telephone:"座机",grouping:"分组"}},util:{receiveMsg:{search:"上次日期：{0} 扫描第{1}封邮件,日期：{2}",accept:"共{0}邮件，正在接受第{1}封，成功：{2},失败：{3}",back:"第{0}步：{1} ({2}/3)",back2:"收件中...",frontTitle:"接收邮件",frontBackButton:"后台运行",frontStopButton:"停止接收",frontStopMsg:"程序将接受完最后一封不再接受!",step1:"连接服务器",step2:"扫描新邮件",step3:"下载邮件"},receiveEmail:{backAlert:"后台正在接收邮件...",selectAlert:"请选择要收件的邮箱！",receiveSuccess:"收件成功!"},updateMsgBox:"无",editEmail:{addTitle:"草稿箱邮件",readTitle:"查看邮件"},addEmail:{inbox:"收件箱",outbox:"发件箱",draftbox:"草稿箱",tagemail:"标签邮件",spam:"垃圾邮件",recycleBin:"回收站"},emailConfig:{title:"添加邮箱",failureAlert:"请先进行收发测试,在保存数据."},markEmail:{selectAlert:"请选择邮件！",successAlert:"操作成功！"},removeEmailAlert:"请选择要删除的邮件！"},file:{treeMenu:JE.local.lang.sys.document.treeMenu,queryForm:JE.local.lang.sys.document.queryForm,fileData:JE.local.lang.sys.document.fileData,util:{selectAlert:"请选中文件!",selectOneAlert:"只能{0}一个文件!",packageAlert:"请输入压缩包名称...",fileTitle:"文件信息",emailTitle:"邮件标题",name:"文件名称",path:"地址",type:"文件类型",uploadDept:"上传部门",size:"文件大小",sizeUnitTpl:"(字节)",uploadUser:"上传人",uploadTime:"上传时间",remark:"备注"}}},JE.local.lang.sys.calendar={text:{todayText:"今天",dayText:"日模式",weekText:"周模式",monthText:"月模式",ddCreateEventText:"创建任务:{0}",ddMoveEventText:"移动任务至 {0}",ddResizeEventText:"修改任务至 {0}"},msg:{nameEmptyAlert:"名称不能为空!",noDeleteAlert:"默认组不能删除!",deleteConfirm:"是否删除【{0}】日历组?",selectAlert:"请选中数据!",importAlert:"导入成功！",cannotDeleteAlert:"数据未保存，无法删除!",timeAlert:"开始时间不能大于结束时间!"},group:{title:"日历组",importText:"导入",userName:"用户名",department:"部门",createUser:"创建人",createDept:"创建部门",name:"名称",color:"颜色",defaults:"默认",remark:"备注",selectUserTitle:"人员"},eventWin:{title:"日历任务",column:{title:"日程标题",titleEmptyText:"请输入标题...",createUser:"创建人",start:"开始时间",end:"结束时间",allDay:"全天",type:"类型",remind:"提醒",group:"所属组",save:"保存",notifications:"消息提醒",remark:"内容"}},west:{taskTitle:"我的任务(近两月)",shareTitle:"共享任务",groupTitle:"组管理"}},JE.local.lang.core.menuHeadSet={headSet:{passWordUpdate:"密码修改",proxyCap:"代理设置",phoneUpdate:"更换手机",emailUpdate:"更换邮箱",themeUpdate:"设置主题",bindingMsg:"绑定第三方应用便于快捷登录",bindingTitle:"点击刷新认证状态",bindingCallOn:"去绑定",bindingCallOff:"取消绑定",bindingCallOffMsg:"是否取消认证？",bindingCallOffSuccess:"取消认证成功!",exitText:"安全退出",winText:{okbutton:"提交",onbutton:"取消",password:{phoneError:"请输入正确的手机号",phoneEmpty:"请输入手机号",emailError:"请输入正确的邮箱地址",emailEmpty:"请输入邮箱地址",pwdError:"密码为6位以上字母+数字组合",pwdEmpty:"请输入原始密码",pwdNewEmpty:"请输入新密码",pwdUnequal:"两次密码输入不一致",vcodeEmpty:"请输入验证码",passwordTitle:"重置密码",passwordStrengthWeak:"弱",passwordStrengthCentre:"中",passwordStrengthStrong:"强"},phone:{phoneTitle:"修改手机",phoneMsg:"验证手机号（此手机号将作为登录时的个人帐号）",poneText:"请输入手机号",verificationCcode:"短信验证码",phoneButton:"获取"},email:{emailTitle:"修改邮箱",emailMsg:"验证邮箱号（此邮箱号用于接收系统信息）",emailText:"请输邮箱号",emailCode:"邮箱验证码",emailButton:"获取"}}},leftmenu:{leftmenuTitle:"产品与功能",menulock:"锁定菜单",menuOpen:"取消锁定",emptyVariableCache:"清空变量缓存",emptyFuncCache:"清空功能缓存",emptyDicCache:"清空字典缓存",emptyMenuCache:"清空菜单缓存",emptyAllCache:"清空所有缓存",queryText:"请输入关键词"},func:{switchingMode:"切换模式",closeThisLabel:"关闭这个标签",closeOtherLabel:"关闭其他标签",closeRightLabel:"关闭右侧标签",query:"查询"}};