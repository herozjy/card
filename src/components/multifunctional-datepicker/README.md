# multi-function-datepicker

> 适用于vue项目的日期选择器组件

``` bash
# 安装依赖
npm install multifunctional-datepicker

# 全局注册
import datePicker from 'multifunctional-datepicker'
Vue.prototype.$datepicker = datePicker

# 参数配置（可选择组件列数，是否需要中文格式显示等）
params = {
    type: 2, // 2：年月；3：年月日；4：年月日时；5：年月日时分
    showChinese: false, // 默认false，不显示中文格式
    value: [], // 默认选择显示的日期，是一个数组
    quarter: false, // 时间是否以刻度形式显示，默认false
    min: [], // 设置日期的下限
    max: [], // 设置日期的上限
}

# 调用方式
showDatePicker() {
    var time = [2018,10,1]
    let init = JSON.parse(JSON.stringify(time));
    this.$datepicker(params).then((e) => {
        // do something
    }).catch((e) => {
        // console.log(e)
    })
}

# ⚠️注意事项：
当showChinese的值为true时，time的格式需要配置为：var time = ['2018年', '10月', '9日']
当showChinese的值为false时，time的格式需要配置为：var time = [2018, 10, 9]

```
