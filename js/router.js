/**
 * Created by Mr effort on 2018/3/13.
 */
(function (window) {
    /*页面路由router*/
    function route() {
        $('.btn-start').click(function () {
            console.log('路由页面已跳转...')
            location.hash = 'selectRole'
        })
        $('.vsFriend').click(function () {
            location.hash = 'friendList'
        })



        $('.vsShop').click(function () {
            location.hash = 'myShoppage'
        })
    }
    /*个人模式跳转到个人排行榜*/
    function personRank(callback) {
        $('.vsPerson .vsRanking').click(function () {
            if(callback){
                callback()
            }
            location.hash = 'topList'
        })
    }
    /*团队模式跳转到团队排行榜*/
    function teamRank(callback) {
        $('.vsTeam .vsRanking').click(function () {
            if(callback){
                callback()
            }
            location.hash = 'topList'
        })
    }
    /*个人随机匹配模式*/
    function personPk(callback) {
        $('.vsPerson .vsRandom').click(function () {
            if(callback){
                callback()
            }
            location.hash = 'pk'
        })
    }
    /*团队随机匹配模式*/
    function teamPk(callback) {
        $('.vsTeam .vsRandom').click(function () {
            if(callback){
                callback()
            }
            location.hash = 'pk'
        })
    }
    window.router = {route,personRank,teamRank,personPk,teamPk}
})(window)