<template>
    <!-- App wrapper -->
    <div class="app-wrapper">
        <canvas id="matrix"></canvas>

        <div class="content">
            <!-- Content -->
            <main class="home">
                <Jumbotron />

                <About class="home__section" />

                <!-- Brands section -->
                <section class="brands_section" id="brands">
                    <Heading text="Brands"></Heading>

                    <p>This is a pretty detailed list of the brands I've worked with during my career up until now.</p>

                    <div class="brands_section__content brands__content">
                        <BrandCard v-for="(brand, index) in brands" :key="index" :brand="brand"/>
                    </div>
                </section>

                <!-- Projects section -->
                <section class="project_section" id="projects">
                    <Heading text="Projects"></Heading>

                    <p>Unfortunately, most of the projects I've worked on during my career are covered by non-disclosure agreements. Here are some <b>VERY</b> old samples.</p>

                    <div class="project_section__content projects__content">
                        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"/>
                    </div>
                </section>

                <!-- Contact section -->
                <section class="home__section" id="contact">
                    <Heading text="Contact me"></Heading>

                    <div class="home__section__content contact__content">
                        <p>
                            Feel free to send me an e-mail regarding everything from business
                            enquiries to feedback about my portfolio site. I will also consider freelance opportunities.
                        </p>

                        <b-button
                            class="home__cta mail-button scale-on-hover"
                            pill
                            variant="primary"
                            href="mailto:eduardo.mecchia.dev@gmail.com"
                        >Send Mail</b-button>

                        <ul class="social-media">
                            <li>You can reach me through social media, too!</li>
                            
                            <!-- First instance of social media component -->
                            <li class="social-media-icon" id="linkedin"><a href="https://linkedin.com/in/eduardomecchiafernandez"><img src="~/assets/svg/linkedin.svg"></a></li>
                            <li class="social-media-icon" id="instagram"><a href="https://instagram.com/eduardomecchiafernandez"><img src="~/assets/svg/instagram.svg"></a></li>
                            <li class="social-media-icon" id="github"><a href="https://github.com/eduardomecchiafernandez"><img src="~/assets/svg/github.svg"></a></li>
                            <li class="social-media-icon" id="twitter"><a href="https://twitter.com/eduardomecchiaf"><img src="~/assets/svg/x.svg"></a></li>
                        </ul>
                    </div>
                </section>
            </main>

            <StandardFooter />
        </div>
    </div>
</template>

<script>
import Project from '../components/models/Project';
import Brand from '../components/models/Brand';

