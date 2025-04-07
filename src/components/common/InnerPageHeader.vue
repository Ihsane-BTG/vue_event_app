<template>
    <div class="inner-page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 m-auto">
                    <div class="heading1 text-center">
                        <h1>{{ title }}</h1>
                        <div class="space20"></div>
                        <router-link to="/">Home
                        <i class="fa-solid fa-angle-right"></i>
                        <span>{{ breadcrumb }}</span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InnerPageHeader',
    props: {
        title: {
            type: String,
            required: true
        },
        breadcrumb: {
            type: String,
            required: true
        }
    }
};
</script>