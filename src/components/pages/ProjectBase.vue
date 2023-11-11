<template>
    <div class="ms-banner">
        <div class="container-fluid">
            <div class="row">
                <div class="ms_radio_wrapper">
                    <div class="ms_heading">
                        <h1>Project Based</h1>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12" v-for="base, ide in project" :key="ide"><br>
                    <div class="ms_banner_img">
                        <div v-html="base.gbr"></div>
                    </div>
                    <div class="ms_banner_text">
                        <h1>{{ base.posisi }}</h1>
                        <h1 class="ms_color mb-2">{{ base.kantor}}</h1>
                        <p class="ms_color mb-2">{{ base.durasi }}</p>
                        <p align="justify">{{ base.des }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                project: [
                    {
                        gbr: '<img src="images/inosoft.png" alt="" class="img-fluid" style="border-radius: 50%;">',
                        posisi: 'Front End - Bootcamp',
                        kantor: 'PT Inosoft Trans Sistem',
                        durasi: 'Maret - Juni 2023',
                        des: 'Membuat desain web manajemen vendor dengan vue js.'
                    },
                    {
                        gbr: '<img src="images/qwords.png" alt="" class="img-fluid" style="border-radius: 50%;">',
                        posisi: 'Fullstack Developer - Virtual',
                        kantor: 'PT Qwords Company International',
                        durasi: 'Februari - Maret 2023',
                        des: 'Membuat situs Qwords.com dengan dengan laravel.'
                    },
                    {
                        gbr: '<img src="images/qwords.png" alt="" class="img-fluid" style="border-radius: 50%;">',
                        posisi: 'Digital Marketing - Virtual',
                        kantor: 'PT Qwords Company International',
                        durasi: 'Mei - Juni 2023',
                        des: 'Melakukan market plan di Fb Ads dan Google Ads dan Riset keyword.'
                    },
                    {
                        gbr: '<img src="images/niagahoster.png" alt="" class="img-fluid" style="border-radius: 50%;">',
                        posisi: 'SEO Outreach - Virtual',
                        kantor: 'PT Niagahoster',
                        durasi: 'Desember 2022 - Januari 2023',
                        des: 'Melakukan riset keyword, Audit SEO, Negative Backlink dan Strategi SEO.'
                    },
                ]
            }
        }
    }
</script>