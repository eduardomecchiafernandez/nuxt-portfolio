<template>
    <div class="divider">
        <div class="divider__line"></div>
        <div class="divider__glow"></div>
    </div>
</template>

<style lang="scss" scoped>
    .divider {
        position: relative;
        width: 120px;
        height: 4px;
        margin: 16px auto 0;

        &__line {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, 
                transparent 0%,
                #0066ff 20%,
                #8b5cf6 50%,
                #0066ff 80%,
                transparent 100%
            );
            border-radius: 4px;
            background-size: 200% 100%;
            animation: gradient-flow 3s ease infinite;
        }

        &__glow {
            position: absolute;
            inset: -4px;
            background: linear-gradient(90deg, 
                transparent 0%,
                rgba(0, 102, 255, 0.4) 20%,
                rgba(139, 92, 246, 0.4) 50%,
                rgba(0, 102, 255, 0.4) 80%,
                transparent 100%
            );
            border-radius: 8px;
            filter: blur(8px);
            background-size: 200% 100%;
            animation: gradient-flow 3s ease infinite;
        }
    }

    @keyframes gradient-flow {
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