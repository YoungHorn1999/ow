<template>
    <div class="certificate">
      <span class="certificatetitle">证书鉴定</span>
      <span class="certificatecontent">方言认证证书代表了最高标准的可靠性、一致性和完整性。<br>
            而现在，我们为所有方言认证证书证书提供核对服务，让您享受更令人放心的保证。<br>
            借助证书核对服务，您可以方便快捷地确认证书中记载的信息是否与证书数据库中存档的信息相一致。
      </span>
      <form>
        <select>
          <option hidden>请选择证书类型</option>
          <option>志愿证明</option>
          <option>活动证明</option>
          <option>学习证明</option>
          <option>实习证明</option>
        </select>
      </form>
      <input type="text" placeholder="请输入证书编号" class="input">
      <input type="submit" value="查询" class="submit" @click="certificateClick">
    </div>
</template>

<script>
export default {
    name: "Certificate",
    methods: {
    certificateClick() {
      this.$router.push("/certificate")
    }
}
}
</script>

<style scoped>
    .certificate{
    width: 100%;
    position: absolute;
    top: 3193px;
    height: 670px;
    background-color: #3d383a;
  }

  .certificatetitle{
    color: white;
    font-size: 3vw;
    position: absolute;
    left: 44vw;
    top: 90px;
    font-weight: bolder;
  }

  .certificatecontent{
    color: white;
    font-size: 1.3vw;
    position: absolute;
    left: 21vw;
    top: 200px;
    text-align: center;
    }

  select {
  width: 26vw;
  height: 20px;
  border: none;
  background-color: #f1f1f1;
  height: 20px;
  position: absolute;
  left: 37vw;
  top: 400px;
}

option{
  height: 20px;
}

.input{
  width: 26vw;
  position: absolute;
  left: 37vw;
  top: 450px;
}

.submit{
  width: 10vw;
  position: absolute;
  top: 550px;
  left: 45vw;
  border-radius: 4px;
  cursor:pointer;
}
</style>