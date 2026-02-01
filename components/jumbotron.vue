<template>
    <div class="jumbotron">
        <div class="jumbotron__content slide-in-from-left">
            <p class="jumbotron__greeting">Hello, I'm</p>
            <h1 class="jumbotron__name">Eduardo<span class="accent">.</span><span class="jumbotron__surname">Mecchia Fernandez</span></h1>
            <h2 class="jumbotron__title">
                A <strong class="gradient-text">full stack web developer</strong>
            </h2>
            <p class="jumbotron__description">
                Passionate about crafting fast, accessible, and intuitive web experiences using modern technologies and best practices.
            </p>

            <div class="jumbotron__actions">
                <button
                    @click="scrollToElement('projects')"
                    class="btn-modern"
                >
                    <span>View My Work</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                <button
                    @click="scrollToElement('contact')"
                    class="btn-secondary"
                >
                    Get In Touch
                </button>
            </div>
        </div>

        <div class="jumbotron__scroll-indicator" @click="scrollToElement('about')">
            <span>Scroll</span>
            <div class="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            /**
             * Scrolls to the element of the given ID.
             * @param {string} id - The ID (HTML) of the element to scroll to.
            */
            scrollToElement(id) {
                if (document.querySelector(`#${id}`)) {
                    document.querySelector(`#${id}`).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .jumbotron {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 120px 20px 80px;

        &__content {
            max-width: 900px;
            text-align: center;
        }

        &__greeting {
            font-size: 18px;
            font-weight: 500;
            color: #8b5cf6;
            margin-bottom: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        &__name {
            font-family: var(--font-heading);
            font-size: 80px;
            font-weight: 800;
            color: white;
            margin: 0 0 8px 0;
            letter-spacing: -0.03em;
            line-height: 1;

            .accent {
                color: #0066ff;
            }

            @media screen and (max-width: 768px) {
                font-size: 56px;
            }
        }

        &__surname {
            display: block;
            font-size: 32px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.6);
            letter-spacing: 0.02em;
            margin-top: 8px;

            @media screen and (max-width: 768px) {
                font-size: 24px;
            }
        }

        &__title {
            font-family: var(--font-heading);
            font-size: 32px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
            margin: 0 0 24px 0;

            strong {
                font-size: inherit;
            }

            @media screen and (max-width: 768px) {
                font-size: 24px;
            }
        }

        &__description {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.6);
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.7;

            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }

        &__actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        &__scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.3s ease;

            &:hover {
                opacity: 1;
            }

            span {
                font-size: 12px;
                font-weight: 500;
                color: white;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            .scroll-arrow {
                animation: bounce 2s infinite;
                color: white;
            }
        }
    }

    .btn-modern {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 16px 32px;
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 16px;
        color: white;
        background: linear-gradient(135deg, #0066ff 0%, #0048c5 100%);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        svg {
            transition: transform 0.3s ease;
        }

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 102, 255, 0.4);

            svg {
                transform: translateX(4px);
            }
        }
    }

    .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 16px 32px;
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 16px;
        color: white;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            border-color: rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-3px);
        }
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(8px);
        }
        60% {
            transform: translateY(4px);
        }
    }
</style>