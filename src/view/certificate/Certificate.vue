<template>
    <div>
        <mainNavBarCertificate/>
        <CertificateDetail/>
        <InformationCertificate/>
    </div>
</template>

<script>
import mainNavBarCertificate from '../../components/navbar/mainNavBarCertificate'
import CertificateDetail from '../../components/certificate/CertificateDetail'
import InformationCertificate from '../../components/information/InformationCertificate'

export default {
    name: "Certificate",
    components: {
        mainNavBarCertificate,
        CertificateDetail,
        InformationCertificate
    }
}
</script>

<style scoped>
    
</style>