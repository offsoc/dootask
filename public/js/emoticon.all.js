(function (wind) {
    let emoticonData = [
        {
            "name": "小海豚",
            "path": "18",
            "icon": "icon.png",
            "list": [
                {"name": "爱你", "key": "爱你 爱你哟 爱老虎油 爱你啦 亲亲 亲一个 啵啵 比心 笔芯 爱心", "path": "1.gif"},
                {"name": "搬砖", "key": "搬砖 工作 努力", "path": "2.gif"},
                {"name": "不愧是精英", "key": "不愧是精英 精英 大佬 厉害 真棒 你真棒 牛逼 6 666 不愧是你 还得是你", "path": "3.gif"},
                {"name": "不想理你", "key": "生气 不理 不开心 哼 不想理你", "path": "4.gif"},
                {"name": "不想面对", "key": "不想面对 瑟瑟发抖 体重 担忧 不想理你 又胖了", "path": "5.gif"},
                {"name": "沉迷工作", "key": "工作 认真 做事 干活 电脑 沉迷工作", "path": "6.gif"},
                {"name": "打卡了么", "key": "打卡 上班 报 记得打卡", "path": "7.gif"},
                {"name": "发生了啥", "key": "冒泡 浮出水面 发生了啥 八卦 露头 我看看 怎么个事 怎么了", "path": "8.gif"},
                {"name": "给你个眼神", "key": "眼神 真的 质疑 疑问 不确定 给你个眼神", "path": "9.gif"},
                {"name": "恭喜发财", "key": "恭喜发财 新年好 新年 拜年", "path": "10.gif"},
                {"name": "跪谢", "key": "谢谢 感动 跪 多谢 THANKS THANK YOU 谢了", "path": "11.gif"},
                {"name": "Hi", "key": "Hi 打招呼 欢迎 招呼 你好 好 哈喽 哈啰 hello 大家好", "path": "12.gif"},
                {"name": "欢迎欢迎", "key": "欢迎 新人 兴奋 开心 庆祝 喝彩 气氛组", "path": "13.gif"},
                {"name": "加油", "key": "加油 喝彩 气氛组", "path": "14.gif"},
                {"name": "静静看着你", "key": "静静 看着 不说话 沉默 静静看着你 无语 看你表演", "path": "15.gif"},
                {"name": "开会啦", "key": "开会 会 通知 敲锣 开会啦 开会了", "path": "16.gif"},
                {"name": "可以吗", "key": "可以吗 害羞 不好意思 脸红 可以 可以不", "path": "17.gif"},
                {"name": "迷之自信", "key": "自信 迷之自信 自我欣赏 自恋 我真帅", "path": "18.gif"},
                {"name": "明白", "key": "明白 收到 好的 收 OK", "path": "19.gif"},
                {"name": "摸摸", "key": "摸摸 摸头 你真乖 乖 棒", "path": "20.gif"},
                {"name": "你真棒", "key": "大拇指 你真棒 太棒了 太棒啦 棒棒棒 棒", "path": "21.gif"},
                {"name": "佩服", "key": "佩服 五体投地 崇拜 仰慕 牛逼 厉害", "path": "22.gif"},
                {"name": "撒花", "key": "撒花 欢迎 花 开心 耶 真好 真棒", "path": "23.gif"},
                {"name": "生日快乐", "key": "生日快乐 吃蛋糕 蛋糕 生日", "path": "24.gif"},
                {"name": "收到", "key": "明白 收到 好的 收 已阅 已读", "path": "25.gif"},
                {"name": "送你花花", "key": "送花 送你花 花 兴奋 开心 庆祝 喝彩 气氛组", "path": "26.gif"},
                {"name": "在线吃瓜", "key": "吃瓜 八卦 看戏 看热闹 在线吃瓜 凑热闹 吃瓜群众 围观", "path": "27.gif"},
                {"name": "我错了", "key": "认错 错了 哭 难过 悲伤 我错了 对不起 道歉", "path": "28.gif"},
                {"name": "我太难了", "key": "我太难了 太难了 难过 不开心 委屈", "path": "29.gif"},
                {"name": "笑而不语", "key": "笑 不说话 静静 不发表 沉默", "path": "30.gif"},
                {"name": "行行好吧", "key": "行行好 乞丐 乞求 请求 求助 给点吧", "path": "31.gif"},
                {"name": "幸福", "key": "幸福 满足 洗澡 泡澡 开心", "path": "32.gif"},
                {"name": "赞", "key": "大拇指 赞 点赞 厉害 你真棒 太棒了 太棒啦 棒棒棒 棒 6 666 牛", "path": "33.gif"},
                {"name": "走人了", "key": "下班 闪人 走人 溜人 走了 关机", "path": "34.gif"}
            ]
        },
        {
            "name": "不二呆",
            "path": "04",
            "icon": "icon.png",
            "list": [
                {"name": "嗷呜", "key": "嗷 噢 喔 哦莫 喊叫", "path": "01.gif"},
                {"name": "哼", "key": "生气 不开心 赌气", "path": "02.gif"},
                {"name": "霸道", "key": "霸道总裁 强行 强硬", "path": "03.gif"},
                {"name": "喝可乐", "key": "吨吨吨 喝 可乐 喝饮料", "path": "04.gif"},
                {"name": "来了来了", "key": "来了 我来了", "path": "05.gif"},
                {"name": "走过路过不要错过 ", "key": "走过路过不要错过 不要错过 精彩别错过 错过", "path": "06.gif"},
                {"name": "爱心发射", "key": "爱心 笔芯 比心 小心心 爱你", "path": "07.gif"},
                {"name": "咬你嗷", "key": "咬你 野蛮 无理取闹", "path": "08.gif"},
                {"name": "拍你小脑袋", "key": "拍一拍 拍你脑袋 打你 捶你 敲你", "path": "09.gif"},
                {"name": "无奈", "key": "无可奈何 无能为力 爱莫能助", "path": "10.gif"},
                {"name": "理理我", "key": "理一下我 理我 回应我", "path": "11.gif"},
                {"name": "洗头", "key": "去洗头 在洗头", "path": "12.gif"},
                {"name": "悄咪咪", "key": "偷偷摸摸 悄悄地 悄悄", "path": "13.gif"},
                {"name": "乖巧", "key": "乖 乖了 乖啦", "path": "14.gif"},
                {"name": "受伤", "key": "受伤了 受伤啦 难过 悲伤 受伤害", "path": "15.gif"},
                {"name": "起来嗨", "key": "嗨起来 蹦迪 跳舞 兴奋 手舞足蹈 高兴 开心", "path": "16.gif"},
                {"name": "生气不骂人", "key": "不骂人 忍耐 耐心", "path": "17.gif"},
                {"name": "打卡", "key": "到此一游 打个卡 记录", "path": "18.gif"},
                {"name": "摇摆", "key": "跳舞 兴奋 扭动", "path": "19.gif"},
                {"name": "脑瓜嗡嗡", "key": "脑瓜疼 脑壳疼 嗡嗡嗡 苦恼", "path": "20.gif"},
                {"name": "yes sir", "key": "yes sir 好的 好的领导 好的老板 知道了 收到 没问题", "path": "21.gif"},
                {"name": "不开心", "key": "不高兴 开心不起来 失望 失落", "path": "22.gif"},
                {"name": "对", "key": "对对对 对的 是 是的 没错", "path": "23.gif"},
                {"name": "比猪", "key": "你是猪 你猪 猪", "path": "24.gif"}
            ]
        },
        {
            "name": "圈圈的小伙伴",
            "path": "02",
            "icon": "icon.png",
            "list": [
                {"name": "爱老虎油", "key": "爱你 爱你哟 爱你啦", "path": "01.gif"},
                {"name": "比心", "key": "笔芯 爱你 给你小心心 小心心", "path": "02.gif"},
                {"name": "呐,送你花花", "key": "送花 送你一朵花 小红花 奖励 夸奖", "path": "03.gif"},
                {"name": "赞", "key": "点赞 真棒 你真棒 牛逼 厉害", "path": "04.gif"},
                {"name": "买买买", "key": "买它 买下来 给我买", "path": "05.gif"},
                {"name": "饥饿", "key": "饿肚子 饿了 饿啦 肚子叫 饿坏了", "path": "06.gif"},
                {"name": "问号", "key": "爱你 爱你哟 爱老虎油 爱你啦", "path": "07.gif"},
                {"name": "围观", "key": "看戏 吃瓜", "path": "08.gif"},
                {"name": "哈哈", "key": "哈哈哈 哈哈哈哈哈 笑 笑死 笑了 大笑", "path": "09.gif"},
                {"name": "加一", "key": "+1 附议 我也觉得 跟风 跟上", "path": "10.gif"},
                {"name": "嗯嗯", "key": "好的 哦 嗯 好 OK ok 可以", "path": "11.gif"},
                {"name": "暗中观察", "key": "偷看 偷偷看 小心翼翼", "path": "12.gif"},
                {"name": "生日快乐", "key": "破蛋日快乐 happybirthday HAPPYBIRTHDAY 生日 birthday", "path": "13.gif"},
                {"name": "蟹蟹", "key": "谢谢 谢啦 谢 感谢 十分感谢 Tankyou Tanks", "path": "14.gif"},
                {"name": "加油", "key": "打气 鼓励 一起加油 加油啦 加油呀", "path": "15.gif"},
                {"name": "突然吃瓜", "key": "围观 看戏 吃瓜", "path": "16.gif"},
                {"name": "抱抱", "key": "拥抱 抱一个 抱 爱的抱抱", "path": "17.gif"},
                {"name": "哭泣", "key": "哭了 哭啦 哭 哭唧唧 伤心 流泪", "path": "18.gif"},
                {"name": "过年好", "key": "新年好 新年快乐", "path": "19.gif"},
                {"name": "谢谢老板", "key": "谢谢 谢啦 谢谢红包 谢谢打赏", "path": "20.gif"},
                {"name": "大吉大利", "key": "吉利 好运来", "path": "21.gif"},
                {"name": "恭喜发财", "key": "恭喜 发财", "path": "22.gif"},
                {"name": "再来一个", "key": "再来", "path": "23.gif"}
            ]
        },
        {
            "name": "小蛋鸡",
            "path": "10",
            "icon": "icon.png",
            "list": [
                {"name": "蹦跶", "key": "跳 高兴 开心 心情好 快了 兴奋 激动", "path": "bengda.gif"},
                {"name": "比心", "key": "爱你 爱心 笔芯 给你小心心", "path": "bixin.gif"},
                {"name": "冲啊", "key": "怒 生气 握拳 崛起 啊啊啊", "path": "chonga.gif"},
                {"name": "打我呀", "key": "略略略 嚣张 调皮", "path": "dawoya.gif"},
                {"name": "嗯嗯", "key": "嗯 好的 明白了 点头 对 对对对 嗯呐 恩恩 嗯哼 没错 是这样 同意", "path": "enen.gif"},
                {"name": "哈喽", "key": "hello Hi 招手 打招呼 你好 嗨 哈罗 嘿 来呀 过来呀", "path": "halou.gif"},
                {"name": "嘿嘿", "key": "哈哈 嘿咻 悄咪咪 偷看", "path": "heihei.gif"},
                {"name": "坏笑", "key": "偷笑 贼兮兮 是吗", "path": "huaixiao.gif"},
                {"name": "欢呼", "key": "欢迎 快乐 芜湖 哇 哇塞 厉害", "path": "huanhu.gif"},
                {"name": "看热闹", "key": "凑热闹 偷看 我看看 看手机 玩手机 看戏 吃瓜", "path": "kanrenao.gif"},
                {"name": "困", "key": "好困 失眠了 熬夜 黑眼圈 打瞌睡", "path": "kun.gif"},
                {"name": "来呀", "key": "来打我呀 过来 come on", "path": "laiya.gif"},
                {"name": "暗中观察", "key": "来了 怎么了 什么事 我看看 我瞧瞧 我瞅瞅", "path": "toukan.gif"},
                {"name": "赞", "key": "牛 666 厉害 棒 牛逼", "path": "zan.gif"},
                {"name": "震惊", "key": "害怕 吓到 可怕 惊悚 什么 天呐 我的妈呀 离谱", "path": "zhenjing.gif"}
            ]
        },
        {
            "name": "躺倒鸭",
            "path": "09",
            "icon": "icon.png",
            "list": [
                {"name": "鼓掌", "key": "拍手 欢呼 庆祝 好耶 不错 真好", "path": "guzhang.gif"},
                {"name": "冲呀", "key": "冲鸭 冲 冲冲冲 走了", "path": "chongya.gif"},
                {"name": "期待", "key": "期待的搓搓手 搓搓手 兴奋", "path": "qidai.gif"},
                {"name": "欢呼", "key": "摇摆 挥舞荧光棒 庆祝 荧光棒 好耶 助威 祝贺 蹦迪", "path": "huanhu.gif"},
                {"name": "哭泣", "key": "哭了 哭啦 哭 哭唧唧 伤心 流泪 哭哭 悲伤 难过 难受 哇的一声", "path": "kuqi.gif"},
                {"name": "干嘛", "key": "干什么 干嘛呀 干嘛鸭 怎么了 怎么啦", "path": "ganma.gif"},
                {"name": "嗯", "key": "嗯呢 嗯嗯 好的 好嘞 对对对 对", "path": "enen.gif"},
                {"name": "比心", "key": "笔芯 给你小心心 爱你 爱心", "path": "bixin.gif"},
                {"name": "疑问", "key": "？ ? 不知道 不清楚 不明白 什么 怎么了 为什么 什么事 人呢", "path": "yiwen.gif"},
                {"name": "送你小花花", "key": "送花 送你 小花花 小红花 花花", "path": "songxiaohua.gif"},
                {"name": "摇摆", "key": "一起摇摆 跳舞 扭 扭屁股 嗨起来 蹦迪 跳舞 舞起来 跳起来", "path": "yaobai.gif"},
                {"name": "跳跃", "key": "庆祝 兴奋 开心 欢呼", "path": "tiaoyue.gif"},
                {"name": "你走", "key": "你给我走 走开 离开 泥奏凯 请你出去", "path": "nizou.gif"},
                {"name": "无助", "key": "弱小 可怜 委屈巴巴 委屈 害怕 救命 救救我", "path": "wuzu.gif"},
                {"name": "嘎", "key": "哈哈哈 哈哈 哈哈哈哈哈 笑 笑死 笑了 大笑 嘎嘎嘎 开心 快乐", "path": "hahaha.gif"},
                {"name": "无语", "key": "沉默 省略 你没事吧 搞什么", "path": "wuyu.gif"},
                {"name": "加一", "key": "+1 附议 赞同 同意 我也是", "path": "jiayi.gif"},
                {"name": "捏", "key": "捏捏 捏脸 贴贴", "path": "nielian.gif"},
                {"name": "贴贴", "key": "蹭蹭 喜欢", "path": "tietie.gif"},
                {"name": "好梦", "key": "晚安 安 明天见 关机 下线了 拜拜 886", "path": "haomeng.gif"},
                {"name": "爱心", "key": "爱你 散发爱心 biu", "path": "aixin.gif"},
                {"name": "买买买", "key": "点点点 买它 买", "path": "maimaimai.gif"}
            ]
        },
        {
            "name": "鱼小漫",
            "path": "16",
            "icon": "icon.png",
            "list": [
                {"name": "谢谢老板", "key": "谢谢 跪谢 多谢 红包", "path": "xiexielaoban.gif"},
                {"name": "不讲价哦", "key": "不行哦 不行 不议价", "path": "buyijia.gif"},
                {"name": "知道了", "key": "好的 明白了 OK 没问题", "path": "zhidaole.gif"},
                {"name": "你看行吗", "key": "可以吗 你看 可以不 好了吗", "path": "nikanxingma.gif"},
                {"name": "你好", "key": "哈喽 hello 嗨 Hi 哈罗", "path": "nihao.gif"},
                {"name": "很为难", "key": "问号 难搞 怎么搞 怎么办 为什么", "path": "henweinan.gif"},
                {"name": "收到", "key": "知道了 好的 明白 OK", "path": "shoudao.gif"},
                {"name": "没办法", "key": "搞不定 不知道 做不了", "path": "meibanfa.gif"},
                {"name": "最低价了", "key": "", "path": "zuidijiale.gif"},
                {"name": "您辛苦了", "key": "辛苦了 累吗 辛苦", "path": "ninxinkule.gif"},
                {"name": "可以便宜点吗", "key": "便宜 求求你", "path": "pianyidian.gif"},
                {"name": "我来了", "key": "我来啦 来了 来啦", "path": "wolaile.gif"},
                {"name": "打扰了", "key": "不好意思 对不起 抱歉 报一丝", "path": "daraole.gif"},
                {"name": "合作愉快", "key": "愉快 达成协议 成交", "path": "hezuoyukuai.gif"},
                {"name": "稍等", "key": "加载中 开机中 等等 等一下 桥豆麻袋", "path": "shaodeng.gif"},
                {"name": "看下哦", "key": "看一下 看一看 怎么样 方案", "path": "kanyixia.gif"},
                {"name": "谢谢", "key": "蟹蟹 感谢 Thank you Thanks", "path": "xiexie.gif"},
                {"name": "保质保量", "key": "加油", "path": "baozhibaoliang.gif"},
                {"name": "你在干嘛", "key": "在干嘛 在吗 哈喽 人呢 去哪了", "path": "zaima.gif"},
                {"name": "包在我身上", "key": "我来 我可以 可以 放心 没问题", "path": "baozaiwoshenshang.gif"},
                {"name": "客气了", "key": "不用谢", "path": "keqile.gif"},
                {"name": "发财了", "key": "发财啦 财神", "path": "facaile.gif"},
                {"name": "没问题", "key": "我可以 可以 放心 没事", "path": "meiwenti.gif"},
                {"name": "早安", "key": "早上好 早 早啊", "path": "zaoan.gif"}
            ]
        },
        {
            "name": "冷兔宝宝社交篇",
            "path": "01",
            "icon": "icon.png",
            "list": [
                {"name": "吨吨吨", "key": "一直喝 喝 咕噜咕噜", "path": "01.gif"},
                {"name": "撸串去", "key": "撸串了 撸串啦 宵夜 夜宵 吃点", "path": "02.gif"},
                {"name": "来喝酒", "key": "喝酒 喝 喝酒了 喝酒啦 喝点", "path": "03.gif"},
                {"name": "走啦", "key": "走了 走 走人 离开", "path": "04.gif"},
                {"name": "蟹蟹", "key": "谢谢 谢啦 谢 感谢 十分感谢 Tankyou Tanks", "path": "05.gif"},
                {"name": "加个好友呗", "key": "加个好友 加好友 加微信 加QQ", "path": "06.gif"},
                {"name": "醉了", "key": "无语 离谱 离了个大谱 醉", "path": "07.gif"},
                {"name": "哈喽", "key": "哈啰 哈罗 你好 你好呀 hello HELLO HI hi", "path": "08.gif"},
                {"name": "呼叫呼叫", "key": "呼叫 在吗 回应一下", "path": "09.gif"},
                {"name": "收到over", "key": "收到 好的 收 over", "path": "10.gif"},
                {"name": "呕", "key": "呕吐 yue", "path": "11.gif"},
                {"name": "来嘛", "key": "来吗 来么 来来来 来啦", "path": "12.gif"},
                {"name": "借酒消愁", "key": "烦 心烦意乱 心烦 烦人 烦恼 忧愁", "path": "13.gif"},
                {"name": "你还太年轻", "key": "小样 小伙子 小姑娘 小子", "path": "14.gif"},
                {"name": "来 再战", "key": "再战 再来一次 再来一遍 再来", "path": "15.gif"},
                {"name": "醒醒", "key": "醒过来 清醒点 睁开眼", "path": "16.gif"},
                {"name": "请你吃饭", "key": "请吃饭 请客 我做东", "path": "17.gif"},
                {"name": "给你煮面", "key": "给你做好吃的 做好吃的", "path": "18.gif"},
                {"name": "说吧", "key": "说什么 说啥 你说 告诉我", "path": "19.gif"},
                {"name": "好的", "key": "哦 嗯 好 OK ok", "path": "20.gif"},
                {"name": "你又迟到了", "key": "你又迟到啦 被我抓住啦 被我抓住了 迟到", "path": "21.gif"},
                {"name": "自罚一杯", "key": "自罚 惩罚自己 惩罚", "path": "22.gif"},
                {"name": "哈哈", "key": "哈哈哈 哈哈哈哈哈 笑 笑死 笑了 大笑", "path": "23.gif"},
                {"name": "少喝点酒", "key": "少喝点 不要贪杯 小酌怡情", "path": "24.gif"}
            ]
        },
        {
            "name": "空洛洛是只呆萌的小恐龙",
            "path": "12",
            "icon": "icon.png",
            "list": [
                {"name": "笨蛋", "key": "笨 傻乎乎 蠢 傻瓜 傻 怎么想的", "path": "bendan.gif"},
                {"name": "不活了", "key": "宝宝不活了 呜呜呜 哭 难受 痛苦 伤心", "path": "buhuole.gif"},
                {"name": "吃", "key": "开心 快乐 吃东西 围观", "path": "chi.gif"},
                {"name": "哈哈哈", "key": "哈哈 大笑 笑死我了 搞笑 好笑 高兴 开心 快乐", "path": "hahaha.gif"},
                {"name": "好棒", "key": "赞 真不错 厉害 棒棒哒 太棒了 太棒啦", "path": "haobang.gif"},
                {"name": "好的", "key": "嗯嗯 明白了 点头 对 对对对 是这样 知道了", "path": "haode.gif"},
                {"name": "难过", "key": "无语 难受 画个圈圈诅咒你 伤心 悲伤", "path": "nanguo.gif"},
                {"name": "哇", "key": "厉害 哇塞 好棒 哇呜 WOW", "path": "wa.gif"},
                {"name": "组团围观", "key": "围观 凑热闹 看热闹 吃瓜群众 发生什么了", "path": "weiguan.gif"},
                {"name": "我错了", "key": "哭哭 道歉 对不起 抱歉 不好意思 跪键盘 跪下 错了 原谅", "path": "wocuole.gif"},
                {"name": "笑死", "key": "笑哭 哈哈哈 笑死我了", "path": "xiaoku.gif"}
            ]
        },
        {
            "name": "小鸭汼汼",
            "path": "15",
            "icon": "icon.png",
            "list": [
                {"name": "来了来了", "key": "来了 我来了 冲啊", "path": "laile.gif"},
                {"name": "谢谢", "key": "谢啦 谢 感谢 十分感谢 Thankyou Thanks 3Q 栓Q", "path": "xiexie.gif"},
                {"name": "害羞", "key": "嘻嘻 羞羞 脸红", "path": "haixiu.gif"},
                {"name": "哭泣", "key": "哭了 哭啦 哭 哭唧唧 伤心 流泪 哭哭 悲伤 难过 难受 哇的一声", "path": "kuqi.gif"},
                {"name": "努力工作", "key": "努力 卖力干活 干活 工作 卖力 埋头苦干 认真", "path": "nuligongzuo.gif"},
                {"name": "早安", "key": "早 早上好 早啊", "path": "zaoan.gif"},
                {"name": "开会了", "key": "开会啦 开会", "path": "kaihuile.gif"},
                {"name": "在吗", "key": "你在吗 在不 在不在 人呢", "path": "zaima.gif"},
                {"name": "头晕", "key": "晕倒 晕了 晕 不舒服 头昏眼花", "path": "touyun.gif"},
                {"name": "苦恼", "key": "烦恼 头疼 头痛 撞墙 裂开 烦死了 人傻了", "path": "kunao.gif"},
                {"name": "欢迎", "key": "热烈欢迎 欢迎光临 庆祝", "path": "huanying.gif"},
                {"name": "比心", "key": "笔芯 给你小心心 爱你", "path": "bixin.gif"},
                {"name": "嗯", "key": "嗯呢 嗯嗯 好的 好嘞 对对对 对", "path": "enen.gif"},
                {"name": "原谅傻子", "key": "原谅你 原谅 没关系 没事 小问题", "path": "yuanliang.gif"},
                {"name": "疑问", "key": "疑惑 不知道 不明白 不清楚 ？ ? 为什么 怎么回事 怎么了 搞什么 干什么", "path": "yiwen.gif"},
                {"name": "哼", "key": "生气 不开心 赌气", "path": "heng.gif"},
                {"name": "抱歉", "key": "我很抱歉 对不起 不好意思 SORRY sorry 报一丝", "path": "baoqian.gif"},
                {"name": "蹭蹭", "key": "贴贴 喜欢 爱你", "path": "tietie.gif"},
                {"name": "收到", "key": "好的 收 好嘞", "path": "shoudao.gif"},
                {"name": "砸你", "key": "打你 敲你 捶你", "path": "chuini.gif"},
                {"name": "谢谢老板", "key": "谢谢 谢啦 谢谢红包 谢谢打赏 红包", "path": "xiexielaoban.gif"},
                {"name": "欢呼", "key": "摇摆 大吉大利 庆祝 祝贺 太棒啦", "path": "huanhu.gif"},
                {"name": "厉害", "key": "厉害了 太棒了 太厉害了 厉害啦", "path": "lihaile.gif"},
                {"name": "晚安", "key": "安 睡觉 GOODNIGHT goodnight 睡了 好梦", "path": "wanan.gif"}
            ]
        },
        {
            "name": "乖巧宝宝",
            "path": "08",
            "icon": "icon.png",
            "list": [
                {"name": "666", "key": "牛啊 厉害 牛 牛逼", "path": "666.gif"},
                {"name": "比心", "key": "爱你 爱心 笔芯 给你小心心", "path": "bixin.gif"},
                {"name": "嗯嗯", "key": "嗯 好的 明白了 点头 对 对对对 嗯呐 恩恩 嗯哼 没错 是这样 同意", "path": "enen.gif"},
                {"name": "哈哈哈", "key": "哈哈 大笑 笑死我了 搞笑 好笑 高兴 开心 快乐", "path": "hahaha.gif"},
                {"name": "呵呵", "key": "不屑 鄙视 冷漠", "path": "hehe.gif"},
                {"name": "花花", "key": "给你花花 花 送给你", "path": "huahua.gif"},
                {"name": "OK", "key": "好的 好 没问题 可以 行", "path": "ok.gif"},
                {"name": "？", "key": "? 问号 怎么了 什么 什么事 怎么个事 为什么", "path": "wenhao.gif"},
                {"name": "哭泣", "key": "哭哭 流泪 笑着流泪 眼泪 哭了 伤心 难过", "path": "xiaozheliulei.gif"},
                {"name": "谢谢老板", "key": "红包", "path": "xiexielaoban.gif"},
                {"name": "赞", "key": "点个赞 棒 你真棒 棒棒哒", "path": "zan.gif"},
                {"name": "吃瓜", "key": "凑热闹 看戏", "path": "chigua.gif"},
                {"name": "快吃药", "key": "有病 你没事吧", "path": "kuaichiyao.gif"},
                {"name": "可爱", "key": "萌萌哒 乖巧", "path": "keai.gif"},
                {"name": "滚", "key": "滚吧 走开 你走 走你", "path": "gun.gif"},
                {"name": "害羞", "key": "捂脸 脸红 羞羞", "path": "haixiu.gif"},
                {"name": "拥抱", "key": "抱抱 安慰 没事的 乖", "path": "yongbao.gif"},
                {"name": "我方了", "key": "无语 慌了", "path": "wofangle.gif"},
                {"name": "吐血", "key": "无语 我服了 受伤", "path": "tuxue.gif"},
                {"name": "乖巧", "key": "乖 可爱 坐好", "path": "guaiqiao.gif"},
                {"name": "110", "key": "报警 无语 神经病 妖妖灵", "path": "110.gif"},
                {"name": "冷漠", "key": "事不关己 不关我事", "path": "lengmo.gif"},
                {"name": "晚安", "key": "睡啦 睡觉 拜拜 下了 明天见 走了 GOODNIGHT goodnight", "path": "wanan.gif"},
                {"name": "来吧", "key": "come on 来呀", "path": "laiba.gif"}
            ]
        },
        {
            "name": "koko熊",
            "path": "19",
            "icon": "icon.png",
            "list": [
                {"name": "哭泣", "key": "哭了 哭啦 哭 哭唧唧 伤心 流泪 哭哭 流泪 难过", "path": "kuqi.gif"},
                {"name": "请稍等", "key": "请等一下 等一下 稍等 等等 桥豆麻袋", "path": "shaodeng.gif"},
                {"name": "裂开", "key": "裂了 石化 什么 无语", "path": "liekai.gif"},
                {"name": "看戏", "key": "吃瓜 吃瓜中 看热闹 围观 怎么了 发生什么了", "path": "kanxi.gif"},
                {"name": "好难受", "key": "难受 难受了 难受啦 不舒服", "path": "nanshou.gif"},
                {"name": "不客气", "key": "客气了 客气啦 客气 没事 小事情", "path": "bukeqi.gif"},
                {"name": "转圈圈", "key": "兴奋 开心 转圈 旋转", "path": "zhuanquanquan.gif"},
                {"name": "骑鸭子", "key": "过河 骑", "path": "qiyazi.gif"},
                {"name": "吹泡泡", "key": "悠哉 悠闲 吐泡泡", "path": "chuipaopao.gif"},
                {"name": "BYEBYE", "key": "byebye 再见 886 走了 下线了", "path": "byebye.gif"},
                {"name": "鼓掌", "key": "拍手 欢呼 庆祝", "path": "guzhang.gif"},
                {"name": "打鼓", "key": "打架子鼓 敲打 得意 庆祝", "path": "dagu.gif"},
                {"name": "弹吉他", "key": "弹琴 弹奏 兴奋 庆祝", "path": "tanjita.gif"},
                {"name": "唱歌", "key": "歌唱 哼曲 哼曲子 开心 兴奋 高兴 K哥 KTV", "path": "changge.gif"},
                {"name": "嗯", "key": "嗯呢 嗯嗯 好的 好嘞 对对对 对", "path": "enen.gif"},
                {"name": "哈哈哈", "key": "哈哈 哈哈哈哈哈 笑 笑死 笑了 大笑 嘎嘎嘎 开心 快乐", "path": "hahaha.gif"},
                {"name": "Yeah", "key": "yeah 耶 噢耶", "path": "yeah.gif"}
            ]
        },
        {
            "name": "C虎渣",
            "path": "17",
            "icon": "icon.png",
            "list": [
                {"name": "摸鱼中", "key": "摸鱼 在摸鱼 闲鱼", "path": "moyu.gif"},
                {"name": "忙到飞起", "key": "忙 在忙 太忙了 没空", "path": "mang.gif"},
                {"name": "合作愉快", "key": "合作 达成共识 达成协议 达成", "path": "hezuoyukuai.gif"},
                {"name": "在线等", "key": "等待 等 等你", "path": "zaixiandeng.gif"},
                {"name": "辛苦了", "key": "辛苦啦 辛苦 按摩 捏捏背 累吗", "path": "xinkule.gif"},
                {"name": "开会了", "key": "开会啦 开会", "path": "kaihuile.gif"},
                {"name": "优秀", "key": "厉害 真棒 太棒了 太棒啦 棒棒的 棒", "path": "youxiu.gif"},
                {"name": "GOODJOB", "key": "goodjob 做得好 做得很好 棒", "path": "goodjod.gif"},
                {"name": "收到", "key": "好的 收 ok", "path": "shoudao.gif"},
                {"name": "谢谢", "key": "谢啦 谢 感谢 十分感谢 Thankyou Thanks 3Q 栓Q", "path": "xiexie.gif"},
                {"name": "加班", "key": "又要加班 继续加班 加班了 加班啦", "path": "jiaban.gif"},
                {"name": "扣工资", "key": "扣钱 减工资 罚款", "path": "kougongzi.gif"},
                {"name": "了解", "key": "知道 明白 好的 没问题 ok", "path": "liaojie.gif"},
                {"name": "在吗", "key": "你在吗 在不 在不在 人呢", "path": "zaima.gif"},
                {"name": "加工资", "key": "加钱 涨薪", "path": "jiagongzi.gif"},
                {"name": "拜托", "key": "麻烦了 麻烦啦 球球 求求你了", "path": "baituo.gif"},
                {"name": "快干活", "key": "马上工作 快点干活", "path": "kuaiganhuo.gif"},
                {"name": "吃啥", "key": "吃啥呢 吃啥呀 中午吃啥 晚上吃啥 早上吃啥 吃什么 吃什么呢 中午吃什么 晚上吃什么 早上吃什么", "path": "chisha.gif"},
                {"name": "周五啦", "key": "周五到了 星期五啦 周五了 星期五了", "path": "zhouwula.gif"},
                {"name": "下班了", "key": "下班啦 下班 走人 走", "path": "xiabanle.gif"},
                {"name": "抱歉", "key": "我很抱歉 对不起 不好意思 SORRY sorry 报一丝", "path": "sorry.gif"},
                {"name": "我爱工作", "key": "热爱工作 工作狂 工作 上班", "path": "woaigongzuo.gif"},
                {"name": "不想上班", "key": "不想工作 摆烂 摊到 闲鱼", "path": "buxiangshangban.gif"}
            ]
        },
        {
            "name": "凸叽叽",
            "path": "11",
            "icon": "icon.png",
            "list": [
                {"name": "瑟瑟发抖", "key": "发抖 害怕 可怕 抖 弱小 无助 可怜", "path": "fadou.gif"},
                {"name": "哇", "key": "哇咔咔 哇哈哈 哇哇哇 wow 哇塞", "path": "wa.gif"},
                {"name": "穷", "key": "贫穷 穷的叮当响 没钱 给点吧 红包", "path": "qiong.gif"},
                {"name": "OK", "key": "ok 好的 好 好哒 好呀 没问题 包在我身上 搞定", "path": "ok.gif"},
                {"name": "好的", "key": "哦 嗯 好 OK ok", "path": "haode.gif"},
                {"name": "感到压力", "key": "压力山大 鸭梨山大 压力", "path": "gandaoyali.gif"},
                {"name": "谢谢", "key": "谢啦 谢 感谢 十分感谢 Thankyou Thanks 3Q 栓Q", "path": "xiexie.gif"},
                {"name": "信你个鬼", "key": "哼 不信你 不信 我不信", "path": "xinnigegui.gif"},
                {"name": "来了来了", "key": "来了 我来了 冲啊", "path": "laile.gif"},
                {"name": "开心", "key": "高兴 快乐 哈哈哈 心情好 真不错", "path": "kaixxin.gif"},
                {"name": "EMO", "key": "emo 惆怅 悲伤 难过", "path": "emo.gif"},
                {"name": "我不听", "key": "不听不听 听不见 听不到 我不 拒绝沟通", "path": "wobuting.gif"},
                {"name": "疑问", "key": "疑惑 不知道 不明白 不清楚 ？ ? 为什么 怎么回事 怎么了 搞什么 干什么", "path": "yiwen.gif"},
                {"name": "NO", "key": "no 不 不要 不不不 拒绝", "path": "no.gif"},
                {"name": "打扰了", "key": "打扰 打搅 不好意思", "path": "daraole.gif"},
                {"name": "鼓掌", "key": "欢呼 拍手 棒 棒棒棒 太棒啦 太棒了", "path": "guzhang.gif"},
                {"name": "行吧", "key": "行 好的 好吧 好的 好", "path": "xingba.gif"},
                {"name": "拒绝", "key": "不要 丑拒", "path": "chouju.gif"}
            ]
        },
        {
            "name": "大胖嘟和小馒头",
            "path": "13",
            "icon": "icon.png",
            "list": [
                {"name": "哇", "key": "哇咔咔 哇哈哈 哇哇哇 wow 哇塞 太棒了吧", "path": "wawa.gif"},
                {"name": "666", "key": "棒棒棒 牛啊 牛哇 棒 太棒了 厉害 不错", "path": "666.gif"},
                {"name": "得意", "key": "开心 挑眉 笑", "path": "deyi.gif"},
                {"name": "鼓掌", "key": "欢呼 拍手 棒 棒棒棒 太棒啦 太棒了 好棒 真不错", "path": "hobang.gif"},
                {"name": "哼", "key": "生气 不开心 赌气 不理你了", "path": "heng.gif"},
                {"name": "谢谢", "key": "谢啦 谢 感谢 十分感谢 Thankyou Thanks 3Q 栓Q", "path": "xiexie.gif"},
                {"name": "哈哈哈", "key": "哈哈 哈哈哈哈哈 笑 笑死 笑了 大笑 嘎嘎嘎 开心 快乐", "path": "hahaha.gif"},
                {"name": "蹭蹭", "key": "贴贴 喜欢", "path": "tietie.gif"},
                {"name": "弹吉他", "key": "弹琴 好听 好棒 喜欢", "path": "tanjita.gif"},
                {"name": "OK", "key": "ok 好的 好 好哒 好呀 没问题 包在我身上", "path": "ok.gif"},
                {"name": "嗯", "key": "嗯呢 嗯嗯 好的 好嘞 对对对 对", "path": "enen.gif"},
                {"name": "辛苦了", "key": "辛苦 按摩 捏捏背 累吗", "path": "xinkule.gif"},
                {"name": "来了来了", "key": "来了 我来了 冲啊", "path": "laile.gif"},
                {"name": "对方撤回了一条信息", "key": "撤回 撤回信息 撤回消息", "path": "chehui.gif"}
            ]
        },
        {
            "name": "敷衍熊",
            "path": "14",
            "icon": "icon.png",
            "list": [
                {"name": "多喝开水", "key": "多喝水 喝水 多喝热水 喝 喝吧", "path": "duohekaishui.gif"},
                {"name": "说话", "key": "直接点 主动点", "path": "biewenwoshuohua.gif"},
                {"name": "我到啦", "key": "我到了 到了 到啦", "path": "wodaole.gif"},
                {"name": "马上出发去见你", "key": "马上来 马上出发 马上 立刻 现在", "path": "mashangchufa.gif"},
                {"name": "早安", "key": "早上好 早 早啊", "path": "zaoan.gif"},
                {"name": "我在忙", "key": "先不聊了 好忙 在忙 没空 等一下 稍等", "path": "wozaimang.gif"},
                {"name": "快去吃吧", "key": "去吧 快去 吃 快点", "path": "kuaiquchiba.gif"},
                {"name": "你在干嘛", "key": "在干嘛 在吗 哈喽 人呢 去哪了 在干什么 在做什么", "path": "nizaiganma.gif"},
                {"name": "买它", "key": "买 给你五毛 五毛 五块 给你 喜欢就买", "path": "xihuanjiumai.gif"},
                {"name": "我的眼里只有你", "key": "看不到 only you", "path": "wodeyanlizhiyouni.gif"},
                {"name": "随便", "key": "随便啦 随便你 随你便 好吧 好的吧 就这样吧 行吧", "path": "suibianla.gif"},
                {"name": "好棒", "key": "真棒 好牛 厉害 真不错 牛逼 太棒啦 太棒了", "path": "haobang.gif"},
                {"name": "晚安", "key": "睡啦 睡觉 拜拜 下了 明天见 走了 GOODNIGHT goodnight", "path": "wanan.gif"},
                {"name": "吃饭了吗", "key": "吃了吗 吃饭", "path": "chifanlema.gif"},
                {"name": "爱你", "key": "比心 笔芯", "path": "aini.gif"},
                {"name": "想你", "key": "你在干嘛 想念 思念", "path": "xiangni.gif"}
            ]
        },
        {
            "name": "小兔子BonBon",
            "path": "03",
            "icon": "icon.png",
            "list": [
                {"name": "我来了", "key": "来了来了 来了", "path": "01.gif"},
                {"name": "早安安", "key": "早安 早 早上好 早啊", "path": "02.gif"},
                {"name": "嗯嗯", "key": "好的 哦 嗯 好 OK ok 可以", "path": "03.gif"},
                {"name": "乖", "key": "乖巧 乖了 乖啦", "path": "04.gif"},
                {"name": "加油", "key": "打气 鼓励 一起加油 加油啦 加油呀", "path": "05.gif"},
                {"name": "崇拜", "key": "仰慕 厉害 你真棒 太棒了 太棒啦 棒棒棒 棒", "path": "06.gif"},
                {"name": "爱你", "key": "爱你哟 爱老虎油 爱你啦", "path": "07.gif"},
                {"name": "不开心", "key": "生气 伤心 难过", "path": "08.gif"},
                {"name": "亲亲", "key": "亲一个 啵啵", "path": "09.gif"},
                {"name": "动次打次", "key": "兴奋 开心 庆祝 喝彩 气氛组", "path": "10.gif"},
                {"name": "开始摆烂", "key": "摆烂 摆烂了 摆烂啦 无所事事", "path": "11.gif"},
                {"name": "震惊", "key": "吃惊 吓一跳 惊讶", "path": "12.gif"},
                {"name": "收到", "key": "好的 收", "path": "13.gif"},
                {"name": "赞", "key": "点赞 真棒 你真棒 牛逼 厉害", "path": "14.gif"},
                {"name": "心花怒放", "key": "乐滋滋 美滋滋 开心 兴奋 高兴", "path": "15.gif"},
                {"name": "无聊", "key": "没事做 没事干 无所事事 闲着", "path": "16.gif"},
                {"name": "NONONO", "key": "NO no 不 不要 不好 拒绝 不行", "path": "17.gif"},
                {"name": "扎心了", "key": "扎心 扎心了老铁 难受", "path": "18.gif"},
                {"name": "哼", "key": "生气 不开心 赌气", "path": "19.gif"},
                {"name": "晚安", "key": "安 睡觉 GOODNIGHT goodnight", "path": "20.gif"}
            ]
        },
        {
            "name": "小兔子BonBon工作中",
            "path": "07",
            "icon": "icon.png",
            "list": [
                {"name": "马上安排", "key": "安排 立马安排", "path": "01.gif"},
                {"name": "收到请回复", "key": "看到请回复 收到请回", "path": "02.gif"},
                {"name": "收到", "key": "好的 收", "path": "03.gif"},
                {"name": "合作愉快", "key": "握手 达成合作", "path": "04.gif"},
                {"name": "今天吃啥", "key": "今天吃什么 饿了", "path": "05.gif"},
                {"name": "大佬辛苦了", "key": "辛苦了 辛苦啦 辛苦", "path": "06.gif"},
                {"name": "感恩的心", "key": "感恩 感谢 谢谢", "path": "07.gif"},
                {"name": "没问题", "key": "没事 ok OK 可以 好的 行", "path": "08.gif"},
                {"name": "已发送", "key": "已发 发送", "path": "09.gif"},
                {"name": "老板霸气", "key": "谢谢老板 谢谢 谢啦 谢谢红包 谢谢打赏", "path": "10.gif"},
                {"name": "开会中", "key": "开会了 开会啦 在开会", "path": "11.gif"},
                {"name": "对不起我的错", "key": "对不起我的锅 我的锅 铁锅炖大鹅", "path": "12.gif"},
                {"name": "赞", "key": "点赞 真棒 你真棒 牛逼 厉害", "path": "13.gif"},
                {"name": "请多指教", "key": "多多指教 请多指导", "path": "14.gif"},
                {"name": "有八卦", "key": "围观 看戏 吃瓜", "path": "15.gif"}
            ]
        },
        {
            "name": "COLA兄弟",
            "path": "06",
            "icon": "icon.png",
            "list": [
                {"name": "Hi", "key": "你好 你好呀 hello HELLO", "path": "01.gif"},
                {"name": "求你了", "key": "求求你 拜托了 拜托啦 求你啦 行行好", "path": "02.gif"},
                {"name": "妈咪", "key": "妈妈 我的再生父母", "path": "03.gif"},
                {"name": "上车", "key": "快上车 坐车上 来", "path": "04.gif"},
                {"name": "看戏", "key": "围观 吃瓜", "path": "05.gif"},
                {"name": "搞快点", "key": "快好了吗 快点 赶紧 速度", "path": "06.gif"},
                {"name": "贴贴", "key": "蹭蹭 喜欢", "path": "07.gif"},
                {"name": "达咩", "key": "拒绝 不要 不行 不可以 不允许", "path": "08.gif"},
                {"name": "抓狂", "key": "着急 疯了", "path": "09.gif"},
                {"name": "我要吃饭", "key": "我饿了 我想吃饭 饿了", "path": "10.gif"},
                {"name": "无语", "key": "无语到家 给无语开门 无语凝噎 无话可说", "path": "11.gif"},
                {"name": "哭泣", "key": "哭了 哭啦 哭 哭唧唧 伤心 流泪", "path": "12.gif"},
                {"name": "叹气", "key": "唉声叹气 感叹 唉", "path": "13.gif"},
                {"name": "我可以", "key": "可以 可以的 我能行", "path": "14.gif"},
                {"name": "震惊", "key": "吃惊 吓一跳 惊讶", "path": "15.gif"},
                {"name": "拽", "key": "酷 吊炸天", "path": "16.gif"},
                {"name": "加油", "key": "打气 鼓励 一起加油 加油啦 加油呀", "path": "17.gif"},
                {"name": "棒棒哒", "key": "666 棒棒棒 牛啊 牛哇 棒 太棒了", "path": "18.gif"},
                {"name": "激动", "key": "期待 迫不及待", "path": "19.gif"},
                {"name": "拳头硬了", "key": "想打人 忍耐", "path": "20.gif"},
                {"name": "在挨打的边缘试探", "key": "挨打 试探 挑战极限 挑战", "path": "21.gif"},
                {"name": "不想上班", "key": "不想打工 不想工作 想摆烂 想罢工", "path": "22.gif"},
                {"name": "走了走了", "key": "下班了 下班啦 走人 走咯", "path": "23.gif"}
            ]
        },
        {
            "name": "波乌咘",
            "path": "05",
            "icon": "icon.png",
            "list": [
                {"name": "早上好", "key": "早安 早 早啊", "path": "01.gif"},
                {"name": "只想放假", "key": "想放假 想休息 想摸鱼 放假", "path": "02.gif"},
                {"name": "我不想干了", "key": "想罢工 想摆烂 不想干了", "path": "03.gif"},
                {"name": "带薪拉屎", "key": "拉屎 在拉屎 上厕所", "path": "04.gif"},
                {"name": "点外卖", "key": "点外卖了 点外卖啦 吃饭了 吃饭啦", "path": "05.gif"},
                {"name": "工作做不完啊", "key": "工作做不完 做不完的工作 要加班", "path": "06.gif"},
                {"name": "挤地铁", "key": "打工人的心酸 地铁 坐地铁", "path": "07.gif"},
                {"name": "加油", "key": "打气 鼓励 一起加油 加油啦 加油呀", "path": "08.gif"},
                {"name": "焦虑", "key": "焦急 捉急 忧愁 心烦 压力 鸭梨山大 压力山大", "path": "09.gif"},
                {"name": "开会啦", "key": "开会 开会了", "path": "10.gif"},
                {"name": "快了快了", "key": "快啦 别催 马上", "path": "11.gif"},
                {"name": "拜拜", "key": "BYEBYE byebye 再见 886", "path": "12.gif"},
                {"name": "疲惫", "key": "累 劳累 疲惫不堪 累坏了", "path": "13.gif"},
                {"name": "困", "key": "困死了 困死啦 好困 想睡觉", "path": "14.gif"},
                {"name": "下班啦", "key": "下班了 下班 收工", "path": "15.gif"},
                {"name": "摸鱼", "key": "悠闲 摸鱼中", "path": "16.gif"}
            ]
        }
    ];

    if (typeof wind.emoticonData === 'undefined') wind.emoticonData = [];
    emoticonData.forEach(function (item) {
        wind.emoticonData.push(item)
    })
})(window)
