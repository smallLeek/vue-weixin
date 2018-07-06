import {phtServer} from "../phtServer";

export  function formatTimes () {
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
  let maxArry=[];
  let minArry = [];
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
    maxArry[i] =year+"-"+mon+'-'+curMonthDays+ " "+ "00:"+'00:'+'00'
    minArry[i] = year+"-"+mon+'-'+"01"+ " "+ "00:"+'00:'+'00'
  }
  getTimeList.max =maxArry;
  maxArry.unshift(phtServer.farmatDate());
  minArry.unshift( year+"-"+maxMon+'-'+"01"+ " "+ "00:"+'00:'+'00')
  getTimeList.min = minArry
  return getTimeList

}
