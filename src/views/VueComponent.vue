<template>
  <div>

    <!-- 树形控件的使用vueTreeselect -->
    <div class="vue-tree">
      <!-- 安装：npm install --save @riophae/vue-treeselect -->
      <vue-tree v-model="value" :multiple="true"  :options="options" placeholder="请选择区域">
      </vue-tree>
    </div>

    <!-- 三级联动 -->
    <div class="search-group">
      <div class="search-item">当前位置：</div>
      <div class="search-item" style="width: 19%">
        <div class="label">市/州</div>
        <el-select v-model="value1" clearable placeholder="请选择" size="mini" @change="cityChange">
          <el-option
            v-for="item in cityList"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </div>
      <div class="search-item" style="width: 19%">
        <div class="label">区/县</div>
        <el-select v-model="value2" clearable placeholder="请选择" size="mini" @change="districtChange">
          <el-option
            v-for="item in districtList"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </div>
      <div class="search-item" style="width: 25%">
        <div class="label">乡镇/街道</div>
        <el-select v-model="value3" clearable placeholder="请选择" size="mini" @change="streetChange">
          <el-option
            v-for="item in streetList"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
  // 在script标签上面引入vue-treeselect组件和样式
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    name: 'vuecomponent',
    data(){
      return{
        name: 'treeselect',
        value: null,
        options: [{
          id: 'gd',
          label: '广东省',
          children: [ {
            id: 'gz',
            label: '广州',
            children:[{
              id: 'th',
              label: '天河区'
            }, {
              id: 'yuexiu',
              label: '越秀区'
            }]
          }, {
            id: 'sz',
            label: '深圳',
            children: [{
              id: 'nanshan',
              label: '南山区'
            },{
              id: 'longgang',
              label: '龙岗区'
            }]
          },{
            id: 'fs',
            label: '佛山'
          },{
            id: 'zh',
            label: '珠海'
          } ],
        }, {
          id: 'hebei',
          label: '河北省',
          children: [{
            id: 'shijiazhang',
            lable: "石家庄市"
          },{
            id: 'baoding',
            label: "保定市"
          }]
        }, {
          id: 'beijing',
          label: '北京市',
          children: [{
            id: 'dongcheng',
            label: "东城区"
          },{
            id: 'xicheng',
            label: "西城区"
          },{
            id: 'haiding',
            label: "海淀区"
          }]
        }],
        /* 三级联动 */
        value1:'',
        value2:'',
        value3:'',
        cityList:[
          {
            label: 11,
            code: '广州市'
          },
          {
            label: 12,
            code: '深圳市'
          }
        ],
        districtList:[
          {
            label: 21,
            code: '越秀区',
          },
          {
            label: 22,
            code: '南山区'
          }
        ],
        streetList:[
          {
            label: 31,
            code: '越秀街道'
          },
          {
            label: 32,
            code: '南山街道'
          }
        ]

      }
    },
    components:{
      "vue-tree":Treeselect
    },
    method: {
      /* 
        需要保存获取到的列表数据
        如果左侧加入点击更新表格 根据实际情况而定(四级联动)
      */
      // 获取城市列表
      cityChange(){
        // 改变城市后 1. 清空区县 2. 清空街道 3. 获取新城市的区县列表
        console.log('获取城市列表');
      },

      // 获取区县列表
      districtChange(){
        // 改变区县后 1. 清空街道 2. 获取新区县的街道列表
        console.log('获取区县列表');
      },

      // 获取街道乡镇列表
      streetChange(){
        // 更新街道数据
        console.log('获取乡镇列表');
      }
    }
  }
</script>

<style lang="less" scoped>
.vue-tree{
  width: 300px;
  height: 400px;
}
.search-group {
  width: 95%;
  display: flex;
  align-items: center;
  .search-item {
    display: flex;
    align-items: center;
    justify-items: center;
    .label {
      font-size: 12px;
      padding: 0 5px;
      width: 50%;
      text-align: center;
    }
  }
}
</style>