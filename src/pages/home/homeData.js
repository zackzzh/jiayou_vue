export default {
  // 首页背景图
  muneList: {
    key: "m-01",
    bgImgUrl: "static/home/rightMenu.png",
    list: [{
        key: 1,
        link: "homeOne",
        title: "首页置顶",
        isCenterImg: false,
        animationClass: "rotateInDownLeft",
        imgUrl: "static/home/homeOne.png"
      },
      {
        key: 2,
        link: "homeTwo",
        title: "热门服务",
        isCenterImg: true,
        isSlideshow: true,
        imgUrl: "static/home/homeTwo.png"
      },
      {
        key: 7,
        link: "homeSeven",
        title: "关于我们",
        isCenterImg: false,
        imgUrl: "static/home/homeSeven.png"
      },
      {
        key: 3,
        link: "homeThree",
        title: "精品案例",
        isCenterImg: false,
        isBottomImg: true,
        imgUrl: ""
        // imgUrl: "static/home/homeThree.png"
      },
      {
        key: 4,
        link: "homeFour",
        title: "新闻动态",
        sizeBg: true,
        isCenterImg: true,
        isNews: true,
        imgUrl: "static/home/homeFour.png"
      }
      // {
      //     key: 5,
      //     link: "homeFive",
      //     title: "电商平台",
      //     isCenterImg: false,
      //     imgUrl: "static/home/homeFive.png"
      // },
      // {
      //     key: 6,
      //     link: "homeSix",
      //     title: "运营推广",
      //     isCenterImg: false,
      //     imgUrl: "static/home/homeSix.png"
      // },
    ]
  },
  // 走马灯
  slideshowList: [{
      key: "101",
      title: "运营101推广",
      enTitle: "Operation Promotion",
      animationClass: "bounceInDown",
      imgUrl: "static/home/phoneImg/01.png",
      linkList: [{
        key: "101-1",
        title: "运营推广01"
      }, {
        key: "101-2",
        title: "运营推广02"
      }, {
        key: "101-3",
        title: "运营推广03"
      }, {
        key: "101-4",
        title: "运营推广04"
      }]
    },
    {
      key: "102",
      title: "App102开发",
      enTitle: "APP Development",
      animationClass: "bounceInRight",
      imgUrl: "static/home/phoneImg/02.png",
      linkList: [{
        key: "102-1",
        title: "App开发"
      }]
    },
    {
      key: "103",
      title: "网站103建设",
      enTitle: "Website Construction",
      animationClass: "fadeInLeft",
      imgUrl: "static/home/phoneImg/03.png",
      linkList: [{
        key: "103-1",
        title: "企业官网"
      }, {
        key: "103-2",
        title: "营销型网站"
      }, {
        key: "103-3",
        title: "响应式网站"
      }]
    },
    {
      key: "104",
      title: "移动104开发",
      enTitle: "Mobile Development",
      animationClass: "fadeInRight",
      imgUrl: "static/home/phoneImg/04.png",
      linkList: [{
        key: "104-1",
        title: "移动开发01官网"
      }, {
        key: "104-2",
        title: "移动开发网站"
      }]
    },
    {
      key: "105",
      title: "电商105平台",
      enTitle: "Commerce Platform",
      animationClass: "bounceInLeft",
      imgUrl: "static/home/phoneImg/05.png",
      linkList: [{
        key: "105-1",
        title: "电商平台网站"
      }]
    },
    // {
    //     key: "106",
    //     title: "这是106呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/06.png",
    //     linkList: [{
    //         key: "106-1",
    //         title: "这是106网站"
    //     }, {
    //         key: "106-2",
    //         title: "这是106网站"
    //     }]
    // }, 
    // {
    //     key: "107",
    //     title: "这是107呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/07.png",
    //     linkList: [{
    //         key: "107-1",
    //         title: "这是107网站"
    //     }]
    // },
    // {
    //     key: "108",
    //     title: "这是108呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/08.png",
    //     linkList: [{
    //         key: "108-1",
    //         title: "这是108网站"
    //     }, {
    //         key: "108-2",
    //         title: "这是108网站"
    //     }]
    // }, {
    //     key: "109",
    //     title: "这是109呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/09.png",
    //     linkList: [{
    //         key: "109-1",
    //         title: "这是109网站"
    //     }]
    // },
    // {
    //     key: "110",
    //     title: "这是110呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/08.png",
    //     linkList: [{
    //         key: "110-1",
    //         title: "这是110网站"
    //     }, {
    //         key: "110-2",
    //         title: "这是110网站"
    //     }]
    // }, {
    //     key: "111",
    //     title: "这是111呀",
    //     enTitle: "Commerce Platform",
    //     imgUrl: "static/home/phoneImg/09.png",
    //     linkList: [{
    //         key: "111-1",
    //         title: "这是111网站"
    //     }]
    // }
  ],
  // 精品案例
  caseList: [{
    key: "c01",
    title: "标题01",
    subtitle: "这是副标题01",
    textData: "这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01这是简介01",
    imgUrl: "static/home/caseImg/01.png",
    link: "link01"
  }, {
    key: "c02",
    title: "标题02",
    subtitle: "这是副标题02",
    textData: "这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02这是简介02",
    imgUrl: "static/home/caseImg/02.png",
    link: "link02"
  }, {
    key: "c03",
    title: "标题03",
    subtitle: "这是副标题04",
    textData: "这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03这是简介03",
    imgUrl: "static/home/caseImg/03.png",
    link: "link03"
  }, {
    key: "c04",
    title: "标题04",
    subtitle: "这是副标题04",
    textData: "这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04这是简介04",
    imgUrl: "static/home/caseImg/04.png",
    link: "link04"
  }, {
    key: "c05",
    title: "标题05",
    subtitle: "这是副标题05",
    textData: "这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05这是简介05",
    imgUrl: "static/home/caseImg/05.png",
    link: "link05"
  }, {
    key: "c06",
    title: "标题06",
    subtitle: "这是副标题06",
    textData: "这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06这是简介06",
    imgUrl: "static/home/caseImg/06.png",
    link: "link06"
  }, {
    key: "c07",
    title: "标题07",
    subtitle: "这是副标题07",
    textData: "这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07这是简介07",
    imgUrl: "static/home/caseImg/07.png",
    link: "link07"
  }, {
    key: "c08",
    title: "标题08",
    subtitle: "这是副标题08",
    textData: "这是简介08这是简介08这是简介08这是简介08这是简介08这是简介08这是简介08这是简介08这是简介08这是简介08",
    imgUrl: "static/home/caseImg/08.png",
    link: "link08"
  }],
  newsList: {
    leftList: [{
      key: "n01",
      title: "最新签约",
      isLeft: true,
      // 最新签约
      list: [{
        key: "n01-1",
        title: "签约标题01签约标题01签约标题01签约标题01",
        createDate: "2019-01-01",
        imgUrl: "static/home/newsImg/01.png",
      }, {
        key: "n01-2",
        title: "签约标题02签约标题02签约标题02签约标题02",
        createDate: "2019-01-02",
        imgUrl: "static/home/newsImg/02.png",
      }, {
        key: "n01-3",
        title: "签约标题03签约标题03",
        createDate: "2019-03-01",
        imgUrl: "static/home/newsImg/03.png",
      }, {
        key: "n01-4",
        title: "签约标题04签约标题04签约标题04签约标题04签约标题04",
        createDate: "2014-01-01",
        imgUrl: "static/home/newsImg/04.png",
      }, {
        key: "n01-5",
        title: "签约标题05签约标题05签约标题05签约标题05",
        createDate: "2015-05-01",
        imgUrl: "static/home/newsImg/05.png",
      }]
    }, {
      key: "n02",
      title: "最新案例",
      isLeft: true,
      // 最新案例
      list: [{
        key: "n02-1",
        title: "案例标题01案例标题01案例标题01案例标题01案例标题01",
        createDate: "2019-01-01",
        imgUrl: "static/home/newsImg/02.png",
      }, {
        key: "n02-2",
        title: "案例标题02案例标题02案例标题02案例标题02案例标题02",
        createDate: "2019-02-02",
        imgUrl: "static/home/newsImg/03.png",
      }, {
        key: "n02-3",
        title: "案例标题03案例标题03案例标题03案例标题03案例标题03案例标题03",
        createDate: "2019-03-03",
        imgUrl: "static/home/newsImg/05.png",
      }, {
        key: "n02-4",
        title: "案例标题04案例标题04案例标题04案例标题04",
        createDate: "2014-04-04",
        imgUrl: "static/home/newsImg/06.png",
      }, {
        key: "n02-5",
        title: "案例标题05案例标题05",
        createDate: "2015-05-05",
        imgUrl: "static/home/newsImg/07.png",
      }]
    }, ],
    rightList: [{
      key: "n-r-01",
      title: "行业新闻",
      isRight: true,
      list: [{
          key: "n-r-01-1",
          title: "行业新闻01",
          createDate: "2019-01-01",
          textData: "这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01这是行业新闻内容01",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-2",
          title: "行业新闻02行业新闻02行业新闻02行业新闻02行业新闻02行业新闻02行业新闻02",
          createDate: "2019-01-02",
          textData: "这是行业新闻内容02",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-3",
          title: "行业新闻03行业新闻03行业新闻03行业新闻03",
          createDate: "2019-01-03",
          textData: "这是行业新闻内容03",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-4",
          title: "行业新闻04",
          createDate: "2019-01-04",
          textData: "这是行业新闻内容04",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-5",
          title: "行业新闻05",
          createDate: "2019-01-06",
          textData: "这是行业新闻内容06",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-6",
          title: "行业新闻06",
          createDate: "2019-01-06",
          textData: "这是行业新闻内容06",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-7",
          title: "行业新闻07",
          createDate: "2019-01-07",
          textData: "这是行业新闻内容07",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-8",
          title: "行业新闻08",
          createDate: "2019-01-08",
          textData: "这是行业新闻内容08",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-9",
          title: "行业新闻09",
          createDate: "2019-01-09",
          textData: "这是行业新闻内容09",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-10",
          title: "行业新闻010",
          createDate: "2019-01-10",
          textData: "这是行业新闻内容10",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-11",
          title: "行业新闻011",
          createDate: "2019-01-11",
          textData: "这是行业新闻内容11",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-12",
          title: "行业新闻012",
          createDate: "2019-01-12",
          textData: "这是行业新闻内容12",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-13",
          title: "行业新闻013",
          createDate: "2019-01-13",
          textData: "这是行业新闻内容13",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-14",
          title: "行业新闻014",
          createDate: "2019-01-14",
          textData: "这是行业新闻内容14",
          imgUrl: "static/home/newsImg/01.png",
        },
        {
          key: "n-r-01-15",
          title: "行业新闻015",
          createDate: "2019-01-15",
          textData: "这是行业新闻内容15",
          imgUrl: "static/home/newsImg/01.png",
        }
      ]
    }, {
      key: "n-r-02",
      title: "行业洞察",
      isRight: true,
      list: [{
          key: "n-r-02-1",
          title: "行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01行业洞察01",
          createDate: "2019-02-01",
          textData: "这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01这是行业洞察内容01",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-2",
          title: "行业洞察02",
          createDate: "2019-01-02",
          textData: "这是行业洞察内容02",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-3",
          title: "行业洞察03行业洞察03行业洞察03行业洞察03",
          createDate: "2019-01-03",
          textData: "这是行业洞察内容03",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-4",
          title: "行业洞察04",
          createDate: "2019-01-04",
          textData: "这是行业洞察内容04",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-5",
          title: "行业洞察05",
          createDate: "2019-01-06",
          textData: "这是行业洞察内容06",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-6",
          title: "行业洞察06",
          createDate: "2019-01-06",
          textData: "这是行业洞察内容06",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-7",
          title: "行业洞察07",
          createDate: "2019-01-07",
          textData: "这是行业洞察内容07",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-8",
          title: "行业洞察08",
          createDate: "2019-01-08",
          textData: "这是行业洞察内容08",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-9",
          title: "行业洞察09",
          createDate: "2019-01-09",
          textData: "这是行业洞察内容09",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-10",
          title: "行业洞察010",
          createDate: "2019-01-10",
          textData: "这是行业洞察内容10",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-11",
          title: "行业洞察011",
          createDate: "2019-01-11",
          textData: "这是行业洞察内容11",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-12",
          title: "行业洞察012",
          createDate: "2019-01-12",
          textData: "这是行业洞察内容12",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-13",
          title: "行业洞察013",
          createDate: "2019-01-13",
          textData: "这是行业洞察内容13",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-14",
          title: "行业洞察014",
          createDate: "2019-01-14",
          textData: "这是行业洞察内容14",
          imgUrl: "static/home/newsImg/02.png",
        },
        {
          key: "n-r-02-15",
          title: "行业洞察015",
          createDate: "2019-01-15",
          textData: "这是行业洞察内容15",
          imgUrl: "static/home/newsImg/02.png",
        }
      ]
    }, {
      key: "n-r-03",
      title: "建站经验",
      isRight: true,
      list: [{
          key: "n-r-03-1",
          title: "建站经验01",
          createDate: "2019-03-01",
          textData: "这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01这是建站经验内容01",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-2",
          title: "建站经验02",
          createDate: "2019-01-02",
          textData: "这是建站经验内容02",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-3",
          title: "建站经验03建站经验03建站经验03建站经验03",
          createDate: "2019-01-03",
          textData: "这是建站经验内容03",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-4",
          title: "建站经验04",
          createDate: "2019-01-04",
          textData: "这是建站经验内容04",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-5",
          title: "建站经验05",
          createDate: "2019-01-06",
          textData: "这是建站经验内容06",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-6",
          title: "建站经验06",
          createDate: "2019-01-06",
          textData: "这是建站经验内容06",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-7",
          title: "建站经验07",
          createDate: "2019-01-07",
          textData: "这是建站经验内容07",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-8",
          title: "建站经验08",
          createDate: "2019-01-08",
          textData: "这是建站经验内容08",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-9",
          title: "建站经验09",
          createDate: "2019-01-09",
          textData: "这是建站经验内容09",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-10",
          title: "建站经验010",
          createDate: "2019-01-10",
          textData: "这是建站经验内容10",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-11",
          title: "建站经验011",
          createDate: "2019-01-11",
          textData: "这是建站经验内容11",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-12",
          title: "建站经验012",
          createDate: "2019-01-12",
          textData: "这是建站经验内容12",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-13",
          title: "建站经验013",
          createDate: "2019-01-13",
          textData: "这是建站经验内容13",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-14",
          title: "建站经验014",
          createDate: "2019-01-14",
          textData: "这是建站经验内容14",
          imgUrl: "static/home/newsImg/03.png",
        },
        {
          key: "n-r-03-15",
          title: "建站经验015",
          createDate: "2019-01-15",
          textData: "这是建站经验内容15",
          imgUrl: "static/home/newsImg/03.png",
        }
      ]
    }, {
      key: "n-r-04",
      title: "行业门户",
      isRight: true,
      list: [{
          key: "n-r-04-1",
          title: "行业门户01",
          createDate: "2019-03-01",
          textData: "这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01这是行业门户内容01",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-2",
          title: "行业门户02",
          createDate: "2019-01-02",
          textData: "这是行业门户内容02",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-3",
          title: "行业门户03行业门户03行业门户03行业门户03",
          createDate: "2019-01-03",
          textData: "这是行业门户内容03",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-4",
          title: "行业门户04",
          createDate: "2019-01-04",
          textData: "这是行业门户内容04",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-5",
          title: "行业门户05",
          createDate: "2019-01-06",
          textData: "这是行业门户内容06",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-6",
          title: "行业门户06",
          createDate: "2019-01-06",
          textData: "这是行业门户内容06",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-7",
          title: "行业门户07",
          createDate: "2019-01-07",
          textData: "这是行业门户内容07",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-8",
          title: "行业门户08",
          createDate: "2019-01-08",
          textData: "这是行业门户内容08",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-9",
          title: "行业门户09",
          createDate: "2019-01-09",
          textData: "这是行业门户内容09",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-10",
          title: "行业门户010",
          createDate: "2019-01-10",
          textData: "这是行业门户内容10",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-11",
          title: "行业门户011",
          createDate: "2019-01-11",
          textData: "这是行业门户内容11",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-12",
          title: "行业门户012",
          createDate: "2019-01-12",
          textData: "这是行业门户内容12",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-13",
          title: "行业门户013",
          createDate: "2019-01-13",
          textData: "这是行业门户内容13",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-14",
          title: "行业门户014",
          createDate: "2019-01-14",
          textData: "这是行业门户内容14",
          imgUrl: "static/home/newsImg/04.png",
        },
        {
          key: "n-r-04-15",
          title: "行业门户015",
          createDate: "2019-01-15",
          textData: "这是行业门户内容15",
          imgUrl: "static/home/newsImg/04.png",
        }
      ]
    }, {
      key: "n-r-05",
      title: "APP开发",
      isRight: true,
      list: [{
          key: "n-r-05-1",
          title: "APP开发01",
          createDate: "2019-03-01",
          textData: "这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01这是APP开发内容01",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-2",
          title: "APP开发02",
          createDate: "2019-01-02",
          textData: "这是APP开发内容02",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-3",
          title: "APP开发03APP开发03APP开发03APP开发03",
          createDate: "2019-01-03",
          textData: "这是APP开发内容03",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-4",
          title: "APP开发04",
          createDate: "2019-01-04",
          textData: "这是APP开发内容04",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-5",
          title: "APP开发05",
          createDate: "2019-01-06",
          textData: "这是APP开发内容06",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-6",
          title: "APP开发06",
          createDate: "2019-01-06",
          textData: "这是APP开发内容06",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-7",
          title: "APP开发07",
          createDate: "2019-01-07",
          textData: "这是APP开发内容07",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-8",
          title: "APP开发08",
          createDate: "2019-01-08",
          textData: "这是APP开发内容08",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-9",
          title: "APP开发09",
          createDate: "2019-01-09",
          textData: "这是APP开发内容09",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-10",
          title: "APP开发010",
          createDate: "2019-01-10",
          textData: "这是APP开发内容10",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-11",
          title: "APP开发011",
          createDate: "2019-01-11",
          textData: "这是APP开发内容11",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-12",
          title: "APP开发012",
          createDate: "2019-01-12",
          textData: "这是APP开发内容12",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-13",
          title: "APP开发013",
          createDate: "2019-01-13",
          textData: "这是APP开发内容13",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-14",
          title: "APP开发014",
          createDate: "2019-01-14",
          textData: "这是APP开发内容14",
          imgUrl: "static/home/newsImg/05.png",
        },
        {
          key: "n-r-05-15",
          title: "APP开发015",
          createDate: "2019-01-15",
          textData: "这是APP开发内容15",
          imgUrl: "static/home/newsImg/05.png",
        }
      ]
    }]
  }
}
