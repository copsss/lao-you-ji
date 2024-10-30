import {rootUrl,rootUrl2} from '../../utils/params';
Page({
    data: {
        imgUrls: [],
        truePrice:'',
        title:'',
        info:'',
        specLst:[], //规格参数
        id:'',
        attr:'',
        num:1,
        onePrice: '',
        morePrice:'',
        infoImgs:[],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        
    },
     onShareAppMessage() {
        return {
        title: '养老',
        desc: '一个专卖良心商品的网站',
        path: `/pages/proInfo/index?id=${this.data.id}`
        }
    },
    querySpec(e){
       const attr = e.currentTaget.dataset.value;
       this.queryInfo({attr:attr})
    },
    inputVl(e){
        const num = e.detail.value;
        this.howMorePri(num)
    },
    add(){
        const num = this.data.num+1;
      this.howMorePri(num)
        // this.queryInfo({monParam:'morePrice'})
    },
    cut(){
        if (this.data.num < 2) return;
         const num = this.data.num-1;
        this.howMorePri(num)
    },
    howMorePri(num){
        this.setData({
                num:num,
                morePrice:num*this.data.onePrice
            });
    },
    queryInfo({id=false,monParam,num=false,attr=false}={}){
        const setDa = (money)=>{
            const json = {};
            json[monParam] = money
            return json;
        };
        wx.request({
                    url: `${rootUrl}/goods.php?act=price&id=${id?id:this.data.id}&attr=${attr?attr:this.data.attr}&number=${num?num:this.data.num}`,
                    method: 'GET',
                    data: {},
                    header: {
                        'Accept': 'application/json'
                    },
                    success: (res)=> {
                        this.setData(setDa(res.data.result));
                    }
                })
    },
    onLoad(options) {
        this.setData({
            id:options.id
        })
        this.proData(options.id);
       this.queryInfo({id:options.id,monParam:'onePrice',num:1,attr:254});
    },
     proData(id){
        switch(parseInt(id)){
                
                    case 96:
  const randomSpecValue = Math.floor(Math.random() * 10) + 1;
  const randomNum = Math.floor(Math.random() * 10) + 1;
  this.setData({
    title: "蛋黄肉松/艾草黑芝麻/艾草鲜花青团 240克自营(60克*4)/盒",
    truePrice: "49.8",
    specLst: [randomSpecValue],
    imgUrls: [
      "/photo/buy1.jpg", // 请替换为实际的图片路径
      "/photo/buy2.jpg",
      
    ],
    info: "新商品介绍",
    infoImgs: [
      "/photo/buy3.jpg", // 请替换为实际的图片路径
      "/photo/buy4.jpg",
      "/photo/buy5.jpg",
      "/photo/buy6.jpg"
    ]
  });
  break;


        }
    }
})