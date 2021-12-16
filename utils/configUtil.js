const cityList = [
  {
    id: 1,
    title: '济南',
    bg: '/images/home/home-city-01.jpeg',
    text1: '齐鲁青未了',
    text2: '济南游正好',
    detail: {
      parentId: 1,
      title: '济南',
      list: [
        {
          id: 1,
          content: '济南，别称泉城，山东省辖地级市、省会、副省级市、特大城市 、济南都市圈核心城市、是国务院批复确定的环渤海地区南翼的中心城市 ，是山东省政治、经济、文化、科技、教育和金融中心，重要的交通枢纽。',
        },
        {
          id: 2,
          content: '济南因境内泉水众多，拥有“七十二名泉”，素有“四面荷花三面柳，一城山色半城湖”的美誉，济南八景闻名于世，是拥有“山、泉、湖、河、城”独特风貌的旅游城市，是国家历史文化名城、首批中国优秀旅游城市，史前文化——龙山文化的发祥地之一。',
        },
        {
          id: 3,
          content: '济南老城的泉水分布最为密集，十大泉群中，仅有老城就占有4个，基本上是现今游船环城一圈的区域：从黑虎泉出发，经泉城广场—西门—五龙潭—大明湖公园北侧—老东门—青龙桥，密布着大大小小100多处天然甘泉，汇流成的护城河流淌到大明湖，与周围的千佛山、鹊山、华山等构成了独特的风光，也成为少有的集“山、泉、湖、河、城”于一体的城市，自古就有“家家泉水，户户垂柳”、“四面荷花三面柳，一城山色半城湖”的美誉。',
        },
      ],
      describe: '一分钟了解济南',
      source: '内容摘自百度百科',
      banner: '/images/home/home-city-01.jpeg',
    },
  },
  {
    id: 2,
    title: '上海',
    bg: '/images/home/home-city-02.jpeg',
    text1: '十里洋场',
    text2: '繁华中的宁静',
    detail: {
      parentId: 2,
      title: '上海',
      list: [
        {
          id: 1,
          content: '上海，简称“沪”或“申”，是中华人民共和国省级行政区、直辖市、国家中心城市、超大城市、上海大都市圈核心城市，国务院批复确定的中国国际经济、金融、贸易、航运、科技创新中心。',
        },
        {
          id: 2,
          content: '位于浦东的张江高科技园区是国家级高科技园区，已构筑起三大国家级基地，重点发展以集成电路、软件、生物医药为主导的高新技术产业。中科院上海药物研究始建于1932年，是我国历史最悠久的综合性药物研究所，承担着包括“863”计划项目等在内的80多个项目的科研攻关任务。',
        },
        {
          id: 3,
          content: '上海人称的本帮菜指的是上海本地风味的菜肴，特色可有用浓油赤酱（油多味浓、糖重、色艳）概括。常用的烹调方法以红烧、煨、糖为主，品味咸中带甜，油而不腻。',
        },
        {
          id: 4,
          content: '佘山国家森林公园、东滩湿地公园、淀山湖、奉贤碧海金沙、上海野生动物园、上海植物园、上海世纪公园、滴水湖、陆家嘴中心绿地。',
        },
      ],
      describe: '一分钟了解上海',
      source: '内容摘自百度百科',
      banner: '/images/home/home-city-02.jpeg',
    },
  },
  {
    id: 3,
    title: '成都',
    bg: '/images/home/home-city-03.jpeg',
    text1: '巴蜀之地',
    text2: '巴适得很',
    detail: {
      parentId: 3,
      title: '成都',
      list: [
        {
          id: 1,
          content: '成都，四川省辖地级市，简称“蓉”，别称蓉城、锦城，是四川省省会、副省级市、超大城市、国家中心城市、成渝地区双城经济圈核心城市、国家重要的高新技术产业基地、商贸物流中心和综合交通枢纽、西部地区重要的中心城市，同时也是全国重要的经济中心、科技创新中心、世界文化名城和国际门户枢纽，规划成都都市圈。',
        },
        {
          id: 2,
          content: '成都是全国十大古都和首批国家历史文化名城，古蜀文明发祥地。境内金沙遗址有3000年历史，周太王以“一年成聚，二年成邑，三年成都”，故名成都；蜀汉、成汉、前蜀、后蜀等政权先后在此建都；一直是各朝代的州郡治所；汉为全国五大都会之一；唐为中国最发达工商业城市之一，史称“扬一益二”；北宋是汴京外第二大都会，发明世界上第一种纸币交子。拥有都江堰、武侯祠、杜甫草堂等名胜古迹，是中国最佳旅游城市。',
        },
        {
          id: 3,
          content: '川菜，菜式多样，口味清鲜醇浓并重，以善用麻辣著称，并以其特别的烹调方法和浓郁的地方风味，是中国四大菜系之一。联合国教科文组织授予成都“世界美食之都”称号，成都出产的郫县豆瓣被誉为“川菜之魂”，是川菜中必不可少的组成部分。',
        },
      ],
      describe: '一分钟了解成都',
      source: '内容摘自百度百科',
      banner: '/images/home/home-city-03.jpeg',
    },
  },
  {
    id: 4,
    title: '北京',
    bg: '/images/home/home-city-04.jpeg',
    text1: '天子脚下',
    text2: '历史凝聚',
    detail: {
      parentId: 1,
      title: '北京',
      list: [
        {
          id: 1,
          content: '北京（Beijing），简称“京”，古称燕京、北平，是中华人民共和国的首都、直辖市、国家中心城市、超大城市，国务院批复确定的中国政治中心、文化中心、国际交往中心、科技创新中心，截至2020年，全市下辖16个区，总面积16410.54平方千米。',
        },
        {
          id: 2,
          content: '北京在历史上曾为六朝都城，在从燕国起的2000多年里，建造了许多宫廷建筑，使北京成为中国拥有帝王宫殿、园林、庙坛和陵墓数量最多的城市。',
        },
        {
          id: 3,
          content: '北京故宫，明朝时叫大内宫城，清朝时叫紫禁城，这里原为明、清两代的皇宫，住过24个皇帝，建筑宏伟壮观，体现了中国传统的古典风格和东方格调，是中国乃至全世界现存最大的宫殿，是中华民族宝贵的文化遗产。天坛以其布局合理、构筑精妙而扬名中外，是明、清两代皇帝“祭天”的地方。',
        },
        {
          id: 4,
          content: '京味小吃的代表有豆汁儿、豆面酥糖、酸梅汤、茶汤、小窝头、茯苓夹饼、果脯蜜饯、冰糖葫芦、艾窝窝、豌豆黄、驴打滚、灌肠、爆肚、炒肝等。',
        },
      ],
      describe: '一分钟了解北京',
      source: '内容摘自百度百科',
      banner: '/images/home/home-city-04.jpeg',
    },
  },
];
const travelList = [
  {
    id: 1,
    title: '遇见大明湖',
    bg: '/images/home/home-travel-01.jpeg',
    text1: '大明湖畔',
    text2: '邂逅晴天',
    detail: {
      parentId: 1,
      title: '遇见大明湖',
      list: [
        {
          id: 1,
          content: '特意起来个大早，吃了日思夜想的油条，喝了心心念念的甜沫，然后溜达着就到大明湖了。天气很好，风也轻，云也淡，游客不是很多，更多的是当地的居民，晨练遛弯。身为游客的我也被这个氛围感染的，不去想下一个景点，就在此处慢悠悠的闲逛。',
          image: '/images/travelDetail/travelDetail-1-01.jpeg',
        },
        {
          id: 2,
          content: '看那垂柳，随风摇曳，风姿婀娜；看那湖水，碧波细纹，泛荡涟漪。所以一定要挑个有微风的天气，微风拂面，心旷神怡，什么情儿啊，景儿的都变得不一样了，这样是我们之前学古诗常说的见景生情，感谢自然的馈赠。',
          image: '/images/travelDetail/travelDetail-1-02.jpeg',
        },
        {
          id: 3,
          content: '湖畔有荷花，我去的季节，还没开，但能看到大片大片的荷叶。有几处景致是有历史底蕴的，比如小沧浪，听说是清乾隆五十七年阿林保重修铁公祠时参照苏州沧浪亭建成。其名之典取自于《楚辞·渔父》“沧浪之水清兮，可以濯吾缨；沧浪之水浊兮，可以濯吾足”。比如南丰祠，原名曾公祠，在大明湖东北岸，北临汇波楼，为纪念北宋文学家曾巩而建。曾巩大家都熟悉吧，唐宋八大家之一，翰林学士欧阳修的学生。',
          image: '/images/travelDetail/travelDetail-1-03.jpeg',
        },
      ],
      announceTime: 1621155447000,
      author: '叶一一',
    },
  },
  {
    id: 2,
    title: '游豫园',
    bg: '/images/home/home-travel-02.jpeg',
    text1: '豫园一日',
    text2: '园林百年',
    detail: {
      parentId: 2,
      title: '游豫园',
      list: [
        {
          id: 1,
          content: '来上海的第一站，我没有着急去东方明珠或者陆家嘴，也没有着急去外滩，我的第一站选择了豫园，听说豫园是一座兼有明清两代南方园林风格的古典园林，我准备去长长见识。',
          image: '/images/travelDetail/travelDetail-2-01.jpeg',
        },
        {
          id: 2,
          content: '古人称赞豫园“奇秀甲于东南”，我见之果然不同凡响。豫园里，亭台楼宇，假山池塘，迂回曲折，却有章法，以我的文学素养真的不足以描绘它的雅致和秀美。我拿着门口游览的册子，足足有几十个景观，但是豫园并不是大的夸张，所以它的格局是极为合理和巧妙的，古人的智慧，真是令我辈钦佩。',
          image: '/images/travelDetail/travelDetail-2-02.jpeg',
        },
        {
          id: 3,
          content: '我摘了一段百度百科的描述，更详细，大家可以想象豫园里面有多少景致：豫园园内有穗堂、铁狮子、快楼、得月楼、玉玲珑、积玉水廊、听涛阁、涵碧楼、内园静观大厅、古戏台等亭台楼阁以及假山、池塘等四十余处古代建筑。三穗堂位于豫园正门处，清乾隆二十五年建。原为乐寿堂，清初曾被征为上海县衙办公之地，改建西园时重筑为三穗堂。仰山堂、卷雨楼位于三穗堂之后，与大假山隔池相望。清同治五年（1866年）建，底层称仰山堂，上层为卷雨楼，仰山堂共5楹，后有回廊、曲槛临池、可小憩。望大假山景，池中倒影可鉴。',
          image: '/images/travelDetail/travelDetail-2-03.jpeg',
        },
      ],
      announceTime: 1618020122000,
      author: '叶一一',
    },
  },
  {
    id: 3,
    title: '青城山',
    bg: '/images/home/home-travel-03.jpeg',
    text1: '上山容易',
    text2: '不想下山',
    detail: {
      parentId: 3,
      title: '青城山',
      list: [
        {
          id: 1,
          content: '来之前，我想的青城山，是道家修道圣地，有仙都之称，是庄严且肃穆的。大道无为，大道至简，我想着来到青城山，可以减少自己的一些世俗的欲望，让自己变得轻松一些。',
          image: '/images/travelDetail/travelDetail-3-01.jpeg',
        },
        {
          id: 2,
          content: '从青城山脚下向上攀爬的时候，我就已经满眼的绿所折服了，向往的自然，我正身临其中。突然就悟了百科里的介绍，全山林木青翠，四季常青，诸峰环峙，状若城廓，故名青城山。是了，它理应叫青城山。',
          image: '/images/travelDetail/travelDetail-3-02.jpeg',
        },
        {
          id: 3,
          content: '山上是道家的道观，有上清宫、老君阁、祖师殿等，殿里燃着香火，我看到有信念的老者在添香火钱，旁边的老道士连忙燃了香火。心中有光的人，路才能走的更远。来到青城山，见识了山林峰峦，又寻到了大道无为，不虚此行。',
          image: '/images/travelDetail/travelDetail-3-03.jpeg',
        },
      ],
      announceTime: 1602288000000,
      author: '叶一一',
    },
  },
  {
    id: 4,
    title: '故宫',
    bg: '/images/home/home-travel-04.jpeg',
    text1: '故宫之约',
    text2: '宫墙里的四季',
    detail: {
      parentId: 4,
      title: '故宫',
      list: [
        {
          id: 1,
          content: '作为一个看多了武侠小说的人，对故宫不止有对历史的情怀，还有对这里曾经发生过的故事的想象。一朝天子一朝臣，朝朝代代有名人。我记不住历史书上的每一个人，但是我知道这里出来很多有名的人。',
          image: '/images/travelDetail/travelDetail-4-01.jpeg',
        },
        {
          id: 2,
          content: '百科里面有写到，故宫又称紫禁城。中国古代讲究“天人合一”的规划理念，用天上的星辰与都城规划相对应，以突出政权的合法性和皇权的至高性。天帝居住在紫微宫，而人间皇帝自诩为受命于天的“天子”。',
          image: '/images/travelDetail/travelDetail-4-02.jpeg',
        },
        {
          id: 3,
          content: '我曾经在景山上往下看故宫，震撼与它的宽广与威严。这里历代的帝王，每个人的故事都有一本书那么厚。大殿、城墙、甚至每一块石砖，都见证了两代王朝的兴衰。而今国泰民安，曾经的皇宫也成了游览胜地，但是这里的故事，每一笔都记载了一本叫做历史的书里。',
          image: '/images/travelDetail/travelDetail-4-03.jpeg',
        },
      ],
      announceTime: 1582156800000,
      author: '叶一一',
    },
  },
];
// 首页列表
var homeList = function () {
  let data = {
    travel: {
      key: 'travel',
      title: '热门游记',
      list: [].concat(travelList),
    },
    city: {
      key: 'city',
      title: '推荐城市',
      list: [].concat(cityList),
    },
  };
  return data;
};

