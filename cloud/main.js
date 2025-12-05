/*
  LeanCloud Cloud Code - beforeSave trigger for Comment
  Purpose: when a Comment is saved, if the mail is a QQ email (e.g. 123456@qq.com)
  populate the QQAvatar field with a qlogo URL so frontend can use it.

  Usage: paste into LeanCloud 控制台的 Cloud Code 编辑区 (或使用 lean up 部署)。
*/
const AV = require('leanengine')

AV.Cloud.beforeSave('Comment', async (request) => {
  const obj = request.object
  try {
    const mail = (obj.get('mail') || '').toString()
    const m = mail.match(/^(\d+)@qq\.com$/i)
    if (m) {
      const qq = m[1]
      // qlogo url: https://q1.qlogo.cn/g?b=qq&nk=QQ&s=100
      obj.set('QQAvatar', `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=100`)
    }
  } catch (e) {
    // swallow errors to avoid blocking saves
    console.error('beforeSave Comment error:', e)
  }
  return obj
})

module.exports = AV
