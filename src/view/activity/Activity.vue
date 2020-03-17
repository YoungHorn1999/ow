<template>
    <div>
        <mainNavBarActivity/>
        <ActivityDetail/>
        <InformationActivity/>
    </div>
</template>

<script>
import mainNavBarActivity from '../../components/navbar/mainNavBarActivity'
import ActivityDetail from '../../components/activity/ActivityDetail'
import InformationActivity from '../../components/information/InformationActivity'

export default {
    name: "activity",
    components: {
        mainNavBarActivity,
        ActivityDetail,
        InformationActivity
    }
}
</script>

<style scoped>
    
</style>