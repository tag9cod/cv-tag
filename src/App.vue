<template>
    <!----Main Wrapper Start---->
    <div class="ms_main_wrapper">
        <!---SideMenu--->
        <div class="ms_sidemenu_wrapper">
            <div class="ms_sidemenu_inner">
                <div class="ms_nav_wrapper"></div>
            </div>
        </div>
        <!---Main Content Start--->
        <div class="ms_content_wrapper padder_top80">
            <hider/>
            <router-view/>
        </div>
        
            <futer/>
    </div>
</template>
<script>
    import hider from './components/HeaderTop.vue';
    import futer from './components/FooterBot.vue';
    
    export default {
        name: 'App',
        components: {
            hider,
            futer,
        }
    }
</script>