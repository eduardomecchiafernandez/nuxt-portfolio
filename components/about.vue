<template>
    <section id="about">
        <Heading text="About me"></Heading>

        <article>
            <div class="paragraph-container">
                <p>
                    I'm a {{ new Date().getFullYear() - 2001 }}-year-old <strong>software engineer</strong> from Rome with
                    a strong passion for technology, psychology and neuroscience.
                </p>

                <p>
                    I'm currently working as a <strong>Solution Engineer</strong> at <a href="https://octostar.com/" target="_blank" class="highlight-link">Octostar</a>, building the future of AI-powered investigation.
                </p>
                
                <p>
                    I dove into <strong>web development</strong> {{ new Date().getFullYear() - 2021 }} years ago,
                    dreaming to make people's lives easier thanks to sophisticated and
                    <strong>user-friendly</strong> products.
                </p>

                <p>
                    Music is another passion of mine, you can check out my <a href="https://last.fm/user/eduardomecchiaf" target="_blank" class="highlight-link">Last.fm profile</a> to see what I love and what I'm listening to.
                </p>
            </div>

            <!-- Photo of me -->
            <figure class="photo-wrapper">
                <div class="photo-glow"></div>
                <div class="photo-frame">
                    <b-img
                        src="~/assets/images/playa-tora-paguera.png"
                        class="photo"
                        fluid
                        alt="Photo of Eduardo Mecchia Fernandez looking at the ocean in Playa Tora, Paguera, Mallorca."
                    ></b-img>
                </div>
            </figure>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    section {
        padding: 20px;

        article {
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 40px;

            @media screen and (max-width: 900px) {
                flex-direction: column;
                gap: 30px;
            }

            .paragraph-container {
                flex: 1;
                padding: 20px;
                text-align: center;

                p {
                    font-size: 20px;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.8;
                    margin-bottom: 20px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                strong {
                    font-size: 20px;
                    color: white;
                    font-weight: 600;
                }

                .highlight-link {
                    font-size: 20px;
                    color: #8b5cf6;
                    text-decoration: none;
                    font-weight: 600;
                    position: relative;
                    transition: all 0.3s ease;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background: linear-gradient(90deg, #bd00c5, #31ffff);
                        transition: width 0.3s ease;
                    }

                    &:hover {
                        color: #a78bfa;

                        &::after {
                            width: 100%;
                        }
                    }
                }

                @media screen and (min-width: 1024px) {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                @media screen and (max-width: 768px) {
                    margin-top: 30px;
                    width: 100%;
                    order: 2;
                    padding: 0;

                    p, strong, .highlight-link {
                        font-size: 18px;
                    }
                }
            }

            .photo-wrapper {
                position: relative;
                flex-shrink: 0;

                @media screen and (max-width: 768px) {
                    order: 1;
                }
            }

            .photo-glow {
                position: absolute;
                inset: -20px;
                background: linear-gradient(135deg, 
                    rgba(189, 0, 197, 0.3) 0%, 
                    rgba(0, 102, 255, 0.3) 50%, 
                    rgba(49, 255, 255, 0.2) 100%
                );
                border-radius: 24px;
                filter: blur(30px);
                opacity: 0.6;
                transition: all 0.5s ease;
                z-index: 0;
            }

            .photo-frame {
                position: relative;
                z-index: 1;
                padding: 4px;
                background: linear-gradient(135deg, 
                    #bd00c5 0%, 
                    #0066ff 50%, 
                    #31ffff 100%
                );
                background-size: 200% 200%;
                border-radius: 20px;
                animation: gradient-shift 4s ease infinite;
                transition: all 0.4s ease;

                .photo {
                    display: block;
                    max-width: 400px;
                    border-radius: 16px;
                    transition: transform 0.4s ease;

                    @media screen and (max-width: 768px) {
                        max-width: 280px;
                    }
                }
            }

            .photo-wrapper:hover {
                .photo-glow {
                    opacity: 0.8;
                    filter: blur(40px);
                }

                .photo {
                    transform: scale(1.02);
                }
            }
        }
    }

    @keyframes gradient-shift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
