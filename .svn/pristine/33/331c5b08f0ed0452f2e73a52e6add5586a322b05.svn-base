<template>
  <div class="jymModal">
    <div class="title">提交我的需求</div>
    <div class="detail">请认真填写需求信息，我们会尽快和您取得联系</div>
    <Row type="flex" align="middle" :gutter="20">
      <i-col span="24">
        <div class="form-left">
          <i-input prefix="ios-paper-outline" v-model="formData.custCompany" size="small" placeholder="请输入公司名称">
          </i-input>
          <i-input class="bottom-one" prefix="md-call" v-model="formData.custPhone" size="small" placeholder="请输入联系电话">
          </i-input>
          <i-input v-model="formData.custName" size="small" prefix="ios-contact" placeholder="请输入联系人">
          </i-input>
          <!-- <i-input class="bottom-one" prefix="md-text" v-model="formData.wechatNumber" size="small" placeholder="请输入微信号">
          </i-input>
          <i-input prefix="md-text" v-model="formData.qqNumber" size="small" placeholder="请输入QQ">
          </i-input> -->
          <!-- <Row type="flex" align="middle" :gutter="2">
            <i-col span="12">
              <i-input class="bottom-one" prefix="md-call" v-model="formData.custPhone" size="small" placeholder="请输入联系电话">
              </i-input>
            </i-col>
            <i-col span="12">
              <i-input v-model="formData.custName" size="small" prefix="ios-contact" placeholder="请输入联系人">
              </i-input>
            </i-col>
          </Row> -->
        </div>
      </i-col>
    </Row>
    <Row type="flex" align="middle" :gutter="20">
      <i-col span="12">
        <i-input class="bottom-one" prefix="md-text" v-model="formData.wechatNumber" size="small" placeholder="请输入微信号">
        </i-input>
      </i-col>
      <i-col span="12">
        <i-input prefix="md-text" v-model="formData.qqNumber" size="small" placeholder="请输入QQ">
        </i-input>
      </i-col>
    </Row>
    <Row>
      <i-col span="24">
        <div class="form-right">
          <i-input type="textarea" :autosize="true" placeholder="请填写需求" class="textarea" v-model="formData.custRemark">
          </i-input>
        </div>
      </i-col>
    </Row>
    <div>
    </div>
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
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #666;
    font-size: 0.10rem;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #666;
    font-size: 0.10rem;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #666;
    font-size: 0.10rem;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #666;
    font-size: 0.10rem;
  }

  .ivu-modal {
    width: 90% !important;
    margin: 0 auto !important;

    .ivu-input-wrapper {
      margin-bottom: 10px;
    }

    .ivu-input-group-large {
      margin-bottom: 20px;
    }

    .ivu-input-group-prepend span {
      background: #fff !important;
      border-right: none;
      font-size: 0.12rem !important;
    }
    .ivu-icon {
      font-size: 0.50rem;
      margin-right: 0.10rem;
    }

    textarea.ivu-input {
      height: 1.80rem !important;
    }

    .ivu-input-group {}
  }

  .jymModal {
    .title {
      position: relative;
      font-size: 0.32rem;
      width: 100%;
      text-align: center;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 0;
        border: 4px solid #000;
      }
    }

    .detail {
      position: relative;
      font-size: 0.26rem;
      width: 100%;
      text-align: center;
      margin-bottom: 0.20rem;
    }

    .form-right {
      .textarea {
      }
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;

      button {}
    }
  }

</style>
