(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{567:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("h2",{attrs:{id:"综合入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#综合入门"}},[t._v("#")]),t._v(" 综合入门")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("1.hibernate 和 mybatis 区别？")]),s("ol",[s("li",[t._v("hibernate"),s("strong",[t._v("自动")]),t._v("，mybatis半自动")]),t._v(" "),s("li",[s("strong",[t._v("日志")]),t._v(" hibernate自带")]),t._v(" "),s("li",[s("strong",[t._v("移植性")]),t._v(" hibernate：hql qbc面向对象,更换数据库,只更换方言即可")]),t._v(" "),s("li",[s("strong",[t._v("优化")]),t._v("\t  mybatis自己写sql灵活方便")]),t._v(" "),s("li",[t._v("一级"),s("strong",[t._v("缓存")]),s("br"),t._v("\nhibernate底层是Hashtable 线程安全"),s("br"),t._v("\nmybatis底层是HashMap\t\t线程不安全")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("2.spring容器启动流程、配置")]),s("ul",[s("li",[t._v("配置spring.xml")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("初始化springIOC容器,加载spring.xml"),s("br"),t._v(" "),s("code",[t._v('ApplicatonContext ac = \t\t\tnew ClassPathXmlApplicationContext("spring.xml");')])])]),t._v(" "),s("li",[s("p",[t._v("扫描注解"),s("br"),s("code",[t._v('<context:component-scan base-package="com.etoak">')])])]),t._v(" "),s("li",[s("p",[t._v("配置spring加载数据源")]),t._v(" "),s("ul",[s("li",[t._v("DriverManagerDataSource")])])]),t._v(" "),s("li",[s("p",[t._v("配置spring整合mybatis")]),t._v(" "),s("ul",[s("li",[t._v("注入数据源")]),t._v(" "),s("li",[t._v("设置别名(包下所有类类名全部小写)")]),t._v(" "),s("li",[t._v("加载 sql.xml映射文件")]),t._v(" "),s("li",[t._v("加载 PageHelper等插件")])])]),t._v(" "),s("li",[s("p",[t._v("配置扫描接口(sql.xml文件所在包)")]),t._v(" "),s("ul",[s("li",[t._v("获得sqlSessionFactory(上一步的3以获得)\nsqlSessionFactoryBeanName")]),t._v(" "),s("li",[t._v("实例化接口\nbasePackage")])])]),t._v(" "),s("li",[s("p",[t._v("配置事务管理器(只需注入数据源)")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.jdbc.datasource.DataSourceTransactionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("注解(在需要事务的方法上@Transactional)使用声明事务(底层我们用cglib动态代理)")]),t._v(" "),s("p",[t._v('注意属性readOnly="true"为只读，在select时可以设置'),s("br")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 配置事务管理器 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.jdbc.datasource.DataSourceTransactionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 注入数据源  加入事务   但是没有开启事务 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 声明式事务  aop环绕通知--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("tx:")]),t._v("annotation-driven")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("proxy-target-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("transaction-manager")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("3.什么是事务?")]),s("p",[t._v("​\t多条sql语句作为一个执行单元,"),s("strong",[t._v("要么全部执行,要么全不执行")])]),t._v(" "),s("ul",[s("li",[t._v("原子性、一致性、隔离性、持久性")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("4.spring创建事物的方式?(两种)")]),s("ol",[s("li",[s("strong",[t._v("声明式事务")]),t._v(" 在xml中配置信息")]),t._v(" "),s("li",[s("strong",[t._v("编程式事务")]),t._v(" 在代码中编写")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("5.软编码硬编码")]),s("ul",[s("li",[s("strong",[t._v("硬编码")]),t._v("：就是在程序中将代码写死,维护不方便")]),t._v(" "),s("li",[s("strong",[t._v("软编码")]),t._v("：可以在运行时确定,软编码只支持post请求")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("6.web.xml文件加载先后顺寻")]),s("ol",[s("li",[s("em",[s("strong",[t._v("listener")])]),s("br"),t._v("\n​\t\t多个监听器\t谁在前\t谁先被加载")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("filter")])]),s("br"),t._v("\n多个过滤器\t谁在前\t谁先被加载")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("servlet")])]),s("br"),t._v("\n启动不会被加载\n当第一个请求发送过来时"),s("code",[t._v("<url-pattern>*.do</url-pattern>")]),t._v(" 才会被实例化")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("7.HttPServlet声明周期")]),s("ol",[s("li",[t._v("实例化")]),t._v(" "),s("li",[t._v("初始化方法")]),t._v(" "),s("li",[t._v("运行(doGet/doPost)")]),t._v(" "),s("li",[t._v("消亡")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("8.springmvc提供的两种视图类型")]),s("ol",[s("li",[s("strong",[t._v("ModelAndView")])]),t._v(" "),s("li",[s("strong",[t._v("String")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("9.重定向和请求转发")]),s("ol",[s("li",[s("strong",[t._v("请求转发")]),t._v("：发送一次请求,跳转后地址栏不发生改变")]),t._v(" "),s("li",[s("strong",[t._v("重定向")]),t._v("：跳转后地址栏发生改变"),s("br"),t._v("\n主要用在防止表单重复提交、\n不能使用request范围、\n跳转之后肯定执行doGet方法")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("10.springmvc流程")]),s("ol",[s("li",[s("p",[t._v("新建一个页面,发送"),s("strong",[t._v("第一次请求地址")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("到达web.xml")]),t._v("，web.xml依次加载")]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("listener")])]),t._v("：初始化spring容器")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("filter")])]),t._v("：设置请求、响应编码")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("servlet")])]),t._v("：\n默认加载WEB-INF/某某某(注意名字保持一致,可自定义)-servlet.xml配置文件\n拦截请求")])])]),t._v(" "),s("li",[s("p",[t._v("加载XXX-servlet.xml配置文件并解析"),s("br")]),t._v(" "),s("p",[t._v("​\t\t[1] context注解扫描"),s("br"),t._v("\n​\t\t\t  springmvc必须的有@Controller注解(得在这层接收客户端请求)"),s("br")]),t._v(" "),s("p",[t._v("​\t\t[2] 配置映射器、适配器 、类型转换(底层自动实现)"),s("br"),t._v("\n​\t\t\t<mvc:acnotation-driven />")]),t._v(" "),s("p",[t._v("​\t\t[3] 实例化视图解析器"),s("br")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 视图解析器 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.view.InternalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 前缀 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pages/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 后缀 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".jsp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("​\t\t[4] 文件上传解析器,id必须是这个")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("multipartResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.multipart.commons.CommonsMultipartResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("defaultEncoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("maxUploadSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3000000000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("通过拦截的请求来"),s("strong",[t._v("匹配@Controller层")])]),t._v(" "),s("p",[t._v('​\t\t[1] 映射器匹配拿到的请求\n​\t\t\t在某个方法上@RequestMappeing(value="/login")')]),t._v(" "),s("p",[t._v("​\t\t[2] 适配器指定执行这个方法")]),t._v(" "),s("p",[t._v('​\t\t[3] 接受请求参数,并经行类型转换\n@RequestParam(valeu="前台name")'),s("br"),t._v('\n​\t\t\t注意日期不能自动转,所以有个注解@DateTimeFormat(pattern="yyyy-MM-dd")')])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("执行方法")]),t._v("里的业务逻辑")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ModelAndView")]),t._v("跳转视图"),s("br"),t._v('\nModelAndView mv = new ModelAndView("除前后缀页面");\n​\t\treturn mv;')])]),t._v(" "),s("li",[s("p",[t._v("视图解析器"),s("strong",[t._v("渲染视图")]),t._v("名称,完成之后跳转视图")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("11.springmvc组成部分")]),s("ol",[s("li",[s("strong",[t._v("自中央处理器")]),t._v("\tDispatcherServlet"),s("br")]),t._v(" "),s("li",[s("strong",[t._v("映射器")]),t._v("\t\tmvc:annotation-driven\t@RequestMappeing"),s("br")]),t._v(" "),s("li",[s("strong",[t._v("适配器")]),t._v("\t\tmvc:annotation-driven\t执行方法")]),t._v(" "),s("li",[s("strong",[t._v("处理器")]),t._v("\t\t@Controller"),s("br")]),t._v(" "),s("li",[s("strong",[t._v("视图解析器")]),t._v("\tInternalResourceViewResolver"),s("br")]),t._v(" "),s("li",[s("strong",[t._v("视图")]),t._v("         我们看不见，底层动的"),s("br")]),t._v(" "),s("li",[s("strong",[t._v("异常处理器")]),s("br")]),t._v(" "),s("li",[s("strong",[t._v("上传解析器")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("12.spring Bean 声明周期")]),s("p",[t._v("​\t"),s("a",{attrs:{href:"https://blog.csdn.net/admin9527_/article/details/78506135",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring Bean 声明周期"),s("OutboundLink")],1)])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("13.如何在src目录加载properties")]),s("p",[s("code",[t._v('<context:property-placeholder file-encoding="UTF-8" \t\t\t\t\t\tlocation="classpath:jdbc.properties"/>')])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("14.将文件存放到数据库中")]),s("table",[s("thead",[s("tr",[s("th",[t._v("mysql")]),t._v(" "),s("th",[t._v("oracle")]),t._v(" "),s("th",[t._v("java")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("longblob")]),t._v(" "),s("td",[t._v("blob")]),t._v(" "),s("td",[t._v("byte[]")]),t._v(" "),s("td",[t._v("二进制类型")])]),t._v(" "),s("tr",[s("td",[t._v("text")]),t._v(" "),s("td",[t._v("clob")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("大文本类型")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("15.springmvc文件上传")]),s("p",[t._v("​\t有个类MultipartFile、方法transferTo")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MultipartFile")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSession")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//MultipartFile有transferTo()这么一个方法写出文件")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("filenewname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("springmvc文件下载")]),t._v(" "),s("p",[t._v("记得设置响应头信息\n"),s("code",[t._v('response.setHeader("Content-Disposition","attachment;filename="+filename);')])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("16，springmvc 提供2种 请求格式")]),s("ol",[s("li",[s("p",[t._v("*.do、*.action")])]),t._v(" "),s("li",[s("p",[t._v("/       默认不加载静态资源  js css "),s("br"),t._v("\t\t\t\t默认不加载静态资源，要加载的话需要在spring配置文件中配置解析")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 静态servlet对象 针对/请求不加载静态资源 js css img  --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("default-servlet-handler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("17.在前端 json 和 js对象的互转")]),s("ul",[s("li",[t._v("JSON.parse(str);")]),t._v(" "),s("li",[t._v("JSON.stringify(object);")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("18.springmvc集成spring,可以使用spring拥有的信息,但只能使用spring的ioc信息,aop不能使用")]),s("p",[t._v("​\t\t即：容器启动时,spring先加载,springmvc后加载"),s("br"),t._v("\n​\t\t\tspring \t  配置事务,事务底层时aop实现的,springmvc没有aop的配置"),s("br"),t._v("\n​\t\t\t"),s("strong",[t._v("springmvc 没有配置事务,所以会覆盖掉spring配置")]),s("br")]),t._v(" "),s("p",[t._v("​\t\t所以事务会失效，"),s("em",[s("strong",[t._v("解决办法")])]),t._v("："),s("br"),t._v("\n​\t\t\t"),s("code",[t._v("让springmvc不扫描有事务的层(service层)只扫描Controller层")]),s("br"),t._v("\n​\t\t\t"),s("code",[t._v("让spring扫描除了Controller的其他层")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("19.数据库建表3范式")]),s("ol",[s("li",[t._v("关系型数据库"),s("br"),t._v("\n表、字段、值\t"),s("strong",[t._v("有相互关系")])]),t._v(" "),s("li",[t._v("创建字段"),s("br"),t._v("\n所有字段中"),s("strong",[t._v("必须有一个字段是唯一的")])]),t._v(" "),s("li",[s("strong",[t._v("字段不能冗余")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("20.disabled和readonly的区别")]),s("ul",[s("li",[t._v("都是使文本框失效(不能输入)"),s("br"),t._v(" "),s("em",[s("strong",[t._v("disabled")])]),t._v("：前端显示为灰色,后台接受值为null"),s("br"),t._v(" "),s("em",[s("strong",[t._v("readonly")])]),t._v("：前端显示为白色,后台可以接受到值")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("21.bootstrap和easyui区别")]),s("ul",[s("li",[t._v("easyui \t  是"),s("strong",[t._v("js框架")]),t._v(",没有响应式布局")]),t._v(" "),s("li",[t._v("bootstrap 侧重css的前端框架,有"),s("strong",[t._v("响应式布局")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("22.js中 == 和 === 的区别")]),s("p",[t._v("​\t== 只比较内容"),s("br"),t._v("\n​\t===\t先比较类型，再比较内容")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("23.过滤器和拦截器的区别")]),s("ul",[s("li",[t._v("过滤器："),s("br"),t._v("\n在web.xml中配置,"),s("strong",[t._v("由servlet")]),t._v("实例化对象,spring不能注入,"),s("strong",[t._v("什么请求都拦截")])]),t._v(" "),s("li",[t._v("拦截器："),s("br"),t._v("\n只拦截后台请求,\n都是"),s("strong",[t._v("由spring进行管理")]),t._v("的,springmvc"),s("strong",[t._v("除了jsp之外都拦截")])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("24.struts2和springmvc的区别")]),s("ol",[s("li",[s("strong",[t._v("入口")]),s("br"),t._v("\nstruts2：web.xml filter元素,容器启动初始化"),s("br"),t._v("\nmvc:\t\tweb.xml servlet元素,第一次触发请求实例化对象")]),t._v(" "),s("li",[s("strong",[t._v("创建对象")]),s("br"),t._v("\nstruts2： 基于类开发,发送请求时,每次都会创建对象,多例的"),s("br"),t._v("\nmvc:\t基于方法开发,一般设计为单例(默认)")]),t._v(" "),s("li",[s("strong",[t._v("接受请求参数")]),s("br"),t._v("\nstruts2:\t成员变量\t依赖类存在"),s("br"),t._v("\nmvc:\t\t局部变量\t依赖方法存在")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("25.数据库中的符号")]),s("p",[t._v("​\t and 相当于\t&&"),s("br"),t._v("\n​\t or 相当于\t||"),s("br"),t._v("\n​\t "),s("code",[t._v("&gt;")]),t._v(" 相当于\t>"),s("br"),t._v("\n​\t"),s("code",[t._v("&lt;")]),t._v(" 相当于\t<"),s("br")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("26.事务的\t隔离机制和七种传播途径")]),s("ul",[s("li",[s("p",[t._v("脏读:读到了其他事物未提交的数据")])]),t._v(" "),s("li",[s("p",[t._v("不可重复读:一次读取到记录之后其他事物对这条数据进行了修改,再次读取数据不一致")])]),t._v(" "),s("li",[s("p",[t._v("幻读:相同的查询条件首次查询后,其他事物添加或删除了新的数据,再次查询不一致")])]),t._v(" "),s("li",[s("p",[t._v("隔离机制：(解决脏读,不可重复读,幻读)")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("脏读")]),t._v(" "),s("th",[t._v("不可重复读")]),t._v(" "),s("th",[t._v("幻读")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Read uncommitted :")]),t._v(" "),s("td",[t._v("会")]),t._v(" "),s("td",[t._v("会")]),t._v(" "),s("td",[t._v("会")])]),t._v(" "),s("tr",[s("td",[t._v("Read committed :")]),t._v(" "),s("td",[t._v("不会")]),t._v(" "),s("td",[t._v("会")]),t._v(" "),s("td",[t._v("会")])]),t._v(" "),s("tr",[s("td",[t._v("Repeatable read :")]),t._v(" "),s("td",[t._v("不会")]),t._v(" "),s("td",[t._v("不会")]),t._v(" "),s("td",[t._v("会")])]),t._v(" "),s("tr",[s("td",[t._v("Serializable :")]),t._v(" "),s("td",[t._v("不会")]),t._v(" "),s("td",[t._v("不会")]),t._v(" "),s("td",[t._v("不会")])])])]),t._v(" "),s("ul",[s("li",[t._v("传播行为:"),s("br"),t._v("\n国内最常用的就是propagation_required\n"),s("strong",[t._v("事务的操作有异常是都得向上抛")]),t._v(",不能向上抛就自己new一个异常,不要try(非要try的话,就自己在造一个异常)。")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("27.随便写一个自增编号")]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Calendar")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Calendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" no "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%04d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("28.maven的作用")]),s("ul",[s("li",[t._v("依赖管理jar包")]),t._v(" "),s("li",[t._v("基于多模块")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("29.xml和对象的互转")]),s("p",[t._v("​\tjava jaxb")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("30.网络传输,跨项目访问")]),s("ul",[s("li",[s("em",[s("strong",[t._v("webService")])]),t._v(": 既可以当客户端又可以当服务端\n"),s("ol",[s("li",[t._v("跨平台\t跨语言")]),t._v(" "),s("li",[t._v("多用在企业")]),t._v(" "),s("li",[t._v("soap协议")]),t._v(" "),s("li",[s("code",[t._v("http://localhost:8080/SSM/ws/user?wsdl")])])])]),t._v(" "),s("li",[s("em",[s("strong",[t._v("httpclient")])]),t._v(": 相当于客户端\n"),s("ol",[s("li",[t._v("多用在互联网  调接口/新老系统模块的调用")]),t._v(" "),s("li",[t._v("http协议")]),t._v(" "),s("li",[s("code",[t._v("http://localhost:8080/SSM/ws/user")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("31.webService如何使用")]),s("ul",[s("li",[s("p",[s("strong",[t._v("服务端")]),t._v("：")]),t._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[t._v("先在web.xml文件中配置")]),t._v(" "),s("li",[t._v("配置服务端cxf.xml文件")]),t._v(" "),s("li",[t._v("定义一个bean类")]),t._v(" "),s("li",[t._v("争对这个bean写一个接口,在接口前加注解@javax.jws.WebService")]),t._v(" "),s("li",[t._v("在这个接口里写响应的增删该查(定义方法的参数和返回值时 注意不要使用Map对象)")]),t._v(" "),s("li",[t._v("针对接口写实现类")]),t._v(" "),s("li",[t._v("在实现类上加@javax.jws.WebService\n，@org.springframework.stereotype.Service //这是一个服务层\n在类里写响应的实现")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("客户端")]),t._v("：")]),t._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[t._v("新建一个测试项目")]),t._v(" "),s("li",[t._v("配置客户端cxf.xml文件\n（具体使用见下一题）"),s("br"),t._v("\n将生成的文件复制到工程中,新建一个test类测试")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("32.cxf测试接口的工具如何使用:")]),s("ol",[s("li",[s("p",[s("strong",[t._v("配置cxf环境变量")]),s("br"),t._v("\npath=E:\\web server\\apache-cxf-3.1.11\\bin")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("cmd下输入命令")]),s("br"),t._v(" "),s("code",[t._v("wsdl2java -d d:/ws -p com.etoak.client http://localhost:8080/SSM/ws/user?wsdl")]),s("br"),t._v(" "),s("code",[t._v("-d")]),t._v("表示生成客户端代码的位置"),s("br"),t._v(" "),s("code",[t._v("-p")]),t._v("表示生成客户端代码的包结构")])])]),t._v(" "),s("ul",[s("li",[t._v("其它方式："),s("strong",[t._v("soapui工具")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);