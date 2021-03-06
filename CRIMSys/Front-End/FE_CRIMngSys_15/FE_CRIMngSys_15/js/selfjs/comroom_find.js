/**
 * Created by Microsoft on 2016/8/12.
 */
$(function(){
    $('#table').datagrid({
        width:1250,
        iconCls:'icon-ok',
        url:'',
        title:'机房详情 ',
        iconCls:'icon-search',

        columns:[[
            {
                field:'dev_id',
                title:'机房编号',
                width:100
            },
            {
                field:'dev_name',
                title:'机房名称',
                width:100
            },
            {
                field:'Cr_id',
                title:'所属区域',
                width:100
            },
            {
                field:'dev_businesssys',
                title:'机房地址',
                width:100
            },
            {
                field:'dev_brandname',
                title:'机房联系人',
                width:100
            },
            {
                field:'dev_modelnum',
                title:'联系人手机',
                width:100
            },
            {
                field:'dev_modelnum',
                title:'联系人邮箱',
                width:100
            },
            {
                field:'dev_productnum',
                title:'是否有效',
                width:100
            }


        ]],
        pagination:true,
        pageSize:5,
        pageList:[5,10,15]
    });
});
