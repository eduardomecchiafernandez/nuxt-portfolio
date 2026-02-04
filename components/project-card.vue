<template>
    <div 
        class="project-card"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
        :style="cardStyle"
    >
        <a :href="project.url" target="_blank" class="project-card__image-link">
            <div class="project-card__image-wrapper">
                <b-img 
                    fluid 
                    :src="require('~/assets/images/projects/' + project.image)" 
                    :alt="'Project image for ' + project.name"
                    class="project-card__image"
                ></b-img>
                <div class="project-card__image-overlay">
                    <span class="view-project">View Project</span>
                </div>
            </div>
        </a>

        <div class="project-card__content">
            <h3 class="project-card__title">{{ project.name }}</h3>
            
            <p class="project-card__description">{{ project.description }}</p>

            <div class="project-card__technologies">
                <span 
                    v-for="(technology, index) in project.technologies" 
                    :key="index"
                    class="tech-badge"
                >{{ technology }}</span>
            </div>

            <div class="project-card__links">
                <a :href="project.url" target="_blank" class="project-link project-link--primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    See it Live
                </a>
                <a :href="project.github" target="_blank" class="project-link project-link--secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                </a>
            </div>
        </div>
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
        },

        data() {
            return {
                rotateX: 0,
                rotateY: 0,
                isHovering: false
            }
        },

        computed: {
            cardStyle() {
                if (!this.isHovering) {
                    return {
                        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                        transition: 'transform 0.5s ease-out'
                    }
                }
                return {
                    transform: `perspective(1000px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) translateZ(10px)`,
                    transition: 'transform 0.1s ease-out'
                }
            }
        },

        methods: {
            onMouseMove(e) {
                this.isHovering = true;
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 8 degrees)
                this.rotateY = ((x - centerX) / centerX) * 8;
                this.rotateX = ((centerY - y) / centerY) * 8;
            },

            onMouseLeave() {
                this.isHovering = false;
                this.rotateX = 0;
                this.rotateY = 0;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project-card {
        background: rgba(10, 10, 30, 0.6);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        overflow: hidden;
        max-width: 380px;
        width: 100%;
        transform-style: preserve-3d;
        will-change: transform;
        
        &:hover {
            border-color: rgba(139, 92, 246, 0.4);
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.5),
                0 0 60px rgba(139, 92, 246, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);

            .project-card__image-overlay {
                opacity: 1;
            }

            .project-card__image {
                transform: scale(1.05);
            }
        }

        &__image-link {
            display: block;
            text-decoration: none;
        }

        &__image-wrapper {
            position: relative;
            overflow: hidden;
            aspect-ratio: 16 / 10;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &__image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;

            .view-project {
                padding: 10px 24px;
                background: rgba(0, 102, 255, 0.9);
                border-radius: 50px;
                color: white;
                font-weight: 600;
                font-size: 14px;
                transform: translateY(10px);
                transition: transform 0.3s ease;
            }
        }

        &:hover .view-project {
            transform: translateY(0);
        }

        &__content {
            padding: 24px;
        }

        &__title {
            font-family: var(--font-heading);
            font-size: 22px;
            font-weight: 700;
            color: white;
            margin: 0 0 12px 0;
        }

        &__description {
            color: rgba(255, 255, 255, 0.7);
            font-size: 15px;
            line-height: 1.6;
            margin: 0 0 16px 0;
        }

        &__technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }

        &__links {
            display: flex;
            gap: 12px;
        }
    }

    .tech-badge {
        padding: 6px 14px;
        background: linear-gradient(135deg, rgba(189, 0, 197, 0.2) 0%, rgba(49, 255, 255, 0.1) 100%);
        border: 1px solid rgba(189, 0, 197, 0.3);
        border-radius: 50px;
        font-size: 12px;
        font-weight: 500;
        color: #c4b5fd;
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(135deg, rgba(189, 0, 197, 0.3) 0%, rgba(49, 255, 255, 0.2) 100%);
            border-color: rgba(189, 0, 197, 0.5);
        }
    }

    .project-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        svg {
            transition: transform 0.3s ease;
        }

        &:hover svg {
            transform: translateX(2px);
        }

        &--primary {
            background: linear-gradient(135deg, #0066ff 0%, #0048c5 100%);
            color: white;

            &:hover {
                box-shadow: 0 4px 20px rgba(0, 102, 255, 0.4);
                transform: translateY(-2px);
            }
        }

        &--secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);

            &:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.3);
            }
        }
    }
</style>