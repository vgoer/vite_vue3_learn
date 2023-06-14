<style scoped lang="less">
.block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}
.block:last-child {
    border-right: none;
    .demonstration{
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
    }
}

</style>
<template>
    <div class="panel">
        <div class="block">
            <span class="demonstration">Start and end date time 12:00:00</span>
            <el-date-picker
            v-model="state.value1"
            type="datetimerange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            :default-time="defaultTime1"
            />
        </div>


    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const state = reactive({
    value1:null
})

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'

</script>
