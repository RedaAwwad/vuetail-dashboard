<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useI18n } from 'vue-i18n';

    import Container from '@/components/ui/Container.vue';
    import Card from '@/components/ui/Card.vue';
    import BtnIcon from '@/components/buttons/BtnIcon.vue';

    const { t } = useI18n();
</script>

<template>
    <Container>
        <div class="flex justify-center items-center h-[calc(100vh-2rem)]">
            <Card class="w-[700px] max-w-full py-10">
                <div class="text-center mb-6">
                    <div class="flex justify-center mb-6">
                        <RouterLink :to="{ name: 'dashboard' }" title="Go to the Dashboard">
                            <img
                                width="280"
                                class="w-[225px] sm:w-[280px]"
                                src="@/assets/imgs/logo.png"
                                alt="logo"
                            />
                        </RouterLink>
                    </div>
                    <h1 class="mb-4 py-4 text-3xl font-bold dark:text-white">
                        {{ t('aboutTheProjectHeading') }}
                    </h1>
                    <p class="max-w-lg mx-auto text-base leading-relaxed">
                        This project is a dashboard for multipurpose usage I developed using vue3, vite,
                        typescript, tailwindcss and more.
                    </p>
                </div>

                <ul class="flex items-center justify-center gap-x-2 pt-4">
                    <li>
                        <BtnIcon
                            href="https://github.com/RedaAwwad/vuetail-dashboard"
                            target="_blank"
                            icon="cilLink"
                            icon-width="1.5rem"
                            icon-height="1.5rem"
                            title="Github Repo"
                        />
                    </li>
                    <li>
                        <BtnIcon
                            href="https://github.com/RedaAwwad/vuetail-dashboard"
                            target="_blank"
                            icon="cibGithub"
                            icon-width="1.5rem"
                            icon-height="1.5rem"
                            title="My Github"
                        />
                    </li>
                    <li>
                        <BtnIcon
                            href="https://github.com/RedaAwwad/vuetail-dashboard"
                            target="_blank"
                            icon="cibLinkedin"
                            icon-width="1.5rem"
                            icon-height="1.5rem"
                            title="Linkedin"
                        />
                    </li>
                    <li>
                        <BtnIcon
                            href="https://github.com/RedaAwwad/vuetail-dashboard"
                            target="_blank"
                            icon="cibWhatsapp"
                            icon-width="1.5rem"
                            icon-height="1.5rem"
                            title="Whatsapp"
                        />
                    </li>
                    <li>
                        <BtnIcon
                            href="https://github.com/RedaAwwad/vuetail-dashboard"
                            target="_blank"
                            icon="cibFacebook"
                            icon-width="1.5rem"
                            icon-height="1.5rem"
                            title="Facebook"
                        />
                    </li>
                </ul>
            </Card>
        </div>
    </Container>
</template>
