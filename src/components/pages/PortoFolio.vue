<template>
    <div class="ms_radio_wrapper">
        <div class="ms_heading">
            <h1>{{ tema }}</h1>
            <p>{{ subtema }}</p>
        </div>
        <div class="ms_relative_inner">
            <div class="ms_radio_slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="pr, ide in porto" :key="ide">
                        <div class="ms_rcnt_box">
                            <div class="ms_rcnt_box_img">
                                <div v-html="pr.b"></div>
                                <div class="ms_main_overlay">
                                    <div class="ms_box_overlay"></div>
                                    <div class="ms_more_icon">
                                        <img src="images/svg/more.svg" alt="">
                                    </div>
                                    <ul class="more_option">
                                        <li><a v-bind:href="pr.c" target="_blank"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Buka</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ms_rcnt_box_text">
                                <h3>{{ pr.a }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add Arrows -->
            <div class="swiper-button-next4 slider_nav_next"></div>
            <div class="swiper-button-prev4 slider_nav_prev"></div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tema: 'Portofolio',
                subtema: 'Berbagai projek yang telah saya kerjakan baik secara online maupun offline.',
                porto: [
                    {
                        a: 'Vendor Management - Vuejs & Laravel', 
                        b: '<img src="images/inosoft_bootcamp.png" alt="" class="img-fluid" />',
                        c: 'images/inosoft_bootcamp.png'
                    },
                    {
                        a: 'Qwords.com - Laravel', 
                        b: '<img src="images/landingPage_qwords.png" alt="" class="img-fluid" />',
                        c: 'images/landingPage_qwords.png'
                    },
                    {
                        a: 'Digital Marketing', 
                        b: '<img src="images/digMar_spesialis.png" alt="" class="img-fluid" />',
                        c: 'images/digMar_spesialis.png'
                    },
                    {
                        a: 'SEO Outreach', 
                        b: '<img src="images/seo_outreach.png" alt="" class="img-fluid" />',
                        c: 'images/seo_outreach.png'
                    },
                    {
                        a: 'Aplikasi Koperasi - Delphi', 
                        b: '<img src="images/kopkar_delphi.png" alt="" class="img-fluid" />',
                        c: 'images/kopkar_delphi.png'
                    },
                    {
                        a: 'Aplikasi Perpustakaan - Delphi', 
                        b: '<img src="images/perpus_delphi.png" alt="" class="img-fluid" />',
                        c: 'images/perpus_delphi.png'
                    },
                    {
                        a: 'Aplikasi Penerimaan Siswa - Delphi', 
                        b: '<img src="images/siswa_delphi.png" alt="" class="img-fluid" />',
                        c: 'images/siswa_delphi.png'
                    },
                    {
                        a: 'Penjualan Motor - PHP', 
                        b: '<img src="images/skripsi.png" alt="" class="img-fluid" />',
                        c: 'images/skripsi.png'
                    },
                    {
                        a: 'Penerimaan Karyawan - PHP', 
                        b: '<img src="images/loker_php.png" alt="" class="img-fluid" />',
                        c: 'images/loker_php.png'
                    }
                ],
            }
        }
    }
</script>