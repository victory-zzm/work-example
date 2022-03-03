/* 这里是1月的情况 */
// 刷卡总量
const barData = {
  bottomData:[1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '第一周',value1: '36048'},
    {area: '第二周',value1: '22145'},
    {area: '第三周',value1: '22572'},
    {area: '第四周',value1: '17085'},
    {area: '第五周',value1: '3356'},
  ]
}
const barDataMakeUp = {
  bottomData:[1, 1, 1, 1, 1],
  chartdata: [
    {area: '第一周',value1: '8571'},
    {area: '第二周',value1: '11900'},
    {area: '第三周',value1: '9403'},
    {area: '第四周',value1: '8408'},
    {area: '第五周',value1: '2044'},
  ]
}

// 银行
const bankChartData ={
  bottomData:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '工商',value1: '15444'},
    {area: '农业',value1: '30310'},
    {area: '中国',value1: '4313'},
    {area: '建设',value1: '4855'},
    {area: '交通',value1: '927'},
    {area: '光大',value1: '29245'},
    {area: '广发',value1: '1543'},
    {area: '广州',value1: '3780'},
    {area: '农商',value1: '4348'},
    {area: '招商',value1: '5786'},
    {area: '邮储',value1: '655'},
  ],
}
const bankChartDataMakeUp = {
  bottomData:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '工商',value1: '8958'},
    {area: '农业',value1: '9935'},
    {area: '中国',value1: '1226'},
    {area: '建设',value1: '3178'},
    {area: '交通',value1: '940'},
    {area: '光大',value1: '8832'},
    {area: '广发',value1: '9935'},
    {area: '广州',value1: '1023'},
    {area: '农商',value1: '3759'},
    {area: '招商',value1: '411'},
    {area: '邮储',value1: '944'},
  ],
}

// 区域
const deptChartData = [
  {area: '天河区', value1: '21292'},
  {area: '越秀区', value1: '26424'},
  {area: '白云区', value1: '12310'},
  {area: '黄埔区', value1: '6896'},
  {area: '荔湾区', value1: '4007'},
  {area: '海珠区', value1: '7719'},
  {area: '番禺区', value1: '7766'},
  {area: '花都区', value1: '4236'},
  {area: '从化区', value1: '959'},
  {area: '增城区', value1: '3696'},
  {area: '南沙区', value1: '2355'},
]
const deptChartDataMakeUp = [
  {area: '天河区', value1: '4280'},
  {area: '越秀区', value1: '5285'},
  {area: '白云区', value1: '4243'},
  {area: '黄埔区', value1: '2325'},
  {area: '荔湾区', value1: '3823'},
  {area: '海珠区', value1: '5297'},
  {area: '番禺区', value1: '4094'},
  {area: '花都区', value1: '2486'},
  {area: '从化区', value1: '1024'},
  {area: '增城区', value1: '2493'},
  {area: '南沙区', value1: '1282'},
]

const totalNum = [0,0,',',1,0,1,',',2,0,6];
const totalNumMakeUp = [0,0,',',0,4,0,',',3,2,6]

const apply = {
  barData: barData,
  bankChartData: bankChartData,
  deptChartData: deptChartData,
  totalNum: totalNum
}
const makeUp = {
  barData: barDataMakeUp,
  bankChartData:bankChartDataMakeUp,
  deptChartData: deptChartDataMakeUp,
  totalNum: totalNumMakeUp
}


/* 这里是1周的情况 */

// 刷卡总量
const weekData = {
  bottomData:[1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '星期一',value1: '1646'},
    {area: '星期二',value1: '2609'},
    {area: '星期三',value1: '633'},
    {area: '星期四',value1: '4891'},
    {area: '星期五',value1: '3823'},
    {area: '星期六',value1: '3906'},
    {area: '星期日',value1: '18540'},
  ]
}
const weekDataMakeUp = {
  bottomData:[1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '星期一',value1: '228'},
    {area: '星期二',value1: '251'},
    {area: '星期三',value1: '378'},
    {area: '星期四',value1: '1751'},
    {area: '星期五',value1: '1826'},
    {area: '星期六',value1: '1938'},
    {area: '星期日',value1: '2199'},
  ]
}

// 区域
const weekDeptChartData = [
  {area: '天河区', value1: '8324'},
  {area: '越秀区', value1: '14395'},
  {area: '白云区', value1: '2467'},
  {area: '黄埔区', value1: '2655'},
  {area: '荔湾区', value1: '998'},
  {area: '海珠区', value1: '1804'},
  {area: '番禺区', value1: '1970'},
  {area: '花都区', value1: '962'},
  {area: '从化区', value1: '165'},
  {area: '增城区', value1: '859'},
  {area: '南沙区', value1: '569'},
]
const weekDeptChartDataMakeUp = [
  {area: '天河区', value1: '975'},
  {area: '越秀区', value1: '1039'},
  {area: '白云区', value1: '844'},
  {area: '黄埔区', value1: '537'},
  {area: '荔湾区', value1: '792'},
  {area: '海珠区', value1: '1129'},
  {area: '番禺区', value1: '843'},
  {area: '花都区', value1: '533'},
  {area: '从化区', value1: '161'},
  {area: '增城区', value1: '482'},
  {area: '南沙区', value1: '302'},
]

// 银行
const weekBankChartData = {
  bottomData:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '工商',value1: '2962'},
    {area: '农业',value1: '6356'},
    {area: '中国',value1: '1001'},
    {area: '建设',value1: '1189'},
    {area: '交通',value1: '473'},
    {area: '光大',value1: '20122'},
    {area: '广发',value1: '339'},
    {area: '广州',value1: '756'},
    {area: '农商',value1: '1120'},
    {area: '招商',value1: '1602'},
    {area: '邮储',value1: '128'},
  ],
}
const weekBankChartDataMakeUp = {
  bottomData:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 底部数值  都为1
  chartdata: [
    {area: '工商',value1: '1698'},
    {area: '农业',value1: '2025'},
    {area: '中国',value1: '263'},
    {area: '建设',value1: '661'},
    {area: '交通',value1: '165'},
    {area: '光大',value1: '1963'},
    {area: '广发',value1: '249'},
    {area: '广州',value1: '838'},
    {area: '农商',value1: '282'},
    {area: '招商',value1: '105'},
    {area: '邮储',value1: '322'},
  ],
}

const weekTotalNum = [0,0,',',0,3,6,',',0,4,8];
const weekTotalNumMakeUp = [0,0,',',0,0,8,',',5,7,1]

const weekApply = {
  barData: weekData,
  bankChartData: weekBankChartData,
  deptChartData: weekDeptChartData,
  totalNum: weekTotalNum
}
const weekMakeUp = {
  barData: weekDataMakeUp,
  bankChartData: weekBankChartDataMakeUp,
  deptChartData: weekDeptChartDataMakeUp,
  totalNum: weekTotalNumMakeUp
}

// 周
export const weekAllMiddleData = [
  weekApply,
  weekMakeUp
]

// 月
export const allMiddleData = [
  apply,
  makeUp
]
