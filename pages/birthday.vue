<template>
    <div class="app-wrapper">
        <canvas id="matrix"></canvas>
        <ThreeScene />

        <!-- Hidden form for Netlify to detect -->
        <form name="birthday-rsvp" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="text" name="response" />
            <input type="text" name="timestamp" />
        </form>

        <div class="content">
            <main class="birthday">
                <!-- Login State -->
                <div v-if="!isLoggedIn && !hasResponded" class="birthday__card slide-in-from-left">
                    <div class="birthday__icon">🎂</div>
                    <h1 class="birthday__title">You're Invited!</h1>
                    <p class="birthday__subtitle">Eduardo's Birthday Party</p>
                    
                    <form @submit.prevent="handleLogin" class="birthday__form">
                        <label for="name" class="birthday__label">What's your name?</label>
                        <input 
                            type="text" 
                            id="name" 
                            v-model="nameInput" 
                            class="birthday__input"
                            placeholder="Enter your first name"
                            autocomplete="off"
                            required
                        />
                        <p v-if="errorMessage" class="birthday__error">{{ errorMessage }}</p>
                        <button type="submit" class="btn-modern birthday__submit">
                            <span>Continue</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </form>

                    <a href="tel:+393519839210" class="birthday__help">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Having trouble? Call Eduardo
                    </a>
                </div>

                <!-- Response State -->
                <div v-if="isLoggedIn && !hasResponded" class="birthday__card slide-in-from-left">
                    <div class="birthday__icon">🎉</div>
                    <h1 class="birthday__title">Hey, {{ guestName }}!</h1>
                    <p class="birthday__subtitle">Will you be there?</p>
                    
                    <div class="birthday__actions">
                        <button @click="confirmPresence" class="btn-modern birthday__confirm">
                            <span>Yes, I'll be there!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </button>
                        <button @click="declineInvitation" class="btn-modern birthday__decline">
                            <span>Sorry, I can't make it</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>

                <!-- Confirmed State -->
                <div v-if="hasResponded && responseType === 'confirmed'" class="birthday__card slide-in-from-left">
                    <div class="birthday__icon">🥳</div>
                    <h1 class="birthday__title">Awesome!</h1>
                    <p class="birthday__message">
                        Thanks, {{ guestName }}! Can't wait to see you there!
                    </p>
                    <p class="birthday__note">
                        I'll send you more details soon.
                    </p>
                </div>

                <!-- Declined State -->
                <div v-if="hasResponded && responseType === 'declined'" class="birthday__card slide-in-from-left">
                    <div class="birthday__icon">💔</div>
                    <h1 class="birthday__title">That's okay!</h1>
                    <p class="birthday__message">
                        Thanks for letting me know, {{ guestName }}. 
                        We'll miss you, but hopefully we'll catch up soon!
                    </p>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BirthdayPage',
    
    // Prevent this page from appearing in any navigation
    layout: 'default',
    
    data() {
        return {
            // Guest list - add your 42 invited guests here
            // ADD CLAUDIA
            invitedGuests: [
                'Paolo',
                "Andrea",
                "Ilaria",
                "Simone",
                "Simone",
                "Nicolò",
                "Federico",
                "Francesco",
                "Francesco",
                "Lara",
                "Emanuele",
                "Danilo",
                "Manuel",
                "Vincenzo",
                "Emanuelcarlo",
                "Beatrice",
                "Claudio",
                "Ivan",
                "Giuliano",
                "Yuri",
                "Davide",
                ["Artyom", "Artem"],
                "Federico",
                "Vanessa",
                "Diego",
                "Livia",
                "Francesco",
                "Giovanni",
                "Aurora",
                "Martina",
                "Martina",
                "Lia",
                "Diego",
                "Noemi",
                "Andrei",
                "Claudia",
                "Giosuè",
                "Giorgia",
                "Mirko",
                "Jacopo",
                "Lorenzo",
                "Giacomo",
                "Clarissa",
                "Luca",
                "Veronica",
                "Hakim",
                "Mirko",
                "Luca",
                "Andrea",
                "Mattia",
                "Sara",
                "Sara",
                "Alberto",
                "Matteo",
                "Christiane",
                "Federica",
                "Alessandra",
                "Marco",
                "Carol",
                "Desirée",
                ["Eliza", "Elisa"],
                ["Ana Maria", "Anamaria"],
                "Valerio",
                "Morgan",
                "Beatrice",
                "Gianmarco",
                "Davide",
                "Zoe",
                "Leonardo"
            ],
            nameInput: '',
            guestName: '',
            isLoggedIn: false,
            hasResponded: false,
            responseType: null, // 'confirmed' or 'declined'
            errorMessage: '',
            alreadyVoted: false
        }
    },

    mounted() {
        this.initMatrix();
        this.checkPreviousResponse();
    },

    methods: {
        checkPreviousResponse() {
            // Check if user has already responded
            const savedResponse = localStorage.getItem('birthday-rsvp');
            if (savedResponse) {
                try {
                    const data = JSON.parse(savedResponse);
                    this.guestName = data.name;
                    this.responseType = data.response;
                    this.isLoggedIn = true;
                    this.hasResponded = true;
                    this.alreadyVoted = true;
                } catch (e) {
                    // Invalid data, clear it
                    localStorage.removeItem('birthday-rsvp');
                }
            }
        },

        saveResponse(name, response) {
            const data = {
                name: name,
                response: response,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('birthday-rsvp', JSON.stringify(data));
        },

        // Normalize text by removing accents and converting to lowercase
        normalizeText(text) {
            return text
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        },

        handleLogin() {
            const inputName = this.nameInput.trim();
            
            if (!inputName) {
                this.errorMessage = 'Please enter your name';
                return;
            }
            
            const normalizedInput = this.normalizeText(inputName);
            
            // DEBUG: Log input
            console.log('Input:', inputName);
            console.log('Normalized input:', normalizedInput);
            console.log('Guest list:', this.invitedGuests);

            // Check against guest list (handles both strings and arrays of aliases)
            let matchedGuest = null;
            
            for (const guest of this.invitedGuests) {
                if (Array.isArray(guest)) {
                    // Check all aliases in the array
                    const match = guest.find(
                        alias => this.normalizeText(alias) === normalizedInput
                    );
                    if (match) {
                        matchedGuest = guest[0]; // Use the primary name (first in array)
                        break;
                    }
                } else {
                    // Simple string comparison
                    const normalizedGuest = this.normalizeText(guest);
                    console.log(`Comparing "${normalizedGuest}" with "${normalizedInput}":`, normalizedGuest === normalizedInput);
                    if (normalizedGuest === normalizedInput) {
                        matchedGuest = guest;
                        break;
                    }
                }
            }
            
            if (matchedGuest) {
                this.guestName = matchedGuest;
                this.isLoggedIn = true;
                this.errorMessage = '';
            } else {
                this.errorMessage = "Hmm, I don't see your name on the list. Try again or contact Eduardo!";
            }
        },
        
        async confirmPresence() {
            await this.submitResponse('confirmed');
            this.hasResponded = true;
            this.responseType = 'confirmed';
        },
        
        async declineInvitation() {
            await this.submitResponse('declined');
            this.hasResponded = true;
            this.responseType = 'declined';
        },
        
        async submitResponse(response) {
            const formData = new FormData();
            formData.append('form-name', 'birthday-rsvp');
            formData.append('name', this.guestName);
            formData.append('response', response);
            formData.append('timestamp', new Date().toISOString());
            
            try {
                await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                console.log(`${this.guestName} ${response} - submitted to Netlify Forms`);
            } catch (error) {
                console.error('Error submitting response:', error);
                // Still show success to user even if submission fails
            }
            
            // Save to localStorage to prevent duplicate submissions
            this.saveResponse(this.guestName, response);
        },

        initMatrix() {
            const matrixCanvas = document.getElementById("matrix");
            if (!matrixCanvas) return;
            
            const context = matrixCanvas.getContext("2d");

            matrixCanvas.height = window.innerHeight;
            matrixCanvas.width = window.innerWidth;

            // Fill canvas with black immediately
            context.fillStyle = "#000000";
            context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

            window.addEventListener('resize', () => {
                matrixCanvas.height = window.innerHeight;
                matrixCanvas.width = window.innerWidth;
                context.fillStyle = "#000000";
                context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            });

            let matrix = "אבגדהוזחטיכלמנסעפצקרשת";
            matrix = matrix.split("");

            const fontSize = 16;
            const columnWidth = 12;
            const columns = matrixCanvas.width / columnWidth;

            const drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = Math.floor(Math.random() * (matrixCanvas.height / fontSize));
            }

            function draw() {
                context.fillStyle = "rgba(0, 0, 0, 0.04)";
                context.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

                context.fillStyle = "#4000ac";
                context.font = fontSize + "px arial";

                for (let i = 0; i < drops.length; i++) {
                    const text = matrix[Math.floor(Math.random() * matrix.length)];
                    context.fillText(text, i * columnWidth, drops[i] * fontSize);

                    if (drops[i]*fontSize > matrixCanvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }

            setInterval(draw, 35);
        }
    },
    
    head() {
        return {
            title: "You're Invited! 🎂",
            meta: [
                { name: 'robots', content: 'noindex, nofollow' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    min-height: 100vh;
}

canvas {
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    pointer-events: none;
}

.content {
    position: relative;
    z-index: 10;
    color: white;
    background: transparent;
}

.birthday {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;

    &__card {
        background: rgba(10, 10, 30, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 48px;
        max-width: 480px;
        width: 100%;
        text-align: center;
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(139, 92, 246, 0.1);

        @media screen and (max-width: 768px) {
            padding: 32px 24px;
        }
    }

    &__icon {
        font-size: 64px;
        margin-bottom: 24px;
        animation: float 3s ease-in-out infinite;
    }

    &__title {
        font-family: var(--font-heading);
        font-size: 36px;
        font-weight: 700;
        color: white;
        margin: 0 0 12px 0;

        @media screen and (max-width: 768px) {
            font-size: 28px;
        }
    }

    &__subtitle {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 32px 0;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__label {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
    }

    &__input {
        width: 100%;
        padding: 16px 20px;
        font-size: 18px;
        font-family: inherit;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: white;
        outline: none;
        transition: all 0.3s ease;

        &::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }

        &:focus {
            border-color: #8b5cf6;
            background: rgba(139, 92, 246, 0.1);
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }
    }

    &__error {
        color: #f87171;
        font-size: 14px;
        margin: 0;
        text-align: left;
    }

    &__submit {
        margin-top: 8px;
        width: 100%;
        justify-content: center;
    }

    &__help {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 20px;
        padding: 8px 16px;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        transition: all 0.3s ease;

        svg {
            opacity: 0.7;
        }

        &:hover {
            color: rgba(255, 255, 255, 0.8);
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.05);
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 32px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
    }

    &__detail {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);

        &-icon {
            font-size: 20px;
        }
    }

    &__actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__confirm {
        width: 100%;
        justify-content: center;
        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%) !important;

        &:hover {
            box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4) !important;
        }
    }

    &__decline {
        width: 100%;
        justify-content: center;
        background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%) !important;

        &:hover {
            box-shadow: 0 8px 25px rgba(107, 114, 128, 0.4) !important;
        }
    }

    &__message {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.7;
        margin: 0 0 16px 0;
    }

    &__note {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
        margin: 0;
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
</style>
