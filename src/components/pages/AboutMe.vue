<template>
    <!---Weekly Top 15--->
    <div class="ms_weekly_wrapper">
        <div class="ms_weekly_inner">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ms_heading">
                        <h1>{{ judul }}</h1>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 padding_right40">
                    <p>{{ subjudul }}</p>
                    <div class="ms_weekly_box" v-for="camp, ide in kuliah" :key="ide">
                        <div class="weekly_left">
                            <div class="w_top_song">
                                <div class="w_tp_song_img">
                                    <div class="ms_song_overlay"></div>
                                </div>
                                <div class="w_tp_song_name">
                                    <h3>{{ camp.b }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="weekly_right">
                            <p>{{ camp.a }}</p>
                        </div>
                    </div>
                    <div class="ms_divider"></div>
                </div>
            </div>
        </div>
    </div>
    <ahli/>
</template>

<script>
import ahli from './SkillMe.vue'

    export default {
        name: 'AboutMe',
        components: {
            ahli,
        },

        data() {
            return {
                judul: 'About Me',
                subjudul: 'Seorang lulusan sistem informasi dari pergururan tinggi swasta dengan memiliki berbagai macam pengalaman kerja dan projek lainnya.',
                kuliah: [
                    {
                        a: 'STMIK IP',
                        b: 'Universitas'
                    },
                    {
                        a: 'Sistem Informasi',
                        b: 'Jurusan'
                    },
                    {
                        a: '2015 - 2019',
                        b: 'Tahun'
                    },
                    {
                        a: '3.19',
                        b: 'IPK'
                    },
                    {
                        a: '081905072949',
                        b: 'Whatsapp'
                    },
                    {
                        a: 'tgunawant@gmail.com',
                        b: 'Email'
                    },
                    {
                        a: 'Tangerang - Banten',
                        b: 'Alamat'
                    },
                ],
            };
        },
    };
</script>