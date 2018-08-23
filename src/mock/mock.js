import Mock from 'mockjs'
const Random = Mock.Random
function createShops () {
    const num = Random.integer(5, 10)
    let shops = [{
        id: 0,
        logo: '../../static/img/f4448b3d7c4eb64066ec375d32b7epng.png',
        name: '万州特色牛肉面',
        info: {
            top: {
                left: '品牌',
                right: '票'
            },
            sale: {
                score: 4.6,
                num: 1503
            },
            cost: {
                start: 10,
                money: 2.5,
                far: 718,
                time: 55
            },
            ad: {
                shou: '新用户下单立减17元',
                jian: '满30减6，满60减8，满100减10',
                gg: '本店新开张 如有照顾不周的地方还请各位谅解 谢谢!',
                orther: []
            }
        }
    }]
    for (let i = 0; i < num; i++) {
        let obj = {
            id: i + 1,
            logo: Random.dataImage('130x130', 'logo!'),
            name: Random.ctitle(2, 4) + '外卖',
            info: {
                top: {
                    left: '品牌',
                    right: Random.cword('保准票')
                },
                sale: {
                    score: Random.float(0, 4, 1, 1),
                    num: Random.integer(0, 9999)
                },
                cost: {
                    start: Random.integer(0, 50),
                    money: Random.float(0, 10, 0, 1),
                    far: Random.integer(0, 999),
                    time: Random.integer(0, 99)
                },
                ad: {
                    shou: '新用户下单立减' + Random.integer(0, 88) + '元',
                    jian: `满${Random.integer(0, 99)}减${Random.integer(0, 99)}，满${Random.integer(0, 99)}减${Random.integer(0, 99)}`,
                    gg: Random.csentence(),
                    orther: []
                }
            }
        }
        shops.push(obj)
    }
    return shops
}
function createFood () {
    const num = Random.integer(5, 10)
    let food = [
        {
            id: parseInt(Math.random() * 1000000000000),
            name: '黑椒鸡块 (2块)',
            img: '../../static/img/c6f855a225c875801d2c1c8318a05jpeg.jpeg',
            num: 261,
            good: '100',
            sale: 3.7,
            ad: '每单限1份优惠',
            before: 4.66,
            now: 2.66,
            show: true,
            buy: 0
        }
    ]
    for (let i = 0; i < num; i++) {
        let obj = {
            id: parseInt(Math.random() * 1000000000000),
            name: Random.ctitle(),
            img: Random.dataImage('140x140', 'img!'),
            num: Random.integer(0, 9999),
            good: Random.integer(0, 100),
            sale: Random.float(0, 9, 1, 1),
            ad: Random.ctitle(),
            before: Random.integer(0, 100),
            now: Random.integer(0, 100),
            show: i % 3 === 0,
            buy: 0
        }
        food.push(obj)
    }
    return food
}
function createFoods () {
    const num = Random.integer(5, 10)
    let foods = [{
        id: parseInt(Math.random() * 1000000000000),
        title: '热销',
        logo: '../../static/img/ia_10125.png',
        info: '大家喜欢吃,才叫真好吃',
        foods: createFood()
    }]
    for (let i = 0; i < num; i++) {
        let obj = {
            id: parseInt(Math.random() * 1000000000000),
            title: Random.cword(2, 4),
            logo: Random.dataImage('26x26', 'logo!'),
            info: Random.ctitle(),
            foods: createFood()
        }
        foods.push(obj)
    }
    return foods
}
function createBuy () {
    const num = Random.integer(5, 10)
    let res = [{
        name: '鹌鹑蛋',
        price: 4
    }]
    for (let i = 0; i < num; i++) {
        let obj = {
            name: Random.ctitle(),
            price: Random.integer(0, 100)
        }
        res.push(obj)
    }
    return res
}
function createOrder () {
    const num = Random.integer(5, 10)
    let res = [{
        img: '../../static/img/ia_10003.jpeg',
        shop: '宜宾铁拐烧烤(弹子石店)',
        time: 1535006427207,
        buy: createBuy(),
        money: 12,
        state: true,
        eval: false
    }]
    let time = 1535006427207
    for (let i = 0; i < num; i++) {
        time -= Random.integer(999999, 9999999)
        let obj = {
            img: Random.dataImage('64x64', 'img!'),
            shop: Random.ctitle(),
            time: time,
            buy: createBuy(),
            money: Random.integer(0, 100),
            state: Random.integer(0, 100) % 2 === 0,
            eval: Random.integer(0, 100) % 2 === 0
        }
        res.push(obj)
    }
    return res
}
function createUser () {
    let obj = {
        id: Random.integer(100000, 999999),
        phone: Random.integer(13000000000, 19000000000),
        money: Random.integer(0, 999) + ' 元',
        red: Random.integer(0, 100) + ' 红包',
        gold: Random.integer(0, 100) + ' 金币',
        order: createOrder()
    }
    return obj
}
Mock.mock('/address', Random.province() + Random.county())
Mock.mock('/foodtype', [
    {
        'img': './static/img/a867c870b22bc74c87c348b75528djpeg.jpeg',
        'title': '美食'
    },
    {
        'img': './static/img/76a23eb90dada42528bc41499d6f8jpeg.jpeg',
        'title': '商超便利'
    },
    {
        'img': './static/img/60ac33f023d9074e13cd78f9b5964jpeg.jpeg',
        'title': '午餐'
    },
    {
        'img': './static/img/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg',
        'title': '果蔬生鲜'
    },
    {
        'img': './static/img/af108e256ebc9f02db599592ae655jpeg.jpeg',
        'title': '医药健康'
    },
    {
        'img': './static/img/b02bd836411c016935d258b300cfejpeg.jpeg',
        'title': '大牌5折'
    },
    {
        'img': './static/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg',
        'title': '浪漫鲜花'
    },
    {
        'img': './static/img/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg',
        'title': '麻辣烫'
    },
    {
        'img': './static/img/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg',
        'title': '地方菜系'
    },
    {
        'img': './static/img/235761e50d391445f021922b71789jpeg.jpeg',
        'title': '披萨意面'
    },
    {
        'img': Random.image('100x100', '#50B347', '#FFFFFF', 'm'),
        'title': Random.cword(2, 3)
    },
    {
        'img': Random.image('100x100', '#4A7BF7', '#FFFFFF', 'o'),
        'title': Random.cword(2, 3)
    },
    {
        'img': Random.image('100x100', '#FF6600', '#FFFFFF', 'c'),
        'title': Random.cword(2, 3)
    },
    {
        'img': Random.image('100x100', '#894FC4', '#FFFFFF', 'k'),
        'title': Random.cword(2, 3)
    }
])
Mock.mock('/shops', createShops())
Mock.mock('/foods', createFoods())
// 模拟验证码
Mock.mock('/getPwdImg', function () {
    let exp = Mock.mock({'regexp': /\w{6}/}).regexp
    return Mock.mock({
            url: Mock.Random.dataImage('70x30', exp),
            reg: exp
    })
})
Mock.mock('/user', createUser())
