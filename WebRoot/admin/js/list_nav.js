var t;
t=outlookbar.addtitle('系统属性')
outlookbar.additem('系统属性',t,'/dingpiao/admin/index/sysPro.jsp')


t=outlookbar.addtitle('修改密码')
outlookbar.additem('密码修改',t,'/dingpiao/admin/userinfo/userPw.jsp')


t=outlookbar.addtitle('用户管理')
outlookbar.additem('用户管理',t,'/dingpiao/userMana.action')

t=outlookbar.addtitle('电影类别')
outlookbar.additem('类别管理',t,'/dingpiao/catelogMana.action')
outlookbar.additem('添加类别',t,'/dingpiao/admin/catelog/catelogAdd.jsp')

t=outlookbar.addtitle('电影票管理')
outlookbar.additem('电影票管理',t,'/dingpiao/goodsManaNoTejia.action')
outlookbar.additem('添加电影票',t,'/dingpiao/admin/goods/goodsNoTejiaAdd.jsp')


t=outlookbar.addtitle('订单管理')
outlookbar.additem('订单管理',t,'/dingpiao/orderMana.action')

t=outlookbar.addtitle('留言管理')
outlookbar.additem('留言管理',t,'/dingpiao/liuyanMana.action')


t=outlookbar.addtitle('退出系统') 
outlookbar.additem('安全退出',t,'/dingpiao/login.jsp')