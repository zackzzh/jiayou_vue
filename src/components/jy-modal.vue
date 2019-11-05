<template>
  <div>
    <Row type="flex" align="middle" :gutter="20">
      <i-col span="12">
        <div class="form-left">
          <h1>提交我的需求</h1>
          <h4>请认真填写需求信息，我们会尽快和您取得联系</h4>
          <i-input v-model="formData.custCompany">
            <span slot="prepend">
              <Icon type="ios-paper-outline" />公司名称</span>
          </i-input>
          <Row type="flex" align="middle" :gutter="20">
            <i-col span="12">
              <i-input class="bottom-one" v-model="formData.custPhone">
                <span slot="prepend">
                  <Icon type="md-call" />联系电话</span>
              </i-input>
            </i-col>
            <i-col span="12">
              <i-input v-model="formData.custName">
                <span slot="prepend">
                  <Icon type="ios-contact" />联系人</span>
              </i-input>
            </i-col>
          </Row>
          <Row type="flex" align="middle" :gutter="20">
            <i-col span="12">
              <i-input class="bottom-one" v-model="formData.wechatNumber">
                <span slot="prepend">
                  <Icon type="md-text" />微信号</span>
              </i-input>
            </i-col>
            <i-col span="12">
              <i-input v-model="formData.qqNumber">
                <span slot="prepend">
                  <Icon type="md-text" />QQ</span>
              </i-input>
            </i-col>
          </Row>
        </div>
      </i-col>
      <i-col span="12">
        <div class="form-right">
          <i-input type="textarea" :autosize="true" placeholder="请填写需求" class="textarea" v-model="formData.custRemark">
          </i-input>
        </div>
      </i-col>
    </Row>
  
    <div class="button">
      <Button type="primary" @click="submit">提交项目需求</Button>
    </div>
  </div>
</template>
<script>
  import {
    api
  } from '@/api'
  export default {
    data() {
      return {
        formData: {
          custCompany: '',
          custName: '',
          custPhone: '',
          custRemark: '',
          qqNumber: '',
          wechatNumber: ''
        },
      }
    },
    methods: {
      cancel() {
        this.$emit('outModal', false);
      },
      submit() {
        if (this.formData.custCompany.length == 0) {
          this.$Message.info('请填写公司名称');
          return;
        }
        if (this.formData.custPhone.length == 0) {
          this.$Message.info('请填写联系电话');
          return;
        }
        if (this.formData.custName.length == 0) {
          this.$Message.info('请填写联系人');
          return;
        }
        if (this.formData.qqNumber.length == 0) {
          this.$Message.info('请填写QQ号');
          return;
        }
        if (this.formData.custRemark.length == 0) {
          this.$Message.info('请填写微信号');
          return;
        }
        if (this.formData.wechatNumber.length == 0) {
          this.$Message.info('请填写项目需求');
          return;
        }
        api.productApi.addCustDemand(this.formData).then((res) => {
          if (res.code == 200) {
            this.$Message.info({
              content: res.msg,
            });
          }
          this.$emit('out', false);
          this.formData = {
            custCompany: '',
            custName: '',
            custPhone: '',
            custRemark: '',
            qqNumber: '',
            wechatNumber: ''
          }
        })
      },
    }
  }

</script>

<style lang="less">
  /deep/ .ivu-modal {
    width: 62.5% !important;
    .ivu-input-group-large {
      margin-bottom: 20px;
    }
    .ivu-input-group-prepend {
      background: #fff !important;
      border-right: none;
    }

    .ivu-input {
      border-left: none;
    }

    .ivu-icon {
      font-size: 22px;
      margin-right: 10px;
    }

    textarea.ivu-input {
      height: 150px !important;
    }
  }

  @media screen and (max-width: 768px) {
    /deep/ .ivu-modal {
      width: 96.5% !important;

      .ivu-icon {
        font-size: 16px;
      }
      .ivu-input-group-large>.ivu-input-group-prepend {
        font-size: 12px !important;
      }
    }
  }

  @media screen and (min-width: 769px) and(max-width: 1024px) {
    /deep/ .ivu-modal {
      width: 80% !important;

      .ivu-input-group-large>.ivu-input-group-prepend {
        font-size: 12px !important;
      }
    }
  }

  .form-left {
    h1 {
      color: #4D4545;
      font-size: 35px;
    }
    h4 {
      color: #B4B4B4;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .form-right {
    margin-top: 81px;
    .textarea {
      border-left: 1px solid #dcdee2 !important;
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    button {}
  }

</style>
