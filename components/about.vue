<template>
    <section id="about">
        <Heading text="About me"></Heading>

        <article>
            <div class="paragraph-container">
                <p>
                    I’m a {{ new Date().getFullYear() - 2001 }}-year-old <strong>software developer</strong> from Rome with
                    a strong passion for technology, psychology and neurosciences in general.
                </p>
                
                <p>
                    I dove into <strong>web development</strong> {{ new Date().getFullYear() - 2021 }} years ago,
                    dreaming to make people’s lives easier thanks to sophisticated and
                    <strong>user-friendly</strong> products.
                </p>

                <p>
                    Music is another passion of mine, you can check out my <a href="https://last.fm/user/eduardomecchiaf" target="_blank">Last.fm profile</a> to see what I love or what I'm listening to.
                </p>
            </div>

            <!-- Photo of me -->
            <figure>
                <b-img
                    src="~/assets/images/playa-tora-paguera.png"
                    class="shadow-lg rounded-lg"
                    fluid
                    alt="Photo of Eduardo Mecchia Fernandez looking at the ocean in Playa Tora, Paguera, Mallorca."
                ></b-img>
            </figure>
        </article>

        <!-- <div class="technologies">ROWS OF TECHNOLOGIES USED</div> -->
    </section>
</template>

<style lang="scss" scoped>
    section {
        padding: 20px;

        article {
            margin-top: 20px;
            display: flex;

            @media screen and (max-width: 900px) {
                & {
                    flex-direction: column;
                    align-items: center;
                }
            }

            .paragraph-container {
                width: 70%;
                padding: 20px;
                padding-right: 40px;
                text-align: center;
                vertical-align: middle;

                a {
                    font-size: 25px;
                }

                p,
                strong {
                    font-size: 25px;
                    color: white;
                    z-index: 10000000;
                }

                @media screen and (min-width: 1024px) {
                    & {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                }
                
                @media screen and (max-width: 768px) {
                    & {
                        margin-top: 50px;
                        width: 100%;
                        order: 2;
                        padding: 0;
                    }
                }
            }

            figure {
                @media screen and (max-width: 768px) {
                    & {
                        width: 100%;
                        order: 1;
                    }
                }

                width: 60%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-width: 450px;
                    border: 10px solid #0048c5b5;
                    transition: transform 0.3s ease;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.05);
                    }

                    @media screen and (max-width: 768px) {
                    & {
                        max-width: 300px;
                    }
                }
                }
            }
        }

        .technologies {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px 0;
        }
    }
</style>