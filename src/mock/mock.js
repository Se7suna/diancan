import Mock from 'mockjs'
const Random = Mock.Random
Mock.mock('/address', Random.province() + Random.county())
Mock.mock('/foodtype', [
    [
        {
            'url': '/static/img/a867c870b22bc74c87c348b75528djpeg.jpeg',
            'name': '美食'
        },
        {
            'url': './static/img/76a23eb90dada42528bc41499d6f8jpeg.jpeg',
            'name': '商超便利'
        },
        {
            'url': '/static/img/60ac33f023d9074e13cd78f9b5964jpeg.jpeg',
            'name': '午餐'
        },
        {
            'url': '/static/img/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg',
            'name': '果蔬生鲜'
        },
        {
            'url': '/static/img/af108e256ebc9f02db599592ae655jpeg.jpeg',
            'name': '医药健康'
        },
        {
            'url': '/static/img/b02bd836411c016935d258b300cfejpeg.jpeg',
            'name': '大牌5折'
        },
        {
            'url': '/static/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg',
            'name': '浪漫鲜花'
        },
        {
            'url': '/static/img/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg',
            'name': '麻辣烫'
        },
        {
            'url': '/static/img/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg',
            'name': '地方菜系'
        },
        {
            'url': '/static/img/235761e50d391445f021922b71789jpeg.jpeg',
            'name': '披萨意面'
        }
    ],
    [
        {
            'url': Random.image('100x100', '#50B347', '#FFF', Random.cword(2)),
            'name': Random.cword(2, 3)
        },
        {
            'url': Random.image('100x100', '#4A7BF7', '#FFF', Random.cword(2)),
            'name': Random.cword(2, 3)
        },
        {
            'url': Random.image('100x100', '#FF6600', '#FFF', Random.cword(2)),
            'name': Random.cword(2, 3)
        },
        {
            'url': Random.image('100x100', '#894FC4', '#FFF', Random.cword(2)),
            'name': Random.cword(2, 3)
        }
    ]
])
Mock.mock('/shops', {
})
