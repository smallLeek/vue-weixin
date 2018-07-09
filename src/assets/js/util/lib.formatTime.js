import {phtServer} from "../phtServer";

export default function formatTimes () {
  //创建现在的时间
  let data = new Date();
  //获取年
  let year = data.getFullYear();
  //获取月
  let mon = data.getMonth()+1;
  let maxMon =mon
  if(maxMon<10){
    maxMon ='0'+maxMon
  }
  let getTimeList= {}
  //大的数据格式
  let maxArry=[];
  //小的数据格式
  let minArry = [];
  //月份
  let monList =[]
  //年份
  let yearList =[]
  for(var i=0;i<5;i++){
    mon=mon-1;
    if(mon<=0){
      year=year-1;
      mon=mon+12;
    }
    if(mon<10){
      mon="0"+mon;
    }
    let curMonthDays = new Date(year, mon, 0).getDate();
    //需要的时间格式
    maxArry[i] =year+"-"+mon+'-'+curMonthDays+ " "+ "00:"+'00:'+'00'
    minArry[i] = year+"-"+mon+'-'+"01"+ " "+ "00:"+'00:'+'00'
    //需要的年份和月份
    monList[i] = mon
    yearList[i] =year
  }
  maxArry.unshift(phtServer.farmatDate());
  monList.unshift(maxMon)
  getTimeList.monList =monList
  getTimeList.max =maxArry;
  minArry.unshift( year+"-"+maxMon+'-'+"01"+ " "+ "00:"+'00:'+'00')
  yearList.unshift(year)
  getTimeList.yearList =yearList
  getTimeList.min = minArry
  return getTimeList

}