export default {
    data() {
        return {
            brands: [
                new Brand(
                    "IndieGala",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/images/brands/indiegala.png",
                    "https://indiegala.com",
                    "https://indiegala.com"
                ),
                new Brand(
                    "Accenture",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/svg/accenture.svg",
                    "https://accenture.com",
                    "https://accenture.com"
                ),
                new Brand(
                    "Prada",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/svg/prada.svg",
                    "https://prada.com",
                    "https://prada.com"
                ),
                new Brand(
                    "ALTEN",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/svg/alten.svg",
                    "https://altem.com",
                    "https://altem.com"
                ),
                new Brand(
                    "Aruba",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/svg/aruba-it.svg",
                    "https://aruba.it",
                    "https://aruba.it"
                ),
                new Brand(
                    "Business Integration Partners",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/images/bip.jpg",
                    "https://bip.it",
                    "https://bip.it"
                ),
                new Brand(
                    "Octostar",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "./assets/images/octostar.jpg",
                    "https://octostar.com",
                    "https://octostar.com"
                ),
            ],
            projects: [
                new Project(
                    "Guess the Number",
                    "Small application built over the course of a weekend with Electron for the first HR test of my life",
                    "guess-the-number.png",
                    "https://drive.google.com/file/d/1USGqq7_gAJyrzaA-ZlHqvfnMFe_EG9gd/view?usp=sharing",
                    ["HTML", "CSS", "Electron"],
                    "https://github.com/eduardomecchia/guess-the-number"
                ),

                new Project(
                    "Eduardo's Task Tracker",
                    "A responsive single page application built with Vue.js to familiarize myself with Vue CLI and keep track of what I have to watch/read/etc.",
                    "task-tracker.png",
                    "https://eduardomecchia.github.io/todos/",
                    ["HTML", "CSS", "Vue.js"],
                    "https://github.com/eduardomecchia/todos"
                ),

                new Project(
                    "Boolflix",
                    "Netflix-inspired movie database built with Vue.js",
                    "boolflix.jpg",
                    "https://edu-boolflix.netlify.app/",
                    ["HTML", "CSS", "Vue.js"],
                    "https://github.com/eduardomecchia/vue-boolflix"
                ),

                new Project(
                    "Boolzapp",
                    "Simple, interactive Vue replica of WhatsApp",
                    "boolzapp.jpg",
                    "https://edu-boolzapp.netlify.app/",
                    ["HTML", "CSS", "Vue.js"],
                    "https://github.com/eduardomecchia/vue-boolzapp"
                )
            ]
        };
    },

    methods: {
    },

    mounted() {
        // getting canvas by Boujjou Achraf
        const matrixCanvas = document.getElementById("matrix");
        const context = matrixCanvas.getContext("2d");

        // making the canvas full screen
        matrixCanvas.height = window.innerHeight;
        matrixCanvas.width = window.innerWidth;

        let matrix = "אבגדהוזחטיכלמנסעפצקרשת";

        // converting the string into an array of single characters
        matrix = matrix.split("");

        const fontSize = 16;
        const columns = matrixCanvas.width / fontSize; //number of columns for the rain

        // an array of drops - one per column
        const drops = [];

        // x below is the x coordinate
        // 1 = y coordinate of the drop (same for every drop initially)
        for (let x = 0; x < columns; x++) {
            drops[x] = 1; 
        }

        // drawing the characters
        function draw() {
            // Black BG for the canvas
            // translucent BG to show trail
            context.fillStyle = "rgba(0, 0, 0, 0.04)";
            context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

            context.fillStyle = "#4000ac"; // Text color
            context.font = fontSize + "px arial";

            // looping over drops
            for (let i = 0; i < drops.length; i++) {
                // a random character to print
                const text = matrix[Math.floor(Math.random() * matrix.length)];

                // x = i*font_size, y = value of drops[i]*font_size
                context.fillText(text, i * fontSize, drops[i] * fontSize);

                // sending the drop back to the top randomly after it has crossed the screen
                // adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i]*fontSize > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);
    }
};
</script>

<style lang="scss" scoped>
    body { background: black; }

    canvas {
        display: block;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
    }

    .home {
        @media screen and (max-width: 768px) {
            & {
                padding-left: 15px;
                padding-right: 15px;
            }
        }
        
        padding-left: 80px;
        padding-right: 80px;

        &__learn-more {
            cursor: pointer;
            font-weight: bolder;
        }

        &__cta { }

        &__section {
            margin-top: 45vh;

            p {
                text-align: center;
                margin-bottom: 48px;
            }
        }

        .contact {
            &__content {
                display: flex;
                flex-direction: column;
                text-align: center;
    
                .mail-button {
                    align-self: center;
                }
    
                .social-media {
                    margin-bottom: 50px;

                    li:first-child {
                        margin-bottom: 30px;
                    }

                    li:not(:first-child) {
                        display: inline-block;
                        margin: 0 10px;
                        
                        img {
                            color: white;
                            height: 32px;
                            width: 32px;
                        }
                    }
                    
                    margin-top: 50px;
                    list-style: none;

                    #github {
                        img {
                            filter: invert(100%);
                        }
                    }
                }
            }
        }

        .brands {
            &__content {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: flex-start;
                margin-top: 20px;
                
                @media screen and (max-width: 768px) {
                    & {
                        padding: 20px;
                    }
                }
            }
        }

        .projects {
            &__content {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: flex-start;
                margin-top: 20px;
                
                @media screen and (max-width: 768px) {
                    & {
                        padding: 20px;
                    }
                }
            }
        }
    }

    .jumbotron__heading, .content {
        z-index: 10000000;
        color: white;
    }
</style>