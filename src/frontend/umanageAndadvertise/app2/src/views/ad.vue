<template>
    <div>
        <Strong style="font-size: 24px">广告申请</Strong>
        <Divider />
            <div >
                <p  style="display:inline;font-size: 14px;" >
                    <span style="display:inline-block;width:100px;text-align:right;">申请公司名称：</span></p>
                <template style="display:inline">
                    <Input v-model="formItem.entername" prefix="ios-contact" align="left" placeholder="Enter something..." style="width: 300px" />
                </template>
            </div>
            <br>
            <div >
                <p style="display:inline;font-size: 14px;width:90px">
                    <span style="display:inline-block;width:100px;text-align:right;">广告标题：</span></p>
                <template style="display:inline;float:right">
                    <Input v-model="formItem.title" prefix="ios-analytics-outline" align="left" placeholder="Enter something..." style="width: 300px" />
                </template>
            </div>
            <br>
            <div >

                <template style="display:inline">
                    <p style="display:inline;font-size: 14px" align="left" >
                        <span style="display:inline-block;width:100px;text-align:right;">广告详细内容：</span></p>
                    <Input v-model="formItem.detail" prefix="md-aperture" type="textarea" :rows="7" align="left" placeholder="Enter something..." style="width: 300px" />
                </template>
            </div>
            <br>
            <div >
                <template >
                    <p style="display:inline;font-size: 14px">
                        <span style="display:inline-block;width:100px;text-align:right;">广告图片：</span></p>
                    <Upload :before-upload="handleuploadimg"
                            style="display:inline" action="http://localhost:8091/ad/uploadimg">
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </template>
            </div>

            <div >
                <template >
                    <p style="display:inline;font-size: 14px">
                        <span style="display:inline-block;width:100px;text-align:right;">广告视频：</span></p>
                    <Upload :before-upload="handleuploadvid"
                            style="display:inline" action="//jsonplaceholder.typicode.com/posts/">
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </template>
            </div>
            <br>
            <Button type="primary" v-on:click="handle">提交</Button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ad",

        data() {
            return {
                formItem: {
                    entername:'',
                    title:'',
                    detail:'',
                    imgfile:'',
                    vidfile:'',

                },
                test:'12'
            }
        },
        methods:{

            handleuploadimg(file){

                console.log(file);
                this.formItem.imgfile = file;
                return false;
            },
            handleuploadvid(file){
                this.formItem.vidfile = file;
                return false;
            },

            show(){
                console.log(this.formItem.imgfile);
                console.log(this.formItem.vidfile);
                console.log(this.test);
            },
            handle(){
                var formData = new FormData();
                var formData = new window.FormData();
                formData.append('imgfile',this.formItem.imgfile);
                formData.append('vidfile',this.formItem.vidfile);
                formData.append('entername',this.formItem.entername);
                formData.append('title',this.formItem.title);
                formData.append('detail',this.formItem.detail);
                axios({
                    url:'http://localhost:8091/ad/upload',
                    method: 'post',
                    data: formData
                        //file:this.formItem.imgfile
                        // imgfile:this.formItem.imgfile,
                        // vidfile:this.formItem.vidfile,
                        // entername:this.formItem.entername,
                        // title:this.formItem.title,
                        // detail:this.formItem.detail

                }).then( (res) => {

                    console.log(this.formItem.imgfile);
                })
            }
        }

    }
</script>

<style scoped>

</style>