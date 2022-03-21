<template>
  <div>
    <div>
      1.名字的脱敏
    </div>
  </div>
</template>

<script>
  // 1. 名字的脱敏处理
  function noPassByName(str) { // 3个字以内显示第一个字，4—6个字显示前两个字，大于6个字脱敏第3—6个字
    if (str != null && str != undefined) {
      if (str.length <= 3) {
        return  str.substring(0, 1) + '**';
      } else if (str.length > 3 && str.length <= 6) {
        return str.substring(0, 2) + '**';
      } else if (str.length > 6) {
        return str.substring(0, 2) + '****' + str.substring(6, str.length)
      }
    } else {
      return '';
    }
  }
  let nameList = ['李世民', '欧阳长风', '沈浪', '君莫愁', '阿斯弗.埃姆斯雷'];
  nameList.forEach(value=>{
    console.log(noPassByName(value)); // 李** 欧阳** 沈** 君** 阿斯****斯雷
  })
  export default {
    
  }
</script>

<style lang="less" scoped>

</style>