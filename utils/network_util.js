
/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _get( url, success, fail ) {

    console.log( "------start---_get----" );
    wx.request( {
        url: url,
        header: {
            'Content-Type': 'application/json'
        },
        success: function( res ) {
            success( res );
        },
        fail: function( res ) {
            fail( res );
        }
    });

    console.log( "----end-----_get----" );
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post(url,data, success, fail ) {
     console.log( "----_post--start-------" );
    wx.request( {
        url: url,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        method:'POST',
        data:'data='+data,
        success: function( res ) {
            success( res );
        },
        fail: function( res ) {
            fail( res );
        }
    });
     console.log( "----end-----_get----" );
}

    /**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post_json(url,data, success, fail ) {
     console.log( "----_post--start-------" );
    wx.request( {
        url: url,
        // header: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        // },
        method:'POST',
        data:data,
        success: function( res ) {
            success( res );
        },
        fail: function( res ) {
            fail( res );
        }
    });
    
    console.log( "----end----_post-----" );
}





module.exports = {
    _get: _get,
    _post:_post,
    _post_json:_post_json
}