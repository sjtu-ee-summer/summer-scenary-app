<template>
    <div>
        <Menu mode="horizontal" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                <router-link to="/usermanage">用户管理</router-link>
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
        <template>
            <Table ref="selection" size="large" stripe :columns="columns1" :data="userlist">
                <template slot-scope="{ row }" slot="username">
                    <strong>{{ row.username }}</strong>
                </template>
                <template slot-scope="{ row }" slot="age">
                    <p>{{ row.age }}</p>
                </template>
                <template slot-scope="{ row }" slot="address">
                    <p>{{ row.address }}</p>
                </template>
                <template slot-scope="{ row }" slot="sex">
                    <p>{{ row.sex }}</p>
                </template>
                <template slot-scope="{ row }" slot="phone">
                    <p>{{ row.phone }}</p>
                </template>
                <template slot-scope="{ row }" slot="vip">
                    <Button size="small" type="success">add</Button> {{ row.vip }} <Button size="small" type="warning">reduce</Button>
                </template>
                <template slot-scope="{ row }" slot="enabled">
                    <p>{{ row.enabled }}</p>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">able</Button>
                    <Button type="error" size="small" @click="remove(index)">unable</Button>
                </template>
            </Table>
            <Button style="float:left" @click="handleSelectAll(true)">Set all selected</Button>
            <Button style="float:left" @click="handleSelectAll(false)">Cancel all selected</Button>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'username',
                        slot: 'username',
                    },
                    {
                        title: 'Age',
                        slot:'age',
                        sortable: true

                    },
                    {
                        title: 'Address',
                        slot: 'address'
                    },
                    {
                        title:'Sex',
                        slot:'sex'
                    },
                    {
                        title:'Phone',
                        slot:'phone'
                    },
                    {
                        title:'Vip',
                        slot:'vip',
                        sortable: true,
                        align: 'center'
                    },
                    {
                        title:'Enbale',
                        slot:'enabled',
                        align: 'center'
                    },
                    {
                        title:'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                userlist:[]
            }
        },
        created:function () {
            axios({
                url:'api/admin/alluser',
                method:'get',
                // params:{
                //     username:'222',
                //     password:'1',
                //     email:'12'
                // }
                headers:{
                    "Authorization": "Bearer 4e4e0544-347f-43ec-8660-4b53cd93f16a"
                }
            }).then( (res) => {
                    console.log(res.data);
                    for(var i=0;i<res.data.length;i++) {
                        this.userlist.push(res.data[i]);
                    }
                })
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
        }

    }
</script>
<style scoped>

</style>