<template>
    <div>
        <Activity/>
        <sponsor/> 
        <Certificate/>
        <Information/>
    </div>
</template>

<script>
import Activity from '../activity/Activity'
import Sponsor from '../sponsor/Sponsor'
import Certificate from '../certificate/Certificate'
import Information from '../information/Information'


export default {
    name: "Maincontent",
    components: {
    Activity,
    Sponsor,
    Certificate,
    Information
  },
}
</script>

<style scoped>

</style>