<template>
    <!----Live Radio Section Start---->
    <div class="ms_radio_wrapper">
        <div class="ms_heading">
            <h1>{{ judul }}</h1>
            <p>{{ subjudul }}</p>
        </div>
        <div class="ms_relative_inner">
            <div class="ms_radio_slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="corse, ide in kursus" :key="ide">
                        <div class="ms_rcnt_box">
                            <div class="ms_rcnt_box_img">
                                <div v-html="corse.gbr"></div>
                                <div class="ms_main_overlay">
                                    <div class="ms_box_overlay"></div>
                                    <div class="ms_more_icon">
                                        <img src="images/svg/more.svg" alt="">
                                    </div>
                                    <ul class="more_option">
                                        <li><a v-bind:href="corse.down" target="_blank"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Buka</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ms_rcnt_box_text">
                                <h3>{{ corse.nama }}</h3>
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
    <projek/>
</template>
<script>
import projek from './PortoFolio.vue';

    export default {
        name: 'CourseMe',
        components: {
            projek,
        },

        data() {
            return {
                judul: 'Course',
                subjudul: 'Berbagai pelatihan telah saya ikuti guna menunjang pengetahuan dan keterampilan.',
                kursus: [
                    {
                        gbr: '<img src="images/audit_atlas.png" alt="" class="img-fluid" />',
                        nama: 'Siklus Audit ISA',
                        down: 'images/audit_atlas.png'
                    },
                    {
                        gbr: '<img src="images/data_science.png" alt="" class="img-fluid" />',
                        nama: 'Data Scientist',
                        down: 'images/data_science.png'
                    },
                    {
                        gbr: '<img src="images/bangalore.png" alt="" class="img-fluid" />',
                        nama: 'Front End',
                        down: 'images/bangalore.png'
                    },
                    {
                        gbr: '<img src="images/dicoding1.png" alt="" class="img-fluid" />',
                        nama: 'Belajar Dasar AWS',
                        down: 'images/dicoding1.png'
                    },
                    {
                        gbr: '<img src="images/dicoding2.png" alt="" class="img-fluid" />',
                        nama: 'Belajar Dasar DevOps',
                        down: 'images/dicoding2.png'
                    },
                    {
                        gbr: '<img src="images/dicoding3.png" alt="" class="img-fluid" />',
                        nama: 'Belajar Dasar Javascript',
                        down: 'images/dicoding3.png'
                    },
                ],
            };
        },
    };
</script>

