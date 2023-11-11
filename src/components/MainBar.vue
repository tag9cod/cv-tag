<template>
    <!---Banner--->
    <div class="ms-banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12"><br>
                    <div class="ms_banner_img">
                        <img src="images/banner.png" alt="" class="img-fluid" style="border-radius: 60%;">
                    </div>
                    <div class="ms_banner_text">
                        <h1>{{ name }}</h1>
                        <span class="ms_color mb-2">{{ st }}</span>
                        <p align="justify">{{ desc }}</p>
                        <div class="ms_banner_btn">
                            <a href="./cv-tag-1123.pdf" class="ms_btn" target="_blank">{{ cv }}</a>
                        </div>
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
                name: 'Tri Adhi Gunawan',
                st: 'Bachelor of Information Systems',
                desc: 'Berasal dari keluarga sederhana dengan tekad merantau dengan membawa ijazah smk otomotif dan menjadi karyawan pabrik. Dan melanjutkan pendidikan dengan biaya sendiri di perguruan tinggi swasta di Tangerang - Banten.',
                cv: 'Download CV'
            }
        }
    }
</script>