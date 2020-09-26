;


//---------------------------------组件创建区--------------------------------------
// 创建底部主菜单栏组件
let maincpn = Vue.extend({
    template:'#maintemp'
});
// 创建返回顶部组件
let backtopcpn = Vue.extend({
    template:'#backtotop',
    data:function () {
        return {
            topDistance:0
        }
    },
    mounted(){
        window.addEventListener('scroll',this.getTopDistance)

    },
    methods:{
        getTopDistance:function () {
            this.topDistance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

        },
        backtotop:function () {
            let timeCounter = setInterval(function (){
                if(document.documentElement.scrollTop>0||document.body.scrollTop>0||window.pageYOffset>0) {
                    document.documentElement.scrollTop -= 10;
                    document.body.scrollTop -= 10;
                    window.pageYOffset -= 10;
                }else {
                    clearInterval(timeCounter);
                }
                // 控制台测试行
                console.log("~~~~~~~~~~~~~~");
            },5);
        }
    }
});
// 创建主页面顶部组件
let topbanner = Vue.extend({
    template:'#topbannertepm',
    data:function () {
        return {
            topDistance:0
        }
    },
    mounted(){
        window.addEventListener('scroll',this.getTopDistance)
    },
    methods:{
        getTopDistance:function () {
            this.topDistance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if($(".topbannerinfo").length){
                if(this.topDistance >40){
                    $(".topbannerinfo").css("display","none");
                    $(".topbannertepm").addClass("fixed-top");

                }else{
                    $(".topbannerinfo").css("display","block");
                    $(".topbannertepm").removeClass("fixed-top");

                }
            }else{
                $(".topbannertepm").addClass("fixed-top");

            }
        },

    }
});


// 创建顶部类型列表组件
let topTypeCpn = Vue.extend({
    template:'#typelist'

});

// 创建广告信息栏的组件
let indexadCpn = Vue.extend({
    template:'#indexad'
});

// 创建主页面店家列表组件
let storeListsCpn = Vue.extend({
    template:'#storeLists'
});

// 创建find页面里的商家列表组件
let findStoreListsCpn = Vue.extend({
    template:'#findStoreLists'
});
// 创建登陆注册组件
let loginInnerCpn = Vue.extend({
    template:'#loginCpnTemp'
});


// 创建注册界面里的小组件
let registerInnerCpn = Vue.extend({
    template:'#registerInnerTemp'
});

// 创建结算底部小组件
let orderBottomCpn = Vue.extend({
    template:'#orderBottomTemp'
});

// 创建商品信息内容小组件
let busContentCpn = Vue.extend({
    template:'#busContentTemp',

});

// 创建订单页面小组件
let orderInnerCpn = Vue.extend({
    template:'#orderInnerTemp',
    data:function(){
        return{
            flag:false
        }
    },
    methods:{
        showorder:function () {
            this.flag = !this.flag;
        }
    }
});

// 创建确认支付信息的小组件
let orderConformInnerCpn = Vue.extend({
    template:'#orderConformTemp'
});

// 创建付款页面的小组件
let payInnerCpn = Vue.extend({
    template:'#payInnerTemp',
    data:function(){
        return{
            flag:false
        }
    },
    methods:{
        showorder:function () {
            this.flag = !this.flag;
        }
    }
});

//--------------------------------------大组件创建区-----------------------------
// 创建主界面index的大组件
let homeCpn = Vue.extend({
    template:'#homeTemp',
    props:[]
});

// 创建发现界面find的大组件
let findCpn = Vue.extend({
    template:'#findTemp'
});

// 创建订单了列表orderlist的大组件
let orderListCpn = Vue.extend({
    template:'#orderListTemp'
});

// 创建登陆界面的login大组件
let loginCpn = Vue.extend({
    template:'#loginTemp'
});

// 创建注册页面的register大组件
let registerCpn = Vue.extend({
    template:'#registerTemp'
});

// 创建商家信息页面的businessInfo大组件
let businessInfoCpn = Vue.extend({
    template:'#businessInfoTemp',

});

