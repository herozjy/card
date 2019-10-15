import picker from './picker'
/**
 * 该方法是处理数据的内容
 * @param n(最小值的限定值min)
 * @param m(最大值的限定值max)
 * @param showChinese(是否需要中文格式)
 * @param isQuarter(是否用刻度显示)
 * @param ch(中文字符串：年、月、日、时、分)
 * @returns {Array}
 */
function range (n, m, showChinese, isQuarter = false, ch) {
  let arr = []
  if (isQuarter) {
    for (let i = n; (i * 1) <= m; i = i + 15) {
      arr.push({
        name: showChinese ? i > 9 ? i + ch : '0' + i + ch : i > 9 ? i : '0' + i
      })
    }
  } else {
    for (let i = n; i <= m; i++) {
      arr.push({
        name: showChinese ? i + ch : i
      })
    }
  }
  return arr
}

/**
 * @param str(如果是字符串，将字符串转为Number类型)
 * @returns {*}
 */
function dealStr (str) {
  if (typeof str === 'string') {
    return (str.substr(0, str.length - 1) * 1)
  } else {
    return str
  }
}

/**
 * 该方法是处理数据格式的
 * @param min(最小值的限定值min)
 * @param max(最大值的限定值max)
 * @param allMonth(是否需要12个月)
 * @param showChinese(是否需要中文格式)
 * @param quarter(是否用刻度显示)
 * @returns {Array}
 * @constructor
 */
function Data (min, max, allMonth, showChinese, quarter) {
  let data = range(min[0], max[0], showChinese, false, '年')
  data.forEach(year => {
    let minMonth = dealStr(year.name) === min[0] ? min[1] : 1
    let maxMonth
    if (allMonth) {
      maxMonth = 12
    } else {
      maxMonth = dealStr(year.name) === max[0] ? max[1] : 12
    }
    year.sub = range(minMonth, maxMonth, showChinese, false, '月')
    year.sub.forEach(month => {
      let day = 30;
      if ([1, 3, 5, 7, 8, 10, 12].includes(dealStr(month.name))) {
        day = 31
      } else {
        if (dealStr(month.name) === 2) {
          day = !(dealStr(year.name) % 400) || (!(dealStr(year.name) % 4) && dealStr(year.name) % 100) ? 29 : 28
        }
      }

      let minDay = dealStr(year.name) === min[0] && dealStr(month.name) === min[1] ? min[2] : 1
      let maxDay = dealStr(year.name) === max[0] && dealStr(month.name) === max[1] ? max[2] : day

      month.sub = range(minDay, maxDay, showChinese, false, '日')
      month.sub.forEach(dayitem => {
        let minHours = dealStr(month.name) === min[1] && dealStr(dayitem.name) === min[2] ? min[3] : 0
        let maxHours = 23

        dayitem.sub = range(minHours, maxHours, showChinese, false, '时')
        dayitem.sub.forEach(minItem => {
          let minMin = dealStr(dayitem.name) === min[2] && dealStr(minItem.name) === min[3] ? min[4] : 0
          let maxMin = 59
          // let minMin = 0
          // let maxMin = 59
          minItem.sub = range(minMin, maxMin, showChinese, quarter, '分')
          // minItem.sub.forEach(secItem => {
          //   let minSec = minItem.name === min[3] && secItem.name === min[4] ? min[5] : 0
          //   let maxSec = minItem.name === min[3] && secItem.name === min[4] ? max[5] : 59
          //   secItem.sub = range(minSec, maxSec, showChinese, quarter, '秒')
          // })
        })
      })
    })
  });
  return data
}

/**
 * 暴露出来调用的方法
 * @param options
 * @returns {Promise<any>}
 */
