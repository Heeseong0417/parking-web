import Echarts from 'echarts-for-react';

const parking_info =()=>{

const option ={
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]

} 
    return(<>
    <div className="w-full h-full text-left text-color-clound-b block">
<div className="text-xl  font-bold"><strong>단지 내 교통량 정보</strong></div>
<div className="text-lg  font-bold"><strong>단지 내 교통량 정보를 확인합니다.</strong></div>
    <div>
    <Echarts
  option={option}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  


></Echarts>

    </div>
    </div>
    
    
    </>)
}
export default parking_info;