let conformOrderCpn = Vue.extend({
    template:'#conformOrderTemp'
});

let payCpn = Vue.extend({
    template:'#payTemp'
});

// ---------------------------组件注册区---------------------------------

// 小组件区
let maincpntt = Vue.component('maincpn', maincpn);
let backtoptt = Vue.component('backtotop', backtopcpn);
let topbannercpn = Vue.component('topbanner',topbanner);
let toptypecpn = Vue.component('toptypecpn',topTypeCpn);
let indexadcpn = Vue.component('indexadcpn',indexadCpn);
let storelistscpn = Vue.component('storelistscpn',storeListsCpn);
let findstorelistscpn = Vue.component('findstorelistscpn',findStoreListsCpn);
let logininnercpn = Vue.component('logininnercpn',loginInnerCpn);
let registerinnercpn = Vue.component('registerinnercpn',registerInnerCpn);
let orderbottomcpn = Vue.component('orderbottomcpn',orderBottomCpn);
let buscontentcpn = Vue.component('buscontentcpn',busContentCpn);
let orderinnercpn = Vue.component('orderinnercpn', orderInnerCpn);
let orderconforminnercpn = Vue.component('orderconforminnercpn',orderConformInnerCpn);
let payinnercpn  = Vue.component('payinnercpn',payInnerCpn);



// 大组件区
let homecpn = Vue.component('homecpn',homeCpn);
let findcpn = Vue.component('findcpn',findCpn);
let orderlistcpn = Vue.component('orderlistcpn',orderListCpn);
let logincpn = Vue.component('logincpn',loginCpn);
let registercpn = Vue.component('registercpn',registerCpn);
let businessinfocpn = Vue.component('businessinfocpn',businessInfoCpn);
let conformordercpn = Vue.component('conformordercpn',conformOrderCpn);
let paycpn = Vue.component('paycpn',payCpn);


//---------------------------过滤器区------------------------------------

//创建全局过滤器: 在金额的前面添加¥
Vue.filter('moneyFmt', function (value) {
    if (parseFloat(value)) {
        return "¥ " + parseFloat(value).toFixed(2);
    }
});
// 配送距离过滤器
Vue.filter('kmFmt', function (value) {
    if (parseFloat(value)) {
        return  parseFloat(value).toFixed(2) + "km";
    }
});
// ---------------------------------路由配置区-----------------------------------------
// 配置路由
let routers = [
    {path:'/home',component:homeCpn},
    {path:'/find',component:findCpn},
    {path:'/orderlist',component:orderListCpn},
    {path:'/login',component:loginCpn},
    {path:'/register',component:registerCpn},
    {path:'/businessinfo',component:businessInfoCpn},
    {path:'/conformorder',component:conformOrderCpn},
    {path:'/pay',component:payCpn},


    {path:'/',component:homeCpn},
    {path:'*',component:homeCpn}
];
// 生成路由实例
let myrouter = new VueRouter({
    routes:routers
});

// ---------------------------------Vue对象--------------------------------------------
const vm = new Vue({
    el: "#app", /* */
    data: {
        infoLists:[],
        topTypeLists:[],
        goodsLists:[],
        orderlists:[],
        count:1
    },
    router:myrouter,
    mounted(){
        this.$http.get("info/storeinfo.json").then(
            function (res) {
                this.infoLists = res.body.dataZone;
                console.log(this.infoLists);
                this.topTypeLists = res.body.topInfoList;
                console.log(this.topTypeLists);
                for(item of this.infoLists) {
                    this.goodsLists =item.goods;
                    break;
                }
                console.log(this.goodsLists);
            }
        )
    },
    computed:{
        amount:function () {
            console.log("111111111111111111111111");
            let sum = 0;
            for (temp of this.goodsLists) {
                sum += temp.gprice * temp.gcount;
                if (temp.gcount != 0) {
                    this.orderlists.push(temp);
                }
            }
            console.log(sum);
            console.log(this.orderlists);
            return sum + 3;
        }
    }
});

