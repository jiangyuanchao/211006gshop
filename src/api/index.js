
import axios from 'axios'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
    export default function reqAddress(geohash){
        axios.get('http://localhost:4000/position/:geohash',{geohash})
        .then(res => {
            console.log('位置请求成功')
            return res.data;
        })
        .catch(err => {
            console.error(err.message); 
        })
    }



// [2、获取食品分类列表](#2获取食品分类列表)
     function reqShopList(){
        axios.get('http://localhost:4000/index_category')
        .then(res => {
            console.log('食品分类列表请求成功')
            
        })
        .catch(err => {
            console.error(err.message); 
        })
    }
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
     function reqShopList(latitude,longitude){
        axios.get('http://localhost:4000/shops?latitude='+latitude+'&longitude='+longitude)
        .then(res => {
            console.log('根据经纬度获取商铺列表成功',res.data)
            return res.data
        })
        .catch(err => {
            console.error(err.message); 
        })
    }
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
// [5、获取一次性验证码](#5获取一次性验证码)
// [6、用户名密码登陆](#6用户名密码登陆)
// [7、发送短信验证码](#7发送短信验证码)
// [8、手机号验证码登陆](#8手机号验证码登陆)
// [9、根据会话获取用户信息](#9根据会话获取用户信息)
// [10、用户登出](#10用户登出)

