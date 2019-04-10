import Mock from "mockjs";

const url = {
  getList: "/api/getList",
  getUserInfo: "/api/getUserInfo"
};

let list = Mock.mock(url.getList, {
  "content|10": {
    totalCount: 46,
    "data|10": [
      {
        "key|+1": 1,
        "title|1": ["test", "react", "study", "mock", "初学者"],
        "content|1": [
          "你翻译不了我的声响",
          "数码宝贝主题曲",
          "摩天大楼太稀有",
          "像海浪撞破了山丘"
        ],
        "action|1": ["删除", "下载", "--"]
      }
    ]
  }
});

let userInfo = Mock.mock(url.getUserInfo, {
  "content|10": {
    "phone|+1": ["12345678911", "145647895321", "123654789965"],
    "username|1": ["admin", "Jemmy", "zkli", "管理员", "测试账号"],
    "isAdmin|1": [true, false]
  }
});

export { list, userInfo };
