<template>
    <!----Footer Start---->
    <div class="ms_footer_wrapper">
        <div class="ms_footer_inner">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="footer_box footer_contacts">
                        <div class="foo_sharing">
                            <h1 class="footer_title">{{ contak }}</h1>
                            <ul>
                                <li><a href="https://wa.me/6281905072949/" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                <li><a href="https://linkedin.com/in/tadigunawan/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/tag9cod/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!----Copyright---->
        <div class="col-lg-12">
            <div class="ms_copyright">
                <div class="footer_border"></div>
                <p>{{ fut }} {{ new Date().getFullYear() }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                contak: 'Contact',
                fut: 't.a.g - Coding Liker © 2023 -'
            }
        }
    }
</script>