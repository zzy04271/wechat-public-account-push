/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8f4fbbaa43ed7be2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '730a9535f2ef0f34d1d25c276b02ec61',

  PROVINCE: '辽宁',
  CITY: '大连',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o00aj6pVhIqbvzUPw-hMKevv3iWs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '25NUmH0LNmkTHpvo6K5kswYVgIVtpW0Jhz9z22-hLKM',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '我', year: '2002', date: '04-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2004', date: '06-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-08' },
        // 相识的日子
        { keyword: 'love_day1', date: '2023-05-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '25NUmH0LNmkTHpvo6K5kswYVgIVtpW0Jhz9z22-hLKM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o00aj6pCoLLamNUjEBB6TgPAuE08',
    }
  ],

}

module.exports = USER_CONFIG
