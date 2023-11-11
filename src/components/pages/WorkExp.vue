<template>
    <div class="ms-banner">
        <div class="container-fluid">
            <div class="row">
                <div class="ms_radio_wrapper">
                    <div class="ms_heading">
                        <h1>Work Experience</h1>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12" v-for="peng, ide in pengalaman" :key="ide"><br>
                    <div class="ms_banner_img">
                        <div v-html="peng.gb"></div>
                    </div>
                    <div class="ms_banner_text">
                        <h1>{{ peng.jabatan }}</h1>
                        <h1 class="ms_color mb-2">{{ peng.nama }}</h1>
                        <p class="ms_color mb-2">{{ peng.tahun }}</p>
                        <p align="justify">{{ peng.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <based/>
</template>

<script>
import based from './ProjectBase.vue';

    export default {
        name: 'WorkExp',
        components: {
            based,
        },

        data() {
            return {
                pengalaman: [
                    {
                        jabatan: 'Admin Risk & Control - Magang', 
                        tahun: 'Agustus - Oktober 2023', 
                        nama: 'PT Lippo Karawaci',
                        gb: '<img src="images/lippo.png" alt="" class="img-fluid" style="border-radius: 55%;">',
                        desc: 'Merekap data audit, membuat laporan audit terkait manajemen asset perusahaan.'
                    },
                    {
                        jabatan: 'Staff Produksi - Karyawan', 
                        tahun: 'Februari 2013 - Januari 2023', 
                        nama: 'PT Surya Toto Indonesia',
                        gb: '<img src="images/toto.png" alt="" class="img-fluid" style="border-radius: 55%;">',
                        desc: 'Membantu proses produksi, merekap data produksi, dan menyusun laporan terkait hasil produksi.'
                    },
                ]
            }
        }
    }
</script>