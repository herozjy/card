<template>
  <div class="info">
    <zjyheader>
      <div slot="left">返回</div>
      <div>请帖信息</div>
      <div slot="right" @click="save()">保存</div>
    </zjyheader>

    <div class="height20px"></div>
    <div class="part">
      <div class="item item1">
        <div>新郎姓名</div>
        <input type="text" v-model="bridegroomName" placeholder="请输入新郎的真实姓名">
      </div>
      <div class="item">
        <div>新娘姓名</div>
        <input type="text" v-model="brideName" placeholder="请输入新娘的真实姓名">
      </div>
    </div>

    <div class="height20px"></div>
    <div class="part">
      <div class="item">
        <div>婚礼时间</div>

        <div @click="showDatePicker(4, 5)">{{tiemDemo4?tiemDemo4:'请选择时间'}}</div>

      </div>
    </div>
    <div class="height20px"></div>
    <div class="part">
      <div class="item">
        <div>婚礼地址</div>
        <input v-model="adress" type="text" placeholder="请输入婚礼地址">
      </div>
    </div>
  </div>

</template>
<script>
  import zjyheader from "@/components/ZJY-Header/ZJY-Header";

  export default {
    data() {
      return {
        bridegroomName: "",
        brideName: "",
        adress: "",
        tiemDemo4: '',
        time: [2018, 1, 1, 0, 0],
        minTime: [2019, 1, 1, 0, 0],
        maxTime: [],
        showChinese: false,
        resetTime: [],
        type: null
      }
    },
    methods: {



      save() {
        console.log("save")
        if (this.bridegroomName && this.brideName && this.adress && this.tiemDemo4) {
          var objectParams = {
            bridegroomName: this.bridegroomName,
            brideName: this.brideName,
            adress: this.adress,
            tiemDemo4: this.tiemDemo4,
          }
          localStorage.setItem("userInfo", JSON.stringify(objectParams))
        } else {
          alert("请完善信息")
        }
        this.$router.push({
          path: `/tempnews/creatTemplate`
        }) // -> /user/123
      },
      // 获取当前时间
      getCurTime(minTime) {
        var date
        if (minTime) {
          var newMinTime = []
          minTime.forEach((item, ind) => {
            if (ind < 3) {
              newMinTime.push(item)
            }
          })
          date = new Date(newMinTime.join('/'))
        } else {
          date = new Date()
        }

        var dafultTiemEnd = new Date(date)
        dafultTiemEnd.setDate(date.getDate() + 30)
        var y1 = dafultTiemEnd.getFullYear()
        var m1 = this.dealTimeFormat(dafultTiemEnd.getMonth() + 1)
        var d1 = this.dealTimeFormat(dafultTiemEnd.getDate())
        var h1 = date.getHours()
        var min1 = date.getMinutes()
        this.maxTime = [y1 * 1, m1 * 1, d1 * 1, h1 * 1, min1 * 1]
        // this.minTime = [y1 * 1, m1 * 1, d1 * 1, h1 * 1, min1 * 1]
      },
      dealTimeFormat(data) {
        return data > 9 ? data : '0' + data
      },
      // 选择时间
      showDatePicker(demo, type) {
        console.log(this.maxTime)

        var that = this;
        var date = new Date()
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        var d = date.getDate()
        var h = date.getHours()
        var min = date.getMinutes()
        this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', min + '分'] : [y * 1, m * 1, d * 1, h * 1,
          min * 1
        ]
        var dataObj = {}
        // # 参数配置（可选择组件列数，是否需要中文格式显示等）
        // params = {
        //     type: 2, // 2：年月；3：年月日；4：年月日时；5：年月日时分
        //     showChinese: false, // 默认false，不显示中文格式
        //     value: [], // 默认选择显示的日期，是一个数组
        //     quarter: false, // 时间是否以刻度形式显示，默认false
        //     min: [], // 设置日期的下限
        //     max: [], // 设置日期的上限
        // }

        // # ⚠️注意事项：
        // 当showChinese的值为true时，time的格式需要配置为：var time = ['2018年', '10月', '9日']
        // 当showChinese的值为false时，time的格式需要配置为：var time = [2018, 10, 9]
        if (demo < 6) {
          let max = that.maxTime.join().split(",");
          max[0] = that.maxTime[0] + 1;
          dataObj = {
            type: type,
            min: this.minTime,
            max,
            showChinese: this.showChinese,
          }
          if (demo === 5) {
            this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', '00分'] : [y * 1, m * 1, d * 1, h * 1,
              '00'
            ]
            dataObj.quarter = true
          }
        } else {
          if (demo === 6) {
            this.minTime = [2018, 1, 1, 0, 0]
          }
          if (demo === 7) {
            if (!this.resetTime[0]) return alert('请先选择开始时间！')
            var resetTime = []
            if (this.showChinese) {
              this.resetTime.forEach((item, index) => {
                resetTime.push((item.substr(0, item.length - 1)) * 1)
              })
            }
            this.time = this.resetTime
            this.minTime = this.showChinese ? resetTime : this.resetTime
            this.getCurTime(this.minTime)
          }
          dataObj = {
            type: type,
            min: this.minTime,
            max: this.maxTime,
            showChinese: this.showChinese,
          }
        }
        let init = JSON.parse(JSON.stringify(this.time))
        dataObj.value = init
        this.$datepicker(dataObj).then((e) => {
          var y = e[0]
          var m = e[1]
          var d = e[2]
          var h = e[3]
          var mm = e[4]
          if (demo === 1) {
            this.demo1 = dataObj.showChinese ? y + m : y + '年' + m + '月'
          } else if (demo === 2) {
            this.demo2 = dataObj.showChinese ? y + m + d : y + '年' + m + '月' + d + '日'
          } else if (demo === 3) {
            this.demo3 = dataObj.showChinese ? y + m + d + h : y + '年' + m + '月' + d + '日' + h + '时'
          } else if (demo === 4) {
            this.tiemDemo4 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm +
              '分'
          } else if (demo === 5) {
            this.tiemDemo4 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm +
              '分'
          } else if (demo === 6) {
            this.resetTime = e
            this.demo6 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
            this.demo7 = ''
          } else if (demo === 7) {
            this.demo7 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
          }
        }).catch((e) => {
          // console.log(e)
        })
      }
    },
    mounted() {

      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log(userInfo)
      if (userInfo == undefined || userInfo == null) {
        console.log(1)
        this.bridegroomName = ""
        this.brideName = ""
        this.adress = ""
        this.tiemDemo4 = ""
      } else {
        this.bridegroomName = userInfo.bridegroomName
        this.brideName = userInfo.brideName
        this.adress = userInfo.adress
        this.tiemDemo4 = userInfo.tiemDemo4
      }
      this.getCurTime();

    },
    destroyed() {
      try {
        var am_picker = document.getElementsByClassName("am-picker")[0];
        document.body.removeChild(am_picker);
      } catch (e) {
        console.log(e)
      }
    },
    components: {
      zjyheader
    }


  }

</script>
<style>
  .height20px {
    height: 20px;
  }


  .zjyheader {
    background-color: red !important;
    color: #fff;
  }

  .back,
  .save {
    font-size: 28px;
  }

  .title {
    font-size: 32px;
  }

  .part {
    /* width: 100%; */
    background-color: #fff;
    padding: 0 40px
  }

  .item {
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
  }

  .item1:nth-child(1) {
    border-bottom: 1px solid #ccc;
  }

  .item div:nth-child(1) {
    margin-right: 40px;
  }

  input {
    border: none;
    outline: none;
  }

</style>
