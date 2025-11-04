<template>
    <div class="project-card shadow p-3 mb-5 rounded scale-on-hover">
        <a :href="project.url" target="_blank">
            <b-img 
                fluid 
                :src="require('~/assets/images/projects/' + project.image)" 
                :alt="'Project image for ' + project.name"
                rounded="true"
                thumbnail
                width="500"
                center
            ></b-img>
        </a>

        <div class="project-card__title">
            <b>Title:&nbsp;</b> <span>{{ project.name }}</span>
        </div>

        <div>
            <b>Description:&nbsp;</b> <span>{{ project.description }}</span>
        </div>

        <div>
            <b>Link:&nbsp;</b> <a :href="project.url" target="_blank">Click here</a>
        </div>
        
        <ul>
            <li><b>Technologies:&nbsp;</b></li>

            <li v-for="technology in project.technologies">{{ technology }}</li>
        </ul>

        <b>GitHub repository:&nbsp;</b> <a :href="project.github" target="_blank">Click here</a>
    </div>
</template>

<script>
    import Project from './models/Project';

    export default {
        name: 'ProjectCard',

        props: {
            project: {
                type: Project,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project-card {
        margin-bottom: 50px;
        background-color: #0d74d3;
        border-radius: 5px;
        padding: 30px;
        max-width: 350px;
        color: black;

        ul {
            list-style: none;
            padding: 0;
        }
    
        &__title {
            margin-top: 30px;
        }
    }

    span, li {
        color: white;
    }

    a {
        font-weight: bold;
        color: white;
    }

    b {
        color: black;
    }
</style>