// 活动列表
var activityList = function () {
  let data = {
    list: [
      {
        id: 1,
        name: '下雪了 看故宫换新装',
      },
      {
        id: 2,
        name: '环球影城 说走就走',
      },
    ],
  };
  return data;
};

// 我的游记列表
var mineTravelList = function (requestData = {}) {
  let data = {
    list: [],
    id: 0,
  };
  requestData.skipIdFlag = requestData.skipIdFlag ? requestData.skipIdFlag : false;
  if ((!requestData.skipIdFlag && requestData.nickName && requestData.nickName.indexOf('叶子') !== -1) || requestData.skipIdFlag) {
    data = {
      list: [].concat(travelList),
      id: 1,
    };
  }
  return data;
};
// 游记详情
var travelDetailById = function (requestData = {}) {
  let data = {};
  let list = [].concat(travelList);
  let id = requestData.id;
  let filterList = list.filter(item => item.id == id);
  if (filterList.length != 0) {
    data = filterList[0].detail;
  }
  return data;
};
// 城市详情
var cityDetailById = function (requestData = {}) {
  let data = {};
  let list = [].concat(cityList);
  let id = requestData.id;
  let filterList = list.filter(item => item.id == id);
  if (filterList.length != 0) {
    data = filterList[0].detail;
  }
  return data;
};

var config = {
  homeList: homeList,
  mineTravelList: mineTravelList,
  travelDetailById: travelDetailById,
  cityDetailById: cityDetailById,
  activityList: activityList,
};

module.exports = config;
