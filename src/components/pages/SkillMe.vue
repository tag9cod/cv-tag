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
                    <div class="ms_weekly_box" v-for="hr, ide in hard" :key="ide">
                        <div class="weekly_left">
                            <div class="w_top_song">
                                <div class="w_tp_song_img">
                                    <div class="ms_song_overlay"></div>
                                </div>
                                    <div class="w_tp_song_name">
                                        <p>{{ hr.name }}</p>
                                    </div>
                            </div>
                        </div>
                        <div class="weekly_right">
                            <span class="w_song_time">{{ hr.name1 }}</span>
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
                judul: 'Keahlian',
                sub1: 'Hard Skill',
                sub2: 'Soft Skill',
                hard: [
                    {name: 'Vue js', name1: 'Communication'},
                    {name: 'Laravel', name1: 'Fast Learner'},
                    {name: 'Bootstrap', name1: 'Team Work'},
                    {name: 'Postman', name1: 'Problem Solving'},
                    {name: 'Git Control', name1: 'Negotiations'},
                    {name: 'RDBMS', name1: 'Leadership'},
                    {name: 'Socmed Ads', name1: 'Interpersonal'},
                    {name: 'Ms. Office', name1: 'Administrative'},
                ],
            };
        },
    };
</script>