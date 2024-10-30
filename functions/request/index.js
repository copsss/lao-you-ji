// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const { phone } = event;
  try {
    const response = await cloud.httpclient.request('http://121.40.102.120:8005/polls/', {
      method: 'POST',
      data: {
        phone
      },
      headers: {
        'Content-Type': 'application/json'
      },
      dataType: 'json'
    });
    return {
      status: 'ok',
      message: response.data.message || "回复未知"
    };
  } catch (error) {
    return {
      status: 'error',
      message: '请求失败，请稍后再试'
    };
  }
};