let datepicker = (options = {}) => {

  let option, month, day, hours, minutes, seconds, type = options.type, showChinese = options.showChinese ? options.showChinese : false,
    quarter = options.quarter ? options.quarter : false, hasValue = options.value && options.value.length !== 0
  let t = new Date()
  let min = options.min || [2018, 1, 1, 0, 0],
    max = options.max || [t.getFullYear(), t.getMonth() + 1, t.getDate(), 23, 59]
  let allMonth = options.allMonth ? options.allMonth : false;
  let data = Data(min, max, allMonth, showChinese, quarter)
  function getYear () {
    let arr = []
    data.forEach((value, index) => {
      arr.push(value.name)
    });
    return arr
  }

  function findYear (name) {
    let m
    data.forEach((value, index) => {
      if (value.name === name) {
        m = index
      }
    });
    return m
  }

  function getMonth (index) {
    let arr = []
    data[index].sub.forEach((value, index) => {
      arr.push(value.name)
    })
    return arr
  }

  function findMonth (p, c) {
    var m = 0, n
    if (c) {
      data.forEach((value, index) => {
        if (value.name === p) {
          n = index
        }
      })
      data[n].sub.forEach((value, index) => {
        if (value.name === c) {
          m = index
        }
      })
    }
    return m
  }

  function getDay (p, c) {
    let arr = [], month = data[p].sub[c].sub;
    if (month) {
      month.forEach((value, index) => {
        arr.push(value.name)
      })
    }

    return arr
  }

  function findDay (p, c, d) {
    let i = 0, m, n;
    if (d) {
      data.forEach((value, index) => {
        if (value.name === p) {
          n = index
        }
      });
      data[n].sub.forEach((value, index) => {
        if (value.name === c) {
          m = index
        }
      });
      data[n].sub[m].sub.forEach((value, index) => {
        if (value.name === d) {
          i = index
        }
      })
    }
    return i
  }

  function getHours (p, c, d) {
    let arr = [], day = data[p].sub[c].sub[d].sub
    if (day) {
      day.forEach((value, index) => {
        arr.push(value.name)
      })
    }
    return arr
  }

  function findHours (p, c, d, e) {
    let i = 0, m, n, j
    if (e) {
      data.forEach((value, index) => {
        if (value.name === p) {
          j = index
        }
      })
      data[j].sub.forEach((value, index) => {
        if (value.name === c) {
          n = index
        }
      })
      data[j].sub[n].sub.forEach((value, index) => {
        if (value.name === d) {
          m = index
        }
      })
      data[j].sub[n].sub[m].sub.forEach((value, index) => {
        if (value.name === e) {
          i = index
        }
      })
    }
    return i
  }

  function getMinutes (p, c, d, e) {
    let arr = [], hours = data[p].sub[c].sub[d].sub[e].sub
    if (hours) {
      hours.forEach((value, index) => {
        arr.push(value.name)
      })
    }
    return arr
  }

  function findMinutes (p, c, d, e, f) {
    let i = 0, m, n, j, k
    if (f) {
      data.forEach((value, index) => {
        if (value.name === p) {
          k = index
        }
      })
      data[k].sub.forEach((value, index) => {
        if (value.name === c) {
          j = index
        }
      })
      data[k].sub[j].sub.forEach((value, index) => {
        if (value.name === d) {
          n = index
        }
      })
      data[k].sub[j].sub[n].sub.forEach((value, index) => {
        if (value.name === e) {
          m = index
        }
      })
      data[k].sub[j].sub[n].sub[m].sub.forEach((value, index) => {
        if (value.name === f) {
          i = index
        }
      })
    }
    return i
  }

  // function getSeconds (p, c, d, e, f) {
  //   let arr = [], minutes = data[p].sub[c].sub[d].sub[e].sub[f].sub
  //   if (minutes) {
  //     minutes.forEach((value, index) => {
  //       arr.push(value.name)
  //     })
  //   }
  //   return arr
  // }

  if (type === 1) {
    option = [getYear()]
    if (hasValue && typeof options.value !== 'object') {
      options.value = [options.value]
    }
  } else if (type === 2) {
    if (!hasValue) {
      options.value = [data[0].name, data[0].sub[0].name]
    }
    console.log('option', options)
    month = getMonth(findYear(options.value[0]));
    option = [getYear(), month]
  } else if (type === 3) {
    if (!hasValue) {
      options.value = [data[0].name, data[0].sub[0].name]
    }
    month = getMonth(findYear(options.value[0]));
    day = getDay(findYear(options.value[0]), findMonth(options.value[0], options.value[1]));
    option = [getYear(), month, day]
  } else if (type === 4) {
    if (!hasValue) {
      options.value = [data[0].name, data[0].sub[0].name, data[0].sub[0].sub[0].name]
    } else {
      month = getMonth(findYear(options.value[0]));
      day = getDay(findYear(options.value[0]), findMonth(options.value[0], options.value[1]));
      hours = getHours(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]));
      option = [getYear(), month, day, hours]
    }
  } else if (type === 5) {
    if (!hasValue) {
      options.value = [data[0].name, data[0].sub[0].name, data[0].sub[0].sub[0].name, data[0].sub[0].sub[0].sub[0].name]
    } else {
      month = getMonth(findYear(options.value[0]));
      day = getDay(findYear(options.value[0]), findMonth(options.value[0], options.value[1]));
      hours = getHours(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]));
      minutes = getMinutes(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]), findHours(options.value[0], options.value[1], options.value[2], options.value[3]))
      option = [getYear(), month, day, hours, minutes]
    }
  // } else if (type === 6) {
  //   if (!hasValue) {
  //     options.value = [data[0].name, data[0].sub[0].name, data[0].sub[0].sub[0].name, data[0].sub[0].sub[0].sub[0].name, data[0].sub[0].sub[0].sub[0].sub[0].name]
  //   } else {
  //     month = getMonth(findYear(options.value[0]));
  //     day = getDay(findYear(options.value[0]), findMonth(options.value[0], options.value[1]));
  //     hours = getHours(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]));
  //     minutes = getMinutes(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]), findHours(options.value[0], options.value[1], options.value[2], options.value[3]))
  //     seconds = getSeconds(findYear(options.value[0]), findMonth(options.value[0], options.value[1]), findDay(options.value[0], options.value[1], options.value[2]), findHours(options.value[0], options.value[1], options.value[2], options.value[3]), findMinutes(options.value[0], options.value[1], options.value[2], options.value[3], options.value[4]))
  //     option = [getYear(), month, day, hours, minutes, seconds]
  //   }
  }

  return new Promise((resolve, reject) => {
    picker({
      title: options.title || '请选择',
      value: options.value,
      option: option,
      shadeClose: options.shadeClose,
      change: (value, index, _this) => {
        if (type !== 1) {
          if (index === 0) {
            month = getMonth(findYear(value[0]))
            option.splice(1, 1, month);
            _this.scrollTop(1, month[0]);
            if (type !== 2) {
              day = getDay(findYear(value[0]), findMonth(value[0]))
              option.splice(2, 1, day);
              _this.scrollTop(2, day[0])
              if (type !== 3) {
                hours = getHours(findYear(value[0]), findMonth(value[0]), findDay(value[0]))
                option.splice(3, 1, hours);
                _this.scrollTop(3, hours[0])
                if (type !== 4) {
                  minutes = getMinutes(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]))
                  option.splice(4, 1, minutes);
                  _this.scrollTop(4, minutes[0])
                  // if (type !== 5) {
                  //   seconds = getSeconds(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0], findMinutes(value[0])))
                  //   option.splice(5, 1, seconds);
                  //   _this.scrollTop(5, seconds[0])
                  // }
                }
              }
            }
          } else if (type !== 2 && index === 1) {
            day = getDay(findYear(value[0]), findMonth(value[0], value[1]));
            option.splice(2, 1, day);
            _this.scrollTop(2, day[0])
            if (type !== 3) {
              hours = getHours(findYear(value[0]), findMonth(value[0]), findDay(value[0]));
              option.splice(3, 1, hours);
              _this.scrollTop(3, hours[0])
              if (type !== 4) {
                minutes = getMinutes(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]))
                option.splice(4, 1, minutes);
                _this.scrollTop(4, minutes[0])
                // if (type !== 5) {
                //   seconds = getSeconds(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]), findMinutes(value[0]))
                //   option.splice(5, 1, seconds);
                //   _this.scrollTop(5, seconds[0])
                // }
              }
            }
          } else if (type !== 3 && index === 2) {
            hours = getHours(findYear(value[0]), findMonth(value[0], value[1]), findDay(value[0], value[1], value[2]));
            option.splice(3, 1, hours);
            _this.scrollTop(3, hours[0])
            if (type !== 4) {
              minutes = getMinutes(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]))
              option.splice(4, 1, minutes);
              _this.scrollTop(4, minutes[0])
              // if (type !== 5) {
              //   seconds = getSeconds(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]), findMinutes(value[0]))
              //   option.splice(5, 1, seconds);
              //   _this.scrollTop(5, seconds[0])
              // }
            }
          } else if (type !== 4 && index === 3) {
            minutes = getMinutes(findYear(value[0]), findMonth(value[0], value[1]), findDay(value[0], value[1], value[2]), findHours(value[0], value[1], value[2], value[3]))
            option.splice(4, 1, minutes);
            _this.scrollTop(4, minutes[0])
            // if (type !== 5) {
            //   seconds = getSeconds(findYear(value[0]), findMonth(value[0]), findDay(value[0]), findHours(value[0]), findMinutes(value[0]))
            //   option.splice(5, 1, seconds);
            //   _this.scrollTop(5, seconds[0])
            // }
          // } else if (type !== 5 && index === 4) {
          //   seconds = getSeconds(findYear(value[0]), findMonth(value[0], value[1]), findDay(value[0], value[1], value[2]), findHours(value[0], value[1], value[2], value[3]), findMinutes(value[0], value[1], value[2], value[3], value[4]))
          //   option.splice(5, 1, seconds);
          //   _this.scrollTop(5, seconds[0])
          }
        }
        if (typeof options.change === 'function') {
          if (value.length === 5 && typeof value[4] === 'undefined') {
            value.splice(4, 1)
          }
          options.change(value, index, _this)
        }
      }
    }).then((e) => {
      if (e.length === 5 && typeof e[4] === 'undefined') {
        e.splice(4, 1)
      }
      resolve(e)
    }).catch((e) => {
      reject(e)
    })
  })
};

export default datepicker
