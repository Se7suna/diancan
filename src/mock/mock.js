import Mock from 'mockjs'
const Random = Mock.Random
Mock.mock('/address', Random.province() + Random.county())
Mock.mock('/foodtype', [
        {
            'img': '/static/img/a867c870b22bc74c87c348b75528djpeg.jpeg',
            'title': '美食'
        },
        {
            'img': './static/img/76a23eb90dada42528bc41499d6f8jpeg.jpeg',
            'title': '商超便利'
        },
        {
            'img': '/static/img/60ac33f023d9074e13cd78f9b5964jpeg.jpeg',
            'title': '午餐'
        },
        {
            'img': '/static/img/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg',
            'title': '果蔬生鲜'
        },
        {
            'img': '/static/img/af108e256ebc9f02db599592ae655jpeg.jpeg',
            'title': '医药健康'
        },
        {
            'img': '/static/img/b02bd836411c016935d258b300cfejpeg.jpeg',
            'title': '大牌5折'
        },
        {
            'img': '/static/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg',
            'title': '浪漫鲜花'
        },
        {
            'img': '/static/img/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg',
            'title': '麻辣烫'
        },
        {
            'img': '/static/img/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg',
            'title': '地方菜系'
        },
        {
            'img': '/static/img/235761e50d391445f021922b71789jpeg.jpeg',
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
Mock.mock('/shops', {
})
